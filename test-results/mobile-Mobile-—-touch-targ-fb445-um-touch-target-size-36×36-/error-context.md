# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile.spec.js >> Mobile — touch targets >> theme toggle meets minimum touch target size (36×36)
- Location: tests\mobile.spec.js:297:3

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 36
Received:    22
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img [ref=e5]
        - generic [ref=e11]: UK Driving Roads
      - generic [ref=e12]:
        - button "Plan a Route" [ref=e13] [cursor=pointer]:
          - img [ref=e14]
          - text: Plan a Route
        - button "Switch to light mode" [ref=e16] [cursor=pointer]:
          - img [ref=e17]
        - button "Switch to satellite view" [ref=e20] [cursor=pointer]: Satellite
  - generic [ref=e21]:
    - complementary [ref=e22]:
      - button "Toggle road list" [ref=e23] [cursor=pointer]:
        - generic [ref=e25]:
          - generic [ref=e26]: "130"
          - text: Roads
          - img [ref=e27]
      - generic:
        - generic [ref=e29]:
          - heading "Britain's Greatest Driving Roads" [level=1] [ref=e30]:
            - text: Britain's Greatest
            - text: Driving Roads
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]: "130"
              - generic [ref=e34]: Roads
            - generic [ref=e35]:
              - generic [ref=e36]: "6"
              - generic [ref=e37]: Nations
            - generic [ref=e38]:
              - generic [ref=e39]: 5,000+
              - generic [ref=e40]: Miles
        - generic [ref=e41]:
          - generic [ref=e42]:
            - img [ref=e43]
            - textbox "Search roads..." [ref=e46]
          - navigation "Filter by country" [ref=e47]:
            - button "All" [ref=e48] [cursor=pointer]
            - button "Scotland" [ref=e49] [cursor=pointer]
            - button "Wales" [ref=e50] [cursor=pointer]
            - button "England" [ref=e51] [cursor=pointer]
            - button "France" [ref=e52] [cursor=pointer]
            - button "Belgium" [ref=e53] [cursor=pointer]
            - button "Netherlands" [ref=e54] [cursor=pointer]
          - generic [ref=e55]:
            - button "All" [ref=e56] [cursor=pointer]
            - button "Thrilling" [ref=e57] [cursor=pointer]
            - button "Challenging" [ref=e58] [cursor=pointer]
            - button "Scenic" [ref=e59] [cursor=pointer]
          - group [ref=e60]:
            - generic "Places of Interest All None" [ref=e61] [cursor=pointer]:
              - img [ref=e62]
              - generic [ref=e65]: Places of Interest
              - generic [ref=e66]:
                - button "All" [ref=e67]
                - button "None" [ref=e68]
              - img [ref=e69]
        - generic [ref=e72]:
          - generic [ref=e73] [cursor=pointer]:
            - img "The famous hairpin bends of Bealach na Bà" [ref=e75]
            - generic [ref=e76]:
              - generic [ref=e77]:
                - generic [ref=e78]: Bealach na Bà
                - generic [ref=e79]: Wester Ross, Highlands
              - generic [ref=e80]:
                - generic [ref=e81]: "#1"
                - generic [ref=e82]: thrilling
          - generic [ref=e83] [cursor=pointer]:
            - img "Open moorland of the Denbigh Moors" [ref=e85]
            - generic [ref=e86]:
              - generic [ref=e87]:
                - generic [ref=e88]: The Evo Triangle
                - generic [ref=e89]: Denbighshire, North Wales
              - generic [ref=e90]:
                - generic [ref=e91]: "#1"
                - generic [ref=e92]: thrilling
          - generic [ref=e93] [cursor=pointer]:
            - img "Hardknott Pass — England's steepest road" [ref=e95]
            - generic [ref=e96]:
              - generic [ref=e97]:
                - generic [ref=e98]: Hardknott Pass
                - generic [ref=e99]: Cumbria, Lake District
              - generic [ref=e100]:
                - generic [ref=e101]: "#1"
                - generic [ref=e102]: thrilling
          - generic [ref=e103] [cursor=pointer]:
            - img "The summit of Col de Turini above the Maritime Alps" [ref=e105]
            - generic [ref=e106]:
              - generic [ref=e107]:
                - generic [ref=e108]: Col de Turini
                - generic [ref=e109]: Alpes-Maritimes, Provence-Alpes-Côte d'Azur
              - generic [ref=e110]:
                - generic [ref=e111]: "#1"
                - generic [ref=e112]: thrilling
          - generic [ref=e113] [cursor=pointer]:
            - img "Eau Rouge / Raidillon — Spa's defining corner" [ref=e115]
            - generic [ref=e116]:
              - generic [ref=e117]:
                - generic [ref=e118]: Raidillon de l'Eau Rouge
                - generic [ref=e119]: Liège Province, Ardennes
              - generic [ref=e120]:
                - generic [ref=e121]: "#1"
                - generic [ref=e122]: thrilling
          - generic [ref=e123] [cursor=pointer]:
            - img "The Afsluitdijk stretching across the former Zuiderzee" [ref=e125]
            - generic [ref=e126]:
              - generic [ref=e127]:
                - generic [ref=e128]: Afsluitdijk
                - generic [ref=e129]: North Holland / Friesland
              - generic [ref=e130]:
                - generic [ref=e131]: "#1"
                - generic [ref=e132]: scenic
          - generic [ref=e133] [cursor=pointer]:
            - img "The A4069 winding up through the Black Mountain" [ref=e135]
            - generic [ref=e136]:
              - generic [ref=e137]:
                - generic [ref=e138]: Black Mountain Pass (A4069)
                - generic [ref=e139]: Carmarthenshire / Powys
              - generic [ref=e140]:
                - generic [ref=e141]: "#2"
                - generic [ref=e142]: thrilling
          - generic [ref=e143] [cursor=pointer]:
            - img "Stac Pollaidh rising above the Highland landscape" [ref=e145]
            - generic [ref=e146]:
              - generic [ref=e147]:
                - generic [ref=e148]: North Coast 500
                - generic [ref=e149]: Highlands
              - generic [ref=e150]:
                - generic [ref=e151]: "#2"
                - generic [ref=e152]: scenic
          - generic [ref=e153] [cursor=pointer]:
            - img "Wrynose Pass — always driven alongside Hardknott" [ref=e155]
            - generic [ref=e156]:
              - generic [ref=e157]:
                - generic [ref=e158]: Wrynose Pass
                - generic [ref=e159]: Cumbria, Lake District
              - generic [ref=e160]:
                - generic [ref=e161]: "#2"
                - generic [ref=e162]: thrilling
          - generic [ref=e163] [cursor=pointer]:
            - img "The final climb to the Col du Galibier summit" [ref=e165]
            - generic [ref=e166]:
              - generic [ref=e167]:
                - generic [ref=e168]: Col du Galibier
                - generic [ref=e169]: Savoie / Hautes-Alpes
              - generic [ref=e170]:
                - generic [ref=e171]: "#2"
                - generic [ref=e172]: thrilling
          - generic [ref=e173] [cursor=pointer]:
            - img "The Hautes Fagnes peat plateau in winter" [ref=e175]
            - generic [ref=e176]:
              - generic [ref=e177]:
                - generic [ref=e178]: Hautes Fagnes Plateau
                - generic [ref=e179]: Liège Province
              - generic [ref=e180]:
                - generic [ref=e181]: "#2"
                - generic [ref=e182]: scenic
          - generic [ref=e183] [cursor=pointer]:
            - img "The Geul valley — the Netherlands' most scenic wooded valley" [ref=e185]
            - generic [ref=e186]:
              - generic [ref=e187]:
                - generic [ref=e188]: South Limburg Hills
                - generic [ref=e189]: Limburg Province
              - generic [ref=e190]:
                - generic [ref=e191]: "#2"
                - generic [ref=e192]: challenging
          - generic [ref=e193] [cursor=pointer]:
            - img "The Cat and Fiddle Inn — England's second-highest pub" [ref=e195]
            - generic [ref=e196]:
              - generic [ref=e197]:
                - generic [ref=e198]: Cat and Fiddle (A537)
                - generic [ref=e199]: Cheshire / Derbyshire
              - generic [ref=e200]:
                - generic [ref=e201]: "#3"
                - generic [ref=e202]: challenging
          - generic [ref=e203] [cursor=pointer]:
            - img "The Llanberis Pass between towering rock faces" [ref=e205]
            - generic [ref=e206]:
              - generic [ref=e207]:
                - generic [ref=e208]: Llanberis Pass (A4086)
                - generic [ref=e209]: Gwynedd, Snowdonia
              - generic [ref=e210]:
                - generic [ref=e211]: "#3"
                - generic [ref=e212]: challenging
          - generic [ref=e213] [cursor=pointer]:
            - img "Buachaille Etive Mòr — Glencoe's iconic mountain" [ref=e215]
            - generic [ref=e216]:
              - generic [ref=e217]:
                - generic [ref=e218]: A82 Glencoe
                - generic [ref=e219]: Highlands
              - generic [ref=e220]:
                - generic [ref=e221]: "#3"
                - generic [ref=e222]: scenic
          - generic [ref=e223] [cursor=pointer]:
            - img "The Verdon Gorge from the northern rim road" [ref=e225]
            - generic [ref=e226]:
              - generic [ref=e227]:
                - generic [ref=e228]: Gorge du Verdon
                - generic [ref=e229]: Alpes-de-Haute-Provence / Var
              - generic [ref=e230]:
                - generic [ref=e231]: "#3"
                - generic [ref=e232]: thrilling
          - generic [ref=e233] [cursor=pointer]:
            - img "The Amblève river winding through the Ardennes" [ref=e235]
            - generic [ref=e236]:
              - generic [ref=e237]:
                - generic [ref=e238]: Vallée de l'Amblève
                - generic [ref=e239]: Liège Province, Ardennes
              - generic [ref=e240]:
                - generic [ref=e241]: "#3"
                - generic [ref=e242]: scenic
          - generic [ref=e243] [cursor=pointer]:
            - img "Heathland in the Hoge Veluwe National Park" [ref=e245]
            - generic [ref=e246]:
              - generic [ref=e247]:
                - generic [ref=e248]: Hoge Veluwe National Park
                - generic [ref=e249]: Gelderland Province
              - generic [ref=e250]:
                - generic [ref=e251]: "#3"
                - generic [ref=e252]: scenic
          - generic [ref=e253] [cursor=pointer]:
            - img "Ladybower Reservoir on the approach" [ref=e255]
            - generic [ref=e256]:
              - generic [ref=e257]:
                - generic [ref=e258]: Snake Pass (A57)
                - generic [ref=e259]: Derbyshire / Greater Manchester
              - generic [ref=e260]:
                - generic [ref=e261]: "#4"
                - generic [ref=e262]: challenging
          - generic [ref=e263] [cursor=pointer]:
            - img "The sweeping curves of Horseshoe Pass" [ref=e265]
            - generic [ref=e266]:
              - generic [ref=e267]:
                - generic [ref=e268]: Horseshoe Pass (A542)
                - generic [ref=e269]: Denbighshire
              - generic [ref=e270]:
                - generic [ref=e271]: "#4"
                - generic [ref=e272]: challenging
          - generic [ref=e273] [cursor=pointer]:
            - img "The Five Sisters of Kintail above Glen Shiel" [ref=e275]
            - generic [ref=e276]:
              - generic [ref=e277]:
                - generic [ref=e278]: Glen Shiel (A87)
                - generic [ref=e279]: Highland
              - generic [ref=e280]:
                - generic [ref=e281]: "#4"
                - generic [ref=e282]: scenic
          - generic [ref=e283] [cursor=pointer]:
            - img "The summit of the Col de l'Iseran at 2,770m" [ref=e285]
            - generic [ref=e286]:
              - generic [ref=e287]:
                - generic [ref=e288]: Col de l'Iseran
                - generic [ref=e289]: Savoie
              - generic [ref=e290]:
                - generic [ref=e291]: "#4"
                - generic [ref=e292]: thrilling
          - generic [ref=e293] [cursor=pointer]:
            - img "The River Semois at Bouillon" [ref=e295]
            - generic [ref=e296]:
              - generic [ref=e297]:
                - generic [ref=e298]: Route de la Semois
                - generic [ref=e299]: Luxembourg Province, Ardennes
              - generic [ref=e300]:
                - generic [ref=e301]: "#4"
                - generic [ref=e302]: scenic
          - generic [ref=e303] [cursor=pointer]:
            - img "The Oosterscheldekering storm surge barrier" [ref=e305]
            - generic [ref=e306]:
              - generic [ref=e307]:
                - generic [ref=e308]: Zeeuwse Delta Islands
                - generic [ref=e309]: Zeeland Province
              - generic [ref=e310]:
                - generic [ref=e311]: "#4"
                - generic [ref=e312]: scenic
          - generic [ref=e313] [cursor=pointer]:
            - img "The dramatic Buttertubs Pass road" [ref=e315]
            - generic [ref=e316]:
              - generic [ref=e317]:
                - generic [ref=e318]: Buttertubs Pass
                - generic [ref=e319]: North Yorkshire
              - generic [ref=e320]:
                - generic [ref=e321]: "#5"
                - generic [ref=e322]: thrilling
          - generic [ref=e323] [cursor=pointer]:
            - img "Dan-yr-Ogof caves complex beside the A4067" [ref=e325]
            - generic [ref=e326]:
              - generic [ref=e327]:
                - generic [ref=e328]: A4067 Sennybridge to Swansea
                - generic [ref=e329]: Powys / Neath Port Talbot
              - generic [ref=e330]:
                - generic [ref=e331]: "#5"
                - generic [ref=e332]: thrilling
          - generic [ref=e333] [cursor=pointer]:
            - img "Glenshee ski area in the Cairngorms" [ref=e335]
            - generic [ref=e336]:
              - generic [ref=e337]:
                - generic [ref=e338]: Snow Roads Scenic Route
                - generic [ref=e339]: Cairngorms
              - generic [ref=e340]:
                - generic [ref=e341]: "#5"
                - generic [ref=e342]: scenic
          - generic [ref=e343] [cursor=pointer]:
            - img "The Casse Déserte's alien landscape below the col" [ref=e345]
            - generic [ref=e346]:
              - generic [ref=e347]:
                - generic [ref=e348]: Col d'Izoard
                - generic [ref=e349]: Hautes-Alpes
              - generic [ref=e350]:
                - generic [ref=e351]: "#5"
                - generic [ref=e352]: thrilling
          - generic [ref=e353] [cursor=pointer]:
            - img "The Barrage de la Vesdre reservoir near Eupen" [ref=e355]
            - generic [ref=e356]:
              - generic [ref=e357]:
                - generic [ref=e358]: Lac d'Eupen Approach
                - generic [ref=e359]: Liège Province, Eastern Belgium
              - generic [ref=e360]:
                - generic [ref=e361]: "#5"
                - generic [ref=e362]: scenic
          - generic [ref=e363] [cursor=pointer]:
            - img "The Schoorlse dunes — tallest in the Netherlands" [ref=e365]
            - generic [ref=e366]:
              - generic [ref=e367]:
                - generic [ref=e368]: Noord-Holland Coastal Dunes
                - generic [ref=e369]: Noord-Holland Province
              - generic [ref=e370]:
                - generic [ref=e371]: "#5"
                - generic [ref=e372]: scenic
          - generic [ref=e373] [cursor=pointer]:
            - img "Kirkstone Pass — highest road pass in the Lake District" [ref=e375]
            - generic [ref=e376]:
              - generic [ref=e377]:
                - generic [ref=e378]: Kirkstone Pass (A592)
                - generic [ref=e379]: Cumbria, Lake District
              - generic [ref=e380]:
                - generic [ref=e381]: "#6"
                - generic [ref=e382]: scenic
          - generic [ref=e383] [cursor=pointer]:
            - img "Liathach — the great mountain above Torridon" [ref=e385]
            - generic [ref=e386]:
              - generic [ref=e387]:
                - generic [ref=e388]: Torridon Road (A832)
                - generic [ref=e389]: Wester Ross, Highland
              - generic [ref=e390]:
                - generic [ref=e391]: "#6"
                - generic [ref=e392]: scenic
          - generic [ref=e393] [cursor=pointer]:
            - img "The dramatic Aberglaslyn Pass gorge" [ref=e395]
            - generic [ref=e396]:
              - generic [ref=e397]:
                - generic [ref=e398]: Aberglaslyn Pass (A498)
                - generic [ref=e399]: Gwynedd
              - generic [ref=e400]:
                - generic [ref=e401]: "#6"
                - generic [ref=e402]: thrilling
          - generic [ref=e403] [cursor=pointer]:
            - img "The Route Napoléon at Col Bayard above Gap" [ref=e405]
            - generic [ref=e406]:
              - generic [ref=e407]:
                - generic [ref=e408]: Route Napoléon
                - generic [ref=e409]: Alpes-Maritimes / Alpes-de-Haute-Provence / Isère
              - generic [ref=e410]:
                - generic [ref=e411]: "#6"
                - generic [ref=e412]: scenic
          - generic [ref=e413] [cursor=pointer]:
            - img "Spa town centre — the original spa destination" [ref=e415]
            - generic [ref=e416]:
              - generic [ref=e417]:
                - generic [ref=e418]: Col du Rosier — Theux Loop
                - generic [ref=e419]: Liège Province, Ardennes
              - generic [ref=e420]:
                - generic [ref=e421]: "#6"
                - generic [ref=e422]: challenging
          - generic [ref=e423] [cursor=pointer]:
            - img "Posbank heather panorama in bloom" [ref=e425]
            - generic [ref=e426]:
              - generic [ref=e427]:
                - generic [ref=e428]: Veluwezoom Ridge Road
                - generic [ref=e429]: Gelderland Province
              - generic [ref=e430]:
                - generic [ref=e431]: "#6"
                - generic [ref=e432]: scenic
          - generic [ref=e433] [cursor=pointer]:
            - img "Glenfinnan Viaduct, immortalised by the Hogwarts Express" [ref=e435]
            - generic [ref=e436]:
              - generic [ref=e437]:
                - generic [ref=e438]: Road to the Isles (A830)
                - generic [ref=e439]: Lochaber, Highland
              - generic [ref=e440]:
                - generic [ref=e441]: "#7"
                - generic [ref=e442]: scenic
          - generic [ref=e443] [cursor=pointer]:
            - img "The Rhigos mountain summit plateau" [ref=e445]
            - generic [ref=e446]:
              - generic [ref=e447]:
                - generic [ref=e448]: Rhigos Mountain Road (A4061)
                - generic [ref=e449]: Rhondda Cynon Taf
              - generic [ref=e450]:
                - generic [ref=e451]: "#7"
                - generic [ref=e452]: thrilling
          - generic [ref=e453] [cursor=pointer]:
            - img "The limestone canyon of Winnats Pass" [ref=e455]
            - generic [ref=e456]:
              - generic [ref=e457]:
                - generic [ref=e458]: Winnats Pass
                - generic [ref=e459]: Derbyshire
              - generic [ref=e460]:
                - generic [ref=e461]: "#7"
                - generic [ref=e462]: thrilling
          - generic [ref=e463] [cursor=pointer]:
            - img "The Cime de la Bonette summit loop at 2,802m" [ref=e465]
            - generic [ref=e466]:
              - generic [ref=e467]:
                - generic [ref=e468]: Col de la Bonette
                - generic [ref=e469]: Alpes-Maritimes / Alpes-de-Haute-Provence
              - generic [ref=e470]:
                - generic [ref=e471]: "#7"
                - generic [ref=e472]: thrilling
          - generic [ref=e473] [cursor=pointer]:
            - img "Houffalize town in the Ourthe valley" [ref=e475]
            - generic [ref=e476]:
              - generic [ref=e477]:
                - generic [ref=e478]: Ardennes Houffalize Loop
                - generic [ref=e479]: Luxembourg Province, Ardennes
              - generic [ref=e480]:
                - generic [ref=e481]: "#7"
                - generic [ref=e482]: challenging
          - generic [ref=e483] [cursor=pointer]:
            - img "Vuurtoren Texel — the island's northern lighthouse" [ref=e485]
            - generic [ref=e486]:
              - generic [ref=e487]:
                - generic [ref=e488]: Texel Island Circuit
                - generic [ref=e489]: Noord-Holland Province
              - generic [ref=e490]:
                - generic [ref=e491]: "#7"
                - generic [ref=e492]: scenic
          - generic [ref=e493] [cursor=pointer]:
            - img "The towering limestone walls of Cheddar Gorge" [ref=e495]
            - generic [ref=e496]:
              - generic [ref=e497]:
                - generic [ref=e498]: Cheddar Gorge (B3135)
                - generic [ref=e499]: Somerset
              - generic [ref=e500]:
                - generic [ref=e501]: "#8"
                - generic [ref=e502]: challenging
          - generic [ref=e503] [cursor=pointer]:
            - img "Ardnamurchan Lighthouse at Britain's most westerly point" [ref=e505]
            - generic [ref=e506]:
              - generic [ref=e507]:
                - generic [ref=e508]: Ardnamurchan Peninsula (B8007)
                - generic [ref=e509]: Argyll & Bute
              - generic [ref=e510]:
                - generic [ref=e511]: "#8"
                - generic [ref=e512]: thrilling
          - generic [ref=e513] [cursor=pointer]:
            - img "Afan Forest Park at the foot of the mountain" [ref=e515]
            - generic [ref=e516]:
              - generic [ref=e517]:
                - generic [ref=e518]: Bwlch Mountain Road (A4107)
                - generic [ref=e519]: Neath Port Talbot
              - generic [ref=e520]:
                - generic [ref=e521]: "#8"
                - generic [ref=e522]: thrilling
          - generic [ref=e523] [cursor=pointer]:
            - img "The iron cross at the summit of the Col de la Croix de Fer" [ref=e525]
            - generic [ref=e526]:
              - generic [ref=e527]:
                - generic [ref=e528]: Col de la Croix de Fer
                - generic [ref=e529]: Savoie
              - generic [ref=e530]:
                - generic [ref=e531]: "#8"
                - generic [ref=e532]: challenging
          - generic [ref=e533] [cursor=pointer]:
            - img "La Roche-en-Ardenne and its castle above the Ourthe" [ref=e535]
            - generic [ref=e536]:
              - generic [ref=e537]:
                - generic [ref=e538]: Ourthe Valley — La Roche-en-Ardenne
                - generic [ref=e539]: Luxembourg Province, Ardennes
              - generic [ref=e540]:
                - generic [ref=e541]: "#8"
                - generic [ref=e542]: scenic
          - generic [ref=e543] [cursor=pointer]:
            - img "Stac Pollaidh visible from the A835" [ref=e545]
            - generic [ref=e546]:
              - generic [ref=e547]:
                - generic [ref=e548]: Assynt Inselbergs (A835)
                - generic [ref=e549]: Highland
              - generic [ref=e550]:
                - generic [ref=e551]: "#9"
                - generic [ref=e552]: scenic
          - generic [ref=e553] [cursor=pointer]:
            - img "The upper Wye Valley from the A470" [ref=e555]
            - generic [ref=e556]:
              - generic [ref=e557]:
                - generic [ref=e558]: A470 Brecon to Builth Wells
                - generic [ref=e559]: Powys
              - generic [ref=e560]:
                - generic [ref=e561]: "#9"
                - generic [ref=e562]: challenging
          - generic [ref=e563] [cursor=pointer]:
            - img "Porlock Hill — one of England's most notorious road climbs" [ref=e565]
            - generic [ref=e566]:
              - generic [ref=e567]:
                - generic [ref=e568]: Porlock Hill (A39)
                - generic [ref=e569]: Somerset
              - generic [ref=e570]:
                - generic [ref=e571]: "#9"
                - generic [ref=e572]: thrilling
          - generic [ref=e573] [cursor=pointer]:
            - img "The Maures coastline above the Mediterranean" [ref=e575]
            - generic [ref=e576]:
              - generic [ref=e577]:
                - generic [ref=e578]: Corniche des Maures
                - generic [ref=e579]: Var, Provence-Alpes-Côte d'Azur
              - generic [ref=e580]:
                - generic [ref=e581]: "#9"
                - generic [ref=e582]: scenic
          - generic [ref=e583] [cursor=pointer]:
            - img "Dartmoor ponies grazing beside the road" [ref=e585]
            - generic [ref=e586]:
              - generic [ref=e587]:
                - generic [ref=e588]: B3357 Dartmoor
                - generic [ref=e589]: Devon
              - generic [ref=e590]:
                - generic [ref=e591]: "#10"
                - generic [ref=e592]: scenic
          - generic [ref=e593] [cursor=pointer]:
            - img "Elan Valley reservoir dams in mid Wales" [ref=e595]
            - generic [ref=e596]:
              - generic [ref=e597]:
                - generic [ref=e598]: A44 Aberystwyth to Llangurig
                - generic [ref=e599]: Ceredigion / Powys
              - generic [ref=e600]:
                - generic [ref=e601]: "#10"
                - generic [ref=e602]: challenging
          - generic [ref=e603] [cursor=pointer]:
            - img "Lochcarron village on the shores of the sea loch" [ref=e605]
            - generic [ref=e606]:
              - generic [ref=e607]:
                - generic [ref=e608]: Glen Carron (A890)
                - generic [ref=e609]: Wester Ross, Highland
              - generic [ref=e610]:
                - generic [ref=e611]: "#10"
                - generic [ref=e612]: challenging
          - generic [ref=e613] [cursor=pointer]:
            - img "Pont d'Arc — the natural limestone arch over the Ardèche" [ref=e615]
            - generic [ref=e616]:
              - generic [ref=e617]:
                - generic [ref=e618]: Gorge de l'Ardèche
                - generic [ref=e619]: Ardèche, Auvergne-Rhône-Alpes
              - generic [ref=e620]:
                - generic [ref=e621]: "#10"
                - generic [ref=e622]: scenic
          - generic [ref=e623] [cursor=pointer]:
            - img "The Grey Mare's Tail waterfall above the A708" [ref=e625]
            - generic [ref=e626]:
              - generic [ref=e627]:
                - generic [ref=e628]: Grey Mare's Tail (A708)
                - generic [ref=e629]: Dumfries & Galloway
              - generic [ref=e630]:
                - generic [ref=e631]: "#11"
                - generic [ref=e632]: scenic
          - generic [ref=e633] [cursor=pointer]:
            - img "The Elan Valley reservoir with its Victorian dam" [ref=e635]
            - generic [ref=e636]:
              - generic [ref=e637]:
                - generic [ref=e638]: Elan Valley (B4518)
                - generic [ref=e639]: Powys
              - generic [ref=e640]:
                - generic [ref=e641]: "#11"
                - generic [ref=e642]: scenic
          - generic [ref=e643] [cursor=pointer]:
            - img "Killhope Lead Mining Museum on the A689 summit" [ref=e645]
            - generic [ref=e646]:
              - generic [ref=e647]:
                - generic [ref=e648]: Killhope Pass (A689)
                - generic [ref=e649]: County Durham/Cumbria
              - generic [ref=e650]:
                - generic [ref=e651]: "#11"
                - generic [ref=e652]: challenging
          - generic [ref=e653] [cursor=pointer]:
            - img "The Route des Crêtes along the Vosges ridge" [ref=e655]
            - generic [ref=e656]:
              - generic [ref=e657]:
                - generic [ref=e658]: Route des Crêtes des Vosges
                - generic [ref=e659]: Haut-Rhin / Bas-Rhin, Alsace
              - generic [ref=e660]:
                - generic [ref=e661]: "#11"
                - generic [ref=e662]: scenic
          - generic [ref=e663] [cursor=pointer]:
            - img "The Isle of Arran from the Ayrshire coast" [ref=e665]
            - generic [ref=e666]:
              - generic [ref=e667]:
                - generic [ref=e668]: The String Road (B880), Isle of Arran
                - generic [ref=e669]: North Ayrshire
              - generic [ref=e670]:
                - generic [ref=e671]: "#12"
                - generic [ref=e672]: thrilling
          - generic [ref=e673] [cursor=pointer]:
            - img "Dolgellau — starting point of the A470 climb" [ref=e675]
            - generic [ref=e676]:
              - generic [ref=e677]:
                - generic [ref=e678]: A470 Dolgellau to Bala
                - generic [ref=e679]: Gwynedd
              - generic [ref=e680]:
                - generic [ref=e681]: "#12"
                - generic [ref=e682]: challenging
          - generic [ref=e683] [cursor=pointer]:
            - img "Derwent Water from the B5289" [ref=e685]
            - generic [ref=e686]:
              - generic [ref=e687]:
                - generic [ref=e688]: Borrowdale (B5289)
                - generic [ref=e689]: Cumbria, Lake District
              - generic [ref=e690]:
                - generic [ref=e691]: "#12"
                - generic [ref=e692]: scenic
          - generic [ref=e693] [cursor=pointer]:
            - img "Lac du Mont Cenis on the summit plateau" [ref=e695]
            - generic [ref=e696]:
              - generic [ref=e697]:
                - generic [ref=e698]: Col du Mont Cenis
                - generic [ref=e699]: Savoie
              - generic [ref=e700]:
                - generic [ref=e701]: "#12"
                - generic [ref=e702]: challenging
          - generic [ref=e703] [cursor=pointer]:
            - img "The A85 threading through the Pass of Brander" [ref=e705]
            - generic [ref=e706]:
              - generic [ref=e707]:
                - generic [ref=e708]: Pass of Brander (A85)
                - generic [ref=e709]: Argyll & Bute
              - generic [ref=e710]:
                - generic [ref=e711]: "#13"
                - generic [ref=e712]: challenging
          - generic [ref=e713] [cursor=pointer]:
            - img "Llyn Tegid (Bala Lake) — the largest natural lake in Wales" [ref=e715]
            - generic [ref=e716]:
              - generic [ref=e717]:
                - generic [ref=e718]: Bala Lake Road (A494)
                - generic [ref=e719]: Gwynedd
              - generic [ref=e720]:
                - generic [ref=e721]: "#13"
                - generic [ref=e722]: scenic
          - generic [ref=e723] [cursor=pointer]:
            - img "The Langdale Pikes above Great Langdale" [ref=e725]
            - generic [ref=e726]:
              - generic [ref=e727]:
                - generic [ref=e728]: Great Langdale (B5343)
                - generic [ref=e729]: Cumbria, Lake District
              - generic [ref=e730]:
                - generic [ref=e731]: "#13"
                - generic [ref=e732]: challenging
          - generic [ref=e733] [cursor=pointer]:
            - img "The Route des Grandes Alpes near the Col du Galibier" [ref=e735]
            - generic [ref=e736]:
              - generic [ref=e737]:
                - generic [ref=e738]: Col de l'Agnel
                - generic [ref=e739]: Hautes-Alpes
              - generic [ref=e740]:
                - generic [ref=e741]: "#13"
                - generic [ref=e742]: thrilling
          - generic [ref=e743] [cursor=pointer]:
            - img "Cross Fell — the highest point in the Pennines" [ref=e745]
            - generic [ref=e746]:
              - generic [ref=e747]:
                - generic [ref=e748]: A686 Penrith to Alston
                - generic [ref=e749]: Cumbria / Northumberland
              - generic [ref=e750]:
                - generic [ref=e751]: "#14"
                - generic [ref=e752]: challenging
          - generic [ref=e753] [cursor=pointer]:
            - img "Castle Stalker on its tidal islet in Loch Laich" [ref=e755]
            - generic [ref=e756]:
              - generic [ref=e757]:
                - generic [ref=e758]: Appin Road (A828)
                - generic [ref=e759]: Highland
              - generic [ref=e760]:
                - generic [ref=e761]: "#14"
                - generic [ref=e762]: scenic
          - generic [ref=e763] [cursor=pointer]:
            - img "The Mawddach Estuary from the A496" [ref=e765]
            - generic [ref=e766]:
              - generic [ref=e767]:
                - generic [ref=e768]: Barmouth to Harlech (A496)
                - generic [ref=e769]: Gwynedd
              - generic [ref=e770]:
                - generic [ref=e771]: "#14"
                - generic [ref=e772]: scenic
          - generic [ref=e773] [cursor=pointer]:
            - img "The Route des Grandes Alpes near the Col du Galibier" [ref=e775]
            - generic [ref=e776]:
              - generic [ref=e777]:
                - generic [ref=e778]: Route des Grandes Alpes
                - generic [ref=e779]: Haute-Savoie / Savoie / Hautes-Alpes
              - generic [ref=e780]:
                - generic [ref=e781]: "#14"
                - generic [ref=e782]: scenic
          - generic [ref=e783] [cursor=pointer]:
            - img "The B974 climbing through Grampian moorland" [ref=e785]
            - generic [ref=e786]:
              - generic [ref=e787]:
                - generic [ref=e788]: Cairn o'Mount (B974)
                - generic [ref=e789]: Aberdeenshire
              - generic [ref=e790]:
                - generic [ref=e791]: "#15"
                - generic [ref=e792]: thrilling
          - generic [ref=e793] [cursor=pointer]:
            - img "Pen y Fan — the highest point in South Wales" [ref=e795]
            - generic [ref=e796]:
              - generic [ref=e797]:
                - generic [ref=e798]: Storey Arms (A4059)
                - generic [ref=e799]: Powys / Brecon Beacons
              - generic [ref=e800]:
                - generic [ref=e801]: "#15"
                - generic [ref=e802]: thrilling
          - generic [ref=e803] [cursor=pointer]:
            - img "Postbridge clapper bridge over the East Dart" [ref=e805]
            - generic [ref=e806]:
              - generic [ref=e807]:
                - generic [ref=e808]: Two Bridges (B3212)
                - generic [ref=e809]: Devon
              - generic [ref=e810]:
                - generic [ref=e811]: "#15"
                - generic [ref=e812]: scenic
          - generic [ref=e813] [cursor=pointer]:
            - img "The Millau Viaduct — world's tallest bridge" [ref=e815]
            - generic [ref=e816]:
              - generic [ref=e817]:
                - generic [ref=e818]: Millau Viaduct Approach (A75)
                - generic [ref=e819]: Aveyron, Occitanie
              - generic [ref=e820]:
                - generic [ref=e821]: "#15"
                - generic [ref=e822]: scenic
          - generic [ref=e823] [cursor=pointer]:
            - img "Boscastle harbour on the North Cornwall coast" [ref=e825]
            - generic [ref=e826]:
              - generic [ref=e827]:
                - generic [ref=e828]: Atlantic Highway (A39)
                - generic [ref=e829]: Devon / Cornwall
              - generic [ref=e830]:
                - generic [ref=e831]: "#16"
                - generic [ref=e832]: scenic
          - generic [ref=e833] [cursor=pointer]:
            - img "Loch Lomond from the western shore" [ref=e835]
            - generic [ref=e836]:
              - generic [ref=e837]:
                - generic [ref=e838]: Loch Lomond (A82)
                - generic [ref=e839]: Argyll & Bute / West Dunbartonshire
              - generic [ref=e840]:
                - generic [ref=e841]: "#16"
                - generic [ref=e842]: scenic
          - generic [ref=e843] [cursor=pointer]:
            - img "Moel Siabod from the A5 near Capel Curig" [ref=e845]
            - generic [ref=e846]:
              - generic [ref=e847]:
                - generic [ref=e848]: Capel Curig to Betws-y-Coed (A5)
                - generic [ref=e849]: Conwy
              - generic [ref=e850]:
                - generic [ref=e851]: "#16"
                - generic [ref=e852]: scenic
          - generic [ref=e853] [cursor=pointer]:
            - img "Iona Abbey — destination at the end of the A849" [ref=e855]
            - generic [ref=e856]:
              - generic [ref=e857]:
                - generic [ref=e858]: Ross of Mull (A849)
                - generic [ref=e859]: Argyll & Bute
              - generic [ref=e860]:
                - generic [ref=e861]: "#17"
                - generic [ref=e862]: thrilling
          - generic [ref=e863] [cursor=pointer]:
            - img "The wooded Banwy Valley on the A458" [ref=e865]
            - generic [ref=e866]:
              - generic [ref=e867]:
                - generic [ref=e868]: Welshpool to Mallwyd (A458)
                - generic [ref=e869]: Powys
              - generic [ref=e870]:
                - generic [ref=e871]: "#17"
                - generic [ref=e872]: challenging
          - generic [ref=e873] [cursor=pointer]:
            - img "Whinlatter Forest — England's only mountain forest" [ref=e875]
            - generic [ref=e876]:
              - generic [ref=e877]:
                - generic [ref=e878]: Whinlatter Pass (B5292)
                - generic [ref=e879]: Cumbria, Lake District
              - generic [ref=e880]:
                - generic [ref=e881]: "#17"
                - generic [ref=e882]: scenic
          - generic [ref=e883] [cursor=pointer]:
            - img "Loch Ness from the southern shore" [ref=e885]
            - generic [ref=e886]:
              - generic [ref=e887]:
                - generic [ref=e888]: Loch Ness South Shore (B862)
                - generic [ref=e889]: Highland
              - generic [ref=e890]:
                - generic [ref=e891]: "#18"
                - generic [ref=e892]: scenic
          - generic [ref=e893] [cursor=pointer]:
            - img "Lake Vyrnwy with its Victorian dam and valve tower" [ref=e895]
            - generic [ref=e896]:
              - generic [ref=e897]:
                - generic [ref=e898]: Lake Vyrnwy Circuit (B4393)
                - generic [ref=e899]: Powys
              - generic [ref=e900]:
                - generic [ref=e901]: "#18"
                - generic [ref=e902]: scenic
          - generic [ref=e903] [cursor=pointer]:
            - img "The open moorland of Exmoor" [ref=e905]
            - generic [ref=e906]:
              - generic [ref=e907]:
                - generic [ref=e908]: Exmoor High Moor (B3223)
                - generic [ref=e909]: Somerset
              - generic [ref=e910]:
                - generic [ref=e911]: "#18"
                - generic [ref=e912]: scenic
          - generic [ref=e913] [cursor=pointer]:
            - img "Dunnet Head — the most northerly point of mainland Britain" [ref=e915]
            - generic [ref=e916]:
              - generic [ref=e917]:
                - generic [ref=e918]: North Coast — Tongue to Thurso (A836)
                - generic [ref=e919]: Highland
              - generic [ref=e920]:
                - generic [ref=e921]: "#19"
                - generic [ref=e922]: scenic
          - generic [ref=e923] [cursor=pointer]:
            - img "Aberystwyth — destination at the end of the A487" [ref=e925]
            - generic [ref=e926]:
              - generic [ref=e927]:
                - generic [ref=e928]: Machynlleth to Aberystwyth (A487)
                - generic [ref=e929]: Ceredigion
              - generic [ref=e930]:
                - generic [ref=e931]: "#19"
                - generic [ref=e932]: challenging
          - generic [ref=e933] [cursor=pointer]:
            - img "The Hope Valley from Win Hill" [ref=e935]
            - generic [ref=e936]:
              - generic [ref=e937]:
                - generic [ref=e938]: Hope Valley (A625)
                - generic [ref=e939]: Derbyshire
              - generic [ref=e940]:
                - generic [ref=e941]: "#19"
                - generic [ref=e942]: scenic
          - generic [ref=e943] [cursor=pointer]:
            - img "The empty military plateau of Mynydd Epynt" [ref=e945]
            - generic [ref=e946]:
              - generic [ref=e947]:
                - generic [ref=e948]: Mynydd Epynt (B4520)
                - generic [ref=e949]: Powys
              - generic [ref=e950]:
                - generic [ref=e951]: "#20"
                - generic [ref=e952]: challenging
          - generic [ref=e953] [cursor=pointer]:
            - img "High Force — England's largest waterfall" [ref=e955]
            - generic [ref=e956]:
              - generic [ref=e957]:
                - generic [ref=e958]: Upper Teesdale (B6277)
                - generic [ref=e959]: County Durham
              - generic [ref=e960]:
                - generic [ref=e961]: "#20"
                - generic [ref=e962]: scenic
          - generic [ref=e963] [cursor=pointer]:
            - img "Grasmere — a gem of the Lake District" [ref=e965]
            - generic [ref=e966]:
              - generic [ref=e967]:
                - generic [ref=e968]: Dunmail Raise (A591)
                - generic [ref=e969]: Cumbria, Lake District
              - generic [ref=e970]:
                - generic [ref=e971]: "#21"
                - generic [ref=e972]: scenic
          - generic [ref=e973] [cursor=pointer]:
            - img "Pembroke Castle — birthplace of Henry VII" [ref=e975]
            - generic [ref=e976]:
              - generic [ref=e977]:
                - generic [ref=e978]: Pembrokeshire Coast (A477)
                - generic [ref=e979]: Pembrokeshire
              - generic [ref=e980]:
                - generic [ref=e981]: "#21"
                - generic [ref=e982]: scenic
          - generic [ref=e983] [cursor=pointer]:
            - img "Swaledale from the hillside above Muker" [ref=e985]
            - generic [ref=e986]:
              - generic [ref=e987]:
                - generic [ref=e988]: Swaledale (B6270)
                - generic [ref=e989]: North Yorkshire
              - generic [ref=e990]:
                - generic [ref=e991]: "#22"
                - generic [ref=e992]: scenic
          - generic [ref=e993] [cursor=pointer]:
            - img "Ribblehead Viaduct — 24 arches crossing the moorland" [ref=e995]
            - generic [ref=e996]:
              - generic [ref=e997]:
                - generic [ref=e998]: Ribblehead (B6255)
                - generic [ref=e999]: North Yorkshire
              - generic [ref=e1000]:
                - generic [ref=e1001]: "#23"
                - generic [ref=e1002]: scenic
          - generic [ref=e1003] [cursor=pointer]:
            - img "Shap Fell from the A6 summit" [ref=e1005]
            - generic [ref=e1006]:
              - generic [ref=e1007]:
                - generic [ref=e1008]: Shap Fell (A6)
                - generic [ref=e1009]: Cumbria
              - generic [ref=e1010]:
                - generic [ref=e1011]: "#24"
                - generic [ref=e1012]: challenging
          - generic [ref=e1013] [cursor=pointer]:
            - img "Chesil Beach — the famous 18-mile shingle barrier" [ref=e1015]
            - generic [ref=e1016]:
              - generic [ref=e1017]:
                - generic [ref=e1018]: Jurassic Coast Road (B3157)
                - generic [ref=e1019]: Dorset
              - generic [ref=e1020]:
                - generic [ref=e1021]: "#25"
                - generic [ref=e1022]: scenic
          - generic [ref=e1023] [cursor=pointer]:
            - img "Monsal Head viaduct over the River Wye" [ref=e1025]
            - generic [ref=e1026]:
              - generic [ref=e1027]:
                - generic [ref=e1028]: Miller's Dale (B6049)
                - generic [ref=e1029]: Derbyshire
              - generic [ref=e1030]:
                - generic [ref=e1031]: "#26"
                - generic [ref=e1032]: scenic
          - generic [ref=e1033] [cursor=pointer]:
            - img "Lynmouth harbour at the foot of the A39 descent" [ref=e1035]
            - generic [ref=e1036]:
              - generic [ref=e1037]:
                - generic [ref=e1038]: County Gate to Lynmouth (A39)
                - generic [ref=e1039]: Devon/Somerset
              - generic [ref=e1040]:
                - generic [ref=e1041]: "#27"
                - generic [ref=e1042]: challenging
          - generic [ref=e1043] [cursor=pointer]:
            - img "Simonsbath — the only village in the heart of Exmoor Forest" [ref=e1045]
            - generic [ref=e1046]:
              - generic [ref=e1047]:
                - generic [ref=e1048]: Simonsbath (B3358)
                - generic [ref=e1049]: Somerset
              - generic [ref=e1050]:
                - generic [ref=e1051]: "#28"
                - generic [ref=e1052]: challenging
          - generic [ref=e1053] [cursor=pointer]:
            - img "Lydford Gorge — a spectacular river canyon on the A386" [ref=e1055]
            - generic [ref=e1056]:
              - generic [ref=e1057]:
                - generic [ref=e1058]: Dartmoor Edge (A386)
                - generic [ref=e1059]: Devon
              - generic [ref=e1060]:
                - generic [ref=e1061]: "#29"
                - generic [ref=e1062]: scenic
          - generic [ref=e1063] [cursor=pointer]:
            - img "The Cheesewring — a gravity-defying granite stack above Minions" [ref=e1065]
            - generic [ref=e1066]:
              - generic [ref=e1067]:
                - generic [ref=e1068]: Minions and The Cheesewring (B3254)
                - generic [ref=e1069]: Cornwall
              - generic [ref=e1070]:
                - generic [ref=e1071]: "#30"
                - generic [ref=e1072]: challenging
          - generic [ref=e1073] [cursor=pointer]:
            - img "Chatsworth House — the Palace of the Peak" [ref=e1075]
            - generic [ref=e1076]:
              - generic [ref=e1077]:
                - generic [ref=e1078]: Baslow Edge (A623)
                - generic [ref=e1079]: Derbyshire
              - generic [ref=e1080]:
                - generic [ref=e1081]: "#31"
                - generic [ref=e1082]: challenging
          - generic [ref=e1083] [cursor=pointer]:
            - img "Heather moorland on the North York Moors" [ref=e1085]
            - generic [ref=e1086]:
              - generic [ref=e1087]:
                - generic [ref=e1088]: North York Moors (A169)
                - generic [ref=e1089]: North Yorkshire
              - generic [ref=e1090]:
                - generic [ref=e1091]: "#32"
                - generic [ref=e1092]: scenic
          - generic [ref=e1093] [cursor=pointer]:
            - img "Kinder Scout plateau from Rushup Edge" [ref=e1095]
            - generic [ref=e1096]:
              - generic [ref=e1097]:
                - generic [ref=e1098]: Rushup Edge
                - generic [ref=e1099]: Derbyshire
              - generic [ref=e1100]:
                - generic [ref=e1101]: "#33"
                - generic [ref=e1102]: thrilling
          - generic [ref=e1103] [cursor=pointer]:
            - img "Dulverton — gateway to Exmoor on the A396" [ref=e1105]
            - generic [ref=e1106]:
              - generic [ref=e1107]:
                - generic [ref=e1108]: Exe Valley (A396)
                - generic [ref=e1109]: Somerset
              - generic [ref=e1110]:
                - generic [ref=e1111]: "#34"
                - generic [ref=e1112]: scenic
          - generic [ref=e1113] [cursor=pointer]:
            - img "Ingleborough from the A65" [ref=e1115]
            - generic [ref=e1116]:
              - generic [ref=e1117]:
                - generic [ref=e1118]: Settle to Ingleton (A65)
                - generic [ref=e1119]: North Yorkshire
              - generic [ref=e1120]:
                - generic [ref=e1121]: "#35"
                - generic [ref=e1122]: scenic
          - generic [ref=e1123] [cursor=pointer]:
            - img "The narrow B1257 winding through Bilsdale" [ref=e1125]
            - generic [ref=e1126]:
              - generic [ref=e1127]:
                - generic [ref=e1128]: Bilsdale (B1257)
                - generic [ref=e1129]: North Yorkshire
              - generic [ref=e1130]:
                - generic [ref=e1131]: "#36"
                - generic [ref=e1132]: challenging
          - generic [ref=e1133] [cursor=pointer]:
            - img "Wildboarclough valley on the A54" [ref=e1135]
            - generic [ref=e1136]:
              - generic [ref=e1137]:
                - generic [ref=e1138]: Buxton to Congleton (A54)
                - generic [ref=e1139]: Cheshire/Derbyshire
              - generic [ref=e1140]:
                - generic [ref=e1141]: "#37"
                - generic [ref=e1142]: challenging
          - generic [ref=e1143] [cursor=pointer]:
            - img "Brimham Rocks — natural millstone grit sculptures above Nidderdale" [ref=e1145]
            - generic [ref=e1146]:
              - generic [ref=e1147]:
                - generic [ref=e1148]: Grassington to Pateley Bridge (B6265)
                - generic [ref=e1149]: North Yorkshire
              - generic [ref=e1150]:
                - generic [ref=e1151]: "#38"
                - generic [ref=e1152]: scenic
          - generic [ref=e1153] [cursor=pointer]:
            - img "The Dovedale gorge — accessible from the A515" [ref=e1155]
            - generic [ref=e1156]:
              - generic [ref=e1157]:
                - generic [ref=e1158]: Tissington (A515)
                - generic [ref=e1159]: Derbyshire
              - generic [ref=e1160]:
                - generic [ref=e1161]: "#39"
                - generic [ref=e1162]: scenic
          - generic [ref=e1163] [cursor=pointer]:
            - img "Robin Hood's Bay — Yorkshire's most picturesque coastal village" [ref=e1165]
            - generic [ref=e1166]:
              - generic [ref=e1167]:
                - generic [ref=e1168]: Whitby to Scarborough (A171)
                - generic [ref=e1169]: North Yorkshire
              - generic [ref=e1170]:
                - generic [ref=e1171]: "#40"
                - generic [ref=e1172]: scenic
          - generic [ref=e1173] [cursor=pointer]:
            - img "Broadway Tower on the Cotswold escarpment" [ref=e1175]
            - generic [ref=e1176]:
              - generic [ref=e1177]:
                - generic [ref=e1178]: Broadway Hill (B4632)
                - generic [ref=e1179]: Worcestershire/Gloucestershire
              - generic [ref=e1180]:
                - generic [ref=e1181]: "#41"
                - generic [ref=e1182]: scenic
          - generic [ref=e1183] [cursor=pointer]:
            - img "Pendle Hill — Lancashire's most atmospheric landmark" [ref=e1185]
            - generic [ref=e1186]:
              - generic [ref=e1187]:
                - generic [ref=e1188]: Pendle Hill (A682)
                - generic [ref=e1189]: Lancashire
              - generic [ref=e1190]:
                - generic [ref=e1191]: "#42"
                - generic [ref=e1192]: challenging
          - generic [ref=e1193] [cursor=pointer]:
            - img "Macclesfield Forest from Tegg's Nose" [ref=e1195]
            - generic [ref=e1196]:
              - generic [ref=e1197]:
                - generic [ref=e1198]: Macclesfield Forest (A536)
                - generic [ref=e1199]: Cheshire
              - generic [ref=e1200]:
                - generic [ref=e1201]: "#43"
                - generic [ref=e1202]: scenic
          - generic [ref=e1203] [cursor=pointer]:
            - img "Stanway House and its Jacobean gatehouse" [ref=e1205]
            - generic [ref=e1206]:
              - generic [ref=e1207]:
                - generic [ref=e1208]: Stow Hill (B4077)
                - generic [ref=e1209]: Gloucestershire
              - generic [ref=e1210]:
                - generic [ref=e1211]: "#44"
                - generic [ref=e1212]: scenic
          - generic [ref=e1213] [cursor=pointer]:
            - img "Aysgarth Falls in Wensleydale" [ref=e1215]
            - generic [ref=e1216]:
              - generic [ref=e1217]:
                - generic [ref=e1218]: Wensleydale (A684)
                - generic [ref=e1219]: North Yorkshire
              - generic [ref=e1220]:
                - generic [ref=e1221]: "#45"
                - generic [ref=e1222]: scenic
          - generic [ref=e1223] [cursor=pointer]:
            - img "Bolton Abbey on the banks of the River Wharfe" [ref=e1225]
            - generic [ref=e1226]:
              - generic [ref=e1227]:
                - generic [ref=e1228]: Wharfedale (B6160)
                - generic [ref=e1229]: North Yorkshire
              - generic [ref=e1230]:
                - generic [ref=e1231]: "#46"
                - generic [ref=e1232]: scenic
          - generic [ref=e1233] [cursor=pointer]:
            - img "Jamaica Inn — immortalised by Daphne du Maurier" [ref=e1235]
            - generic [ref=e1236]:
              - generic [ref=e1237]:
                - generic [ref=e1238]: Bodmin Moor (A30)
                - generic [ref=e1239]: Cornwall
              - generic [ref=e1240]:
                - generic [ref=e1241]: "#47"
                - generic [ref=e1242]: scenic
          - generic [ref=e1243] [cursor=pointer]:
            - img "The Cotswold escarpment at Birdlip" [ref=e1245]
            - generic [ref=e1246]:
              - generic [ref=e1247]:
                - generic [ref=e1248]: Birdlip Hill (A417)
                - generic [ref=e1249]: Gloucestershire
              - generic [ref=e1250]:
                - generic [ref=e1251]: "#48"
                - generic [ref=e1252]: challenging
          - generic [ref=e1253] [cursor=pointer]:
            - img "Gold Hill Shaftesbury — the Hovis advert cobbled street" [ref=e1255]
            - generic [ref=e1256]:
              - generic [ref=e1257]:
                - generic [ref=e1258]: Cranborne Chase (B3081)
                - generic [ref=e1259]: Dorset/Wiltshire
              - generic [ref=e1260]:
                - generic [ref=e1261]: "#49"
                - generic [ref=e1262]: scenic
          - generic [ref=e1263] [cursor=pointer]:
            - img "Maiden Castle — one of Europe's largest Iron Age hillforts" [ref=e1265]
            - generic [ref=e1266]:
              - generic [ref=e1267]:
                - generic [ref=e1268]: Dorset Ridgeway (A35)
                - generic [ref=e1269]: Dorset
              - generic [ref=e1270]:
                - generic [ref=e1271]: "#50"
                - generic [ref=e1272]: scenic
          - generic [ref=e1273] [cursor=pointer]:
            - img "Chastleton House — an unchanged Jacobean manor" [ref=e1275]
            - generic [ref=e1276]:
              - generic [ref=e1277]:
                - generic [ref=e1278]: Chipping Norton to Broadway (A44)
                - generic [ref=e1279]: Oxfordshire/Worcestershire
              - generic [ref=e1280]:
                - generic [ref=e1281]: "#51"
                - generic [ref=e1282]: scenic
          - generic [ref=e1283] [cursor=pointer]:
            - img "Wells Cathedral — England's most beautiful small cathedral" [ref=e1285]
            - generic [ref=e1286]:
              - generic [ref=e1287]:
                - generic [ref=e1288]: Mendip Hills (A371)
                - generic [ref=e1289]: Somerset
              - generic [ref=e1290]:
                - generic [ref=e1291]: "#52"
                - generic [ref=e1292]: scenic
          - generic [ref=e1293] [cursor=pointer]:
            - img "Sherborne Abbey in the heart of Dorset" [ref=e1295]
            - generic [ref=e1296]:
              - generic [ref=e1297]:
                - generic [ref=e1298]: Blackmore Vale (A357)
                - generic [ref=e1299]: Dorset
              - generic [ref=e1300]:
                - generic [ref=e1301]: "#53"
                - generic [ref=e1302]: scenic
          - generic [ref=e1303] [cursor=pointer]:
            - img "Petworth House — a National Trust treasure on the A272" [ref=e1305]
            - generic [ref=e1306]:
              - generic [ref=e1307]:
                - generic [ref=e1308]: South Downs Way (A272)
                - generic [ref=e1309]: Hampshire/West Sussex
              - generic [ref=e1310]:
                - generic [ref=e1311]: "#54"
                - generic [ref=e1312]: scenic
          - generic [ref=e1313] [cursor=pointer]:
            - img "Golden Cap — the highest sea cliff on England's south coast" [ref=e1315]
            - generic [ref=e1316]:
              - generic [ref=e1317]:
                - generic [ref=e1318]: Golden Cap (B3165)
                - generic [ref=e1319]: Dorset
              - generic [ref=e1320]:
                - generic [ref=e1321]: "#55"
                - generic [ref=e1322]: scenic
          - generic [ref=e1323] [cursor=pointer]:
            - img "Open heathland on Ashdown Forest" [ref=e1325]
            - generic [ref=e1326]:
              - generic [ref=e1327]:
                - generic [ref=e1328]: Ashdown Forest (B2026)
                - generic [ref=e1329]: East Sussex
              - generic [ref=e1330]:
                - generic [ref=e1331]: "#56"
                - generic [ref=e1332]: scenic
          - generic [ref=e1333] [cursor=pointer]:
            - img "Box Hill from the North Downs escarpment" [ref=e1335]
            - generic [ref=e1336]:
              - generic [ref=e1337]:
                - generic [ref=e1338]: Surrey Hills (A25)
                - generic [ref=e1339]: Surrey
              - generic [ref=e1340]:
                - generic [ref=e1341]: "#57"
                - generic [ref=e1342]: scenic
          - generic [ref=e1343] [cursor=pointer]:
            - img "The Devil's Punchbowl near Hindhead" [ref=e1345]
            - generic [ref=e1346]:
              - generic [ref=e1347]:
                - generic [ref=e1348]: Hindhead to Chichester (A286)
                - generic [ref=e1349]: Surrey/West Sussex
              - generic [ref=e1350]:
                - generic [ref=e1351]: "#58"
                - generic [ref=e1352]: scenic
          - generic [ref=e1353] [cursor=pointer]:
            - img "The Hog's Back chalk ridge above the Surrey countryside" [ref=e1355]
            - generic [ref=e1356]:
              - generic [ref=e1357]:
                - generic [ref=e1358]: Hog's Back (A31)
                - generic [ref=e1359]: Surrey
              - generic [ref=e1360]:
                - generic [ref=e1361]: "#59"
                - generic [ref=e1362]: scenic
          - generic [ref=e1363] [cursor=pointer]:
            - img "East Meon — a perfect Hampshire downland village" [ref=e1365]
            - generic [ref=e1366]:
              - generic [ref=e1367]:
                - generic [ref=e1368]: Meon Valley (A32)
                - generic [ref=e1369]: Hampshire
              - generic [ref=e1370]:
                - generic [ref=e1371]: "#60"
                - generic [ref=e1372]: scenic
        - paragraph [ref=e1374]: Drive responsibly. Respect speed limits and road conditions. These roads are public highways — not racetracks.
      - complementary:
        - generic:
          - heading "Select a Road" [level=2]
          - button "Close panel":
            - img
        - generic:
          - paragraph: Click any marker on the map to discover route details, driving tips, and what makes each road special.
    - generic [ref=e1376]:
      - generic:
        - generic:
          - button "2" [ref=e1377] [cursor=pointer]:
            - generic [ref=e1378]: "2"
          - button "1" [ref=e1379] [cursor=pointer]:
            - generic [ref=e1380]: "1"
          - button "1" [ref=e1381] [cursor=pointer]:
            - generic [ref=e1382]: "1"
          - button "4" [ref=e1383] [cursor=pointer]:
            - generic [ref=e1384]: "4"
          - button "3" [ref=e1385] [cursor=pointer]:
            - generic [ref=e1386]: "3"
          - button "2" [ref=e1387] [cursor=pointer]:
            - generic [ref=e1388]: "2"
          - button "5" [ref=e1389] [cursor=pointer]:
            - generic [ref=e1390]: "5"
          - button "16" [ref=e1391] [cursor=pointer]:
            - generic [ref=e1392]: "16"
          - button "3" [ref=e1393] [cursor=pointer]:
            - generic [ref=e1394]: "3"
          - button "8" [ref=e1395] [cursor=pointer]:
            - generic [ref=e1396]: "8"
          - button "3" [ref=e1397] [cursor=pointer]:
            - generic [ref=e1398]: "3"
          - button "4" [ref=e1399] [cursor=pointer]:
            - generic [ref=e1400]: "4"
          - button "1" [ref=e1401] [cursor=pointer]:
            - generic [ref=e1402]: "1"
          - button "5" [ref=e1403] [cursor=pointer]:
            - generic [ref=e1404]: "5"
          - button "6" [ref=e1405] [cursor=pointer]:
            - generic [ref=e1406]: "6"
          - button "10" [ref=e1407] [cursor=pointer]:
            - generic [ref=e1408]: "10"
          - button "5" [ref=e1409] [cursor=pointer]:
            - generic [ref=e1410]: "5"
          - button "25" [ref=e1411] [cursor=pointer]:
            - generic [ref=e1412]: "25"
          - button "10" [ref=e1413] [cursor=pointer]:
            - generic [ref=e1414]: "10"
          - button "14" [ref=e1415] [cursor=pointer]:
            - generic [ref=e1416]: "14"
          - button "7" [ref=e1417] [cursor=pointer]:
            - generic [ref=e1418]: "7"
          - button "8" [ref=e1419] [cursor=pointer]:
            - generic [ref=e1420]: "8"
          - button "4" [ref=e1421] [cursor=pointer]:
            - generic [ref=e1422]: "4"
          - button "10" [ref=e1423] [cursor=pointer]:
            - generic [ref=e1424]: "10"
          - button "6" [ref=e1425] [cursor=pointer]:
            - generic [ref=e1426]: "6"
          - button "9" [ref=e1427] [cursor=pointer]:
            - generic [ref=e1428]: "9"
          - button "15" [ref=e1429] [cursor=pointer]:
            - generic [ref=e1430]: "15"
          - button "12" [ref=e1431] [cursor=pointer]:
            - generic [ref=e1432]: "12"
          - button "11" [ref=e1433] [cursor=pointer]:
            - generic [ref=e1434]: "11"
          - button "13" [ref=e1435] [cursor=pointer]:
            - generic [ref=e1436]: "13"
          - button "14" [ref=e1437] [cursor=pointer]:
            - generic [ref=e1438]: "14"
          - button "16" [ref=e1439] [cursor=pointer]:
            - generic [ref=e1440]: "16"
          - button "17" [ref=e1441] [cursor=pointer]:
            - generic [ref=e1442]: "17"
          - button "19" [ref=e1443] [cursor=pointer]:
            - generic [ref=e1444]: "19"
          - button "18" [ref=e1445] [cursor=pointer]:
            - generic [ref=e1446]: "18"
          - button "6" [ref=e1447] [cursor=pointer]:
            - generic [ref=e1448]: "6"
          - button "11" [ref=e1449] [cursor=pointer]:
            - generic [ref=e1450]: "11"
          - button "9" [ref=e1451] [cursor=pointer]:
            - generic [ref=e1452]: "9"
          - button "13" [ref=e1453] [cursor=pointer]:
            - generic [ref=e1454]: "13"
          - button "14" [ref=e1455] [cursor=pointer]:
            - generic [ref=e1456]: "14"
          - button "19" [ref=e1457] [cursor=pointer]:
            - generic [ref=e1458]: "19"
          - button "12" [ref=e1459] [cursor=pointer]:
            - generic [ref=e1460]: "12"
          - button "7" [ref=e1461] [cursor=pointer]:
            - generic [ref=e1462]: "7"
          - button "8" [ref=e1463] [cursor=pointer]:
            - generic [ref=e1464]: "8"
          - button "17" [ref=e1465] [cursor=pointer]:
            - generic [ref=e1466]: "17"
          - button "18" [ref=e1467] [cursor=pointer]:
            - generic [ref=e1468]: "18"
          - button "15" [ref=e1469] [cursor=pointer]:
            - generic [ref=e1470]: "15"
          - button "16" [ref=e1471] [cursor=pointer]:
            - generic [ref=e1472]: "16"
          - button "20" [ref=e1473] [cursor=pointer]:
            - generic [ref=e1474]: "20"
          - button "2" [ref=e1475] [cursor=pointer]:
            - generic [ref=e1476]: "2"
          - button "12" [ref=e1477] [cursor=pointer]:
            - generic [ref=e1478]: "12"
          - button "13" [ref=e1479] [cursor=pointer]:
            - generic [ref=e1480]: "13"
          - button "21" [ref=e1481] [cursor=pointer]:
            - generic [ref=e1482]: "21"
          - button "17" [ref=e1483] [cursor=pointer]:
            - generic [ref=e1484]: "17"
          - button "24" [ref=e1485] [cursor=pointer]:
            - generic [ref=e1486]: "24"
          - button "22" [ref=e1487] [cursor=pointer]:
            - generic [ref=e1488]: "22"
          - button "23" [ref=e1489] [cursor=pointer]:
            - generic [ref=e1490]: "23"
          - button "32" [ref=e1491] [cursor=pointer]:
            - generic [ref=e1492]: "32"
          - button "36" [ref=e1493] [cursor=pointer]:
            - generic [ref=e1494]: "36"
          - button "40" [ref=e1495] [cursor=pointer]:
            - generic [ref=e1496]: "40"
          - button "45" [ref=e1497] [cursor=pointer]:
            - generic [ref=e1498]: "45"
          - button "46" [ref=e1499] [cursor=pointer]:
            - generic [ref=e1500]: "46"
          - button "19" [ref=e1501] [cursor=pointer]:
            - generic [ref=e1502]: "19"
          - button "7" [ref=e1503] [cursor=pointer]:
            - generic [ref=e1504]: "7"
          - button "26" [ref=e1505] [cursor=pointer]:
            - generic [ref=e1506]: "26"
          - button "31" [ref=e1507] [cursor=pointer]:
            - generic [ref=e1508]: "31"
          - button "37" [ref=e1509] [cursor=pointer]:
            - generic [ref=e1510]: "37"
          - button "39" [ref=e1511] [cursor=pointer]:
            - generic [ref=e1512]: "39"
          - button "33" [ref=e1513] [cursor=pointer]:
            - generic [ref=e1514]: "33"
          - button "41" [ref=e1515] [cursor=pointer]:
            - generic [ref=e1516]: "41"
          - button "44" [ref=e1517] [cursor=pointer]:
            - generic [ref=e1518]: "44"
          - button "48" [ref=e1519] [cursor=pointer]:
            - generic [ref=e1520]: "48"
          - button "51" [ref=e1521] [cursor=pointer]:
            - generic [ref=e1522]: "51"
          - button "54" [ref=e1523] [cursor=pointer]:
            - generic [ref=e1524]: "54"
          - button "56" [ref=e1525] [cursor=pointer]:
            - generic [ref=e1526]: "56"
          - button "59" [ref=e1527] [cursor=pointer]:
            - generic [ref=e1528]: "59"
          - button "58" [ref=e1529] [cursor=pointer]:
            - generic [ref=e1530]: "58"
          - button "9" [ref=e1531] [cursor=pointer]:
            - generic [ref=e1532]: "9"
          - button "18" [ref=e1533] [cursor=pointer]:
            - generic [ref=e1534]: "18"
          - button "34" [ref=e1535] [cursor=pointer]:
            - generic [ref=e1536]: "34"
          - button "27" [ref=e1537] [cursor=pointer]:
            - generic [ref=e1538]: "27"
          - button "28" [ref=e1539] [cursor=pointer]:
            - generic [ref=e1540]: "28"
          - button "15" [ref=e1541] [cursor=pointer]:
            - generic [ref=e1542]: "15"
          - button "29" [ref=e1543] [cursor=pointer]:
            - generic [ref=e1544]: "29"
          - button "47" [ref=e1545] [cursor=pointer]:
            - generic [ref=e1546]: "47"
          - button "30" [ref=e1547] [cursor=pointer]:
            - generic [ref=e1548]: "30"
          - button "11" [ref=e1549] [cursor=pointer]:
            - generic [ref=e1550]: "11"
          - button "20" [ref=e1551] [cursor=pointer]:
            - generic [ref=e1552]: "20"
          - button "35" [ref=e1553] [cursor=pointer]:
            - generic [ref=e1554]: "35"
          - button "38" [ref=e1555] [cursor=pointer]:
            - generic [ref=e1556]: "38"
          - button "42" [ref=e1557] [cursor=pointer]:
            - generic [ref=e1558]: "42"
          - button "43" [ref=e1559] [cursor=pointer]:
            - generic [ref=e1560]: "43"
          - button "50" [ref=e1561] [cursor=pointer]:
            - generic [ref=e1562]: "50"
          - button "53" [ref=e1563] [cursor=pointer]:
            - generic [ref=e1564]: "53"
          - button "49" [ref=e1565] [cursor=pointer]:
            - generic [ref=e1566]: "49"
          - button "52" [ref=e1567] [cursor=pointer]:
            - generic [ref=e1568]: "52"
          - button "55" [ref=e1569] [cursor=pointer]:
            - generic [ref=e1570]: "55"
          - button "57" [ref=e1571] [cursor=pointer]:
            - generic [ref=e1572]: "57"
          - button "60" [ref=e1573] [cursor=pointer]:
            - generic [ref=e1574]: "60"
          - button "21" [ref=e1575] [cursor=pointer]:
            - generic [ref=e1576]: "21"
          - button "1" [ref=e1577] [cursor=pointer]:
            - generic [ref=e1578]: "1"
          - button "2" [ref=e1579] [cursor=pointer]:
            - generic [ref=e1580]: "2"
          - button "3" [ref=e1581] [cursor=pointer]:
            - generic [ref=e1582]: "3"
          - button "4" [ref=e1583] [cursor=pointer]:
            - generic [ref=e1584]: "4"
          - button "5" [ref=e1585] [cursor=pointer]:
            - generic [ref=e1586]: "5"
          - button "6" [ref=e1587] [cursor=pointer]:
            - generic [ref=e1588]: "6"
          - button "7" [ref=e1589] [cursor=pointer]:
            - generic [ref=e1590]: "7"
          - button "8" [ref=e1591] [cursor=pointer]:
            - generic [ref=e1592]: "8"
          - button "9" [ref=e1593] [cursor=pointer]:
            - generic [ref=e1594]: "9"
          - button "10" [ref=e1595] [cursor=pointer]:
            - generic [ref=e1596]: "10"
          - button "11" [ref=e1597] [cursor=pointer]:
            - generic [ref=e1598]: "11"
          - button "12" [ref=e1599] [cursor=pointer]:
            - generic [ref=e1600]: "12"
          - button "13" [ref=e1601] [cursor=pointer]:
            - generic [ref=e1602]: "13"
          - button "14" [ref=e1603] [cursor=pointer]:
            - generic [ref=e1604]: "14"
          - button "15" [ref=e1605] [cursor=pointer]:
            - generic [ref=e1606]: "15"
          - button "1" [ref=e1607] [cursor=pointer]:
            - generic [ref=e1608]: "1"
          - button "2" [ref=e1609] [cursor=pointer]:
            - generic [ref=e1610]: "2"
          - button "3" [ref=e1611] [cursor=pointer]:
            - generic [ref=e1612]: "3"
          - button "4" [ref=e1613] [cursor=pointer]:
            - generic [ref=e1614]: "4"
          - button "5" [ref=e1615] [cursor=pointer]:
            - generic [ref=e1616]: "5"
          - button "6" [ref=e1617] [cursor=pointer]:
            - generic [ref=e1618]: "6"
          - button "7" [ref=e1619] [cursor=pointer]:
            - generic [ref=e1620]: "7"
          - button "8" [ref=e1621] [cursor=pointer]:
            - generic [ref=e1622]: "8"
          - button "1" [ref=e1623] [cursor=pointer]:
            - generic [ref=e1624]: "1"
          - button "2" [ref=e1625] [cursor=pointer]:
            - generic [ref=e1626]: "2"
          - button "3" [ref=e1627] [cursor=pointer]:
            - generic [ref=e1628]: "3"
          - button "4" [ref=e1629] [cursor=pointer]:
            - generic [ref=e1630]: "4"
          - button "5" [ref=e1631] [cursor=pointer]:
            - generic [ref=e1632]: "5"
          - button "6" [ref=e1633] [cursor=pointer]:
            - generic [ref=e1634]: "6"
          - button "7" [ref=e1635] [cursor=pointer]:
            - generic [ref=e1636]: "7"
      - generic:
        - generic [ref=e1637]:
          - button "Zoom in" [ref=e1638] [cursor=pointer]: +
          - button "Zoom out" [ref=e1639] [cursor=pointer]: −
        - generic [ref=e1640]:
          - link "Leaflet" [ref=e1641] [cursor=pointer]:
            - /url: https://leafletjs.com
            - img [ref=e1642]
            - text: Leaflet
          - text: "| ©"
          - link "OpenStreetMap" [ref=e1646] [cursor=pointer]:
            - /url: https://www.openstreetmap.org/copyright
          - text: ©
          - link "CARTO" [ref=e1647] [cursor=pointer]:
            - /url: https://carto.com/
  - dialog "Plan Your Drive":
    - generic:
      - generic:
        - heading "Plan Your Drive" [level=2]:
          - img
          - text: Plan Your Drive
        - button "Close":
          - img
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: Starting Location
              - textbox "Starting Location":
                - /placeholder: e.g. Edinburgh
            - generic:
              - generic: Ending Location
              - textbox "Ending Location":
                - /placeholder: e.g. Fort William
          - generic:
            - generic: Towns to Stop At (optional)
            - textbox "Towns to Stop At (optional)":
              - /placeholder: e.g. Pitlochry, Aviemore, Glencoe
          - generic:
            - generic: Places of Interest to Include
            - generic:
              - generic:
                - checkbox "Historic"
                - text: Historic
              - generic:
                - checkbox "Viewpoints"
                - text: Viewpoints
              - generic:
                - checkbox "Waterfalls"
                - text: Waterfalls
              - generic:
                - checkbox "Villages"
                - text: Villages
              - generic:
                - checkbox "Pubs"
                - text: Pubs
              - generic:
                - checkbox "Nature"
                - text: Nature
              - generic:
                - checkbox "Racing Circuits"
                - text: Racing Circuits
              - generic:
                - checkbox "Motor Museums"
                - text: Motor Museums
              - generic:
                - checkbox "Industrial"
                - text: Industrial
          - generic:
            - generic:
              - generic: Number of Days
              - spinbutton "Number of Days": "3"
            - generic:
              - generic: Max Driving Hours / Day
              - spinbutton "Max Driving Hours / Day": "4"
          - generic:
            - generic:
              - text: OpenRouter API Key
              - link "Get API key →":
                - /url: https://openrouter.ai/keys
            - textbox "OpenRouter API Key Get API key →":
              - /placeholder: sk-or-v1-...
            - paragraph: Stored only in your browser. Requests are sent via OpenRouter.
          - generic:
            - generic:
              - text: Model (optional — leave blank to auto-select)
              - link "Browse models →":
                - /url: https://openrouter.ai/models
            - combobox "Model (optional — leave blank to auto-select) Browse models →"
            - paragraph: If your privacy settings block automatic selection, pick a specific model above.
          - button "Plan My Route":
            - img
            - text: Plan My Route
