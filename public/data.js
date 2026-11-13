// TASTE Shot List — brief content.
// Source: "Photography List (1).xlsx" (tabs: Required Marketing Shots, Required Sales Shots, Quick Turnaround),
// the Taste Chef's Hub schedule poster, and the crew schedule. Edit here to change the lists.
// Times are minutes after midnight, Abu Dhabi time (13:30 -> 13*60+30).
const T = (h, m = 0) => h * 60 + m;

window.BRIEF = {
  event: "Taste of Abu Dhabi 2026",
  tz: "Asia/Dubai",

  days: [
    { key: "fri", label: "FRI 13", long: "Friday, 13 November", date: "2026-11-13" },
    { key: "sat", label: "SAT 14", long: "Saturday, 14 November", date: "2026-11-14" },
    { key: "sun", label: "SUN 15", long: "Sunday, 15 November", date: "2026-11-15" },
  ],

  roles: [
    { key: "P1", label: "Photographer 1", short: "Photo 1", kind: "photo" },
    { key: "P2", label: "Photographer 2", short: "Photo 2", kind: "photo" },
    { key: "VID", label: "Videographer", short: "Video", kind: "video" },
    { key: "TEAM", label: "Coordinator / team", short: "Team", kind: "team" },
  ],

  crew: {
    fri: [{ role: "P1", from: T(13, 30), to: T(18) }, { role: "P2", from: T(16), to: T(20) }, { role: "VID", from: T(16), to: T(21) }],
    sat: [{ role: "P1", from: T(14), to: T(18) }, { role: "P2", from: T(16), to: T(20) }, { role: "VID", from: T(16), to: T(21) }],
    sun: [{ role: "P1", from: T(14), to: T(18) }, { role: "P2", from: T(16), to: T(20) }],
  },

  // Taste Chef's Hub — 30-minute sessions
  chefsHub: {
    fri: [
      [T(14, 30), "Sergio Freitas", "ICCA Chef"], [T(15, 30), "Louis Olland"], [T(16, 30), "Vanessa Bayma"],
      [T(17, 30), "Rachel Allen"], [T(18, 30), "Jenny Morris"], [T(19, 30), "Amna Al Hashemi"],
      [T(20, 30), "Buaban Chokmontin", "Desert Lotus"], [T(21, 30), "Jenny Morris"], [T(22, 30), "Cristobal Ruiz", "ICCA Chef"],
    ],
    sat: [
      [T(14, 30), "Bilal Louna", "ICCA Chef"], [T(15, 30), "Buaban Chokmontin", "Desert Lotus"], [T(16, 30), "Tomlin Graham", "Ting Irie"],
      [T(17, 30), "Gino D'Acampo"], [T(18, 30), "Rachel Allen"], [T(19, 30), "Faisal Naser", "Lento"],
      [T(20, 30), "Thomas Straker"], [T(21, 30), "Jenny Morris"], [T(22, 30), "Nino Salierno", "ICCA Chef"],
    ],
    sun: [
      [T(14, 30), "Omkar Padwal", "ICCA Chef"], [T(15, 30), "Jenny Morris"], [T(16, 30), "Gino D'Acampo"],
      [T(17, 30), "Rachel Allen"], [T(18, 30), "Thomas Straker"], [T(19, 30), "Louis Olland"], [T(20, 30), "Sameer Ahmed", "ICCA Chef"],
    ],
  },

  // Quick Turnaround tab. `at` = [start, end] for timed items; `also` = crew that must cover it.
  quickNote: "Share around 3 photos of each so we can do a carousel post. Mix of stand design, activities and guests engaging.",
  quick: {
    fri: [
      { id: "q/fri/bmw", label: "BMW Stand / models" },
      { id: "q/fri/mini", label: "MINI Stand / models" },
      { id: "q/fri/masafi", label: "Masafi Stand" },
      { id: "q/fri/mls", label: "MLS Stand" },
      { id: "q/fri/shot", label: "SHOT Stand" },
      { id: "q/fri/shot-barista", label: "SHOT Coffee Barista Workshop" },
      { id: "q/fri/spain", label: "Spain Stand" },
      { id: "q/fri/keeta", label: "Keeta Stand" },
      { id: "q/fri/pasta", label: "Pasta Making Class (Jo's kitschen)", when: "4:00 PM and 5:00 PM", at: [T(16), T(17, 30)] },
      { id: "q/fri/todd", label: "Todd at Cooking Class", when: "5:30 PM · Chefs Hub", at: [T(17, 30), T(18)] },
      { id: "q/fri/alex-rachel", label: "Alex at Rachel's Cooking Class", when: "5:30 PM · Chefs Hub", at: [T(17, 30), T(18)] },
      { id: "q/fri/rachel", label: "Rachel Allen Cook Session", when: "5:30 PM · Chefs Hub (per Chef's Hub schedule)", at: [T(17, 30), T(18)] },
      { id: "q/fri/gino-bbq", label: "Gino D'Acampo bbq session", when: "7:30 – 8:00 PM · Firepit", at: [T(19, 30), T(20)] },
      { id: "q/fri/meeting", label: "Alex, Tod and Gino Meeting", when: "8:35 PM · Chef's lounge · video as well", at: [T(20, 35), T(21)], video: true },
      { id: "q/fri/crowds", label: "Crowds enjoying" },
      { id: "q/fri/busy", label: "Showing how busy the event is" },
      { id: "q/any/sunset", label: "Crowds / people with nice sunset", when: "Friday or Saturday" },
    ],
    sat: [
      { id: "q/sat/straker", label: "Thomas Straker's session", when: "6:30 – 7:00 PM · Cook School", at: [T(18, 30), T(19)] },
      { id: "q/sat/crowds", label: "Crowds enjoying" },
      { id: "q/sat/busy", label: "Showing how busy the event is" },
      { id: "q/any/sunset", label: "Crowds / people with nice sunset", when: "Friday or Saturday" },
    ],
    sun: [],
  },

  // Required Marketing Shots tab
  marketing: [
    { title: "Guests & Ambiance", items: [
      "Entrance experience showing event branding",
      "Entrance experience – guests getting their RFID bands",
      "Candid shots inside event – smiling, laughing",
      "Interacting with exhibitors (at chalets)",
      "Interacting with activations (custom built)",
      "Interacting with artisan market vendors (at Artisan Market)",
      "At culinary sessions (as per schedule)",
      "Multiple wide angles showing busy crowds",
      "Guests dancing and laughing with busy crowds in back",
      "Entrance experience",
      "Guests posing with TASTE block letters",
      "Guests getting their voucher wristbands",
      "Guests eating (no garbage, dirty napkins or dirty plates in shots)",
    ] },
    { title: "Chefs Sessions & Hosts", items: [
      "Gino D'Acampo", "Rachel Allen", "Thomas Straker", "Kids Cooking Sessions with Amna (Cook School)",
      "Faisal Nasser (Saturday)", "Chef Rich", "Chef Jenny Morris",
    ] },
    { title: "Food & Restaurants", items: [
      "Food spread on picnic tables",
      "Restaurant close up of guests interacting",
      "Guests queuing at restaurants making event look busy",
      "Hand holding a plate of food in front of the restaurant, with the restaurant in the background",
      "Guests carrying food",
      "Chefs at their restaurants",
    ] },
    { title: "VIP Lounge", items: [
      "Guests sitting in VIP lounge – laughing, smiling", "Dancing", "DJs and Piano Man",
      "Hostesses interacting with guests", "Guests receiving and using Taste hand fans",
    ] },
    { title: "Kids", items: [
      "Kids doing treasure hunt cards",
      "Kids in the arts and crafts chalets (when full) showing structure and branding",
      "Close ups of kids enjoying the rides, with festival in background",
    ] },
    { title: "Stages (both sides)", items: [
      "Artists performing in day", "Artists performing at night", "Guests dancing and interacting",
      "From behind: guests in front of stage and artists performing",
    ] },
    { title: "Exhibitors (chalets and custom builds)", items: ["Guests interacting with exhibitors", "Activations"] },
    { title: "Cook School, Chefs Hub", items: [
      "Chefs cooking with sponsor branding in back", "Close ups of chefs cooking", "Chefs and hosts together",
      "Chefs and guests interacting", "Food cooking closeups", "Wide angle of feature showing branding and structure",
      "Wide angle of feature (during session)", "Full feature with guests inc. children", "Candid shots of guests enjoying",
    ] },
    { title: "Keeta Fire Pit", items: [
      "Chefs cooking", "Chef and host together candid", "Guests cooking", "Chef and guests interacting",
      "Food cooking closeups", "Shots with lots of fire (last 10 mins of the sessions)",
    ] },
    { title: "Bars", items: ["Guests enjoying"] },
  ],

  // Required Sales Shots tab. grid:true = short names shown as two-column chips. add:true = team can add lines.
  sales: [
    { title: "Entrance", items: [
      "Entrance arch", "Roundabout showing flags and entrance – wide angle", "Sponsor walls", "BMW test drive",
      "Venue map", "TASTE block letters (2 sets)",
    ] },
    { title: "Restaurants", grid: true, items: [
      "99 | Tanjun", "The Director's Club", "Paradiso", "Desert Lotus", "Soraya", "Villa Toscana", "Lento", "Ting Irie",
      "Oak Room", "Marcella", "Almayass", "Pincode", "Beetza", "Ergon", "La Broche", "Ramen Bar",
    ] },
    { title: "VIP Lounge", items: ["Wide angle of full lounge", "Front garden", "Inside branding", "Chefs corner", "Back garden"] },
    { title: "Kids Zone", items: ["Wide angle showing full size of zone", "Entrance arch", "Rides & ticketing system"] },
    { title: "Stages (both sides)", items: ["Wide shot with surrounding areas", "Branding"] },
    { title: "Exhibitors (Chalet)", grid: true, add: true, items: [
      "Tres Amis (Pasta Workshop)", "Yakult", "Kokotaj", "Monica Bakes", "Rescube", "Yala Kombucha", "Chamoy Drip", "ICCA",
      "Bakenotes Artisanal", "US Meat", "Dibba Bay", "Rype", "Pure Red Gold", "MLS", "SHOT", "Hallnara",
      "Synaxis Food (Le Petit Chocolatier Belge)", "Delighted Bakery", "Mogu Mushroom", "KidzApp", "Best Bites",
      "Elite Horizon", "Smooking Beard", "Exit 10", "Adore",
    ] },
    { title: "Exhibitors (Space Only)", grid: true, add: true, items: [
      "Cento Gelato", "Al Ain Farms", "Chocomail", "Rubicon", "NutriCook", "Chop Value", "SHOT", "Shahi Darb",
      "Black & Decker", "Burnt", "Squishy Lab", "ARN", "KEETA", "BMW", "Mini", "MASAFI", "Drink Dry", "Pepsi", "Artisan",
      "Camps Kitchen", "Inzi Eats", "Crumbs & pops", "Solum", "Snowie Time", "Pure Soil", "Prairie Bakes",
      "House of Dilmun", "Baked by betssy", "Flufftopia", "Rashtion",
    ] },
    { title: "Features", items: [
      "Chefs Hub – wide angle from front", "Chefs Hub – wide angle from chef's counter",
      "Cook School – wide angle from front", "Cook School – wide angle from chef's counter",
      "Keeta Firepit – entrance arch and surrounding", "Keeta Firepit – back wall", "Keeta Firepit – view from chefs counter",
      "Coffee Workshops (white chalet) wide angle with surroundings", "Coffee Workshops – branding",
      "Pasta workshops – wide angle and surroundings", "Pasta workshops – close up of counter",
      "Visit Spain – wide angle and surroundings", "Wine Bar",
    ] },
    { title: "Bars", note: "Wide angle showing branding and activation", items: [
      "Moretti Bar", "Bacardi Bar", "VIP bars", "Bottle Store Bar", "Jack Daniels", "El Jimador",
    ] },
  ],

  // Page 1 of the brief
  outputs: {
    video: [
      { title: "Promo video · 45 sec", text: "Recaps the guest experience and becomes next year's consumer-facing promo. More artistic and aesthetic." },
      { title: "Sales video · 45 sec", text: "Shows the experience to sponsors and future clients. More wide angles, volume of crowds, good branding, structure examples and testimonials from chefs." },
    ],
    photo: [
      "Model shots will be used for key visual packs and hero images for the next events.",
      "Avoid shots where the point of focus is staff members.",
      "Avoid shots where the venue looks unclean or is being cleaned (cleaners removing garbage or clearing bins).",
      "Always shoot into the venue, not towards the perimeters. Avoid heras fencing, police barriers and back-of-house entry points.",
    ],
    notes: [
      "You do not have to stay for a whole culinary or entertainment session, as long as you get the shots itemised in the lists.",
      "Firepit sessions are most impressive in the last 10 minutes of the session.",
    ],
  },
};
