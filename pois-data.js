const POIS_DATA = {
  historic: {
    label: 'Historic',
    icon: 'landmark',
    color: '#b87c3a',
    pois: [
      { name: 'Eilean Donan Castle',       lat: 57.2738, lng: -5.5153, desc: "Scotland's most photographed castle on a tidal island where three sea lochs meet." },
      { name: 'Pembroke Castle',            lat: 51.6742, lng: -4.9152, desc: "Near-perfect medieval fortress and birthplace of Henry VII." },
      { name: 'Harlech Castle',             lat: 52.8603, lng: -4.1082, desc: "UNESCO World Heritage castle looming above Cardigan Bay." },
      { name: 'Hardknott Roman Fort',       lat: 54.4013, lng: -3.1773, desc: "Roman fort ruins at the summit of England's steepest road." },
      { name: 'Shap Abbey',                 lat: 54.5278, lng: -2.6836, desc: "Remote 12th-century abbey ruins beside the River Lowther." },
      { name: 'Maiden Castle',              lat: 50.6912, lng: -2.4735, desc: "One of Europe's largest Iron Age hillforts, covering 47 acres." },
      { name: 'Bolton Castle',              lat: 54.3018, lng: -1.9742, desc: "Medieval castle where Mary Queen of Scots was imprisoned." },
      { name: 'Kilchurn Castle',            lat: 56.4009, lng: -5.0163, desc: "Atmospheric 15th-century ruins at the head of Loch Awe." },
      { name: 'Chastleton House',           lat: 51.9445, lng: -1.6324, desc: "Jacobean manor house unchanged since the 1600s, owned by the National Trust." },
      { name: 'Castle Stalker',             lat: 56.6432, lng: -5.3678, desc: "The most perfectly sited tower house in Scotland, on its own tidal islet." },
      { name: 'The Hurlers Stone Circles',  lat: 50.5137, lng: -4.4388, desc: "Three Bronze Age stone circles on Bodmin Moor, dating from 1500–1000 BC." },
      { name: 'Ribblehead Viaduct',         lat: 54.2004, lng: -2.3665, desc: "Victorian railway viaduct with 24 arches striding across wild moorland." },
      { name: 'Iona Abbey',                 lat: 56.3334, lng: -6.3928, desc: "One of the most important religious sites in British history, founded AD 563." },
      { name: 'Gold Hill, Shaftesbury',     lat: 51.0022, lng: -2.1978, desc: "Iconic cobbled street immortalised by the Hovis advert — England's most photographed hill." },
      { name: 'Stanway House',              lat: 51.9985, lng: -1.8647, desc: "Magnificent Jacobean manor with one of England's finest gatehouses, still privately owned." },
      { name: 'Grimspound',                 lat: 50.6047, lng: -3.8217, desc: "Bronze Age settlement on Dartmoor with intact stone enclosure walls, 3,500 years old." },
    ]
  },

  viewpoints: {
    label: 'Viewpoints',
    icon: 'mountain',
    color: '#5a8fc9',
    pois: [
      { name: 'Bealach na Bà Summit',       lat: 57.4318, lng: -5.7247, desc: "Britain's most dramatic mountain road summit with panoramic views to the Isle of Skye." },
      { name: 'Broadway Tower',             lat: 52.0352, lng: -1.8783, desc: "Folly on the Cotswold escarpment — 13 counties visible on a clear day." },
      { name: 'Dunnet Head',                lat: 58.6712, lng: -3.3742, desc: "The true most northerly point on the British mainland, better than John o'Groats." },
      { name: 'Hardknott Pass Summit',      lat: 54.4012, lng: -3.1785, desc: "Summit of England's steepest road with sweeping western Lake District views." },
      { name: 'Snake Pass Summit',          lat: 53.4356, lng: -1.8742, desc: "Exposed moorland summit of the Peak District's most famous road pass." },
      { name: 'Storey Arms',                lat: 51.8783, lng: -3.4847, desc: "Summit plateau directly below Pen y Fan, the highest peak in South Wales." },
      { name: 'Haytor',                     lat: 50.5768, lng: -3.7595, desc: "Granite tor rising from the Dartmoor plateau with panoramic views across Devon." },
      { name: 'Rhigos Summit',              lat: 51.7315, lng: -3.5032, desc: "Summit plateau with views across the South Wales valleys and the Brecon Beacons." },
      { name: 'Cairn o\'Mount Summit',      lat: 56.9480, lng: -2.6110, desc: "Summit of northeast Scotland's finest driving road with Cairngorm views." },
      { name: 'Hartside Summit',            lat: 54.7369, lng: -2.4873, desc: "Summit of the A686 with panoramic views west to the Lake District and Solway Firth." },
      { name: 'Buttertubs Pass Summit',     lat: 54.3628, lng: -2.2150, desc: "Summit connecting Swaledale and Wensleydale with unfenced drops on both sides." },
      { name: 'Horseshoe Pass Summit',      lat: 53.0991, lng: -3.2882, desc: "North Wales summit car park with sweeping views across the Vale of Clwyd." },
      { name: 'Kirkstone Pass Summit',      lat: 54.4844, lng: -2.9248, desc: "The highest road pass in the Lake District at 1,489 feet." },
      { name: 'Fish Hill Viewpoint',        lat: 52.0397, lng: -1.8654, desc: "Panoramic layby on the Cotswold escarpment above the Vale of Evesham." },
    ]
  },

  waterfalls: {
    label: 'Waterfalls',
    icon: 'waves',
    color: '#3a9ab8',
    pois: [
      { name: 'High Force',                 lat: 54.6453, lng: -2.2156, desc: "England's largest waterfall — a 70ft cascade of the River Tees over Whin Sill dolerite." },
      { name: 'Aysgarth Falls',             lat: 54.2897, lng: -1.9847, desc: "Three tiers of spectacular limestone waterfalls in the heart of Wensleydale." },
      { name: 'Grey Mare\'s Tail',          lat: 55.4218, lng: -3.3274, desc: "200ft horsetail waterfall dropping from Loch Skeen above the A708." },
      { name: 'Falls of Foyers',            lat: 57.2636, lng: -4.4962, desc: "Spectacular 60ft waterfall dropping into a wooded ravine above Loch Ness." },
      { name: 'Swallow Falls',              lat: 53.0956, lng: -3.8781, desc: "Wales's most visited waterfall, a short walk from the A5 near Betws-y-Coed." },
      { name: 'Ingleton Waterfalls',        lat: 54.1592, lng: -2.3879, desc: "A 4-mile circuit passing some of the finest waterfalls in the Yorkshire Dales." },
      { name: 'Hardraw Force',              lat: 54.3098, lng: -2.2064, desc: "England's highest above-ground single-drop waterfall, behind a pub in Wensleydale." },
      { name: 'Lydford Gorge',              lat: 50.6634, lng: -4.1054, desc: "Deep river gorge on Dartmoor with the 90ft White Lady Waterfall." },
      { name: 'Tarr Steps',                 lat: 51.1094, lng: -3.6320, desc: "Ancient stone clapper bridge crossing the River Barle on Exmoor." },
      { name: 'Low Force',                  lat: 54.6325, lng: -2.1898, desc: "Beautiful falls on the Tees, the gentler prelude to dramatic High Force." },
      { name: 'Dungeon Ghyll Force',        lat: 54.4449, lng: -3.0813, desc: "Spectacular waterfall at the head of Great Langdale below the Pikes." },
    ]
  },

  villages: {
    label: 'Villages',
    icon: 'home',
    color: '#8c6ac9',
    pois: [
      { name: 'Muker',                      lat: 54.3884, lng: -2.1557, desc: "Finest village in Swaledale — surrounded by flower meadows unchanged for centuries." },
      { name: 'Grasmere',                   lat: 54.4593, lng: -3.0244, desc: "Wordsworth's village and final resting place — one of the most beautiful in England." },
      { name: 'Abbotsbury',                 lat: 50.6634, lng: -2.6027, desc: "Perfect Dorset village with a 600-strong swannery and medieval tithe barn." },
      { name: 'Broadway',                   lat: 52.0422, lng: -1.8576, desc: "Showpiece Cotswold village with honey-stone cottages and England's finest high street." },
      { name: 'Luss',                       lat: 56.0992, lng: -4.6378, desc: "One of Scotland's most photographed villages on the western shore of Loch Lomond." },
      { name: 'Beddgelert',                 lat: 53.0164, lng: -4.0980, desc: "Charming Snowdonia village at the confluence of two rivers." },
      { name: 'Lynmouth',                   lat: 51.2290, lng: -3.8352, desc: "Dramatic harbour village at the foot of Exmoor's coastal cliffs above the Bristol Channel." },
      { name: 'Downham',                    lat: 53.8972, lng: -2.2143, desc: "Lancashire's most unspoilt village — no modern signage permitted anywhere in the village." },
      { name: 'Tissington',                 lat: 53.0885, lng: -1.7498, desc: "One of England's most perfect estate villages, famous for its well-dressing tradition." },
      { name: 'Stanton',                    lat: 51.9996, lng: -1.8582, desc: "Possibly the most perfectly preserved Cotswold village — just off the B4077." },
      { name: 'Kettlewell',                 lat: 54.1612, lng: -2.0175, desc: "Perfect Dales village in upper Wharfedale, used as a film location for Calendar Girls." },
      { name: 'Dulverton',                  lat: 51.0428, lng: -3.5625, desc: "Gateway to Exmoor — the finest small market town on the moor." },
      { name: 'Simonsbath',                 lat: 51.1392, lng: -3.7825, desc: "The only settlement at the heart of Exmoor Forest." },
      { name: 'Lochcarron',                 lat: 57.4100, lng: -5.5000, desc: "Highland village strung along the shore of a beautiful sea loch in Wester Ross." },
      { name: 'Hartfield',                  lat: 51.0840, lng:  0.0966, desc: "East Sussex village on the edge of Ashdown Forest — the real-life Winnie the Pooh country." },
    ]
  },

  pubs: {
    label: 'Pubs',
    icon: 'beer',
    color: '#c94a8c',
    pois: [
      { name: 'Jamaica Inn',                lat: 50.5685, lng: -4.5978, desc: "Historic coaching inn on Bodmin Moor, immortalised by Daphne du Maurier's 1936 novel." },
      { name: 'Cat and Fiddle Inn',         lat: 53.2574, lng: -1.9851, desc: "England's second-highest pub at the summit of the A537." },
      { name: 'Kirkstone Pass Inn',         lat: 54.4844, lng: -2.9248, desc: "One of England's highest pubs at the Lake District's highest road pass." },
      { name: 'Tan Hill Inn',               lat: 54.5073, lng: -2.1496, desc: "England's highest pub at 1,732 feet on the bare North Pennine moors." },
      { name: 'Warren House Inn',           lat: 50.6145, lng: -3.8628, desc: "England's third-highest pub on Dartmoor — the fire has reputedly burned since 1845." },
      { name: 'Old Dungeon Ghyll Hotel',    lat: 54.4449, lng: -3.0813, desc: "Legendary Lake District pub at the head of Great Langdale — walkers' and climbers' HQ." },
      { name: 'Tibbie Shiels Inn',          lat: 55.4547, lng: -3.1827, desc: "A legendary Scottish Borders meeting place beside St Mary's Loch since 1823." },
      { name: 'Spout House, Bilsdale',      lat: 54.3789, lng: -1.1063, desc: "16th-century thatched inn in the hidden valley of Bilsdale on the North York Moors." },
      { name: 'Hartside Summit Café',       lat: 54.7369, lng: -2.4873, desc: "Summit stop on the A686 with panoramic views over the Lake District and Solway Firth." },
      { name: 'Lion Inn, Blakey Ridge',     lat: 54.3947, lng: -0.9248, desc: "One of England's most remote pubs, stranded on the open North York Moors." },
      { name: 'Cluanie Inn',                lat: 57.1038, lng: -5.0843, desc: "Classic Highland inn at the head of Glen Shiel, surrounded by the Five Sisters of Kintail." },
      { name: 'Kirkstone Pass Inn',         lat: 54.4844, lng: -2.9248, desc: "Highest pub in the Lake District, watching over the pass since the 18th century." },
    ]
  },

  nature: {
    label: 'Nature',
    icon: 'trees',
    color: '#4a9a4a',
    pois: [
      { name: 'Smoo Cave',                  lat: 58.5670, lng: -4.7246, desc: "The largest sea cave in Britain, carved by both the sea and a freshwater river." },
      { name: 'Blue John Cavern',           lat: 53.3375, lng: -1.8034, desc: "Cave at the top of Winnats Pass containing the rare Blue John semi-precious mineral." },
      { name: "Devil's Punchbowl",          lat: 51.1084, lng: -0.7281, desc: "Vast natural amphitheatre at Hindhead — one of England's finest natural landscapes." },
      { name: 'Valley of Rocks',            lat: 51.2324, lng: -3.8542, desc: "Dramatic natural rock formations on the north Devon coast near Lynton." },
      { name: 'Stac Pollaidh',              lat: 57.9876, lng: -5.1827, desc: "Scotland's most dramatic small mountain, an ancient rock island above Assynt moorland." },
      { name: 'Postbridge Clapper Bridge',  lat: 50.5986, lng: -3.8821, desc: "Medieval stone clapper bridge over the East Dart River on Dartmoor." },
      { name: 'Three Shires Head',          lat: 53.1857, lng: -2.0317, desc: "Waterfall and packhorse bridge where Cheshire, Staffordshire and Derbyshire once met." },
      { name: 'Dovedale Stepping Stones',   lat: 53.0495, lng: -1.7811, desc: "Famous stepping stones in the Peak District's most beloved limestone gorge." },
      { name: 'Dan-yr-Ogof Caves',          lat: 51.8526, lng: -3.6973, desc: "The largest showcave complex in Northern Europe, beside the A4067 in the Swansea Valley." },
      { name: 'Whinlatter Forest',          lat: 54.6187, lng: -3.2267, desc: "England's only true mountain forest, home to red squirrels and nesting ospreys." },
      { name: 'Beinn Eighe NNR',            lat: 57.6128, lng: -5.3817, desc: "Britain's first National Nature Reserve, protecting ancient Caledonian pinewoods." },
      { name: 'Ashdown Forest',             lat: 51.0735, lng:  0.0190, desc: "The largest area of open heath in the South East — the real Hundred Acre Wood." },
      { name: 'Brimham Rocks',              lat: 54.0899, lng: -1.6897, desc: "Extraordinary millstone grit sculptures balanced on the Nidderdale moorland." },
      { name: 'Aberglaslyn Gorge',          lat: 52.9820, lng: -4.0980, desc: "Dramatic rock-walled gorge with the River Glaslyn rushing through below." },
    ]
  }
};