```

# Test source

```ts
  201 |     expect(title).not.toBe('Select a Road');
  202 |   });
  203 | 
  204 |   test('panel close button is visible and tappable on mobile', async ({ page }) => {
  205 |     await page.goto('/');
  206 |     await waitForMap(page);
  207 | 
  208 |     await page.locator('#sidebarHandle').tap();
  209 |     await page.waitForTimeout(500);
  210 |     const card = page.locator('.sidebar-road-list .road-card').first();
  211 |     await card.tap();
  212 |     await page.waitForTimeout(500);
  213 | 
  214 |     const closeBtn = page.locator('#panelClose');
  215 |     await expect(closeBtn).toBeVisible();
  216 |     // Touch target should be at least 40px
  217 |     const box = await closeBtn.boundingBox();
  218 |     expect(box.width).toBeGreaterThanOrEqual(36);
  219 |     expect(box.height).toBeGreaterThanOrEqual(36);
  220 | 
  221 |     await closeBtn.tap();
  222 |     await expect(page.locator('#roadPanel')).toHaveClass(/collapsed/, { timeout: 3000 });
  223 |   });
  224 | 
  225 |   test('closing panel removes panel-open class from sidebar', async ({ page }) => {
  226 |     await page.goto('/');
  227 |     await waitForMap(page);
  228 | 
  229 |     await page.locator('#sidebarHandle').tap();
  230 |     await page.waitForTimeout(500);
  231 |     await page.locator('.sidebar-road-list .road-card').first().tap();
  232 |     await page.waitForTimeout(500);
  233 |     await page.locator('#panelClose').tap();
  234 |     await page.waitForTimeout(400);
  235 | 
  236 |     await expect(page.locator('.app-sidebar')).not.toHaveClass(/panel-open/);
  237 |   });
  238 | 
  239 |   test('tapping a route POI closes the panel and keeps the road visible', async ({ page }) => {
  240 |     await page.goto('/');
  241 |     await waitForMap(page);
  242 | 
  243 |     await page.locator('#sidebarHandle').tap();
  244 |     await page.waitForTimeout(500);
  245 | 
  246 |     const card = page.locator('.sidebar-road-list .road-card').filter({ hasText: 'Cat and Fiddle' }).first();
  247 |     await expect(card).toBeVisible({ timeout: 10000 });
  248 |     await card.tap();
  249 |     await page.waitForTimeout(700);
  250 | 
  251 |     const routeButton = page.locator('#roadPanel .panel-route-poi-link').first();
  252 |     await expect(routeButton).toBeVisible({ timeout: 5000 });
  253 |     await routeButton.tap();
  254 | 
  255 |     await expect(page.locator('.app-sidebar')).not.toHaveClass(/panel-open/, { timeout: 5000 });
  256 |     await expect(page.locator('.leaflet-popup')).toBeVisible({ timeout: 5000 });
  257 | 
  258 |     const routeStillVisible = await page.evaluate(() => {
  259 |       const bounds = window.getCurrentRouteBounds?.();
  260 |       return !!bounds && window.map.getBounds().contains(bounds);
  261 |     });
  262 |     expect(routeStillVisible).toBe(true);
  263 |   });
  264 | });
  265 | 
  266 | // ─── Touch targets ───────────────────────────────────────────────────────────
  267 | 
  268 | test.describe('Mobile — touch targets', () => {
  269 |   test('region filter buttons meet minimum touch target height (36px)', async ({ page }) => {
  270 |     await page.goto('/');
  271 |     await waitForMap(page);
  272 |     await page.locator('#sidebarHandle').tap();
  273 |     await page.waitForTimeout(400);
  274 | 
  275 |     const filterBtns = page.locator('.app-sidebar .nav-btn[data-filter]');
  276 |     const count = await filterBtns.count();
  277 |     expect(count).toBeGreaterThan(0);
  278 | 
  279 |     for (let i = 0; i < count; i++) {
  280 |       const box = await filterBtns.nth(i).boundingBox();
  281 |       expect(box.height).toBeGreaterThanOrEqual(36);
  282 |     }
  283 |   });
  284 | 
  285 |   test('road cards meet minimum touch target height (52px)', async ({ page }) => {
  286 |     await page.goto('/');
  287 |     await waitForMap(page);
  288 |     await page.locator('#sidebarHandle').tap();
  289 |     await page.waitForTimeout(500);
  290 | 
  291 |     const cards = page.locator('.sidebar-road-list .road-card');
  292 |     await expect(cards.first()).toBeVisible({ timeout: 8000 });
  293 |     const box = await cards.first().boundingBox();
  294 |     expect(box.height).toBeGreaterThanOrEqual(44);
  295 |   });
  296 | 
  297 |   test('theme toggle meets minimum touch target size (36×36)', async ({ page }) => {
  298 |     await page.goto('/');
  299 |     const toggle = page.locator('[data-theme-toggle]');
  300 |     const box = await toggle.boundingBox();
> 301 |     expect(box.width).toBeGreaterThanOrEqual(36);
      |                       ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  302 |     expect(box.height).toBeGreaterThanOrEqual(36);
  303 |   });
  304 | });
  305 | 
  306 | // ─── Google Maps link on mobile ───────────────────────────────────────────────
  307 | 
  308 | test.describe('Mobile — Google Maps links', () => {
  309 |   test('Google Maps button is visible in panel on mobile', async ({ page }) => {
  310 |     await page.goto('/');
  311 |     await waitForMap(page);
  312 | 
  313 |     await page.locator('#sidebarHandle').tap();
  314 |     await page.waitForTimeout(500);
  315 |     await page.locator('.sidebar-road-list .road-card').first().tap();
  316 |     await page.waitForTimeout(600);
  317 | 
  318 |     const mapsBtn = page.locator('#roadPanel .panel-maps-btn');
  319 |     await expect(mapsBtn).toBeVisible({ timeout: 5000 });
  320 |     const href = await mapsBtn.getAttribute('href');
  321 |     expect(href).toContain('google.com/maps');
  322 |   });
  323 | });
  324 | 
  325 | // ─── Filters on mobile ───────────────────────────────────────────────────────
  326 | 
  327 | test.describe('Mobile — filters', () => {
  328 |   test('Scotland filter works in mobile sidebar', async ({ page }) => {
  329 |     await page.goto('/');
  330 |     await waitForMap(page);
  331 | 
  332 |     await page.locator('#sidebarHandle').tap();
  333 |     await page.waitForTimeout(400);
  334 | 
  335 |     const scotBtn = page.locator('.app-sidebar button[data-filter="scotland"]');
  336 |     await expect(scotBtn).toBeVisible();
  337 |     await scotBtn.tap();
  338 |     await expect(scotBtn).toHaveClass(/active/);
  339 | 
  340 |     const count = parseInt(await page.locator('#roadCount').textContent(), 10);
  341 |     expect(count).toBeGreaterThan(0);
  342 |     expect(count).toBeLessThan(100);
  343 |   });
  344 | 
  345 |   test('search input is reachable and functional on mobile', async ({ page }) => {
  346 |     await page.goto('/');
  347 |     await waitForMap(page);
  348 | 
  349 |     await page.locator('#sidebarHandle').tap();
  350 |     await page.waitForTimeout(400);
  351 | 
  352 |     const search = page.locator('#searchInput');
  353 |     await expect(search).toBeVisible();
  354 |     await search.tap();
  355 |     await search.fill('pass');
  356 |     await page.waitForTimeout(300);
  357 | 
  358 |     const count = await page.locator('.sidebar-road-list .road-card').count();
  359 |     expect(count).toBeGreaterThan(0);
  360 |   });
  361 | });
  362 | 
```