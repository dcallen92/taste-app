# TASTE Shot List

Phone checklist for the Taste of Abu Dhabi 2026 photo and video crew (13–15 November).
Everyone signs in with the same login, ticks shots as they get them, and sees the rest of the team's ticks within 20 seconds.

**Login for the crew**

- Username: `inhaus`
- Password: `2022`

(Change them in `wrangler.toml` under `[vars]`, then deploy again.)

## What is in it

- **Today**: day switcher, what is on at the Chef's Hub now and next, who is on shift, and the Quick Turnaround list for that day.
- **Marketing**: the 56 shots from the "Required Marketing Shots" tab, in 10 sections.
- **Sales**: the 106 shots from the "Required Sales Shots" tab, in 9 sections. Exhibitor sections have "+ Add exhibitor".
- **Brief**: video outputs, photo rules, notes, crew schedule, full Chef's Hub schedule, share button and sign out.

Each tick shows who made it (P1, P2, VID or initials) and when. Ticks made with no signal stay on the phone and are sent when it is back online.

## Put it on Cloudflare through GitHub

Cloudflare's dashboard will not take a drag-and-drop zip for this project, because the app needs its Worker script, not just static files. Use GitHub:

1. Create a repository on GitHub (any name, for example `taste-shot-list`).
2. Unzip this folder, then on the repo page use **Add file → Upload files** and drag in the *contents*: `wrangler.toml`, `package.json`, `README.md`, and the `public` and `src` folders. `wrangler.toml` must sit at the top level of the repository, not inside another folder. Commit.
3. In the Cloudflare dashboard: **Compute (Workers) → Create → Import a repository**, pick the repo, and let it deploy. Cloudflare reads `wrangler.toml` on its own, so leave the build command empty (or `npx wrangler deploy`).
4. Cloudflare prints the address, for example `https://taste-shot-list.<your-account>.workers.dev`.

The crew login lives in `wrangler.toml`, so anyone who can see the repository can read it. That is fine for a shot checklist; if you ever want it hidden, make the repository private.

Every later push to the repository redeploys the app.

Prefer the command line? From this folder:

```bash
npx wrangler login
```

```bash
npx wrangler deploy
```

It runs on the free Workers plan (one Worker with static assets and one Durable Object).

## Share it with the crew

Send the plain address, for example `https://taste-shot-list.<your-account>.workers.dev`, plus the username and password. Nothing loads before signing in.

**Brief → Share app link with the team** sends the link from your phone. On the phone: Share → Add to Home Screen makes it open like an app. Signing in is remembered on each phone until someone taps "Sign out of this phone".

## Change the lists

All content lives in `public/data.js` (shot lists, Quick Turnaround, Chef's Hub times, crew shifts). Edit, push, and Cloudflare redeploys.
Renaming a shot clears its tick, because ticks are stored against the shot's name.

## Wipe all ticks (start clean)

```bash
curl -X POST https://<your-worker-url>/api/reset -H "content-type: application/json" -H "x-auth: inhaus:2022" -d '{"admin":"<ADMIN_CODE>"}'
```

`ADMIN_CODE` is in `wrangler.toml`. This removes every tick and every added exhibitor for everyone.

## Try it on this Mac first

```bash
npx wrangler dev --port 8799
```

Then open `http://localhost:8799` and sign in. Local ticks are separate from the live ones.

## Files

- `public/index.html`: the app (layout, styles, logic)
- `public/data.js`: the brief content
- `src/worker.js`: Cloudflare Worker, sign-in check and the shared checklist storage
- `wrangler.toml`: Cloudflare settings, crew login, admin code
