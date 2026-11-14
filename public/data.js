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

  // Session venues. Each session is [start, title, note?, end?]. Times: T(hour, minute), Abu Dhabi time.
  // `dur` = minutes per session. `approx` = the source gives start times only, so the end is a guess.
  // `loc` = map code (see `map.pins`).
  stages: [
    { key: "hub", name: "Chef's Hub", short: "Chef's Hub", loc: "A2", dur: 30, days: {
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
    } },
    { key: "cook", name: "Cook School", short: "Cook School", loc: "A1", dur: 30, days: {
      fri: [
        [T(14, 30), "Omkar Padwal", "ICCA Chef"], [T(15, 30), "Vanessa Bayma"], [T(16, 30), "Jenny Morris"],
        [T(17, 30), "Amna Al Hashemi", "Kids Cooking Session"], [T(18, 30), "Vanessa Bayma"], [T(19, 30), "Rachel Allen"],
        [T(20, 30), "Richard Stratton"], [T(21, 30), "Thinus Van Der Westhuizen", "99 | Tanjun"], [T(22, 30), "Bilal Louna", "ICCA Chef"],
      ],
      sat: [
        [T(13), "Taste & Talk with Rich", "Rachel Allen", T(14)], [T(14, 30), "Sameer Ahmed", "ICCA Chef"], [T(15, 30), "Eduardo Acuña"],
        [T(16, 30), "Amna Al Hashemi", "Kids Cooking Session"], [T(17, 30), "Jenny Morris"], [T(18, 30), "Thomas Straker"],
        [T(19, 30), "Gino D'Acampo"], [T(20, 30), "Rachel Allen"], [T(21, 30), "Thomas Straker"], [T(22, 30), "Francisco Araya", "ICCA Chef"],
      ],
      sun: [
        [T(13), "Taste & Talk with Rich", "Thomas Straker", T(14)], [T(14, 30), "Francisco Araya", "ICCA Chef"], [T(15, 30), "Thomas Straker"],
        [T(16, 30), "Amna Al Hashemi", "Kids Cooking Session"], [T(17, 30), "Thomas Straker"], [T(18, 30), "Gino D'Acampo"],
        [T(19, 30), "Rachel Allen"], [T(20, 30), "Sergio Freitas", "ICCA Chef"],
      ],
    } },
    { key: "fire", name: "Keeta Fire Pit", short: "Fire Pit", loc: "A4", dur: 30, fire: true, days: {
      fri: [
        [T(14, 30), "Sameer Ahmed", "ICCA Chef"], [T(15, 30), "Dave & Hunter", "Exit 10"], [T(16, 30), "Fred Casagrande"],
        [T(17, 30), "George Bournelis", "Soraya"], [T(18, 30), "Dave & Hunter", "Exit 10 Family Session"], [T(19, 30), "Gino D'Acampo", "Fire Pit Session"],
        [T(20, 30), "Fred Casagrande"], [T(21, 30), "Andrew Dickens & Joseph Nesbitt-Larking"], [T(22, 30), "Francisco Araya", "ICCA Chef"],
      ],
      sat: [
        [T(14, 30), "Sergio Freitas", "ICCA Chef"], [T(15, 30), "Andrew Dickens & Joseph Nesbitt-Larking"], [T(16, 30), "Fred Casagrande"],
        [T(17, 30), "Simone De Vivo", "The Director's Club"], [T(18, 30), "Dave & Hunter", "Exit 10 Family Session"], [T(19, 30), "Thomas Straker", "Fire Pit Session"],
        [T(20, 30), "Fred Casagrande"], [T(21, 30), "Dave & Hunter", "Exit 10"], [T(22, 30), "Ankit Rajak", "ICCA Chef"],
      ],
      sun: [
        [T(14, 30), "Sergio Freitas & Sameer Ahmed", "ICCA Chefs"], [T(15, 30), "Dave & Hunter", "Exit 10 Family Session"], [T(16, 30), "Fred Casagrande"],
        [T(17, 30), "Dave & Hunter", "Exit 10"], [T(18, 30), "Fred Casagrande"], [T(19, 30), "Andrew Dickens & Joseph Nesbitt-Larking"],
        [T(20, 30), "Francisco Araya", "ICCA Chef"],
      ],
    } },
    { key: "coffee", name: "Coffee Workshop (SHOT)", short: "Coffee", loc: "E7", dur: 60, approx: true, days: {
      fri: [[T(14, 30), "Espresso Calibration"], [T(16), "Coffee Origins & Processing"], [T(17, 30), "Coffee Aroma Challenge"], [T(19), "Coffee Cupping & Tasting"], [T(20, 30), "V60 Manual Brewing"], [T(22), "Milk Steaming & Latte Art"]],
      sat: [[T(14, 30), "Espresso Calibration"], [T(16), "Coffee Origins & Processing"], [T(17, 30), "Coffee Aroma Challenge"], [T(19), "Coffee Cupping & Tasting"], [T(20, 30), "V60 Manual Brewing"], [T(22), "Milk Steaming & Latte Art"]],
      sun: [[T(14, 30), "Coffee Origins & Processing"], [T(16), "Coffee Aroma Challenge"], [T(17, 30), "Coffee Cupping & Tasting"], [T(19), "V60 Manual Brewing"], [T(20, 30), "Milk Steaming & Latte Art"]],
    } },
    { key: "pasta", name: "Pasta Workshop (Jo's Kitschen)", short: "Pasta", loc: "E27", dur: 60, approx: true, days: {
      fri: [[T(16), "Egg-Free Pasta Making"], [T(17), "Egg Pasta Making"], [T(18), "Egg-Free Pasta Making"], [T(19), "Egg Pasta Making"], [T(20), "Egg-Free Pasta Making"], [T(21), "Egg Pasta Making"], [T(22), "Egg-Free Pasta Making"]],
      sat: [[T(16), "Egg-Free Pasta Making"], [T(17), "Egg Pasta Making"], [T(18), "Egg-Free Pasta Making"], [T(19), "Egg Pasta Making"], [T(20), "Egg-Free Pasta Making"], [T(21), "Egg Pasta Making"], [T(22), "Egg-Free Pasta Making"]],
      sun: [[T(16), "Egg-Free Pasta Making"], [T(17), "Egg Pasta Making"], [T(18), "Egg-Free Pasta Making"], [T(19), "Egg-Free Pasta Making"], [T(20), "Egg-Free Pasta Making"], [T(21), "Egg Pasta Making"], [T(22), "Egg-Free Pasta Making"]],
    } },
  ],

  // Quick Turnaround tab. `at` = [start, end] for timed items; `also` = crew that must cover it.
  quickNote: "Share around 3 photos of each so we can do a carousel post. Mix of stand design, activities and guests engaging.",
  quick: {
    fri: [
      { id: "q/fri/bmw", loc: "D10", label: "BMW Stand / models" },
      { id: "q/fri/mini", loc: "D12", label: "MINI Stand / models" },
      { id: "q/fri/masafi", loc: "D11", label: "Masafi Stand" },
      { id: "q/fri/mls", loc: "E21", label: "MLS Stand" },
      { id: "q/fri/shot", loc: "D16", label: "SHOT Stand" },
      { id: "q/fri/shot-barista", loc: "E7", label: "SHOT Coffee Barista Workshop" },
      { id: "q/fri/spain", loc: "E28", label: "Spain Stand" },
      { id: "q/fri/keeta", loc: "D17", label: "Keeta Stand" },
      { id: "q/fri/pasta", loc: "E27", label: "Pasta Making Class (Jo's kitschen)", when: "4:00 PM and 5:00 PM", at: [T(16), T(17, 30)] },
      { id: "q/fri/todd", loc: "A2", label: "Todd at Cooking Class", when: "5:30 PM · Chefs Hub", at: [T(17, 30), T(18)] },
      { id: "q/fri/alex-rachel", loc: "A2", label: "Alex at Rachel's Cooking Class", when: "5:30 PM · Chefs Hub", at: [T(17, 30), T(18)] },
      { id: "q/fri/rachel", loc: "A2", label: "Rachel Allen Cook Session", when: "5:30 PM · Chefs Hub (per Chef's Hub schedule)", at: [T(17, 30), T(18)] },
      { id: "q/fri/gino-bbq", loc: "A4", label: "Gino D'Acampo bbq session", when: "7:30 – 8:00 PM · Firepit", at: [T(19, 30), T(20)] },
      { id: "q/fri/meeting", label: "Alex, Tod and Gino Meeting", when: "8:35 PM · Chef's lounge · video as well", at: [T(20, 35), T(21)], video: true },
      { id: "q/fri/crowds", label: "Crowds enjoying" },
      { id: "q/fri/busy", label: "Showing how busy the event is" },
      { id: "q/any/sunset", label: "Crowds / people with nice sunset", when: "Friday or Saturday" },
    ],
    sat: [
      { id: "q/sat/straker", loc: "A1", label: "Thomas Straker's session", when: "6:30 – 7:00 PM · Cook School", at: [T(18, 30), T(19)] },
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

  // Venue map. Pin = [code, category, name, x, y] with x/y as a fraction of the map image (0–1).
  map: {
    img: "/map.jpg", w: 1600, h: 1599,
    view: [0.305, 0.07, 0.99, 0.975],        // the part of the image shown first: the venue itself, without the printed legend
    cats: [
      { key: "A", name: "Features", color: "#E73D7D" }, { key: "B", name: "Restaurants", color: "#17A886" },
      { key: "C", name: "Artisan Market", color: "#8E4A97" }, { key: "D", name: "Activations", color: "#E8641E" },
      { key: "E", name: "Chalets", color: "#1E8FCC" }, { key: "F", name: "Kids Zone", color: "#B08350" },
      { key: "G", name: "Stages", color: "#C0202B" }, { key: "H", name: "Bars", color: "#6B3A22" },
      { key: "I", name: "Amenities", color: "#27408B" },
    ],
    pins: [
      ["A1", "A", "Taste Cook School", 0.9000, 0.8318],
      ["A2", "A", "Taste Chef's Hub", 0.5094, 0.8724],
      ["A3", "A", "VIP Lounge", 0.4000, 0.5847],
      ["A4", "A", "Keeta Fire Pit", 0.7125, 0.2689],
      ["B1", "B", "99 | Tanjun", 0.6625, 0.8055],
      ["B2", "B", "The Director's Club", 0.6375, 0.8311],
      ["B3", "B", "Paradiso", 0.3650, 0.7098],
      ["B4", "B", "Desert Lotus", 0.3663, 0.6698],
      ["B5", "B", "Soraya", 0.3638, 0.4678],
      ["B6", "B", "Villa Toscana", 0.3613, 0.4153],
      ["B7", "B", "Lento", 0.3525, 0.3552],
      ["B8", "B", "Ting Irie", 0.3825, 0.3327],
      ["B9", "B", "Oakroom", 0.8912, 0.2852],
      ["B10", "B", "Marcella", 0.9263, 0.2983],
      ["B11", "B", "Beetza", 0.8850, 0.3815],
      ["B12", "B", "Ergon Deli & Café", 0.9431, 0.3984],
      ["B13", "B", "Almayass", 0.9300, 0.5697],
      ["B14", "B", "Pincode by Kunal Kapur", 0.9281, 0.6129],
      ["B15", "B", "Ramen Bar", 0.9256, 0.6892],
      ["B16", "B", "La Broche by Bocuse", 0.9344, 0.7317],
      ["C1", "C", "Baked by Betssy", 0.8237, 0.5491],
      ["C2", "C", "House of Dilmun", 0.8181, 0.5779],
      ["C3", "C", "Inzi", 0.8225, 0.6085],
      ["C4", "C", "Snowie Time", 0.8163, 0.6373],
      ["C5", "C", "Flufftopia", 0.8206, 0.6673],
      ["C6", "C", "Solum", 0.8475, 0.5528],
      ["C7", "C", "Prairie Bakes", 0.8525, 0.5779],
      ["C8", "C", "Crumbs and Pops", 0.8525, 0.6066],
      ["C9", "C", "Rashtions Date Truffles", 0.8538, 0.6373],
      ["C10", "C", "Camp's Kitchen", 0.8581, 0.6673],
      ["D1", "D", "ChopValue Dubai", 0.4950, 0.7430],
      ["D2", "D", "ARN", 0.4863, 0.6560],
      ["D3", "D", "Drink Dry Beverages", 0.4900, 0.5666],
      ["D4", "D", "Black+Decker", 0.4875, 0.3821],
      ["D5", "D", "Nutricook", 0.5750, 0.7148],
      ["D6", "D", "Chocomail", 0.5650, 0.4465],
      ["D7", "D", "Cento Gelato", 0.5975, 0.4384],
      ["D8", "D", "Shahi Darb", 0.6400, 0.3571],
      ["D9", "D", "Rubicon", 0.6112, 0.4828],
      ["D10", "D", "Abu Dhabi Motors – BMW", 0.5675, 0.5654],
      ["D11", "D", "Masafi", 0.6531, 0.5241],
      ["D12", "D", "Abu Dhabi Motors – MINI", 0.6625, 0.5741],
      ["D13", "D", "Burnt", 0.6719, 0.6504],
      ["D14", "D", "Pepsi", 0.7769, 0.7967],
      ["D15", "D", "Al Ain Farms", 0.7738, 0.7273],
      ["D16", "D", "SHOT", 0.7681, 0.6048],
      ["D17", "D", "Keeta", 0.7756, 0.4928],
      ["E1", "E", "ICCA", 0.4263, 0.8962],
      ["E2", "E", "Chamoy Drip", 0.4838, 0.5009],
      ["E3", "E", "ne'ma", 0.4875, 0.4722],
      ["E4", "E", "Pure Red Gold", 0.5350, 0.6729],
      ["E5", "E", "Yakult", 0.5350, 0.6417],
      ["E6", "E", "US Meat Export Federation", 0.5250, 0.5904],
      ["E7", "E", "Barista Workshop by SHOT", 0.5387, 0.5310],
      ["E8", "E", "Hallnara Matcha", 0.5156, 0.4440],
      ["E9", "E", "Rype", 0.5312, 0.4178],
      ["E10", "E", "Dibba Bay Oysters", 0.5913, 0.6673],
      ["E11", "E", "Monica Bakes", 0.6175, 0.6454],
      ["E12", "E", "Yala Kombucha", 0.6200, 0.6166],
      ["E13", "E", "Adore", 0.5925, 0.3965],
      ["E14", "E", "Bakenotes Artisanal", 0.6025, 0.3709],
      ["E15", "E", "Exit 10", 0.6112, 0.3265],
      ["E16", "E", "Smoking Beards", 0.6756, 0.3802],
      ["E17", "E", "Best Bites", 0.6538, 0.6829],
      ["E18", "E", "Elite Horizon", 0.7488, 0.3777],
      ["E19", "E", "Kidz Adventure Quest", 0.7894, 0.3546],
      ["E20", "E", "Cookie Decorating", 0.8075, 0.3415],
      ["E21", "E", "MLS", 0.8237, 0.3064],
      ["E22", "E", "Le Petit Chocolatier Belge", 0.8050, 0.4103],
      ["E23", "E", "Kokotaj", 0.7950, 0.4403],
      ["E24", "E", "Puresoil", 0.8069, 0.4822],
      ["E25", "E", "Rescube", 0.7963, 0.5116],
      ["E26", "E", "The Bottle Store", 0.8181, 0.7086],
      ["E27", "E", "Pasta Workshop by Jo's Kitschen", 0.8300, 0.4265],
      ["E28", "E", "Spain", 0.8287, 0.4934],
      ["F", "F", "Candy Land Kids Zone", 0.4969, 0.2627],
      ["G1", "G", "Stage (north-east)", 0.9094, 0.4941],
      ["G2", "G", "Stage (south-west)", 0.3781, 0.8349],
      ["H1", "H", "Licensed lounge & bar (by Fire Pit)", 0.8406, 0.2627],
      ["H2", "H", "Licensed lounge & bar (by Cook School)", 0.8125, 0.8099],
      ["H3", "H", "Licensed lounge & bar (by Chef's Hub)", 0.5875, 0.8630],
      ["H4", "H", "Licensed lounge & bar (south-west corner)", 0.3688, 0.9106],
      ["ENT", "I", "Main Entrance", 0.7356, 0.8943],
      ["I1", "I", "Box Office", 0.8381, 0.9093],
      ["I4", "I", "Lost & Found", 0.8606, 0.9231],
      ["I2a", "I", "Washroom (north-east)", 0.8488, 0.1226],
      ["I5a", "I", "Prayer Room", 0.8956, 0.1357],
      ["I5b", "I", "Prayer Room (second)", 0.8956, 0.1795],
      ["I7", "I", "First Aid", 0.9431, 0.1351],
      ["I3", "I", "Organisers Office (outside, south-west)", 0.1731, 0.8530],
      ["I2b", "I", "Washroom (outside, south-west)", 0.2125, 0.8856],
      ["I6", "I", "People of Determination Washroom", 0.2462, 0.9012],
      ["I2c", "I", "Washroom (outside, south)", 0.2737, 0.8881],
    ],
  },

  // Where each shot is on the map: "Section title|Item" (or just "Item") -> map code.
  where: {
    // sections
    "sales|VIP Lounge": "A3", "sales|Kids Zone": "F", "sales|Entrance": "ENT", "marketing|VIP Lounge": "A3", "marketing|Kids": "F",
    "marketing|Keeta Fire Pit": "A4", "marketing|Cook School, Chefs Hub": "A1",
    // restaurants
    "99 | Tanjun": "B1", "The Director's Club": "B2", "Paradiso": "B3", "Desert Lotus": "B4", "Soraya": "B5", "Villa Toscana": "B6",
    "Lento": "B7", "Ting Irie": "B8", "Oak Room": "B9", "Marcella": "B10", "Beetza": "B11", "Ergon": "B12", "Almayass": "B13",
    "Pincode": "B14", "Ramen Bar": "B15", "La Broche": "B16",
    // chalets
    "Tres Amis (Pasta Workshop)": "E27", "Yakult": "E5", "Kokotaj": "E23", "Monica Bakes": "E11", "Rescube": "E25", "Yala Kombucha": "E12",
    "Chamoy Drip": "E2", "ICCA": "E1", "Bakenotes Artisanal": "E14", "US Meat": "E6", "Dibba Bay": "E10", "Rype": "E9", "Pure Red Gold": "E4",
    "MLS": "E21", "Exhibitors (Chalet)|SHOT": "E7", "Hallnara": "E8", "Synaxis Food (Le Petit Chocolatier Belge)": "E22", "Best Bites": "E17",
    "Elite Horizon": "E18", "Smooking Beard": "E16", "Exit 10": "E15", "Adore": "E13",
    // space only + artisan market
    "Cento Gelato": "D7", "Al Ain Farms": "D15", "Chocomail": "D6", "Rubicon": "D9", "NutriCook": "D5", "Chop Value": "D1",
    "Exhibitors (Space Only)|SHOT": "D16", "Shahi Darb": "D8", "Black & Decker": "D4", "Burnt": "D13", "ARN": "D2", "KEETA": "D17", "BMW": "D10",
    "Mini": "D12", "MASAFI": "D11", "Drink Dry": "D3", "Pepsi": "D14", "Camps Kitchen": "C10", "Inzi Eats": "C3", "Crumbs & pops": "C8",
    "Solum": "C6", "Snowie Time": "C4", "Pure Soil": "E24", "Prairie Bakes": "C7", "House of Dilmun": "C2", "Baked by betssy": "C1",
    "Flufftopia": "C5", "Rashtion": "C9",
    // features and bars
    "Chefs Hub – wide angle from front": "A2", "Chefs Hub – wide angle from chef's counter": "A2",
    "Cook School – wide angle from front": "A1", "Cook School – wide angle from chef's counter": "A1",
    "Keeta Firepit – entrance arch and surrounding": "A4", "Keeta Firepit – back wall": "A4", "Keeta Firepit – view from chefs counter": "A4",
    "Coffee Workshops (white chalet) wide angle with surroundings": "E7", "Coffee Workshops – branding": "E7",
    "Pasta workshops – wide angle and surroundings": "E27", "Pasta workshops – close up of counter": "E27",
    "Visit Spain – wide angle and surroundings": "E28", "Bottle Store Bar": "E26",
    "BMW test drive": "D10", "Entrance arch": "ENT", "Venue map": "ENT",
  },

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
