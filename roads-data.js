const ROADS_DATA = [
  {
    id: 1,
    regionRank: 2,
    waypoints: [[51.807, -3.872], [51.835, -3.781], [51.917, -3.74]],
    name: "Black Mountain Pass (A4069)",
    region: "Wales",
    county: "Carmarthenshire / Powys",
    lat: 51.835,
    lng: -3.775,
    distance: "9 miles",
    difficulty: "thrilling",
    elevation: "1,600 ft summit",
    roadDesignation: "A4069",
    description: "Arguably the most famous driving road in Wales, the Black Mountain Pass was made iconic by Jeremy Clarkson's review of the Mercedes CLK 63 Black Series. The road climbs dramatically through the Brecon Beacons, with tight hairpins, blind crests, and exposed moorland that will test your nerve and reward your skill.",
    highlights: [
      "Multiple switchback hairpins climbing the mountain face",
      "Stunning views across the Brecon Beacons",
      "Technical sections demand precise line selection",
      "Minimal traffic on weekdays"
    ],
    tip: "Drive it south to north for the best climbing experience. Watch for livestock on the road, especially sheep.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Black%20Mountain%20Pass%20A4069%20-%20geograph.org.uk%20-%205591261.jpg?width=800", caption: "The A4069 winding up through the Black Mountain" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Brecon%20Beacons%20National%20Park%20Visitor%20Centre%20-%20%22The%20Mountain%20Centre%22%20-%20geograph.org.uk%20-%203953888.jpg?width=800", caption: "Sweeping Brecon Beacons moorland" }
    ]
  },
  {
    id: 2,
    regionRank: 1,
    waypoints: [[57.44, -5.652], [57.432, -5.725], [57.441, -5.818]],
    name: "Bealach na Bà",
    region: "Scotland",
    county: "Wester Ross, Highlands",
    lat: 57.418,
    lng: -5.713,
    distance: "11 miles",
    difficulty: "thrilling",
    elevation: "2,053 ft summit",
    roadDesignation: "Unclassified",
    description: "Britain's most dramatic mountain road. The Pass of the Cattle rises to over 2,000 feet with gradients up to 1 in 5, hairpin bends that would shame an Alpine pass, and a summit view across to Skye that will leave you breathless. Single-track with passing places — this is driving at its most raw and exhilarating.",
    highlights: [
      "Alpine-grade hairpin bends with sheer drops",
      "Summit viewpoint overlooking the Isle of Skye",
      "Steepest road gradients in the UK",
      "The approach to Applecross village is equally spectacular"
    ],
    tip: "Not recommended in winter or poor visibility. Use passing places correctly — pull left. The descent into Applecross is a fitting reward.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bealach%20na%20Ba%20-%20Mountain%20Road%20Pass%20-%20geograph.org.uk%20-%205176884.jpg?width=800", caption: "The famous hairpin bends of Bealach na Bà" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Applecross%20bay%20highland%20cattle%20-%20geograph.org.uk%20-%202178857.jpg?width=800", caption: "Applecross Bay from the summit" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/View%20from%20Bealach%20na%20B%C3%A0%20-%20geograph.org.uk%20-%202928493.jpg?width=800", caption: "Views to the Isle of Skye from the pass" }
    ]
  },
  {
    id: 3,
    regionRank: 1,
    waypoints: [[53.067, -3.741], [53.143, -3.655], [53.03, -3.599], [53.09, -3.802]],
    name: "The Evo Triangle",
    region: "Wales",
    county: "Denbighshire, North Wales",
    lat: 53.05,
    lng: -3.62,
    distance: "20 miles loop",
    difficulty: "thrilling",
    elevation: "1,400 ft max",
    roadDesignation: "A5 / A543 / B4501",
    description: "Named by the writers at Evo magazine, this triangular loop across the Denbigh Moors is considered one of the finest driving circuits in the UK. Combining sections of the A5, A543, and B4501, it delivers fast sweeping bends, technical switchbacks, and gloriously smooth tarmac across rolling Welsh moorland.",
    highlights: [
      "Perfect road surface throughout",
      "The B4501 section has fast, flowing bends with great visibility",
      "Minimal traffic across open moorland",
      "Each leg of the triangle has its own distinct character"
    ],
    tip: "Start from the A5 near Betws-y-Coed. The B4501 is the standout section — save it for your second or third lap when you've learned the road.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hiraethog%20moors%20-%20geograph.org.uk%20-%20423969.jpg?width=800", caption: "Open moorland of the Denbigh Moors" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Llyn_Brenig.jpg?width=800", caption: "Llyn Brenig reservoir on the moors" }
    ]
  },
  {
    id: 4,
    regionRank: 4,
    waypoints: [[53.404, -1.765], [53.43, -1.858], [53.444, -1.946]],
    name: "Snake Pass (A57)",
    region: "England",
    county: "Derbyshire / Greater Manchester",
    lat: 53.44,
    lng: -1.86,
    distance: "14 miles",
    difficulty: "challenging",
    elevation: "1,680 ft summit",
    roadDesignation: "A57",
    description: "One of England's most iconic road passes, the Snake Pass twists across the Pennines between Sheffield and Manchester through the wild Peak District landscape. Named for its serpentine route rather than any reptilian residents, it delivers constant direction changes, dramatic moorland views, and an atmosphere of desolate beauty.",
    highlights: [
      "Endless technical bends through Peak District moorland",
      "Ladybower Reservoir visible on the approach",
      "Atmospheric in all weather conditions",
      "A true test of a car's chassis balance"
    ],
    tip: "Often closed in winter due to snow. Can be busy on summer weekends — try a Tuesday evening for the best experience.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ladybower_Reservoir.jpg?width=800", caption: "Ladybower Reservoir on the approach" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Snake%20Pass%20-%20geograph.org.uk%20-%20431557.jpg?width=800", caption: "The Snake Pass threading through Peak District moorland" }
    ]
  },
  {
    id: 5,
    regionRank: 3,
    waypoints: [[53.259, -2.123], [53.257, -1.986], [53.258, -1.913]],
    name: "Cat and Fiddle (A537)",
    region: "England",
    county: "Cheshire / Derbyshire",
    lat: 53.26,
    lng: -1.98,
    distance: "7 miles",
    difficulty: "challenging",
    elevation: "1,689 ft summit",
    roadDesignation: "A537",
    description: "Connecting Macclesfield to Buxton, the A537 climbs past England's second-highest pub to the wild Derbyshire Moors. The road's combination of fast sweeping corners, sudden elevation changes, and unpredictable weather has earned it a fearsome reputation. Treat it with respect and it rewards with a sublime driving experience.",
    highlights: [
      "England's second-highest pub at the summit",
      "Fast sweeping corners through open moorland",
      "Dramatic elevation changes over a short distance",
      "Links perfectly with Snake Pass for a day route"
    ],
    tip: "Combine with Snake Pass for a full day of Peak District driving. The Buxton approach (eastbound) is the more dramatic direction.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cat%20and%20Fiddle%20Public%20House,%20Cheshire%20-%20geograph.org.uk%20-%206460586.jpg?width=800", caption: "The Cat and Fiddle Inn — England's second-highest pub" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shutlingsloe.jpg?width=800", caption: "The Peak District moorland near the summit" }
    ]
  },
  {
    id: 6,
    regionRank: 2,
    waypoints: [[57.477, -4.224], [57.894, -5.156], [58.568, -4.753], [58.642, -3.07], [57.59, -3.534]],
    name: "North Coast 500",
    region: "Scotland",
    county: "Highlands",
    lat: 58.25,
    lng: -5.05,
    distance: "516 miles loop",
    difficulty: "scenic",
    elevation: "Various",
    roadDesignation: "Multiple",
    description: "Scotland's answer to Route 66. This epic 516-mile circular route around the Scottish Highlands takes in some of the most dramatic coastline and mountain scenery in Europe. While the full loop is a multi-day adventure, individual sections offer world-class driving roads — particularly the western coast between Ullapool and Durness.",
    highlights: [
      "516 miles of varied Highland driving",
      "Dramatic single-track sections along the west coast",
      "Includes the Bealach na Bà as a detour",
      "Beaches, castles, and whisky distilleries along the route"
    ],
    tip: "Don't try to rush it in a day. The west coast sections are the most spectacular for driving. Allow 5-7 days to do it justice.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stac_Pollaidh.jpg?width=800", caption: "Stac Pollaidh rising above the Highland landscape" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ardvreck_Castle.jpg?width=800", caption: "Ardvreck Castle on Loch Assynt" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Smoo%20Cave,%20Durness%20-%20geograph.org.uk%20-%206331854.jpg?width=800", caption: "Smoo Cave near Durness on the north coast" }
    ]
  },
  {
    id: 7,
    regionRank: 5,
    waypoints: [[54.388, -2.244], [54.363, -2.215], [54.305, -2.199]],
    name: "Buttertubs Pass",
    region: "England",
    county: "North Yorkshire",
    lat: 54.36,
    lng: -2.20,
    distance: "6 miles",
    difficulty: "thrilling",
    elevation: "1,726 ft summit",
    roadDesignation: "Unclassified",
    description: "Jeremy Clarkson called it one of his 'all-time favourite roads' and he's not wrong. This narrow, unfenced road between Thwaite and Hawes climbs to nearly 1,800 feet through the Yorkshire Dales, with sheer drops and the famous limestone potholes that give the pass its name. Raw, exposed, and utterly magnificent.",
    highlights: [
      "Limestone 'buttertubs' — deep natural potholes flanking the road",
      "Unfenced sections with dramatic drops",
      "Used as a climb in the Tour de France 2014",
      "Connects the stunning Swaledale and Wensleydale valleys"
    ],
    tip: "Very narrow in places with limited visibility — use your horn on blind bends. The views from the top across Swaledale are extraordinary.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Buttertubs%20-%20geograph.org.uk%20-%205723130.jpg?width=800", caption: "The dramatic Buttertubs Pass road" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Red%20cow,%20Swaledale.jpg?width=800", caption: "Swaledale valley below the pass" }
    ]
  },
  {
    id: 8,
    regionRank: 16,
    waypoints: [[51.082, -4.058], [50.997, -4.394], [50.831, -4.543], [50.624, -4.69]],
    name: "Atlantic Highway (A39)",
    region: "England",
    county: "Devon / Cornwall",
    lat: 50.83,
    lng: -4.55,
    distance: "77 miles",
    difficulty: "scenic",
    elevation: "Rolling",
    roadDesignation: "A39",
    description: "The A39 hugs the dramatic North Devon and Cornwall coastline from Barnstaple to Newquay, serving up a generous mix of sweeping coastal curves, plunging valleys, and glimpses of the wild Atlantic below. It's not the fastest road, but the combination of ocean views and rhythmic bends makes it a superb grand touring route.",
    highlights: [
      "Dramatic North Cornwall cliff-top views",
      "Winding through picturesque fishing villages",
      "Hartland Point to Bude section is the standout",
      "Perfect for a GT car at a relaxed pace"
    ],
    tip: "A grand touring road rather than a B-road blast. Best enjoyed with the roof down on a clear summer evening.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boscastle%20Harbour,%20Cornwall%20-%20geograph.org.uk%20-%202714615.jpg?width=800", caption: "Boscastle harbour on the North Cornwall coast" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Beaches%20at%20Bude,%20Cornwall%20-%20panoramio.jpg?width=800", caption: "Bude and the Atlantic coastline" }
    ]
  },
  {
    id: 9,
    regionRank: 3,
    waypoints: [[53.118, -4.131], [53.083, -4.02], [53.082, -3.893]],
    name: "Llanberis Pass (A4086)",
    region: "Wales",
    county: "Gwynedd, Snowdonia",
    lat: 53.08,
    lng: -4.05,
    distance: "5 miles",
    difficulty: "challenging",
    elevation: "1,170 ft summit",
    roadDesignation: "A4086",
    description: "Cutting through the heart of Snowdonia between towering peaks, the Llanberis Pass is one of the most visually dramatic drives in Britain. Steep rock faces rise sheer on both sides as the road threads through a glacial valley. The technical bends and limited width demand full concentration — this is driving as theatre.",
    highlights: [
      "Sheer mountain walls on both sides of the road",
      "Passes beneath the flanks of Snowdon itself",
      "Technical bends requiring precise throttle control",
      "Gateway to some of Snowdonia's finest walking"
    ],
    tip: "Can be very busy in peak tourist season and at weekends. Early morning is the best time. Watch for climbers' parked cars narrowing the road.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20view%20ESE%20from%20Pen-y-pass,%20Snowdonia%20-%20geograph.org.uk%20-%202961121.jpg?width=800", caption: "The Llanberis Pass between towering rock faces" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Snowdon%20Mountain%20Railway,%20Llanberis%20Station%20-%20geograph.org.uk%20-%20794985.jpg?width=800", caption: "Snowdon looming above the pass" }
    ]
  },
  {
    id: 10,
    regionRank: 8,
    waypoints: [[51.275, -2.78], [51.281, -2.754]],
    name: "Cheddar Gorge (B3135)",
    region: "England",
    county: "Somerset",
    lat: 51.28,
    lng: -2.76,
    distance: "3 miles",
    difficulty: "challenging",
    elevation: "450 ft climb",
    roadDesignation: "B3135",
    description: "Britain's biggest gorge delivers Britain's most dramatic short blast. The road twists through towering limestone cliffs that rise 450 feet on either side, with blind bends and sudden rock overhangs creating an almost canyon-like experience. Short but utterly memorable — every sports car should thread through Cheddar at least once.",
    highlights: [
      "Towering 450ft limestone cliffs flanking the road",
      "Tight technical bends between rock walls",
      "One of the most photogenic driving roads in England",
      "Close to the Mendip Hills for extended driving"
    ],
    tip: "Very busy during the day with tourists. Early morning or late evening are the times to enjoy it properly in a sports car.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheddar_Gorge.jpg?width=800", caption: "The towering limestone walls of Cheddar Gorge" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B3135%20(Cliff%20Road)%20Approaching%20Cheddar%20Gorge%20-%20geograph.org.uk%20-%203802408.jpg?width=800", caption: "The B3135 threading through the gorge" }
    ]
  },
  {
    id: 11,
    regionRank: 3,
    waypoints: [[56.681, -5.109], [56.656, -4.944], [56.614, -4.812]],
    name: "A82 Glencoe",
    region: "Scotland",
    county: "Highlands",
    lat: 56.68,
    lng: -5.10,
    distance: "10 miles",
    difficulty: "scenic",
    elevation: "1,024 ft summit",
    roadDesignation: "A82",
    description: "The A82 through Glencoe is perhaps the most cinematically beautiful road in Britain. Flanked by the dramatic peaks of the Three Sisters and the brooding mass of Buachaille Etive Mòr, this road turns every driver into a photographer. The surface is smooth, the bends are flowing, and the scenery is genuinely jaw-dropping.",
    highlights: [
      "Buachaille Etive Mòr — one of Scotland's most iconic mountains",
      "The Three Sisters ridgeline towering above the road",
      "Featured in countless films including Skyfall",
      "Smooth, well-maintained surface throughout"
    ],
    tip: "Stop at the viewpoint car parks — the Three Sisters viewpoint is unmissable. This road is about savoring the scenery as much as the driving.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Buachaille_Etive_Mor.jpg?width=800", caption: "Buachaille Etive Mòr — Glencoe's iconic mountain" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Three%20Sisters,%20Glencoe%20-%20geograph.org.uk%20-%204395644.jpg?width=800", caption: "The Three Sisters ridgeline from the A82" }
    ]
  },
  {
    id: 12,
    regionRank: 4,
    waypoints: [[52.969, -3.166], [53.07, -3.211], [53.099, -3.288]],
    name: "Horseshoe Pass (A542)",
    region: "Wales",
    county: "Denbighshire",
    lat: 53.07,
    lng: -3.21,
    distance: "5 miles",
    difficulty: "challenging",
    elevation: "1,367 ft summit",
    roadDesignation: "A542",
    description: "A classic Welsh mountain climb just outside Llangollen. The A542 ascends in sweeping curves to a summit car park with panoramic views across the Vale of Clwyd. The road surface is excellent, the bends are well-sighted, and the gradient provides a wonderful workout for any sports car's powertrain.",
    highlights: [
      "Sweeping, well-sighted climbing bends",
      "Panoramic summit viewpoint",
      "Excellent road surface year-round",
      "Close to the Evo Triangle for a combined route"
    ],
    tip: "Combine with the Evo Triangle for a full day of North Wales driving. The climb from Llangollen is the best direction.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Horseshoe%20Pass%20-%20geograph.org.uk%20-%2074374.jpg?width=800", caption: "The sweeping curves of Horseshoe Pass" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Llangollen.jpg?width=800", caption: "Llangollen town at the foot of the pass" }
    ]
  },
  {
    id: 13,
    regionRank: 1,
    waypoints: [[54.39, -3.284], [54.401, -3.2], [54.401, -3.107]],
    name: "Hardknott Pass",
    region: "England",
    county: "Cumbria, Lake District",
    lat: 54.40,
    lng: -3.18,
    distance: "3 miles",
    difficulty: "thrilling",
    elevation: "1,289 ft summit",
    roadDesignation: "Unclassified",
    description: "England's steepest road, with gradients reaching 1 in 3. Hardknott Pass is a raw, single-track climb through the western Lake District that will put any car — and driver — to the ultimate test. The hairpins are brutally tight, the drops are vertiginous, and the Roman fort at the top adds historical drama to an already epic road.",
    highlights: [
      "Gradients up to 1 in 3 — England's steepest road",
      "Brutally tight hairpin bends",
      "Roman fort ruins at the summit",
      "Often paired with neighbouring Wrynose Pass"
    ],
    tip: "Low gear and steady nerve required. Not suitable for wide or long cars. The pass from west to east (climbing from Eskdale) is the classic direction.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hardknott%20Pass%20towards%20Eskdale%20-%20geograph.org.uk%20-%20307023.jpg?width=800", caption: "Hardknott Pass — England's steepest road" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hardknott_Roman_Fort.jpg?width=800", caption: "Roman fort ruins at the summit" }
    ]
  },
  {
    id: 14,
    regionRank: 5,
    waypoints: [[52.046, -3.558], [51.878, -3.611], [51.786, -3.616]],
    name: "A4067 Sennybridge to Swansea",
    region: "Wales",
    county: "Powys / Neath Port Talbot",
    lat: 51.78,
    lng: -3.61,
    distance: "22 miles",
    difficulty: "thrilling",
    elevation: "1,200 ft max",
    roadDesignation: "A4067",
    description: "Often overlooked in favour of its famous neighbour the A4069, the A4067 through the upper Swansea Valley was famously highlighted as a hidden gem by motoring journalists. Long, flowing bends through remote countryside with superb visibility and a surface that encourages you to use the full width of your lane. A connoisseur's road.",
    highlights: [
      "Long, flowing bends with excellent visibility",
      "Far less traffic than the A4069",
      "Passes the Dan-yr-Ogof caves complex",
      "A true enthusiast's hidden gem"
    ],
    tip: "Drive this after the A4069 for comparison — many drivers prefer it. The middle section through the open valley is the highlight.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/River%20confluence%20at%20Craig-y-nos%20Country%20Park%20-%20geograph.org.uk%20-%20425192.jpg?width=800", caption: "Dan-yr-Ogof caves complex beside the A4067" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/River%20confluence%20at%20Craig-y-nos%20Country%20Park%20-%20geograph.org.uk%20-%20425192.jpg?width=800", caption: "Craig y Nos Country Park in the Swansea Valley" }
    ]
  },
  {
    id: 15,
    regionRank: 6,
    waypoints: [[54.366, -2.902], [54.444, -2.963], [54.481, -2.927], [54.53, -2.937]],
    name: "Kirkstone Pass (A592)",
    region: "England",
    county: "Cumbria, Lake District",
    lat: 54.48,
    lng: -2.92,
    distance: "8 miles",
    difficulty: "scenic",
    elevation: "1,489 ft summit",
    roadDesignation: "A592",
    description: "The highest road pass in the Lake District, connecting Windermere to Ullswater via a dramatic climb to the Kirkstone Pass Inn — one of England's highest pubs. The road delivers magnificent views across Brothers Water and Patterdale, with smooth flowing bends on a well-maintained surface. Classic Lake District grandeur.",
    highlights: [
      "Highest road pass in the Lake District",
      "Kirkstone Pass Inn near the summit",
      "Views across Brothers Water and Patterdale",
      "The Struggle — the steep southern approach from Ambleside"
    ],
    tip: "The steep 'Struggle' approach from Ambleside is the more exciting climb. Stop at the Inn for a pint with a view.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20famous%20Lake%20District%20Kirkstone%20Pass%20-%20geograph.org.uk%20-%202085560.jpg?width=800", caption: "Kirkstone Pass — highest road pass in the Lake District" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ullswater.jpg?width=800", caption: "Ullswater at the foot of the pass" }
    ]
  },
  {
    id: 16,
    regionRank: 10,
    waypoints: [[50.55, -4.143], [50.546, -4.029], [50.52, -3.757]],
    name: "B3357 Dartmoor",
    region: "England",
    county: "Devon",
    lat: 50.58,
    lng: -3.90,
    distance: "18 miles",
    difficulty: "scenic",
    elevation: "1,400 ft max",
    roadDesignation: "B3357",
    description: "Crossing the wild, open expanse of Dartmoor from Tavistock to Ashburton, this B-road delivers the elemental experience of driving across one of England's last great wildernesses. Ponies graze beside the road, granite tors punctuate the skyline, and the road itself rises and falls with the ancient moorland landscape.",
    highlights: [
      "Wild ponies and open moorland for miles",
      "Princetown — home of Dartmoor Prison",
      "Atmospheric in mist or sunshine equally",
      "Multiple options to extend onto other moor roads"
    ],
    tip: "Watch for ponies, cattle, and sheep on the road — they have right of way. The section west of Two Bridges is the finest.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dartmoor_ponies.jpg?width=800", caption: "Dartmoor ponies grazing beside the road" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ilsington%20-%20Haytor%20Granite%20Tramway%20embankment%20-%20geograph.org.uk%20-%202112418.jpg?width=800", caption: "Haytor granite tor on the open moor" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B3357%20Near%20Two%20Bridges,%20Dartmoor,%20Devon%20taken%201964%20-%20geograph.org.uk%20-%20775689.jpg?width=800", caption: "The wild Dartmoor moorland landscape" }
    ]
  },
  {
    id: 17,
    regionRank: 5,
    waypoints: [[56.594, -3.337], [56.779, -3.393], [57.249, -3.371], [57.325, -3.619]],
    name: "Snow Roads Scenic Route",
    region: "Scotland",
    county: "Cairngorms",
    lat: 57.05,
    lng: -3.40,
    distance: "90 miles",
    difficulty: "scenic",
    elevation: "2,199 ft (Cairnwell Pass)",
    roadDesignation: "A93 / A939",
    description: "Threading through the Cairngorms National Park, the Snow Roads connect Blairgowrie to Grantown-on-Spey via the highest public roads in Britain. The A93 over Glenshee and the A939 over the Lecht pass deliver genuine high-altitude driving through stark, beautiful mountain landscapes with challenging weather to match.",
    highlights: [
      "Highest public road in Britain (A93 Cairnwell Pass)",
      "The Lecht ski road — dramatic hairpins at altitude",
      "Cairngorms mountain scenery throughout",
      "Variable conditions add to the driving challenge"
    ],
    tip: "Check road conditions in winter — these routes close in severe weather. The A939 over The Lecht is the more technically interesting section.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Glenshee%20Ski%20Centre%20-%20geograph.org.uk%20-%206926428.jpg?width=800", caption: "Glenshee ski area in the Cairngorms" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Approaching%20Cairngorm%20Summit%20-%20geograph.org.uk%20-%202280838.jpg?width=800", caption: "Cairngorm mountains — Britain's highest public roads" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Lecht.jpg?width=800", caption: "The Lecht ski road with dramatic hairpins" }
    ]
  },
  {
    id: 18,
    regionRank: 25,
    waypoints: [[50.615, -2.459], [50.668, -2.605], [50.73, -2.756]],
    name: "Jurassic Coast Road (B3157)",
    region: "England",
    county: "Dorset",
    lat: 50.63,
    lng: -2.62,
    distance: "18 miles",
    difficulty: "scenic",
    elevation: "Rolling coastal",
    roadDesignation: "B3157",
    description: "Following the UNESCO World Heritage Jurassic Coast from Weymouth to Bridport, the B3157 is a stunning coastal drive with sweeping views across Chesil Beach and the Fleet Lagoon. The road rises and falls along high cliff tops, delivering one breathtaking sea view after another — a perfect grand touring companion to a sunny afternoon.",
    highlights: [
      "Views along the Chesil Beach shingle barrier",
      "UNESCO World Heritage coastline",
      "Abbotsbury village and the Swannery",
      "Elevated vantage points overlooking the English Channel"
    ],
    tip: "A touring road for warm summer evenings. Stop at the viewpoints above Chesil Beach — the perspective is extraordinary.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chesil_Beach.jpg?width=800", caption: "Chesil Beach — the famous 18-mile shingle barrier" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Abbotsbury,%20Dorset,%20UK%20-%20May%202012.jpg?width=800", caption: "Abbotsbury village and the swannery" }
    ]
  },
  {
    id: 19,
    regionRank: 10,
    waypoints: [[52.415, -4.081], [52.432, -3.843], [52.43, -3.638]],
    name: "A44 Aberystwyth to Llangurig",
    region: "Wales",
    county: "Ceredigion / Powys",
    lat: 52.42,
    lng: -3.65,
    distance: "28 miles",
    difficulty: "challenging",
    elevation: "1,300 ft max",
    roadDesignation: "A44",
    description: "This mid-Wales A-road crosses the Cambrian Mountains through some of the most remote and sparsely populated countryside in Britain. Long straights transition into fast, sweeping bends across open moorland and through dense forestry. Minimal traffic, superb surfaces, and a sense of genuine wildness. The hidden heart of Welsh driving.",
    highlights: [
      "Remote, sparsely-trafficked mountain road",
      "Elan Valley reservoirs accessible as a detour",
      "Fast flowing bends through open moorland",
      "Connects to other brilliant mid-Wales B-roads"
    ],
    tip: "Combine with the Elan Valley road (via the B4518) for an extended loop through some of Wales's emptiest and most beautiful countryside.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Elan%20Valley,%20Craig%20Goch%20Dam%20and%20Valve%20Tower%20-%20geograph.org.uk%20-%205004243.jpg?width=800", caption: "Elan Valley reservoir dams in mid Wales" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cambrian_Mountains.jpg?width=800", caption: "The remote Cambrian Mountains" }
    ]
  },
  {
    id: 20,
    regionRank: 14,
    waypoints: [[54.664, -2.754], [54.725, -2.531], [54.805, -2.436]],
    name: "A686 Penrith to Alston",
    region: "England",
    county: "Cumbria / Northumberland",
    lat: 54.75,
    lng: -2.52,
    distance: "20 miles",
    difficulty: "challenging",
    elevation: "1,903 ft summit",
    roadDesignation: "A686",
    description: "Climbing from the Eden Valley to England's highest market town at Alston, the A686 crosses the North Pennines with commanding views across some of England's most unvisited upland scenery. The road is wide, well-surfaced, and delivers flowing bends through heather moorland. A wonderful, under-appreciated English driving road.",
    highlights: [
      "Climbs to 1,903 feet — one of England's highest A-roads",
      "Hartside Summit café with panoramic views",
      "Flowing bends across open Pennine moorland",
      "Alston — England's highest market town"
    ],
    tip: "Stop at the Hartside Summit — the views across the Lake District and the Solway Firth are remarkable. Continue through Alston for more excellent roads.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pennine%20Way%20towards%20Cross%20Fell%20Summit%20-%20geograph.org.uk%20-%204693356.jpg?width=800", caption: "Cross Fell — the highest point in the Pennines" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alston,_Cumbria.jpg?width=800", caption: "Alston — England's highest market town" }
    ]
  },

  // ===== ROADS 21–100 =====

  // --- SCOTLAND ---
  {
    id: 21,
    regionRank: 7,
    waypoints: [[56.819, -5.106], [56.872, -5.444], [56.953, -5.831], [57.004, -5.828]],
    name: "Road to the Isles (A830)",
    region: "Scotland",
    county: "Lochaber, Highland",
    lat: 56.82,
    lng: -5.11,
    distance: "46 miles",
    difficulty: "scenic",
    elevation: "150 ft max",
    roadDesignation: "A830",
    description: "Running from Fort William to Mallaig through some of the most romantic Highland scenery in Scotland, the Road to the Isles passes Glenfinnan Viaduct, silver sand beaches, and the departure point for the Skye ferry. The road follows the shores of three sea lochs and delivers a constantly shifting panorama of mountains, water, and sky.",
    highlights: [
      "Glenfinnan Viaduct — immortalised by the Hogwarts Express",
      "Morar's silver sands — the whitest beaches on the British mainland",
      "Views across to the Small Isles of Rum, Eigg, and Muck",
      "Mallaig — end-of-the-road harbour town with fresh seafood"
    ],
    tip: "Take the steam-hauled Jacobite train one way and drive the other for the definitive Road to the Isles experience.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Glenfinnan_Viaduct.jpg?width=800", caption: "Glenfinnan Viaduct, immortalised by the Hogwarts Express" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Silver%20Sands%20of%20Morar%20-%20geograph.org.uk%20-%20204112.jpg?width=800", caption: "The silver sands of Morar" }
    ]
  },
  {
    id: 22,
    regionRank: 8,
    waypoints: [[56.726, -5.893], [56.69, -6.083], [56.726, -6.221]],
    name: "Ardnamurchan Peninsula (B8007)",
    region: "Scotland",
    county: "Argyll & Bute",
    lat: 56.74,
    lng: -6.13,
    distance: "25 miles",
    difficulty: "thrilling",
    elevation: "400 ft max",
    roadDesignation: "B8007",
    description: "The road to the most westerly point on the British mainland is single-track, relentlessly twisting, and utterly spectacular. Threading between rocky outcrops, hidden lochs, and wild Atlantic headlands, the B8007 is technically demanding and rewarding in equal measure. A lighthouse at the tip marks the end of one of Britain's most remote drives.",
    highlights: [
      "Ardnamurchan Lighthouse — the most westerly point in Britain",
      "Single-track road with passing places demanding total focus",
      "Ancient volcanic landscape — one of Britain's oldest rock formations",
      "Resident sea eagles, otters, and Atlantic grey seals"
    ],
    tip: "Allow a full day — the Corran Ferry saves backtracking the A82. The road deteriorates beyond Kilchoan so low-clearance cars should proceed carefully.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ardnamurchan%20Lighthouse3.jpg?width=800", caption: "Ardnamurchan Lighthouse at Britain's most westerly point" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ardnamurchan%20Peninsula%20from%20above%20Lochan%27s%20Airde%20Beinn%20Mull%20-%20geograph.org.uk%20-%202832092.jpg?width=800", caption: "The wild Atlantic coastline of Ardnamurchan" }
    ]
  },
  {
    id: 23,
    regionRank: 4,
    waypoints: [[57.048, -4.984], [57.1, -5.12], [57.228, -5.467], [57.278, -5.518]],
    name: "Glen Shiel (A87)",
    region: "Scotland",
    county: "Highland",
    lat: 57.13,
    lng: -5.38,
    distance: "30 miles",
    difficulty: "scenic",
    elevation: "900 ft max",
    roadDesignation: "A87",
    description: "The A87 through Glen Shiel is one of Scotland's great Highland drives, flanked on both sides by the dramatic ridge of the Five Sisters of Kintail. The road runs alongside Loch Cluanie and descends through a glacial valley to the shores of Loch Duich and the iconic Eilean Donan Castle. Breathtaking from start to finish.",
    highlights: [
      "The Five Sisters of Kintail — a classic Highland ridgeline",
      "Eilean Donan Castle — Scotland's most photographed castle",
      "Loch Cluanie reservoir stretching into the hills",
      "Gateway to the Isle of Skye via the Skye Bridge"
    ],
    tip: "Stop at the Cluanie Inn for the best views up Glen Shiel. Drive east to west (towards Dornie) so the castle reveal is your finale.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Five_Sisters_of_Kintail.jpg?width=800", caption: "The Five Sisters of Kintail above Glen Shiel" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Eilean_Donan_Castle.jpg?width=800", caption: "Eilean Donan Castle on Loch Duich" }
    ]
  },
  {
    id: 24,
    regionRank: 10,
    waypoints: [[57.58, -5.077], [57.413, -5.294], [57.275, -5.714]],
    name: "Glen Carron (A890)",
    region: "Scotland",
    county: "Wester Ross, Highland",
    lat: 57.41,
    lng: -5.29,
    distance: "28 miles",
    difficulty: "challenging",
    elevation: "600 ft max",
    roadDesignation: "A890",
    description: "The A890 follows the River Carron through a dramatic Highland glen connecting Achnasheen to the Kyle of Lochalsh. Narrow, sinuous, and largely single-track, this road demands respect and rewards patience. The glen opens progressively to reveal increasingly spectacular coastal views as it descends towards the sea.",
    highlights: [
      "Narrow single-track road with sharp blind bends",
      "River Carron — excellent salmon and trout fishing",
      "Lochcarron village with views across the sea loch",
      "Gateway to Attadale Gardens and the southern Torridon hills"
    ],
    tip: "Use passing places correctly — frustration rises quickly if etiquette breaks down. The section above Lochcarron offers the most dramatic views.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lochcarron%20Village%20store%20-%20geograph.org.uk%20-%20885555.jpg?width=800", caption: "Lochcarron village on the shores of the sea loch" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Luib,%20Glen%20Carron%20-%20geograph.org.uk%20-%208069017.jpg?width=800", caption: "The narrow road threading through Glen Carron" }
    ]
  },
  {
    id: 25,
    regionRank: 6,
    waypoints: [[57.603, -5.303], [57.54, -5.485], [57.516, -5.63]],
    name: "Torridon Road (A832)",
    region: "Scotland",
    county: "Wester Ross, Highland",
    lat: 57.56,
    lng: -5.49,
    distance: "22 miles",
    difficulty: "scenic",
    elevation: "400 ft max",
    roadDesignation: "A832",
    description: "The road to Torridon weaves through one of Scotland's most ancient and otherworldly landscapes, dominated by vast Torridonian sandstone mountains — some of the oldest rocks on Earth. Beinn Eighe, Liathach, and Beinn Alligin create a skyline like no other in Britain, while the single-track road below demands constant attention.",
    highlights: [
      "Torridonian sandstone mountains — 750 million years old",
      "Beinn Eighe National Nature Reserve — Britain's first",
      "Upper Loch Torridon — a wilderness of water and rock",
      "Red deer frequently visible on the hillsides"
    ],
    tip: "The road beyond Torridon village to Diabaig is a spectacular 7-mile extension ending at a remote fishing village — only attempt in a small car.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Liathach%20-%20Flickr%20-%20Robert%20J%20Heath.jpg?width=800", caption: "Liathach — the great mountain above Torridon" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Loch%20Torridon,%20Scotland.jpg?width=800", caption: "Upper Loch Torridon in evening light" }
    ]
  },
  {
    id: 26,
    regionRank: 9,
    waypoints: [[57.85, -5.171], [57.998, -5.06], [58.152, -4.993]],
    name: "Assynt Inselbergs (A835)",
    region: "Scotland",
    county: "Highland",
    lat: 57.88,
    lng: -5.10,
    distance: "12 miles",
    difficulty: "scenic",
    elevation: "350 ft max",
    roadDesignation: "A835",
    description: "The section of the A835 approaching Ullapool from the south passes through some of the most bizarre and beautiful landscape in Scotland — the Assynt inselbergs of Stac Pollaidh, Suilven, and Cùl Mòr rise like isolated rock islands above the blanket bog. This is a landscape unlike anywhere else in Britain, and the road passes right through the heart of it.",
    highlights: [
      "Stac Pollaidh — the most dramatic small mountain in Scotland",
      "Suilven rising impossibly from the flat moorland",
      "A succession of wilderness lochs flanking the road",
      "Inchnadamph — gateway to caves and ancient Bone Cave archaeology"
    ],
    tip: "Approaching from the south, the reveal of the Assynt inselbergs as you crest the ridge is one of Scotland's great driving moments. Pull over often.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stac_Pollaidh.jpg?width=800", caption: "Stac Pollaidh visible from the A835" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Suilven.jpg?width=800", caption: "Suilven rising from the Assynt moorland" }
    ]
  },
  {
    id: 27,
    regionRank: 15,
    waypoints: [[56.857, -2.561], [56.893, -2.611], [57.048, -2.494]],
    name: "Cairn o'Mount (B974)",
    region: "Scotland",
    county: "Aberdeenshire",
    lat: 56.90,
    lng: -2.61,
    distance: "13 miles",
    difficulty: "thrilling",
    elevation: "1,488 ft summit",
    roadDesignation: "B974",
    description: "Often described as the best road in the north east of Scotland, the B974 climbs from Fettercairn through forests to open Grampian moorland before descending to Banchory. The summit viewpoint reveals a panorama stretching to Lochnagar and the Cairngorms. Fast flowing bends lead to technical sections that reward commitment.",
    highlights: [
      "Summit plateau at 1,488 ft with Cairngorm views",
      "Fast sweeping descent into the Dee Valley",
      "Fettercairn village with its historic triumphal arch",
      "Exceptional road surface through varied terrain"
    ],
    tip: "The ascent from Fettercairn is the more gradual, flowing approach. The summit viewpoint is worth stopping at in clear conditions.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B974%20and%20the%20Cairn%20o%27%20Mount%20-%20geograph.org.uk%20-%20549973.jpg?width=800", caption: "The B974 climbing through Grampian moorland" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fettercairn%20Arch%20-%20geograph.org.uk%20-%203749519.jpg?width=800", caption: "The historic triumphal arch at Fettercairn" }
    ]
  },
  {
    id: 28,
    regionRank: 12,
    waypoints: [[55.574, -5.147], [55.58, -5.198], [55.536, -5.323]],
    name: "The String Road (B880), Isle of Arran",
    region: "Scotland",
    county: "North Ayrshire",
    lat: 55.59,
    lng: -5.24,
    distance: "8 miles",
    difficulty: "thrilling",
    elevation: "1,099 ft summit",
    roadDesignation: "B880",
    description: "Cutting across the heart of the Isle of Arran from Brodick to Blackwaterfoot, the String Road delivers a concentrated blast of Highland-style driving within easy reach of Glasgow. The road climbs steeply to a moorland plateau with views across the Kilbrannan Sound to Kintyre, then descends in tight switchbacks. Highland drama on a single ferry trip.",
    highlights: [
      "Highland scenery reachable by ferry from Ardrossan",
      "Summit views across to the Kintyre Peninsula",
      "Combines perfectly with the coastal A841 circuit",
      "Red squirrels and red deer resident on the island"
    ],
    tip: "Combine the String Road with a full circuit of the coastal A841 for an excellent varied day's driving in a compact and beautiful setting.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Isle_of_Arran.jpg?width=800", caption: "The Isle of Arran from the Ayrshire coast" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20Fell%20(35159174394).jpg?width=800", caption: "Goat Fell — Arran's highest peak above Brodick" }
    ]
  },
  {
    id: 29,
    regionRank: 11,
    waypoints: [[55.336, -3.445], [55.421, -3.311], [55.479, -3.225], [55.553, -2.845]],
    name: "Grey Mare's Tail (A708)",
    region: "Scotland",
    county: "Dumfries & Galloway",
    lat: 55.42,
    lng: -3.31,
    distance: "20 miles",
    difficulty: "scenic",
    elevation: "1,000 ft max",
    roadDesignation: "A708",
    description: "The A708 between Moffat and Selkirk passes beside one of Scotland's highest waterfalls — the dramatic Grey Mare's Tail — and climbs to the remote St Mary's Loch. The road skirts the edge of wild Border moorland and follows the Yarrow Valley on its descent, delivering varied and quietly spectacular Border scenery throughout.",
    highlights: [
      "Grey Mare's Tail waterfall — 200ft drop visible from the road",
      "St Mary's Loch — largest natural loch in the Southern Uplands",
      "Tibbie Shiels Inn — a legendary meeting place since 1823",
      "Remote Border moorland little changed for centuries"
    ],
    tip: "Combine with the A701 over the Devil's Beef Tub for a full day of dramatic Scottish Borders driving.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grey%20Mare%27s%20Tail%20Waterfall%20near%20Moffat%20-%20geograph.org.uk%20-%204871071.jpg?width=800", caption: "The Grey Mare's Tail waterfall above the A708" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Southern%20Upland%20Way%20nr%20St%20Mary%27s%20Loch%20-%20geograph.org.uk%20-%202620592.jpg?width=800", caption: "St Mary's Loch in the Southern Uplands" }
    ]
  },
  {
    id: 30,
    regionRank: 13,
    waypoints: [[56.434, -5.234], [56.391, -5.123], [56.401, -4.996]],
    name: "Pass of Brander (A85)",
    region: "Scotland",
    county: "Argyll & Bute",
    lat: 56.39,
    lng: -5.12,
    distance: "8 miles",
    difficulty: "challenging",
    elevation: "400 ft max",
    roadDesignation: "A85",
    description: "The Pass of Brander squeezes the A85 between the steep flanks of Ben Cruachan and the dark waters of Loch Awe in a narrow, atmospheric gorge. The road is tight, the rock faces close, and the views across the loch to Kilchurn Castle are extraordinary. A short but dramatic section on the road west to Oban.",
    highlights: [
      "Ben Cruachan — the hollow mountain with a pumped-storage hydro plant inside",
      "Loch Awe — the longest freshwater loch in Scotland",
      "Kilchurn Castle ruins at the head of the loch",
      "Cruachan Visitor Centre — tours inside the mountain cavern"
    ],
    tip: "Visit Cruachan Visitor Centre to tour the vast cavern inside Ben Cruachan. The section along Loch Awe before the pass is equally scenic.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Brander%20Pass,%20A85%20Loch%20Awe.%20-%20geograph.org.uk%20-%20195298.jpg?width=800", caption: "The A85 threading through the Pass of Brander" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kilchurn_Castle.jpg?width=800", caption: "Kilchurn Castle ruins on Loch Awe" }
    ]
  },
  {
    id: 31,
    regionRank: 14,
    waypoints: [[56.679, -5.178], [56.643, -5.374], [56.459, -5.389]],
    name: "Appin Road (A828)",
    region: "Scotland",
    county: "Highland",
    lat: 56.67,
    lng: -5.27,
    distance: "18 miles",
    difficulty: "scenic",
    elevation: "300 ft max",
    roadDesignation: "A828",
    description: "Running north from Ballachulish through the ancient clan territory of Appin, the A828 follows the shore of Loch Linnhe and Loch Creran with constant views across to Morvern. Castle Stalker — the lone tower house on its tidal islet — is one of the most strikingly situated castles in Scotland, appearing unexpectedly as the road rounds a bend.",
    highlights: [
      "Castle Stalker — the most perfectly sited castle in Scotland",
      "Views across Loch Linnhe to the Morvern hills",
      "Ballachulish Bridge linking to Glencoe",
      "Sea eagles regularly spotted over the lochs"
    ],
    tip: "Castle Stalker viewpoint is at a small layby — easy to miss at speed. The road continues excellently north to Connel Bridge.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Castle_Stalker.jpg?width=800", caption: "Castle Stalker on its tidal islet in Loch Laich" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Loch_Linnhe.jpg?width=800", caption: "Loch Linnhe from the A828" }
    ]
  },
  {
    id: 32,
    regionRank: 16,
    waypoints: [[56.003, -4.58], [56.1, -4.634], [56.198, -4.713], [56.283, -4.721]],
    name: "Loch Lomond (A82)",
    region: "Scotland",
    county: "Argyll & Bute / West Dunbartonshire",
    lat: 56.19,
    lng: -4.63,
    distance: "24 miles",
    difficulty: "scenic",
    elevation: "200 ft max",
    roadDesignation: "A82",
    description: "The western shore of Loch Lomond carries the A82 through the Trossachs on one of Scotland's most celebrated scenic drives. The road hugs the lochside for miles, with wooded Ben Lomond dominating the far shore and the Highland Boundary Fault marking the transition from Lowlands to Highlands. Popular but perpetually beautiful.",
    highlights: [
      "Ben Lomond — the most southerly Munro, mirrored in the loch",
      "Luss village — one of Scotland's most photographed villages",
      "The narrows at Tarbet where loch meets sea loch",
      "Rowardennan — start of the West Highland Way"
    ],
    tip: "Can be very busy at weekends. Early mornings in autumn offer low mist on the water and dramatic light. The section north of Tarbet is the most spectacular.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Loch_Lomond.jpg?width=800", caption: "Loch Lomond from the western shore" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Luss_village.jpg?width=800", caption: "Luss village on the banks of Loch Lomond" }
    ]
  },
  {
    id: 33,
    regionRank: 17,
    waypoints: [[56.464, -5.7], [56.342, -6.067], [56.322, -6.368]],
    name: "Ross of Mull (A849)",
    region: "Scotland",
    county: "Argyll & Bute",
    lat: 56.34,
    lng: -6.02,
    distance: "28 miles",
    difficulty: "thrilling",
    elevation: "400 ft max",
    roadDesignation: "A849",
    description: "The single-track A849 runs the length of the Ross of Mull to Fionnphort — the departure point for the sacred Isle of Iona. The road is narrow, technical, and flanked by pink granite headlands and sheltered bays. The sense of remoteness builds with every mile, culminating in the white sands at the road's end.",
    highlights: [
      "Fionnphort — departure point for the sacred Isle of Iona",
      "Dramatic pink granite sea cliffs and turquoise bays",
      "Bunessan village at the peninsula's midpoint",
      "Ben More looming above the northern horizon"
    ],
    tip: "Take the ferry to Iona — the island's Abbey is one of the most important religious sites in British history. The return drive at sunset is unforgettable.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Iona_Abbey.jpg?width=800", caption: "Iona Abbey — destination at the end of the A849" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rocky%20coastline%20near%20Malcolm%27s%20Point%20-%20geograph.org.uk%20-%202391478.jpg?width=800", caption: "The Ross of Mull coastline" }
    ]
  },
  {
    id: 34,
    regionRank: 19,
    waypoints: [[58.481, -4.417], [58.523, -4.053], [58.591, -3.519]],
    name: "North Coast — Tongue to Thurso (A836)",
    region: "Scotland",
    county: "Highland",
    lat: 58.47,
    lng: -4.42,
    distance: "38 miles",
    difficulty: "scenic",
    elevation: "400 ft max",
    roadDesignation: "A836",
    description: "The A836 along Scotland's north coast between Tongue and Thurso passes through some of the most desolate and beautiful scenery in Britain — vast empty beaches, towering sea stacks, and the brooding mass of Ben Hope to the south. The road is faster here than the western NC500, but the landscape is no less dramatic.",
    highlights: [
      "Smoo Cave — the largest sea cave in Britain accessible by road",
      "Dunnet Head — the most northerly point on the British mainland",
      "Vast empty beaches at Tongue and Bettyhill",
      "Ben Hope and Ben Loyal rising from the flat Flow Country"
    ],
    tip: "Dunnet Head, not John o'Groats, is the true most northerly point of mainland Britain — it's a 5-mile detour that's well worth taking.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dunnet%20Head%20Lighthouse,%20Dunnet%20Head%20Peninsula,%20Caithness%20-%20geograph.org.uk%20-%203662409.jpg?width=800", caption: "Dunnet Head — the most northerly point of mainland Britain" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Signal%20House,%20Kyle%20of%20Tongue%20-%20geograph.org.uk%20-%201423.jpg?width=800", caption: "The Kyle of Tongue causeway on the A836" }
    ]
  },
  {
    id: 35,
    regionRank: 18,
    waypoints: [[57.144, -4.682], [57.254, -4.497], [57.365, -4.276]],
    name: "Loch Ness South Shore (B862)",
    region: "Scotland",
    county: "Highland",
    lat: 57.26,
    lng: -4.53,
    distance: "28 miles",
    difficulty: "scenic",
    elevation: "600 ft max",
    roadDesignation: "B862",
    description: "While the A82 rushes past on the north shore of Loch Ness, the largely single-track B862 follows the quieter southern shore, climbing high above the water and offering aerial views along the length of Britain's deepest loch. Fort Augustus to Foyers is the finest section, passing the Falls of Foyers before descending to Inverness.",
    highlights: [
      "Elevated views along the full length of Loch Ness",
      "Falls of Foyers — a spectacular 60ft woodland waterfall",
      "Far fewer tourists than the A82 on the opposite shore",
      "General Wade's military road — one of Scotland's oldest engineered routes"
    ],
    tip: "Combine with the A82 for a full loch circuit. The B862 section above Foyers has the best high-level views of the loch.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Loch_Ness.jpg?width=800", caption: "Loch Ness from the southern shore" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waterval%20Falls%20of%20Foyers,%20RP-F-F01185-I.jpg?width=800", caption: "The Falls of Foyers on the south shore" }
    ]
  },

  // --- WALES ---
  {
    id: 36,
    regionRank: 6,
    waypoints: [[53.006, -4.103], [52.982, -4.098], [52.918, -4.135]],
    name: "Aberglaslyn Pass (A498)",
    region: "Wales",
    county: "Gwynedd",
    lat: 52.98,
    lng: -4.08,
    distance: "5 miles",
    difficulty: "thrilling",
    elevation: "600 ft max",
    roadDesignation: "A498",
    description: "The Aberglaslyn Pass plunges the A498 through a narrow, rock-walled gorge carved by the River Glaslyn, with towering cliffs pressing in from both sides. The combination of tight bends, rock overhangs, and the river rushing below creates intense geological drama. Short but among the most atmospheric five miles in Wales.",
    highlights: [
      "Sheer cliff walls channelling the road through the gorge",
      "The rushing River Glaslyn visible below on the descent",
      "Beddgelert village — one of the most charming in Snowdonia",
      "Links to Llanberis Pass for a full Snowdonia circuit"
    ],
    tip: "Drive north to south (Beddgelert to Porthmadog) for the best view down the gorge on the descent. Early morning avoids tourist traffic.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aberglaslyn_Pass.jpg?width=800", caption: "The dramatic Aberglaslyn Pass gorge" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Beddgelert.jpg?width=800", caption: "Beddgelert village at the northern end of the pass" }
    ]
  },
  {
    id: 37,
    regionRank: 11,
    waypoints: [[52.301, -3.51], [52.285, -3.706], [52.252, -3.793]],
    name: "Elan Valley (B4518)",
    region: "Wales",
    county: "Powys",
    lat: 52.29,
    lng: -3.70,
    distance: "15 miles",
    difficulty: "scenic",
    elevation: "1,300 ft max",
    roadDesignation: "B4518",
    description: "The Elan Valley road loops past a succession of stunning Victorian dams and their reservoirs in some of Wales's most remote countryside. Built to supply Birmingham with water, the dams are magnificent engineering achievements set against wild Welsh moorland. The road combines dramatic reservoir scenery with open, flowing moorland driving.",
    highlights: [
      "Five spectacular Victorian dams and their reservoir lakes",
      "Red kites — the valley holds a thriving resident population",
      "Craig Goch dam — the most dramatic of the five",
      "Claerwen Reservoir — the wildest and least-visited section"
    ],
    tip: "The Claerwen reservoir extension is worth the extra miles — fewer visitors and the most wild, open moorland scenery in mid-Wales.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Penygarreg%20Reservoir,%20Elan%20Valley,%20Mid-Wales%20-%20geograph.org.uk%20-%202749992.jpg?width=800", caption: "The Elan Valley reservoir with its Victorian dam" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Craig%20Goch%20Reservoir%20and%20Dam,%20Elan%20Valley,%20Mid-Wales%20-%20geograph.org.uk%20-%202750368.jpg?width=800", caption: "Craig Goch dam — the most spectacular in the valley" }
    ]
  },
  {
    id: 38,
    regionRank: 9,
    waypoints: [[51.946, -3.393], [51.997, -3.291], [52.149, -3.407]],
    name: "A470 Brecon to Builth Wells",
    region: "Wales",
    county: "Powys",
    lat: 51.95,
    lng: -3.42,
    distance: "18 miles",
    difficulty: "challenging",
    elevation: "1,100 ft max",
    roadDesignation: "A470",
    description: "This section of the A470 descends from the northern edge of the Brecon Beacons through the Wye Valley towards Builth Wells. The road follows the River Wye with flowing bends that allow a satisfying rhythm, passing through unspoilt market towns and valley farmland. A quieter, more pastoral Welsh driving experience with the mountains behind.",
    highlights: [
      "Upper Wye Valley — one of the most beautiful river valleys in Wales",
      "Views back to the Brecon Beacons as you descend",
      "Llyswen and Erwood — picturesque Wye Valley villages",
      "Builth Wells — home of the Royal Welsh Showground"
    ],
    tip: "Drive south to north to use the Beacons as your backdrop. Combine with the A4059 (Storey Arms) for a full Brecon Beacons loop.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20River%20Wye%20and%20Wye%20valley%20-%20geograph.org.uk%20-%207451700.jpg?width=800", caption: "The upper Wye Valley from the A470" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Brecon_Beacons.jpg?width=800", caption: "The Brecon Beacons visible from the Wye Valley approach" }
    ]
  },
  {
    id: 39,
    regionRank: 13,
    waypoints: [[52.909, -3.593], [52.876, -3.673], [52.854, -3.739]],
    name: "Bala Lake Road (A494)",
    region: "Wales",
    county: "Gwynedd",
    lat: 52.88,
    lng: -3.68,
    distance: "12 miles",
    difficulty: "scenic",
    elevation: "700 ft max",
    roadDesignation: "A494",
    description: "The A494 follows the full length of Llyn Tegid — the largest natural lake in Wales — before climbing through the Dee Valley to Ruthin. The lakeshore section offers a beautifully relaxed driving experience with the mountains of Aran Benllyn reflected in still water. A road that rewards slow, appreciative driving.",
    highlights: [
      "Llyn Tegid — the largest natural lake in Wales",
      "Bala town — a stronghold of the Welsh language",
      "White-water canoeing on the River Tryweryn below the dam",
      "Views to the Aran and Berwyn mountain ranges"
    ],
    tip: "The narrow-gauge Bala Lake Railway runs alongside the road — the train journey gives a completely different perspective on the same scenery.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bala_Lake.jpg?width=800", caption: "Llyn Tegid (Bala Lake) — the largest natural lake in Wales" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bala%20Lake%20Railway.%20(43793124142).jpg?width=800", caption: "The narrow-gauge Bala Lake Railway alongside the road" }
    ]
  },
  {
    id: 40,
    regionRank: 14,
    waypoints: [[52.726, -4.057], [52.809, -4.115], [52.86, -4.107]],
    name: "Barmouth to Harlech (A496)",
    region: "Wales",
    county: "Gwynedd",
    lat: 52.74,
    lng: -4.07,
    distance: "14 miles",
    difficulty: "scenic",
    elevation: "300 ft max",
    roadDesignation: "A496",
    description: "The A496 traces the northern shore of the Mawddach Estuary before turning north along Cardigan Bay with constant views across the water to the Llyn Peninsula. Harlech Castle dominates the headland above, and the dune systems of Morfa Harlech create a sense of elemental coastal drama. One of Wales's finest coastal drives.",
    highlights: [
      "Mawddach Estuary — consistently voted Wales's most beautiful view",
      "Harlech Castle — a UNESCO World Heritage Site above the sea",
      "Barmouth Bridge — the longest wooden railway viaduct in Wales",
      "Morfa Harlech sand dune system — among the largest in Wales"
    ],
    tip: "Stop at the Panorama Walk viewpoint above Barmouth for the definitive Mawddach Estuary view before starting the drive north.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mawddach%20Estuary%20and%20Barmouth%20-%20geograph.org.uk%20-%208137366.jpg?width=800", caption: "The Mawddach Estuary from the A496" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Harlech_Castle.jpg?width=800", caption: "Harlech Castle above Cardigan Bay" }
    ]
  },
  {
    id: 41,
    regionRank: 19,
    waypoints: [[52.594, -3.858], [52.5, -3.983], [52.415, -4.082]],
    name: "Machynlleth to Aberystwyth (A487)",
    region: "Wales",
    county: "Ceredigion",
    lat: 52.55,
    lng: -3.95,
    distance: "18 miles",
    difficulty: "challenging",
    elevation: "800 ft max",
    roadDesignation: "A487",
    description: "This section of the A487 crosses the hills between Machynlleth and Aberystwyth through characterful mid-Wales landscape — a mixture of dense forestry, open moorland, and glimpses of Cardigan Bay. The road climbs and falls repeatedly with satisfying flowing bends and excellent visibility.",
    highlights: [
      "Furnace village — a beautifully preserved industrial heritage site",
      "Aberystwyth — a vibrant university and seaside town at the finish",
      "Borth Bog — one of the best-preserved raised peat bogs in Britain",
      "Views across Cardigan Bay to the Llyn Peninsula on clear days"
    ],
    tip: "Divert onto the B4572 for the spectacular view from Bryn Dinas into the Dyfi Estuary — one of the finest vantage points in mid-Wales.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aberystwyth%20Seafront%20Shelter.jpg?width=800", caption: "Aberystwyth — destination at the end of the A487" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20tidal%20Afon%20Dyfi%20-%20geograph.org.uk%20-%202619207.jpg?width=800", caption: "The Dyfi Estuary from the hills above" }
    ]
  },
  {
    id: 42,
    regionRank: 12,
    waypoints: [[52.741, -3.883], [52.782, -3.884], [52.909, -3.593]],
    name: "A470 Dolgellau to Bala",
    region: "Wales",
    county: "Gwynedd",
    lat: 52.82,
    lng: -3.87,
    distance: "18 miles",
    difficulty: "challenging",
    elevation: "1,000 ft max",
    roadDesignation: "A470",
    description: "This section of the A470 climbs from Dolgellau into the high moorland between the Aran and Berwyn mountains, passing Llyn Tegid before dropping into Bala. The road crosses some of the most dramatically empty upland in Wales — genuine wilderness driving with excellent sight lines and a satisfying mix of fast and technical sections.",
    highlights: [
      "Open moorland with views to the Aran mountain group",
      "Prysor Valley — a secret glacial trough barely known outside Wales",
      "Cross Foxes junction — a classic driver's waypoint in Snowdonia",
      "The descent into the Dee Valley is fast and satisfying"
    ],
    tip: "The short A494 south from Bala into the Dee Valley adds another excellent layer — take it before heading home.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dolgellau.jpg?width=800", caption: "Dolgellau — starting point of the A470 climb" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aran%20Fawddwy%20-%20geograph.org.uk%20-%203876168.jpg?width=800", caption: "The Aran mountains from the high moorland" }
    ]
  },
  {
    id: 43,
    regionRank: 7,
    waypoints: [[51.655, -3.492], [51.73, -3.502], [51.724, -3.537]],
    name: "Rhigos Mountain Road (A4061)",
    region: "Wales",
    county: "Rhondda Cynon Taf",
    lat: 51.73,
    lng: -3.50,
    distance: "8 miles",
    difficulty: "thrilling",
    elevation: "1,670 ft summit",
    roadDesignation: "A4061",
    description: "The A4061 climbs from Treorchy in the Rhondda Valley over the Rhigos mountain to Hirwaun in a succession of fast, open bends. The summit plateau sits at over 1,600 feet and commands views across the South Wales valleys and the Brecon Beacons beyond. Fast, windswept, and exhilarating — one of South Wales's finest driving roads.",
    highlights: [
      "Summit plateau with panoramic views across South Wales",
      "Fast, open bends on the climb from the Rhondda",
      "The contrast between industrial valleys below and wild moor above",
      "Links to the A4107 for a spectacular South Wales mountain circuit"
    ],
    tip: "Combine with the A4107 Bwlch Mountain Road for a spectacular South Wales mountain loop, dropping into each valley before climbing again.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Rhigos%20(geograph%206234062).jpg?width=800", caption: "The Rhigos mountain summit plateau" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rhondda%20Fach%20valley%20from%20Hillside%20Terrace%20-%20geograph.org.uk%20-%201663352.jpg?width=800", caption: "The Rhondda Valley far below the mountain road" }
    ]
  },
  {
    id: 44,
    regionRank: 8,
    waypoints: [[51.672, -3.474], [51.72, -3.614], [51.711, -3.656]],
    name: "Bwlch Mountain Road (A4107)",
    region: "Wales",
    county: "Neath Port Talbot",
    lat: 51.72,
    lng: -3.61,
    distance: "6 miles",
    difficulty: "thrilling",
    elevation: "1,526 ft summit",
    roadDesignation: "A4107",
    description: "The A4107 connects Treherbert to Cymmer across the exposed ridge between the Rhondda and the Afan Forest valleys, reaching over 1,500 feet with open views in every direction. The road is fast, the gradients are severe, and the summit section is completely exposed to the elements. A muscular, uncompromising South Wales mountain road.",
    highlights: [
      "Exposed summit ridge with far-reaching views in all directions",
      "Severe gradients and fast open bends",
      "Links the Rhondda and Afan Forest valleys",
      "Part of the South Wales mountain road circuit"
    ],
    tip: "Beware of ice and mist in winter — this road is exposed and can close in severe weather. The Afan Forest Park at the bottom is worth exploring.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20Bikers%20at%20Afan%20Argoed%20country%20park%20-%20geograph.org.uk%20-%20352329.jpg?width=800", caption: "Afan Forest Park at the foot of the mountain" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/South%20along%20Oakfield%20Terrace,%20Nantymoel%20-%20geograph.org.uk%20-%205887761.jpg?width=800", caption: "The South Wales valley landscape from above" }
    ]
  },
  {
    id: 45,
    regionRank: 17,
    waypoints: [[52.66, -3.148], [52.641, -3.33], [52.636, -3.752]],
    name: "Welshpool to Mallwyd (A458)",
    region: "Wales",
    county: "Powys",
    lat: 52.67,
    lng: -3.44,
    distance: "22 miles",
    difficulty: "challenging",
    elevation: "1,000 ft max",
    roadDesignation: "A458",
    description: "The A458 crosses from the English border through the Banwy Valley to the Dyfi Valley at Mallwyd — a journey from gentle borderland to the raw heart of Wales. The middle section through the Banwy Valley is the highlight, with long sweeping bends through beautiful deciduous woodland alongside a rushing river.",
    highlights: [
      "Banwy Valley — one of Wales's finest hidden river valleys",
      "Llanfair Caereinion — terminus of the Welshpool and Llanfair Railway",
      "Pont Llogel — an ancient stone bridge over the Banwy",
      "Mallwyd — gateway to the Dovey Valley and mid-Wales"
    ],
    tip: "The Dinas Mawddwy branch from Mallwyd is a superb 8-mile extension into the Aran Mountains — take the left turn at the bottom of the valley.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Meadow%20in%20the%20Banwy%20valley%20-%20geograph.org.uk%20-%20560092.jpg?width=800", caption: "The wooded Banwy Valley on the A458" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Welshpool%20^%20Llanfair%20Light%20Railway%20-%20Dougal%20-%20geograph.org.uk%20-%207449190.jpg?width=800", caption: "The Welshpool and Llanfair Light Railway" }
    ]
  },
  {
    id: 46,
    regionRank: 18,
    waypoints: [[52.766, -3.474], [52.79, -3.447], [52.748, -3.436]],
    name: "Lake Vyrnwy Circuit (B4393)",
    region: "Wales",
    county: "Powys",
    lat: 52.77,
    lng: -3.47,
    distance: "12 miles",
    difficulty: "scenic",
    elevation: "900 ft max",
    roadDesignation: "B4393",
    description: "The circuit road around Lake Vyrnwy — a Victorian reservoir in remote Powys — combines elegant Gothic-style architecture, dense conifer forest, and an atmospheric alpine feel unique in Wales. The dam and ornate valve tower are particularly striking, and the 12-mile loop around the lake can be driven indefinitely with pleasure.",
    highlights: [
      "Victorian dam and ornate Gothic valve tower",
      "An alpine atmosphere unique in Wales",
      "RSPB reserve with red squirrels and woodland birds",
      "Views across the lake to the Berwyn mountains"
    ],
    tip: "The RSPB reserve at the southern end has a café and viewpoints — worth stopping for both refreshments and bird watching.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lake_Vyrnwy.jpg?width=800", caption: "Lake Vyrnwy with its Victorian dam and valve tower" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Llyn%20Efyrnwy%20(Lake%20Vyrnwy)%20-%20the%20tower%20-%20geograph.org.uk%20-%20470713.jpg?width=800", caption: "The ornate Gothic valve tower of Lake Vyrnwy" }
    ]
  },
  {
    id: 47,
    regionRank: 15,
    waypoints: [[51.724, -3.537], [51.858, -3.47], [51.946, -3.392]],
    name: "Storey Arms (A4059)",
    region: "Wales",
    county: "Powys / Brecon Beacons",
    lat: 51.86,
    lng: -3.47,
    distance: "10 miles",
    difficulty: "thrilling",
    elevation: "1,440 ft summit",
    roadDesignation: "A4059",
    description: "The A4059 from Hirwaun over the Brecon Beacons to Brecon via the Storey Arms passes through the most dramatic section of the National Park. The road climbs to nearly 1,500 feet beneath the hulking mass of Pen y Fan — the highest peak in South Wales — before descending to the Taff Valley. Dramatic, open, and magnificent.",
    highlights: [
      "Pen y Fan visible from the road — 2,907 ft, highest in South Wales",
      "Storey Arms — the principal walking access point for Pen y Fan",
      "The Neuadd Reservoirs tucked beneath the escarpment",
      "A fast, exhilarating descent from the summit into the Taff Valley"
    ],
    tip: "Park at the Storey Arms layby on the summit and walk the 90-minute route to Pen y Fan for the view back down the road you just drove.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pen_y_Fan.jpg?width=800", caption: "Pen y Fan — the highest point in South Wales" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pen%20Y%20Fan%20and%20Corn%20Du%20-%20geograph.org.uk%20-%203389761.jpg?width=800", caption: "The Brecon Beacons escarpment from the A4059" }
    ]
  },
  {
    id: 48,
    regionRank: 16,
    waypoints: [[53.082, -3.896], [53.09, -3.802]],
    name: "Capel Curig to Betws-y-Coed (A5)",
    region: "Wales",
    county: "Conwy",
    lat: 53.09,
    lng: -3.90,
    distance: "8 miles",
    difficulty: "scenic",
    elevation: "800 ft max",
    roadDesignation: "A5",
    description: "Thomas Telford's A5 between Capel Curig and Betws-y-Coed follows the Conwy Valley through the heart of Snowdonia in a series of fast, well-sighted bends with Moel Siabod filling the horizon. This is the classic route into Snowdonia from the east — well-maintained, fast, and set against superb mountain scenery.",
    highlights: [
      "Moel Siabod — Snowdonia's most elegant mountain from the east",
      "Swallow Falls — Wales's most visited waterfall, a short walk from the road",
      "Betws-y-Coed — the gateway village to Snowdonia",
      "Pont y Pair — a medieval packhorse bridge over the Conwy"
    ],
    tip: "Stop at Swallow Falls, just off the A5 west of Betws-y-Coed. It takes 10 minutes and is genuinely impressive — best after heavy rain.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Moel_Siabod.jpg?width=800", caption: "Moel Siabod from the A5 near Capel Curig" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Swallow%20Falls,%20Betws-y-Coed%20-%20geograph.org.uk%20-%206620765.jpg?width=800", caption: "Swallow Falls near Betws-y-Coed" }
    ]
  },
  {
    id: 49,
    regionRank: 20,
    waypoints: [[52.149, -3.407], [52.1, -3.56], [51.985, -3.488]],
    name: "Mynydd Epynt (B4520)",
    region: "Wales",
    county: "Powys",
    lat: 52.10,
    lng: -3.56,
    distance: "12 miles",
    difficulty: "challenging",
    elevation: "1,440 ft max",
    roadDesignation: "B4520",
    description: "The B4520 crosses the Mynydd Epynt military training range — a vast elevated plateau between Brecon and Builth Wells accessible only via this road. Completely exposed, windswept, and dramatic, it's one of Wales's most unique driving roads. The total emptiness of the surrounding landscape creates an otherworldly atmosphere.",
    highlights: [
      "Active military training area — an utterly empty landscape",
      "Red flag warnings when the range is in use — a genuine thrill factor",
      "Panoramic views across the central Wales plateau",
      "The Upper Chapel road adds a spectacular extension"
    ],
    tip: "Check that the military range is not active before driving (red flags mean stop). The road is open most days — check with the MOD range office.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mynydd%20Epynt%20-%20geograph.org.uk%20-%207800548.jpg?width=800", caption: "The empty military plateau of Mynydd Epynt" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Moorland%20near%20B4519%20-%20geograph.org.uk%20-%20839665.jpg?width=800", caption: "Brecon Beacons visible from the Mynydd Epynt plateau" }
    ]
  },

  // --- ENGLAND: LAKE DISTRICT ---
  {
    id: 50,
    regionRank: 2,
    waypoints: [[54.401, -3.103], [54.393, -3.112], [54.39, -3.178]],
    name: "Wrynose Pass",
    region: "England",
    county: "Cumbria, Lake District",
    lat: 54.39,
    lng: -3.11,
    distance: "2 miles",
    difficulty: "thrilling",
    elevation: "1,281 ft summit",
    roadDesignation: "Unclassified",
    description: "Wrynose Pass is Hardknott's neighbour and, while slightly less brutal, is no less dramatic. The pass climbs from Little Langdale to the Three Shire Stone — where Cumbria, Lancashire, and Yorkshire once met — across open fell with classic Lake District views. Almost always driven as a pair with Hardknott, together they form Britain's most challenging double-pass route.",
    highlights: [
      "Three Shire Stone — the ancient county boundary marker at the summit",
      "Combines with Hardknott for Britain's greatest double-pass drive",
      "Views to the Coniston fells from the summit",
      "Wild camping and fell walking accessible directly from the road"
    ],
    tip: "Drive Hardknott first (west to east) then Wrynose — the climbing direction on both passes is the more dramatic. Allow extra time for the inevitable queues.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wrynose%20Pass,%20looking%20west,%20down%20into%20the%20Duddon%20Valley,%20sunset%20-%20geograph.org.uk%20-%203383211.jpg?width=800", caption: "Wrynose Pass — always driven alongside Hardknott" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Three%20Shire%20Stone,%20Wrynose%20Pass%20-%20geograph.org.uk%20-%2020673.jpg?width=800", caption: "The Three Shire Stone at the summit of Wrynose Pass" }
    ]
  },
  {
    id: 51,
    regionRank: 12,
    waypoints: [[54.6, -3.135], [54.543, -3.142], [54.519, -3.152]],
    name: "Borrowdale (B5289)",
    region: "England",
    county: "Cumbria, Lake District",
    lat: 54.53,
    lng: -3.14,
    distance: "8 miles",
    difficulty: "scenic",
    elevation: "800 ft max",
    roadDesignation: "B5289",
    description: "Borrowdale is widely regarded as the most beautiful valley in England, and the B5289 threading through it delivers an unbroken sequence of classic Lake District views — Derwent Water, the Jaws of Borrowdale, the Bowder Stone, and the wild upper valley beneath Great Gable and Scafell Pike. A narrow, intimate road through an extraordinary landscape.",
    highlights: [
      "Derwent Water — the Queen of the English Lakes",
      "The Jaws of Borrowdale — where the valley narrows dramatically",
      "Bowder Stone — a 2,000-tonne glacial erratic beside the road",
      "Seatoller — gateway to Honister Pass and Buttermere"
    ],
    tip: "Continue beyond Seatoller to Honister Pass for a complete Borrowdale loop. The road south from Keswick along Derwent Water's western shore is equally beautiful.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Derwent_Water.jpg?width=800", caption: "Derwent Water from the B5289" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Borrowdale%20Valley,%20from%20Bowder%20Stone,%20Lake%20District,%20England-LCCN2002696842.jpg?width=800", caption: "The Bowder Stone — a glacial erratic in Borrowdale" }
    ]
  },
  {
    id: 52,
    regionRank: 13,
    waypoints: [[54.437, -2.989], [54.446, -3.082]],
    name: "Great Langdale (B5343)",
    region: "England",
    county: "Cumbria, Lake District",
    lat: 54.44,
    lng: -3.08,
    distance: "7 miles",
    difficulty: "challenging",
    elevation: "900 ft max",
    roadDesignation: "B5343",
    description: "Great Langdale is the classic valley drive of the Lake District, leading the B5343 beneath the dramatic Langdale Pikes towards the remote valley head at Dungeon Ghyll. The road ends with the mountains rising sheer above, creating an almost cinematic sense of drama. Technical in places and rewarding throughout.",
    highlights: [
      "The Langdale Pikes — the most iconic skyline in the Lake District",
      "Dungeon Ghyll Force — a spectacular waterfall at the valley head",
      "Stickle Tarn visible on the fells above",
      "Old Dungeon Ghyll Hotel — a legendary climbers' and walkers' pub"
    ],
    tip: "The valley dead-ends for cars at Dungeon Ghyll — this is a there-and-back drive, best at dawn before the car parks fill in summer.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Langdale_Pikes.jpg?width=800", caption: "The Langdale Pikes above Great Langdale" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Langdale%20Pikes%20-%20geograph.org.uk%20-%201252039.jpg?width=800", caption: "The B5343 threading through Great Langdale" }
    ]
  },
  {
    id: 53,
    regionRank: 21,
    waypoints: [[54.366, -2.902], [54.461, -3.009], [54.527, -3.046], [54.6, -3.134]],
    name: "Dunmail Raise (A591)",
    region: "England",
    county: "Cumbria, Lake District",
    lat: 54.54,
    lng: -3.02,
    distance: "14 miles",
    difficulty: "scenic",
    elevation: "782 ft summit",
    roadDesignation: "A591",
    description: "The A591 between Windermere and Keswick over Dunmail Raise is the classic Lake District spine road, passing through Ambleside, alongside Thirlmere, and over the ancient pass before descending to Keswick. Though busy in summer, the views over Grasmere and the reflections in Thirlmere Reservoir are simply stunning.",
    highlights: [
      "Grasmere — Wordsworth's village, one of the finest in England",
      "Thirlmere Reservoir — 3 miles long beneath the flanks of Helvellyn",
      "Dunmail Raise — an ancient pass steeped in Cumbrian history",
      "Keswick at the northern end — gateway to Skiddaw and Derwent Water"
    ],
    tip: "The parallel B5322 through St John's in the Vale is less busy than the A591 and equally beautiful — use it to escape summer traffic.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grasmere,%20graves%20of%20William%20and%20Dorothy%20Wordsworth%20-%20geograph.org.uk%20-%203386766.jpg?width=800", caption: "Grasmere — a gem of the Lake District" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Thirlmere%20Reservoir%20-%20panoramio.jpg?width=800", caption: "Thirlmere Reservoir beneath Helvellyn" }
    ]
  },
  {
    id: 54,
    regionRank: 17,
    waypoints: [[54.605, -3.193], [54.619, -3.231], [54.617, -3.283]],
    name: "Whinlatter Pass (B5292)",
    region: "England",
    county: "Cumbria, Lake District",
    lat: 54.62,
    lng: -3.22,
    distance: "8 miles",
    difficulty: "scenic",
    elevation: "1,043 ft summit",
    roadDesignation: "B5292",
    description: "The only true forest pass in the Lake District, Whinlatter carries the B5292 through England's only mountain forest between Braithwaite and Lorton Vale. The road climbs through dense spruce and larch to a summit with panoramic views over Bassenthwaite Lake and the Solway Firth beyond. A different, greener character from the open fells.",
    highlights: [
      "England's only mountain forest — dramatic in all seasons",
      "Whinlatter Visitor Centre with resident red squirrel colony",
      "Summit views to Bassenthwaite Lake and Scotland beyond",
      "Osprey camera nest — live feed from May to September"
    ],
    tip: "The forest offers world-class mountain biking on purpose-built trails — if you have a bike rack, this road takes on another dimension entirely.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Road%20to%20Whinlatter%20-%20geograph.org.uk%20-%2089811.jpg?width=800", caption: "Whinlatter Forest — England's only mountain forest" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bassenthwaite_Lake.jpg?width=800", caption: "Bassenthwaite Lake from the Whinlatter summit" }
    ]
  },
  {
    id: 55,
    regionRank: 24,
    waypoints: [[54.664, -2.754], [54.533, -2.676], [54.4, -2.706]],
    name: "Shap Fell (A6)",
    region: "England",
    county: "Cumbria",
    lat: 54.55,
    lng: -2.68,
    distance: "20 miles",
    difficulty: "challenging",
    elevation: "1,350 ft summit",
    roadDesignation: "A6",
    description: "Before the M6 opened, the A6 over Shap Fell was the principal route between England and Scotland — a notorious obstacle for motorists and lorries alike. Today, with the M6 carrying the traffic, the A6 is a peaceful and hugely atmospheric road across exposed Pennine moorland with Shap Abbey and the distant Lakeland fells for company.",
    highlights: [
      "Shap summit — once Britain's most feared hill climb for motorists",
      "Shap Abbey — a ruined 12th-century monastery beside the River Lowther",
      "Historic transport route — used by drovers, coaches, and Bonnie Prince Charlie",
      "Views west to the Lakeland fells from the summit"
    ],
    tip: "Drive it south to north to build gradually to the exposed summit. Combine with the A685 through Tebay Gorge for a complete eastern Cumbria loop.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A6%20across%20Shap%20Fell%20-%20geograph.org.uk%20-%206418285.jpg?width=800", caption: "Shap Fell from the A6 summit" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ruins%20of%20Shap%20Abbey%20beside%20the%20River%20Lowther%20-%20geograph.org.uk%20-%203320625.jpg?width=800", caption: "Shap Abbey ruins beside the River Lowther" }
    ]
  },

  // --- ENGLAND: YORKSHIRE ---
  {
    id: 56,
    regionRank: 22,
    waypoints: [[54.402, -1.735], [54.394, -1.934], [54.388, -2.156], [54.389, -2.263]],
    name: "Swaledale (B6270)",
    region: "England",
    county: "North Yorkshire",
    lat: 54.40,
    lng: -2.06,
    distance: "22 miles",
    difficulty: "scenic",
    elevation: "700 ft max",
    roadDesignation: "B6270",
    description: "Swaledale is the wildest and most remote of the Yorkshire Dales — a deep, narrow valley with grey stone walls threading the fell sides as far as the eye can see. The B6270 follows the River Swale from Richmond to Keld through a succession of unspoilt villages in a landscape virtually unchanged since the 17th century. A road for unhurried appreciation.",
    highlights: [
      "Muker and Keld — the finest villages in the Yorkshire Dales",
      "Kisdon Gorge — the spectacular rock-walled section near Keld",
      "Dry stone walls creating a patchwork of medieval field systems",
      "The meeting point of the Pennine Way and Coast to Coast Walk at Keld"
    ],
    tip: "Turn off for Tan Hill on the B6270 extension — at 1,732 feet, the Tan Hill Inn is England's highest pub and the reward is extraordinary moorland views.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Red%20cow,%20Swaledale.jpg?width=800", caption: "Swaledale from the hillside above Muker" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Muker%20in%20Swaledale%20-%20geograph.org.uk%20-%207594901.jpg?width=800", caption: "Muker village in Swaledale" }
    ]
  },
  {
    id: 57,
    regionRank: 23,
    waypoints: [[54.163, -2.298], [54.178, -2.37], [54.305, -2.199]],
    name: "Ribblehead (B6255)",
    region: "England",
    county: "North Yorkshire",
    lat: 54.23,
    lng: -2.37,
    distance: "14 miles",
    difficulty: "scenic",
    elevation: "1,100 ft max",
    roadDesignation: "B6255",
    description: "The B6255 between Horton-in-Ribblesdale and Hawes crosses the high Pennine plateau beneath the Three Peaks of Pen-y-ghent, Whernside, and Ingleborough. The Ribblehead Viaduct — a Victorian railway masterpiece — appears suddenly and dramatically as the road crosses the open moor. Bleak, beautiful, and elemental.",
    highlights: [
      "Ribblehead Viaduct — 24 arches crossing a wild moorland bowl",
      "The Three Peaks visible from the road simultaneously",
      "Horton-in-Ribblesdale — start of the famous Three Peaks Walk",
      "Pen-y-ghent filling the southern skyline"
    ],
    tip: "Time your drive for when a Settle–Carlisle steam train crosses the viaduct — the combination of steam, stone, and moorland is one of England's great sights.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ribblehead_Viaduct.jpg?width=800", caption: "Ribblehead Viaduct — 24 arches crossing the moorland" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2014%20Three%20Peaks%20view%20from%20Pen-y-ghent.jpg?width=800", caption: "Pen-y-ghent from the Ribblehead approach" }
    ]
  },
  {
    id: 58,
    regionRank: 32,
    waypoints: [[54.246, -0.776], [54.368, -0.718], [54.488, -0.616]],
    name: "North York Moors (A169)",
    region: "England",
    county: "North Yorkshire",
    lat: 54.37,
    lng: -0.73,
    distance: "20 miles",
    difficulty: "scenic",
    elevation: "900 ft max",
    roadDesignation: "A169",
    description: "The A169 between Pickering and Whitby crosses the North York Moors on a high-level route through purple heather moorland with views that extend, on clear days, to the North Sea. The road is fast, open, and consistently attractive, with the descent into Whitby — the most dramatically sited town on the Yorkshire coast — as a fitting finale.",
    highlights: [
      "Flyingdales Early Warning Station — iconic Cold War landmark on the moor",
      "The Lion Inn at Blakey Ridge — one of England's most remote pubs",
      "Whitby — the gothic harbour town with its ruined clifftop abbey",
      "Heather moorland at its best in August and September"
    ],
    tip: "Divert to Goathland (Heartbeat country) for a classic Yorkshire village and some of the finest moorland scenery visible from the road.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/North_York_Moors.jpg?width=800", caption: "Heather moorland on the North York Moors" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Whitby_Abbey.jpg?width=800", caption: "Whitby Abbey on the clifftop above the harbour" }
    ]
  },
  {
    id: 59,
    regionRank: 36,
    waypoints: [[54.244, -1.064], [54.338, -1.066], [54.395, -1.122]],
    name: "Bilsdale (B1257)",
    region: "England",
    county: "North Yorkshire",
    lat: 54.38,
    lng: -1.10,
    distance: "12 miles",
    difficulty: "challenging",
    elevation: "1,100 ft max",
    roadDesignation: "B1257",
    description: "Bilsdale is the hidden driving road of the North York Moors — a narrow, twisting valley road that climbs from Helmsley to the moorland edge at Chop Gate through a series of technical bends that demand commitment and reward skill. Far quieter than the A169, it has the character of a private road through a working Dales valley.",
    highlights: [
      "Spout House pub — a 16th-century thatched inn at the valley head",
      "Technical bends through a tight, wooded valley",
      "Bilsdale TV mast — a distinctive landmark on the summit",
      "Minimal traffic even on summer weekends"
    ],
    tip: "The section between Carlton and Chop Gate is the tightest and most rewarding — save it for a second run once you've learned the road.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bilsdale,%20North%20Yorkshire.jpg?width=800", caption: "The narrow B1257 winding through Bilsdale" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Burnt%20heather%20on%20Glaisdale%20Moor%20-%20geograph.org.uk%20-%206197846.jpg?width=800", caption: "Heather moorland above Bilsdale in summer" }
    ]
  },
  {
    id: 60,
    regionRank: 40,
    waypoints: [[54.488, -0.616], [54.435, -0.529], [54.28, -0.397]],
    name: "Whitby to Scarborough (A171)",
    region: "England",
    county: "North Yorkshire",
    lat: 54.45,
    lng: -0.59,
    distance: "19 miles",
    difficulty: "scenic",
    elevation: "700 ft max",
    roadDesignation: "A171",
    description: "The A171 between Whitby and Scarborough traces the clifftop edge of the Yorkshire coast with periodic glimpses of the sea far below. The road rises and falls dramatically through Robin Hood's Bay and Ravenscar, passing some of the most spectacular sea cliff scenery on the English east coast. A grand touring road with genuine character.",
    highlights: [
      "Ravenscar — a clifftop village above 600-foot sea cliffs",
      "Robin Hood's Bay — arguably the most picturesque village on the Yorkshire coast",
      "Scarborough Castle on its dramatic headland as the destination",
      "Views along the coast to Flamborough Head on clear days"
    ],
    tip: "Stop at Robin Hood's Bay and walk to the cliff edge for the full sense of the Yorkshire coast's dramatic scale. The village below is inaccessible to cars.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Robin%20Hood%E2%80%99s%20Bay,%20Yorkshire%20(52874571583).jpg?width=800", caption: "Robin Hood's Bay — Yorkshire's most picturesque coastal village" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scarborough%20Headland%20^%20Castle%20-%20geograph.org.uk%20-%203833739.jpg?width=800", caption: "Scarborough Castle on its dramatic headland" }
    ]
  },
  {
    id: 61,
    regionRank: 45,
    waypoints: [[54.339, -1.427], [54.314, -1.828], [54.305, -2.199], [54.322, -2.526]],
    name: "Wensleydale (A684)",
    region: "England",
    county: "North Yorkshire",
    lat: 54.30,
    lng: -2.06,
    distance: "38 miles",
    difficulty: "scenic",
    elevation: "900 ft max",
    roadDesignation: "A684",
    description: "Wensleydale is the broadest and most handsome of the Yorkshire Dales, and the A684 follows its full length from Northallerton to Sedbergh past Aysgarth Falls, Bolton Castle, and the famous cheese country around Hawes. The valley floor road is fast and flowing, while side roads into Wharfedale and Swaledale beckon at every turn.",
    highlights: [
      "Aysgarth Falls — three tiers of limestone waterfall",
      "Bolton Castle — where Mary Queen of Scots was imprisoned",
      "Hawes — the famous home of Wensleydale cheese",
      "Hardraw Force — England's highest above-ground waterfall"
    ],
    tip: "Divert onto the B6160 to Aysgarth for the waterfall and continue to Bolton Castle. The detour costs 20 minutes and is absolutely worth it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aysgarth%20Falls%20MMB%2057.jpg?width=800", caption: "Aysgarth Falls in Wensleydale" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bolton_Castle.jpg?width=800", caption: "Bolton Castle — one of England's finest fortified manor houses" }
    ]
  },
  {
    id: 62,
    regionRank: 46,
    waypoints: [[53.986, -1.887], [54.076, -1.994], [54.151, -2.028], [54.198, -2.073]],
    name: "Wharfedale (B6160)",
    region: "England",
    county: "North Yorkshire",
    lat: 54.08,
    lng: -1.98,
    distance: "18 miles",
    difficulty: "scenic",
    elevation: "700 ft max",
    roadDesignation: "B6160",
    description: "The B6160 follows Wharfedale from Bolton Abbey to Buckden through a valley of incomparable beauty — limestone pavements, waterfalls, and villages that seem unchanged in two centuries. Grassington and Kettlewell are the jewels of the valley, while the upper dale narrows dramatically before reaching the lonely limestone plateau of Langstrothdale.",
    highlights: [
      "Bolton Abbey — a ruined Augustinian priory beside the River Wharfe",
      "Grassington — the finest market town in the Dales",
      "Kilnsey Crag — a dramatic 170ft limestone overhang above the road",
      "Kettlewell — a perfect Dales village used in filming Calendar Girls"
    ],
    tip: "Continue the B6160 beyond Buckden to Hubberholme for the complete upper Wharfedale experience. The tiny 12th-century church at Hubberholme is worth every extra mile.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bolton_Abbey.jpg?width=800", caption: "Bolton Abbey on the banks of the River Wharfe" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kilnsey_Crag.jpg?width=800", caption: "Kilnsey Crag — a massive limestone overhang above the B6160" }
    ]
  },

  // --- ENGLAND: PEAK DISTRICT ---
  {
    id: 63,
    regionRank: 19,
    waypoints: [[53.343, -1.773], [53.348, -1.734], [53.357, -1.688]],
    name: "Hope Valley (A625)",
    region: "England",
    county: "Derbyshire",
    lat: 53.35,
    lng: -1.75,
    distance: "12 miles",
    difficulty: "scenic",
    elevation: "900 ft max",
    roadDesignation: "A625",
    description: "The A625 through the Hope Valley passes through the most populated and yet beautiful section of the Peak District — a wide pastoral valley flanked by gritstone escarpments and the limestone plateau. Castleton at the western end provides access to the Peak Cavern cave system, one of England's most spectacular natural wonders.",
    highlights: [
      "Castleton — gateway to four cave systems and Peveril Castle",
      "Win Hill and Lose Hill — the twin sentinels of the Hope Valley",
      "Mam Tor — the 'shivering mountain' on the valley skyline",
      "Bradwell and Hope — genuine Peak District working villages"
    ],
    tip: "The short climb to Mam Tor on the unclassified road from Castleton adds a dramatic elevated perspective on the Hope Valley that the A625 can't provide.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/View%20from%20main%20road%20into%20Castleton%20from%20Hope%20-%20geograph.org.uk%20-%20863020.jpg?width=800", caption: "The Hope Valley from Win Hill" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mam_Tor.jpg?width=800", caption: "Mam Tor — the shivering mountain above Castleton" }
    ]
  },
  {
    id: 64,
    regionRank: 7,
    waypoints: [[53.344, -1.815], [53.34, -1.8]],
    name: "Winnats Pass",
    region: "England",
    county: "Derbyshire",
    lat: 53.34,
    lng: -1.81,
    distance: "1.5 miles",
    difficulty: "thrilling",
    elevation: "1,305 ft summit",
    roadDesignation: "Unclassified",
    description: "Winnats Pass is a glacial meltwater channel cut through the limestone, creating a tight canyon with walls rising 200 feet on both sides. At just 1.5 miles it is short, but the combination of steep gradient, narrow width, and sheer rock walls makes it one of the most viscerally dramatic road experiences in England.",
    highlights: [
      "200ft limestone canyon walls pressing in from both sides",
      "The only road through this section — Mam Tor collapsed in 1977",
      "Blue John Cavern accessible from the summit",
      "Looking back down the pass from the top is as dramatic as the ascent"
    ],
    tip: "Approach from Castleton (eastbound) for the full dramatic effect of the canyon appearing from flat moorland. Incredibly tight with oncoming traffic — patience required.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Winnats_Pass.jpg?width=800", caption: "The limestone canyon of Winnats Pass" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20John%20Cavern%20entrance.jpg?width=800", caption: "Blue John Cavern at the summit of Winnats Pass" }
    ]
  },
  {
    id: 65,
    regionRank: 26,
    waypoints: [[53.215, -1.671], [53.234, -1.762], [53.267, -1.783]],
    name: "Miller's Dale (B6049)",
    region: "England",
    county: "Derbyshire",
    lat: 53.25,
    lng: -1.80,
    distance: "8 miles",
    difficulty: "scenic",
    elevation: "800 ft max",
    roadDesignation: "B6049",
    description: "The B6049 through Miller's Dale drops into one of the most beautiful limestone dales in the Peak District — a narrow gorge with the River Wye threading through steep wooded cliffs. The road is tight in places, with overhanging trees creating a green tunnel effect in summer. A gentler, more intimate driving experience than the high moorland roads nearby.",
    highlights: [
      "Miller's Dale — a deep, wooded limestone gorge",
      "The River Wye visible through the trees below",
      "Tideswell Dale — a spectacular dry valley branching off",
      "Monsal Head viaduct visible on the approach"
    ],
    tip: "Stop at Monsal Head for the viaduct view — one of the Peak District's most photographed spots. Walk down into the dale from the car park for the full scale.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Monsal%20Head,%20Peak%20District,%20Derbyshire,%20UK%20(14588024369).jpg?width=800", caption: "Monsal Head viaduct over the River Wye" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Millers%20Dale%20Station%20(geograph%201664518).jpg?width=800", caption: "The wooded limestone gorge of Miller's Dale" }
    ]
  },
  {
    id: 66,
    regionRank: 31,
    waypoints: [[53.296, -1.671], [53.303, -1.718], [53.298, -1.75]],
    name: "Baslow Edge (A623)",
    region: "England",
    county: "Derbyshire",
    lat: 53.30,
    lng: -1.71,
    distance: "7 miles",
    difficulty: "challenging",
    elevation: "900 ft max",
    roadDesignation: "A623",
    description: "The A623 between Baslow and Stoney Middleton traverses the eastern gritstone edge of the Peak District beneath the dramatic outcrops of Baslow Edge and Froggatt Edge. The road delivers a satisfying mix of fast open sections and technical bends, with gritstone crags above providing a constant backdrop. Chatsworth Park is an unmissable nearby detour.",
    highlights: [
      "Baslow and Froggatt Edge — the finest gritstone crags in England",
      "Chatsworth — the Palace of the Peak, one of England's greatest houses",
      "Curbar Gap — a dramatic natural break in the gritstone escarpment",
      "Stoney Middleton — a unique gorge village with Roman baths"
    ],
    tip: "Divert from the A621 into Chatsworth Park — the drive through the deer park to the house is magnificent and free to use. Return via Beeley and the B6012.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chatsworth_House.jpg?width=800", caption: "Chatsworth House — the Palace of the Peak" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Froggatt_Edge.jpg?width=800", caption: "Froggatt Edge gritstone escarpment above the road" }
    ]
  },
  {
    id: 67,
    regionRank: 37,
    waypoints: [[53.259, -1.914], [53.199, -2.065], [53.161, -2.216]],
    name: "Buxton to Congleton (A54)",
    region: "England",
    county: "Cheshire/Derbyshire",
    lat: 53.21,
    lng: -2.09,
    distance: "14 miles",
    difficulty: "challenging",
    elevation: "1,400 ft max",
    roadDesignation: "A54",
    description: "The A54 crosses wild moorland between Buxton and Congleton via the Wildboarclough valley and the summit at Allgreave. Less famous than Snake Pass and Cat and Fiddle, it has a raw, unpolished quality — long fast sections interrupted by sudden dips and rises that upset a car's balance in the most satisfying way.",
    highlights: [
      "Wildboarclough — the most dramatically named valley in the Peak District",
      "Three Shires Head — where Cheshire, Staffordshire, and Derbyshire meet",
      "Open moorland with minimal traffic even at weekends",
      "Macclesfield Forest visible from the summit"
    ],
    tip: "Combine with the A537 Cat and Fiddle for a spectacular loop — leave Buxton on the A537, return on the A54. The contrast in character between the two roads is striking.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Valley%20above%20Wildboarclough%20-%20geograph.org.uk%20-%20695080.jpg?width=800", caption: "Wildboarclough valley on the A54" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Three_Shires_Head.jpg?width=800", caption: "Three Shires Head — where three counties meet" }
    ]
  },
  {
    id: 68,
    regionRank: 39,
    waypoints: [[53.017, -1.729], [53.091, -1.764], [53.259, -1.914]],
    name: "Tissington (A515)",
    region: "England",
    county: "Derbyshire",
    lat: 53.08,
    lng: -1.76,
    distance: "16 miles",
    difficulty: "scenic",
    elevation: "900 ft max",
    roadDesignation: "A515",
    description: "The A515 between Ashbourne and Buxton crosses the southern White Peak on a high limestone plateau dotted with well-dressing villages and ancient stone field walls. Tissington, Fenny Bentley, and Parwich are among the finest villages in the Peak District, and the road passes close to Dovedale — one of England's most beloved limestone valleys.",
    highlights: [
      "Tissington — one of England's most perfect estate villages",
      "Thorpe village — gateway to the iconic Dovedale gorge",
      "Well-dressing tradition — villages create elaborate floral tableaux each summer",
      "Limestone plateau scenery unique to the southern Peak District"
    ],
    tip: "Park at Dovedale car park and walk the 1-mile path to the Stepping Stones — the best free attraction in the Peak District, easily missed from the A515.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stepping%20stones%20in%20Dovedale%20-%20geograph.org.uk%20-%203875084.jpg?width=800", caption: "The Dovedale gorge — accessible from the A515" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/St%20Mary%27s%20Church%20Tissington%20-%20geograph.org.uk%20-%20180052.jpg?width=800", caption: "Tissington — a gem of a Peak District estate village" }
    ]
  },
  {
    id: 69,
    regionRank: 33,
    waypoints: [[53.32, -1.922], [53.35, -1.865], [53.363, -1.811]],
    name: "Rushup Edge",
    region: "England",
    county: "Derbyshire",
    lat: 53.35,
    lng: -1.85,
    distance: "5 miles",
    difficulty: "thrilling",
    elevation: "1,650 ft summit",
    roadDesignation: "Unclassified",
    description: "The unclassified road from Chapel-en-le-Frith over Rushup Edge to Edale is one of the Peak District's great hidden driving roads. The exposed ridge reaches 1,650 feet with the entire Hope Valley visible below to the east and Kinder Scout's plateau filling the northern horizon. Technical, narrow, and completely unspoilt.",
    highlights: [
      "Rushup Edge summit — one of the highest accessible points by car in the Peak District",
      "Kinder Scout filling the entire northern horizon",
      "Edale at the foot — the start of the Pennine Way",
      "Vale of Edale — an agricultural valley unchanged for centuries"
    ],
    tip: "Only suitable for cars with reasonable ground clearance — the unmetalled section near the top can be rough. Best tackled west to east for the reveal of Kinder Scout.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kinder_Scout.jpg?width=800", caption: "Kinder Scout plateau from Rushup Edge" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Railway%20near%20Edale%20-%20geograph.org.uk%20-%204413393.jpg?width=800", caption: "The Vale of Edale below Rushup Edge" }
    ]
  },

  // --- ENGLAND: COTSWOLDS ---
  {
    id: 70,
    regionRank: 41,
    waypoints: [[52.036, -1.851], [52.041, -1.879], [52.057, -1.778]],
    name: "Broadway Hill (B4632)",
    region: "England",
    county: "Worcestershire/Gloucestershire",
    lat: 52.04,
    lng: -1.88,
    distance: "6 miles",
    difficulty: "scenic",
    elevation: "1,024 ft summit",
    roadDesignation: "B4632",
    description: "The B4632 climbs from Broadway — the showpiece Cotswold village — to the top of the escarpment at Broadway Tower, offering one of the finest views in the English Midlands. On a clear day, 13 counties are visible from the tower. The descent towards Chipping Campden through warm Cotswold stone villages is deeply satisfying.",
    highlights: [
      "Broadway Tower — a folly with 13-county views on clear days",
      "Broadway village — honey-stone cottages on the Cotswold high street",
      "Fish Hill picnic area — a panoramic layby above the Vale of Evesham",
      "Chipping Campden — the most perfect small town in the Cotswolds"
    ],
    tip: "Drive to Broadway Tower before the village fills with visitors. The tower café is excellent and the view across the Vale of Evesham is the best in the Cotswolds.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Broadway_Tower.jpg?width=800", caption: "Broadway Tower on the Cotswold escarpment" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/High%20Street,%20Broadway%20-%20geograph.org.uk%20-%203425481.jpg?width=800", caption: "Broadway village — the jewel of the Cotswolds" }
    ]
  },
  {
    id: 71,
    regionRank: 44,
    waypoints: [[51.933, -1.726], [51.973, -1.882], [51.9, -2.074]],
    name: "Stow Hill (B4077)",
    region: "England",
    county: "Gloucestershire",
    lat: 51.93,
    lng: -1.95,
    distance: "10 miles",
    difficulty: "scenic",
    elevation: "900 ft max",
    roadDesignation: "B4077",
    description: "The B4077 between Stow-on-the-Wold and Cheltenham follows the crest of the Cotswold ridge before dropping dramatically to the Severn plain. The descent past Stanway House is among the most rewarding in the Cotswolds — fast, flowing, and lined with the golden stone walls that define this quintessentially English landscape.",
    highlights: [
      "Stanway House and its magnificent Jacobean gatehouse",
      "Views from the ridge across the Severn Valley to the Welsh hills",
      "Stanton — possibly the most perfectly preserved Cotswold village",
      "The descent to Winchcombe passes Hailes Abbey ruins"
    ],
    tip: "Stop at Stanton village — only 200 yards from the B4077 and almost entirely unspoilt. The walk to Stanway House is equally beautiful.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Stanway%20House%20gatehouse.jpg?width=800", caption: "Stanway House and its Jacobean gatehouse" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cotswold%20Way%20019,%20Stanton%20Village%20Cross-geograph-3661368.jpg?width=800", caption: "Stanton — one of the most perfectly preserved Cotswold villages" }
    ]
  },
  {
    id: 72,
    regionRank: 48,
    waypoints: [[51.717, -1.955], [51.829, -2.074], [51.906, -2.074]],
    name: "Birdlip Hill (A417)",
    region: "England",
    county: "Gloucestershire",
    lat: 51.82,
    lng: -2.07,
    distance: "8 miles",
    difficulty: "challenging",
    elevation: "900 ft Birdlip Hill",
    roadDesignation: "A417",
    description: "Birdlip Hill carries the A417 over the Cotswold escarpment in a long, sweeping descent offering commanding views across the Severn Plain towards the Forest of Dean and the Black Mountains of Wales. The combination of gradient, fast bends, and sheer scale makes this one of the most dramatic escarpment roads in England.",
    highlights: [
      "Views from the Cotswold Edge to the Black Mountains of Wales",
      "The Air Balloon pub — a classic driver's stop at the summit",
      "Crickley Hill Country Park — Iron Age hillfort above the road",
      "Gloucester Cathedral visible in the plain below on clear days"
    ],
    tip: "The northbound (uphill) direction builds more drama — start from Cirencester and use the escarpment as your reward. The Air Balloon pub at the top is a worthy destination.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cotswold%20Escarpment%20with%20Broadway%20Tower%20in%20background%20-%20geograph.org.uk%20-%20208426.jpg?width=800", caption: "The Cotswold escarpment at Birdlip" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Severn%20valley%20farm%20-%20geograph.org.uk%20-%20147594.jpg?width=800", caption: "Views across the Severn Valley from the Cotswold edge" }
    ]
  },
  {
    id: 73,
    regionRank: 51,
    waypoints: [[51.941, -1.545], [51.997, -1.7], [52.036, -1.851]],
    name: "Chipping Norton to Broadway (A44)",
    region: "England",
    county: "Oxfordshire/Worcestershire",
    lat: 51.95,
    lng: -1.72,
    distance: "12 miles",
    difficulty: "scenic",
    elevation: "800 ft max",
    roadDesignation: "A44",
    description: "The A44 crosses the northern Cotswolds between Chipping Norton and Broadway through rolling English countryside that inspired the Romantic poets. The road passes Chastleton House, dips through Moreton-in-Marsh, and climbs back over the ridge to reach Broadway. Consistently beautiful, well-maintained, and quintessentially English.",
    highlights: [
      "Chastleton House — a National Trust Jacobean house with unaltered interiors",
      "Moreton-in-Marsh — a wide market town on the Roman Fosse Way",
      "Four Shires Stone — where four counties once met",
      "The approach to Broadway descending from Burford Hill"
    ],
    tip: "Detour to Chastleton House — the National Trust's most atmospheric property, genuinely unchanged since the 1600s. Not well signed from the A44.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chastleton%20-%20rear%20staircase.jpg?width=800", caption: "Chastleton House — an unchanged Jacobean manor" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cotswold%20Grey,%20High%20Street,%20Moreton-in-Marsh%20-%20geograph.org.uk%20-%206007291.jpg?width=800", caption: "Moreton-in-Marsh — the broadest high street in the Cotswolds" }
    ]
  },

  // --- ENGLAND: SOUTH EAST ---
  {
    id: 74,
    regionRank: 54,
    waypoints: [[51.063, -1.311], [50.984, -0.739], [50.984, -0.601], [51.023, -0.45]],
    name: "South Downs Way (A272)",
    region: "England",
    county: "Hampshire/West Sussex",
    lat: 51.01,
    lng: -0.87,
    distance: "42 miles",
    difficulty: "scenic",
    elevation: "800 ft max",
    roadDesignation: "A272",
    description: "The A272 between Winchester and Billingshurst runs parallel to the South Downs through a succession of ancient market towns and unspoilt villages — Midhurst, Petworth, and Billingshurst among them. The road rises and falls with the chalk downland, offering constant views across the Weald to the north and glimpses of the Downs escarpment to the south.",
    highlights: [
      "Petworth — a medieval market town with a magnificent National Trust park",
      "Cowdray Ruins — a spectacular 16th-century house destroyed by fire",
      "Midhurst — one of the finest small towns in the South East",
      "Unobstructed views across the High Weald to the North Downs"
    ],
    tip: "Petworth House and Park (National Trust) is a short detour and utterly magnificent — Turner painted here repeatedly and the deer park is free to walk.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Petworth%20House,%20Geograph.jpg?width=800", caption: "Petworth House — a National Trust treasure on the A272" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cowdray_Ruins.jpg?width=800", caption: "Cowdray Ruins near Midhurst" }
    ]
  },
  {
    id: 75,
    regionRank: 56,
    waypoints: [[51.113, -0.051], [51.095, 0.097], [51.06, 0.165]],
    name: "Ashdown Forest (B2026)",
    region: "England",
    county: "East Sussex",
    lat: 51.07,
    lng: 0.02,
    distance: "14 miles",
    difficulty: "scenic",
    elevation: "700 ft max",
    roadDesignation: "B2026",
    description: "Ashdown Forest is the largest area of open land in the South East, and the B2026 threads through its heather and bracken with long views across the High Weald. The setting for A.A. Milne's Winnie the Pooh stories, it has an unhurried, literary quality perfect for a relaxed morning drive. Gill's Lap — the original 'Galleon's Lap' — is just off the road.",
    highlights: [
      "Gill's Lap — the original location of A.A. Milne's Pooh stories",
      "Open heathland unique in the heavily wooded South East",
      "Views north to the North Downs on clear days",
      "Hartfield village — the nearest village to Pooh's Forest"
    ],
    tip: "Stop at Poohsticks Bridge — 2 miles off the B2026 near Chuck Hatch — for the best Winnie the Pooh experience in England. Children will love it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ashdown%20Forest%20heathland%20-%20geograph.org.uk%20-%204106950.jpg?width=800", caption: "Open heathland on Ashdown Forest" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hartfield%20village%20-%20geograph.org.uk%20-%2044076.jpg?width=800", caption: "Hartfield village — gateway to Pooh's Forest" }
    ]
  },
  {
    id: 76,
    regionRank: 59,
    waypoints: [[51.236, -0.574], [51.24, -0.682], [51.214, -0.799]],
    name: "Hog's Back (A31)",
    region: "England",
    county: "Surrey",
    lat: 51.24,
    lng: -0.67,
    distance: "8 miles",
    difficulty: "scenic",
    elevation: "500 ft chalk ridge",
    roadDesignation: "A31",
    description: "The Hog's Back is a narrow chalk ridge that the A31 follows between Guildford and Farnham, with the land falling away steeply on both sides to give panoramic views across Surrey to the North Downs and the Weald. Not a technical road, but one of the most distinctive ridge-top drives in southern England — fast, airy, and confidently satisfying.",
    highlights: [
      "Views north to the North Downs and south across the Weald simultaneously",
      "The Hog's Back Brewery — a chance to sample local ales at the end",
      "Farnham Castle — Norman fortress at the western end",
      "Guildford Cathedral and the Wey Valley visible to the east"
    ],
    tip: "Drive at dusk for spectacular sunset views across the Weald from the ridge — one of southern England's finest elevated positions.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A31,%20The%20Hog%27s%20Back%20Road%20-%20geograph.org.uk%20-%20140796.jpg?width=800", caption: "The Hog's Back chalk ridge above the Surrey countryside" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gateway%20to%20Farnham%20Castle%20-%20geograph.org.uk%20-%20384034.jpg?width=800", caption: "Farnham Castle at the western end of the Hog's Back" }
    ]
  },
  {
    id: 77,
    regionRank: 58,
    waypoints: [[51.114, -0.726], [51.086, -0.707], [50.984, -0.738], [50.835, -0.79]],
    name: "Hindhead to Chichester (A286)",
    region: "England",
    county: "Surrey/West Sussex",
    lat: 51.10,
    lng: -0.74,
    distance: "20 miles",
    difficulty: "scenic",
    elevation: "850 ft max",
    roadDesignation: "A286",
    description: "The A286 descends from Hindhead through the Surrey Hills AONB to Midhurst and on to Chichester, combining heathland, ancient woodland, and South Downs approaches in a varied and always engaging route. The Devil's Punchbowl — a vast natural amphitheatre — is the dramatic highlight at the northern end.",
    highlights: [
      "Devil's Punchbowl — one of England's finest natural features",
      "Haslemere — a beautifully preserved Surrey market town",
      "Cowdray Park — polo ground and parkland",
      "Chichester — a complete Roman walled city at the journey's end"
    ],
    tip: "The A3 tunnel now bypasses the Devil's Punchbowl — use the old A3 road (now unclassified) to reach the National Trust viewpoint overlooking it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Devil%27s%20Punchbowl,%20Hindhead%20-%20geograph.org.uk%20-%202064055.jpg?width=800", caption: "The Devil's Punchbowl near Hindhead" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chichester_Cathedral.jpg?width=800", caption: "Chichester Cathedral — destination at the end of the A286" }
    ]
  },

  // --- ENGLAND: EXMOOR ---
  {
    id: 78,
    regionRank: 9,
    waypoints: [[51.215, -3.59], [51.228, -3.613], [51.232, -3.643]],
    name: "Porlock Hill (A39)",
    region: "England",
    county: "Somerset",
    lat: 51.22,
    lng: -3.63,
    distance: "2 miles",
    difficulty: "thrilling",
    elevation: "1,350 ft summit",
    roadDesignation: "A39",
    description: "Porlock Hill is one of England's most notorious road climbs — a 25% gradient that has defeated countless vintage cars and terrified countless passengers. The main A39 climbs in a relentless series of hairpins above the sheltered bay of Porlock Vale, with the Bristol Channel and the Welsh coast visible from the summit.",
    highlights: [
      "25% gradient — one of the steepest main roads in England",
      "Views across the Bristol Channel to Wales from the summit",
      "Porlock Vale — a beautiful hidden coastal plain at the foot",
      "The toll road alternative — an equally spectacular if less savage climb"
    ],
    tip: "The private Toll Road is a shorter, less steep alternative through Worthy Wood with equally dramatic views — giving you a chance to compare the two routes.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mishap%20on%20Porlock%20Hill,%20Somerset%20-%20geograph.org.uk%20-%201182035.jpg?width=800", caption: "Porlock Hill — one of England's most notorious road climbs" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Porlock_Bay.jpg?width=800", caption: "Porlock Bay and the Bristol Channel from above" }
    ]
  },
  {
    id: 79,
    regionRank: 18,
    waypoints: [[51.156, -3.627], [51.149, -3.591], [51.018, -3.499]],
    name: "Exmoor High Moor (B3223)",
    region: "England",
    county: "Somerset",
    lat: 51.15,
    lng: -3.60,
    distance: "18 miles",
    difficulty: "scenic",
    elevation: "1,600 ft max",
    roadDesignation: "B3223",
    description: "The B3223 crosses the highest part of Exmoor between Exford and Dulverton on a road that feels genuinely remote for southern England. Red deer graze beside the carriageway, the moorland stretches uninterrupted to every horizon, and the wind-sculpted vegetation speaks of a landscape barely touched by human hands. Exmoor at its most elemental.",
    highlights: [
      "Red deer — England's largest native land animal — frequently roadside",
      "Dunkery Beacon visible to the north — Exmoor's highest point",
      "Tarr Steps — ancient stone clapper bridge on the River Barle nearby",
      "Views across the Bristol Channel to the Brecon Beacons on clear days"
    ],
    tip: "Dawn drives on the B3223 offer the best chance of encountering red deer — herds of 50 or more are not unusual in autumn. Take binoculars.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Exmoor%20heather%20-%20geograph.org.uk%20-%20455326.jpg?width=800", caption: "The open moorland of Exmoor" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tarr_Steps.jpg?width=800", caption: "Tarr Steps — the ancient clapper bridge on the River Barle" }
    ]
  },
  {
    id: 80,
    regionRank: 34,
    waypoints: [[50.906, -3.491], [51.018, -3.499], [51.177, -3.526]],
    name: "Exe Valley (A396)",
    region: "England",
    county: "Somerset",
    lat: 51.19,
    lng: -3.49,
    distance: "14 miles",
    difficulty: "scenic",
    elevation: "600 ft max",
    roadDesignation: "A396",
    description: "The A396 follows the River Exe from Tiverton up through the Exe Valley into the heart of Exmoor, passing the Victorian resort of Dulverton and the wooded gorge of the river. Where the high moor roads are exposed and wild, the A396 is sheltered and intimate — ancient oaks, rushing water, and the deep peace of a hidden West Country valley.",
    highlights: [
      "Dulverton — the finest small town on Exmoor",
      "The wooded Exe Gorge — a deeply sheltered valley",
      "Wimbleball Lake — a reservoir and nature reserve in the hills above",
      "Linking the moor roads to Tiverton and the Devon lowlands"
    ],
    tip: "Dulverton is worth stopping in for lunch — the town has excellent cafés and the National Park Visitor Centre with detailed moor road maps.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bridge%20Street,%20Dulverton%20-%20geograph.org.uk%20-%203618065.jpg?width=800", caption: "Dulverton — gateway to Exmoor on the A396" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/River%20Exe%20at%20Hele%20Bridge%20-%20geograph.org.uk%20-%203533439.jpg?width=800", caption: "The wooded Exe Valley from the A396" }
    ]
  },
  {
    id: 81,
    regionRank: 27,
    waypoints: [[51.228, -3.77], [51.231, -3.802], [51.231, -3.837]],
    name: "County Gate to Lynmouth (A39)",
    region: "England",
    county: "Devon/Somerset",
    lat: 51.22,
    lng: -3.74,
    distance: "8 miles",
    difficulty: "challenging",
    elevation: "1,400 ft max",
    roadDesignation: "A39",
    description: "This section of the A39 over County Gate crosses the highest part of the coastal Exmoor plateau before plunging in a spectacular descent to Lynmouth on the Bristol Channel. The gradient to the sea is severe and the hairpins tight, but the views down to the harbour below are among the finest on the entire north Devon coast.",
    highlights: [
      "County Gate — the highest point on the A39 at the Somerset/Devon border",
      "The dramatic descent to Lynmouth harbour",
      "Valley of Rocks — a strange, naked rock formation near Lynton",
      "Doone Valley accessible from Malmsmead nearby"
    ],
    tip: "Lynmouth is most dramatic approached from above. Stop at the County Gate layby before the descent to appreciate the full scale of the drop to the sea.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20North%20Devon%20coast%20(1908)%20(14598140288).jpg?width=800", caption: "Lynmouth harbour at the foot of the A39 descent" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/North%20Devon%20coastpath%20-%20Valley%20of%20the%20Rocks,%20Lynton%20(22978772879).jpg?width=800", caption: "Valley of Rocks near Lynton" }
    ]
  },
  {
    id: 82,
    regionRank: 28,
    waypoints: [[51.139, -3.795], [51.124, -3.763], [51.118, -3.729]],
    name: "Simonsbath (B3358)",
    region: "England",
    county: "Somerset",
    lat: 51.14,
    lng: -3.78,
    distance: "10 miles",
    difficulty: "challenging",
    elevation: "1,300 ft max",
    roadDesignation: "B3358",
    description: "The B3358 between Simonsbath and Challacombe crosses the most remote and exposed central part of Exmoor — an area that feels genuinely wild for England. The road follows the River Barle before climbing to open moorland with views in every direction. Ponies graze untethered beside the tarmac and the silence is total.",
    highlights: [
      "Simonsbath — the only village at the heart of Exmoor Forest",
      "Open moorland with free-roaming Exmoor ponies",
      "Pinkery Pond — a remote Bronze Age enclosure and wild pond",
      "The Chains — Exmoor's watershed and highest bog"
    ],
    tip: "The road to Pinkery Pond (2 miles from Simonsbath) leads to the most remote and atmospheric spot on Exmoor. Only worth it in good conditions.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Exmoor%20Forest%20Inn,%20Simonsbath%20-%20geograph.org.uk%20-%205691181.jpg?width=800", caption: "Simonsbath — the only village in the heart of Exmoor Forest" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Exmoor_ponies.jpg?width=800", caption: "Free-roaming Exmoor ponies on the high moor" }
    ]
  },

  // --- ENGLAND: DEVON & CORNWALL ---
  {
    id: 83,
    regionRank: 15,
    waypoints: [[50.598, -3.892], [50.575, -3.948], [50.542, -4.025]],
    name: "Two Bridges (B3212)",
    region: "England",
    county: "Devon",
    lat: 50.60,
    lng: -3.88,
    distance: "12 miles",
    difficulty: "scenic",
    elevation: "1,400 ft max",
    roadDesignation: "B3212",
    description: "The B3212 crosses the highest part of Dartmoor between Postbridge and Princetown — a vast, open wilderness quite unlike anything else in southern England. The road passes the Bronze Age Grimspound settlement, the clapper bridge at Postbridge, and the notorious Dartmoor Prison at Princetown. Bleak, dramatic, and totally compelling.",
    highlights: [
      "Grimspound — a Bronze Age settlement with standing stone enclosure walls",
      "Postbridge clapper bridge — a medieval stone bridge over the East Dart",
      "Dartmoor Prison at Princetown — built for Napoleonic prisoners of war",
      "Wild Dartmoor ponies, cattle, and sheep on the open moor"
    ],
    tip: "The Warren House Inn — England's third-highest pub — is on the B3212 east of Postbridge. The fire inside has allegedly burned continuously since 1845.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20clapper%20bridge%20over%20the%20East%20Dart%20River%20-%20geograph.org.uk%20-%202621441.jpg?width=800", caption: "Postbridge clapper bridge over the East Dart" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dartmoor%20Prison%20pan.jpg?width=800", caption: "Dartmoor Prison at Princetown" }
    ]
  },
  {
    id: 84,
    regionRank: 29,
    waypoints: [[50.55, -4.143], [50.651, -4.14], [50.736, -4.014]],
    name: "Dartmoor Edge (A386)",
    region: "England",
    county: "Devon",
    lat: 50.65,
    lng: -4.12,
    distance: "18 miles",
    difficulty: "scenic",
    elevation: "1,200 ft max",
    roadDesignation: "A386",
    description: "The A386 from Tavistock to Okehampton follows the western edge of Dartmoor where granite tors drop to the rich red Devon farmland below. The road passes through Lydford Gorge, one of Devon's most spectacular natural features, and beneath the towering peaks of Yes Tor and High Willhays on the approach to Okehampton.",
    highlights: [
      "Lydford Gorge — a 1-mile river gorge with 100ft White Lady Waterfall",
      "Lydford Castle — a Norman tin-mining stannary prison",
      "High Willhays and Yes Tor — Dartmoor's twin highest points visible above",
      "Brent Tor church — a church on a volcanic plug visible for miles"
    ],
    tip: "Stop at Lydford Gorge (National Trust) for the waterfall — the 1-mile walk is manageable for most visitors and the gorge is genuinely spectacular. Allow an hour.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lydford_Gorge.jpg?width=800", caption: "Lydford Gorge — a spectacular river canyon on the A386" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Brent_Tor.jpg?width=800", caption: "Brent Tor church on its volcanic plug" }
    ]
  },
  {
    id: 85,
    regionRank: 47,
    waypoints: [[50.636, -4.36], [50.571, -4.597], [50.469, -4.719]],
    name: "Bodmin Moor (A30)",
    region: "England",
    county: "Cornwall",
    lat: 50.57,
    lng: -4.60,
    distance: "14 miles",
    difficulty: "scenic",
    elevation: "1,300 ft max",
    roadDesignation: "A30",
    description: "The A30 crosses Bodmin Moor between Launceston and Bodmin — England's westernmost moorland plateau, steeped in Bronze Age history, folklore, and Daphne du Maurier novels. Brown Willy and Rough Tor dominate the northern skyline, and Jamaica Inn sits at the summit. An evocative gateway to Cornwall.",
    highlights: [
      "Jamaica Inn at Bolventor — the coaching inn immortalised by Daphne du Maurier",
      "Brown Willy — Cornwall's highest point, visible from the road",
      "The Hurlers stone circles — Bronze Age monuments near Minions",
      "Dozmary Pool — legendary resting place of King Arthur's sword Excalibur"
    ],
    tip: "Leave the A30 at Bolventor for the B3254 — the minor road across the moor to Minions and the Cheesewring tor is an exceptional detour through the heart of Bodmin Moor.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jamaica%20Inn,%20Bolventor,%20Bodmin%20Moor%20-%20geograph.org.uk%20-%203183145.jpg?width=800", caption: "Jamaica Inn — immortalised by Daphne du Maurier" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Brown_Willy.jpg?width=800", caption: "Brown Willy — Cornwall's highest point" }
    ]
  },
  {
    id: 86,
    regionRank: 30,
    waypoints: [[50.514, -4.439], [50.519, -4.444], [50.49, -4.464]],
    name: "Minions and The Cheesewring (B3254)",
    region: "England",
    county: "Cornwall",
    lat: 50.51,
    lng: -4.44,
    distance: "10 miles",
    difficulty: "challenging",
    elevation: "1,000 ft max",
    roadDesignation: "B3254",
    description: "The B3254 crosses southeastern Bodmin Moor through a landscape saturated with Bronze Age monuments and industrial archaeology. The Cheesewring — a gravity-defying stack of granite slabs — overlooks the road above Minions village, and the Hurlers stone circles line the moorland below. A road through deep Cornish time.",
    highlights: [
      "The Cheesewring — a natural rock stack stacked impossibly by glacial forces",
      "The Hurlers — three Bronze Age stone circles on the open moor",
      "Minions — Cornwall's highest village at 950 feet",
      "Disused engine houses of the Caradon copper mining district"
    ],
    tip: "Walk from the Minions car park to the Cheesewring — 20 minutes return and genuinely spectacular. The view north across Bodmin Moor to Rough Tor is excellent.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Cheesewring.jpg?width=800", caption: "The Cheesewring — a gravity-defying granite stack above Minions" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/TheHurlers%20stoneCircles%20bodminMoor%20Cornwall.jpg?width=800", caption: "The Hurlers Bronze Age stone circles on Bodmin Moor" }
    ]
  },

  // --- ENGLAND: NORTH PENNINES & LANCASHIRE ---
  {
    id: 87,
    regionRank: 11,
    waypoints: [[54.805, -2.437], [54.74, -2.215], [54.748, -2.018]],
    name: "Killhope Pass (A689)",
    region: "England",
    county: "County Durham/Cumbria",
    lat: 54.74,
    lng: -2.22,
    distance: "18 miles",
    difficulty: "challenging",
    elevation: "1,900 ft summit",
    roadDesignation: "A689",
    description: "The A689 crosses the North Pennines between Alston and Stanhope — one of the most remote and genuinely wild road journeys in England. Crossing Killhope summit at nearly 2,000 feet, the road passes the Killhope Lead Mining Museum before descending into Weardale. The landscape is stark, austere, and hauntingly beautiful.",
    highlights: [
      "Killhope summit — at 1,900 ft, one of England's highest A-roads",
      "Killhope Lead Mining Museum — a complete Victorian lead mining complex",
      "Weardale — a valley with a medieval history of lead and silver mining",
      "Views to the Pennine watershed on both sides of the summit"
    ],
    tip: "Killhope Lead Mining Museum is excellent and rarely crowded — allow 2 hours for the full experience including the underground mine tour.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Weardale%20Way%20descending%20towards%20Killhope%20Lead%20Mining%20Museum%20-%20geograph.org.uk%20-%207181017.jpg?width=800", caption: "Killhope Lead Mining Museum on the A689 summit" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pennine%20Way%20heading%20north-east%20on%20Stonesdale%20Moor%20-%20geograph.org.uk%20-%205812981.jpg?width=800", caption: "The vast North Pennines moorland" }
    ]
  },
  {
    id: 88,
    regionRank: 20,
    waypoints: [[54.541, -1.923], [54.661, -2.076], [54.693, -2.205]],
    name: "Upper Teesdale (B6277)",
    region: "England",
    county: "County Durham",
    lat: 54.65,
    lng: -2.10,
    distance: "20 miles",
    difficulty: "scenic",
    elevation: "1,700 ft max",
    roadDesignation: "B6277",
    description: "The B6277 follows the River Tees from Barnard Castle into the North Pennines past High Force — England's largest waterfall — and on to the remote high moor above Cow Green Reservoir. This is England's largest protected landscape, and the road delivers jaw-dropping natural features alongside a succession of lead-mining villages.",
    highlights: [
      "High Force — England's largest waterfall, a 70ft cascade of the Tees",
      "Low Force and the Wynch Bridge — a beautiful precursor to High Force",
      "Middleton-in-Teesdale — a lead-mining town preserved in aspic",
      "Cauldron Snout — Britain's longest cascade, accessible from the road end"
    ],
    tip: "High Force is only 10 minutes' walk from the car park — the entrance fee is worth it for a view of one of England's great natural spectacles.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/High%20Force%20Waterfall,%20River%20Tees%20-%20geograph.org.uk%20-%202480506.jpg?width=800", caption: "High Force — England's largest waterfall" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ankle-twisting%20stretch%20of%20the%20Pennine%20Way%20in%20Upper%20Teesdale%20-%20geograph.org.uk%20-%202245059.jpg?width=800", caption: "The upper Tees Valley from the B6277" }
    ]
  },
  {
    id: 89,
    regionRank: 35,
    waypoints: [[54.066, -2.278], [54.109, -2.331], [54.163, -2.375]],
    name: "Settle to Ingleton (A65)",
    region: "England",
    county: "North Yorkshire",
    lat: 54.17,
    lng: -2.33,
    distance: "12 miles",
    difficulty: "scenic",
    elevation: "700 ft max",
    roadDesignation: "A65",
    description: "The A65 between Settle and Ingleton runs along the fault line where the limestone pavements of the Yorkshire Dales meet the volcanic mountains of the Forest of Bowland. Ingleborough and Pen-y-ghent fill the eastern skyline while Ingleton Waterfalls Trail and White Scar Cave offer natural spectacle at the road's end.",
    highlights: [
      "Ingleborough — the most dramatic mountain profile in the Dales",
      "Settle — a market town with a magnificent Shambles",
      "Ingleton Waterfalls Trail — a 4-mile circuit of spectacular falls",
      "White Scar Cave — Britain's longest showcave open to visitors"
    ],
    tip: "White Scar Cave is a world-class underground experience and Ingleton Waterfalls are among the finest in England — allow half a day at Ingleton.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2014%20Three%20Peaks%20view%20from%20Pen-y-ghent.jpg?width=800", caption: "Ingleborough from the A65" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ingleton%20Waterfalls%20Trail,%20Rival%20Falls%20-%20geograph.org.uk%20-%206337968.jpg?width=800", caption: "The Ingleton Waterfalls Trail" }
    ]
  },
  {
    id: 90,
    regionRank: 38,
    waypoints: [[54.076, -1.994], [54.089, -1.869], [54.082, -1.79]],
    name: "Grassington to Pateley Bridge (B6265)",
    region: "England",
    county: "North Yorkshire",
    lat: 54.07,
    lng: -1.92,
    distance: "16 miles",
    difficulty: "scenic",
    elevation: "900 ft max",
    roadDesignation: "B6265",
    description: "The B6265 crosses from upper Wharfedale to Nidderdale through a landscape of limestone pavements, grouse moors, and the dramatic Stump Cross Caverns. Pateley Bridge — a small market town in Nidderdale — marks the end, with Brimham Rocks just a short detour away. A quietly excellent Yorkshire Dales road that rewards slow appreciation.",
    highlights: [
      "Stump Cross Caverns — a show cave system with stalactite formations",
      "Brimham Rocks — extraordinary millstone grit rock formations above the road",
      "Pateley Bridge — an unspoilt Nidderdale market town",
      "Limestone pavement scenery unique to the Yorkshire Dales"
    ],
    tip: "Brimham Rocks are 4 miles from Pateley Bridge — a National Trust site with extraordinary natural rock sculptures and panoramic views. Well worth the detour.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Brimham_Rocks.jpg?width=800", caption: "Brimham Rocks — natural millstone grit sculptures above Nidderdale" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pateley%20Bridge%20(2).JPG?width=800", caption: "Pateley Bridge market town in Nidderdale" }
    ]
  },
  {
    id: 91,
    regionRank: 42,
    waypoints: [[53.834, -2.217], [53.88, -2.298], [53.946, -2.26]],
    name: "Pendle Hill (A682)",
    region: "England",
    county: "Lancashire",
    lat: 53.86,
    lng: -2.30,
    distance: "12 miles",
    difficulty: "challenging",
    elevation: "1,500 ft max",
    roadDesignation: "A682",
    description: "The A682 traverses the dramatic Pendle Hill countryside between Nelson and Long Preston — a landscape dominated by the brooding bulk of Pendle Hill, famous for the witchcraft trials of 1612. The road climbs and falls with the rough gritstone moorland, passing through villages with deep Quaker and Civil War histories.",
    highlights: [
      "Pendle Hill — site of the 1612 witchcraft trials, now a Lancashire landmark",
      "Downham — Lancashire's most perfect village, unspoilt for centuries",
      "George Fox's vision on Pendle Hill — the founding moment of the Quaker movement",
      "Long Preston and Settle visible ahead as the road descends"
    ],
    tip: "Downham village is 2 miles east on the B6478 — no modern signage is permitted in the entire village. It's one of England's most unspoilt.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pendle_Hill.jpg?width=800", caption: "Pendle Hill — Lancashire's most atmospheric landmark" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/View%20from%20Pendle%20Hill%20-%20geograph.org.uk%20-%202905339.jpg?width=800", caption: "Downham — Lancashire's most unspoilt village" }
    ]
  },
  {
    id: 92,
    regionRank: 43,
    waypoints: [[53.259, -2.125], [53.267, -2.085], [53.161, -2.216]],
    name: "Macclesfield Forest (A536)",
    region: "England",
    county: "Cheshire",
    lat: 53.27,
    lng: -2.05,
    distance: "8 miles",
    difficulty: "scenic",
    elevation: "1,100 ft max",
    roadDesignation: "A536",
    description: "The A536 between Macclesfield and Congleton passes through Macclesfield Forest — a plantation forest on the eastern edge of the Cheshire Plain with views east to the Peak District and west to Wales on clear days. Tegg's Nose Country Park sits above the road, and the reservoir below provides a beautiful foreground to the moorland beyond.",
    highlights: [
      "Tegg's Nose Country Park — views across both Cheshire and Derbyshire",
      "Macclesfield Forest reservoir and plantation",
      "Close to Cat and Fiddle and Snake Pass for a three-road day",
      "Rainow village — a traditional Cheshire silk-weaving community"
    ],
    tip: "Combine with the A537 Cat and Fiddle and A54 for a triumvirate of eastern Cheshire roads in a single excellent day.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Macclesfield%20Forest+Trentabank.jpg?width=800", caption: "Macclesfield Forest from Tegg's Nose" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tegg%27s_Nose.jpg?width=800", caption: "Tegg's Nose Country Park above Macclesfield" }
    ]
  },

  // --- ENGLAND: DORSET & SOUTH WEST ---
  {
    id: 93,
    regionRank: 50,
    waypoints: [[50.737, -2.233], [50.71, -2.438], [50.73, -2.756]],
    name: "Dorset Ridgeway (A35)",
    region: "England",
    county: "Dorset",
    lat: 50.74,
    lng: -2.48,
    distance: "22 miles",
    difficulty: "scenic",
    elevation: "Rolling chalk",
    roadDesignation: "A35",
    description: "The A35 between Bere Regis and Bridport crosses the Dorset chalk downland on the prehistoric Ridgeway route, passing through Puddletown Forest, the heath of Thomas Hardy's 'Egdon Heath', and the chalk plateau of the Bride Valley. Fast, well-sighted, and constantly changing — forest, heath, open downland, and market town within 22 miles.",
    highlights: [
      "Puddletown Forest — the 'Yellowham Wood' of Thomas Hardy's novels",
      "Dorchester — Hardy's 'Casterbridge' at the midpoint",
      "Maiden Castle — one of Europe's largest Iron Age hillforts, just off the road",
      "The Bride Valley approach to Bridport — classic English pastoral scenery"
    ],
    tip: "Maiden Castle is 2 miles south of the A35 near Dorchester — the largest Iron Age hillfort in Europe and one of England's most dramatic ancient monuments.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20photograph%20of%20Maiden%20Castle,%201935.jpg?width=800", caption: "Maiden Castle — one of Europe's largest Iron Age hillforts" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wessex%20Ridgeway%20-%20geograph.org.uk%20-%20295664.jpg?width=800", caption: "The rolling Dorset chalk downland on the A35" }
    ]
  },
  {
    id: 94,
    regionRank: 53,
    waypoints: [[50.92, -2.317], [50.949, -2.521], [51.056, -2.403]],
    name: "Blackmore Vale (A357)",
    region: "England",
    county: "Dorset",
    lat: 50.92,
    lng: -2.31,
    distance: "15 miles",
    difficulty: "scenic",
    elevation: "Rolling",
    roadDesignation: "A357",
    description: "The A357 crosses the hidden Blackmore Vale — Hardy's 'Vale of Little Dairies' — between Stalbridge and Wincanton in some of the most pastoral English countryside imaginable. Deep sunken lanes, ancient hedgerows, and a succession of unspoilt villages characterise this road through the agricultural heartland of Dorset.",
    highlights: [
      "Sherborne — a magnificent abbey town midway through the route",
      "Sturminster Newton — the finest town in the Blackmore Vale",
      "Cadbury Castle — reputedly the historical site of Camelot",
      "Hardy's 'Vale of Little Dairies' — essentially unchanged since the 19th century"
    ],
    tip: "Sherborne is worth half a day — the castle, almshouses, and abbey are all exceptional. Park and walk rather than driving through.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sherborne%20Abbey,%20Dorset.jpg?width=800", caption: "Sherborne Abbey in the heart of Dorset" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Blackmore_Vale.jpg?width=800", caption: "The Blackmore Vale — Hardy's Vale of Little Dairies" }
    ]
  },
  {
    id: 95,
    regionRank: 49,
    waypoints: [[51.002, -2.195], [50.966, -1.966], [50.925, -1.785]],
    name: "Cranborne Chase (B3081)",
    region: "England",
    county: "Dorset/Wiltshire",
    lat: 50.95,
    lng: -2.00,
    distance: "16 miles",
    difficulty: "scenic",
    elevation: "700 ft chalk downland",
    roadDesignation: "B3081",
    description: "The B3081 crosses the Cranborne Chase AONB between Shaftesbury and Fordingbridge through some of the finest chalk downland in southern England. Ancient droving routes converge here, and the woodlands of the Chase provide a constantly changing backdrop. Shaftesbury's Gold Hill — one of England's most photographed streets — is the dramatic starting point.",
    highlights: [
      "Gold Hill Shaftesbury — the Hovis advert cobbled street above the Chase",
      "Cranborne village — a perfectly preserved Dorset estate village",
      "Tollard Royal — a hidden chalk downland village with an ancient pub",
      "Iron Age hillforts visible on the ridgelines throughout the Chase"
    ],
    tip: "Gold Hill in Shaftesbury is the iconic Hovis advert hill — park below the top and look back up the cobbled street for the full effect. Best in golden afternoon light.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hovis%20Hill%20(Explored)%20-%20Flickr%20-%20M%20McBey.jpg?width=800", caption: "Gold Hill Shaftesbury — the Hovis advert cobbled street" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alderholt,%20Cranborne%20Chase%20-%20geograph.org.uk%20-%201245401.jpg?width=800", caption: "The Cranborne Chase chalk downland" }
    ]
  },
  {
    id: 96,
    regionRank: 52,
    waypoints: [[51.275, -2.781], [51.209, -2.645], [51.185, -2.547]],
    name: "Mendip Hills (A371)",
    region: "England",
    county: "Somerset",
    lat: 51.27,
    lng: -2.71,
    distance: "18 miles",
    difficulty: "scenic",
    elevation: "900 ft max",
    roadDesignation: "A371",
    description: "The A371 traverses the Mendip Hills between Cheddar and Shepton Mallet — an upland limestone plateau riddled with caves, gorges, and lead-mining history. The road climbs from dramatic Cheddar Gorge to the open plateau where views extend to the Bristol Channel and beyond. A varied and rewarding route through one of Somerset's most fascinating landscapes.",
    highlights: [
      "Cheddar Gorge at the western end — Britain's biggest gorge",
      "Wells Cathedral — England's most beautiful small cathedral nearby",
      "Wookey Hole Caves — underground river and stalactite chambers",
      "Open Mendip plateau with prehistoric tumuli lining the ridge"
    ],
    tip: "Combine with the B3135 through Cheddar Gorge for a full Mendip Hills circuit. The Gorge in the morning before the tourists arrive is spectacular.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wells_Cathedral.jpg?width=800", caption: "Wells Cathedral — England's most beautiful small cathedral" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mendip_Hills.jpg?width=800", caption: "The open Mendip Hills plateau" }
    ]
  },
  {
    id: 97,
    regionRank: 55,
    waypoints: [[50.731, -2.756], [50.72, -2.848], [50.726, -2.937]],
    name: "Golden Cap (B3165)",
    region: "England",
    county: "Dorset",
    lat: 50.72,
    lng: -2.88,
    distance: "10 miles",
    difficulty: "scenic",
    elevation: "626 ft Golden Cap summit",
    roadDesignation: "B3165",
    description: "The B3165 between Bridport and Lyme Regis travels the hinterland behind Dorset's most dramatic coastal cliffs, climbing above the highest point on the south coast of England at Golden Cap. The road runs through the Marshwood Vale, one of England's most ancient and undeveloped landscapes, before descending to the Jurassic Coast at Charmouth.",
    highlights: [
      "Golden Cap — the highest sea cliff on England's south coast at 626 ft",
      "Marshwood Vale — an ancient, deeply rural vale almost unknown to visitors",
      "Charmouth — one of Britain's best fossil hunting beaches",
      "Lyme Regis — an elegant Regency resort at the road's end"
    ],
    tip: "Charmouth beach is one of the best fossil hunting spots in Europe — ammonites and ichthyosaur fragments wash out regularly after winter storms.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20beach%20west%20of%20Seatown%20towards%20Golden%20Cap%20-%20geograph.org.uk%20-%20356910.jpg?width=800", caption: "Golden Cap — the highest sea cliff on England's south coast" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lyme_Regis.jpg?width=800", caption: "Lyme Regis harbour at the end of the B3165" }
    ]
  },
  {
    id: 98,
    regionRank: 57,
    waypoints: [[51.236, -0.574], [51.219, -0.467], [51.23, -0.33], [51.188, -0.195]],
    name: "Surrey Hills (A25)",
    region: "England",
    county: "Surrey",
    lat: 51.22,
    lng: -0.33,
    distance: "14 miles",
    difficulty: "scenic",
    elevation: "700 ft max",
    roadDesignation: "A25",
    description: "The A25 between Guildford and Sevenoaks traces the foot of the North Downs through the most beautiful stretch of the Surrey Hills AONB. The road passes through Shere, Gomshall, and Dorking — quintessential English villages beneath the chalk escarpment — with Box Hill rising prominently above and the Weald stretching south to the distant South Downs.",
    highlights: [
      "Box Hill — the North Downs' most famous viewpoint, used in the 2012 Olympics",
      "Shere — Surrey's most beautiful village, filmed in The Holiday",
      "Dorking — home of the Surrey Hills' finest independent shops",
      "The North Downs Way following the escarpment above the road"
    ],
    tip: "Box Hill is a short detour north from Dorking — drive the narrow zigzag road to the summit for views south across 14 counties. The National Trust café has a famous view.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Box%20Hill%20Salomons%20Memorial.jpg?width=800", caption: "Box Hill from the North Downs escarpment" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shere%20Village%20Hall%20-%20geograph.org.uk%20-%20656328.jpg?width=800", caption: "Shere — Surrey's most beautiful village" }
    ]
  },
  {
    id: 99,
    regionRank: 60,
    waypoints: [[51.143, -1.08], [51.0, -1.075], [50.855, -1.179]],
    name: "Meon Valley (A32)",
    region: "England",
    county: "Hampshire",
    lat: 51.09,
    lng: -1.08,
    distance: "16 miles",
    difficulty: "scenic",
    elevation: "700 ft max",
    roadDesignation: "A32",
    description: "The A32 follows the Meon Valley from Alton to Fareham through some of the most beautiful and least-visited chalk downland in southern England. The Meon Valley is a pure Hampshire idyll — watercress beds, chalk-stream fishing, thatched villages, and the South Downs rising ahead as the road approaches Petersfield.",
    highlights: [
      "East Meon — one of Hampshire's most perfect downland villages",
      "The River Meon — a chalk stream supporting rare wildlife",
      "Selborne — Gilbert White's village, the birthplace of natural history writing",
      "Queen Elizabeth Country Park — access to the South Downs National Park"
    ],
    tip: "Selborne is 4 miles east on the B3006 — the village is unchanged from Gilbert White's 1789 descriptions in The Natural History of Selborne, which is still in print.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Church%20Street,%20East%20Meon%20ca%201975%20-%20geograph.org.uk%20-%203826067.jpg?width=800", caption: "East Meon — a perfect Hampshire downland village" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Beech%20woodland%20-%20Selborne%20Hanger%20-%20geograph.org.uk%20-%203015886.jpg?width=800", caption: "Selborne Hanger — the ancient yew wood above Gilbert White's village" }
    ]
  },
  {
    id: 100,
    regionRank: 21,
    waypoints: [[51.804, -4.499], [51.717, -4.701], [51.694, -4.941]],
    name: "Pembrokeshire Coast (A477)",
    region: "Wales",
    county: "Pembrokeshire",
    lat: 51.68,
    lng: -4.96,
    distance: "20 miles",
    difficulty: "scenic",
    elevation: "400 ft max",
    roadDesignation: "A477",
    description: "The A477 traverses the South Pembrokeshire peninsula between Carmarthen and Pembroke Dock, skirting the Pembrokeshire Coast National Park with views of the spectacular Daugleddau Estuary. Pembroke Castle — the birthplace of Henry VII — marks the finale. Diversions onto the B4319 to Angle and Freshwater East reveal some of Wales's finest cliff scenery.",
    highlights: [
      "Pembroke Castle — a near-perfect medieval fortress, birthplace of Henry VII",
      "Daugleddau Estuary — a drowned river valley of exceptional natural beauty",
      "Stack Rocks and the Green Bridge of Wales accessible nearby",
      "Freshwater East — a beautiful east-facing bay perfect for exploring"
    ],
    tip: "Divert to the B4319 to reach Angle and Freshwater East — two of Pembrokeshire's finest coastal destinations that the A477 only hints at from inland.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pembroke_Castle.jpg?width=800", caption: "Pembroke Castle — birthplace of Henry VII" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Cleddau%20estuary-Daugleddau%20-%20geograph.org.uk%20-%203550397.jpg?width=800", caption: "The Daugleddau Estuary from the Pembrokeshire peninsula" }
    ]
  }
];
