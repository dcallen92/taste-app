// TASTE Shot List — Cloudflare Worker + Durable Object.
// The Worker serves the static app from ./public and a tiny JSON API under /api/.
// One Durable Object ("Board") holds the shared checklist state, so every phone sees the same ticks.
import { DurableObject } from "cloudflare:workers";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

// Compares in constant time so a wrong password cannot be guessed character by character.
const eq = (a, b) => {
  if (a.length !== b.length) return 0;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0 ? 1 : 0;
};

const clean = (v, max) => String(v ?? "").replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max);

export class Board extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.ready = ctx.blockConcurrencyWhile(async () => {
      this.version = (await ctx.storage.get("version")) || 0;
      this.ticks = Object.fromEntries(
        [...(await ctx.storage.list({ prefix: "t:" }))].map(([k, v]) => [k.slice(2), v])
      );
      this.extras = [...(await ctx.storage.list({ prefix: "x:" }))].map(([, v]) => v);
    });
  }

  snapshot() {
    return { v: this.version, now: Date.now(), ticks: this.ticks, extras: this.extras };
  }

  async state(since) {
    await this.ready;
    if (since !== null && Number(since) === this.version) return { v: this.version, now: Date.now(), same: true };
    return this.snapshot();
  }

  // ops: [{id, done, by, name, at}]
  async tick(ops) {
    await this.ready;
    const writes = {}, deletes = [];
    for (const op of ops.slice(0, 200)) {
      const id = clean(op.id, 120);
      if (!id) continue;
      const at = Number(op.at) || Date.now();
      const cur = this.ticks[id];
      if (cur && cur.at > at) continue; // a newer change already landed — keep it
      if (op.done) {
        const t = { by: clean(op.by, 12), name: clean(op.name, 40), at: Math.min(at, Date.now()) };
        this.ticks[id] = t; writes["t:" + id] = t;
      } else if (cur) {
        delete this.ticks[id]; deletes.push("t:" + id);
      }
    }
    if (Object.keys(writes).length || deletes.length) {
      this.version++; writes.version = this.version;
      await this.ctx.storage.put(writes);
      if (deletes.length) await this.ctx.storage.delete(deletes);
    }
    return this.snapshot();
  }

  async addExtra(x) {
    await this.ready;
    const label = clean(x.label, 90), sec = clean(x.sec, 80);
    if (!label || !sec || this.extras.length >= 300) return this.snapshot();
    const id = "x-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const item = { id, sec, label, by: clean(x.by, 12), name: clean(x.name, 40), at: Date.now() };
    this.extras.push(item); this.version++;
    await this.ctx.storage.put({ ["x:" + id]: item, version: this.version });
    return this.snapshot();
  }

  async removeExtra(id) {
    await this.ready;
    id = clean(id, 60);
    const before = this.extras.length;
    this.extras = this.extras.filter((e) => e.id !== id);
    if (this.extras.length !== before) {
      delete this.ticks[id]; this.version++;
      await this.ctx.storage.delete(["x:" + id, "t:" + id]);
      await this.ctx.storage.put("version", this.version);
    }
    return this.snapshot();
  }

  async reset() {
    await this.ready;
    await this.ctx.storage.deleteAll();
    this.ticks = {}; this.extras = []; this.version = Date.now() % 1e9; // never reuse an old version number
    await this.ctx.storage.put("version", this.version);
    return this.snapshot();
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);

    // Sign-in: the app sends "username:password" in x-auth. Set APP_USER / APP_PASS in wrangler.toml.
    if (env.APP_USER || env.APP_PASS) {
      const sent = String(request.headers.get("x-auth") || "");
      const i = sent.indexOf(":");
      const user = i < 0 ? "" : sent.slice(0, i), pass = i < 0 ? "" : sent.slice(i + 1);
      const ok = eq(user.toLowerCase(), String(env.APP_USER || "").toLowerCase()) & eq(pass, String(env.APP_PASS || ""));
      if (!ok) return json({ error: "sign in" }, 401);
    }

    const board = env.BOARD.get(env.BOARD.idFromName(env.BOARD_NAME || "taste-abu-dhabi-2026"));
    try {
      if (url.pathname === "/api/state" && request.method === "GET") return json(await board.state(url.searchParams.get("since")));
      if (request.method !== "POST") return json({ error: "method" }, 405);
      const body = await request.json().catch(() => ({}));
      if (url.pathname === "/api/tick") return json(await board.tick(Array.isArray(body.ops) ? body.ops : []));
      if (url.pathname === "/api/extra") return json(await board.addExtra(body));
      if (url.pathname === "/api/extra/remove") return json(await board.removeExtra(body.id));
      if (url.pathname === "/api/reset") {
        if (!env.ADMIN_CODE || body.admin !== String(env.ADMIN_CODE)) return json({ error: "admin code" }, 403);
        return json(await board.reset());
      }
      return json({ error: "not found" }, 404);
    } catch (e) {
      return json({ error: "server", detail: String(e && e.message || e) }, 500);
    }
  },
};
