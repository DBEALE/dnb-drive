const ROADS_DATA = [
  {
    id: 1,
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
    tip: "Drive it south to north for the best climbing experience. Watch for livestock on the road, especially sheep."
  },
  {
    id: 2,
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
    tip: "Not recommended in winter or poor visibility. Use passing places correctly — pull left. The descent into Applecross is a fitting reward."
  },
  {
    id: 3,
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
    tip: "Start from the A5 near Betws-y-Coed. The B4501 is the standout section — save it for your second or third lap when you've learned the road."
  },
  {
    id: 4,
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
    tip: "Often closed in winter due to snow. Can be busy on summer weekends — try a Tuesday evening for the best experience."
  },
  {
    id: 5,
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
    tip: "Combine with Snake Pass for a full day of Peak District driving. The Buxton approach (eastbound) is the more dramatic direction."
  },
  {
    id: 6,
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
    tip: "Don't try to rush it in a day. The west coast sections are the most spectacular for driving. Allow 5-7 days to do it justice."
  },
  {
    id: 7,
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
    tip: "Very narrow in places with limited visibility — use your horn on blind bends. The views from the top across Swaledale are extraordinary."
  },
  {
    id: 8,
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
    tip: "A grand touring road rather than a B-road blast. Best enjoyed with the roof down on a clear summer evening."
  },
  {
    id: 9,
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
    tip: "Can be very busy in peak tourist season and at weekends. Early morning is the best time. Watch for climbers' parked cars narrowing the road."
  },
  {
    id: 10,
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
    tip: "Very busy during the day with tourists. Early morning or late evening are the times to enjoy it properly in a sports car."
  },
  {
    id: 11,
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
    tip: "Stop at the viewpoint car parks — the Three Sisters viewpoint is unmissable. This road is about savoring the scenery as much as the driving."
  },
  {
    id: 12,
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
    tip: "Combine with the Evo Triangle for a full day of North Wales driving. The climb from Llangollen is the best direction."
  },
  {
    id: 13,
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
    tip: "Low gear and steady nerve required. Not suitable for wide or long cars. The pass from west to east (climbing from Eskdale) is the classic direction."
  },
  {
    id: 14,
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
    tip: "Drive this after the A4069 for comparison — many drivers prefer it. The middle section through the open valley is the highlight."
  },
  {
    id: 15,
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
    tip: "The steep 'Struggle' approach from Ambleside is the more exciting climb. Stop at the Inn for a pint with a view."
  },
  {
    id: 16,
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
    tip: "Watch for ponies, cattle, and sheep on the road — they have right of way. The section west of Two Bridges is the finest."
  },
  {
    id: 17,
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
    tip: "Check road conditions in winter — these routes close in severe weather. The A939 over The Lecht is the more technically interesting section."
  },
  {
    id: 18,
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
    tip: "A touring road for warm summer evenings. Stop at the viewpoints above Chesil Beach — the perspective is extraordinary."
  },
  {
    id: 19,
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
    tip: "Combine with the Elan Valley road (via the B4518) for an extended loop through some of Wales's emptiest and most beautiful countryside."
  },
  {
    id: 20,
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
    tip: "Stop at the Hartside Summit — the views across the Lake District and the Solway Firth are remarkable. Continue through Alston for more excellent roads."
  }
];
