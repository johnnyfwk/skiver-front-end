const airports = [
    {
      "name": "Hartsfield Jackson Atlanta Intl",
      "city": "Atlanta",
      "country": "United States",
      "iata_code": "ATL",
      "_geoloc": {
        "latitude": 33.636719,
        "longitude": -84.428067
      },
      "links_count": 1826,
      "objectID": "3682"
    },
    {
      "name": "Chicago Ohare Intl",
      "city": "Chicago",
      "country": "United States",
      "iata_code": "ORD",
      "_geoloc": {
        "latitude": 41.978603,
        "longitude": -87.904842
      },
      "links_count": 1108,
      "objectID": "3830"
    },
    {
      "name": "Capital Intl",
      "city": "Beijing",
      "country": "China",
      "iata_code": "PEK",
      "_geoloc": {
        "latitude": 40.080111,
        "longitude": 116.584556
      },
      "links_count": 1069,
      "objectID": "3364"
    },
    {
      "name": "Heathrow",
      "city": "London",
      "country": "United Kingdom",
      "iata_code": "LHR",
      "_geoloc": {
        "latitude": 51.4775,
        "longitude": -0.461389
      },
      "links_count": 1051,
      "objectID": "507"
    },
    {
      "name": "Charles De Gaulle",
      "city": "Paris",
      "country": "France",
      "iata_code": "CDG",
      "_geoloc": {
        "latitude": 49.012779,
        "longitude": 2.55
      },
      "links_count": 1041,
      "objectID": "1382"
    },
    {
      "name": "Los Angeles Intl",
      "city": "Los Angeles",
      "country": "United States",
      "iata_code": "LAX",
      "_geoloc": {
        "latitude": 33.942536,
        "longitude": -118.408075
      },
      "links_count": 990,
      "objectID": "3484"
    },
    {
      "name": "Frankfurt Main",
      "city": "Frankfurt",
      "country": "Germany",
      "iata_code": "FRA",
      "_geoloc": {
        "latitude": 50.026421,
        "longitude": 8.543125
      },
      "links_count": 990,
      "objectID": "340"
    },
    {
      "name": "Dallas Fort Worth Intl",
      "city": "Dallas-Fort Worth",
      "country": "United States",
      "iata_code": "DFW",
      "_geoloc": {
        "latitude": 32.896828,
        "longitude": -97.037997
      },
      "links_count": 936,
      "objectID": "3670"
    },
    {
      "name": "John F Kennedy Intl",
      "city": "New York",
      "country": "United States",
      "iata_code": "JFK",
      "_geoloc": {
        "latitude": 40.639751,
        "longitude": -73.778925
      },
      "links_count": 911,
      "objectID": "3797"
    },
    {
      "name": "Schiphol",
      "city": "Amsterdam",
      "country": "Netherlands",
      "iata_code": "AMS",
      "_geoloc": {
        "latitude": 52.308613,
        "longitude": 4.763889
      },
      "links_count": 903,
      "objectID": "580"
    },
    {
      "name": "Pudong",
      "city": "Shanghai",
      "country": "China",
      "iata_code": "PVG",
      "_geoloc": {
        "latitude": 31.143378,
        "longitude": 121.805214
      },
      "links_count": 825,
      "objectID": "3406"
    },
    {
      "name": "Changi Intl",
      "city": "Singapore",
      "country": "Singapore",
      "iata_code": "SIN",
      "_geoloc": {
        "latitude": 1.350189,
        "longitude": 103.994433
      },
      "links_count": 820,
      "objectID": "3316"
    },
    {
      "name": "Barcelona",
      "city": "Barcelona",
      "country": "Spain",
      "iata_code": "BCN",
      "_geoloc": {
        "latitude": 41.297078,
        "longitude": 2.078464
      },
      "links_count": 783,
      "objectID": "1218"
    },
    {
      "name": "Incheon Intl",
      "city": "Seoul",
      "country": "South Korea",
      "iata_code": "ICN",
      "_geoloc": {
        "latitude": 37.469075,
        "longitude": 126.450517
      },
      "links_count": 740,
      "objectID": "3930"
    },
    {
      "name": "Denver Intl",
      "city": "Denver",
      "country": "United States",
      "iata_code": "DEN",
      "_geoloc": {
        "latitude": 39.861656,
        "longitude": -104.673178
      },
      "links_count": 735,
      "objectID": "3751"
    },
    {
      "name": "Miami Intl",
      "city": "Miami",
      "country": "United States",
      "iata_code": "MIA",
      "_geoloc": {
        "latitude": 25.79325,
        "longitude": -80.290556
      },
      "links_count": 734,
      "objectID": "3576"
    },
    {
      "name": "Franz Josef Strauss",
      "city": "Munich",
      "country": "Germany",
      "iata_code": "MUC",
      "_geoloc": {
        "latitude": 48.353783,
        "longitude": 11.786086
      },
      "links_count": 728,
      "objectID": "346"
    },
    {
      "name": "Ataturk",
      "city": "Istanbul",
      "country": "Turkey",
      "iata_code": "IST",
      "_geoloc": {
        "latitude": 40.976922,
        "longitude": 28.814606
      },
      "links_count": 719,
      "objectID": "1701"
    },
    {
      "name": "Hong Kong Intl",
      "city": "Hong Kong",
      "country": "Hong Kong",
      "iata_code": "HKG",
      "_geoloc": {
        "latitude": 22.308919,
        "longitude": 113.914603
      },
      "links_count": 710,
      "objectID": "3077"
    },
    {
      "name": "Dubai Intl",
      "city": "Dubai",
      "country": "United Arab Emirates",
      "iata_code": "DXB",
      "_geoloc": {
        "latitude": 25.252778,
        "longitude": 55.364444
      },
      "links_count": 710,
      "objectID": "2188"
    },
    {
      "name": "Gatwick",
      "city": "London",
      "country": "United Kingdom",
      "iata_code": "LGW",
      "_geoloc": {
        "latitude": 51.148056,
        "longitude": -0.190278
      },
      "links_count": 708,
      "objectID": "502"
    },
    {
      "name": "Baiyun Intl",
      "city": "Guangzhou",
      "country": "China",
      "iata_code": "CAN",
      "_geoloc": {
        "latitude": 23.392436,
        "longitude": 113.298786
      },
      "links_count": 674,
      "objectID": "3370"
    },
    {
      "name": "Fiumicino",
      "city": "Rome",
      "country": "Italy",
      "iata_code": "FCO",
      "_geoloc": {
        "latitude": 41.804475,
        "longitude": 12.250797
      },
      "links_count": 662,
      "objectID": "1555"
    },
    {
      "name": "Barajas",
      "city": "Madrid",
      "country": "Spain",
      "iata_code": "MAD",
      "_geoloc": {
        "latitude": 40.493556,
        "longitude": -3.566764
      },
      "links_count": 661,
      "objectID": "1229"
    },
    {
      "name": "Suvarnabhumi Intl",
      "city": "Bangkok",
      "country": "Thailand",
      "iata_code": "BKK",
      "_geoloc": {
        "latitude": 13.681108,
        "longitude": 100.747283
      },
      "links_count": 656,
      "objectID": "3885"
    },
    {
      "name": "Domododevo",
      "city": "Moscow",
      "country": "Russia",
      "iata_code": "DME",
      "_geoloc": {
        "latitude": 55.408611,
        "longitude": 37.906111
      },
      "links_count": 649,
      "objectID": "4029"
    },
    {
      "name": "Shuangliu",
      "city": "Chengdu",
      "country": "China",
      "iata_code": "CTU",
      "_geoloc": {
        "latitude": 30.578528,
        "longitude": 103.947086
      },
      "links_count": 647,
      "objectID": "3395"
    },
    {
      "name": "Lester B Pearson Intl",
      "city": "Toronto",
      "country": "Canada",
      "iata_code": "YYZ",
      "_geoloc": {
        "latitude": 43.677223,
        "longitude": -79.630556
      },
      "links_count": 636,
      "objectID": "193"
    },
    {
      "name": "Brussels Natl",
      "city": "Brussels",
      "country": "Belgium",
      "iata_code": "BRU",
      "_geoloc": {
        "latitude": 50.901389,
        "longitude": 4.484444
      },
      "links_count": 631,
      "objectID": "302"
    },
    {
      "name": "Manchester",
      "city": "Manchester",
      "country": "United Kingdom",
      "iata_code": "MAN",
      "_geoloc": {
        "latitude": 53.353744,
        "longitude": -2.27495
      },
      "links_count": 627,
      "objectID": "478"
    },
    {
      "name": "Schwechat",
      "city": "Vienna",
      "country": "Austria",
      "iata_code": "VIE",
      "_geoloc": {
        "latitude": 48.110278,
        "longitude": 16.569722
      },
      "links_count": 616,
      "objectID": "1613"
    },
    {
      "name": "Charlotte Douglas Intl",
      "city": "Charlotte",
      "country": "United States",
      "iata_code": "CLT",
      "_geoloc": {
        "latitude": 35.214,
        "longitude": -80.943139
      },
      "links_count": 600,
      "objectID": "3876"
    },
    {
      "name": "Philadelphia Intl",
      "city": "Philadelphia",
      "country": "United States",
      "iata_code": "PHL",
      "_geoloc": {
        "latitude": 39.871944,
        "longitude": -75.241139
      },
      "links_count": 576,
      "objectID": "3752"
    },
    {
      "name": "Narita Intl",
      "city": "Tokyo",
      "country": "Japan",
      "iata_code": "NRT",
      "_geoloc": {
        "latitude": 35.764722,
        "longitude": 140.386389
      },
      "links_count": 575,
      "objectID": "2279"
    },
    {
      "name": "Dusseldorf",
      "city": "Duesseldorf",
      "country": "Germany",
      "iata_code": "DUS",
      "_geoloc": {
        "latitude": 51.289453,
        "longitude": 6.766775
      },
      "links_count": 570,
      "objectID": "345"
    },
    {
      "name": "Xianyang",
      "city": "Xi'an",
      "country": "China",
      "iata_code": "XIY",
      "_geoloc": {
        "latitude": 34.447119,
        "longitude": 108.751592
      },
      "links_count": 563,
      "objectID": "3379"
    },
    {
      "name": "Son Sant Joan",
      "city": "Palma de Mallorca",
      "country": "Spain",
      "iata_code": "PMI",
      "_geoloc": {
        "latitude": 39.55361,
        "longitude": 2.727778
      },
      "links_count": 548,
      "objectID": "3998"
    },
    {
      "name": "Wujiaba",
      "city": "Kunming",
      "country": "China",
      "iata_code": "KMG",
      "_geoloc": {
        "latitude": 24.992364,
        "longitude": 102.743536
      },
      "links_count": 545,
      "objectID": "3382"
    },
    {
      "name": "Jiangbei",
      "city": "Chongqing",
      "country": "China",
      "iata_code": "CKG",
      "_geoloc": {
        "latitude": 29.719217,
        "longitude": 106.641678
      },
      "links_count": 540,
      "objectID": "3393"
    },
    {
      "name": "Indira Gandhi Intl",
      "city": "Delhi",
      "country": "India",
      "iata_code": "DEL",
      "_geoloc": {
        "latitude": 28.5665,
        "longitude": 77.103088
      },
      "links_count": 527,
      "objectID": "3093"
    },
    {
      "name": "Taoyuan Intl",
      "city": "Taipei",
      "country": "Taiwan",
      "iata_code": "TPE",
      "_geoloc": {
        "latitude": 25.077731,
        "longitude": 121.232822
      },
      "links_count": 527,
      "objectID": "2276"
    },
    {
      "name": "Kuala Lumpur Intl",
      "city": "Kuala Lumpur",
      "country": "Malaysia",
      "iata_code": "KUL",
      "_geoloc": {
        "latitude": 2.745578,
        "longitude": 101.709917
      },
      "links_count": 514,
      "objectID": "3304"
    },
    {
      "name": "Phoenix Sky Harbor Intl",
      "city": "Phoenix",
      "country": "United States",
      "iata_code": "PHX",
      "_geoloc": {
        "latitude": 33.434278,
        "longitude": -112.011583
      },
      "links_count": 508,
      "objectID": "3462"
    },
    {
      "name": "Xiaoshan",
      "city": "Hangzhou",
      "country": "China",
      "iata_code": "HGH",
      "_geoloc": {
        "latitude": 30.229503,
        "longitude": 120.434453
      },
      "links_count": 506,
      "objectID": "3386"
    },
    {
      "name": "Newark Liberty Intl",
      "city": "Newark",
      "country": "United States",
      "iata_code": "EWR",
      "_geoloc": {
        "latitude": 40.6925,
        "longitude": -74.168667
      },
      "links_count": 505,
      "objectID": "3494"
    },
    {
      "name": "San Francisco Intl",
      "city": "San Francisco",
      "country": "United States",
      "iata_code": "SFO",
      "_geoloc": {
        "latitude": 37.618972,
        "longitude": -122.374889
      },
      "links_count": 499,
      "objectID": "3469"
    },
    {
      "name": "Mc Carran Intl",
      "city": "Las Vegas",
      "country": "United States",
      "iata_code": "LAS",
      "_geoloc": {
        "latitude": 36.080056,
        "longitude": -115.15225
      },
      "links_count": 498,
      "objectID": "3877"
    },
    {
      "name": "Zurich",
      "city": "Zurich",
      "country": "Switzerland",
      "iata_code": "ZRH",
      "_geoloc": {
        "latitude": 47.464722,
        "longitude": 8.549167
      },
      "links_count": 494,
      "objectID": "1678"
    },
    {
      "name": "George Bush Intercontinental",
      "city": "Houston",
      "country": "United States",
      "iata_code": "IAH",
      "_geoloc": {
        "latitude": 29.984433,
        "longitude": -95.341442
      },
      "links_count": 485,
      "objectID": "3550"
    },
    {
      "name": "Licenciado Benito Juarez Intl",
      "city": "Mexico City",
      "country": "Mexico",
      "iata_code": "MEX",
      "_geoloc": {
        "latitude": 19.436303,
        "longitude": -99.072097
      },
      "links_count": 485,
      "objectID": "1824"
    },
    {
      "name": "Abu Dhabi Intl",
      "city": "Abu Dhabi",
      "country": "United Arab Emirates",
      "iata_code": "AUH",
      "_geoloc": {
        "latitude": 24.432972,
        "longitude": 54.651138
      },
      "links_count": 477,
      "objectID": "2179"
    },
    {
      "name": "Orlando Intl",
      "city": "Orlando",
      "country": "United States",
      "iata_code": "MCO",
      "_geoloc": {
        "latitude": 28.429394,
        "longitude": -81.308994
      },
      "links_count": 475,
      "objectID": "3878"
    },
    {
      "name": "Baoan Intl",
      "city": "Shenzhen",
      "country": "China",
      "iata_code": "SZX",
      "_geoloc": {
        "latitude": 22.639258,
        "longitude": 113.810664
      },
      "links_count": 467,
      "objectID": "3374"
    },
    {
      "name": "Gaoqi",
      "city": "Xiamen",
      "country": "China",
      "iata_code": "XMN",
      "_geoloc": {
        "latitude": 24.544036,
        "longitude": 118.127739
      },
      "links_count": 466,
      "objectID": "3383"
    },
    {
      "name": "Kastrup",
      "city": "Copenhagen",
      "country": "Denmark",
      "iata_code": "CPH",
      "_geoloc": {
        "latitude": 55.617917,
        "longitude": 12.655972
      },
      "links_count": 457,
      "objectID": "609"
    },
    {
      "name": "Chhatrapati Shivaji Intl",
      "city": "Mumbai",
      "country": "India",
      "iata_code": "BOM",
      "_geoloc": {
        "latitude": 19.088686,
        "longitude": 72.867919
      },
      "links_count": 452,
      "objectID": "2997"
    },
    {
      "name": "Arlanda",
      "city": "Stockholm",
      "country": "Sweden",
      "iata_code": "ARN",
      "_geoloc": {
        "latitude": 59.651944,
        "longitude": 17.918611
      },
      "links_count": 439,
      "objectID": "737"
    },
    {
      "name": "Lisboa",
      "city": "Lisbon",
      "country": "Portugal",
      "iata_code": "LIS",
      "_geoloc": {
        "latitude": 38.781311,
        "longitude": -9.135919
      },
      "links_count": 435,
      "objectID": "1638"
    },
    {
      "name": "Detroit Metro Wayne Co",
      "city": "Detroit",
      "country": "United States",
      "iata_code": "DTW",
      "_geoloc": {
        "latitude": 42.212444,
        "longitude": -83.353389
      },
      "links_count": 433,
      "objectID": "3645"
    },
    {
      "name": "Minneapolis St Paul Intl",
      "city": "Minneapolis",
      "country": "United States",
      "iata_code": "MSP",
      "_geoloc": {
        "latitude": 44.881956,
        "longitude": -93.221767
      },
      "links_count": 430,
      "objectID": "3858"
    },
    {
      "name": "General Edward Lawrence Logan Intl",
      "city": "Boston",
      "country": "United States",
      "iata_code": "BOS",
      "_geoloc": {
        "latitude": 42.364347,
        "longitude": -71.005181
      },
      "links_count": 424,
      "objectID": "3448"
    },
    {
      "name": "Tegel",
      "city": "Berlin",
      "country": "Germany",
      "iata_code": "TXL",
      "_geoloc": {
        "latitude": 52.559686,
        "longitude": 13.287711
      },
      "links_count": 418,
      "objectID": "351"
    },
    {
      "name": "Dublin",
      "city": "Dublin",
      "country": "Ireland",
      "iata_code": "DUB",
      "_geoloc": {
        "latitude": 53.421333,
        "longitude": -6.270075
      },
      "links_count": 414,
      "objectID": "599"
    },
    {
      "name": "Hongqiao Intl",
      "city": "Shanghai",
      "country": "China",
      "iata_code": "SHA",
      "_geoloc": {
        "latitude": 31.197875,
        "longitude": 121.336319
      },
      "links_count": 411,
      "objectID": "3391"
    },
    {
      "name": "Sydney Intl",
      "city": "Sydney",
      "country": "Australia",
      "iata_code": "SYD",
      "_geoloc": {
        "latitude": -33.946111,
        "longitude": 151.177222
      },
      "links_count": 410,
      "objectID": "3361"
    },
    {
      "name": "Malaga",
      "city": "Malaga",
      "country": "Spain",
      "iata_code": "AGP",
      "_geoloc": {
        "latitude": 36.6749,
        "longitude": -4.499106
      },
      "links_count": 410,
      "objectID": "1230"
    },
    {
      "name": "Orly",
      "city": "Paris",
      "country": "France",
      "iata_code": "ORY",
      "_geoloc": {
        "latitude": 48.725278,
        "longitude": 2.359444
      },
      "links_count": 404,
      "objectID": "1386"
    },
    {
      "name": "Eleftherios Venizelos Intl",
      "city": "Athens",
      "country": "Greece",
      "iata_code": "ATH",
      "_geoloc": {
        "latitude": 37.936358,
        "longitude": 23.944467
      },
      "links_count": 403,
      "objectID": "3941"
    },
    {
      "name": "Seattle Tacoma Intl",
      "city": "Seattle",
      "country": "United States",
      "iata_code": "SEA",
      "_geoloc": {
        "latitude": 47.449,
        "longitude": -122.309306
      },
      "links_count": 403,
      "objectID": "3577"
    },
    {
      "name": "Sheremetyevo",
      "city": "Moscow",
      "country": "Russia",
      "iata_code": "SVO",
      "_geoloc": {
        "latitude": 55.972642,
        "longitude": 37.414589
      },
      "links_count": 397,
      "objectID": "2985"
    },
    {
      "name": "Ronald Reagan Washington Natl",
      "city": "Washington",
      "country": "United States",
      "iata_code": "DCA",
      "_geoloc": {
        "latitude": 38.852083,
        "longitude": -77.037722
      },
      "links_count": 388,
      "objectID": "3520"
    },
    {
      "name": "Guarulhos Gov Andre Franco Montouro",
      "city": "Sao Paulo",
      "country": "Brazil",
      "iata_code": "GRU",
      "_geoloc": {
        "latitude": -23.432075,
        "longitude": -46.469511
      },
      "links_count": 387,
      "objectID": "2564"
    },
    {
      "name": "Washington Dulles Intl",
      "city": "Washington",
      "country": "United States",
      "iata_code": "IAD",
      "_geoloc": {
        "latitude": 38.944533,
        "longitude": -77.455811
      },
      "links_count": 386,
      "objectID": "3714"
    },
    {
      "name": "Ninoy Aquino Intl",
      "city": "Manila",
      "country": "Philippines",
      "iata_code": "MNL",
      "_geoloc": {
        "latitude": 14.508647,
        "longitude": 121.019581
      },
      "links_count": 386,
      "objectID": "2397"
    },
    {
      "name": "Malpensa",
      "city": "Milano",
      "country": "Italy",
      "iata_code": "MXP",
      "_geoloc": {
        "latitude": 45.630606,
        "longitude": 8.728111
      },
      "links_count": 386,
      "objectID": "1524"
    },
    {
      "name": "Huanghua",
      "city": "Changcha",
      "country": "China",
      "iata_code": "CSX",
      "_geoloc": {
        "latitude": 28.189158,
        "longitude": 113.219633
      },
      "links_count": 377,
      "objectID": "3371"
    },
    {
      "name": "Doha Intl",
      "city": "Doha",
      "country": "Qatar",
      "iata_code": "DOH",
      "_geoloc": {
        "latitude": 25.261125,
        "longitude": 51.565056
      },
      "links_count": 377,
      "objectID": "2241"
    },
    {
      "name": "King Abdulaziz Intl",
      "city": "Jeddah",
      "country": "Saudi Arabia",
      "iata_code": "JED",
      "_geoloc": {
        "latitude": 21.679564,
        "longitude": 39.156536
      },
      "links_count": 377,
      "objectID": "2072"
    },
    {
      "name": "Liuting",
      "city": "Qingdao",
      "country": "China",
      "iata_code": "TAO",
      "_geoloc": {
        "latitude": 36.266108,
        "longitude": 120.374436
      },
      "links_count": 376,
      "objectID": "3390"
    },
    {
      "name": "Fort Lauderdale Hollywood Intl",
      "city": "Fort Lauderdale",
      "country": "United States",
      "iata_code": "FLL",
      "_geoloc": {
        "latitude": 26.072583,
        "longitude": -80.15275
      },
      "links_count": 374,
      "objectID": "3533"
    },
    {
      "name": "Tianhe",
      "city": "Wuhan",
      "country": "China",
      "iata_code": "WUH",
      "_geoloc": {
        "latitude": 30.783758,
        "longitude": 114.2081
      },
      "links_count": 374,
      "objectID": "3376"
    },
    {
      "name": "Pierre Elliott Trudeau Intl",
      "city": "Montreal",
      "country": "Canada",
      "iata_code": "YUL",
      "_geoloc": {
        "latitude": 45.470556,
        "longitude": -73.740833
      },
      "links_count": 371,
      "objectID": "146"
    },
    {
      "name": "Pulkovo",
      "city": "St. Petersburg",
      "country": "Russia",
      "iata_code": "LED",
      "_geoloc": {
        "latitude": 59.800292,
        "longitude": 30.262503
      },
      "links_count": 368,
      "objectID": "2948"
    },
    {
      "name": "Soekarno Hatta Intl",
      "city": "Jakarta",
      "country": "Indonesia",
      "iata_code": "CGK",
      "_geoloc": {
        "latitude": -6.125567,
        "longitude": 106.655897
      },
      "links_count": 367,
      "objectID": "3275"
    },
    {
      "name": "Gardermoen",
      "city": "Oslo",
      "country": "Norway",
      "iata_code": "OSL",
      "_geoloc": {
        "latitude": 60.193917,
        "longitude": 11.100361
      },
      "links_count": 363,
      "objectID": "644"
    },
    {
      "name": "Ruzyne",
      "city": "Prague",
      "country": "Czech Republic",
      "iata_code": "PRG",
      "_geoloc": {
        "latitude": 50.100833,
        "longitude": 14.26
      },
      "links_count": 361,
      "objectID": "1587"
    },
    {
      "name": "Xinzheng",
      "city": "Zhengzhou",
      "country": "China",
      "iata_code": "CGO",
      "_geoloc": {
        "latitude": 34.519672,
        "longitude": 113.840889
      },
      "links_count": 348,
      "objectID": "3375"
    },
    {
      "name": "Stansted",
      "city": "London",
      "country": "United Kingdom",
      "iata_code": "STN",
      "_geoloc": {
        "latitude": 51.885,
        "longitude": 0.235
      },
      "links_count": 343,
      "objectID": "548"
    },
    {
      "name": "Lukou",
      "city": "Nanjing",
      "country": "China",
      "iata_code": "NKG",
      "_geoloc": {
        "latitude": 31.742042,
        "longitude": 118.862025
      },
      "links_count": 330,
      "objectID": "3388"
    },
    {
      "name": "Geneve Cointrin",
      "city": "Geneva",
      "country": "Switzerland",
      "iata_code": "GVA",
      "_geoloc": {
        "latitude": 46.238064,
        "longitude": 6.10895
      },
      "links_count": 329,
      "objectID": "1665"
    },
    {
      "name": "Johannesburg Intl",
      "city": "Johannesburg",
      "country": "South Africa",
      "iata_code": "JNB",
      "_geoloc": {
        "latitude": -26.139166,
        "longitude": 28.246
      },
      "links_count": 321,
      "objectID": "813"
    },
    {
      "name": "Hamburg",
      "city": "Hamburg",
      "country": "Germany",
      "iata_code": "HAM",
      "_geoloc": {
        "latitude": 53.630389,
        "longitude": 9.988228
      },
      "links_count": 321,
      "objectID": "342"
    },
    {
      "name": "Helsinki Vantaa",
      "city": "Helsinki",
      "country": "Finland",
      "iata_code": "HEL",
      "_geoloc": {
        "latitude": 60.317222,
        "longitude": 24.963333
      },
      "links_count": 320,
      "objectID": "421"
    },
    {
      "name": "Tenerife Sur",
      "city": "Tenerife",
      "country": "Spain",
      "iata_code": "TFS",
      "_geoloc": {
        "latitude": 28.044475,
        "longitude": -16.572489
      },
      "links_count": 318,
      "objectID": "1056"
    },
    {
      "name": "La Guardia",
      "city": "New York",
      "country": "United States",
      "iata_code": "LGA",
      "_geoloc": {
        "latitude": 40.777245,
        "longitude": -73.872608
      },
      "links_count": 316,
      "objectID": "3697"
    },
    {
      "name": "Tokyo Intl",
      "city": "Tokyo",
      "country": "Japan",
      "iata_code": "HND",
      "_geoloc": {
        "latitude": 35.552258,
        "longitude": 139.779694
      },
      "links_count": 315,
      "objectID": "2359"
    },
    {
      "name": "Vancouver Intl",
      "city": "Vancouver",
      "country": "Canada",
      "iata_code": "YVR",
      "_geoloc": {
        "latitude": 49.193889,
        "longitude": -123.184444
      },
      "links_count": 315,
      "objectID": "156"
    },
    {
      "name": "Alicante",
      "city": "Alicante",
      "country": "Spain",
      "iata_code": "ALC",
      "_geoloc": {
        "latitude": 38.282169,
        "longitude": -0.558156
      },
      "links_count": 314,
      "objectID": "1212"
    },
    {
      "name": "Cancun Intl",
      "city": "Cancun",
      "country": "Mexico",
      "iata_code": "CUN",
      "_geoloc": {
        "latitude": 21.036528,
        "longitude": -86.877083
      },
      "links_count": 311,
      "objectID": "1852"
    },
    {
      "name": "Gran Canaria",
      "city": "Gran Canaria",
      "country": "Spain",
      "iata_code": "LPA",
      "_geoloc": {
        "latitude": 27.931886,
        "longitude": -15.386586
      },
      "links_count": 308,
      "objectID": "1054"
    },
    {
      "name": "Eldorado Intl",
      "city": "Bogota",
      "country": "Colombia",
      "iata_code": "BOG",
      "_geoloc": {
        "latitude": 4.701594,
        "longitude": -74.146947
      },
      "links_count": 307,
      "objectID": "2709"
    },
    {
      "name": "Diwopu",
      "city": "Urumqi",
      "country": "China",
      "iata_code": "URC",
      "_geoloc": {
        "latitude": 43.907106,
        "longitude": 87.474244
      },
      "links_count": 306,
      "objectID": "3399"
    },
    {
      "name": "Kansai",
      "city": "Osaka",
      "country": "Japan",
      "iata_code": "KIX",
      "_geoloc": {
        "latitude": 34.4347222,
        "longitude": 135.244167
      },
      "links_count": 304,
      "objectID": "3992"
    },
    {
      "name": "Cairo Intl",
      "city": "Cairo",
      "country": "Egypt",
      "iata_code": "CAI",
      "_geoloc": {
        "latitude": 30.121944,
        "longitude": 31.405556
      },
      "links_count": 303,
      "objectID": "1128"
    },
    {
      "name": "Brisbane Intl",
      "city": "Brisbane",
      "country": "Australia",
      "iata_code": "BNE",
      "_geoloc": {
        "latitude": -27.384167,
        "longitude": 153.1175
      },
      "links_count": 296,
      "objectID": "3320"
    },
    {
      "name": "Binhai",
      "city": "Tianjin",
      "country": "China",
      "iata_code": "TSN",
      "_geoloc": {
        "latitude": 39.124353,
        "longitude": 117.346183
      },
      "links_count": 294,
      "objectID": "3368"
    },
    {
      "name": "Sabiha Gokcen",
      "city": "Istanbul",
      "country": "Turkey",
      "iata_code": "SAW",
      "_geoloc": {
        "latitude": 40.898553,
        "longitude": 29.309219
      },
      "links_count": 290,
      "objectID": "4317"
    },
    {
      "name": "Baltimore Washington Intl",
      "city": "Baltimore",
      "country": "United States",
      "iata_code": "BWI",
      "_geoloc": {
        "latitude": 39.175361,
        "longitude": -76.668333
      },
      "links_count": 286,
      "objectID": "3849"
    },
    {
      "name": "Zhoushuizi",
      "city": "Dalian",
      "country": "China",
      "iata_code": "DLC",
      "_geoloc": {
        "latitude": 38.965667,
        "longitude": 121.5386
      },
      "links_count": 285,
      "objectID": "3404"
    },
    {
      "name": "Salt Lake City Intl",
      "city": "Salt Lake City",
      "country": "United States",
      "iata_code": "SLC",
      "_geoloc": {
        "latitude": 40.788389,
        "longitude": -111.977772
      },
      "links_count": 278,
      "objectID": "3536"
    },
    {
      "name": "Tampa Intl",
      "city": "Tampa",
      "country": "United States",
      "iata_code": "TPA",
      "_geoloc": {
        "latitude": 27.975472,
        "longitude": -82.53325
      },
      "links_count": 276,
      "objectID": "3646"
    },
    {
      "name": "King Khaled Intl",
      "city": "Riyadh",
      "country": "Saudi Arabia",
      "iata_code": "RUH",
      "_geoloc": {
        "latitude": 24.95764,
        "longitude": 46.698776
      },
      "links_count": 276,
      "objectID": "2082"
    },
    {
      "name": "Saint Exupery",
      "city": "Lyon",
      "country": "France",
      "iata_code": "LYS",
      "_geoloc": {
        "latitude": 45.726387,
        "longitude": 5.090833
      },
      "links_count": 275,
      "objectID": "1335"
    },
    {
      "name": "Longdongbao",
      "city": "Guiyang",
      "country": "China",
      "iata_code": "KWE",
      "_geoloc": {
        "latitude": 26.538522,
        "longitude": 106.800703
      },
      "links_count": 274,
      "objectID": "3394"
    },
    {
      "name": "Stuttgart",
      "city": "Stuttgart",
      "country": "Germany",
      "iata_code": "STR",
      "_geoloc": {
        "latitude": 48.689878,
        "longitude": 9.221964
      },
      "links_count": 273,
      "objectID": "350"
    },
    {
      "name": "Shenyang Taoxian International Airport",
      "city": "Shenyang",
      "country": "China",
      "iata_code": "SHE",
      "_geoloc": {
        "latitude": 41.3824,
        "longitude": 123.2901
      },
      "links_count": 272,
      "objectID": "4144"
    },
    {
      "name": "Chicago Midway Intl",
      "city": "Chicago",
      "country": "United States",
      "iata_code": "MDW",
      "_geoloc": {
        "latitude": 41.785972,
        "longitude": -87.752417
      },
      "links_count": 271,
      "objectID": "3747"
    },
    {
      "name": "Ben Gurion",
      "city": "Tel-aviv",
      "country": "Israel",
      "iata_code": "TLV",
      "_geoloc": {
        "latitude": 32.011389,
        "longitude": 34.886667
      },
      "links_count": 271,
      "objectID": "1590"
    },
    {
      "name": "Jinan",
      "city": "Jinan",
      "country": "China",
      "iata_code": "TNA",
      "_geoloc": {
        "latitude": 36.857214,
        "longitude": 117.215992
      },
      "links_count": 270,
      "objectID": "4108"
    },
    {
      "name": "Melbourne Intl",
      "city": "Melbourne",
      "country": "Australia",
      "iata_code": "MEL",
      "_geoloc": {
        "latitude": -37.673333,
        "longitude": 144.843333
      },
      "links_count": 269,
      "objectID": "3339"
    },
    {
      "name": "Cote D'Azur",
      "city": "Nice",
      "country": "France",
      "iata_code": "NCE",
      "_geoloc": {
        "latitude": 43.658411,
        "longitude": 7.215872
      },
      "links_count": 269,
      "objectID": "1354"
    },
    {
      "name": "Changle",
      "city": "Fuzhou",
      "country": "China",
      "iata_code": "FOC",
      "_geoloc": {
        "latitude": 25.935064,
        "longitude": 119.663272
      },
      "links_count": 266,
      "objectID": "3385"
    },
    {
      "name": "Koln Bonn",
      "city": "Cologne",
      "country": "Germany",
      "iata_code": "CGN",
      "_geoloc": {
        "latitude": 50.865917,
        "longitude": 7.142744
      },
      "links_count": 265,
      "objectID": "344"
    },
    {
      "name": "Provence",
      "city": "Marseille",
      "country": "France",
      "iata_code": "MRS",
      "_geoloc": {
        "latitude": 43.435555,
        "longitude": 5.213611
      },
      "links_count": 265,
      "objectID": "1353"
    },
    {
      "name": "Birmingham",
      "city": "Birmingham",
      "country": "United Kingdom",
      "iata_code": "BHX",
      "_geoloc": {
        "latitude": 52.453856,
        "longitude": -1.748028
      },
      "links_count": 264,
      "objectID": "469"
    },
    {
      "name": "Taiping",
      "city": "Harbin",
      "country": "China",
      "iata_code": "HRB",
      "_geoloc": {
        "latitude": 45.623403,
        "longitude": 126.250328
      },
      "links_count": 259,
      "objectID": "3400"
    },
    {
      "name": "Jomo Kenyatta International",
      "city": "Nairobi",
      "country": "Kenya",
      "iata_code": "NBO",
      "_geoloc": {
        "latitude": -1.319167,
        "longitude": 36.9275
      },
      "links_count": 258,
      "objectID": "4059"
    },
    {
      "name": "Antalya",
      "city": "Antalya",
      "country": "Turkey",
      "iata_code": "AYT",
      "_geoloc": {
        "latitude": 36.898731,
        "longitude": 30.800461
      },
      "links_count": 253,
      "objectID": "1688"
    },
    {
      "name": "Mohammed V Intl",
      "city": "Casablanca",
      "country": "Morocco",
      "iata_code": "CMN",
      "_geoloc": {
        "latitude": 33.367467,
        "longitude": -7.589967
      },
      "links_count": 250,
      "objectID": "1074"
    },
    {
      "name": "Louis Armstrong New Orleans Intl",
      "city": "New Orleans",
      "country": "United States",
      "iata_code": "MSY",
      "_geoloc": {
        "latitude": 29.993389,
        "longitude": -90.258028
      },
      "links_count": 248,
      "objectID": "3861"
    },
    {
      "name": "Venezia Tessera",
      "city": "Venice",
      "country": "Italy",
      "iata_code": "VCE",
      "_geoloc": {
        "latitude": 45.505278,
        "longitude": 12.351944
      },
      "links_count": 245,
      "objectID": "1551"
    },
    {
      "name": "Okecie",
      "city": "Warsaw",
      "country": "Poland",
      "iata_code": "WAW",
      "_geoloc": {
        "latitude": 52.16575,
        "longitude": 20.967122
      },
      "links_count": 240,
      "objectID": "679"
    },
    {
      "name": "Kuwait Intl",
      "city": "Kuwait",
      "country": "Kuwait",
      "iata_code": "KWI",
      "_geoloc": {
        "latitude": 29.226567,
        "longitude": 47.968928
      },
      "links_count": 239,
      "objectID": "2176"
    },
    {
      "name": "San Diego Intl",
      "city": "San Diego",
      "country": "United States",
      "iata_code": "SAN",
      "_geoloc": {
        "latitude": 32.733556,
        "longitude": -117.189667
      },
      "links_count": 238,
      "objectID": "3731"
    },
    {
      "name": "Edinburgh",
      "city": "Edinburgh",
      "country": "United Kingdom",
      "iata_code": "EDI",
      "_geoloc": {
        "latitude": 55.95,
        "longitude": -3.3725
      },
      "links_count": 237,
      "objectID": "535"
    },
    {
      "name": "Honolulu Intl",
      "city": "Honolulu",
      "country": "United States",
      "iata_code": "HNL",
      "_geoloc": {
        "latitude": 21.318681,
        "longitude": -157.922428
      },
      "links_count": 233,
      "objectID": "3728"
    },
    {
      "name": "Catania Fontanarossa",
      "city": "Catania",
      "country": "Italy",
      "iata_code": "CTA",
      "_geoloc": {
        "latitude": 37.466781,
        "longitude": 15.0664
      },
      "links_count": 233,
      "objectID": "1509"
    },
    {
      "name": "Lanzarote",
      "city": "Las Palmas",
      "country": "Spain",
      "iata_code": "ACE",
      "_geoloc": {
        "latitude": 28.945464,
        "longitude": -13.605225
      },
      "links_count": 233,
      "objectID": "1055"
    },
    {
      "name": "Portland Intl",
      "city": "Portland",
      "country": "United States",
      "iata_code": "PDX",
      "_geoloc": {
        "latitude": 45.588722,
        "longitude": -122.5975
      },
      "links_count": 230,
      "objectID": "3720"
    },
    {
      "name": "Jorge Chavez Intl",
      "city": "Lima",
      "country": "Peru",
      "iata_code": "LIM",
      "_geoloc": {
        "latitude": -12.021889,
        "longitude": -77.114319
      },
      "links_count": 230,
      "objectID": "2789"
    },
    {
      "name": "Wuxu",
      "city": "Nanning",
      "country": "China",
      "iata_code": "NNG",
      "_geoloc": {
        "latitude": 22.608267,
        "longitude": 108.172442
      },
      "links_count": 228,
      "objectID": "3373"
    },
    {
      "name": "Calgary Intl",
      "city": "Calgary",
      "country": "Canada",
      "iata_code": "YYC",
      "_geoloc": {
        "latitude": 51.113888,
        "longitude": -114.020278
      },
      "links_count": 228,
      "objectID": "178"
    },
    {
      "name": "Henri Coanda",
      "city": "Bucharest",
      "country": "Romania",
      "iata_code": "OTP",
      "_geoloc": {
        "latitude": 44.572161,
        "longitude": 26.102178
      },
      "links_count": 227,
      "objectID": "1657"
    },
    {
      "name": "Luqa",
      "city": "Malta",
      "country": "Malta",
      "iata_code": "MLA",
      "_geoloc": {
        "latitude": 35.857497,
        "longitude": 14.4775
      },
      "links_count": 226,
      "objectID": "1606"
    },
    {
      "name": "Queen Alia Intl",
      "city": "Amman",
      "country": "Jordan",
      "iata_code": "AMM",
      "_geoloc": {
        "latitude": 31.722556,
        "longitude": 35.993214
      },
      "links_count": 223,
      "objectID": "2170"
    },
    {
      "name": "Lambert St Louis Intl",
      "city": "St. Louis",
      "country": "United States",
      "iata_code": "STL",
      "_geoloc": {
        "latitude": 38.748697,
        "longitude": -90.370028
      },
      "links_count": 221,
      "objectID": "3678"
    },
    {
      "name": "Wusu",
      "city": "Taiyuan",
      "country": "China",
      "iata_code": "TYN",
      "_geoloc": {
        "latitude": 37.746897,
        "longitude": 112.628428
      },
      "links_count": 220,
      "objectID": "3369"
    },
    {
      "name": "Nikos Kazantzakis",
      "city": "Heraklion",
      "country": "Greece",
      "iata_code": "HER",
      "_geoloc": {
        "latitude": 35.339719,
        "longitude": 25.180297
      },
      "links_count": 219,
      "objectID": "1452"
    },
    {
      "name": "Phoenix International",
      "city": "Sanya",
      "country": "China",
      "iata_code": "SYX",
      "_geoloc": {
        "latitude": 18.302897,
        "longitude": 109.412272
      },
      "links_count": 218,
      "objectID": "4030"
    },
    {
      "name": "Tansonnhat Intl",
      "city": "Ho Chi Minh City",
      "country": "Vietnam",
      "iata_code": "SGN",
      "_geoloc": {
        "latitude": 10.818797,
        "longitude": 106.651856
      },
      "links_count": 218,
      "objectID": "3205"
    },
    {
      "name": "Meilan",
      "city": "Haikou",
      "country": "China",
      "iata_code": "HAK",
      "_geoloc": {
        "latitude": 19.934856,
        "longitude": 110.458961
      },
      "links_count": 215,
      "objectID": "4120"
    },
    {
      "name": "Luton",
      "city": "London",
      "country": "United Kingdom",
      "iata_code": "LTN",
      "_geoloc": {
        "latitude": 51.874722,
        "longitude": -0.368333
      },
      "links_count": 214,
      "objectID": "492"
    },
    {
      "name": "Liangjiang",
      "city": "Guilin",
      "country": "China",
      "iata_code": "KWL",
      "_geoloc": {
        "latitude": 25.218106,
        "longitude": 110.039197
      },
      "links_count": 214,
      "objectID": "3372"
    },
    {
      "name": "Bole Intl",
      "city": "Addis Ababa",
      "country": "Ethiopia",
      "iata_code": "ADD",
      "_geoloc": {
        "latitude": 8.977889,
        "longitude": 38.799319
      },
      "links_count": 214,
      "objectID": "1107"
    },
    {
      "name": "Auckland Intl",
      "city": "Auckland",
      "country": "New Zealand",
      "iata_code": "AKL",
      "_geoloc": {
        "latitude": -37.008056,
        "longitude": 174.791667
      },
      "links_count": 213,
      "objectID": "2006"
    },
    {
      "name": "Tocumen Intl",
      "city": "Panama City",
      "country": "Panama",
      "iata_code": "PTY",
      "_geoloc": {
        "latitude": 9.071364,
        "longitude": -79.383453
      },
      "links_count": 212,
      "objectID": "1871"
    },
    {
      "name": "Chennai Intl",
      "city": "Madras",
      "country": "India",
      "iata_code": "MAA",
      "_geoloc": {
        "latitude": 12.994414,
        "longitude": 80.180517
      },
      "links_count": 211,
      "objectID": "3144"
    },
    {
      "name": "Faro",
      "city": "Faro",
      "country": "Portugal",
      "iata_code": "FAO",
      "_geoloc": {
        "latitude": 37.014425,
        "longitude": -7.965911
      },
      "links_count": 211,
      "objectID": "1626"
    },
    {
      "name": "Seeb Intl",
      "city": "Muscat",
      "country": "Oman",
      "iata_code": "MCT",
      "_geoloc": {
        "latitude": 23.593278,
        "longitude": 58.284444
      },
      "links_count": 208,
      "objectID": "2194"
    },
    {
      "name": "Luis Munoz Marin Intl",
      "city": "San Juan",
      "country": "Puerto Rico",
      "iata_code": "SJU",
      "_geoloc": {
        "latitude": 18.439417,
        "longitude": -66.001833
      },
      "links_count": 204,
      "objectID": "2890"
    },
    {
      "name": "Bandaranaike Intl Colombo",
      "city": "Colombo",
      "country": "Sri Lanka",
      "iata_code": "CMB",
      "_geoloc": {
        "latitude": 7.180756,
        "longitude": 79.884117
      },
      "links_count": 203,
      "objectID": "3024"
    },
    {
      "name": "Riga Intl",
      "city": "Riga",
      "country": "Latvia",
      "iata_code": "RIX",
      "_geoloc": {
        "latitude": 56.923611,
        "longitude": 23.971111
      },
      "links_count": 202,
      "objectID": "3953"
    },
    {
      "name": "Boryspil Intl",
      "city": "Kiev",
      "country": "Ukraine",
      "iata_code": "KBP",
      "_geoloc": {
        "latitude": 50.345,
        "longitude": 30.894722
      },
      "links_count": 202,
      "objectID": "2939"
    },
    {
      "name": "Porto",
      "city": "Porto",
      "country": "Portugal",
      "iata_code": "OPO",
      "_geoloc": {
        "latitude": 41.248055,
        "longitude": -8.681389
      },
      "links_count": 202,
      "objectID": "1636"
    },
    {
      "name": "Ibiza",
      "city": "Ibiza",
      "country": "Spain",
      "iata_code": "IBZ",
      "_geoloc": {
        "latitude": 38.872858,
        "longitude": 1.373117
      },
      "links_count": 202,
      "objectID": "1225"
    },
    {
      "name": "Bali Ngurah Rai",
      "city": "Denpasar",
      "country": "Indonesia",
      "iata_code": "DPS",
      "_geoloc": {
        "latitude": -8.748169,
        "longitude": 115.167172
      },
      "links_count": 201,
      "objectID": "3940"
    },
    {
      "name": "Bristol",
      "city": "Bristol",
      "country": "United Kingdom",
      "iata_code": "BRS",
      "_geoloc": {
        "latitude": 51.382669,
        "longitude": -2.719089
      },
      "links_count": 200,
      "objectID": "490"
    },
    {
      "name": "Koltsovo",
      "city": "Yekaterinburg",
      "country": "Russia",
      "iata_code": "SVX",
      "_geoloc": {
        "latitude": 56.743108,
        "longitude": 60.802728
      },
      "links_count": 199,
      "objectID": "2975"
    },
    {
      "name": "Presidente Juscelino Kubitschek",
      "city": "Brasilia",
      "country": "Brazil",
      "iata_code": "BSB",
      "_geoloc": {
        "latitude": -15.8711,
        "longitude": -47.918625
      },
      "links_count": 197,
      "objectID": "2531"
    },
    {
      "name": "Glasgow",
      "city": "Glasgow",
      "country": "United Kingdom",
      "iata_code": "GLA",
      "_geoloc": {
        "latitude": 55.871944,
        "longitude": -4.433056
      },
      "links_count": 196,
      "objectID": "534"
    },
    {
      "name": "Bangalore",
      "city": "Bangalore",
      "country": "India",
      "iata_code": "BLR",
      "_geoloc": {
        "latitude": 12.949986,
        "longitude": 77.668206
      },
      "links_count": 195,
      "objectID": "3131"
    },
    {
      "name": "Sharjah Intl",
      "city": "Sharjah",
      "country": "United Arab Emirates",
      "iata_code": "SHJ",
      "_geoloc": {
        "latitude": 25.328575,
        "longitude": 55.51715
      },
      "links_count": 195,
      "objectID": "2191"
    },
    {
      "name": "Ferihegy",
      "city": "Budapest",
      "country": "Hungary",
      "iata_code": "BUD",
      "_geoloc": {
        "latitude": 47.436933,
        "longitude": 19.255592
      },
      "links_count": 195,
      "objectID": "1489"
    },
    {
      "name": "Netaji Subhash Chandra Bose Intl",
      "city": "Kolkata",
      "country": "India",
      "iata_code": "CCU",
      "_geoloc": {
        "latitude": 22.654739,
        "longitude": 88.446722
      },
      "links_count": 194,
      "objectID": "3043"
    },
    {
      "name": "Galeao Antonio Carlos Jobim",
      "city": "Rio De Janeiro",
      "country": "Brazil",
      "iata_code": "GIG",
      "_geoloc": {
        "latitude": -22.808903,
        "longitude": -43.243647
      },
      "links_count": 194,
      "objectID": "2560"
    },
    {
      "name": "Nottingham East Midlands",
      "city": "East Midlands",
      "country": "United Kingdom",
      "iata_code": "EMA",
      "_geoloc": {
        "latitude": 52.831111,
        "longitude": -1.328056
      },
      "links_count": 192,
      "objectID": "523"
    },
    {
      "name": "Fuerteventura",
      "city": "Fuerteventura",
      "country": "Spain",
      "iata_code": "FUE",
      "_geoloc": {
        "latitude": 28.452717,
        "longitude": -13.863761
      },
      "links_count": 192,
      "objectID": "1051"
    },
    {
      "name": "Larnaca",
      "city": "Larnaca",
      "country": "Cyprus",
      "iata_code": "LCA",
      "_geoloc": {
        "latitude": 34.875117,
        "longitude": 33.62485
      },
      "links_count": 190,
      "objectID": "1197"
    },
    {
      "name": "EuroAirport Basel-Mulhouse-Freiburg",
      "city": "Basel",
      "country": "Switzerland",
      "iata_code": "BSL",
      "_geoloc": {
        "latitude": 47.59,
        "longitude": 7.529167
      },
      "links_count": 189,
      "objectID": "4053"
    },
    {
      "name": "Don Miguel Hidalgo Y Costilla Intl",
      "city": "Guadalajara",
      "country": "Mexico",
      "iata_code": "GDL",
      "_geoloc": {
        "latitude": 20.5218,
        "longitude": -103.311167
      },
      "links_count": 185,
      "objectID": "1804"
    },
    {
      "name": "Nantes Atlantique",
      "city": "Nantes",
      "country": "France",
      "iata_code": "NTE",
      "_geoloc": {
        "latitude": 47.153189,
        "longitude": -1.610725
      },
      "links_count": 183,
      "objectID": "1418"
    },
    {
      "name": "Perth Intl",
      "city": "Perth",
      "country": "Australia",
      "iata_code": "PER",
      "_geoloc": {
        "latitude": -31.940278,
        "longitude": 115.966944
      },
      "links_count": 182,
      "objectID": "3351"
    },
    {
      "name": "Simon Bolivar Intl",
      "city": "Caracas",
      "country": "Venezuela",
      "iata_code": "CCS",
      "_geoloc": {
        "latitude": 10.603117,
        "longitude": -66.990583
      },
      "links_count": 181,
      "objectID": "2851"
    },
    {
      "name": "Tolmachevo",
      "city": "Novosibirsk",
      "country": "Russia",
      "iata_code": "OVB",
      "_geoloc": {
        "latitude": 55.012622,
        "longitude": 82.650656
      },
      "links_count": 177,
      "objectID": "4078"
    },
    {
      "name": "Houari Boumediene",
      "city": "Algier",
      "country": "Algeria",
      "iata_code": "ALG",
      "_geoloc": {
        "latitude": 36.691014,
        "longitude": 3.215408
      },
      "links_count": 176,
      "objectID": "210"
    },
    {
      "name": "Bologna",
      "city": "Bologna",
      "country": "Italy",
      "iata_code": "BLQ",
      "_geoloc": {
        "latitude": 44.535444,
        "longitude": 11.288667
      },
      "links_count": 176,
      "objectID": "1538"
    },
    {
      "name": "Carthage",
      "city": "Tunis",
      "country": "Tunisia",
      "iata_code": "TUN",
      "_geoloc": {
        "latitude": 36.851033,
        "longitude": 10.227217
      },
      "links_count": 175,
      "objectID": "287"
    },
    {
      "name": "Baita Airport",
      "city": "Hohhot",
      "country": "China",
      "iata_code": "HET",
      "_geoloc": {
        "latitude": 40.851422,
        "longitude": 111.824103
      },
      "links_count": 174,
      "objectID": "6345"
    },
    {
      "name": "Noibai Intl",
      "city": "Hanoi",
      "country": "Vietnam",
      "iata_code": "HAN",
      "_geoloc": {
        "latitude": 21.221192,
        "longitude": 105.807178
      },
      "links_count": 174,
      "objectID": "3199"
    },
    {
      "name": "Makedonia",
      "city": "Thessaloniki",
      "country": "Greece",
      "iata_code": "SKG",
      "_geoloc": {
        "latitude": 40.519725,
        "longitude": 22.97095
      },
      "links_count": 174,
      "objectID": "1486"
    },
    {
      "name": "Changbei Intl",
      "city": "Nanchang",
      "country": "China",
      "iata_code": "KHN",
      "_geoloc": {
        "latitude": 28.865,
        "longitude": 115.9
      },
      "links_count": 172,
      "objectID": "3384"
    },
    {
      "name": "Vnukovo",
      "city": "Moscow",
      "country": "Russia",
      "iata_code": "VKO",
      "_geoloc": {
        "latitude": 55.591531,
        "longitude": 37.261486
      },
      "links_count": 171,
      "objectID": "2988"
    },
    {
      "name": "Beograd",
      "city": "Belgrade",
      "country": "Serbia",
      "iata_code": "BEG",
      "_geoloc": {
        "latitude": 44.818444,
        "longitude": 20.309139
      },
      "links_count": 171,
      "objectID": "1739"
    },
    {
      "name": "Fukuoka",
      "city": "Fukuoka",
      "country": "Japan",
      "iata_code": "FUK",
      "_geoloc": {
        "latitude": 33.585942,
        "longitude": 130.450686
      },
      "links_count": 170,
      "objectID": "2305"
    },
    {
      "name": "Bahrain Intl",
      "city": "Bahrain",
      "country": "Bahrain",
      "iata_code": "BAH",
      "_geoloc": {
        "latitude": 26.270834,
        "longitude": 50.63361
      },
      "links_count": 170,
      "objectID": "2057"
    },
    {
      "name": "Chubu Centrair Intl",
      "city": "Nagoya",
      "country": "Japan",
      "iata_code": "NGO",
      "_geoloc": {
        "latitude": 34.858414,
        "longitude": 136.805408
      },
      "links_count": 169,
      "objectID": "3942"
    },
    {
      "name": "Lanzhou Airport",
      "city": "Lanzhou",
      "country": "China",
      "iata_code": "LHW",
      "_geoloc": {
        "latitude": 36.117,
        "longitude": 103.617
      },
      "links_count": 168,
      "objectID": "6431"
    },
    {
      "name": "Lishe",
      "city": "Ninbo",
      "country": "China",
      "iata_code": "NGB",
      "_geoloc": {
        "latitude": 29.826683,
        "longitude": 121.461906
      },
      "links_count": 168,
      "objectID": "3387"
    },
    {
      "name": "Brussels South",
      "city": "Charleroi",
      "country": "Belgium",
      "iata_code": "CRL",
      "_geoloc": {
        "latitude": 50.459197,
        "longitude": 4.453817
      },
      "links_count": 168,
      "objectID": "304"
    },
    {
      "name": "Rhodes Diagoras",
      "city": "Rhodos",
      "country": "Greece",
      "iata_code": "RHO",
      "_geoloc": {
        "latitude": 36.405419,
        "longitude": 28.086192
      },
      "links_count": 168,
      "objectID": "1472"
    },
    {
      "name": "Austin Bergstrom Intl",
      "city": "Austin",
      "country": "United States",
      "iata_code": "AUS",
      "_geoloc": {
        "latitude": 30.194528,
        "longitude": -97.669889
      },
      "links_count": 167,
      "objectID": "3673"
    },
    {
      "name": "Raleigh Durham Intl",
      "city": "Raleigh-durham",
      "country": "United States",
      "iata_code": "RDU",
      "_geoloc": {
        "latitude": 35.877639,
        "longitude": -78.787472
      },
      "links_count": 167,
      "objectID": "3626"
    },
    {
      "name": "Newcastle",
      "city": "Newcastle",
      "country": "United Kingdom",
      "iata_code": "NCL",
      "_geoloc": {
        "latitude": 55.0375,
        "longitude": -1.691667
      },
      "links_count": 165,
      "objectID": "521"
    },
    {
      "name": "Schonefeld",
      "city": "Berlin",
      "country": "Germany",
      "iata_code": "SXF",
      "_geoloc": {
        "latitude": 52.380001,
        "longitude": 13.5225
      },
      "links_count": 165,
      "objectID": "337"
    },
    {
      "name": "Shijiazhuang Daguocun International Airport",
      "city": "Shijiazhuang",
      "country": "China",
      "iata_code": "SJW",
      "_geoloc": {
        "latitude": 38.280686,
        "longitude": 114.6973
      },
      "links_count": 164,
      "objectID": "6347"
    },
    {
      "name": "Nashville Intl",
      "city": "Nashville",
      "country": "United States",
      "iata_code": "BNA",
      "_geoloc": {
        "latitude": 36.124472,
        "longitude": -86.678194
      },
      "links_count": 164,
      "objectID": "3690"
    },
    {
      "name": "King Fahd Intl",
      "city": "Dammam",
      "country": "Saudi Arabia",
      "iata_code": "DMM",
      "_geoloc": {
        "latitude": 26.471161,
        "longitude": 49.79789
      },
      "links_count": 164,
      "objectID": "2064"
    },
    {
      "name": "Valencia",
      "city": "Valencia",
      "country": "Spain",
      "iata_code": "VLC",
      "_geoloc": {
        "latitude": 39.489314,
        "longitude": -0.481625
      },
      "links_count": 163,
      "objectID": "1246"
    },
    {
      "name": "Wenzhou Yongqiang Airport",
      "city": "Wenzhou",
      "country": "China",
      "iata_code": "WNZ",
      "_geoloc": {
        "latitude": 27.9122,
        "longitude": 120.852
      },
      "links_count": 162,
      "objectID": "6392"
    },
    {
      "name": "New Chitose",
      "city": "Sapporo",
      "country": "Japan",
      "iata_code": "CTS",
      "_geoloc": {
        "latitude": 42.7752,
        "longitude": 141.692283
      },
      "links_count": 162,
      "objectID": "2287"
    },
    {
      "name": "Bergamo Orio Al Serio",
      "city": "Bergamo",
      "country": "Italy",
      "iata_code": "BGY",
      "_geoloc": {
        "latitude": 45.673889,
        "longitude": 9.704166
      },
      "links_count": 162,
      "objectID": "1525"
    },
    {
      "name": "Cleveland Hopkins Intl",
      "city": "Cleveland",
      "country": "United States",
      "iata_code": "CLE",
      "_geoloc": {
        "latitude": 41.411689,
        "longitude": -81.849794
      },
      "links_count": 161,
      "objectID": "3486"
    },
    {
      "name": "Blagnac",
      "city": "Toulouse",
      "country": "France",
      "iata_code": "TLS",
      "_geoloc": {
        "latitude": 43.629075,
        "longitude": 1.363819
      },
      "links_count": 161,
      "objectID": "1273"
    },
    {
      "name": "Beijing Nanyuan Airport",
      "city": "Beijing",
      "country": "China",
      "iata_code": "NAY",
      "_geoloc": {
        "latitude": 39.7825,
        "longitude": 116.387778
      },
      "links_count": 160,
      "objectID": "6341"
    },
    {
      "name": "Leeds Bradford",
      "city": "Leeds",
      "country": "United Kingdom",
      "iata_code": "LBA",
      "_geoloc": {
        "latitude": 53.865897,
        "longitude": -1.660569
      },
      "links_count": 160,
      "objectID": "517"
    },
    {
      "name": "Yuzhny",
      "city": "Tashkent",
      "country": "Uzbekistan",
      "iata_code": "TAS",
      "_geoloc": {
        "latitude": 41.257861,
        "longitude": 69.281186
      },
      "links_count": 160,
      "objectID": "2983"
    },
    {
      "name": "Gimhae Intl",
      "city": "Busan",
      "country": "South Korea",
      "iata_code": "PUS",
      "_geoloc": {
        "latitude": 35.179528,
        "longitude": 128.938222
      },
      "links_count": 160,
      "objectID": "2372"
    },
    {
      "name": "Kansas City Intl",
      "city": "Kansas City",
      "country": "United States",
      "iata_code": "MCI",
      "_geoloc": {
        "latitude": 39.297606,
        "longitude": -94.713905
      },
      "links_count": 159,
      "objectID": "3458"
    },
    {
      "name": "Macau Intl",
      "city": "Macau",
      "country": "Macau",
      "iata_code": "MFM",
      "_geoloc": {
        "latitude": 22.149556,
        "longitude": 113.591558
      },
      "links_count": 158,
      "objectID": "3121"
    },
    {
      "name": "Arturo Merino Benitez Intl",
      "city": "Santiago",
      "country": "Chile",
      "iata_code": "SCL",
      "_geoloc": {
        "latitude": -33.392975,
        "longitude": -70.785803
      },
      "links_count": 158,
      "objectID": "2650"
    },
    {
      "name": "Capodichino",
      "city": "Naples",
      "country": "Italy",
      "iata_code": "NAP",
      "_geoloc": {
        "latitude": 40.886033,
        "longitude": 14.290781
      },
      "links_count": 158,
      "objectID": "1561"
    },
    {
      "name": "Luogang",
      "city": "Hefei",
      "country": "China",
      "iata_code": "HFE",
      "_geoloc": {
        "latitude": 31.780019,
        "longitude": 117.298436
      },
      "links_count": 154,
      "objectID": "3389"
    },
    {
      "name": "Hannover",
      "city": "Hannover",
      "country": "Germany",
      "iata_code": "HAJ",
      "_geoloc": {
        "latitude": 52.461056,
        "longitude": 9.685078
      },
      "links_count": 152,
      "objectID": "352"
    },
    {
      "name": "Pisa",
      "city": "Pisa",
      "country": "Italy",
      "iata_code": "PSA",
      "_geoloc": {
        "latitude": 43.683917,
        "longitude": 10.39275
      },
      "links_count": 152,
      "objectID": "1562"
    },
    {
      "name": "Cincinnati Northern Kentucky Intl",
      "city": "Cincinnati",
      "country": "United States",
      "iata_code": "CVG",
      "_geoloc": {
        "latitude": 39.048836,
        "longitude": -84.667822
      },
      "links_count": 150,
      "objectID": "3488"
    },
    {
      "name": "Ministro Pistarini",
      "city": "Buenos Aires",
      "country": "Argentina",
      "iata_code": "EZE",
      "_geoloc": {
        "latitude": -34.822222,
        "longitude": -58.535833
      },
      "links_count": 149,
      "objectID": "3988"
    },
    {
      "name": "William P Hobby",
      "city": "Houston",
      "country": "United States",
      "iata_code": "HOU",
      "_geoloc": {
        "latitude": 29.645419,
        "longitude": -95.278889
      },
      "links_count": 149,
      "objectID": "3566"
    },
    {
      "name": "Juan Santamaria Intl",
      "city": "San Jose",
      "country": "Costa Rica",
      "iata_code": "SJO",
      "_geoloc": {
        "latitude": 9.993861,
        "longitude": -84.208806
      },
      "links_count": 149,
      "objectID": "1885"
    },
    {
      "name": "Pittsburgh Intl",
      "city": "Pittsburgh",
      "country": "United States",
      "iata_code": "PIT",
      "_geoloc": {
        "latitude": 40.491467,
        "longitude": -80.232872
      },
      "links_count": 148,
      "objectID": "3570"
    },
    {
      "name": "Zia Intl",
      "city": "Dhaka",
      "country": "Bangladesh",
      "iata_code": "DAC",
      "_geoloc": {
        "latitude": 23.843333,
        "longitude": 90.397781
      },
      "links_count": 148,
      "objectID": "3076"
    },
    {
      "name": "Hyderabad",
      "city": "Hyderabad",
      "country": "India",
      "iata_code": "HYD",
      "_geoloc": {
        "latitude": 17.453117,
        "longitude": 78.467586
      },
      "links_count": 147,
      "objectID": "3141"
    },
    {
      "name": "General Mariano Escobedo Intl",
      "city": "Monterrey",
      "country": "Mexico",
      "iata_code": "MTY",
      "_geoloc": {
        "latitude": 25.778489,
        "longitude": -100.106878
      },
      "links_count": 145,
      "objectID": "1825"
    },
    {
      "name": "Menara",
      "city": "Marrakech",
      "country": "Morocco",
      "iata_code": "RAK",
      "_geoloc": {
        "latitude": 31.606886,
        "longitude": -8.0363
      },
      "links_count": 145,
      "objectID": "1075"
    },
    {
      "name": "Punta Cana Intl",
      "city": "Punta Cana",
      "country": "Dominican Republic",
      "iata_code": "PUJ",
      "_geoloc": {
        "latitude": 18.567367,
        "longitude": -68.363431
      },
      "links_count": 143,
      "objectID": "1760"
    },
    {
      "name": "Luxembourg",
      "city": "Luxemburg",
      "country": "Luxembourg",
      "iata_code": "LUX",
      "_geoloc": {
        "latitude": 49.626575,
        "longitude": 6.211517
      },
      "links_count": 140,
      "objectID": "629"
    },
    {
      "name": "Edmonton Intl",
      "city": "Edmonton",
      "country": "Canada",
      "iata_code": "YEG",
      "_geoloc": {
        "latitude": 53.309723,
        "longitude": -113.579722
      },
      "links_count": 139,
      "objectID": "49"
    },
    {
      "name": "Indianapolis Intl",
      "city": "Indianapolis",
      "country": "United States",
      "iata_code": "IND",
      "_geoloc": {
        "latitude": 39.717331,
        "longitude": -86.294383
      },
      "links_count": 138,
      "objectID": "3585"
    },
    {
      "name": "Phuket Intl",
      "city": "Phuket",
      "country": "Thailand",
      "iata_code": "HKT",
      "_geoloc": {
        "latitude": 8.1132,
        "longitude": 98.316872
      },
      "links_count": 138,
      "objectID": "3179"
    },
    {
      "name": "Flesland",
      "city": "Bergen",
      "country": "Norway",
      "iata_code": "BGO",
      "_geoloc": {
        "latitude": 60.293386,
        "longitude": 5.218142
      },
      "links_count": 137,
      "objectID": "636"
    },
    {
      "name": "San Antonio Intl",
      "city": "San Antonio",
      "country": "United States",
      "iata_code": "SAT",
      "_geoloc": {
        "latitude": 29.533694,
        "longitude": -98.469778
      },
      "links_count": 136,
      "objectID": "3621"
    },
    {
      "name": "Eindhoven",
      "city": "Eindhoven",
      "country": "Netherlands",
      "iata_code": "EIN",
      "_geoloc": {
        "latitude": 51.450139,
        "longitude": 5.374528
      },
      "links_count": 135,
      "objectID": "585"
    },
    {
      "name": "Lynden Pindling Intl",
      "city": "Nassau",
      "country": "Bahamas",
      "iata_code": "NAS",
      "_geoloc": {
        "latitude": 25.038958,
        "longitude": -77.466231
      },
      "links_count": 135,
      "objectID": "1953"
    },
    {
      "name": "Don Muang Intl",
      "city": "Bangkok",
      "country": "Thailand",
      "iata_code": "DMK",
      "_geoloc": {
        "latitude": 13.912583,
        "longitude": 100.60675
      },
      "links_count": 134,
      "objectID": "3157"
    },
    {
      "name": "Almaty",
      "city": "Alma-ata",
      "country": "Kazakhstan",
      "iata_code": "ALA",
      "_geoloc": {
        "latitude": 43.352072,
        "longitude": 77.040508
      },
      "links_count": 134,
      "objectID": "2908"
    },
    {
      "name": "Merignac",
      "city": "Bordeaux",
      "country": "France",
      "iata_code": "BOD",
      "_geoloc": {
        "latitude": 44.828335,
        "longitude": -0.715556
      },
      "links_count": 134,
      "objectID": "1264"
    },
    {
      "name": "Leopold Sedar Senghor Intl",
      "city": "Dakar",
      "country": "Senegal",
      "iata_code": "DKR",
      "_geoloc": {
        "latitude": 14.739708,
        "longitude": -17.490225
      },
      "links_count": 134,
      "objectID": "1084"
    },
    {
      "name": "Rafic Hariri Intl",
      "city": "Beirut",
      "country": "Lebanon",
      "iata_code": "BEY",
      "_geoloc": {
        "latitude": 33.820931,
        "longitude": 35.488389
      },
      "links_count": 133,
      "objectID": "2177"
    },
    {
      "name": "Adnan Menderes",
      "city": "Izmir",
      "country": "Turkey",
      "iata_code": "ADB",
      "_geoloc": {
        "latitude": 38.292392,
        "longitude": 27.156953
      },
      "links_count": 133,
      "objectID": "1706"
    },
    {
      "name": "Sofia",
      "city": "Sofia",
      "country": "Bulgaria",
      "iata_code": "SOF",
      "_geoloc": {
        "latitude": 42.695194,
        "longitude": 23.406167
      },
      "links_count": 132,
      "objectID": "1194"
    },
    {
      "name": "Changchun",
      "city": "Changchun",
      "country": "China",
      "iata_code": "CGQ",
      "_geoloc": {
        "latitude": 43.5412,
        "longitude": 125.1201
      },
      "links_count": 131,
      "objectID": "4380"
    },
    {
      "name": "Yinchuan",
      "city": "Yinchuan",
      "country": "China",
      "iata_code": "INC",
      "_geoloc": {
        "latitude": 38.481944,
        "longitude": 106.009167
      },
      "links_count": 131,
      "objectID": "4085"
    },
    {
      "name": "Juanda",
      "city": "Surabaya",
      "country": "Indonesia",
      "iata_code": "SUB",
      "_geoloc": {
        "latitude": -7.379831,
        "longitude": 112.786858
      },
      "links_count": 131,
      "objectID": "3928"
    },
    {
      "name": "Lijiang Airport",
      "city": "Lijiang",
      "country": "China",
      "iata_code": "LJG",
      "_geoloc": {
        "latitude": 26.883333,
        "longitude": 100.23333
      },
      "links_count": 129,
      "objectID": "4033"
    },
    {
      "name": "Kaohsiung Intl",
      "city": "Kaohsiung",
      "country": "Taiwan",
      "iata_code": "KHH",
      "_geoloc": {
        "latitude": 22.577094,
        "longitude": 120.350006
      },
      "links_count": 129,
      "objectID": "2264"
    },
    {
      "name": "City",
      "city": "London",
      "country": "United Kingdom",
      "iata_code": "LCY",
      "_geoloc": {
        "latitude": 51.505278,
        "longitude": 0.055278
      },
      "links_count": 128,
      "objectID": "503"
    },
    {
      "name": "Mashhad",
      "city": "Mashhad",
      "country": "Iran",
      "iata_code": "MHD",
      "_geoloc": {
        "latitude": 36.234,
        "longitude": 59.643
      },
      "links_count": 128,
      "objectID": "4331"
    },
    {
      "name": "Southwest Florida Intl",
      "city": "Fort Myers",
      "country": "United States",
      "iata_code": "RSW",
      "_geoloc": {
        "latitude": 26.536167,
        "longitude": -81.755167
      },
      "links_count": 128,
      "objectID": "3793"
    },
    {
      "name": "Port Columbus Intl",
      "city": "Columbus",
      "country": "United States",
      "iata_code": "CMH",
      "_geoloc": {
        "latitude": 39.997972,
        "longitude": -82.891889
      },
      "links_count": 128,
      "objectID": "3759"
    },
    {
      "name": "Heydar Aliyev",
      "city": "Baku",
      "country": "Azerbaijan",
      "iata_code": "GYD",
      "_geoloc": {
        "latitude": 40.4675,
        "longitude": 50.046667
      },
      "links_count": 128,
      "objectID": "2922"
    },
    {
      "name": "Aeroparque Jorge Newbery",
      "city": "Buenos Aires",
      "country": "Argentina",
      "iata_code": "AEP",
      "_geoloc": {
        "latitude": -34.559175,
        "longitude": -58.415606
      },
      "links_count": 128,
      "objectID": "2442"
    },
    {
      "name": "Bilbao",
      "city": "Bilbao",
      "country": "Spain",
      "iata_code": "BIO",
      "_geoloc": {
        "latitude": 43.301097,
        "longitude": -2.910608
      },
      "links_count": 128,
      "objectID": "1216"
    },
    {
      "name": "Sevilla",
      "city": "Sevilla",
      "country": "Spain",
      "iata_code": "SVQ",
      "_geoloc": {
        "latitude": 37.418,
        "longitude": -5.893106
      },
      "links_count": 127,
      "objectID": "1253"
    },
    {
      "name": "Palermo",
      "city": "Palermo",
      "country": "Italy",
      "iata_code": "PMO",
      "_geoloc": {
        "latitude": 38.175958,
        "longitude": 13.091019
      },
      "links_count": 126,
      "objectID": "1512"
    },
    {
      "name": "General Mitchell Intl",
      "city": "Milwaukee",
      "country": "United States",
      "iata_code": "MKE",
      "_geoloc": {
        "latitude": 42.947222,
        "longitude": -87.896583
      },
      "links_count": 125,
      "objectID": "3717"
    },
    {
      "name": "Jinnah Intl",
      "city": "Karachi",
      "country": "Pakistan",
      "iata_code": "KHI",
      "_geoloc": {
        "latitude": 24.906547,
        "longitude": 67.160797
      },
      "links_count": 125,
      "objectID": "2206"
    },
    {
      "name": "Mehrabad Intl",
      "city": "Teheran",
      "country": "Iran",
      "iata_code": "THR",
      "_geoloc": {
        "latitude": 35.689167,
        "longitude": 51.313416
      },
      "links_count": 125,
      "objectID": "2131"
    },
    {
      "name": "Naha",
      "city": "Okinawa",
      "country": "Japan",
      "iata_code": "OKA",
      "_geoloc": {
        "latitude": 26.195814,
        "longitude": 127.645869
      },
      "links_count": 123,
      "objectID": "2384"
    },
    {
      "name": "Imam Khomeini",
      "city": "Tehran",
      "country": "Iran",
      "iata_code": "IKA",
      "_geoloc": {
        "latitude": 35.416111,
        "longitude": 51.152222
      },
      "links_count": 122,
      "objectID": "4330"
    },
    {
      "name": "Dubrovnik",
      "city": "Dubrovnik",
      "country": "Croatia",
      "iata_code": "DBV",
      "_geoloc": {
        "latitude": 42.561353,
        "longitude": 18.268244
      },
      "links_count": 121,
      "objectID": "1200"
    },
    {
      "name": "Norman Y Mineta San Jose Intl",
      "city": "San Jose",
      "country": "United States",
      "iata_code": "SJC",
      "_geoloc": {
        "latitude": 37.3626,
        "longitude": -121.929022
      },
      "links_count": 120,
      "objectID": "3748"
    },
    {
      "name": "Linate",
      "city": "Milan",
      "country": "Italy",
      "iata_code": "LIN",
      "_geoloc": {
        "latitude": 45.445103,
        "longitude": 9.276739
      },
      "links_count": 120,
      "objectID": "1529"
    },
    {
      "name": "Tille",
      "city": "Beauvais",
      "country": "France",
      "iata_code": "BVA",
      "_geoloc": {
        "latitude": 49.454444,
        "longitude": 2.112778
      },
      "links_count": 120,
      "objectID": "1367"
    },
    {
      "name": "Zhuhai Airport",
      "city": "Zhuhai",
      "country": "China",
      "iata_code": "ZUH",
      "_geoloc": {
        "latitude": 22.0064,
        "longitude": 113.376
      },
      "links_count": 119,
      "objectID": "6355"
    },
    {
      "name": "Murtala Muhammed",
      "city": "Lagos",
      "country": "Nigeria",
      "iata_code": "LOS",
      "_geoloc": {
        "latitude": 6.577369,
        "longitude": 3.321156
      },
      "links_count": 119,
      "objectID": "273"
    },
    {
      "name": "Ted Stevens Anchorage Intl",
      "city": "Anchorage",
      "country": "United States",
      "iata_code": "ANC",
      "_geoloc": {
        "latitude": 61.174361,
        "longitude": -149.996361
      },
      "links_count": 118,
      "objectID": "3774"
    },
    {
      "name": "Cochin",
      "city": "Kochi",
      "country": "India",
      "iata_code": "COK",
      "_geoloc": {
        "latitude": 10.155556,
        "longitude": 76.391389
      },
      "links_count": 118,
      "objectID": "3136"
    },
    {
      "name": "Jeju Intl",
      "city": "Cheju",
      "country": "South Korea",
      "iata_code": "CJU",
      "_geoloc": {
        "latitude": 33.511306,
        "longitude": 126.493028
      },
      "links_count": 118,
      "objectID": "2370"
    },
    {
      "name": "Chaklala",
      "city": "Islamabad",
      "country": "Pakistan",
      "iata_code": "ISB",
      "_geoloc": {
        "latitude": 33.616653,
        "longitude": 73.099233
      },
      "links_count": 117,
      "objectID": "2223"
    },
    {
      "name": "Liverpool",
      "city": "Liverpool",
      "country": "United Kingdom",
      "iata_code": "LPL",
      "_geoloc": {
        "latitude": 53.333611,
        "longitude": -2.849722
      },
      "links_count": 116,
      "objectID": "491"
    },
    {
      "name": "Vilnius Intl",
      "city": "Vilnius",
      "country": "Lithuania",
      "iata_code": "VNO",
      "_geoloc": {
        "latitude": 54.634133,
        "longitude": 25.285767
      },
      "links_count": 116,
      "objectID": "3959"
    },
    {
      "name": "Deputado Luis Eduardo Magalhaes",
      "city": "Salvador",
      "country": "Brazil",
      "iata_code": "SSA",
      "_geoloc": {
        "latitude": -12.910994,
        "longitude": -38.331044
      },
      "links_count": 116,
      "objectID": "2621"
    },
    {
      "name": "Dalaman",
      "city": "Dalaman",
      "country": "Turkey",
      "iata_code": "DLM",
      "_geoloc": {
        "latitude": 36.713056,
        "longitude": 28.7925
      },
      "links_count": 116,
      "objectID": "1715"
    },
    {
      "name": "Balice",
      "city": "Krakow",
      "country": "Poland",
      "iata_code": "KRK",
      "_geoloc": {
        "latitude": 50.077731,
        "longitude": 19.784836
      },
      "links_count": 114,
      "objectID": "669"
    },
    {
      "name": "Princess Juliana Intl",
      "city": "Philipsburg",
      "country": "Netherlands Antilles",
      "iata_code": "SXM",
      "_geoloc": {
        "latitude": 18.040953,
        "longitude": -63.1089
      },
      "links_count": 114,
      "objectID": "2899"
    },
    {
      "name": "Viracopos",
      "city": "Campinas",
      "country": "Brazil",
      "iata_code": "VCP",
      "_geoloc": {
        "latitude": -23.0075,
        "longitude": -47.134444
      },
      "links_count": 114,
      "objectID": "2578"
    },
    {
      "name": "Memphis Intl",
      "city": "Memphis",
      "country": "United States",
      "iata_code": "MEM",
      "_geoloc": {
        "latitude": 35.042417,
        "longitude": -89.976667
      },
      "links_count": 112,
      "objectID": "3473"
    },
    {
      "name": "Laishan",
      "city": "Yantai",
      "country": "China",
      "iata_code": "YNT",
      "_geoloc": {
        "latitude": 37.401667,
        "longitude": 121.371667
      },
      "links_count": 112,
      "objectID": "3392"
    },
    {
      "name": "Hasanuddin",
      "city": "Ujung Pandang",
      "country": "Indonesia",
      "iata_code": "UPG",
      "_geoloc": {
        "latitude": -5.061631,
        "longitude": 119.554042
      },
      "links_count": 112,
      "objectID": "3240"
    },
    {
      "name": "Metropolitan Oakland Intl",
      "city": "Oakland",
      "country": "United States",
      "iata_code": "OAK",
      "_geoloc": {
        "latitude": 37.721278,
        "longitude": -122.220722
      },
      "links_count": 111,
      "objectID": "3453"
    },
    {
      "name": "Allama Iqbal Intl",
      "city": "Lahore",
      "country": "Pakistan",
      "iata_code": "LHE",
      "_geoloc": {
        "latitude": 31.521564,
        "longitude": 74.403594
      },
      "links_count": 111,
      "objectID": "2207"
    },
    {
      "name": "Cairns Intl",
      "city": "Cairns",
      "country": "Australia",
      "iata_code": "CNS",
      "_geoloc": {
        "latitude": -16.885833,
        "longitude": 145.755278
      },
      "links_count": 110,
      "objectID": "3322"
    },
    {
      "name": "Tancredo Neves Intl",
      "city": "Belo Horizonte",
      "country": "Brazil",
      "iata_code": "CNF",
      "_geoloc": {
        "latitude": -19.63375,
        "longitude": -43.968856
      },
      "links_count": 110,
      "objectID": "2537"
    },
    {
      "name": "Sacramento Intl",
      "city": "Sacramento",
      "country": "United States",
      "iata_code": "SMF",
      "_geoloc": {
        "latitude": 38.695417,
        "longitude": -121.590778
      },
      "links_count": 108,
      "objectID": "3817"
    },
    {
      "name": "Minsk 2",
      "city": "Minsk 2",
      "country": "Belarus",
      "iata_code": "MSQ",
      "_geoloc": {
        "latitude": 53.882469,
        "longitude": 28.030731
      },
      "links_count": 108,
      "objectID": "2954"
    },
    {
      "name": "Kotoka Intl",
      "city": "Accra",
      "country": "Ghana",
      "iata_code": "ACC",
      "_geoloc": {
        "latitude": 5.605186,
        "longitude": -0.166786
      },
      "links_count": 107,
      "objectID": "248"
    },
    {
      "name": "Landvetter",
      "city": "Gothenborg",
      "country": "Sweden",
      "iata_code": "GOT",
      "_geoloc": {
        "latitude": 57.662836,
        "longitude": 12.279819
      },
      "links_count": 106,
      "objectID": "687"
    },
    {
      "name": "Sola",
      "city": "Stavanger",
      "country": "Norway",
      "iata_code": "SVG",
      "_geoloc": {
        "latitude": 58.876778,
        "longitude": 5.637856
      },
      "links_count": 106,
      "objectID": "666"
    },
    {
      "name": "Dushanbe",
      "city": "Dushanbe",
      "country": "Tajikistan",
      "iata_code": "DYU",
      "_geoloc": {
        "latitude": 38.543333,
        "longitude": 68.825
      },
      "links_count": 106,
      "objectID": "2979"
    },
    {
      "name": "Firenze",
      "city": "Florence",
      "country": "Italy",
      "iata_code": "FLR",
      "_geoloc": {
        "latitude": 43.809953,
        "longitude": 11.2051
      },
      "links_count": 106,
      "objectID": "1563"
    },
    {
      "name": "El Salvador Intl",
      "city": "San Salvador",
      "country": "El Salvador",
      "iata_code": "SAL",
      "_geoloc": {
        "latitude": 13.440947,
        "longitude": -89.055728
      },
      "links_count": 105,
      "objectID": "1892"
    },
    {
      "name": "Esenboga",
      "city": "Ankara",
      "country": "Turkey",
      "iata_code": "ESB",
      "_geoloc": {
        "latitude": 40.128082,
        "longitude": 32.995083
      },
      "links_count": 105,
      "objectID": "1682"
    },
    {
      "name": "Madeira",
      "city": "Funchal",
      "country": "Portugal",
      "iata_code": "FNC",
      "_geoloc": {
        "latitude": 32.697889,
        "longitude": -16.774453
      },
      "links_count": 104,
      "objectID": "4091"
    },
    {
      "name": "Kota Kinabalu Intl",
      "city": "Kota Kinabalu",
      "country": "Malaysia",
      "iata_code": "BKI",
      "_geoloc": {
        "latitude": 5.937208,
        "longitude": 116.051181
      },
      "links_count": 104,
      "objectID": "3269"
    },
    {
      "name": "Astana Intl",
      "city": "Tselinograd",
      "country": "Kazakhstan",
      "iata_code": "TSE",
      "_geoloc": {
        "latitude": 51.022222,
        "longitude": 71.466944
      },
      "links_count": 104,
      "objectID": "2910"
    },
    {
      "name": "Olbia Costa Smeralda",
      "city": "Olbia",
      "country": "Italy",
      "iata_code": "OLB",
      "_geoloc": {
        "latitude": 40.898661,
        "longitude": 9.517628
      },
      "links_count": 104,
      "objectID": "1520"
    },
    {
      "name": "Bradley Intl",
      "city": "Windsor Locks",
      "country": "United States",
      "iata_code": "BDL",
      "_geoloc": {
        "latitude": 41.938889,
        "longitude": -72.683222
      },
      "links_count": 103,
      "objectID": "3825"
    },
    {
      "name": "Ioannis Kapodistrias Intl",
      "city": "Kerkyra/corfu",
      "country": "Greece",
      "iata_code": "CFU",
      "_geoloc": {
        "latitude": 39.601944,
        "longitude": 19.911667
      },
      "links_count": 103,
      "objectID": "1460"
    },
    {
      "name": "Port Moresby Jacksons Intl",
      "city": "Port Moresby",
      "country": "Papua New Guinea",
      "iata_code": "POM",
      "_geoloc": {
        "latitude": -9.443383,
        "longitude": 147.22005
      },
      "links_count": 102,
      "objectID": "5"
    },
    {
      "name": "Adelaide Intl",
      "city": "Adelaide",
      "country": "Australia",
      "iata_code": "ADL",
      "_geoloc": {
        "latitude": -34.945,
        "longitude": 138.530556
      },
      "links_count": 102,
      "objectID": "3341"
    },
    {
      "name": "Abidjan Felix Houphouet Boigny Intl",
      "city": "Abidjan",
      "country": "Cote d'Ivoire",
      "iata_code": "ABJ",
      "_geoloc": {
        "latitude": 5.261386,
        "longitude": -3.926294
      },
      "links_count": 102,
      "objectID": "253"
    },
    {
      "name": "Lech Walesa",
      "city": "Gdansk",
      "country": "Poland",
      "iata_code": "GDN",
      "_geoloc": {
        "latitude": 54.377569,
        "longitude": 18.466222
      },
      "links_count": 101,
      "objectID": "668"
    },
    {
      "name": "Los Cabos Intl",
      "city": "San Jose Del Cabo",
      "country": "Mexico",
      "iata_code": "SJD",
      "_geoloc": {
        "latitude": 23.15185,
        "longitude": -109.721044
      },
      "links_count": 101,
      "objectID": "1840"
    },
    {
      "name": "Neuenland",
      "city": "Bremen",
      "country": "Germany",
      "iata_code": "BRE",
      "_geoloc": {
        "latitude": 53.0475,
        "longitude": 8.786667
      },
      "links_count": 100,
      "objectID": "353"
    },
    {
      "name": "Ciampino",
      "city": "Rome",
      "country": "Italy",
      "iata_code": "CIA",
      "_geoloc": {
        "latitude": 41.799361,
        "longitude": 12.594936
      },
      "links_count": 100,
      "objectID": "1553"
    },
    {
      "name": "Bari",
      "city": "Bari",
      "country": "Italy",
      "iata_code": "BRI",
      "_geoloc": {
        "latitude": 41.138856,
        "longitude": 16.760594
      },
      "links_count": 100,
      "objectID": "1501"
    },
    {
      "name": "Xining Caojiabu Airport",
      "city": "Xining",
      "country": "China",
      "iata_code": "XNN",
      "_geoloc": {
        "latitude": 36.5275,
        "longitude": 102.043
      },
      "links_count": 99,
      "objectID": "6366"
    },
    {
      "name": "Yangon Intl",
      "city": "Yangon",
      "country": "Burma",
      "iata_code": "RGN",
      "_geoloc": {
        "latitude": 16.907305,
        "longitude": 96.133222
      },
      "links_count": 99,
      "objectID": "3239"
    },
    {
      "name": "Douala",
      "city": "Douala",
      "country": "Cameroon",
      "iata_code": "DLA",
      "_geoloc": {
        "latitude": 4.006081,
        "longitude": 9.719481
      },
      "links_count": 98,
      "objectID": "897"
    },
    {
      "name": "Prince Mohammad Bin Abdulaziz",
      "city": "Madinah",
      "country": "Saudi Arabia",
      "iata_code": "MED",
      "_geoloc": {
        "latitude": 24.553422,
        "longitude": 39.705061
      },
      "links_count": 98,
      "objectID": "2074"
    },
    {
      "name": "Girona",
      "city": "Gerona",
      "country": "Spain",
      "iata_code": "GRO",
      "_geoloc": {
        "latitude": 41.900969,
        "longitude": 2.760547
      },
      "links_count": 98,
      "objectID": "1222"
    },
    {
      "name": "Mactan Cebu Intl",
      "city": "Cebu",
      "country": "Philippines",
      "iata_code": "CEB",
      "_geoloc": {
        "latitude": 10.307542,
        "longitude": 123.979439
      },
      "links_count": 97,
      "objectID": "4206"
    },
    {
      "name": "Orlando Sanford Intl",
      "city": "Sanford",
      "country": "United States",
      "iata_code": "SFB",
      "_geoloc": {
        "latitude": 28.777639,
        "longitude": -81.237489
      },
      "links_count": 97,
      "objectID": "4167"
    },
    {
      "name": "Split",
      "city": "Split",
      "country": "Croatia",
      "iata_code": "SPU",
      "_geoloc": {
        "latitude": 43.538944,
        "longitude": 16.297964
      },
      "links_count": 97,
      "objectID": "1206"
    },
    {
      "name": "Halifax Intl",
      "city": "Halifax",
      "country": "Canada",
      "iata_code": "YHZ",
      "_geoloc": {
        "latitude": 44.880833,
        "longitude": -63.50861
      },
      "links_count": 95,
      "objectID": "73"
    },
    {
      "name": "Chiang Mai Intl",
      "city": "Chiang Mai",
      "country": "Thailand",
      "iata_code": "CNX",
      "_geoloc": {
        "latitude": 18.766847,
        "longitude": 98.962644
      },
      "links_count": 95,
      "objectID": "3931"
    },
    {
      "name": "Nurnberg",
      "city": "Nuernberg",
      "country": "Germany",
      "iata_code": "NUE",
      "_geoloc": {
        "latitude": 49.4987,
        "longitude": 11.066897
      },
      "links_count": 95,
      "objectID": "347"
    },
    {
      "name": "Tripoli Intl",
      "city": "Tripoli",
      "country": "Libya",
      "iata_code": "TIP",
      "_geoloc": {
        "latitude": 32.663544,
        "longitude": 13.159011
      },
      "links_count": 95,
      "objectID": "1157"
    },
    {
      "name": "Wuxi Airport",
      "city": "Wuxi",
      "country": "China",
      "iata_code": "WUX",
      "_geoloc": {
        "latitude": 31.4944,
        "longitude": 120.429
      },
      "links_count": 94,
      "objectID": "6390"
    },
    {
      "name": "Billund",
      "city": "Billund",
      "country": "Denmark",
      "iata_code": "BLL",
      "_geoloc": {
        "latitude": 55.740322,
        "longitude": 9.151778
      },
      "links_count": 94,
      "objectID": "608"
    },
    {
      "name": "Frankfurt Hahn",
      "city": "Hahn",
      "country": "Germany",
      "iata_code": "HHN",
      "_geoloc": {
        "latitude": 49.948672,
        "longitude": 7.263892
      },
      "links_count": 94,
      "objectID": "355"
    },
    {
      "name": "Congonhas",
      "city": "Sao Paulo",
      "country": "Brazil",
      "iata_code": "CGH",
      "_geoloc": {
        "latitude": -23.626692,
        "longitude": -46.655375
      },
      "links_count": 94,
      "objectID": "2618"
    },
    {
      "name": "Las Americas Intl",
      "city": "Santo Domingo",
      "country": "Dominican Republic",
      "iata_code": "SDQ",
      "_geoloc": {
        "latitude": 18.429664,
        "longitude": -69.668925
      },
      "links_count": 93,
      "objectID": "1762"
    },
    {
      "name": "Luanda 4 De Fevereiro",
      "city": "Luanda",
      "country": "Angola",
      "iata_code": "LAD",
      "_geoloc": {
        "latitude": -8.858375,
        "longitude": 13.231178
      },
      "links_count": 92,
      "objectID": "951"
    },
    {
      "name": "Dubai Al Maktoum",
      "city": "Dubai",
      "country": "United Arab Emirates",
      "iata_code": "DWC",
      "_geoloc": {
        "latitude": 24.55056,
        "longitude": 55.103174
      },
      "links_count": 92,
      "objectID": "8076"
    },
    {
      "name": "Emelyanovo",
      "city": "Krasnoyarsk",
      "country": "Russia",
      "iata_code": "KJA",
      "_geoloc": {
        "latitude": 56.18,
        "longitude": 92.475
      },
      "links_count": 92,
      "objectID": "4374"
    },
    {
      "name": "Licenciado Gustavo Diaz Ordaz Intl",
      "city": "Puerto Vallarta",
      "country": "Mexico",
      "iata_code": "PVR",
      "_geoloc": {
        "latitude": 20.680083,
        "longitude": -105.254167
      },
      "links_count": 92,
      "objectID": "1836"
    },
    {
      "name": "Jacksonville Intl",
      "city": "Jacksonville",
      "country": "United States",
      "iata_code": "JAX",
      "_geoloc": {
        "latitude": 30.494056,
        "longitude": -81.687861
      },
      "links_count": 91,
      "objectID": "3712"
    },
    {
      "name": "Pashkovskiy",
      "city": "Krasnodar",
      "country": "Russia",
      "iata_code": "KRR",
      "_geoloc": {
        "latitude": 45.034689,
        "longitude": 39.170539
      },
      "links_count": 91,
      "objectID": "2960"
    },
    {
      "name": "Keflavik International Airport",
      "city": "Keflavik",
      "country": "Iceland",
      "iata_code": "KEF",
      "_geoloc": {
        "latitude": 63.985,
        "longitude": -22.605556
      },
      "links_count": 91,
      "objectID": "16"
    },
    {
      "name": "Enfidha - Zine El Abidine Ben Ali International Airport",
      "city": "Enfidha",
      "country": "Tunisia",
      "iata_code": "NBE",
      "_geoloc": {
        "latitude": 36.075833,
        "longitude": 10.438611
      },
      "links_count": 90,
      "objectID": "7447"
    },
    {
      "name": "Darwin Intl",
      "city": "Darwin",
      "country": "Australia",
      "iata_code": "DRW",
      "_geoloc": {
        "latitude": -12.4083333,
        "longitude": 130.87266
      },
      "links_count": 90,
      "objectID": "3999"
    },
    {
      "name": "Zvartnots",
      "city": "Yerevan",
      "country": "Armenia",
      "iata_code": "EVN",
      "_geoloc": {
        "latitude": 40.147275,
        "longitude": 44.395881
      },
      "links_count": 90,
      "objectID": "3964"
    },
    {
      "name": "Manas",
      "city": "Bishkek",
      "country": "Kyrgyzstan",
      "iata_code": "FRU",
      "_geoloc": {
        "latitude": 43.061306,
        "longitude": 74.477556
      },
      "links_count": 90,
      "objectID": "2912"
    },
    {
      "name": "Reina Beatrix Intl",
      "city": "Oranjestad",
      "country": "Aruba",
      "iata_code": "AUA",
      "_geoloc": {
        "latitude": 12.501389,
        "longitude": -70.015221
      },
      "links_count": 90,
      "objectID": "2895"
    },
    {
      "name": "Souda",
      "city": "Chania",
      "country": "Greece",
      "iata_code": "CHQ",
      "_geoloc": {
        "latitude": 35.531747,
        "longitude": 24.149678
      },
      "links_count": 90,
      "objectID": "1474"
    },
    {
      "name": "Kos",
      "city": "Kos",
      "country": "Greece",
      "iata_code": "KGS",
      "_geoloc": {
        "latitude": 36.793335,
        "longitude": 27.091667
      },
      "links_count": 90,
      "objectID": "1458"
    },
    {
      "name": "Sangster Intl",
      "city": "Montego Bay",
      "country": "Jamaica",
      "iata_code": "MBJ",
      "_geoloc": {
        "latitude": 18.503717,
        "longitude": -77.913358
      },
      "links_count": 89,
      "objectID": "1780"
    },
    {
      "name": "Ottawa Macdonald Cartier Intl",
      "city": "Ottawa",
      "country": "Canada",
      "iata_code": "YOW",
      "_geoloc": {
        "latitude": 45.3225,
        "longitude": -75.669167
      },
      "links_count": 89,
      "objectID": "100"
    },
    {
      "name": "Quanzhou Airport",
      "city": "Quanzhou",
      "country": "China",
      "iata_code": "JJN",
      "_geoloc": {
        "latitude": 24.7964,
        "longitude": 118.59
      },
      "links_count": 88,
      "objectID": "6386"
    },
    {
      "name": "Palm Beach Intl",
      "city": "West Palm Beach",
      "country": "United States",
      "iata_code": "PBI",
      "_geoloc": {
        "latitude": 26.683161,
        "longitude": -80.095589
      },
      "links_count": 88,
      "objectID": "3722"
    },
    {
      "name": "Tribhuvan Intl",
      "city": "Kathmandu",
      "country": "Nepal",
      "iata_code": "KTM",
      "_geoloc": {
        "latitude": 27.696583,
        "longitude": 85.3591
      },
      "links_count": 88,
      "objectID": "3125"
    },
    {
      "name": "Jose Marti Intl",
      "city": "Havana",
      "country": "Cuba",
      "iata_code": "HAV",
      "_geoloc": {
        "latitude": 22.989153,
        "longitude": -82.409086
      },
      "links_count": 87,
      "objectID": "1909"
    },
    {
      "name": "Cape Town Intl",
      "city": "Cape Town",
      "country": "South Africa",
      "iata_code": "CPT",
      "_geoloc": {
        "latitude": -33.964806,
        "longitude": 18.601667
      },
      "links_count": 86,
      "objectID": "797"
    },
    {
      "name": "Vaernes",
      "city": "Trondheim",
      "country": "Norway",
      "iata_code": "TRD",
      "_geoloc": {
        "latitude": 63.457556,
        "longitude": 10.92425
      },
      "links_count": 86,
      "objectID": "665"
    },
    {
      "name": "John Wayne Arpt Orange Co",
      "city": "Santa Ana",
      "country": "United States",
      "iata_code": "SNA",
      "_geoloc": {
        "latitude": 33.675667,
        "longitude": -117.868222
      },
      "links_count": 86,
      "objectID": "3867"
    },
    {
      "name": "Salgado Filho",
      "city": "Porto Alegre",
      "country": "Brazil",
      "iata_code": "POA",
      "_geoloc": {
        "latitude": -29.994428,
        "longitude": -51.171428
      },
      "links_count": 86,
      "objectID": "2599"
    },
    {
      "name": "Afonso Pena",
      "city": "Curitiba",
      "country": "Brazil",
      "iata_code": "CWB",
      "_geoloc": {
        "latitude": -25.528475,
        "longitude": -49.175775
      },
      "links_count": 86,
      "objectID": "2545"
    },
    {
      "name": "Torino",
      "city": "Torino",
      "country": "Italy",
      "iata_code": "TRN",
      "_geoloc": {
        "latitude": 45.200761,
        "longitude": 7.649631
      },
      "links_count": 86,
      "objectID": "1526"
    },
    {
      "name": "Elmas",
      "city": "Cagliari",
      "country": "Italy",
      "iata_code": "CAG",
      "_geoloc": {
        "latitude": 39.251469,
        "longitude": 9.054283
      },
      "links_count": 86,
      "objectID": "1519"
    },
    {
      "name": "Male Intl",
      "city": "Male",
      "country": "Maldives",
      "iata_code": "MLE",
      "_geoloc": {
        "latitude": 4.191833,
        "longitude": 73.529128
      },
      "links_count": 85,
      "objectID": "3156"
    },
    {
      "name": "Zagreb",
      "city": "Zagreb",
      "country": "Croatia",
      "iata_code": "ZAG",
      "_geoloc": {
        "latitude": 45.742931,
        "longitude": 16.068778
      },
      "links_count": 85,
      "objectID": "1208"
    },
    {
      "name": "Pafos Intl",
      "city": "Paphos",
      "country": "Cyprus",
      "iata_code": "PFO",
      "_geoloc": {
        "latitude": 34.718039,
        "longitude": 32.485731
      },
      "links_count": 85,
      "objectID": "1198"
    },
    {
      "name": "Kahului",
      "city": "Kahului",
      "country": "United States",
      "iata_code": "OGG",
      "_geoloc": {
        "latitude": 20.89865,
        "longitude": -156.430458
      },
      "links_count": 84,
      "objectID": "3456"
    },
    {
      "name": "Penang Intl",
      "city": "Penang",
      "country": "Malaysia",
      "iata_code": "PEN",
      "_geoloc": {
        "latitude": 5.297139,
        "longitude": 100.276864
      },
      "links_count": 84,
      "objectID": "3308"
    },
    {
      "name": "Thiruvananthapuram Intl",
      "city": "Trivandrum",
      "country": "India",
      "iata_code": "TRV",
      "_geoloc": {
        "latitude": 8.482122,
        "longitude": 76.920114
      },
      "links_count": 84,
      "objectID": "3153"
    },
    {
      "name": "Osaka Intl",
      "city": "Osaka",
      "country": "Japan",
      "iata_code": "ITM",
      "_geoloc": {
        "latitude": 34.785528,
        "longitude": 135.438222
      },
      "links_count": 84,
      "objectID": "2334"
    },
    {
      "name": "Albuquerque International Sunport",
      "city": "Albuquerque",
      "country": "United States",
      "iata_code": "ABQ",
      "_geoloc": {
        "latitude": 35.0402222,
        "longitude": -106.6091944
      },
      "links_count": 83,
      "objectID": "4019"
    },
    {
      "name": "Louisville International Airport",
      "city": "Louisville",
      "country": "United States",
      "iata_code": "SDF",
      "_geoloc": {
        "latitude": 38.1740858,
        "longitude": -85.7364989
      },
      "links_count": 83,
      "objectID": "4014"
    },
    {
      "name": "Nadi Intl",
      "city": "Nandi",
      "country": "Fiji",
      "iata_code": "NAN",
      "_geoloc": {
        "latitude": -17.755392,
        "longitude": 177.443378
      },
      "links_count": 83,
      "objectID": "1960"
    },
    {
      "name": "General Abelardo L Rodriguez Intl",
      "city": "Tijuana",
      "country": "Mexico",
      "iata_code": "TIJ",
      "_geoloc": {
        "latitude": 32.541064,
        "longitude": -116.970158
      },
      "links_count": 83,
      "objectID": "1847"
    },
    {
      "name": "Sir Seewoosagur Ramgoolam Intl",
      "city": "Plaisance",
      "country": "Mauritius",
      "iata_code": "MRU",
      "_geoloc": {
        "latitude": -20.430235,
        "longitude": 57.6836
      },
      "links_count": 82,
      "objectID": "893"
    },
    {
      "name": "Dyce",
      "city": "Aberdeen",
      "country": "United Kingdom",
      "iata_code": "ABZ",
      "_geoloc": {
        "latitude": 57.201944,
        "longitude": -2.197778
      },
      "links_count": 82,
      "objectID": "532"
    },
    {
      "name": "Irkutsk",
      "city": "Irkutsk",
      "country": "Russia",
      "iata_code": "IKT",
      "_geoloc": {
        "latitude": 52.268028,
        "longitude": 104.388975
      },
      "links_count": 82,
      "objectID": "2937"
    },
    {
      "name": "Will Rogers World",
      "city": "Oklahoma City",
      "country": "United States",
      "iata_code": "OKC",
      "_geoloc": {
        "latitude": 35.393089,
        "longitude": -97.600733
      },
      "links_count": 81,
      "objectID": "3863"
    },
    {
      "name": "Borg El Arab Intl",
      "city": "Alexandria",
      "country": "Egypt",
      "iata_code": "HBE",
      "_geoloc": {
        "latitude": 30.917669,
        "longitude": 29.696408
      },
      "links_count": 81,
      "objectID": "3410"
    },
    {
      "name": "Siem Reap",
      "city": "Siem-reap",
      "country": "Cambodia",
      "iata_code": "REP",
      "_geoloc": {
        "latitude": 13.410666,
        "longitude": 103.81284
      },
      "links_count": 81,
      "objectID": "3035"
    },
    {
      "name": "Winnipeg Intl",
      "city": "Winnipeg",
      "country": "Canada",
      "iata_code": "YWG",
      "_geoloc": {
        "latitude": 49.910036,
        "longitude": -97.239886
      },
      "links_count": 81,
      "objectID": "160"
    },
    {
      "name": "Khartoum",
      "city": "Khartoum",
      "country": "Sudan",
      "iata_code": "KRT",
      "_geoloc": {
        "latitude": 15.589497,
        "longitude": 32.553161
      },
      "links_count": 81,
      "objectID": "1175"
    },
    {
      "name": "Cadjehoun",
      "city": "Cotonou",
      "country": "Benin",
      "iata_code": "COO",
      "_geoloc": {
        "latitude": 6.357228,
        "longitude": 2.384353
      },
      "links_count": 80,
      "objectID": "245"
    },
    {
      "name": "Sungshan",
      "city": "Taipei",
      "country": "Taiwan",
      "iata_code": "TSA",
      "_geoloc": {
        "latitude": 25.069722,
        "longitude": 121.5525
      },
      "links_count": 80,
      "objectID": "2275"
    },
    {
      "name": "Lesquin",
      "city": "Lille",
      "country": "France",
      "iata_code": "LIL",
      "_geoloc": {
        "latitude": 50.561942,
        "longitude": 3.089444
      },
      "links_count": 80,
      "objectID": "1399"
    },
    {
      "name": "Leipzig Halle",
      "city": "Leipzig",
      "country": "Germany",
      "iata_code": "LEJ",
      "_geoloc": {
        "latitude": 51.432447,
        "longitude": 12.241633
      },
      "links_count": 79,
      "objectID": "348"
    },
    {
      "name": "Hurghada Intl",
      "city": "Hurghada",
      "country": "Egypt",
      "iata_code": "HRG",
      "_geoloc": {
        "latitude": 27.178317,
        "longitude": 33.799436
      },
      "links_count": 79,
      "objectID": "1130"
    },
    {
      "name": "Mariscal Sucre Intl",
      "city": "Quito",
      "country": "Ecuador",
      "iata_code": "UIO",
      "_geoloc": {
        "latitude": -0.141144,
        "longitude": -78.488214
      },
      "links_count": 78,
      "objectID": "2688"
    },
    {
      "name": "Gimpo",
      "city": "Seoul",
      "country": "South Korea",
      "iata_code": "GMP",
      "_geoloc": {
        "latitude": 37.558311,
        "longitude": 126.790586
      },
      "links_count": 78,
      "objectID": "2378"
    },
    {
      "name": "Shiraz Shahid Dastghaib Intl",
      "city": "Shiraz",
      "country": "Iran",
      "iata_code": "SYZ",
      "_geoloc": {
        "latitude": 29.539242,
        "longitude": 52.589786
      },
      "links_count": 78,
      "objectID": "2157"
    },
    {
      "name": "Campo Dell Oro",
      "city": "Ajaccio",
      "country": "France",
      "iata_code": "AJA",
      "_geoloc": {
        "latitude": 41.923637,
        "longitude": 8.802917
      },
      "links_count": 78,
      "objectID": "1324"
    },
    {
      "name": "Kigali Intl",
      "city": "Kigali",
      "country": "Rwanda",
      "iata_code": "KGL",
      "_geoloc": {
        "latitude": -1.968628,
        "longitude": 30.13945
      },
      "links_count": 78,
      "objectID": "1165"
    },
    {
      "name": "Faa\\\\'a International",
      "city": "Papeete",
      "country": "French Polynesia",
      "iata_code": "PPT",
      "_geoloc": {
        "latitude": -17.556667,
        "longitude": -149.611389
      },
      "links_count": 77,
      "objectID": "4075"
    },
    {
      "name": "Sharm El Sheikh Intl",
      "city": "Sharm El Sheikh",
      "country": "Egypt",
      "iata_code": "SSH",
      "_geoloc": {
        "latitude": 27.977222,
        "longitude": 34.394722
      },
      "links_count": 77,
      "objectID": "4057"
    },
    {
      "name": "La Aurora",
      "city": "Guatemala City",
      "country": "Guatemala",
      "iata_code": "GUA",
      "_geoloc": {
        "latitude": 14.583272,
        "longitude": -90.527475
      },
      "links_count": 77,
      "objectID": "1767"
    },
    {
      "name": "Villafranca",
      "city": "Villafranca",
      "country": "Italy",
      "iata_code": "VRN",
      "_geoloc": {
        "latitude": 45.395706,
        "longitude": 10.888533
      },
      "links_count": 77,
      "objectID": "1550"
    },
    {
      "name": "Jersey",
      "city": "Jersey",
      "country": "Jersey",
      "iata_code": "JER",
      "_geoloc": {
        "latitude": 49.207947,
        "longitude": -2.195508
      },
      "links_count": 76,
      "objectID": "499"
    },
    {
      "name": "Niederrhein",
      "city": "Weeze",
      "country": "Germany",
      "iata_code": "NRN",
      "_geoloc": {
        "latitude": 51.602222,
        "longitude": 6.141944
      },
      "links_count": 76,
      "objectID": "4198"
    },
    {
      "name": "Tallinn",
      "city": "Tallinn-ulemiste International",
      "country": "Estonia",
      "iata_code": "TLL",
      "_geoloc": {
        "latitude": 59.413317,
        "longitude": 24.832844
      },
      "links_count": 76,
      "objectID": "415"
    },
    {
      "name": "Richmond Intl",
      "city": "Richmond",
      "country": "United States",
      "iata_code": "RIC",
      "_geoloc": {
        "latitude": 37.505167,
        "longitude": -77.319667
      },
      "links_count": 76,
      "objectID": "3608"
    },
    {
      "name": "Yakutsk",
      "city": "Yakutsk",
      "country": "Russia",
      "iata_code": "YKS",
      "_geoloc": {
        "latitude": 62.09325,
        "longitude": 129.770672
      },
      "links_count": 76,
      "objectID": "2923"
    },
    {
      "name": "Treviso",
      "city": "Treviso",
      "country": "Italy",
      "iata_code": "TSF",
      "_geoloc": {
        "latitude": 45.6484,
        "longitude": 12.194422
      },
      "links_count": 76,
      "objectID": "1539"
    },
    {
      "name": "Sanaa Intl",
      "city": "Sanaa",
      "country": "Yemen",
      "iata_code": "SAH",
      "_geoloc": {
        "latitude": 15.476258,
        "longitude": 44.219739
      },
      "links_count": 75,
      "objectID": "3980"
    },
    {
      "name": "Dallas Love Fld",
      "city": "Dallas",
      "country": "United States",
      "iata_code": "DAL",
      "_geoloc": {
        "latitude": 32.847111,
        "longitude": -96.851778
      },
      "links_count": 75,
      "objectID": "3502"
    },
    {
      "name": "Novy",
      "city": "Khabarovsk",
      "country": "Russia",
      "iata_code": "KHV",
      "_geoloc": {
        "latitude": 48.528044,
        "longitude": 135.188361
      },
      "links_count": 75,
      "objectID": "2927"
    },
    {
      "name": "Torp",
      "city": "Sandefjord",
      "country": "Norway",
      "iata_code": "TRF",
      "_geoloc": {
        "latitude": 59.186703,
        "longitude": 10.258628
      },
      "links_count": 74,
      "objectID": "664"
    },
    {
      "name": "Moss",
      "city": "Rygge",
      "country": "Norway",
      "iata_code": "RYG",
      "_geoloc": {
        "latitude": 59.378933,
        "longitude": 10.785389
      },
      "links_count": 74,
      "objectID": "657"
    },
    {
      "name": "Changzhou",
      "city": "Changzhou",
      "country": "China",
      "iata_code": "CZX",
      "_geoloc": {
        "latitude": 31.941667,
        "longitude": 119.711667
      },
      "links_count": 74,
      "objectID": "4109"
    },
    {
      "name": "Norfolk Intl",
      "city": "Norfolk",
      "country": "United States",
      "iata_code": "ORF",
      "_geoloc": {
        "latitude": 36.894611,
        "longitude": -76.201222
      },
      "links_count": 74,
      "objectID": "3611"
    },
    {
      "name": "Zarzis",
      "city": "Djerba",
      "country": "Tunisia",
      "iata_code": "DJE",
      "_geoloc": {
        "latitude": 33.875031,
        "longitude": 10.775461
      },
      "links_count": 73,
      "objectID": "293"
    },
    {
      "name": "Sepinggan",
      "city": "Balikpapan",
      "country": "Indonesia",
      "iata_code": "BPN",
      "_geoloc": {
        "latitude": -1.268272,
        "longitude": 116.894478
      },
      "links_count": 72,
      "objectID": "3919"
    },
    {
      "name": "Guararapes Gilberto Freyre Intl",
      "city": "Recife",
      "country": "Brazil",
      "iata_code": "REC",
      "_geoloc": {
        "latitude": -8.126794,
        "longitude": -34.923039
      },
      "links_count": 72,
      "objectID": "2610"
    },
    {
      "name": "Christchurch Intl",
      "city": "Christchurch",
      "country": "New Zealand",
      "iata_code": "CHC",
      "_geoloc": {
        "latitude": -43.489358,
        "longitude": 172.532225
      },
      "links_count": 72,
      "objectID": "2009"
    },
    {
      "name": "Poretta",
      "city": "Bastia",
      "country": "France",
      "iata_code": "BIA",
      "_geoloc": {
        "latitude": 42.552664,
        "longitude": 9.483731
      },
      "links_count": 72,
      "objectID": "1321"
    },
    {
      "name": "Tirana Rinas",
      "city": "Tirana",
      "country": "Albania",
      "iata_code": "TIA",
      "_geoloc": {
        "latitude": 41.414742,
        "longitude": 19.720561
      },
      "links_count": 72,
      "objectID": "1190"
    },
    {
      "name": "Wai Sha Airport",
      "city": "Shantou",
      "country": "China",
      "iata_code": "SWA",
      "_geoloc": {
        "latitude": 23.4,
        "longitude": 116.683
      },
      "links_count": 71,
      "objectID": "4302"
    },
    {
      "name": "Buffalo Niagara Intl",
      "city": "Buffalo",
      "country": "United States",
      "iata_code": "BUF",
      "_geoloc": {
        "latitude": 42.940525,
        "longitude": -78.732167
      },
      "links_count": 71,
      "objectID": "3820"
    },
    {
      "name": "Birmingham Intl",
      "city": "Birmingham",
      "country": "United States",
      "iata_code": "BHM",
      "_geoloc": {
        "latitude": 33.562942,
        "longitude": -86.75355
      },
      "links_count": 71,
      "objectID": "3811"
    },
    {
      "name": "Jose Joaquin De Olmedo Intl",
      "city": "Guayaquil",
      "country": "Ecuador",
      "iata_code": "GYE",
      "_geoloc": {
        "latitude": -2.157419,
        "longitude": -79.883558
      },
      "links_count": 71,
      "objectID": "2673"
    },
    {
      "name": "Pinto Martins Intl",
      "city": "Fortaleza",
      "country": "Brazil",
      "iata_code": "FOR",
      "_geoloc": {
        "latitude": -3.776283,
        "longitude": -38.532556
      },
      "links_count": 71,
      "objectID": "2559"
    },
    {
      "name": "Belfast Intl",
      "city": "Belfast",
      "country": "United Kingdom",
      "iata_code": "BFS",
      "_geoloc": {
        "latitude": 54.6575,
        "longitude": -6.215833
      },
      "links_count": 70,
      "objectID": "465"
    },
    {
      "name": "Ahmedabad",
      "city": "Ahmedabad",
      "country": "India",
      "iata_code": "AMD",
      "_geoloc": {
        "latitude": 23.077242,
        "longitude": 72.63465
      },
      "links_count": 70,
      "objectID": "2994"
    },
    {
      "name": "Piarco",
      "city": "Port-of-spain",
      "country": "Trinidad and Tobago",
      "iata_code": "POS",
      "_geoloc": {
        "latitude": 10.595369,
        "longitude": -61.337242
      },
      "links_count": 70,
      "objectID": "2902"
    },
    {
      "name": "Val De Cans Intl",
      "city": "Belem",
      "country": "Brazil",
      "iata_code": "BEL",
      "_geoloc": {
        "latitude": -1.37925,
        "longitude": -48.476292
      },
      "links_count": 70,
      "objectID": "2526"
    },
    {
      "name": "Guam Intl",
      "city": "Agana",
      "country": "Guam",
      "iata_code": "GUM",
      "_geoloc": {
        "latitude": 13.48345,
        "longitude": 144.795983
      },
      "links_count": 70,
      "objectID": "2246"
    },
    {
      "name": "Santiago",
      "city": "Santiago",
      "country": "Spain",
      "iata_code": "SCQ",
      "_geoloc": {
        "latitude": 42.896333,
        "longitude": -8.415144
      },
      "links_count": 70,
      "objectID": "1243"
    },
    {
      "name": "Menorca",
      "city": "Menorca",
      "country": "Spain",
      "iata_code": "MAH",
      "_geoloc": {
        "latitude": 39.862597,
        "longitude": 4.218647
      },
      "links_count": 70,
      "objectID": "1231"
    },
    {
      "name": "Tbilisi",
      "city": "Tbilisi",
      "country": "Georgia",
      "iata_code": "TBS",
      "_geoloc": {
        "latitude": 41.669167,
        "longitude": 44.954722
      },
      "links_count": 69,
      "objectID": "3973"
    },
    {
      "name": "Charleston Afb Intl",
      "city": "Charleston",
      "country": "United States",
      "iata_code": "CHS",
      "_geoloc": {
        "latitude": 32.898647,
        "longitude": -80.040528
      },
      "links_count": 69,
      "objectID": "3806"
    },
    {
      "name": "Eppley Afld",
      "city": "Omaha",
      "country": "United States",
      "iata_code": "OMA",
      "_geoloc": {
        "latitude": 41.303167,
        "longitude": -95.894069
      },
      "links_count": 69,
      "objectID": "3454"
    },
    {
      "name": "V C Bird Intl",
      "city": "Antigua",
      "country": "Antigua and Barbuda",
      "iata_code": "ANU",
      "_geoloc": {
        "latitude": 17.136749,
        "longitude": -61.792667
      },
      "links_count": 69,
      "objectID": "2874"
    },
    {
      "name": "Salzburg",
      "city": "Salzburg",
      "country": "Austria",
      "iata_code": "SZG",
      "_geoloc": {
        "latitude": 47.793304,
        "longitude": 13.004333
      },
      "links_count": 69,
      "objectID": "1612"
    },
    {
      "name": "Entzheim",
      "city": "Strasbourg",
      "country": "France",
      "iata_code": "SXB",
      "_geoloc": {
        "latitude": 48.538319,
        "longitude": 7.628233
      },
      "links_count": 69,
      "objectID": "1435"
    },
    {
      "name": "Cork",
      "city": "Cork",
      "country": "Ireland",
      "iata_code": "ORK",
      "_geoloc": {
        "latitude": 51.841269,
        "longitude": -8.491111
      },
      "links_count": 68,
      "objectID": "596"
    },
    {
      "name": "Myrtle Beach Intl",
      "city": "Myrtle Beach",
      "country": "United States",
      "iata_code": "MYR",
      "_geoloc": {
        "latitude": 33.67975,
        "longitude": -78.928333
      },
      "links_count": 68,
      "objectID": "3515"
    },
    {
      "name": "Pune",
      "city": "Pune",
      "country": "India",
      "iata_code": "PNQ",
      "_geoloc": {
        "latitude": 18.582111,
        "longitude": 73.919697
      },
      "links_count": 68,
      "objectID": "3017"
    },
    {
      "name": "Es Senia",
      "city": "Oran",
      "country": "Algeria",
      "iata_code": "ORN",
      "_geoloc": {
        "latitude": 35.623858,
        "longitude": -0.621183
      },
      "links_count": 68,
      "objectID": "231"
    },
    {
      "name": "Chisinau Intl",
      "city": "Chisinau",
      "country": "Moldova",
      "iata_code": "KIV",
      "_geoloc": {
        "latitude": 46.927744,
        "longitude": 28.930978
      },
      "links_count": 68,
      "objectID": "1735"
    },
    {
      "name": "Lusaka Intl",
      "city": "Lusaka",
      "country": "Zambia",
      "iata_code": "LUN",
      "_geoloc": {
        "latitude": -15.330817,
        "longitude": 28.452628
      },
      "links_count": 67,
      "objectID": "907"
    },
    {
      "name": "Dortmund",
      "city": "Dortmund",
      "country": "Germany",
      "iata_code": "DTM",
      "_geoloc": {
        "latitude": 51.518314,
        "longitude": 7.612242
      },
      "links_count": 67,
      "objectID": "373"
    },
    {
      "name": "Entebbe Intl",
      "city": "Entebbe",
      "country": "Uganda",
      "iata_code": "EBB",
      "_geoloc": {
        "latitude": 0.042386,
        "longitude": 32.443503
      },
      "links_count": 67,
      "objectID": "1187"
    },
    {
      "name": "Mwalimu Julius K Nyerere Intl",
      "city": "Dar Es Salaam",
      "country": "Tanzania",
      "iata_code": "DAR",
      "_geoloc": {
        "latitude": -6.878111,
        "longitude": 39.202625
      },
      "links_count": 67,
      "objectID": "1177"
    },
    {
      "name": "Strachowice",
      "city": "Wroclaw",
      "country": "Poland",
      "iata_code": "WRO",
      "_geoloc": {
        "latitude": 51.102683,
        "longitude": 16.885836
      },
      "links_count": 66,
      "objectID": "680"
    },
    {
      "name": "Khudzhand Airport",
      "city": "Khudzhand",
      "country": "Tajikistan",
      "iata_code": "LBD",
      "_geoloc": {
        "latitude": 40.2154,
        "longitude": 69.6947
      },
      "links_count": 66,
      "objectID": "6147"
    },
    {
      "name": "Rotterdam",
      "city": "Rotterdam",
      "country": "Netherlands",
      "iata_code": "RTM",
      "_geoloc": {
        "latitude": 51.956944,
        "longitude": 4.437222
      },
      "links_count": 66,
      "objectID": "591"
    },
    {
      "name": "Southampton",
      "city": "Southampton",
      "country": "United Kingdom",
      "iata_code": "SOU",
      "_geoloc": {
        "latitude": 50.950261,
        "longitude": -1.356803
      },
      "links_count": 66,
      "objectID": "495"
    },
    {
      "name": "Danang Intl",
      "city": "Danang",
      "country": "Vietnam",
      "iata_code": "DAD",
      "_geoloc": {
        "latitude": 16.043917,
        "longitude": 108.19937
      },
      "links_count": 66,
      "objectID": "3196"
    },
    {
      "name": "Cyril E King",
      "city": "St. Thomas",
      "country": "Virgin Islands",
      "iata_code": "STT",
      "_geoloc": {
        "latitude": 18.337306,
        "longitude": -64.973361
      },
      "links_count": 66,
      "objectID": "2883"
    },
    {
      "name": "Marechal Rondon",
      "city": "Cuiaba",
      "country": "Brazil",
      "iata_code": "CGB",
      "_geoloc": {
        "latitude": -15.652931,
        "longitude": -56.116719
      },
      "links_count": 66,
      "objectID": "2548"
    },
    {
      "name": "Ouagadougou",
      "city": "Ouagadougou",
      "country": "Burkina Faso",
      "iata_code": "OUA",
      "_geoloc": {
        "latitude": 12.353194,
        "longitude": -1.512417
      },
      "links_count": 66,
      "objectID": "246"
    },
    {
      "name": "Ljubljana",
      "city": "Ljubljana",
      "country": "Slovenia",
      "iata_code": "LJU",
      "_geoloc": {
        "latitude": 46.223686,
        "longitude": 14.457611
      },
      "links_count": 66,
      "objectID": "1569"
    },
    {
      "name": "Tenerife Norte",
      "city": "Tenerife",
      "country": "Spain",
      "iata_code": "TFN",
      "_geoloc": {
        "latitude": 28.482653,
        "longitude": -16.341536
      },
      "links_count": 66,
      "objectID": "1057"
    },
    {
      "name": "Phoenix-Mesa Gateway",
      "city": "Mesa",
      "country": "United States",
      "iata_code": "AZA",
      "_geoloc": {
        "latitude": 33.307833,
        "longitude": -111.655
      },
      "links_count": 64,
      "objectID": "6505"
    },
    {
      "name": "James M Cox Dayton Intl",
      "city": "Dayton",
      "country": "United States",
      "iata_code": "DAY",
      "_geoloc": {
        "latitude": 39.902375,
        "longitude": -84.219375
      },
      "links_count": 64,
      "objectID": "3627"
    },
    {
      "name": "Eduardo Gomes Intl",
      "city": "Manaus",
      "country": "Brazil",
      "iata_code": "MAO",
      "_geoloc": {
        "latitude": -3.038611,
        "longitude": -60.049721
      },
      "links_count": 64,
      "objectID": "2551"
    },
    {
      "name": "Wellington Intl",
      "city": "Wellington",
      "country": "New Zealand",
      "iata_code": "WLG",
      "_geoloc": {
        "latitude": -41.327221,
        "longitude": 174.805278
      },
      "links_count": 64,
      "objectID": "2042"
    },
    {
      "name": "Lokpriya Gopinath Bordoloi International Airport",
      "city": "Guwahati",
      "country": "India",
      "iata_code": "GAU",
      "_geoloc": {
        "latitude": 26.106092,
        "longitude": 91.585939
      },
      "links_count": 63,
      "objectID": "6173"
    },
    {
      "name": "Cardiff",
      "city": "Cardiff",
      "country": "United Kingdom",
      "iata_code": "CWL",
      "_geoloc": {
        "latitude": 51.396667,
        "longitude": -3.343333
      },
      "links_count": 63,
      "objectID": "488"
    },
    {
      "name": "Bodrum - Milas",
      "city": "Bodrum",
      "country": "Turkey",
      "iata_code": "BJV",
      "_geoloc": {
        "latitude": 37.249,
        "longitude": 27.667
      },
      "links_count": 63,
      "objectID": "4315"
    },
    {
      "name": "Hato",
      "city": "Willemstad",
      "country": "Netherlands Antilles",
      "iata_code": "CUR",
      "_geoloc": {
        "latitude": 12.188853,
        "longitude": -68.959803
      },
      "links_count": 63,
      "objectID": "2897"
    },
    {
      "name": "Skavsta",
      "city": "Stockholm",
      "country": "Sweden",
      "iata_code": "NYO",
      "_geoloc": {
        "latitude": 58.788636,
        "longitude": 16.912189
      },
      "links_count": 62,
      "objectID": "699"
    },
    {
      "name": "Mc Ghee Tyson",
      "city": "Knoxville",
      "country": "United States",
      "iata_code": "TYS",
      "_geoloc": {
        "latitude": 35.810972,
        "longitude": -83.994028
      },
      "links_count": 62,
      "objectID": "3676"
    },
    {
      "name": "Tucson Intl",
      "city": "Tucson",
      "country": "United States",
      "iata_code": "TUS",
      "_geoloc": {
        "latitude": 32.116083,
        "longitude": -110.941028
      },
      "links_count": 62,
      "objectID": "3636"
    },
    {
      "name": "St Petersburg Clearwater Intl",
      "city": "St. Petersburg",
      "country": "United States",
      "iata_code": "PIE",
      "_geoloc": {
        "latitude": 27.910167,
        "longitude": -82.687389
      },
      "links_count": 62,
      "objectID": "3617"
    },
    {
      "name": "Sendai",
      "city": "Sendai",
      "country": "Japan",
      "iata_code": "SDJ",
      "_geoloc": {
        "latitude": 38.139722,
        "longitude": 140.916944
      },
      "links_count": 62,
      "objectID": "2347"
    },
    {
      "name": "Providenciales",
      "city": "Providenciales",
      "country": "Turks and Caicos Islands",
      "iata_code": "PLS",
      "_geoloc": {
        "latitude": 21.773625,
        "longitude": -72.265886
      },
      "links_count": 62,
      "objectID": "1754"
    },
    {
      "name": "Alghero",
      "city": "Alghero",
      "country": "Italy",
      "iata_code": "AHO",
      "_geoloc": {
        "latitude": 40.632133,
        "longitude": 8.290772
      },
      "links_count": 62,
      "objectID": "1517"
    },
    {
      "name": "Calicut",
      "city": "Calicut",
      "country": "India",
      "iata_code": "CCJ",
      "_geoloc": {
        "latitude": 11.136839,
        "longitude": 75.9553
      },
      "links_count": 61,
      "objectID": "3137"
    },
    {
      "name": "Phnom Penh Intl",
      "city": "Phnom-penh",
      "country": "Cambodia",
      "iata_code": "PNH",
      "_geoloc": {
        "latitude": 11.546556,
        "longitude": 104.844139
      },
      "links_count": 61,
      "objectID": "3034"
    },
    {
      "name": "Santos Dumont",
      "city": "Rio De Janeiro",
      "country": "Brazil",
      "iata_code": "SDU",
      "_geoloc": {
        "latitude": -22.910461,
        "longitude": -43.163133
      },
      "links_count": 61,
      "objectID": "2612"
    },
    {
      "name": "Lhasa-Gonggar",
      "city": "Lhasa",
      "country": "China",
      "iata_code": "LXA",
      "_geoloc": {
        "latitude": 29.297778,
        "longitude": 90.911944
      },
      "links_count": 60,
      "objectID": "4097"
    },
    {
      "name": "Erbil Intl",
      "city": "Erbil",
      "country": "Iraq",
      "iata_code": "EBL",
      "_geoloc": {
        "latitude": 36.237611,
        "longitude": 43.963158
      },
      "links_count": 60,
      "objectID": "3989"
    },
    {
      "name": "Albany Intl",
      "city": "Albany",
      "country": "United States",
      "iata_code": "ALB",
      "_geoloc": {
        "latitude": 42.748267,
        "longitude": -73.801692
      },
      "links_count": 60,
      "objectID": "3864"
    },
    {
      "name": "Greater Rochester Intl",
      "city": "Rochester",
      "country": "United States",
      "iata_code": "ROC",
      "_geoloc": {
        "latitude": 43.118866,
        "longitude": -77.672389
      },
      "links_count": 60,
      "objectID": "3622"
    },
    {
      "name": "Osh",
      "city": "Osh",
      "country": "Kyrgyzstan",
      "iata_code": "OSS",
      "_geoloc": {
        "latitude": 40.608989,
        "longitude": 72.793269
      },
      "links_count": 60,
      "objectID": "2913"
    },
    {
      "name": "Nnamdi Azikiwe Intl",
      "city": "Abuja",
      "country": "Nigeria",
      "iata_code": "ABV",
      "_geoloc": {
        "latitude": 9.006792,
        "longitude": 7.263172
      },
      "links_count": 60,
      "objectID": "260"
    },
    {
      "name": "Peshawar Intl",
      "city": "Peshawar",
      "country": "Pakistan",
      "iata_code": "PEW",
      "_geoloc": {
        "latitude": 33.993911,
        "longitude": 71.514581
      },
      "links_count": 60,
      "objectID": "2219"
    },
    {
      "name": "Zhangxiao",
      "city": "Yuncheng",
      "country": "China",
      "iata_code": "YCU",
      "_geoloc": {
        "latitude": 35.018,
        "longitude": 110.993
      },
      "links_count": 58,
      "objectID": "6430"
    },
    {
      "name": "Baotou Airport",
      "city": "Baotou",
      "country": "China",
      "iata_code": "BAV",
      "_geoloc": {
        "latitude": 40.56,
        "longitude": 109.997
      },
      "links_count": 58,
      "objectID": "6346"
    },
    {
      "name": "Shannon",
      "city": "Shannon",
      "country": "Ireland",
      "iata_code": "SNN",
      "_geoloc": {
        "latitude": 52.701978,
        "longitude": -8.924817
      },
      "links_count": 58,
      "objectID": "603"
    },
    {
      "name": "Greenville-Spartanburg International",
      "city": "Greenville",
      "country": "United States",
      "iata_code": "GSP",
      "_geoloc": {
        "latitude": 34.895556,
        "longitude": -82.218889
      },
      "links_count": 58,
      "objectID": "4034"
    },
    {
      "name": "Adi Sutjipto",
      "city": "Yogyakarta",
      "country": "Indonesia",
      "iata_code": "JOG",
      "_geoloc": {
        "latitude": -7.788181,
        "longitude": 110.431758
      },
      "links_count": 58,
      "objectID": "3898"
    },
    {
      "name": "Adams Fld",
      "city": "Little Rock",
      "country": "United States",
      "iata_code": "LIT",
      "_geoloc": {
        "latitude": 34.729444,
        "longitude": -92.224306
      },
      "links_count": 58,
      "objectID": "3660"
    },
    {
      "name": "Subang-Sultan Abdul Aziz Shah Intl",
      "city": "Kuala Lumpur",
      "country": "Malaysia",
      "iata_code": "SZB",
      "_geoloc": {
        "latitude": 3.130583,
        "longitude": 101.549333
      },
      "links_count": 58,
      "objectID": "3408"
    },
    {
      "name": "Goa",
      "city": "Goa",
      "country": "India",
      "iata_code": "GOI",
      "_geoloc": {
        "latitude": 15.380833,
        "longitude": 73.831422
      },
      "links_count": 58,
      "objectID": "3007"
    },
    {
      "name": "Le Raizet",
      "city": "Pointe-a-pitre",
      "country": "Guadeloupe",
      "iata_code": "PTP",
      "_geoloc": {
        "latitude": 16.265306,
        "longitude": -61.531806
      },
      "links_count": 58,
      "objectID": "2881"
    },
    {
      "name": "Ching Chuang Kang",
      "city": "Taichung",
      "country": "Taiwan",
      "iata_code": "RMQ",
      "_geoloc": {
        "latitude": 24.264668,
        "longitude": 120.62058
      },
      "links_count": 58,
      "objectID": "2268"
    },
    {
      "name": "Yellowknife",
      "city": "Yellowknife",
      "country": "Canada",
      "iata_code": "YZF",
      "_geoloc": {
        "latitude": 62.462778,
        "longitude": -114.440278
      },
      "links_count": 58,
      "objectID": "196"
    },
    {
      "name": "Norman Manley Intl",
      "city": "Kingston",
      "country": "Jamaica",
      "iata_code": "KIN",
      "_geoloc": {
        "latitude": 17.935667,
        "longitude": -76.7875
      },
      "links_count": 58,
      "objectID": "1779"
    },
    {
      "name": "Des Moines Intl",
      "city": "Des Moines",
      "country": "United States",
      "iata_code": "DSM",
      "_geoloc": {
        "latitude": 41.533972,
        "longitude": -93.663083
      },
      "links_count": 57,
      "objectID": "3729"
    },
    {
      "name": "Bethel",
      "city": "Bethel",
      "country": "United States",
      "iata_code": "BET",
      "_geoloc": {
        "latitude": 60.779778,
        "longitude": -161.838
      },
      "links_count": 57,
      "objectID": "3599"
    },
    {
      "name": "Alfonso Bonilla Aragon Intl",
      "city": "Cali",
      "country": "Colombia",
      "iata_code": "CLO",
      "_geoloc": {
        "latitude": 3.543222,
        "longitude": -76.381583
      },
      "links_count": 57,
      "objectID": "2715"
    },
    {
      "name": "Quebec Jean Lesage Intl",
      "city": "Quebec",
      "country": "Canada",
      "iata_code": "YQB",
      "_geoloc": {
        "latitude": 46.791111,
        "longitude": -71.393333
      },
      "links_count": 57,
      "objectID": "111"
    },
    {
      "name": "Harare Intl",
      "city": "Harare",
      "country": "Zimbabwe",
      "iata_code": "HRE",
      "_geoloc": {
        "latitude": -17.931806,
        "longitude": 31.092847
      },
      "links_count": 57,
      "objectID": "1005"
    },
    {
      "name": "Pyrzowice",
      "city": "Katowice",
      "country": "Poland",
      "iata_code": "KTW",
      "_geoloc": {
        "latitude": 50.474253,
        "longitude": 19.080019
      },
      "links_count": 56,
      "objectID": "671"
    },
    {
      "name": "Reno Tahoe Intl",
      "city": "Reno",
      "country": "United States",
      "iata_code": "RNO",
      "_geoloc": {
        "latitude": 39.499108,
        "longitude": -119.768108
      },
      "links_count": 56,
      "objectID": "3807"
    },
    {
      "name": "Gerald R Ford Intl",
      "city": "Grand Rapids",
      "country": "United States",
      "iata_code": "GRR",
      "_geoloc": {
        "latitude": 42.880833,
        "longitude": -85.522806
      },
      "links_count": 56,
      "objectID": "3685"
    },
    {
      "name": "Gold Coast",
      "city": "Coolangatta",
      "country": "Australia",
      "iata_code": "OOL",
      "_geoloc": {
        "latitude": -28.164444,
        "longitude": 153.504722
      },
      "links_count": 56,
      "objectID": "3321"
    },
    {
      "name": "Kazan",
      "city": "Kazan",
      "country": "Russia",
      "iata_code": "KZN",
      "_geoloc": {
        "latitude": 55.606186,
        "longitude": 49.278728
      },
      "links_count": 56,
      "objectID": "2990"
    },
    {
      "name": "Rostov Na Donu",
      "city": "Rostov",
      "country": "Russia",
      "iata_code": "ROV",
      "_geoloc": {
        "latitude": 47.258208,
        "longitude": 39.818089
      },
      "links_count": 56,
      "objectID": "2964"
    },
    {
      "name": "Port Vila Bauerfield",
      "city": "Port-vila",
      "country": "Vanuatu",
      "iata_code": "VLI",
      "_geoloc": {
        "latitude": -17.699325,
        "longitude": 168.319794
      },
      "links_count": 56,
      "objectID": "1997"
    },
    {
      "name": "Philip S W Goldson Intl",
      "city": "Belize City",
      "country": "Belize",
      "iata_code": "BZE",
      "_geoloc": {
        "latitude": 17.539144,
        "longitude": -88.308203
      },
      "links_count": 56,
      "objectID": "1957"
    },
    {
      "name": "Trapani Birgi",
      "city": "Trapani",
      "country": "Italy",
      "iata_code": "TPS",
      "_geoloc": {
        "latitude": 37.911403,
        "longitude": 12.487961
      },
      "links_count": 56,
      "objectID": "1515"
    },
    {
      "name": "Inezgane",
      "city": "Agadir",
      "country": "Morocco",
      "iata_code": "AGA",
      "_geoloc": {
        "latitude": 30.381353,
        "longitude": -9.546311
      },
      "links_count": 56,
      "objectID": "1064"
    },
    {
      "name": "Tulsa Intl",
      "city": "Tulsa",
      "country": "United States",
      "iata_code": "TUL",
      "_geoloc": {
        "latitude": 36.198389,
        "longitude": -95.888111
      },
      "links_count": 55,
      "objectID": "3855"
    },
    {
      "name": "Theodore Francis Green State",
      "city": "Providence",
      "country": "United States",
      "iata_code": "PVD",
      "_geoloc": {
        "latitude": 41.732581,
        "longitude": -71.420383
      },
      "links_count": 55,
      "objectID": "3641"
    },
    {
      "name": "Senou",
      "city": "Bamako",
      "country": "Mali",
      "iata_code": "BKO",
      "_geoloc": {
        "latitude": 12.533544,
        "longitude": -7.949944
      },
      "links_count": 55,
      "objectID": "1044"
    },
    {
      "name": "Ndjili Intl",
      "city": "Kinshasa",
      "country": "Congo (Kinshasa)",
      "iata_code": "FIH",
      "_geoloc": {
        "latitude": -4.38575,
        "longitude": 15.444569
      },
      "links_count": 55,
      "objectID": "1020"
    },
    {
      "name": "Ivato",
      "city": "Antananarivo",
      "country": "Madagascar",
      "iata_code": "TNR",
      "_geoloc": {
        "latitude": -18.79695,
        "longitude": 47.478806
      },
      "links_count": 54,
      "objectID": "918"
    },
    {
      "name": "Bromma",
      "city": "Stockholm",
      "country": "Sweden",
      "iata_code": "BMA",
      "_geoloc": {
        "latitude": 59.354372,
        "longitude": 17.94165
      },
      "links_count": 54,
      "objectID": "738"
    },
    {
      "name": "Kurumoch",
      "city": "Samara",
      "country": "Russia",
      "iata_code": "KUF",
      "_geoloc": {
        "latitude": 53.5,
        "longitude": 50.15
      },
      "links_count": 54,
      "objectID": "4118"
    },
    {
      "name": "Hang Nadim",
      "city": "Batam",
      "country": "Indonesia",
      "iata_code": "BTH",
      "_geoloc": {
        "latitude": 1.121028,
        "longitude": 104.118753
      },
      "links_count": 54,
      "objectID": "3903"
    },
    {
      "name": "Fairbanks Intl",
      "city": "Fairbanks",
      "country": "United States",
      "iata_code": "FAI",
      "_geoloc": {
        "latitude": 64.815114,
        "longitude": -147.856267
      },
      "links_count": 54,
      "objectID": "3832"
    },
    {
      "name": "Kabul Intl",
      "city": "Kabul",
      "country": "Afghanistan",
      "iata_code": "KBL",
      "_geoloc": {
        "latitude": 34.565853,
        "longitude": 69.212328
      },
      "links_count": 54,
      "objectID": "2050"
    },
    {
      "name": "Warsaw Modlin",
      "city": "Warsaw",
      "country": "Poland",
      "iata_code": "WMI",
      "_geoloc": {
        "latitude": 52.451111,
        "longitude": 20.651667
      },
      "links_count": 52,
      "objectID": "8414"
    },
    {
      "name": "Langnes",
      "city": "Tromso",
      "country": "Norway",
      "iata_code": "TOS",
      "_geoloc": {
        "latitude": 69.683333,
        "longitude": 18.918919
      },
      "links_count": 52,
      "objectID": "663"
    },
    {
      "name": "Tunxi International Airport",
      "city": "Huangshan",
      "country": "China",
      "iata_code": "TXN",
      "_geoloc": {
        "latitude": 29.7333,
        "longitude": 118.256
      },
      "links_count": 52,
      "objectID": "6387"
    },
    {
      "name": "Syracuse Hancock Intl",
      "city": "Syracuse",
      "country": "United States",
      "iata_code": "SYR",
      "_geoloc": {
        "latitude": 43.111187,
        "longitude": -76.106311
      },
      "links_count": 52,
      "objectID": "3745"
    },
    {
      "name": "Kuching Intl",
      "city": "Kuching",
      "country": "Malaysia",
      "iata_code": "KCH",
      "_geoloc": {
        "latitude": 1.484697,
        "longitude": 110.346933
      },
      "links_count": 52,
      "objectID": "3263"
    },
    {
      "name": "Sochi",
      "city": "Sochi",
      "country": "Russia",
      "iata_code": "AER",
      "_geoloc": {
        "latitude": 43.449928,
        "longitude": 39.956589
      },
      "links_count": 52,
      "objectID": "2965"
    },
    {
      "name": "Knevichi",
      "city": "Vladivostok",
      "country": "Russia",
      "iata_code": "VVO",
      "_geoloc": {
        "latitude": 43.398953,
        "longitude": 132.148017
      },
      "links_count": 52,
      "objectID": "2934"
    },
    {
      "name": "Jose Maria Cordova",
      "city": "Rio Negro",
      "country": "Colombia",
      "iata_code": "MDE",
      "_geoloc": {
        "latitude": 6.164536,
        "longitude": -75.423119
      },
      "links_count": 52,
      "objectID": "2745"
    },
    {
      "name": "Zadar",
      "city": "Zadar",
      "country": "Croatia",
      "iata_code": "ZAD",
      "_geoloc": {
        "latitude": 44.108269,
        "longitude": 15.346697
      },
      "links_count": 52,
      "objectID": "1209"
    },
    {
      "name": "Maya Maya",
      "city": "Brazzaville",
      "country": "Congo (Brazzaville)",
      "iata_code": "BZV",
      "_geoloc": {
        "latitude": -4.2517,
        "longitude": 15.253031
      },
      "links_count": 51,
      "objectID": "883"
    },
    {
      "name": "Piedmont Triad",
      "city": "Greensboro",
      "country": "United States",
      "iata_code": "GSO",
      "_geoloc": {
        "latitude": 36.09775,
        "longitude": -79.937306
      },
      "links_count": 51,
      "objectID": "4008"
    },
    {
      "name": "Palm Springs Intl",
      "city": "Palm Springs",
      "country": "United States",
      "iata_code": "PSP",
      "_geoloc": {
        "latitude": 33.829667,
        "longitude": -116.506694
      },
      "links_count": 51,
      "objectID": "3839"
    },
    {
      "name": "El Alto Intl",
      "city": "La Paz",
      "country": "Bolivia",
      "iata_code": "LPB",
      "_geoloc": {
        "latitude": -16.513339,
        "longitude": -68.192256
      },
      "links_count": 51,
      "objectID": "2762"
    },
    {
      "name": "Owen Roberts Intl",
      "city": "Georgetown",
      "country": "Cayman Islands",
      "iata_code": "GCM",
      "_geoloc": {
        "latitude": 19.292778,
        "longitude": -81.35775
      },
      "links_count": 51,
      "objectID": "1926"
    },
    {
      "name": "Ordos Ejin Horo",
      "city": "Dongsheng",
      "country": "China",
      "iata_code": "DSN",
      "_geoloc": {
        "latitude": 39.85,
        "longitude": 110.033
      },
      "links_count": 50,
      "objectID": "6434"
    },
    {
      "name": "Ontario Intl",
      "city": "Ontario",
      "country": "United States",
      "iata_code": "ONT",
      "_geoloc": {
        "latitude": 34.056,
        "longitude": -117.601194
      },
      "links_count": 50,
      "objectID": "3734"
    },
    {
      "name": "Wattay Intl",
      "city": "Vientiane",
      "country": "Laos",
      "iata_code": "VTE",
      "_geoloc": {
        "latitude": 17.988322,
        "longitude": 102.563256
      },
      "links_count": 50,
      "objectID": "3120"
    },
    {
      "name": "Lamezia Terme",
      "city": "Lamezia",
      "country": "Italy",
      "iata_code": "SUF",
      "_geoloc": {
        "latitude": 38.905394,
        "longitude": 16.242269
      },
      "links_count": 50,
      "objectID": "1508"
    },
    {
      "name": "Benina",
      "city": "Benghazi",
      "country": "Libya",
      "iata_code": "BEN",
      "_geoloc": {
        "latitude": 32.096786,
        "longitude": 20.269472
      },
      "links_count": 50,
      "objectID": "1154"
    },
    {
      "name": "Exeter",
      "city": "Exeter",
      "country": "United Kingdom",
      "iata_code": "EXT",
      "_geoloc": {
        "latitude": 50.734444,
        "longitude": -3.413889
      },
      "links_count": 49,
      "objectID": "552"
    },
    {
      "name": "Nome",
      "city": "Nome",
      "country": "United States",
      "iata_code": "OME",
      "_geoloc": {
        "latitude": 64.512203,
        "longitude": -165.445247
      },
      "links_count": 49,
      "objectID": "3615"
    },
    {
      "name": "Leon M Ba",
      "city": "Libreville",
      "country": "Gabon",
      "iata_code": "LBV",
      "_geoloc": {
        "latitude": 0.4586,
        "longitude": 9.412283
      },
      "links_count": 48,
      "objectID": "970"
    },
    {
      "name": "Yichang Airport",
      "city": "Yichang",
      "country": "China",
      "iata_code": "YIH",
      "_geoloc": {
        "latitude": 30.671,
        "longitude": 111.441
      },
      "links_count": 48,
      "objectID": "6361"
    },
    {
      "name": "NW Arkansas Regional",
      "city": "Bentonville",
      "country": "United States",
      "iata_code": "XNA",
      "_geoloc": {
        "latitude": 36.2818694,
        "longitude": -94.3068111
      },
      "links_count": 48,
      "objectID": "4356"
    },
    {
      "name": "Honiara International",
      "city": "Honiara",
      "country": "Solomon Islands",
      "iata_code": "HIR",
      "_geoloc": {
        "latitude": -9.428,
        "longitude": 160.054789
      },
      "links_count": 48,
      "objectID": "4074"
    },
    {
      "name": "Jinghong",
      "city": "Jinghong",
      "country": "China",
      "iata_code": "JHG",
      "_geoloc": {
        "latitude": 21.973914,
        "longitude": 100.759611
      },
      "links_count": 48,
      "objectID": "4055"
    },
    {
      "name": "Miri",
      "city": "Miri",
      "country": "Malaysia",
      "iata_code": "MYY",
      "_geoloc": {
        "latitude": 4.322014,
        "longitude": 113.986806
      },
      "links_count": 48,
      "objectID": "3266"
    },
    {
      "name": "Viru Viru Intl",
      "city": "Santa Cruz",
      "country": "Bolivia",
      "iata_code": "VVI",
      "_geoloc": {
        "latitude": -17.644756,
        "longitude": -63.135364
      },
      "links_count": 48,
      "objectID": "2771"
    },
    {
      "name": "Ahwaz",
      "city": "Ahwaz",
      "country": "Iran",
      "iata_code": "AWZ",
      "_geoloc": {
        "latitude": 31.337431,
        "longitude": 48.76195
      },
      "links_count": 48,
      "objectID": "2104"
    },
    {
      "name": "Toussaint Louverture Intl",
      "city": "Port-au-prince",
      "country": "Haiti",
      "iata_code": "PAP",
      "_geoloc": {
        "latitude": 18.58005,
        "longitude": -72.292542
      },
      "links_count": 48,
      "objectID": "1897"
    },
    {
      "name": "General Ignacio P Garcia Intl",
      "city": "Hermosillo",
      "country": "Mexico",
      "iata_code": "HMO",
      "_geoloc": {
        "latitude": 29.095858,
        "longitude": -111.047858
      },
      "links_count": 48,
      "objectID": "1807"
    },
    {
      "name": "Skopje",
      "city": "Skopje",
      "country": "Macedonia",
      "iata_code": "SKP",
      "_geoloc": {
        "latitude": 41.961622,
        "longitude": 21.621381
      },
      "links_count": 48,
      "objectID": "1737"
    },
    {
      "name": "Mediterranee",
      "city": "Montpellier",
      "country": "France",
      "iata_code": "MPL",
      "_geoloc": {
        "latitude": 43.576194,
        "longitude": 3.963014
      },
      "links_count": 48,
      "objectID": "1359"
    },
    {
      "name": "Rankin Inlet",
      "city": "Rankin Inlet",
      "country": "Canada",
      "iata_code": "YRT",
      "_geoloc": {
        "latitude": 62.81139,
        "longitude": -92.115833
      },
      "links_count": 48,
      "objectID": "132"
    },
    {
      "name": "El Paso Intl",
      "city": "El Paso",
      "country": "United States",
      "iata_code": "ELP",
      "_geoloc": {
        "latitude": 31.80725,
        "longitude": -106.377583
      },
      "links_count": 47,
      "objectID": "3559"
    },
    {
      "name": "Ponta Delgada",
      "city": "Ponta Delgada",
      "country": "Portugal",
      "iata_code": "PDL",
      "_geoloc": {
        "latitude": 37.741184,
        "longitude": -25.69787
      },
      "links_count": 47,
      "objectID": "1633"
    },
    {
      "name": "Allgau",
      "city": "Memmingen",
      "country": "Germany",
      "iata_code": "FMM",
      "_geoloc": {
        "latitude": 47.988758,
        "longitude": 10.2395
      },
      "links_count": 46,
      "objectID": "3986"
    },
    {
      "name": "Savannah Hilton Head Intl",
      "city": "Savannah",
      "country": "United States",
      "iata_code": "SAV",
      "_geoloc": {
        "latitude": 32.127583,
        "longitude": -81.202139
      },
      "links_count": 46,
      "objectID": "3613"
    },
    {
      "name": "Westchester Co",
      "city": "White Plains",
      "country": "United States",
      "iata_code": "HPN",
      "_geoloc": {
        "latitude": 41.066959,
        "longitude": -73.707575
      },
      "links_count": 46,
      "objectID": "3589"
    },
    {
      "name": "Brunei Intl",
      "city": "Bandar Seri Begawan",
      "country": "Brunei",
      "iata_code": "BWN",
      "_geoloc": {
        "latitude": 4.9442,
        "longitude": 114.928353
      },
      "links_count": 46,
      "objectID": "3272"
    },
    {
      "name": "Ufa",
      "city": "Ufa",
      "country": "Russia",
      "iata_code": "UFA",
      "_geoloc": {
        "latitude": 54.557511,
        "longitude": 55.874417
      },
      "links_count": 46,
      "objectID": "2992"
    },
    {
      "name": "Le Lamentin",
      "city": "Fort-de-france",
      "country": "Martinique",
      "iata_code": "FDF",
      "_geoloc": {
        "latitude": 14.591033,
        "longitude": -61.003175
      },
      "links_count": 46,
      "objectID": "2878"
    },
    {
      "name": "Grantley Adams Intl",
      "city": "Bridgetown",
      "country": "Barbados",
      "iata_code": "BGI",
      "_geoloc": {
        "latitude": 13.074603,
        "longitude": -59.492456
      },
      "links_count": 46,
      "objectID": "2875"
    },
    {
      "name": "Carrasco Intl",
      "city": "Montevideo",
      "country": "Uruguay",
      "iata_code": "MVD",
      "_geoloc": {
        "latitude": -34.838417,
        "longitude": -56.030806
      },
      "links_count": 46,
      "objectID": "2816"
    },
    {
      "name": "La Mesa Intl",
      "city": "San Pedro Sula",
      "country": "Honduras",
      "iata_code": "SAP",
      "_geoloc": {
        "latitude": 15.452639,
        "longitude": -87.923556
      },
      "links_count": 46,
      "objectID": "1772"
    },
    {
      "name": "Roschino",
      "city": "Tyumen",
      "country": "Russia",
      "iata_code": "TJM",
      "_geoloc": {
        "latitude": 57.189567,
        "longitude": 65.3243
      },
      "links_count": 45,
      "objectID": "4111"
    },
    {
      "name": "Ralph Wien Mem",
      "city": "Kotzebue",
      "country": "United States",
      "iata_code": "OTZ",
      "_geoloc": {
        "latitude": 66.884678,
        "longitude": -162.59855
      },
      "links_count": 45,
      "objectID": "3693"
    },
    {
      "name": "Daniel Oduber Quiros Intl",
      "city": "Liberia",
      "country": "Costa Rica",
      "iata_code": "LIR",
      "_geoloc": {
        "latitude": 10.593289,
        "longitude": -85.544408
      },
      "links_count": 45,
      "objectID": "1881"
    },
    {
      "name": "Akron Canton Regional Airport",
      "city": "Akron",
      "country": "United States",
      "iata_code": "CAK",
      "_geoloc": {
        "latitude": 40.9160833,
        "longitude": -81.4421944
      },
      "links_count": 44,
      "objectID": "4112"
    },
    {
      "name": "Aden Intl",
      "city": "Aden",
      "country": "Yemen",
      "iata_code": "ADE",
      "_geoloc": {
        "latitude": 12.829542,
        "longitude": 45.028792
      },
      "links_count": 44,
      "objectID": "3977"
    },
    {
      "name": "Ketchikan Intl",
      "city": "Ketchikan",
      "country": "United States",
      "iata_code": "KTN",
      "_geoloc": {
        "latitude": 55.355556,
        "longitude": -131.71375
      },
      "links_count": 44,
      "objectID": "3808"
    },
    {
      "name": "Dresden",
      "city": "Dresden",
      "country": "Germany",
      "iata_code": "DRS",
      "_geoloc": {
        "latitude": 51.132767,
        "longitude": 13.767161
      },
      "links_count": 44,
      "objectID": "338"
    },
    {
      "name": "Mineralnyye Vody",
      "city": "Mineralnye Vody",
      "country": "Russia",
      "iata_code": "MRV",
      "_geoloc": {
        "latitude": 44.225072,
        "longitude": 43.081889
      },
      "links_count": 44,
      "objectID": "2962"
    },
    {
      "name": "Zhuliany Intl",
      "city": "Kiev",
      "country": "Ukraine",
      "iata_code": "IEV",
      "_geoloc": {
        "latitude": 50.401694,
        "longitude": 30.449697
      },
      "links_count": 44,
      "objectID": "2944"
    },
    {
      "name": "Sept Iles",
      "city": "Sept-iles",
      "country": "Canada",
      "iata_code": "YZV",
      "_geoloc": {
        "latitude": 50.223333,
        "longitude": -66.265556
      },
      "links_count": 44,
      "objectID": "202"
    },
    {
      "name": "Casale",
      "city": "Brindisi",
      "country": "Italy",
      "iata_code": "BDS",
      "_geoloc": {
        "latitude": 40.657633,
        "longitude": 17.947033
      },
      "links_count": 44,
      "objectID": "1506"
    },
    {
      "name": "Freetown Lungi",
      "city": "Freetown",
      "country": "Sierra Leone",
      "iata_code": "FNA",
      "_geoloc": {
        "latitude": 8.616444,
        "longitude": -13.195489
      },
      "links_count": 44,
      "objectID": "1059"
    },
    {
      "name": "Mianyang Airport",
      "city": "Mianyang",
      "country": "China",
      "iata_code": "MIG",
      "_geoloc": {
        "latitude": 31.4281,
        "longitude": 104.741
      },
      "links_count": 43,
      "objectID": "6400"
    },
    {
      "name": "Santa Genoveva",
      "city": "Goiania",
      "country": "Brazil",
      "iata_code": "GYN",
      "_geoloc": {
        "latitude": -16.632033,
        "longitude": -49.220686
      },
      "links_count": 43,
      "objectID": "2562"
    },
    {
      "name": "St Johns Intl",
      "city": "St. John's",
      "country": "Canada",
      "iata_code": "YYT",
      "_geoloc": {
        "latitude": 47.61861,
        "longitude": -52.751945
      },
      "links_count": 43,
      "objectID": "189"
    },
    {
      "name": "Jerez",
      "city": "Jerez",
      "country": "Spain",
      "iata_code": "XRY",
      "_geoloc": {
        "latitude": 36.744622,
        "longitude": -6.060111
      },
      "links_count": 43,
      "objectID": "1226"
    },
    {
      "name": "Durban Intl",
      "city": "Durban",
      "country": "South Africa",
      "iata_code": "DUR",
      "_geoloc": {
        "latitude": -29.970089,
        "longitude": 30.950519
      },
      "links_count": 42,
      "objectID": "799"
    },
    {
      "name": "Save",
      "city": "Gothenborg",
      "country": "Sweden",
      "iata_code": "GSE",
      "_geoloc": {
        "latitude": 57.774722,
        "longitude": 11.870372
      },
      "links_count": 42,
      "objectID": "691"
    },
    {
      "name": "Lawica",
      "city": "Poznan",
      "country": "Poland",
      "iata_code": "POZ",
      "_geoloc": {
        "latitude": 52.421031,
        "longitude": 16.826325
      },
      "links_count": 42,
      "objectID": "674"
    },
    {
      "name": "Dayong Airport",
      "city": "Dayong",
      "country": "China",
      "iata_code": "DYG",
      "_geoloc": {
        "latitude": 29.1028,
        "longitude": 110.443
      },
      "links_count": 42,
      "objectID": "6353"
    },
    {
      "name": "Prestwick",
      "city": "Prestwick",
      "country": "United Kingdom",
      "iata_code": "PIK",
      "_geoloc": {
        "latitude": 55.509444,
        "longitude": -4.586667
      },
      "links_count": 42,
      "objectID": "537"
    },
    {
      "name": "Belfast City",
      "city": "Belfast",
      "country": "United Kingdom",
      "iata_code": "BHD",
      "_geoloc": {
        "latitude": 54.618056,
        "longitude": -5.8725
      },
      "links_count": 42,
      "objectID": "467"
    },
    {
      "name": "Aktau",
      "city": "Aktau",
      "country": "Kazakhstan",
      "iata_code": "SCO",
      "_geoloc": {
        "latitude": 43.86005,
        "longitude": 51.091978
      },
      "links_count": 42,
      "objectID": "4367"
    },
    {
      "name": "Husein Sastranegara",
      "city": "Bandung",
      "country": "Indonesia",
      "iata_code": "BDO",
      "_geoloc": {
        "latitude": -6.900625,
        "longitude": 107.576294
      },
      "links_count": 42,
      "objectID": "3896"
    },
    {
      "name": "Lihue",
      "city": "Lihue",
      "country": "United States",
      "iata_code": "LIH",
      "_geoloc": {
        "latitude": 21.975983,
        "longitude": -159.338958
      },
      "links_count": 42,
      "objectID": "3602"
    },
    {
      "name": "Pensacola Rgnl",
      "city": "Pensacola",
      "country": "United States",
      "iata_code": "PNS",
      "_geoloc": {
        "latitude": 30.473425,
        "longitude": -87.186611
      },
      "links_count": 42,
      "objectID": "3564"
    },
    {
      "name": "Sam Ratulangi",
      "city": "Manado",
      "country": "Indonesia",
      "iata_code": "MDC",
      "_geoloc": {
        "latitude": 1.549447,
        "longitude": 124.925878
      },
      "links_count": 42,
      "objectID": "3250"
    },
    {
      "name": "Hercilio Luz",
      "city": "Florianopolis",
      "country": "Brazil",
      "iata_code": "FLN",
      "_geoloc": {
        "latitude": -27.670489,
        "longitude": -48.547181
      },
      "links_count": 42,
      "objectID": "2555"
    },
    {
      "name": "Pristina",
      "city": "Pristina",
      "country": "Serbia",
      "iata_code": "PRN",
      "_geoloc": {
        "latitude": 42.572778,
        "longitude": 21.035833
      },
      "links_count": 42,
      "objectID": "1742"
    },
    {
      "name": "Cluj Napoca",
      "city": "Cluj-napoca",
      "country": "Romania",
      "iata_code": "CLJ",
      "_geoloc": {
        "latitude": 46.785167,
        "longitude": 23.686167
      },
      "links_count": 42,
      "objectID": "1652"
    },
    {
      "name": "Aalborg",
      "city": "Aalborg",
      "country": "Denmark",
      "iata_code": "AAL",
      "_geoloc": {
        "latitude": 57.092789,
        "longitude": 9.849164
      },
      "links_count": 41,
      "objectID": "628"
    },
    {
      "name": "Kona Intl At Keahole",
      "city": "Kona",
      "country": "United States",
      "iata_code": "KOA",
      "_geoloc": {
        "latitude": 19.738767,
        "longitude": -156.045631
      },
      "links_count": 41,
      "objectID": "3514"
    },
    {
      "name": "Boise Air Terminal",
      "city": "Boise",
      "country": "United States",
      "iata_code": "BOI",
      "_geoloc": {
        "latitude": 43.564361,
        "longitude": -116.222861
      },
      "links_count": 41,
      "objectID": "3495"
    },
    {
      "name": "Chinggis Khaan Intl",
      "city": "Ulan Bator",
      "country": "Mongolia",
      "iata_code": "ULN",
      "_geoloc": {
        "latitude": 47.843056,
        "longitude": 106.766639
      },
      "links_count": 41,
      "objectID": "3380"
    },
    {
      "name": "Gnassingbe Eyadema Intl",
      "city": "Lome",
      "country": "Togo",
      "iata_code": "LFW",
      "_geoloc": {
        "latitude": 6.165611,
        "longitude": 1.254511
      },
      "links_count": 41,
      "objectID": "298"
    },
    {
      "name": "Kilimanjaro Intl",
      "city": "Kilimanjaro",
      "country": "Tanzania",
      "iata_code": "JRO",
      "_geoloc": {
        "latitude": -3.429406,
        "longitude": 37.074461
      },
      "links_count": 41,
      "objectID": "1180"
    },
    {
      "name": "St Denis Gillot",
      "city": "St.-denis",
      "country": "Reunion",
      "iata_code": "RUN",
      "_geoloc": {
        "latitude": -20.8871,
        "longitude": 55.510308
      },
      "links_count": 40,
      "objectID": "916"
    },
    {
      "name": "Beihai Airport",
      "city": "Beihai",
      "country": "China",
      "iata_code": "BHY",
      "_geoloc": {
        "latitude": 21.5394,
        "longitude": 109.294
      },
      "links_count": 40,
      "objectID": "6351"
    },
    {
      "name": "Baden Airpark",
      "city": "Karlsruhe/Baden-Baden",
      "country": "Germany",
      "iata_code": "FKB",
      "_geoloc": {
        "latitude": 48.7793,
        "longitude": 8.08048
      },
      "links_count": 40,
      "objectID": "4166"
    },
    {
      "name": "Esfahan Shahid Beheshti Intl",
      "city": "Isfahan",
      "country": "Iran",
      "iata_code": "IFN",
      "_geoloc": {
        "latitude": 32.750836,
        "longitude": 51.861267
      },
      "links_count": 40,
      "objectID": "4150"
    },
    {
      "name": "Xuzhou Guanyin Airport",
      "city": "Xuzhou",
      "country": "China",
      "iata_code": "XUZ",
      "_geoloc": {
        "latitude": 34.16,
        "longitude": 117.11
      },
      "links_count": 40,
      "objectID": "4149"
    },
    {
      "name": "Ambouli International Airport",
      "city": "Djibouti",
      "country": "Djibouti",
      "iata_code": "JIB",
      "_geoloc": {
        "latitude": 11.5472,
        "longitude": 43.1594
      },
      "links_count": 40,
      "objectID": "4119"
    },
    {
      "name": "Blue Grass",
      "city": "Lexington KY",
      "country": "United States",
      "iata_code": "LEX",
      "_geoloc": {
        "latitude": 38.0365,
        "longitude": -84.605889
      },
      "links_count": 40,
      "objectID": "4017"
    },
    {
      "name": "Manchester Regional Airport",
      "city": "Manchester NH",
      "country": "United States",
      "iata_code": "MHT",
      "_geoloc": {
        "latitude": 42.932556,
        "longitude": -71.435667
      },
      "links_count": 40,
      "objectID": "4011"
    },
    {
      "name": "Fresno Yosemite Intl",
      "city": "Fresno",
      "country": "United States",
      "iata_code": "FAT",
      "_geoloc": {
        "latitude": 36.776194,
        "longitude": -119.71814
      },
      "links_count": 40,
      "objectID": "3687"
    },
    {
      "name": "Juneau Intl",
      "city": "Juneau",
      "country": "United States",
      "iata_code": "JNU",
      "_geoloc": {
        "latitude": 58.354972,
        "longitude": -134.576278
      },
      "links_count": 40,
      "objectID": "3492"
    },
    {
      "name": "Wichita Mid Continent",
      "city": "Wichita",
      "country": "United States",
      "iata_code": "ICT",
      "_geoloc": {
        "latitude": 37.649944,
        "longitude": -97.433056
      },
      "links_count": 40,
      "objectID": "3457"
    },
    {
      "name": "Balandino",
      "city": "Chelyabinsk",
      "country": "Russia",
      "iata_code": "CEK",
      "_geoloc": {
        "latitude": 55.305836,
        "longitude": 61.503333
      },
      "links_count": 40,
      "objectID": "2968"
    },
    {
      "name": "M R Stefanik",
      "city": "Bratislava",
      "country": "Slovakia",
      "iata_code": "BTS",
      "_geoloc": {
        "latitude": 48.170167,
        "longitude": 17.212667
      },
      "links_count": 40,
      "objectID": "1745"
    },
    {
      "name": "Genova Sestri",
      "city": "Genoa",
      "country": "Italy",
      "iata_code": "GOA",
      "_geoloc": {
        "latitude": 44.413333,
        "longitude": 8.8375
      },
      "links_count": 40,
      "objectID": "1528"
    },
    {
      "name": "Saint Catherine",
      "city": "Calvi",
      "country": "France",
      "iata_code": "CLY",
      "_geoloc": {
        "latitude": 42.530753,
        "longitude": 8.793189
      },
      "links_count": 40,
      "objectID": "1322"
    },
    {
      "name": "Murcia San Javier",
      "city": "Murcia",
      "country": "Spain",
      "iata_code": "MJV",
      "_geoloc": {
        "latitude": 37.774972,
        "longitude": -0.812389
      },
      "links_count": 40,
      "objectID": "1227"
    },
    {
      "name": "Harrisburg Intl",
      "city": "Harrisburg",
      "country": "United States",
      "iata_code": "MDT",
      "_geoloc": {
        "latitude": 40.193494,
        "longitude": -76.763403
      },
      "links_count": 39,
      "objectID": "3542"
    },
    {
      "name": "Del Caribe Intl Gen Santiago Marino",
      "city": "Porlamar",
      "country": "Venezuela",
      "iata_code": "PMV",
      "_geoloc": {
        "latitude": 10.912926,
        "longitude": -63.967581
      },
      "links_count": 39,
      "objectID": "2850"
    },
    {
      "name": "Reus",
      "city": "Reus",
      "country": "Spain",
      "iata_code": "REU",
      "_geoloc": {
        "latitude": 41.147392,
        "longitude": 1.167172
      },
      "links_count": 39,
      "objectID": "1236"
    },
    {
      "name": "Zhanjiang Airport",
      "city": "Zhanjiang",
      "country": "China",
      "iata_code": "ZHA",
      "_geoloc": {
        "latitude": 21.2144,
        "longitude": 110.358
      },
      "links_count": 38,
      "objectID": "6357"
    },
    {
      "name": "Bournemouth",
      "city": "Bournemouth",
      "country": "United Kingdom",
      "iata_code": "BOH",
      "_geoloc": {
        "latitude": 50.78,
        "longitude": -1.8425
      },
      "links_count": 38,
      "objectID": "494"
    },
    {
      "name": "Yaounde Nsimalen",
      "city": "Yaounde",
      "country": "Cameroon",
      "iata_code": "NSI",
      "_geoloc": {
        "latitude": 3.722556,
        "longitude": 11.553269
      },
      "links_count": 38,
      "objectID": "4161"
    },
    {
      "name": "Windhoek Hosea Kutako International Airport ",
      "city": "Windhoek",
      "country": "Namibia",
      "iata_code": "WDH",
      "_geoloc": {
        "latitude": -22.486667,
        "longitude": 17.4625
      },
      "links_count": 38,
      "objectID": "4105"
    },
    {
      "name": "Kaunas Intl",
      "city": "Kaunas",
      "country": "Lithuania",
      "iata_code": "KUN",
      "_geoloc": {
        "latitude": 54.963919,
        "longitude": 24.084778
      },
      "links_count": 38,
      "objectID": "3956"
    },
    {
      "name": "Leite Lopes",
      "city": "Ribeirao Preto",
      "country": "Brazil",
      "iata_code": "RAO",
      "_geoloc": {
        "latitude": -21.134167,
        "longitude": -47.774189
      },
      "links_count": 38,
      "objectID": "2613"
    },
    {
      "name": "Bandar Abbass Intl",
      "city": "Bandar Abbas",
      "country": "Iran",
      "iata_code": "BND",
      "_geoloc": {
        "latitude": 27.218317,
        "longitude": 56.37785
      },
      "links_count": 38,
      "objectID": "2134"
    },
    {
      "name": "Graz",
      "city": "Graz",
      "country": "Austria",
      "iata_code": "GRZ",
      "_geoloc": {
        "latitude": 46.991067,
        "longitude": 15.439628
      },
      "links_count": 38,
      "objectID": "1609"
    },
    {
      "name": "Santander",
      "city": "Santander",
      "country": "Spain",
      "iata_code": "SDR",
      "_geoloc": {
        "latitude": 43.427064,
        "longitude": -3.820006
      },
      "links_count": 38,
      "objectID": "1251"
    },
    {
      "name": "Ibn Batouta",
      "city": "Tanger",
      "country": "Morocco",
      "iata_code": "TNG",
      "_geoloc": {
        "latitude": 35.726917,
        "longitude": -5.916889
      },
      "links_count": 38,
      "objectID": "1080"
    },
    {
      "name": "Odesa Intl",
      "city": "Odessa",
      "country": "Ukraine",
      "iata_code": "ODS",
      "_geoloc": {
        "latitude": 46.426767,
        "longitude": 30.676464
      },
      "links_count": 37,
      "objectID": "2947"
    },
    {
      "name": "Hewanorra Intl",
      "city": "Hewandorra",
      "country": "Saint Lucia",
      "iata_code": "UVF",
      "_geoloc": {
        "latitude": 13.733194,
        "longitude": -60.952597
      },
      "links_count": 37,
      "objectID": "2894"
    },
    {
      "name": "Nairobi Wilson",
      "city": "Nairobi",
      "country": "Kenya",
      "iata_code": "WIL",
      "_geoloc": {
        "latitude": -1.321719,
        "longitude": 36.814833
      },
      "links_count": 37,
      "objectID": "1147"
    },
    {
      "name": "Yangzhou Taizhou Airport",
      "city": "Yangzhou",
      "country": "China",
      "iata_code": "YTY",
      "_geoloc": {
        "latitude": 32.5617,
        "longitude": 119.715
      },
      "links_count": 36,
      "objectID": "8876"
    },
    {
      "name": "Pointe Noire",
      "city": "Pointe-noire",
      "country": "Congo (Brazzaville)",
      "iata_code": "PNR",
      "_geoloc": {
        "latitude": -4.816028,
        "longitude": 11.886597
      },
      "links_count": 36,
      "objectID": "886"
    },
    {
      "name": "Yiwu Airport",
      "city": "Yiwu",
      "country": "China",
      "iata_code": "YIW",
      "_geoloc": {
        "latitude": 29.3447,
        "longitude": 120.032
      },
      "links_count": 36,
      "objectID": "6394"
    },
    {
      "name": "Shubuling Airport",
      "city": "Linyi",
      "country": "China",
      "iata_code": "LYI",
      "_geoloc": {
        "latitude": 35.0461,
        "longitude": 118.412
      },
      "links_count": 36,
      "objectID": "6385"
    },
    {
      "name": "El Aroui Airport",
      "city": "El Aroui",
      "country": "Morocco",
      "iata_code": "NDR",
      "_geoloc": {
        "latitude": 34.9888,
        "longitude": -3.02821
      },
      "links_count": 36,
      "objectID": "5673"
    },
    {
      "name": "Iqaluit",
      "city": "Iqaluit",
      "country": "Canada",
      "iata_code": "YFB",
      "_geoloc": {
        "latitude": 63.75639,
        "longitude": -68.555832
      },
      "links_count": 36,
      "objectID": "55"
    },
    {
      "name": "Nantong Airport",
      "city": "Nantong",
      "country": "China",
      "iata_code": "NTG",
      "_geoloc": {
        "latitude": 32.0708,
        "longitude": 120.976
      },
      "links_count": 36,
      "objectID": "5475"
    },
    {
      "name": "Guernsey",
      "city": "Guernsey",
      "country": "Guernsey",
      "iata_code": "GCI",
      "_geoloc": {
        "latitude": 49.434956,
        "longitude": -2.601969
      },
      "links_count": 36,
      "objectID": "498"
    },
    {
      "name": "Nizhny Novgorod",
      "city": "Nizhniy Novgorod",
      "country": "Russia",
      "iata_code": "GOJ",
      "_geoloc": {
        "latitude": 56.230119,
        "longitude": 43.784042
      },
      "links_count": 36,
      "objectID": "4274"
    },
    {
      "name": "Conakry",
      "city": "Conakry",
      "country": "Guinea",
      "iata_code": "CKY",
      "_geoloc": {
        "latitude": 9.576889,
        "longitude": -13.611961
      },
      "links_count": 36,
      "objectID": "4162"
    },
    {
      "name": "Huntsville International Airport-Carl T Jones Field",
      "city": "Huntsville",
      "country": "United States",
      "iata_code": "HSV",
      "_geoloc": {
        "latitude": 34.6371944,
        "longitude": -86.7750556
      },
      "links_count": 36,
      "objectID": "4113"
    },
    {
      "name": "Bob Hope",
      "city": "Burbank",
      "country": "United States",
      "iata_code": "BUR",
      "_geoloc": {
        "latitude": 34.200667,
        "longitude": -118.358667
      },
      "links_count": 36,
      "objectID": "3644"
    },
    {
      "name": "Long Beach",
      "city": "Long Beach",
      "country": "United States",
      "iata_code": "LGB",
      "_geoloc": {
        "latitude": 33.817722,
        "longitude": -118.151611
      },
      "links_count": 36,
      "objectID": "3582"
    },
    {
      "name": "Jackson Evers Intl",
      "city": "Jackson",
      "country": "United States",
      "iata_code": "JAN",
      "_geoloc": {
        "latitude": 32.311167,
        "longitude": -90.075889
      },
      "links_count": 36,
      "objectID": "3580"
    },
    {
      "name": "Dongshan",
      "city": "Hailar",
      "country": "China",
      "iata_code": "HLD",
      "_geoloc": {
        "latitude": 49.204997,
        "longitude": 119.825
      },
      "links_count": 36,
      "objectID": "3366"
    },
    {
      "name": "Sultan Ismail",
      "city": "Johor Bahru",
      "country": "Malaysia",
      "iata_code": "JHB",
      "_geoloc": {
        "latitude": 1.641308,
        "longitude": 103.669619
      },
      "links_count": 36,
      "objectID": "3303"
    },
    {
      "name": "Sultan Syarif Kasim Ii",
      "city": "Pekanbaru",
      "country": "Indonesia",
      "iata_code": "PKU",
      "_geoloc": {
        "latitude": 0.460786,
        "longitude": 101.444539
      },
      "links_count": 36,
      "objectID": "3273"
    },
    {
      "name": "Samui",
      "city": "Ko Samui",
      "country": "Thailand",
      "iata_code": "USM",
      "_geoloc": {
        "latitude": 9.547794,
        "longitude": 100.062272
      },
      "links_count": 36,
      "objectID": "3177"
    },
    {
      "name": "Lucknow",
      "city": "Lucknow",
      "country": "India",
      "iata_code": "LKO",
      "_geoloc": {
        "latitude": 26.760594,
        "longitude": 80.889339
      },
      "links_count": 36,
      "objectID": "3105"
    },
    {
      "name": "Vishakhapatnam",
      "city": "Vishakhapatnam",
      "country": "India",
      "iata_code": "VTZ",
      "_geoloc": {
        "latitude": 17.721167,
        "longitude": 83.224483
      },
      "links_count": 36,
      "objectID": "3066"
    },
    {
      "name": "Silvio Pettirossi Intl",
      "city": "Asuncion",
      "country": "Paraguay",
      "iata_code": "ASU",
      "_geoloc": {
        "latitude": -25.23985,
        "longitude": -57.519133
      },
      "links_count": 36,
      "objectID": "2699"
    },
    {
      "name": "Kalibo",
      "city": "Kalibo",
      "country": "Philippines",
      "iata_code": "KLO",
      "_geoloc": {
        "latitude": 11.679431,
        "longitude": 122.376294
      },
      "links_count": 36,
      "objectID": "2430"
    },
    {
      "name": "Kagoshima",
      "city": "Kagoshima",
      "country": "Japan",
      "iata_code": "KOJ",
      "_geoloc": {
        "latitude": 31.803397,
        "longitude": 130.719408
      },
      "links_count": 36,
      "objectID": "2307"
    },
    {
      "name": "Toncontin Intl",
      "city": "Tegucigalpa",
      "country": "Honduras",
      "iata_code": "TGU",
      "_geoloc": {
        "latitude": 14.060883,
        "longitude": -87.217197
      },
      "links_count": 36,
      "objectID": "1776"
    },
    {
      "name": "Almeria",
      "city": "Almeria",
      "country": "Spain",
      "iata_code": "LEI",
      "_geoloc": {
        "latitude": 36.843936,
        "longitude": -2.370097
      },
      "links_count": 36,
      "objectID": "1213"
    },
    {
      "name": "Saiss",
      "city": "Fes",
      "country": "Morocco",
      "iata_code": "FEZ",
      "_geoloc": {
        "latitude": 33.927261,
        "longitude": -4.977958
      },
      "links_count": 36,
      "objectID": "1066"
    },
    {
      "name": "Charlotte County-Punta Gorda Airport",
      "city": "Punta Gorda",
      "country": "United States",
      "iata_code": "PGD",
      "_geoloc": {
        "latitude": 26.919722,
        "longitude": -81.990556
      },
      "links_count": 35,
      "objectID": "7056"
    },
    {
      "name": "Bodo",
      "city": "Bodo",
      "country": "Norway",
      "iata_code": "BOO",
      "_geoloc": {
        "latitude": 67.269167,
        "longitude": 14.365278
      },
      "links_count": 35,
      "objectID": "635"
    },
    {
      "name": "Cedar Rapids",
      "city": "Cedar Rapids",
      "country": "United States",
      "iata_code": "CID",
      "_geoloc": {
        "latitude": 41.884694,
        "longitude": -91.710806
      },
      "links_count": 35,
      "objectID": "4043"
    },
    {
      "name": "Sentani",
      "city": "Jayapura",
      "country": "Indonesia",
      "iata_code": "DJJ",
      "_geoloc": {
        "latitude": -2.576953,
        "longitude": 140.516372
      },
      "links_count": 35,
      "objectID": "3244"
    },
    {
      "name": "Melville Hall",
      "city": "Dominica",
      "country": "Dominica",
      "iata_code": "DOM",
      "_geoloc": {
        "latitude": 15.547028,
        "longitude": -61.3
      },
      "links_count": 35,
      "objectID": "2877"
    },
    {
      "name": "Amilcar Cabral Intl",
      "city": "Amilcar Cabral",
      "country": "Cape Verde",
      "iata_code": "SID",
      "_geoloc": {
        "latitude": 16.741389,
        "longitude": -22.949444
      },
      "links_count": 35,
      "objectID": "1102"
    },
    {
      "name": "Maputo",
      "city": "Maputo",
      "country": "Mozambique",
      "iata_code": "MPM",
      "_geoloc": {
        "latitude": -25.920836,
        "longitude": 32.572606
      },
      "links_count": 34,
      "objectID": "979"
    },
    {
      "name": "Yancheng Airport",
      "city": "Yancheng",
      "country": "China",
      "iata_code": "YNZ",
      "_geoloc": {
        "latitude": 33.3856,
        "longitude": 120.125
      },
      "links_count": 34,
      "objectID": "6393"
    },
    {
      "name": "Praia International Airport",
      "city": "Praia",
      "country": "Santiago Island",
      "iata_code": "RAI",
      "_geoloc": {
        "latitude": 0.0,
        "longitude": 14.9245
      },
      "links_count": 34,
      "objectID": "5674"
    },
    {
      "name": "Achmad Yani",
      "city": "Semarang",
      "country": "Indonesia",
      "iata_code": "SRG",
      "_geoloc": {
        "latitude": -6.971447,
        "longitude": 110.374122
      },
      "links_count": 34,
      "objectID": "3901"
    },
    {
      "name": "Columbia Metropolitan",
      "city": "Columbia",
      "country": "United States",
      "iata_code": "CAE",
      "_geoloc": {
        "latitude": 33.938833,
        "longitude": -81.119528
      },
      "links_count": 34,
      "objectID": "3561"
    },
    {
      "name": "Dane Co Rgnl Truax Fld",
      "city": "Madison",
      "country": "United States",
      "iata_code": "MSN",
      "_geoloc": {
        "latitude": 43.139858,
        "longitude": -89.337514
      },
      "links_count": 34,
      "objectID": "3459"
    },
    {
      "name": "Langkawi Intl",
      "city": "Pulau",
      "country": "Malaysia",
      "iata_code": "LGK",
      "_geoloc": {
        "latitude": 6.329728,
        "longitude": 99.728667
      },
      "links_count": 34,
      "objectID": "3305"
    },
    {
      "name": "Coimbatore",
      "city": "Coimbatore",
      "country": "India",
      "iata_code": "CJB",
      "_geoloc": {
        "latitude": 11.030031,
        "longitude": 77.043383
      },
      "links_count": 34,
      "objectID": "3135"
    },
    {
      "name": "Jaipur",
      "city": "Jaipur",
      "country": "India",
      "iata_code": "JAI",
      "_geoloc": {
        "latitude": 26.824192,
        "longitude": 75.812161
      },
      "links_count": 34,
      "objectID": "3098"
    },
    {
      "name": "Omsk",
      "city": "Omsk",
      "country": "Russia",
      "iata_code": "OMS",
      "_geoloc": {
        "latitude": 54.967042,
        "longitude": 73.310514
      },
      "links_count": 34,
      "objectID": "2958"
    },
    {
      "name": "Lviv Intl",
      "city": "Lvov",
      "country": "Ukraine",
      "iata_code": "LWO",
      "_geoloc": {
        "latitude": 49.8125,
        "longitude": 23.956111
      },
      "links_count": 34,
      "objectID": "2945"
    },
    {
      "name": "Diori Hamani",
      "city": "Niamey",
      "country": "Niger",
      "iata_code": "NIM",
      "_geoloc": {
        "latitude": 13.481547,
        "longitude": 2.183614
      },
      "links_count": 34,
      "objectID": "280"
    },
    {
      "name": "Campo Grande",
      "city": "Campo Grande",
      "country": "Brazil",
      "iata_code": "CGR",
      "_geoloc": {
        "latitude": -20.468667,
        "longitude": -54.6725
      },
      "links_count": 34,
      "objectID": "2538"
    },
    {
      "name": "Hiroshima",
      "city": "Hiroshima",
      "country": "Japan",
      "iata_code": "HIJ",
      "_geoloc": {
        "latitude": 34.436111,
        "longitude": 132.919444
      },
      "links_count": 34,
      "objectID": "2326"
    },
    {
      "name": "Komatsu",
      "city": "Kanazawa",
      "country": "Japan",
      "iata_code": "KMQ",
      "_geoloc": {
        "latitude": 36.394611,
        "longitude": 136.406544
      },
      "links_count": 34,
      "objectID": "2322"
    },
    {
      "name": "Nagasaki",
      "city": "Nagasaki",
      "country": "Japan",
      "iata_code": "NGS",
      "_geoloc": {
        "latitude": 32.916944,
        "longitude": 129.913611
      },
      "links_count": 34,
      "objectID": "2313"
    },
    {
      "name": "Sioux Lookout",
      "city": "Sioux Lookout",
      "country": "Canada",
      "iata_code": "YXL",
      "_geoloc": {
        "latitude": 50.113889,
        "longitude": -91.905278
      },
      "links_count": 34,
      "objectID": "169"
    },
    {
      "name": "Adana",
      "city": "Adana",
      "country": "Turkey",
      "iata_code": "ADA",
      "_geoloc": {
        "latitude": 36.982166,
        "longitude": 35.280388
      },
      "links_count": 34,
      "objectID": "1685"
    },
    {
      "name": "Guipavas",
      "city": "Brest",
      "country": "France",
      "iata_code": "BES",
      "_geoloc": {
        "latitude": 48.447911,
        "longitude": -4.418539
      },
      "links_count": 34,
      "objectID": "1403"
    },
    {
      "name": "Asturias",
      "city": "Aviles",
      "country": "Spain",
      "iata_code": "OVD",
      "_geoloc": {
        "latitude": 43.563567,
        "longitude": -6.034622
      },
      "links_count": 34,
      "objectID": "1214"
    },
    {
      "name": "Key West Intl",
      "city": "Key West",
      "country": "United States",
      "iata_code": "EYW",
      "_geoloc": {
        "latitude": 24.556111,
        "longitude": -81.759556
      },
      "links_count": 33,
      "objectID": "3875"
    },
    {
      "name": "Long Island Mac Arthur",
      "city": "Islip",
      "country": "United States",
      "iata_code": "ISP",
      "_geoloc": {
        "latitude": 40.79525,
        "longitude": -73.100222
      },
      "links_count": 33,
      "objectID": "3857"
    },
    {
      "name": "Mandalay Intl",
      "city": "Mandalay",
      "country": "Burma",
      "iata_code": "MDL",
      "_geoloc": {
        "latitude": 21.702156,
        "longitude": 95.977928
      },
      "links_count": 33,
      "objectID": "3222"
    },
    {
      "name": "Khomutovo",
      "city": "Yuzhno-sakhalinsk",
      "country": "Russia",
      "iata_code": "UUS",
      "_geoloc": {
        "latitude": 46.888672,
        "longitude": 142.717531
      },
      "links_count": 33,
      "objectID": "2933"
    },
    {
      "name": "Kish Island",
      "city": "Kish Island",
      "country": "Iran",
      "iata_code": "KIH",
      "_geoloc": {
        "latitude": 26.526156,
        "longitude": 53.980211
      },
      "links_count": 33,
      "objectID": "2109"
    },
    {
      "name": "General R Fierro Villalobos Intl",
      "city": "Chihuahua",
      "country": "Mexico",
      "iata_code": "CUU",
      "_geoloc": {
        "latitude": 28.702875,
        "longitude": -105.964567
      },
      "links_count": 33,
      "objectID": "1797"
    },
    {
      "name": "Dionysios Solomos",
      "city": "Zakynthos",
      "country": "Greece",
      "iata_code": "ZTH",
      "_geoloc": {
        "latitude": 37.750853,
        "longitude": 20.88425
      },
      "links_count": 33,
      "objectID": "1488"
    },
    {
      "name": "Regina Intl",
      "city": "Regina",
      "country": "Canada",
      "iata_code": "YQR",
      "_geoloc": {
        "latitude": 50.431944,
        "longitude": -104.665833
      },
      "links_count": 33,
      "objectID": "120"
    },
    {
      "name": "Lombok International Airport",
      "city": "Praya",
      "country": "Indonesia",
      "iata_code": "LOP",
      "_geoloc": {
        "latitude": -8.7573222,
        "longitude": 116.276675
      },
      "links_count": 32,
      "objectID": "8401"
    },
    {
      "name": "Sturup",
      "city": "Malmoe",
      "country": "Sweden",
      "iata_code": "MMX",
      "_geoloc": {
        "latitude": 55.530193,
        "longitude": 13.371639
      },
      "links_count": 32,
      "objectID": "708"
    },
    {
      "name": "Lianyungang Airport",
      "city": "Lianyungang",
      "country": "China",
      "iata_code": "LYG",
      "_geoloc": {
        "latitude": 34.55,
        "longitude": 119.25
      },
      "links_count": 32,
      "objectID": "6383"
    },
    {
      "name": "Jingdezhen Airport",
      "city": "Jingdezhen",
      "country": "China",
      "iata_code": "JDZ",
      "_geoloc": {
        "latitude": 29.3386,
        "longitude": 117.176
      },
      "links_count": 32,
      "objectID": "6380"
    },
    {
      "name": "Changzhi Airport",
      "city": "Changzhi",
      "country": "China",
      "iata_code": "CIH",
      "_geoloc": {
        "latitude": 36.2475,
        "longitude": 113.126
      },
      "links_count": 32,
      "objectID": "6343"
    },
    {
      "name": "Niigata",
      "city": "Niigata",
      "country": "Japan",
      "iata_code": "KIJ",
      "_geoloc": {
        "latitude": 37.5711,
        "longitude": 139.0646
      },
      "links_count": 32,
      "objectID": "4381"
    },
    {
      "name": "Novyi Urengoy",
      "city": "Novy Urengoy",
      "country": "Russia",
      "iata_code": "NUX",
      "_geoloc": {
        "latitude": 66.041811,
        "longitude": 76.313938
      },
      "links_count": 32,
      "objectID": "4364"
    },
    {
      "name": "Jiuzhaigou Huanglong",
      "city": "Jiuzhaigou",
      "country": "China",
      "iata_code": "JZH",
      "_geoloc": {
        "latitude": 32.857,
        "longitude": 103.683
      },
      "links_count": 32,
      "objectID": "4301"
    },
    {
      "name": "Fort Wayne",
      "city": "Fort Wayne",
      "country": "United States",
      "iata_code": "FWA",
      "_geoloc": {
        "latitude": 40.978472,
        "longitude": -85.195139
      },
      "links_count": 32,
      "objectID": "4041"
    },
    {
      "name": "Lovell Fld",
      "city": "Chattanooga",
      "country": "United States",
      "iata_code": "CHA",
      "_geoloc": {
        "latitude": 35.035278,
        "longitude": -85.203808
      },
      "links_count": 32,
      "objectID": "3578"
    },
    {
      "name": "Townsville",
      "city": "Townsville",
      "country": "Australia",
      "iata_code": "TSV",
      "_geoloc": {
        "latitude": -19.2525,
        "longitude": 146.765278
      },
      "links_count": 32,
      "objectID": "3330"
    },
    {
      "name": "Krabi",
      "city": "Krabi",
      "country": "Thailand",
      "iata_code": "KBV",
      "_geoloc": {
        "latitude": 8.095969,
        "longitude": 98.988764
      },
      "links_count": 32,
      "objectID": "3174"
    },
    {
      "name": "Shah Amanat Intl",
      "city": "Chittagong",
      "country": "Bangladesh",
      "iata_code": "CGP",
      "_geoloc": {
        "latitude": 22.249611,
        "longitude": 91.813286
      },
      "links_count": 32,
      "objectID": "3069"
    },
    {
      "name": "Bagdogra",
      "city": "Baghdogra",
      "country": "India",
      "iata_code": "IXB",
      "_geoloc": {
        "latitude": 26.681206,
        "longitude": 88.328567
      },
      "links_count": 32,
      "objectID": "3040"
    },
    {
      "name": "Devi Ahilyabai Holkar",
      "city": "Indore",
      "country": "India",
      "iata_code": "IDR",
      "_geoloc": {
        "latitude": 22.721786,
        "longitude": 75.801086
      },
      "links_count": 32,
      "objectID": "3008"
    },
    {
      "name": "Goiabeiras",
      "city": "Vitoria",
      "country": "Brazil",
      "iata_code": "VIX",
      "_geoloc": {
        "latitude": -20.258056,
        "longitude": -40.286389
      },
      "links_count": 32,
      "objectID": "2638"
    },
    {
      "name": "Augusto Severo",
      "city": "Natal",
      "country": "Brazil",
      "iata_code": "NAT",
      "_geoloc": {
        "latitude": -5.911417,
        "longitude": -35.247717
      },
      "links_count": 32,
      "objectID": "2597"
    },
    {
      "name": "Mohamed Boudiaf Intl",
      "city": "Constantine",
      "country": "Algeria",
      "iata_code": "CZL",
      "_geoloc": {
        "latitude": 36.276028,
        "longitude": 6.620386
      },
      "links_count": 32,
      "objectID": "221"
    },
    {
      "name": "General Heriberto Jara Intl",
      "city": "Vera Cruz",
      "country": "Mexico",
      "iata_code": "VER",
      "_geoloc": {
        "latitude": 19.145931,
        "longitude": -96.187267
      },
      "links_count": 32,
      "objectID": "1854"
    },
    {
      "name": "Cozumel Intl",
      "city": "Cozumel",
      "country": "Mexico",
      "iata_code": "CZM",
      "_geoloc": {
        "latitude": 20.522403,
        "longitude": -86.925644
      },
      "links_count": 32,
      "objectID": "1800"
    },
    {
      "name": "Culiacan Intl",
      "city": "Culiacan",
      "country": "Mexico",
      "iata_code": "CUL",
      "_geoloc": {
        "latitude": 24.764547,
        "longitude": -107.474717
      },
      "links_count": 32,
      "objectID": "1792"
    },
    {
      "name": "Podgorica",
      "city": "Podgorica",
      "country": "Montenegro",
      "iata_code": "TGD",
      "_geoloc": {
        "latitude": 42.359392,
        "longitude": 19.251894
      },
      "links_count": 32,
      "objectID": "1741"
    },
    {
      "name": "Sarajevo",
      "city": "Sarajevo",
      "country": "Bosnia and Herzegovina",
      "iata_code": "SJJ",
      "_geoloc": {
        "latitude": 43.824583,
        "longitude": 18.331467
      },
      "links_count": 32,
      "objectID": "1646"
    },
    {
      "name": "Monrovia Roberts Intl",
      "city": "Monrovia",
      "country": "Liberia",
      "iata_code": "ROB",
      "_geoloc": {
        "latitude": 6.233789,
        "longitude": -10.362311
      },
      "links_count": 32,
      "objectID": "1063"
    },
    {
      "name": "Mangalore",
      "city": "Mangalore",
      "country": "India",
      "iata_code": "IXE",
      "_geoloc": {
        "latitude": 12.961267,
        "longitude": 74.890069
      },
      "links_count": 31,
      "objectID": "3143"
    },
    {
      "name": "Habib Bourguiba Intl",
      "city": "Monastir",
      "country": "Tunisia",
      "iata_code": "MIR",
      "_geoloc": {
        "latitude": 35.758056,
        "longitude": 10.754722
      },
      "links_count": 31,
      "objectID": "286"
    },
    {
      "name": "Marechal Cunha Machado Intl",
      "city": "Sao Luis",
      "country": "Brazil",
      "iata_code": "SLZ",
      "_geoloc": {
        "latitude": -2.585361,
        "longitude": -44.234139
      },
      "links_count": 31,
      "objectID": "2616"
    },
    {
      "name": "Wabush",
      "city": "Wabush",
      "country": "Canada",
      "iata_code": "YWK",
      "_geoloc": {
        "latitude": 52.921944,
        "longitude": -66.864444
      },
      "links_count": 31,
      "objectID": "161"
    },
    {
      "name": "Santorini",
      "city": "Thira",
      "country": "Greece",
      "iata_code": "JTR",
      "_geoloc": {
        "latitude": 36.399169,
        "longitude": 25.479333
      },
      "links_count": 31,
      "objectID": "1479"
    },
    {
      "name": "Dzaoudzi Pamandzi",
      "city": "Dzaoudzi",
      "country": "Mayotte",
      "iata_code": "DZA",
      "_geoloc": {
        "latitude": -12.804722,
        "longitude": 45.281113
      },
      "links_count": 30,
      "objectID": "915"
    },
    {
      "name": "Kelowna",
      "city": "Kelowna",
      "country": "Canada",
      "iata_code": "YLW",
      "_geoloc": {
        "latitude": 49.956112,
        "longitude": -119.377778
      },
      "links_count": 30,
      "objectID": "87"
    },
    {
      "name": "Nanping Wuyishan Airport",
      "city": "Wuyishan",
      "country": "China",
      "iata_code": "WUS",
      "_geoloc": {
        "latitude": 27.7019,
        "longitude": 118.001
      },
      "links_count": 30,
      "objectID": "6391"
    },
    {
      "name": "Chifeng Airport",
      "city": "Chifeng",
      "country": "China",
      "iata_code": "CIF",
      "_geoloc": {
        "latitude": 42.235,
        "longitude": 118.908
      },
      "links_count": 30,
      "objectID": "6342"
    },
    {
      "name": "Ireland West Knock",
      "city": "Connaught",
      "country": "Ireland",
      "iata_code": "NOC",
      "_geoloc": {
        "latitude": 53.910297,
        "longitude": -8.818492
      },
      "links_count": 30,
      "objectID": "600"
    },
    {
      "name": "Quad City Intl",
      "city": "Moline",
      "country": "United States",
      "iata_code": "MLI",
      "_geoloc": {
        "latitude": 41.448528,
        "longitude": -90.507539
      },
      "links_count": 30,
      "objectID": "4072"
    },
    {
      "name": "Bermuda Intl",
      "city": "Bermuda",
      "country": "Bermuda",
      "iata_code": "BDA",
      "_geoloc": {
        "latitude": 32.364042,
        "longitude": -64.678703
      },
      "links_count": 30,
      "objectID": "4069"
    },
    {
      "name": "Peoria Regional",
      "city": "Peoria",
      "country": "United States",
      "iata_code": "PIA",
      "_geoloc": {
        "latitude": 40.664203,
        "longitude": -89.693258
      },
      "links_count": 30,
      "objectID": "4046"
    },
    {
      "name": "Roanoke Regional",
      "city": "Roanoke VA",
      "country": "United States",
      "iata_code": "ROA",
      "_geoloc": {
        "latitude": 37.325472,
        "longitude": -79.975417
      },
      "links_count": 30,
      "objectID": "4016"
    },
    {
      "name": "Tallahassee Rgnl",
      "city": "Tallahassee",
      "country": "United States",
      "iata_code": "TLH",
      "_geoloc": {
        "latitude": 30.396528,
        "longitude": -84.350333
      },
      "links_count": 30,
      "objectID": "3698"
    },
    {
      "name": "Spokane Intl",
      "city": "Spokane",
      "country": "United States",
      "iata_code": "GEG",
      "_geoloc": {
        "latitude": 47.619861,
        "longitude": -117.533833
      },
      "links_count": 30,
      "objectID": "3467"
    },
    {
      "name": "Dr Ambedkar Intl",
      "city": "Nagpur",
      "country": "India",
      "iata_code": "NAG",
      "_geoloc": {
        "latitude": 21.092192,
        "longitude": 79.047183
      },
      "links_count": 30,
      "objectID": "3015"
    },
    {
      "name": "Ashgabat",
      "city": "Ashkhabad",
      "country": "Turkmenistan",
      "iata_code": "ASB",
      "_geoloc": {
        "latitude": 37.986814,
        "longitude": 58.360967
      },
      "links_count": 30,
      "objectID": "2976"
    },
    {
      "name": "Khrabrovo",
      "city": "Kaliningrad",
      "country": "Russia",
      "iata_code": "KGD",
      "_geoloc": {
        "latitude": 54.89005,
        "longitude": 20.592633
      },
      "links_count": 30,
      "objectID": "2952"
    },
    {
      "name": "Donetsk Intl",
      "city": "Donetsk",
      "country": "Ukraine",
      "iata_code": "DOK",
      "_geoloc": {
        "latitude": 48.073611,
        "longitude": 37.739722
      },
      "links_count": 30,
      "objectID": "2940"
    },
    {
      "name": "Ten Cel Av Cesar Bombonato",
      "city": "Uberlandia",
      "country": "Brazil",
      "iata_code": "UDI",
      "_geoloc": {
        "latitude": -18.882844,
        "longitude": -48.225594
      },
      "links_count": 30,
      "objectID": "2633"
    },
    {
      "name": "Tabriz Intl",
      "city": "Tabriz",
      "country": "Iran",
      "iata_code": "TBZ",
      "_geoloc": {
        "latitude": 38.133889,
        "longitude": 46.235
      },
      "links_count": 30,
      "objectID": "2162"
    },
    {
      "name": "Grand Bahama Intl",
      "city": "Freeport",
      "country": "Bahamas",
      "iata_code": "FPO",
      "_geoloc": {
        "latitude": 26.558686,
        "longitude": -78.695553
      },
      "links_count": 30,
      "objectID": "1948"
    },
    {
      "name": "Goose Bay",
      "city": "Goose Bay",
      "country": "Canada",
      "iata_code": "YYR",
      "_geoloc": {
        "latitude": 53.319168,
        "longitude": -60.425833
      },
      "links_count": 30,
      "objectID": "188"
    },
    {
      "name": "General Rafael Buelna Intl",
      "city": "Mazatlan",
      "country": "Mexico",
      "iata_code": "MZT",
      "_geoloc": {
        "latitude": 23.161356,
        "longitude": -106.266072
      },
      "links_count": 30,
      "objectID": "1826"
    },
    {
      "name": "Licenciado Manuel Crescencio Rejon Int",
      "city": "Merida",
      "country": "Mexico",
      "iata_code": "MID",
      "_geoloc": {
        "latitude": 20.936981,
        "longitude": -89.657672
      },
      "links_count": 30,
      "objectID": "1819"
    },
    {
      "name": "Saskatoon J G Diefenbaker Intl",
      "city": "Saskatoon",
      "country": "Canada",
      "iata_code": "YXE",
      "_geoloc": {
        "latitude": 52.170834,
        "longitude": -106.699722
      },
      "links_count": 30,
      "objectID": "166"
    },
    {
      "name": "Pula",
      "city": "Pula",
      "country": "Croatia",
      "iata_code": "PUY",
      "_geoloc": {
        "latitude": 44.893533,
        "longitude": 13.922192
      },
      "links_count": 30,
      "objectID": "1203"
    },
    {
      "name": "Alykel",
      "city": "Norilsk",
      "country": "Russia",
      "iata_code": "NSK",
      "_geoloc": {
        "latitude": 69.311053,
        "longitude": 87.332183
      },
      "links_count": 29,
      "objectID": "4352"
    },
    {
      "name": "Syamsudin Noor",
      "city": "Banjarmasin",
      "country": "Indonesia",
      "iata_code": "BDJ",
      "_geoloc": {
        "latitude": -3.442356,
        "longitude": 114.762553
      },
      "links_count": 29,
      "objectID": "3908"
    },
    {
      "name": "Srinagar",
      "city": "Srinagar",
      "country": "India",
      "iata_code": "SXR",
      "_geoloc": {
        "latitude": 33.987139,
        "longitude": 74.77425
      },
      "links_count": 29,
      "objectID": "3112"
    },
    {
      "name": "Point Salines Intl",
      "city": "Point Salines",
      "country": "Grenada",
      "iata_code": "GND",
      "_geoloc": {
        "latitude": 12.004247,
        "longitude": -61.786192
      },
      "links_count": 29,
      "objectID": "2882"
    },
    {
      "name": "Abha",
      "city": "Abha",
      "country": "Saudi Arabia",
      "iata_code": "AHB",
      "_geoloc": {
        "latitude": 18.240367,
        "longitude": 42.656625
      },
      "links_count": 29,
      "objectID": "2059"
    },
    {
      "name": "Managua Intl",
      "city": "Managua",
      "country": "Nicaragua",
      "iata_code": "MGA",
      "_geoloc": {
        "latitude": 12.141494,
        "longitude": -86.168178
      },
      "links_count": 29,
      "objectID": "1863"
    },
    {
      "name": "Guanajuato Intl",
      "city": "Del Bajio",
      "country": "Mexico",
      "iata_code": "BJX",
      "_geoloc": {
        "latitude": 20.993464,
        "longitude": -101.480847
      },
      "links_count": 29,
      "objectID": "1815"
    },
    {
      "name": "Gregorio Luperon Intl",
      "city": "Puerto Plata",
      "country": "Dominican Republic",
      "iata_code": "POP",
      "_geoloc": {
        "latitude": 19.7579,
        "longitude": -70.570033
      },
      "links_count": 29,
      "objectID": "1761"
    },
    {
      "name": "Malabo",
      "city": "Malabo",
      "country": "Equatorial Guinea",
      "iata_code": "SSG",
      "_geoloc": {
        "latitude": 3.755267,
        "longitude": 8.708717
      },
      "links_count": 28,
      "objectID": "891"
    },
    {
      "name": "Yanji Airport",
      "city": "Yanji",
      "country": "China",
      "iata_code": "YNJ",
      "_geoloc": {
        "latitude": 42.8828,
        "longitude": 129.451258
      },
      "links_count": 28,
      "objectID": "6414"
    },
    {
      "name": "Huangyan Luqiao Airport",
      "city": "Huangyan",
      "country": "China",
      "iata_code": "HYN",
      "_geoloc": {
        "latitude": 28.5622,
        "longitude": 121.429
      },
      "links_count": 28,
      "objectID": "6384"
    },
    {
      "name": "Bailian Airport",
      "city": "Liuzhou",
      "country": "China",
      "iata_code": "LZH",
      "_geoloc": {
        "latitude": 24.2075,
        "longitude": 109.391
      },
      "links_count": 28,
      "objectID": "6356"
    },
    {
      "name": "Ercan International Airport",
      "city": "Nicosia",
      "country": "Cyprus",
      "iata_code": "ECN",
      "_geoloc": {
        "latitude": 35.1547,
        "longitude": 33.4961
      },
      "links_count": 28,
      "objectID": "5780"
    },
    {
      "name": "Southend",
      "city": "Southend",
      "country": "United Kingdom",
      "iata_code": "SEN",
      "_geoloc": {
        "latitude": 51.571389,
        "longitude": 0.695556
      },
      "links_count": 28,
      "objectID": "508"
    },
    {
      "name": "Springfield Branson Natl",
      "city": "Springfield",
      "country": "United States",
      "iata_code": "SGF",
      "_geoloc": {
        "latitude": 37.245667,
        "longitude": -93.388639
      },
      "links_count": 28,
      "objectID": "4348"
    },
    {
      "name": "Hector International Airport",
      "city": "Fargo",
      "country": "United States",
      "iata_code": "FAR",
      "_geoloc": {
        "latitude": 46.92065,
        "longitude": -96.8157639
      },
      "links_count": 28,
      "objectID": "4292"
    },
    {
      "name": "Baghdad International Airport",
      "city": "Baghdad",
      "country": "Iraq",
      "iata_code": "BGW",
      "_geoloc": {
        "latitude": 33.262539,
        "longitude": 44.234578
      },
      "links_count": 28,
      "objectID": "4130"
    },
    {
      "name": "Santarem",
      "city": "Santarem",
      "country": "Brazil",
      "iata_code": "STM",
      "_geoloc": {
        "latitude": -2.422431,
        "longitude": -54.792789
      },
      "links_count": 28,
      "objectID": "4092"
    },
    {
      "name": "Francisco Bangoy International",
      "city": "Davao",
      "country": "Philippines",
      "iata_code": "DVO",
      "_geoloc": {
        "latitude": 7.125522,
        "longitude": 125.645778
      },
      "links_count": 28,
      "objectID": "4090"
    },
    {
      "name": "Trenton Mercer",
      "city": "Trenton",
      "country": "United States",
      "iata_code": "TTN",
      "_geoloc": {
        "latitude": 40.276692,
        "longitude": -74.813469
      },
      "links_count": 28,
      "objectID": "3447"
    },
    {
      "name": "Sultan Ismail Petra",
      "city": "Kota Bahru",
      "country": "Malaysia",
      "iata_code": "KBR",
      "_geoloc": {
        "latitude": 6.16685,
        "longitude": 102.293014
      },
      "links_count": 28,
      "objectID": "3298"
    },
    {
      "name": "Pattimura",
      "city": "Ambon",
      "country": "Indonesia",
      "iata_code": "AMQ",
      "_geoloc": {
        "latitude": -3.710264,
        "longitude": 128.089136
      },
      "links_count": 28,
      "objectID": "3256"
    },
    {
      "name": "Surgut",
      "city": "Surgut",
      "country": "Russia",
      "iata_code": "SGC",
      "_geoloc": {
        "latitude": 61.343694,
        "longitude": 73.401842
      },
      "links_count": 28,
      "objectID": "2974"
    },
    {
      "name": "Nizhnevartovsk",
      "city": "Nizhnevartovsk",
      "country": "Russia",
      "iata_code": "NJC",
      "_geoloc": {
        "latitude": 60.949272,
        "longitude": 76.483617
      },
      "links_count": 28,
      "objectID": "2972"
    },
    {
      "name": "Dnipropetrovsk Intl",
      "city": "Dnepropetrovsk",
      "country": "Ukraine",
      "iata_code": "DNK",
      "_geoloc": {
        "latitude": 48.357222,
        "longitude": 35.100556
      },
      "links_count": 28,
      "objectID": "2941"
    },
    {
      "name": "La Chinita Intl",
      "city": "Maracaibo",
      "country": "Venezuela",
      "iata_code": "MAR",
      "_geoloc": {
        "latitude": 10.558208,
        "longitude": -71.727856
      },
      "links_count": 28,
      "objectID": "2848"
    },
    {
      "name": "Ishigaki",
      "city": "Ishigaki",
      "country": "Japan",
      "iata_code": "ISG",
      "_geoloc": {
        "latitude": 24.344525,
        "longitude": 124.186983
      },
      "links_count": 28,
      "objectID": "2387"
    },
    {
      "name": "Quetta",
      "city": "Quetta",
      "country": "Pakistan",
      "iata_code": "UET",
      "_geoloc": {
        "latitude": 30.251369,
        "longitude": 66.937764
      },
      "links_count": 28,
      "objectID": "2221"
    },
    {
      "name": "Marsh Harbour",
      "city": "Marsh Harbor",
      "country": "Bahamas",
      "iata_code": "MHH",
      "_geoloc": {
        "latitude": 26.511406,
        "longitude": -77.083472
      },
      "links_count": 28,
      "objectID": "1930"
    },
    {
      "name": "Juan Manuel Galvez Intl",
      "city": "Roatan",
      "country": "Honduras",
      "iata_code": "RTB",
      "_geoloc": {
        "latitude": 16.316814,
        "longitude": -86.522961
      },
      "links_count": 28,
      "objectID": "1774"
    },
    {
      "name": "City Centre",
      "city": "Toronto",
      "country": "Canada",
      "iata_code": "YTZ",
      "_geoloc": {
        "latitude": 43.627499,
        "longitude": -79.396167
      },
      "links_count": 28,
      "objectID": "144"
    },
    {
      "name": "Sud Corse",
      "city": "Figari",
      "country": "France",
      "iata_code": "FSC",
      "_geoloc": {
        "latitude": 41.500557,
        "longitude": 9.097777
      },
      "links_count": 28,
      "objectID": "1323"
    },
    {
      "name": "Anglet",
      "city": "Biarritz-bayonne",
      "country": "France",
      "iata_code": "BIQ",
      "_geoloc": {
        "latitude": 43.468419,
        "longitude": -1.523325
      },
      "links_count": 28,
      "objectID": "1280"
    },
    {
      "name": "Rabil",
      "city": "Boa Vista",
      "country": "Cape Verde",
      "iata_code": "BVC",
      "_geoloc": {
        "latitude": 16.136531,
        "longitude": -22.888897
      },
      "links_count": 28,
      "objectID": "1103"
    },
    {
      "name": "Mahlon Sweet Fld",
      "city": "Eugene",
      "country": "United States",
      "iata_code": "EUG",
      "_geoloc": {
        "latitude": 44.124583,
        "longitude": -123.211972
      },
      "links_count": 27,
      "objectID": "4099"
    },
    {
      "name": "City Of Colorado Springs Muni",
      "city": "Colorado Springs",
      "country": "United States",
      "iata_code": "COS",
      "_geoloc": {
        "latitude": 38.805805,
        "longitude": -104.700778
      },
      "links_count": 27,
      "objectID": "3819"
    },
    {
      "name": "Burlington Intl",
      "city": "Burlington",
      "country": "United States",
      "iata_code": "BTV",
      "_geoloc": {
        "latitude": 44.471861,
        "longitude": -73.153278
      },
      "links_count": 27,
      "objectID": "3711"
    },
    {
      "name": "Sultan Mahmud Badaruddin Ii",
      "city": "Palembang",
      "country": "Indonesia",
      "iata_code": "PLM",
      "_geoloc": {
        "latitude": -2.89825,
        "longitude": 104.699903
      },
      "links_count": 27,
      "objectID": "3289"
    },
    {
      "name": "Rarotonga Intl",
      "city": "Avarua",
      "country": "Cook Islands",
      "iata_code": "RAR",
      "_geoloc": {
        "latitude": -21.202739,
        "longitude": -159.805556
      },
      "links_count": 27,
      "objectID": "1959"
    },
    {
      "name": "Licenciado Adolfo Lopez Mateos Intl",
      "city": "Toluca",
      "country": "Mexico",
      "iata_code": "TLC",
      "_geoloc": {
        "latitude": 19.337072,
        "longitude": -99.566008
      },
      "links_count": 27,
      "objectID": "1850"
    },
    {
      "name": "Thunder Bay",
      "city": "Thunder Bay",
      "country": "Canada",
      "iata_code": "YQT",
      "_geoloc": {
        "latitude": 48.371944,
        "longitude": -89.323889
      },
      "links_count": 27,
      "objectID": "121"
    },
    {
      "name": "Bujumbura Intl",
      "city": "Bujumbura",
      "country": "Burundi",
      "iata_code": "BJM",
      "_geoloc": {
        "latitude": -3.324019,
        "longitude": 29.318519
      },
      "links_count": 27,
      "objectID": "1120"
    },
    {
      "name": "Seychelles Intl",
      "city": "Mahe",
      "country": "Seychelles",
      "iata_code": "SEZ",
      "_geoloc": {
        "latitude": -4.674342,
        "longitude": 55.521839
      },
      "links_count": 26,
      "objectID": "994"
    },
    {
      "name": "Luzhou Airport",
      "city": "Luzhou",
      "country": "China",
      "iata_code": "LZO",
      "_geoloc": {
        "latitude": 28.8522,
        "longitude": 105.393
      },
      "links_count": 26,
      "objectID": "6399"
    },
    {
      "name": "Zhoushan Airport",
      "city": "Zhoushan",
      "country": "China",
      "iata_code": "HSN",
      "_geoloc": {
        "latitude": 29.9342,
        "longitude": 122.362
      },
      "links_count": 26,
      "objectID": "6395"
    },
    {
      "name": "Ganzhou Airport",
      "city": "Ganzhou",
      "country": "China",
      "iata_code": "KOW",
      "_geoloc": {
        "latitude": 25.8258,
        "longitude": 114.912
      },
      "links_count": 26,
      "objectID": "6379"
    },
    {
      "name": "Xiangfan Airport",
      "city": "Xiangfan",
      "country": "China",
      "iata_code": "XFN",
      "_geoloc": {
        "latitude": 32.1506,
        "longitude": 112.291
      },
      "links_count": 26,
      "objectID": "6360"
    },
    {
      "name": "Tongliao Airport",
      "city": "Tongliao",
      "country": "China",
      "iata_code": "TGO",
      "_geoloc": {
        "latitude": 43.5567,
        "longitude": 122.2
      },
      "links_count": 26,
      "objectID": "6348"
    },
    {
      "name": "Vigra",
      "city": "Alesund",
      "country": "Norway",
      "iata_code": "AES",
      "_geoloc": {
        "latitude": 62.560372,
        "longitude": 6.110164
      },
      "links_count": 26,
      "objectID": "630"
    },
    {
      "name": "Lehigh Valley Intl",
      "city": "Allentown",
      "country": "United States",
      "iata_code": "ABE",
      "_geoloc": {
        "latitude": 40.652083,
        "longitude": -75.440806
      },
      "links_count": 26,
      "objectID": "4355"
    },
    {
      "name": "Diosdado Macapagal International",
      "city": "Angeles City",
      "country": "Philippines",
      "iata_code": "CRK",
      "_geoloc": {
        "latitude": 15.185833,
        "longitude": 120.560278
      },
      "links_count": 26,
      "objectID": "4140"
    },
    {
      "name": "Bishop International",
      "city": "Flint",
      "country": "United States",
      "iata_code": "FNT",
      "_geoloc": {
        "latitude": 42.965424,
        "longitude": -83.743629
      },
      "links_count": 26,
      "objectID": "4089"
    },
    {
      "name": "Sarasota Bradenton Intl",
      "city": "Sarasota",
      "country": "United States",
      "iata_code": "SRQ",
      "_geoloc": {
        "latitude": 27.395444,
        "longitude": -82.554389
      },
      "links_count": 26,
      "objectID": "4067"
    },
    {
      "name": "Charlottesville-Albemarle",
      "city": "Charlottesville VA",
      "country": "United States",
      "iata_code": "CHO",
      "_geoloc": {
        "latitude": 38.138639,
        "longitude": -78.452861
      },
      "links_count": 26,
      "objectID": "4015"
    },
    {
      "name": "Sioux Falls",
      "city": "Sioux Falls",
      "country": "United States",
      "iata_code": "FSD",
      "_geoloc": {
        "latitude": 43.582014,
        "longitude": -96.741914
      },
      "links_count": 26,
      "objectID": "4009"
    },
    {
      "name": "Wilmington Intl",
      "city": "Wilmington",
      "country": "United States",
      "iata_code": "ILM",
      "_geoloc": {
        "latitude": 34.270615,
        "longitude": -77.902569
      },
      "links_count": 26,
      "objectID": "3845"
    },
    {
      "name": "Friedrichshafen",
      "city": "Friedrichshafen",
      "country": "Germany",
      "iata_code": "FDH",
      "_geoloc": {
        "latitude": 47.671317,
        "longitude": 9.511486
      },
      "links_count": 26,
      "objectID": "382"
    },
    {
      "name": "Kashi",
      "city": "Kashi",
      "country": "China",
      "iata_code": "KHG",
      "_geoloc": {
        "latitude": 39.542922,
        "longitude": 76.019956
      },
      "links_count": 26,
      "objectID": "3397"
    },
    {
      "name": "Canberra",
      "city": "Canberra",
      "country": "Australia",
      "iata_code": "CBR",
      "_geoloc": {
        "latitude": -35.306944,
        "longitude": 149.195
      },
      "links_count": 26,
      "objectID": "3355"
    },
    {
      "name": "Mount Isa",
      "city": "Mount Isa",
      "country": "Australia",
      "iata_code": "ISA",
      "_geoloc": {
        "latitude": -20.663889,
        "longitude": 139.488611
      },
      "links_count": 26,
      "objectID": "3324"
    },
    {
      "name": "Luang Phabang Intl",
      "city": "Luang Prabang",
      "country": "Laos",
      "iata_code": "LPQ",
      "_geoloc": {
        "latitude": 19.897914,
        "longitude": 102.160764
      },
      "links_count": 26,
      "objectID": "3115"
    },
    {
      "name": "Zumbi Dos Palmares",
      "city": "Maceio",
      "country": "Brazil",
      "iata_code": "MCZ",
      "_geoloc": {
        "latitude": -9.510808,
        "longitude": -35.791678
      },
      "links_count": 26,
      "objectID": "2590"
    },
    {
      "name": "Santa Maria",
      "city": "Aracaju",
      "country": "Brazil",
      "iata_code": "AJU",
      "_geoloc": {
        "latitude": -10.984,
        "longitude": -37.070333
      },
      "links_count": 26,
      "objectID": "2522"
    },
    {
      "name": "Ambrosio L V Taravella",
      "city": "Cordoba",
      "country": "Argentina",
      "iata_code": "COR",
      "_geoloc": {
        "latitude": -31.323619,
        "longitude": -64.207953
      },
      "links_count": 26,
      "objectID": "2443"
    },
    {
      "name": "Okayama",
      "city": "Okayama",
      "country": "Japan",
      "iata_code": "OKJ",
      "_geoloc": {
        "latitude": 34.756944,
        "longitude": 133.855278
      },
      "links_count": 26,
      "objectID": "2327"
    },
    {
      "name": "Taif",
      "city": "Taif",
      "country": "Saudi Arabia",
      "iata_code": "TIF",
      "_geoloc": {
        "latitude": 21.483418,
        "longitude": 40.544334
      },
      "links_count": 26,
      "objectID": "2090"
    },
    {
      "name": "La Tontouta",
      "city": "Noumea",
      "country": "New Caledonia",
      "iata_code": "NOU",
      "_geoloc": {
        "latitude": -22.014553,
        "longitude": 166.212972
      },
      "links_count": 26,
      "objectID": "2005"
    },
    {
      "name": "C P A Carlos Rovirosa Intl",
      "city": "Villahermosa",
      "country": "Mexico",
      "iata_code": "VSA",
      "_geoloc": {
        "latitude": 17.997,
        "longitude": -92.817361
      },
      "links_count": 26,
      "objectID": "1853"
    },
    {
      "name": "Victoria Intl",
      "city": "Victoria",
      "country": "Canada",
      "iata_code": "YYJ",
      "_geoloc": {
        "latitude": 48.646944,
        "longitude": -123.425833
      },
      "links_count": 26,
      "objectID": "184"
    },
    {
      "name": "Traian Vuia",
      "city": "Timisoara",
      "country": "Romania",
      "iata_code": "TSR",
      "_geoloc": {
        "latitude": 45.809861,
        "longitude": 21.337861
      },
      "links_count": 26,
      "objectID": "1663"
    },
    {
      "name": "Mikonos",
      "city": "Mykonos",
      "country": "Greece",
      "iata_code": "JMK",
      "_geoloc": {
        "latitude": 37.435128,
        "longitude": 25.348103
      },
      "links_count": 26,
      "objectID": "1468"
    },
    {
      "name": "St Jacques",
      "city": "Rennes",
      "country": "France",
      "iata_code": "RNS",
      "_geoloc": {
        "latitude": 48.069508,
        "longitude": -1.734794
      },
      "links_count": 26,
      "objectID": "1415"
    },
    {
      "name": "Mombasa Moi Intl",
      "city": "Mombasa",
      "country": "Kenya",
      "iata_code": "MBA",
      "_geoloc": {
        "latitude": -4.034833,
        "longitude": 39.59425
      },
      "links_count": 26,
      "objectID": "1145"
    },
    {
      "name": "Banjul Intl",
      "city": "Banjul",
      "country": "Gambia",
      "iata_code": "BJL",
      "_geoloc": {
        "latitude": 13.337961,
        "longitude": -16.652206
      },
      "links_count": 26,
      "objectID": "1050"
    },
    {
      "name": "Fort Mcmurray",
      "city": "Fort Mcmurray",
      "country": "Canada",
      "iata_code": "YMM",
      "_geoloc": {
        "latitude": 56.653333,
        "longitude": -111.221944
      },
      "links_count": 25,
      "objectID": "90"
    },
    {
      "name": "Aniak Airport",
      "city": "Aniak",
      "country": "United States",
      "iata_code": "ANI",
      "_geoloc": {
        "latitude": 61.5816,
        "longitude": -159.543
      },
      "links_count": 25,
      "objectID": "5967"
    },
    {
      "name": "Tokua Airport",
      "city": "Tokua",
      "country": "Papua New Guinea",
      "iata_code": "RAB",
      "_geoloc": {
        "latitude": -4.34046,
        "longitude": 152.38
      },
      "links_count": 25,
      "objectID": "5435"
    },
    {
      "name": "Patna",
      "city": "Patina",
      "country": "India",
      "iata_code": "PAT",
      "_geoloc": {
        "latitude": 25.591317,
        "longitude": 85.087992
      },
      "links_count": 25,
      "objectID": "3061"
    },
    {
      "name": "Pampulha Carlos Drummond De Andrade",
      "city": "Belo Horizonte",
      "country": "Brazil",
      "iata_code": "PLU",
      "_geoloc": {
        "latitude": -19.851181,
        "longitude": -43.950628
      },
      "links_count": 25,
      "objectID": "2528"
    },
    {
      "name": "Gassim",
      "city": "Gassim",
      "country": "Saudi Arabia",
      "iata_code": "ELQ",
      "_geoloc": {
        "latitude": 26.302822,
        "longitude": 43.773911
      },
      "links_count": 25,
      "objectID": "2067"
    },
    {
      "name": "Kamuzu Intl",
      "city": "Lilongwe",
      "country": "Malawi",
      "iata_code": "LLW",
      "_geoloc": {
        "latitude": -13.789378,
        "longitude": 33.781
      },
      "links_count": 25,
      "objectID": "1016"
    },
    {
      "name": "Huai An Lianshui Airport",
      "city": "Huai An",
      "country": "China",
      "iata_code": "HIA",
      "_geoloc": {
        "latitude": 33.7772,
        "longitude": 119.1478
      },
      "links_count": 24,
      "objectID": "7898"
    },
    {
      "name": "Karmoy",
      "city": "Haugesund",
      "country": "Norway",
      "iata_code": "HAU",
      "_geoloc": {
        "latitude": 59.345267,
        "longitude": 5.208364
      },
      "links_count": 24,
      "objectID": "645"
    },
    {
      "name": "Wanxian Airport",
      "city": "Wanxian",
      "country": "China",
      "iata_code": "WXN",
      "_geoloc": {
        "latitude": 30.8361,
        "longitude": 108.406
      },
      "links_count": 24,
      "objectID": "6403"
    },
    {
      "name": "Yulin Airport",
      "city": "Yulin",
      "country": "China",
      "iata_code": "UYN",
      "_geoloc": {
        "latitude": 38.2692,
        "longitude": 109.731
      },
      "links_count": 24,
      "objectID": "6368"
    },
    {
      "name": "Namangan Airport",
      "city": "Namangan",
      "country": "Uzbekistan",
      "iata_code": "NMA",
      "_geoloc": {
        "latitude": 40.9846,
        "longitude": 71.5567
      },
      "links_count": 24,
      "objectID": "6150"
    },
    {
      "name": "Misratah Airport",
      "city": "Misratah",
      "country": "Libya",
      "iata_code": "MRA",
      "_geoloc": {
        "latitude": 32.325,
        "longitude": 15.061
      },
      "links_count": 24,
      "objectID": "5804"
    },
    {
      "name": "Aden Adde International Airport",
      "city": "Mogadishu",
      "country": "Somalia",
      "iata_code": "MGQ",
      "_geoloc": {
        "latitude": 2.01444,
        "longitude": 45.3047
      },
      "links_count": 24,
      "objectID": "5687"
    },
    {
      "name": "Tampere Pirkkala",
      "city": "Tampere",
      "country": "Finland",
      "iata_code": "TMP",
      "_geoloc": {
        "latitude": 61.414147,
        "longitude": 23.604392
      },
      "links_count": 24,
      "objectID": "458"
    },
    {
      "name": "Broome",
      "city": "Broome",
      "country": "Australia",
      "iata_code": "BME",
      "_geoloc": {
        "latitude": -17.8,
        "longitude": 122.2
      },
      "links_count": 24,
      "objectID": "4319"
    },
    {
      "name": "Central Illinois Rgnl",
      "city": "Bloomington",
      "country": "United States",
      "iata_code": "BMI",
      "_geoloc": {
        "latitude": 40.477111,
        "longitude": -88.915917
      },
      "links_count": 24,
      "objectID": "4037"
    },
    {
      "name": "Billings Logan International Airport",
      "city": "Billings",
      "country": "United States",
      "iata_code": "BIL",
      "_geoloc": {
        "latitude": 45.80921,
        "longitude": -108.537654
      },
      "links_count": 24,
      "objectID": "4021"
    },
    {
      "name": "Asheville Regional Airport",
      "city": "Asheville",
      "country": "United States",
      "iata_code": "AVL",
      "_geoloc": {
        "latitude": 35.436194,
        "longitude": -82.541806
      },
      "links_count": 24,
      "objectID": "4007"
    },
    {
      "name": "Kobe",
      "city": "Kobe",
      "country": "Japan",
      "iata_code": "UKB",
      "_geoloc": {
        "latitude": 34.632778,
        "longitude": 135.223889
      },
      "links_count": 24,
      "objectID": "3943"
    },
    {
      "name": "Gainesville Rgnl",
      "city": "Gainesville",
      "country": "United States",
      "iata_code": "GNV",
      "_geoloc": {
        "latitude": 29.690056,
        "longitude": -82.271778
      },
      "links_count": 24,
      "objectID": "3472"
    },
    {
      "name": "Alice Springs",
      "city": "Alice Springs",
      "country": "Australia",
      "iata_code": "ASP",
      "_geoloc": {
        "latitude": -23.806667,
        "longitude": 133.902222
      },
      "links_count": 24,
      "objectID": "3319"
    },
    {
      "name": "Jammu",
      "city": "Jammu",
      "country": "India",
      "iata_code": "IXJ",
      "_geoloc": {
        "latitude": 32.689142,
        "longitude": 74.837389
      },
      "links_count": 24,
      "objectID": "3100"
    },
    {
      "name": "Terrance B Lettsome Intl",
      "city": "Tortola",
      "country": "British Virgin Islands",
      "iata_code": "EIS",
      "_geoloc": {
        "latitude": 18.444834,
        "longitude": -64.542975
      },
      "links_count": 24,
      "objectID": "2903"
    },
    {
      "name": "Rafael Nunez",
      "city": "Cartagena",
      "country": "Colombia",
      "iata_code": "CTG",
      "_geoloc": {
        "latitude": 10.442381,
        "longitude": -75.512961
      },
      "links_count": 24,
      "objectID": "2714"
    },
    {
      "name": "Cataratas Intl",
      "city": "Foz Do Iguacu",
      "country": "Brazil",
      "iata_code": "IGU",
      "_geoloc": {
        "latitude": -25.59615,
        "longitude": -54.487206
      },
      "links_count": 24,
      "objectID": "2554"
    },
    {
      "name": "Matsuyama",
      "city": "Matsuyama",
      "country": "Japan",
      "iata_code": "MYJ",
      "_geoloc": {
        "latitude": 33.827222,
        "longitude": 132.699722
      },
      "links_count": 24,
      "objectID": "2333"
    },
    {
      "name": "Multan Intl",
      "city": "Multan",
      "country": "Pakistan",
      "iata_code": "MUX",
      "_geoloc": {
        "latitude": 30.203222,
        "longitude": 71.419111
      },
      "links_count": 24,
      "objectID": "2214"
    },
    {
      "name": "Juan Gualberto Gomez Intl",
      "city": "Varadero",
      "country": "Cuba",
      "iata_code": "VRA",
      "_geoloc": {
        "latitude": 23.034445,
        "longitude": -81.435278
      },
      "links_count": 24,
      "objectID": "1923"
    },
    {
      "name": "Abraham Gonzalez Intl",
      "city": "Ciudad Juarez",
      "country": "Mexico",
      "iata_code": "CJS",
      "_geoloc": {
        "latitude": 31.636133,
        "longitude": -106.428667
      },
      "links_count": 24,
      "objectID": "1796"
    },
    {
      "name": "Bern Belp",
      "city": "Bern",
      "country": "Switzerland",
      "iata_code": "BRN",
      "_geoloc": {
        "latitude": 46.9141,
        "longitude": 7.497153
      },
      "links_count": 24,
      "objectID": "1676"
    },
    {
      "name": "Iasi",
      "city": "Iasi",
      "country": "Romania",
      "iata_code": "IAS",
      "_geoloc": {
        "latitude": 47.178492,
        "longitude": 27.620631
      },
      "links_count": 24,
      "objectID": "1655"
    },
    {
      "name": "A Coruna",
      "city": "La Coruna",
      "country": "Spain",
      "iata_code": "LCG",
      "_geoloc": {
        "latitude": 43.302061,
        "longitude": -8.377256
      },
      "links_count": 24,
      "objectID": "1220"
    },
    {
      "name": "Burgas",
      "city": "Bourgas",
      "country": "Bulgaria",
      "iata_code": "BOJ",
      "_geoloc": {
        "latitude": 42.569583,
        "longitude": 27.515236
      },
      "links_count": 24,
      "objectID": "1191"
    },
    {
      "name": "Zanzibar",
      "city": "Zanzibar",
      "country": "Tanzania",
      "iata_code": "ZNZ",
      "_geoloc": {
        "latitude": -6.222025,
        "longitude": 39.224886
      },
      "links_count": 24,
      "objectID": "1186"
    },
    {
      "name": "Juba",
      "city": "Juba",
      "country": "South Sudan",
      "iata_code": "JUB",
      "_geoloc": {
        "latitude": 4.872006,
        "longitude": 31.601117
      },
      "links_count": 24,
      "objectID": "1173"
    },
    {
      "name": "Sialkot Airport",
      "city": "Sialkot",
      "country": "Pakistan",
      "iata_code": "SKT",
      "_geoloc": {
        "latitude": 32.5356,
        "longitude": 74.3639
      },
      "links_count": 23,
      "objectID": "6776"
    },
    {
      "name": "Londrina",
      "city": "Londrina",
      "country": "Brazil",
      "iata_code": "LDB",
      "_geoloc": {
        "latitude": -23.333625,
        "longitude": -51.130072
      },
      "links_count": 23,
      "objectID": "2581"
    },
    {
      "name": "Nausori Intl",
      "city": "Nausori",
      "country": "Fiji",
      "iata_code": "SUV",
      "_geoloc": {
        "latitude": -18.043267,
        "longitude": 178.559228
      },
      "links_count": 23,
      "objectID": "1961"
    },
    {
      "name": "Linz",
      "city": "Linz",
      "country": "Austria",
      "iata_code": "LNZ",
      "_geoloc": {
        "latitude": 48.233219,
        "longitude": 14.187511
      },
      "links_count": 23,
      "objectID": "1611"
    },
    {
      "name": "Bale Mulhouse",
      "city": "Mulhouse",
      "country": "France",
      "iata_code": "MLH",
      "_geoloc": {
        "latitude": 47.589583,
        "longitude": 7.529914
      },
      "links_count": 23,
      "objectID": "1423"
    },
    {
      "name": "Nouakchott",
      "city": "Nouakschott",
      "country": "Mauritania",
      "iata_code": "NKC",
      "_geoloc": {
        "latitude": 18.097856,
        "longitude": -15.947956
      },
      "links_count": 23,
      "objectID": "1094"
    },
    {
      "name": "Fuyang Airport",
      "city": "Fuyang",
      "country": "China",
      "iata_code": "FUG",
      "_geoloc": {
        "latitude": 32.9,
        "longitude": 115.816667
      },
      "links_count": 22,
      "objectID": "7503"
    },
    {
      "name": "Manzhouli",
      "city": "Manzhouli",
      "country": "China",
      "iata_code": "NZH",
      "_geoloc": {
        "latitude": 49.566667,
        "longitude": 117.329444
      },
      "links_count": 22,
      "objectID": "6954"
    },
    {
      "name": "Jasionka",
      "city": "Rzeszow",
      "country": "Poland",
      "iata_code": "RZE",
      "_geoloc": {
        "latitude": 50.109958,
        "longitude": 22.019
      },
      "links_count": 22,
      "objectID": "675"
    },
    {
      "name": "Kjevik",
      "city": "Kristiansand",
      "country": "Norway",
      "iata_code": "KRS",
      "_geoloc": {
        "latitude": 58.204214,
        "longitude": 8.085369
      },
      "links_count": 22,
      "objectID": "638"
    },
    {
      "name": "Datong Airport",
      "city": "Datong",
      "country": "China",
      "iata_code": "DAT",
      "_geoloc": {
        "latitude": 40.0603,
        "longitude": 113.482
      },
      "links_count": 22,
      "objectID": "6344"
    },
    {
      "name": "Belgorod International Airport",
      "city": "Belgorod",
      "country": "Russia",
      "iata_code": "EGO",
      "_geoloc": {
        "latitude": 50.6438,
        "longitude": 36.5901
      },
      "links_count": 22,
      "objectID": "6156"
    },
    {
      "name": "Santo Pekoa International Airport",
      "city": "Santo",
      "country": "Vanuatu",
      "iata_code": "SON",
      "_geoloc": {
        "latitude": -15.505033,
        "longitude": 167.219742
      },
      "links_count": 22,
      "objectID": "5908"
    },
    {
      "name": "Kirkwall",
      "city": "Kirkwall",
      "country": "United Kingdom",
      "iata_code": "KOI",
      "_geoloc": {
        "latitude": 58.957778,
        "longitude": -2.905
      },
      "links_count": 22,
      "objectID": "529"
    },
    {
      "name": "Isle Of Man",
      "city": "Isle Of Man",
      "country": "Isle of Man",
      "iata_code": "IOM",
      "_geoloc": {
        "latitude": 54.083333,
        "longitude": -4.623889
      },
      "links_count": 22,
      "objectID": "520"
    },
    {
      "name": "South Bend Rgnl",
      "city": "South Bend",
      "country": "United States",
      "iata_code": "SBN",
      "_geoloc": {
        "latitude": 41.708661,
        "longitude": -86.31725
      },
      "links_count": 22,
      "objectID": "4359"
    },
    {
      "name": "San Pedro",
      "city": "San Pedro",
      "country": "Belize",
      "iata_code": "SPR",
      "_geoloc": {
        "latitude": 17.913936,
        "longitude": -87.971075
      },
      "links_count": 22,
      "objectID": "4279"
    },
    {
      "name": "Nadzab",
      "city": "Nadzab",
      "country": "Papua New Guinea",
      "iata_code": "LAE",
      "_geoloc": {
        "latitude": -6.569828,
        "longitude": 146.726242
      },
      "links_count": 22,
      "objectID": "4"
    },
    {
      "name": "Riyan",
      "city": "Mukalla",
      "country": "Yemen",
      "iata_code": "RIY",
      "_geoloc": {
        "latitude": 14.662639,
        "longitude": 49.375028
      },
      "links_count": 22,
      "objectID": "3974"
    },
    {
      "name": "Chiang Rai Intl",
      "city": "Chiang Rai",
      "country": "Thailand",
      "iata_code": "CEI",
      "_geoloc": {
        "latitude": 19.952342,
        "longitude": 99.882928
      },
      "links_count": 22,
      "objectID": "3932"
    },
    {
      "name": "Paderborn Lippstadt",
      "city": "Paderborn",
      "country": "Germany",
      "iata_code": "PAD",
      "_geoloc": {
        "latitude": 51.614089,
        "longitude": 8.616317
      },
      "links_count": 22,
      "objectID": "371"
    },
    {
      "name": "Munster Osnabruck",
      "city": "Munster",
      "country": "Germany",
      "iata_code": "FMO",
      "_geoloc": {
        "latitude": 52.134642,
        "longitude": 7.684831
      },
      "links_count": 22,
      "objectID": "341"
    },
    {
      "name": "Port Blair",
      "city": "Port Blair",
      "country": "India",
      "iata_code": "IXZ",
      "_geoloc": {
        "latitude": 11.641161,
        "longitude": 92.729744
      },
      "links_count": 22,
      "objectID": "3146"
    },
    {
      "name": "Raipur",
      "city": "Raipur",
      "country": "India",
      "iata_code": "RPR",
      "_geoloc": {
        "latitude": 21.180406,
        "longitude": 81.738753
      },
      "links_count": 22,
      "objectID": "3020"
    },
    {
      "name": "Mount Hagen",
      "city": "Mount Hagen",
      "country": "Papua New Guinea",
      "iata_code": "HGU",
      "_geoloc": {
        "latitude": -5.826789,
        "longitude": 144.295861
      },
      "links_count": 22,
      "objectID": "3"
    },
    {
      "name": "Mukhino",
      "city": "Ulan-ude",
      "country": "Russia",
      "iata_code": "UUD",
      "_geoloc": {
        "latitude": 51.807764,
        "longitude": 107.437644
      },
      "links_count": 22,
      "objectID": "2938"
    },
    {
      "name": "Kadala",
      "city": "Chita",
      "country": "Russia",
      "iata_code": "HTA",
      "_geoloc": {
        "latitude": 52.026317,
        "longitude": 113.305556
      },
      "links_count": 22,
      "objectID": "2935"
    },
    {
      "name": "Robert L Bradshaw",
      "city": "Basse Terre",
      "country": "Saint Kitts and Nevis",
      "iata_code": "SKB",
      "_geoloc": {
        "latitude": 17.311194,
        "longitude": -62.718667
      },
      "links_count": 22,
      "objectID": "2891"
    },
    {
      "name": "General Manuel Carlos Piar",
      "city": "Guayana",
      "country": "Venezuela",
      "iata_code": "PZO",
      "_geoloc": {
        "latitude": 8.288528,
        "longitude": -62.760361
      },
      "links_count": 22,
      "objectID": "2856"
    },
    {
      "name": "General Jose Antonio Anzoategui Intl",
      "city": "Barcelona",
      "country": "Venezuela",
      "iata_code": "BLA",
      "_geoloc": {
        "latitude": 10.107139,
        "longitude": -64.689161
      },
      "links_count": 22,
      "objectID": "2821"
    },
    {
      "name": "Teniente Alejandro Velasco Astete Intl",
      "city": "Cuzco",
      "country": "Peru",
      "iata_code": "CUZ",
      "_geoloc": {
        "latitude": -13.535722,
        "longitude": -71.938781
      },
      "links_count": 22,
      "objectID": "2812"
    },
    {
      "name": "Gustavo Rojas Pinilla",
      "city": "San Andres Island",
      "country": "Colombia",
      "iata_code": "ADZ",
      "_geoloc": {
        "latitude": 12.583594,
        "longitude": -81.711192
      },
      "links_count": 22,
      "objectID": "2749"
    },
    {
      "name": "Olaya Herrera",
      "city": "Medellin",
      "country": "Colombia",
      "iata_code": "EOH",
      "_geoloc": {
        "latitude": 6.219958,
        "longitude": -75.590519
      },
      "links_count": 22,
      "objectID": "2729"
    },
    {
      "name": "Cerro Moreno Intl",
      "city": "Antofagasta",
      "country": "Chile",
      "iata_code": "ANF",
      "_geoloc": {
        "latitude": -23.444478,
        "longitude": -70.4451
      },
      "links_count": 22,
      "objectID": "2651"
    },
    {
      "name": "Senador Petronio Portella",
      "city": "Teresina",
      "country": "Brazil",
      "iata_code": "THE",
      "_geoloc": {
        "latitude": -5.059942,
        "longitude": -42.823478
      },
      "links_count": 22,
      "objectID": "2623"
    },
    {
      "name": "Maraba",
      "city": "Maraba",
      "country": "Brazil",
      "iata_code": "MAB",
      "_geoloc": {
        "latitude": -5.368589,
        "longitude": -49.138025
      },
      "links_count": 22,
      "objectID": "2584"
    },
    {
      "name": "Presidente Castro Pinto",
      "city": "Joao Pessoa",
      "country": "Brazil",
      "iata_code": "JPA",
      "_geoloc": {
        "latitude": -7.148381,
        "longitude": -34.950681
      },
      "links_count": 22,
      "objectID": "2575"
    },
    {
      "name": "Miyazaki",
      "city": "Miyazaki",
      "country": "Japan",
      "iata_code": "KMI",
      "_geoloc": {
        "latitude": 31.877222,
        "longitude": 131.448611
      },
      "links_count": 22,
      "objectID": "2308"
    },
    {
      "name": "Zahedan Intl",
      "city": "Zahedan",
      "country": "Iran",
      "iata_code": "ZAH",
      "_geoloc": {
        "latitude": 29.475686,
        "longitude": 60.906189
      },
      "links_count": 22,
      "objectID": "2167"
    },
    {
      "name": "Cibao Intl",
      "city": "Santiago",
      "country": "Dominican Republic",
      "iata_code": "STI",
      "_geoloc": {
        "latitude": 19.406092,
        "longitude": -70.604689
      },
      "links_count": 22,
      "objectID": "1764"
    },
    {
      "name": "Tivat",
      "city": "Tivat",
      "country": "Montenegro",
      "iata_code": "TIV",
      "_geoloc": {
        "latitude": 42.404664,
        "longitude": 18.723286
      },
      "links_count": 22,
      "objectID": "1743"
    },
    {
      "name": "Lajes",
      "city": "Lajes (terceira Island)",
      "country": "Portugal",
      "iata_code": "TER",
      "_geoloc": {
        "latitude": 38.761842,
        "longitude": -27.090797
      },
      "links_count": 22,
      "objectID": "1629"
    },
    {
      "name": "Ronchi Dei Legionari",
      "city": "Ronchi De Legionari",
      "country": "Italy",
      "iata_code": "TRS",
      "_geoloc": {
        "latitude": 45.8275,
        "longitude": 13.472222
      },
      "links_count": 22,
      "objectID": "1545"
    },
    {
      "name": "Aktio",
      "city": "Preveza",
      "country": "Greece",
      "iata_code": "PVK",
      "_geoloc": {
        "latitude": 38.925467,
        "longitude": 20.765311
      },
      "links_count": 22,
      "objectID": "1470"
    },
    {
      "name": "Bellegarde",
      "city": "Limoges",
      "country": "France",
      "iata_code": "LIG",
      "_geoloc": {
        "latitude": 45.862778,
        "longitude": 1.179444
      },
      "links_count": 22,
      "objectID": "1270"
    },
    {
      "name": "Roumaniere",
      "city": "Bergerac",
      "country": "France",
      "iata_code": "EGC",
      "_geoloc": {
        "latitude": 44.825279,
        "longitude": 0.518611
      },
      "links_count": 22,
      "objectID": "1265"
    },
    {
      "name": "Vigo",
      "city": "Vigo",
      "country": "Spain",
      "iata_code": "VGO",
      "_geoloc": {
        "latitude": 42.2318,
        "longitude": -8.626775
      },
      "links_count": 22,
      "objectID": "1250"
    },
    {
      "name": "Sale",
      "city": "Rabat",
      "country": "Morocco",
      "iata_code": "RBA",
      "_geoloc": {
        "latitude": 34.051467,
        "longitude": -6.751519
      },
      "links_count": 22,
      "objectID": "1072"
    },
    {
      "name": "Al Najaf International Airport",
      "city": "Najaf",
      "country": "Iraq",
      "iata_code": "NJF",
      "_geoloc": {
        "latitude": 31.991667,
        "longitude": 44.404167
      },
      "links_count": 21,
      "objectID": "7490"
    },
    {
      "name": "Saint Barthelemy",
      "city": "Gustavia",
      "country": "France",
      "iata_code": "SBH",
      "_geoloc": {
        "latitude": 17.9023,
        "longitude": -62.8324
      },
      "links_count": 21,
      "objectID": "6460"
    },
    {
      "name": "Inverness",
      "city": "Inverness",
      "country": "United Kingdom",
      "iata_code": "INV",
      "_geoloc": {
        "latitude": 57.5425,
        "longitude": -4.0475
      },
      "links_count": 21,
      "objectID": "533"
    },
    {
      "name": "Yeager",
      "city": "Charleston",
      "country": "United States",
      "iata_code": "CRW",
      "_geoloc": {
        "latitude": 38.373147,
        "longitude": -81.593189
      },
      "links_count": 21,
      "objectID": "4285"
    },
    {
      "name": "Aeroporto de Porto Seguro",
      "city": "Porto Seguro",
      "country": "Brazil",
      "iata_code": "BPS",
      "_geoloc": {
        "latitude": -16.438611,
        "longitude": -39.080833
      },
      "links_count": 21,
      "objectID": "4209"
    },
    {
      "name": "El Tari",
      "city": "Kupang",
      "country": "Indonesia",
      "iata_code": "KOE",
      "_geoloc": {
        "latitude": -10.171583,
        "longitude": 123.671136
      },
      "links_count": 21,
      "objectID": "3916"
    },
    {
      "name": "Eglin Afb",
      "city": "Valparaiso",
      "country": "United States",
      "iata_code": "VPS",
      "_geoloc": {
        "latitude": 30.48325,
        "longitude": -86.5254
      },
      "links_count": 21,
      "objectID": "3873"
    },
    {
      "name": "Birsa Munda",
      "city": "Ranchi",
      "country": "India",
      "iata_code": "IXR",
      "_geoloc": {
        "latitude": 23.31425,
        "longitude": 85.321675
      },
      "links_count": 21,
      "objectID": "3063"
    },
    {
      "name": "Shymkent",
      "city": "Chimkent",
      "country": "Kazakhstan",
      "iata_code": "CIT",
      "_geoloc": {
        "latitude": 42.364167,
        "longitude": 69.478889
      },
      "links_count": 21,
      "objectID": "2914"
    },
    {
      "name": "George F L Charles",
      "city": "Castries",
      "country": "Saint Lucia",
      "iata_code": "SLU",
      "_geoloc": {
        "latitude": 14.020228,
        "longitude": -60.992936
      },
      "links_count": 21,
      "objectID": "2893"
    },
    {
      "name": "El Plumerillo",
      "city": "Mendoza",
      "country": "Argentina",
      "iata_code": "MDZ",
      "_geoloc": {
        "latitude": -32.831717,
        "longitude": -68.792856
      },
      "links_count": 21,
      "objectID": "2452"
    },
    {
      "name": "Prince Said Ibrahim",
      "city": "Moroni",
      "country": "Comoros",
      "iata_code": "HAH",
      "_geoloc": {
        "latitude": -11.533661,
        "longitude": 43.27185
      },
      "links_count": 20,
      "objectID": "912"
    },
    {
      "name": "Ndola",
      "city": "Ndola",
      "country": "Zambia",
      "iata_code": "NLA",
      "_geoloc": {
        "latitude": -12.998139,
        "longitude": 28.664944
      },
      "links_count": 20,
      "objectID": "910"
    },
    {
      "name": "Unalakleet Airport",
      "city": "Unalakleet",
      "country": "United States",
      "iata_code": "UNK",
      "_geoloc": {
        "latitude": 63.888333,
        "longitude": -160.798889
      },
      "links_count": 20,
      "objectID": "7088"
    },
    {
      "name": "Jining Airport ",
      "city": "Jining",
      "country": "China",
      "iata_code": "JNG",
      "_geoloc": {
        "latitude": 35.417,
        "longitude": 116.533
      },
      "links_count": 20,
      "objectID": "6944"
    },
    {
      "name": "Hami Airport",
      "city": "Hami",
      "country": "China",
      "iata_code": "HMI",
      "_geoloc": {
        "latitude": 42.8414,
        "longitude": 93.6692
      },
      "links_count": 20,
      "objectID": "6743"
    },
    {
      "name": "La Rochelle-Ile de Re",
      "city": "La Rochelle",
      "country": "France",
      "iata_code": "LRH",
      "_geoloc": {
        "latitude": 46.1792,
        "longitude": -1.19528
      },
      "links_count": 20,
      "objectID": "6493"
    },
    {
      "name": "Mt. Fuji Shizuoka Airport",
      "city": "Shizuoka",
      "country": "Japan",
      "iata_code": "FSZ",
      "_geoloc": {
        "latitude": 34.796111,
        "longitude": 138.189444
      },
      "links_count": 20,
      "objectID": "6476"
    },
    {
      "name": "Jiamusi Airport",
      "city": "Jiamusi",
      "country": "China",
      "iata_code": "JMU",
      "_geoloc": {
        "latitude": 46.843394,
        "longitude": 130.465389
      },
      "links_count": 20,
      "objectID": "6411"
    },
    {
      "name": "Korla Airport",
      "city": "Korla",
      "country": "China",
      "iata_code": "KRL",
      "_geoloc": {
        "latitude": 41.6978,
        "longitude": 86.1289
      },
      "links_count": 20,
      "objectID": "6407"
    },
    {
      "name": "Alta",
      "city": "Alta",
      "country": "Norway",
      "iata_code": "ALF",
      "_geoloc": {
        "latitude": 69.976111,
        "longitude": 23.371667
      },
      "links_count": 20,
      "objectID": "632"
    },
    {
      "name": "Sulaymaniyah International Airport",
      "city": "Sulaymaniyah",
      "country": "Iraq",
      "iata_code": "ISU",
      "_geoloc": {
        "latitude": 35.5608,
        "longitude": 45.3147
      },
      "links_count": 20,
      "objectID": "5952"
    },
    {
      "name": "Norwich",
      "city": "Norwich",
      "country": "United Kingdom",
      "iata_code": "NWI",
      "_geoloc": {
        "latitude": 52.675833,
        "longitude": 1.282778
      },
      "links_count": 20,
      "objectID": "547"
    },
    {
      "name": "Atyrau",
      "city": "Atyrau",
      "country": "Kazakhstan",
      "iata_code": "GUW",
      "_geoloc": {
        "latitude": 47.121944,
        "longitude": 51.821389
      },
      "links_count": 20,
      "objectID": "4357"
    },
    {
      "name": "Mudanjiang",
      "city": "Mudanjiang",
      "country": "China",
      "iata_code": "MDG",
      "_geoloc": {
        "latitude": 44.523889,
        "longitude": 129.568889
      },
      "links_count": 20,
      "objectID": "4334"
    },
    {
      "name": "Falconara",
      "city": "Ancona",
      "country": "Italy",
      "iata_code": "AOI",
      "_geoloc": {
        "latitude": 43.616389,
        "longitude": 13.362222
      },
      "links_count": 20,
      "objectID": "4309"
    },
    {
      "name": "Yibin",
      "city": "Yibin",
      "country": "China",
      "iata_code": "YBP",
      "_geoloc": {
        "latitude": 28.800278,
        "longitude": 104.544444
      },
      "links_count": 20,
      "objectID": "4110"
    },
    {
      "name": "Monterey Peninsula",
      "city": "Monterey",
      "country": "United States",
      "iata_code": "MRY",
      "_geoloc": {
        "latitude": 36.587,
        "longitude": -121.842944
      },
      "links_count": 20,
      "objectID": "3948"
    },
    {
      "name": "Portland Intl Jetport",
      "city": "Portland",
      "country": "United States",
      "iata_code": "PWM",
      "_geoloc": {
        "latitude": 43.646161,
        "longitude": -70.309281
      },
      "links_count": 20,
      "objectID": "3862"
    },
    {
      "name": "Bellingham Intl",
      "city": "Bellingham",
      "country": "United States",
      "iata_code": "BLI",
      "_geoloc": {
        "latitude": 48.792694,
        "longitude": -122.537528
      },
      "links_count": 20,
      "objectID": "3777"
    },
    {
      "name": "Atlantic City Intl",
      "city": "Atlantic City",
      "country": "United States",
      "iata_code": "ACY",
      "_geoloc": {
        "latitude": 39.457583,
        "longitude": -74.577167
      },
      "links_count": 20,
      "objectID": "3524"
    },
    {
      "name": "Varanasi",
      "city": "Varanasi",
      "country": "India",
      "iata_code": "VNS",
      "_geoloc": {
        "latitude": 25.452358,
        "longitude": 82.859342
      },
      "links_count": 20,
      "objectID": "3084"
    },
    {
      "name": "Gumrak",
      "city": "Volgograd",
      "country": "Russia",
      "iata_code": "VOG",
      "_geoloc": {
        "latitude": 48.782528,
        "longitude": 44.345544
      },
      "links_count": 20,
      "objectID": "2967"
    },
    {
      "name": "Thyna",
      "city": "Sfax",
      "country": "Tunisia",
      "iata_code": "SFA",
      "_geoloc": {
        "latitude": 34.717953,
        "longitude": 10.690972
      },
      "links_count": 20,
      "objectID": "295"
    },
    {
      "name": "Arturo Michelena Intl",
      "city": "Valencia",
      "country": "Venezuela",
      "iata_code": "VLN",
      "_geoloc": {
        "latitude": 10.149733,
        "longitude": -67.9284
      },
      "links_count": 20,
      "objectID": "2868"
    },
    {
      "name": "Rodriguez Ballon",
      "city": "Arequipa",
      "country": "Peru",
      "iata_code": "AQP",
      "_geoloc": {
        "latitude": -16.341072,
        "longitude": -71.583083
      },
      "links_count": 20,
      "objectID": "2802"
    },
    {
      "name": "Johan A Pengel Intl",
      "city": "Zandery",
      "country": "Suriname",
      "iata_code": "PBM",
      "_geoloc": {
        "latitude": 5.452831,
        "longitude": -55.187783
      },
      "links_count": 20,
      "objectID": "2773"
    },
    {
      "name": "Ernesto Cortissoz",
      "city": "Barranquilla",
      "country": "Colombia",
      "iata_code": "BAQ",
      "_geoloc": {
        "latitude": 10.889589,
        "longitude": -74.780819
      },
      "links_count": 20,
      "objectID": "2710"
    },
    {
      "name": "El Tepual Intl",
      "city": "Puerto Montt",
      "country": "Chile",
      "iata_code": "PMC",
      "_geoloc": {
        "latitude": -41.438886,
        "longitude": -73.093953
      },
      "links_count": 20,
      "objectID": "2665"
    },
    {
      "name": "Regional De Maringa Silvio Name Junior",
      "city": "Maringa",
      "country": "Brazil",
      "iata_code": "MGF",
      "_geoloc": {
        "latitude": -23.476392,
        "longitude": -52.016406
      },
      "links_count": 20,
      "objectID": "2586"
    },
    {
      "name": "Iloilo",
      "city": "Iloilo",
      "country": "Philippines",
      "iata_code": "ILO",
      "_geoloc": {
        "latitude": 10.713044,
        "longitude": 122.545297
      },
      "links_count": 20,
      "objectID": "2429"
    },
    {
      "name": "Hakodate",
      "city": "Hakodate",
      "country": "Japan",
      "iata_code": "HKD",
      "_geoloc": {
        "latitude": 41.77,
        "longitude": 140.821944
      },
      "links_count": 20,
      "objectID": "2288"
    },
    {
      "name": "Francisco C Ada Saipan Intl",
      "city": "Saipan",
      "country": "Northern Mariana Islands",
      "iata_code": "SPN",
      "_geoloc": {
        "latitude": 15.119003,
        "longitude": 145.729356
      },
      "links_count": 20,
      "objectID": "2244"
    },
    {
      "name": "Rasht",
      "city": "Rasht",
      "country": "Iran",
      "iata_code": "RAS",
      "_geoloc": {
        "latitude": 37.325314,
        "longitude": 49.605817
      },
      "links_count": 20,
      "objectID": "2123"
    },
    {
      "name": "Frank Pais Intl",
      "city": "Holguin",
      "country": "Cuba",
      "iata_code": "HOG",
      "_geoloc": {
        "latitude": 20.785589,
        "longitude": -76.315108
      },
      "links_count": 20,
      "objectID": "1910"
    },
    {
      "name": "Torreon Intl",
      "city": "Torreon",
      "country": "Mexico",
      "iata_code": "TRC",
      "_geoloc": {
        "latitude": 25.568278,
        "longitude": -103.410583
      },
      "links_count": 20,
      "objectID": "1845"
    },
    {
      "name": "General Francisco J Mujica Intl",
      "city": "Morelia",
      "country": "Mexico",
      "iata_code": "MLM",
      "_geoloc": {
        "latitude": 19.849944,
        "longitude": -101.0255
      },
      "links_count": 20,
      "objectID": "1821"
    },
    {
      "name": "General Manuel Marquez De Leon Intl",
      "city": "La Paz",
      "country": "Mexico",
      "iata_code": "LAP",
      "_geoloc": {
        "latitude": 24.072694,
        "longitude": -110.362475
      },
      "links_count": 20,
      "objectID": "1816"
    },
    {
      "name": "Casa De Campo Intl",
      "city": "La Romana",
      "country": "Dominican Republic",
      "iata_code": "LRM",
      "_geoloc": {
        "latitude": 18.450711,
        "longitude": -68.911833
      },
      "links_count": 20,
      "objectID": "1759"
    },
    {
      "name": "Trabzon",
      "city": "Trabzon",
      "country": "Turkey",
      "iata_code": "TZX",
      "_geoloc": {
        "latitude": 40.995108,
        "longitude": 39.789728
      },
      "links_count": 20,
      "objectID": "1726"
    },
    {
      "name": "Prince George",
      "city": "Prince George",
      "country": "Canada",
      "iata_code": "YXS",
      "_geoloc": {
        "latitude": 53.889444,
        "longitude": -122.678889
      },
      "links_count": 20,
      "objectID": "172"
    },
    {
      "name": "Mitilini",
      "city": "Mytilini",
      "country": "Greece",
      "iata_code": "MJT",
      "_geoloc": {
        "latitude": 39.056667,
        "longitude": 26.598333
      },
      "links_count": 20,
      "objectID": "1469"
    },
    {
      "name": "Kalamata",
      "city": "Kalamata",
      "country": "Greece",
      "iata_code": "KLX",
      "_geoloc": {
        "latitude": 37.068319,
        "longitude": 22.025525
      },
      "links_count": 20,
      "objectID": "1456"
    },
    {
      "name": "Salvaza",
      "city": "Carcassonne",
      "country": "France",
      "iata_code": "CCF",
      "_geoloc": {
        "latitude": 43.215978,
        "longitude": 2.306317
      },
      "links_count": 20,
      "objectID": "1352"
    },
    {
      "name": "Greater Moncton Intl",
      "city": "Moncton",
      "country": "Canada",
      "iata_code": "YQM",
      "_geoloc": {
        "latitude": 46.112221,
        "longitude": -64.678611
      },
      "links_count": 20,
      "objectID": "117"
    },
    {
      "name": "Luxor Intl",
      "city": "Luxor",
      "country": "Egypt",
      "iata_code": "LXR",
      "_geoloc": {
        "latitude": 25.671028,
        "longitude": 32.706583
      },
      "links_count": 20,
      "objectID": "1132"
    },
    {
      "name": "Angads",
      "city": "Oujda",
      "country": "Morocco",
      "iata_code": "OUD",
      "_geoloc": {
        "latitude": 34.78715,
        "longitude": -1.923986
      },
      "links_count": 20,
      "objectID": "1070"
    },
    {
      "name": "Lubumbashi Intl",
      "city": "Lubumashi",
      "country": "Congo (Kinshasa)",
      "iata_code": "FBM",
      "_geoloc": {
        "latitude": -11.591333,
        "longitude": 27.530889
      },
      "links_count": 20,
      "objectID": "1038"
    },
    {
      "name": "Ndjamena Hassan Djamous",
      "city": "N'djamena",
      "country": "Chad",
      "iata_code": "NDJ",
      "_geoloc": {
        "latitude": 12.133689,
        "longitude": 15.034019
      },
      "links_count": 19,
      "objectID": "999"
    },
    {
      "name": "Osnova International Airport",
      "city": "Kharkov",
      "country": "Ukraine",
      "iata_code": "HRK",
      "_geoloc": {
        "latitude": 49.924786,
        "longitude": 36.289986
      },
      "links_count": 19,
      "objectID": "6105"
    },
    {
      "name": "Maastricht",
      "city": "Maastricht",
      "country": "Netherlands",
      "iata_code": "MST",
      "_geoloc": {
        "latitude": 50.911658,
        "longitude": 5.770144
      },
      "links_count": 19,
      "objectID": "582"
    },
    {
      "name": "Wilkes Barre Scranton Intl",
      "city": "Scranton",
      "country": "United States",
      "iata_code": "AVP",
      "_geoloc": {
        "latitude": 41.338478,
        "longitude": -75.723403
      },
      "links_count": 19,
      "objectID": "4286"
    },
    {
      "name": "Rick Husband Amarillo Intl",
      "city": "Amarillo",
      "country": "United States",
      "iata_code": "AMA",
      "_geoloc": {
        "latitude": 35.219369,
        "longitude": -101.705931
      },
      "links_count": 19,
      "objectID": "3840"
    },
    {
      "name": "Lubbock Preston Smith Intl",
      "city": "Lubbock",
      "country": "United States",
      "iata_code": "LBB",
      "_geoloc": {
        "latitude": 33.663639,
        "longitude": -101.822778
      },
      "links_count": 19,
      "objectID": "3829"
    },
    {
      "name": "Jorge Wilsterman",
      "city": "Cochabamba",
      "country": "Bolivia",
      "iata_code": "CBB",
      "_geoloc": {
        "latitude": -17.421058,
        "longitude": -66.177114
      },
      "links_count": 19,
      "objectID": "2759"
    },
    {
      "name": "Diego Aracena Intl",
      "city": "Iquique",
      "country": "Chile",
      "iata_code": "IQQ",
      "_geoloc": {
        "latitude": -20.535222,
        "longitude": -70.181275
      },
      "links_count": 19,
      "objectID": "2649"
    },
    {
      "name": "Babelthuap",
      "city": "Babelthuap",
      "country": "Palau",
      "iata_code": "ROR",
      "_geoloc": {
        "latitude": 7.367303,
        "longitude": 134.544278
      },
      "links_count": 19,
      "objectID": "2256"
    },
    {
      "name": "Yenbo",
      "city": "Yenbo",
      "country": "Saudi Arabia",
      "iata_code": "YNB",
      "_geoloc": {
        "latitude": 24.144244,
        "longitude": 38.06335
      },
      "links_count": 19,
      "objectID": "2096"
    },
    {
      "name": "Kuujjuaq",
      "city": "Quujjuaq",
      "country": "Canada",
      "iata_code": "YVP",
      "_geoloc": {
        "latitude": 58.096111,
        "longitude": -68.426944
      },
      "links_count": 19,
      "objectID": "154"
    },
    {
      "name": "Nampula",
      "city": "Nampula",
      "country": "Mozambique",
      "iata_code": "APL",
      "_geoloc": {
        "latitude": -15.105611,
        "longitude": 39.2818
      },
      "links_count": 18,
      "objectID": "984"
    },
    {
      "name": "Sir Seretse Khama Intl",
      "city": "Gaberone",
      "country": "Botswana",
      "iata_code": "GBE",
      "_geoloc": {
        "latitude": -24.555225,
        "longitude": 25.918208
      },
      "links_count": 18,
      "objectID": "881"
    },
    {
      "name": "Port Elizabeth Intl",
      "city": "Port Elizabeth",
      "country": "South Africa",
      "iata_code": "PLZ",
      "_geoloc": {
        "latitude": -33.984919,
        "longitude": 25.617275
      },
      "links_count": 18,
      "objectID": "838"
    },
    {
      "name": "Sohag International",
      "city": "Sohag",
      "country": "Egypt",
      "iata_code": "HMB",
      "_geoloc": {
        "latitude": 26.341189,
        "longitude": 31.742983
      },
      "links_count": 18,
      "objectID": "8235"
    },
    {
      "name": "Nuuk",
      "city": "Godthaab",
      "country": "Greenland",
      "iata_code": "GOH",
      "_geoloc": {
        "latitude": 64.190922,
        "longitude": -51.678064
      },
      "links_count": 18,
      "objectID": "8"
    },
    {
      "name": "Hatay Airport",
      "city": "Hatay",
      "country": "Turkey",
      "iata_code": "HTY",
      "_geoloc": {
        "latitude": 36.362778,
        "longitude": 36.282222
      },
      "links_count": 18,
      "objectID": "7453"
    },
    {
      "name": "Jing Gang Shan Airport",
      "city": "Ji An",
      "country": "China",
      "iata_code": "JGS",
      "_geoloc": {
        "latitude": 26.8997,
        "longitude": 114.7375
      },
      "links_count": 18,
      "objectID": "6428"
    },
    {
      "name": "Evenes",
      "city": "Harstad/Narvik",
      "country": "Norway",
      "iata_code": "EVE",
      "_geoloc": {
        "latitude": 68.4913,
        "longitude": 16.678108
      },
      "links_count": 18,
      "objectID": "641"
    },
    {
      "name": "Dachuan Airport",
      "city": "Dazhou",
      "country": "China",
      "iata_code": "DAX",
      "_geoloc": {
        "latitude": 31.3,
        "longitude": 107.5
      },
      "links_count": 18,
      "objectID": "6397"
    },
    {
      "name": "Cheongju International Airport",
      "city": "Chongju",
      "country": "South Korea",
      "iata_code": "CJJ",
      "_geoloc": {
        "latitude": 36.7166,
        "longitude": 127.499119
      },
      "links_count": 18,
      "objectID": "6008"
    },
    {
      "name": "Robin Hood Doncaster Sheffield Airport",
      "city": "Doncaster",
      "country": "Sheffield",
      "iata_code": "DSA",
      "_geoloc": {
        "latitude": 0.0,
        "longitude": 53.474722
      },
      "links_count": 18,
      "objectID": "5562"
    },
    {
      "name": "Upernavik Airport",
      "city": "Upernavik",
      "country": "Greenland",
      "iata_code": "JUV",
      "_geoloc": {
        "latitude": 72.7902,
        "longitude": -56.1306
      },
      "links_count": 18,
      "objectID": "5448"
    },
    {
      "name": "Blackpool",
      "city": "Blackpool",
      "country": "United Kingdom",
      "iata_code": "BLK",
      "_geoloc": {
        "latitude": 53.771667,
        "longitude": -3.028611
      },
      "links_count": 18,
      "objectID": "514"
    },
    {
      "name": "Talagi",
      "city": "Arkhangelsk",
      "country": "Russia",
      "iata_code": "ARH",
      "_geoloc": {
        "latitude": 64.360281,
        "longitude": 40.430167
      },
      "links_count": 18,
      "objectID": "4362"
    },
    {
      "name": "Luoyang Airport",
      "city": "Luoyang",
      "country": "China",
      "iata_code": "LYA",
      "_geoloc": {
        "latitude": 34.41,
        "longitude": 112.28
      },
      "links_count": 18,
      "objectID": "4148"
    },
    {
      "name": "Rogue Valley Intl Medford",
      "city": "Medford",
      "country": "United States",
      "iata_code": "MFR",
      "_geoloc": {
        "latitude": 42.374228,
        "longitude": -122.8735
      },
      "links_count": 18,
      "objectID": "4101"
    },
    {
      "name": "Appleton",
      "city": "Appleton",
      "country": "United States",
      "iata_code": "ATW",
      "_geoloc": {
        "latitude": 44.257526,
        "longitude": -88.507576
      },
      "links_count": 18,
      "objectID": "4047"
    },
    {
      "name": "Gulfport-Biloxi",
      "city": "Gulfport",
      "country": "United States",
      "iata_code": "GPT",
      "_geoloc": {
        "latitude": 30.407278,
        "longitude": -89.070111
      },
      "links_count": 18,
      "objectID": "4038"
    },
    {
      "name": "Evansville Regional",
      "city": "Evansville",
      "country": "United States",
      "iata_code": "EVV",
      "_geoloc": {
        "latitude": 38.036997,
        "longitude": -87.532364
      },
      "links_count": 18,
      "objectID": "4018"
    },
    {
      "name": "Mobile Rgnl",
      "city": "Mobile",
      "country": "United States",
      "iata_code": "MOB",
      "_geoloc": {
        "latitude": 30.691231,
        "longitude": -88.242814
      },
      "links_count": 18,
      "objectID": "3782"
    },
    {
      "name": "Four Corners Rgnl",
      "city": "Farmington",
      "country": "United States",
      "iata_code": "FMN",
      "_geoloc": {
        "latitude": 36.74125,
        "longitude": -108.229944
      },
      "links_count": 18,
      "objectID": "3743"
    },
    {
      "name": "Newport News Williamsburg Intl",
      "city": "Newport News",
      "country": "United States",
      "iata_code": "PHF",
      "_geoloc": {
        "latitude": 37.131894,
        "longitude": -76.492989
      },
      "links_count": 18,
      "objectID": "3633"
    },
    {
      "name": "Saarbrucken",
      "city": "Saarbruecken",
      "country": "Germany",
      "iata_code": "SCN",
      "_geoloc": {
        "latitude": 49.214553,
        "longitude": 7.109508
      },
      "links_count": 18,
      "objectID": "349"
    },
    {
      "name": "Hobart",
      "city": "Hobart",
      "country": "Australia",
      "iata_code": "HBA",
      "_geoloc": {
        "latitude": -42.836111,
        "longitude": 147.510278
      },
      "links_count": 18,
      "objectID": "3336"
    },
    {
      "name": "Sibu",
      "city": "Sibu",
      "country": "Malaysia",
      "iata_code": "SBW",
      "_geoloc": {
        "latitude": 2.261603,
        "longitude": 111.985322
      },
      "links_count": 18,
      "objectID": "3267"
    },
    {
      "name": "Trichy",
      "city": "Tiruchirappalli",
      "country": "India",
      "iata_code": "TRZ",
      "_geoloc": {
        "latitude": 10.765364,
        "longitude": 78.709722
      },
      "links_count": 18,
      "objectID": "3152"
    },
    {
      "name": "Chandigarh",
      "city": "Chandigarh",
      "country": "India",
      "iata_code": "IXC",
      "_geoloc": {
        "latitude": 30.673469,
        "longitude": 76.788542
      },
      "links_count": 18,
      "objectID": "3089"
    },
    {
      "name": "Amritsar",
      "city": "Amritsar",
      "country": "India",
      "iata_code": "ATQ",
      "_geoloc": {
        "latitude": 31.709594,
        "longitude": 74.797264
      },
      "links_count": 18,
      "objectID": "3081"
    },
    {
      "name": "Imphal",
      "city": "Imphal",
      "country": "India",
      "iata_code": "IMF",
      "_geoloc": {
        "latitude": 24.75995,
        "longitude": 93.896697
      },
      "links_count": 18,
      "objectID": "3050"
    },
    {
      "name": "Syktyvkar",
      "city": "Syktyvkar",
      "country": "Russia",
      "iata_code": "SCW",
      "_geoloc": {
        "latitude": 61.64705,
        "longitude": 50.84505
      },
      "links_count": 18,
      "objectID": "2989"
    },
    {
      "name": "Flamingo",
      "city": "Kralendijk",
      "country": "Netherlands Antilles",
      "iata_code": "BON",
      "_geoloc": {
        "latitude": 12.131044,
        "longitude": -68.268511
      },
      "links_count": 18,
      "objectID": "2896"
    },
    {
      "name": "Henry E Rohlsen",
      "city": "St. Croix Island",
      "country": "Virgin Islands",
      "iata_code": "STX",
      "_geoloc": {
        "latitude": 17.701889,
        "longitude": -64.798556
      },
      "links_count": 18,
      "objectID": "2884"
    },
    {
      "name": "Governador Jorge Teixeira De Oliveira",
      "city": "Porto Velho",
      "country": "Brazil",
      "iata_code": "PVH",
      "_geoloc": {
        "latitude": -8.709294,
        "longitude": -63.902281
      },
      "links_count": 18,
      "objectID": "2607"
    },
    {
      "name": "Ilheus",
      "city": "Ilheus",
      "country": "Brazil",
      "iata_code": "IOS",
      "_geoloc": {
        "latitude": -14.815964,
        "longitude": -39.033197
      },
      "links_count": 18,
      "objectID": "2569"
    },
    {
      "name": "Puerto Princesa",
      "city": "Puerto Princesa",
      "country": "Philippines",
      "iata_code": "PPS",
      "_geoloc": {
        "latitude": 9.742119,
        "longitude": 118.758731
      },
      "links_count": 18,
      "objectID": "2433"
    },
    {
      "name": "Toyama",
      "city": "Toyama",
      "country": "Japan",
      "iata_code": "TOY",
      "_geoloc": {
        "latitude": 36.648333,
        "longitude": 137.1875
      },
      "links_count": 18,
      "objectID": "2324"
    },
    {
      "name": "Kumamoto",
      "city": "Kumamoto",
      "country": "Japan",
      "iata_code": "KMJ",
      "_geoloc": {
        "latitude": 32.837319,
        "longitude": 130.85505
      },
      "links_count": 18,
      "objectID": "2312"
    },
    {
      "name": "Oita",
      "city": "Oita",
      "country": "Japan",
      "iata_code": "OIT",
      "_geoloc": {
        "latitude": 33.479444,
        "longitude": 131.737222
      },
      "links_count": 18,
      "objectID": "2310"
    },
    {
      "name": "Annaba",
      "city": "Annaba",
      "country": "Algeria",
      "iata_code": "AAE",
      "_geoloc": {
        "latitude": 36.822225,
        "longitude": 7.809167
      },
      "links_count": 18,
      "objectID": "220"
    },
    {
      "name": "Tabuk",
      "city": "Tabuk",
      "country": "Saudi Arabia",
      "iata_code": "TUU",
      "_geoloc": {
        "latitude": 28.365417,
        "longitude": 36.618889
      },
      "links_count": 18,
      "objectID": "2089"
    },
    {
      "name": "Exuma Intl",
      "city": "Great Exuma",
      "country": "Bahamas",
      "iata_code": "GGT",
      "_geoloc": {
        "latitude": 23.562631,
        "longitude": -75.877958
      },
      "links_count": 18,
      "objectID": "1941"
    },
    {
      "name": "Abel Santamaria",
      "city": "Santa Clara",
      "country": "Cuba",
      "iata_code": "SNU",
      "_geoloc": {
        "latitude": 22.492192,
        "longitude": -79.943611
      },
      "links_count": 18,
      "objectID": "1918"
    },
    {
      "name": "Marcos A Gelabert Intl",
      "city": "Panama",
      "country": "Panama",
      "iata_code": "PAC",
      "_geoloc": {
        "latitude": 8.973339,
        "longitude": -79.555583
      },
      "links_count": 18,
      "objectID": "1869"
    },
    {
      "name": "Ixtapa Zihuatanejo Intl",
      "city": "Zihuatanejo",
      "country": "Mexico",
      "iata_code": "ZIH",
      "_geoloc": {
        "latitude": 17.601569,
        "longitude": -101.460536
      },
      "links_count": 18,
      "objectID": "1856"
    },
    {
      "name": "Jesus Teran Intl",
      "city": "Aguascalientes",
      "country": "Mexico",
      "iata_code": "AGU",
      "_geoloc": {
        "latitude": 21.705558,
        "longitude": -102.317858
      },
      "links_count": 18,
      "objectID": "1785"
    },
    {
      "name": "Oguzeli",
      "city": "Gaziantep",
      "country": "Turkey",
      "iata_code": "GZT",
      "_geoloc": {
        "latitude": 36.947183,
        "longitude": 37.478683
      },
      "links_count": 18,
      "objectID": "1689"
    },
    {
      "name": "Pescara",
      "city": "Pescara",
      "country": "Italy",
      "iata_code": "PSR",
      "_geoloc": {
        "latitude": 42.431656,
        "longitude": 14.181067
      },
      "links_count": 18,
      "objectID": "1505"
    },
    {
      "name": "Samos",
      "city": "Samos",
      "country": "Greece",
      "iata_code": "SMI",
      "_geoloc": {
        "latitude": 37.689999,
        "longitude": 26.911667
      },
      "links_count": 18,
      "objectID": "1476"
    },
    {
      "name": "Vias",
      "city": "Beziers",
      "country": "France",
      "iata_code": "BZR",
      "_geoloc": {
        "latitude": 43.323522,
        "longitude": 3.353903
      },
      "links_count": 18,
      "objectID": "1360"
    },
    {
      "name": "Auvergne",
      "city": "Clermont-Ferrand",
      "country": "France",
      "iata_code": "CFE",
      "_geoloc": {
        "latitude": 45.786661,
        "longitude": 3.169169
      },
      "links_count": 18,
      "objectID": "1330"
    },
    {
      "name": "Granada",
      "city": "Granada",
      "country": "Spain",
      "iata_code": "GRX",
      "_geoloc": {
        "latitude": 37.188731,
        "longitude": -3.777356
      },
      "links_count": 18,
      "objectID": "1223"
    },
    {
      "name": "Varna",
      "city": "Varna",
      "country": "Bulgaria",
      "iata_code": "VAR",
      "_geoloc": {
        "latitude": 43.232072,
        "longitude": 27.825106
      },
      "links_count": 18,
      "objectID": "1196"
    },
    {
      "name": "Belize City Municipal Airport",
      "city": "Belize",
      "country": "Belize",
      "iata_code": "TZA",
      "_geoloc": {
        "latitude": 17.5344,
        "longitude": -88.298
      },
      "links_count": 17,
      "objectID": "6463"
    },
    {
      "name": "Vance Winkworth Amory International Airport",
      "city": "Charlestown",
      "country": "Saint Kitts and Nevis",
      "iata_code": "NEV",
      "_geoloc": {
        "latitude": 17.205678,
        "longitude": -62.589869
      },
      "links_count": 17,
      "objectID": "6079"
    },
    {
      "name": "Midland Intl",
      "city": "Midland",
      "country": "United States",
      "iata_code": "MAF",
      "_geoloc": {
        "latitude": 31.942528,
        "longitude": -102.201914
      },
      "links_count": 17,
      "objectID": "3652"
    },
    {
      "name": "Kodiak",
      "city": "Kodiak",
      "country": "United States",
      "iata_code": "ADQ",
      "_geoloc": {
        "latitude": 57.749967,
        "longitude": -152.493856
      },
      "links_count": 17,
      "objectID": "3531"
    },
    {
      "name": "Liege",
      "city": "Liege",
      "country": "Belgium",
      "iata_code": "LGG",
      "_geoloc": {
        "latitude": 50.637417,
        "longitude": 5.443222
      },
      "links_count": 17,
      "objectID": "309"
    },
    {
      "name": "Bhubaneshwar",
      "city": "Bhubaneswar",
      "country": "India",
      "iata_code": "BBI",
      "_geoloc": {
        "latitude": 20.244364,
        "longitude": 85.817781
      },
      "links_count": 17,
      "objectID": "3042"
    },
    {
      "name": "Mirny",
      "city": "Mirnyj",
      "country": "Russia",
      "iata_code": "MJZ",
      "_geoloc": {
        "latitude": 62.534689,
        "longitude": 114.038928
      },
      "links_count": 17,
      "objectID": "2925"
    },
    {
      "name": "Queenstown",
      "city": "Queenstown International",
      "country": "New Zealand",
      "iata_code": "ZQN",
      "_geoloc": {
        "latitude": -45.021111,
        "longitude": 168.739167
      },
      "links_count": 17,
      "objectID": "2030"
    },
    {
      "name": "Magenta",
      "city": "Noumea",
      "country": "New Caledonia",
      "iata_code": "GEA",
      "_geoloc": {
        "latitude": -22.258278,
        "longitude": 166.472806
      },
      "links_count": 17,
      "objectID": "2001"
    },
    {
      "name": "General Juan N Alvarez Intl",
      "city": "Acapulco",
      "country": "Mexico",
      "iata_code": "ACA",
      "_geoloc": {
        "latitude": 16.757061,
        "longitude": -99.753953
      },
      "links_count": 17,
      "objectID": "1783"
    },
    {
      "name": "Pemba",
      "city": "Pemba",
      "country": "Mozambique",
      "iata_code": "POL",
      "_geoloc": {
        "latitude": -12.986753,
        "longitude": 40.522492
      },
      "links_count": 16,
      "objectID": "985"
    },
    {
      "name": "Comiso",
      "city": "Comiso",
      "country": "Italy",
      "iata_code": "CIY",
      "_geoloc": {
        "latitude": 37.0,
        "longitude": 14.6144
      },
      "links_count": 16,
      "objectID": "9327"
    },
    {
      "name": "Bijie Feixiong Airport",
      "city": "Bijie",
      "country": "China",
      "iata_code": "BFJ",
      "_geoloc": {
        "latitude": 27.253,
        "longitude": 105.426
      },
      "links_count": 16,
      "objectID": "9025"
    },
    {
      "name": "Sondre Stromfjord",
      "city": "Sondrestrom",
      "country": "Greenland",
      "iata_code": "SFJ",
      "_geoloc": {
        "latitude": 67.016969,
        "longitude": -50.689325
      },
      "links_count": 16,
      "objectID": "9"
    },
    {
      "name": "Visby",
      "city": "Visby",
      "country": "Sweden",
      "iata_code": "VBY",
      "_geoloc": {
        "latitude": 57.662797,
        "longitude": 18.346211
      },
      "links_count": 16,
      "objectID": "746"
    },
    {
      "name": "Umea",
      "city": "Umea",
      "country": "Sweden",
      "iata_code": "UME",
      "_geoloc": {
        "latitude": 63.791828,
        "longitude": 20.282758
      },
      "links_count": 16,
      "objectID": "728"
    },
    {
      "name": "Wuhai",
      "city": "Wuhai",
      "country": "China",
      "iata_code": "WUA",
      "_geoloc": {
        "latitude": 39.794444,
        "longitude": 106.799444
      },
      "links_count": 16,
      "objectID": "6955"
    },
    {
      "name": "Ain Arnat Airport",
      "city": "Setif",
      "country": "Algeria",
      "iata_code": "QSF",
      "_geoloc": {
        "latitude": 36.1781,
        "longitude": 5.32449
      },
      "links_count": 16,
      "objectID": "6492"
    },
    {
      "name": "Qiqihar Sanjiazi Airport",
      "city": "Qiqihar",
      "country": "China",
      "iata_code": "NDG",
      "_geoloc": {
        "latitude": 47.239628,
        "longitude": 123.918131
      },
      "links_count": 16,
      "objectID": "6413"
    },
    {
      "name": "Guangyuan Airport",
      "city": "Guangyuan",
      "country": "China",
      "iata_code": "GYS",
      "_geoloc": {
        "latitude": 32.3911,
        "longitude": 105.702
      },
      "links_count": 16,
      "objectID": "6398"
    },
    {
      "name": "Nanyang Airport",
      "city": "Nanyang",
      "country": "China",
      "iata_code": "NNY",
      "_geoloc": {
        "latitude": 32.9808,
        "longitude": 112.615
      },
      "links_count": 16,
      "objectID": "6359"
    },
    {
      "name": "Changde Airport",
      "city": "Changde",
      "country": "China",
      "iata_code": "CGD",
      "_geoloc": {
        "latitude": 28.9189,
        "longitude": 111.64
      },
      "links_count": 16,
      "objectID": "6352"
    },
    {
      "name": "Nadym Airport",
      "city": "Nadym",
      "country": "Russia",
      "iata_code": "NYM",
      "_geoloc": {
        "latitude": 65.4809,
        "longitude": 72.6989
      },
      "links_count": 16,
      "objectID": "6143"
    },
    {
      "name": "Khanty Mansiysk Airport",
      "city": "Khanty-Mansiysk",
      "country": "Russia",
      "iata_code": "HMA",
      "_geoloc": {
        "latitude": 61.028479,
        "longitude": 69.086067
      },
      "links_count": 16,
      "objectID": "6138"
    },
    {
      "name": "Salekhard Airport",
      "city": "Salekhard",
      "country": "Russia",
      "iata_code": "SLY",
      "_geoloc": {
        "latitude": 66.590753,
        "longitude": 66.611042
      },
      "links_count": 16,
      "objectID": "6137"
    },
    {
      "name": "Tri Cities Airport",
      "city": "Pasco",
      "country": "United States",
      "iata_code": "PSC",
      "_geoloc": {
        "latitude": 46.2647,
        "longitude": -119.119
      },
      "links_count": 16,
      "objectID": "6133"
    },
    {
      "name": "Ust Kamenogorsk Airport",
      "city": "Ust Kamenogorsk",
      "country": "Kazakhstan",
      "iata_code": "UKK",
      "_geoloc": {
        "latitude": 50.0366,
        "longitude": 82.4942
      },
      "links_count": 16,
      "objectID": "6086"
    },
    {
      "name": "Aarhus",
      "city": "Aarhus",
      "country": "Denmark",
      "iata_code": "AAR",
      "_geoloc": {
        "latitude": 56.300017,
        "longitude": 10.619008
      },
      "links_count": 16,
      "objectID": "607"
    },
    {
      "name": "Pierre Regional Airport",
      "city": "Pierre",
      "country": "United States",
      "iata_code": "PIR",
      "_geoloc": {
        "latitude": 44.3827,
        "longitude": -100.286
      },
      "links_count": 16,
      "objectID": "5761"
    },
    {
      "name": "Fayetteville Regional Grannis Field",
      "city": "Fayetteville",
      "country": "United States",
      "iata_code": "FAY",
      "_geoloc": {
        "latitude": 34.9912,
        "longitude": -78.8803
      },
      "links_count": 16,
      "objectID": "5738"
    },
    {
      "name": "Gheshm Airport",
      "city": "Gheshm",
      "country": "Iran",
      "iata_code": "GSM",
      "_geoloc": {
        "latitude": 26.9487,
        "longitude": 56.2688
      },
      "links_count": 16,
      "objectID": "5712"
    },
    {
      "name": "Red Lake Airport",
      "city": "Red Lake",
      "country": "Canada",
      "iata_code": "YRL",
      "_geoloc": {
        "latitude": 51.0669,
        "longitude": -93.7931
      },
      "links_count": 16,
      "objectID": "5527"
    },
    {
      "name": "Inuvik Mike Zubko",
      "city": "Inuvik",
      "country": "Canada",
      "iata_code": "YEV",
      "_geoloc": {
        "latitude": 68.304167,
        "longitude": -133.482778
      },
      "links_count": 16,
      "objectID": "54"
    },
    {
      "name": "Turku",
      "city": "Turku",
      "country": "Finland",
      "iata_code": "TKU",
      "_geoloc": {
        "latitude": 60.514142,
        "longitude": 22.262808
      },
      "links_count": 16,
      "objectID": "460"
    },
    {
      "name": "Hammerfest Airport",
      "city": "Hammerfest",
      "country": "Norway",
      "iata_code": "HFT",
      "_geoloc": {
        "latitude": 70.679722,
        "longitude": 23.668889
      },
      "links_count": 16,
      "objectID": "4325"
    },
    {
      "name": "Newcastle Airport",
      "city": "Newcastle",
      "country": "Australia",
      "iata_code": "NTL",
      "_geoloc": {
        "latitude": -32.78,
        "longitude": 151.83
      },
      "links_count": 16,
      "objectID": "4320"
    },
    {
      "name": "Cheddi Jagan Intl",
      "city": "Georgetown",
      "country": "Guyana",
      "iata_code": "GEO",
      "_geoloc": {
        "latitude": 6.498553,
        "longitude": -58.254119
      },
      "links_count": 16,
      "objectID": "4304"
    },
    {
      "name": "Roberts Fld",
      "city": "Redmond-Bend",
      "country": "United States",
      "iata_code": "RDM",
      "_geoloc": {
        "latitude": 44.254066,
        "longitude": -121.149964
      },
      "links_count": 16,
      "objectID": "4103"
    },
    {
      "name": "Westerland Sylt",
      "city": "Westerland",
      "country": "Germany",
      "iata_code": "GWT",
      "_geoloc": {
        "latitude": 54.91325,
        "longitude": 8.340472
      },
      "links_count": 16,
      "objectID": "410"
    },
    {
      "name": "Rapid City Regional Airport",
      "city": "Rapid City",
      "country": "United States",
      "iata_code": "RAP",
      "_geoloc": {
        "latitude": 44.045278,
        "longitude": -103.057222
      },
      "links_count": 16,
      "objectID": "4087"
    },
    {
      "name": "Grand Junction Regional",
      "city": "Grand Junction",
      "country": "United States",
      "iata_code": "GJT",
      "_geoloc": {
        "latitude": 39.122413,
        "longitude": -108.526735
      },
      "links_count": 16,
      "objectID": "4063"
    },
    {
      "name": "Gallatin Field",
      "city": "Bozeman",
      "country": "United States",
      "iata_code": "BZN",
      "_geoloc": {
        "latitude": 45.777643,
        "longitude": -111.160151
      },
      "links_count": 16,
      "objectID": "4020"
    },
    {
      "name": "Kopitnari",
      "city": "Kutaisi",
      "country": "Georgia",
      "iata_code": "KUT",
      "_geoloc": {
        "latitude": 42.176653,
        "longitude": 42.482583
      },
      "links_count": 16,
      "objectID": "3972"
    },
    {
      "name": "Santa Barbara Muni",
      "city": "Santa Barbara",
      "country": "United States",
      "iata_code": "SBA",
      "_geoloc": {
        "latitude": 34.426211,
        "longitude": -119.840372
      },
      "links_count": 16,
      "objectID": "3949"
    },
    {
      "name": "Adi Sumarmo Wiryokusumo",
      "city": "Solo City",
      "country": "Indonesia",
      "iata_code": "SOC",
      "_geoloc": {
        "latitude": -7.516089,
        "longitude": 110.756892
      },
      "links_count": 16,
      "objectID": "3929"
    },
    {
      "name": "Baton Rouge Metro Ryan Fld",
      "city": "Baton Rouge",
      "country": "United States",
      "iata_code": "BTR",
      "_geoloc": {
        "latitude": 30.533167,
        "longitude": -91.149639
      },
      "links_count": 16,
      "objectID": "3846"
    },
    {
      "name": "Austin Straubel Intl",
      "city": "Green Bay",
      "country": "United States",
      "iata_code": "GRB",
      "_geoloc": {
        "latitude": 44.485072,
        "longitude": -88.129589
      },
      "links_count": 16,
      "objectID": "3653"
    },
    {
      "name": "Shreveport Rgnl",
      "city": "Shreveport",
      "country": "United States",
      "iata_code": "SHV",
      "_geoloc": {
        "latitude": 32.446629,
        "longitude": -93.8256
      },
      "links_count": 16,
      "objectID": "3609"
    },
    {
      "name": "Capital City",
      "city": "Lansing",
      "country": "United States",
      "iata_code": "LAN",
      "_geoloc": {
        "latitude": 42.7787,
        "longitude": -84.587357
      },
      "links_count": 16,
      "objectID": "3544"
    },
    {
      "name": "Bangor Intl",
      "city": "Bangor",
      "country": "United States",
      "iata_code": "BGR",
      "_geoloc": {
        "latitude": 44.807444,
        "longitude": -68.828139
      },
      "links_count": 16,
      "objectID": "3463"
    },
    {
      "name": "Port Hedland Intl",
      "city": "Port Hedland",
      "country": "Australia",
      "iata_code": "PHE",
      "_geoloc": {
        "latitude": -20.377778,
        "longitude": 118.626389
      },
      "links_count": 16,
      "objectID": "3349"
    },
    {
      "name": "Kununurra",
      "city": "Kununurra",
      "country": "Australia",
      "iata_code": "KNX",
      "_geoloc": {
        "latitude": -15.778056,
        "longitude": 128.7075
      },
      "links_count": 16,
      "objectID": "3347"
    },
    {
      "name": "Launceston",
      "city": "Launceston",
      "country": "Australia",
      "iata_code": "LST",
      "_geoloc": {
        "latitude": -41.545278,
        "longitude": 147.214167
      },
      "links_count": 16,
      "objectID": "3337"
    },
    {
      "name": "Jefman",
      "city": "Sorong",
      "country": "Indonesia",
      "iata_code": "SOQ",
      "_geoloc": {
        "latitude": -0.926358,
        "longitude": 131.121194
      },
      "links_count": 16,
      "objectID": "3261"
    },
    {
      "name": "Sultan Babullah",
      "city": "Ternate",
      "country": "Indonesia",
      "iata_code": "TTE",
      "_geoloc": {
        "latitude": 0.831414,
        "longitude": 127.381486
      },
      "links_count": 16,
      "objectID": "3253"
    },
    {
      "name": "Heho",
      "city": "Heho",
      "country": "Burma",
      "iata_code": "HEH",
      "_geoloc": {
        "latitude": 20.747036,
        "longitude": 96.792044
      },
      "links_count": 16,
      "objectID": "3213"
    },
    {
      "name": "Madurai",
      "city": "Madurai",
      "country": "India",
      "iata_code": "IXM",
      "_geoloc": {
        "latitude": 9.834508,
        "longitude": 78.093378
      },
      "links_count": 16,
      "objectID": "3142"
    },
    {
      "name": "Agartala",
      "city": "Agartala",
      "country": "India",
      "iata_code": "IXA",
      "_geoloc": {
        "latitude": 23.886978,
        "longitude": 91.24045
      },
      "links_count": 16,
      "objectID": "3038"
    },
    {
      "name": "Chertovitskoye",
      "city": "Voronezh",
      "country": "Russia",
      "iata_code": "VOZ",
      "_geoloc": {
        "latitude": 51.814211,
        "longitude": 39.229589
      },
      "links_count": 16,
      "objectID": "2987"
    },
    {
      "name": "Astrakhan",
      "city": "Astrakhan",
      "country": "Russia",
      "iata_code": "ASF",
      "_geoloc": {
        "latitude": 46.283333,
        "longitude": 48.006278
      },
      "links_count": 16,
      "objectID": "2966"
    },
    {
      "name": "Tte Av Jorge Henrich Arauz",
      "city": "Trinidad",
      "country": "Bolivia",
      "iata_code": "TDD",
      "_geoloc": {
        "latitude": -14.818739,
        "longitude": -64.918019
      },
      "links_count": 16,
      "objectID": "2769"
    },
    {
      "name": "Capitan Oriel Lea Plaza",
      "city": "Tarija",
      "country": "Bolivia",
      "iata_code": "TJA",
      "_geoloc": {
        "latitude": -21.555736,
        "longitude": -64.701325
      },
      "links_count": 16,
      "objectID": "2768"
    },
    {
      "name": "Vanguardia",
      "city": "Villavicencio",
      "country": "Colombia",
      "iata_code": "VVC",
      "_geoloc": {
        "latitude": 4.167875,
        "longitude": -73.613761
      },
      "links_count": 16,
      "objectID": "2756"
    },
    {
      "name": "Port Harcourt Intl",
      "city": "Port Hartcourt",
      "country": "Nigeria",
      "iata_code": "PHC",
      "_geoloc": {
        "latitude": 5.015494,
        "longitude": 6.949594
      },
      "links_count": 16,
      "objectID": "275"
    },
    {
      "name": "Sao Jose Do Rio Preto",
      "city": "Sao Jose Do Rio Preto",
      "country": "Brazil",
      "iata_code": "SJP",
      "_geoloc": {
        "latitude": -20.816567,
        "longitude": -49.406511
      },
      "links_count": 16,
      "objectID": "2619"
    },
    {
      "name": "Akita",
      "city": "Akita",
      "country": "Japan",
      "iata_code": "AXT",
      "_geoloc": {
        "latitude": 39.615556,
        "longitude": 140.218611
      },
      "links_count": 16,
      "objectID": "2345"
    },
    {
      "name": "Takamatsu",
      "city": "Takamatsu",
      "country": "Japan",
      "iata_code": "TAK",
      "_geoloc": {
        "latitude": 34.214167,
        "longitude": 134.015556
      },
      "links_count": 16,
      "objectID": "2337"
    },
    {
      "name": "Yonago Kitaro",
      "city": "Miho",
      "country": "Japan",
      "iata_code": "YGJ",
      "_geoloc": {
        "latitude": 35.492222,
        "longitude": 133.236389
      },
      "links_count": 16,
      "objectID": "2330"
    },
    {
      "name": "Basrah Intl",
      "city": "Basrah",
      "country": "Iraq",
      "iata_code": "BSR",
      "_geoloc": {
        "latitude": 30.549069,
        "longitude": 47.662142
      },
      "links_count": 16,
      "objectID": "2234"
    },
    {
      "name": "Madang",
      "city": "Madang",
      "country": "Papua New Guinea",
      "iata_code": "MAG",
      "_geoloc": {
        "latitude": -5.207083,
        "longitude": 145.7887
      },
      "links_count": 16,
      "objectID": "2"
    },
    {
      "name": "North Eleuthera",
      "city": "North Eleuthera",
      "country": "Bahamas",
      "iata_code": "ELH",
      "_geoloc": {
        "latitude": 25.474861,
        "longitude": -76.683489
      },
      "links_count": 16,
      "objectID": "1943"
    },
    {
      "name": "Mont Joli",
      "city": "Mont Joli",
      "country": "Canada",
      "iata_code": "YYY",
      "_geoloc": {
        "latitude": 48.608612,
        "longitude": -68.208056
      },
      "links_count": 16,
      "objectID": "192"
    },
    {
      "name": "Churchill",
      "city": "Churchill",
      "country": "Canada",
      "iata_code": "YYQ",
      "_geoloc": {
        "latitude": 58.739167,
        "longitude": -94.065
      },
      "links_count": 16,
      "objectID": "187"
    },
    {
      "name": "Angel Albino Corzo",
      "city": "Tuxtla Gutierrez",
      "country": "Mexico",
      "iata_code": "TGZ",
      "_geoloc": {
        "latitude": 16.561822,
        "longitude": -93.026081
      },
      "links_count": 16,
      "objectID": "1846"
    },
    {
      "name": "Ponciano Arriaga Intl",
      "city": "San Luis Potosi",
      "country": "Mexico",
      "iata_code": "SLP",
      "_geoloc": {
        "latitude": 22.254303,
        "longitude": -100.930806
      },
      "links_count": 16,
      "objectID": "1842"
    },
    {
      "name": "General Lucio Blanco Intl",
      "city": "Reynosa",
      "country": "Mexico",
      "iata_code": "REX",
      "_geoloc": {
        "latitude": 26.008908,
        "longitude": -98.228513
      },
      "links_count": 16,
      "objectID": "1839"
    },
    {
      "name": "Innsbruck",
      "city": "Innsbruck",
      "country": "Austria",
      "iata_code": "INN",
      "_geoloc": {
        "latitude": 47.260219,
        "longitude": 11.343964
      },
      "links_count": 16,
      "objectID": "1610"
    },
    {
      "name": "Zaragoza Ab",
      "city": "Zaragoza",
      "country": "Spain",
      "iata_code": "ZAZ",
      "_geoloc": {
        "latitude": 41.666242,
        "longitude": -1.041553
      },
      "links_count": 16,
      "objectID": "1252"
    },
    {
      "name": "La Palma",
      "city": "Santa Cruz De La Palma",
      "country": "Spain",
      "iata_code": "SPC",
      "_geoloc": {
        "latitude": 28.626478,
        "longitude": -17.755611
      },
      "links_count": 16,
      "objectID": "1053"
    },
    {
      "name": "Kronoberg",
      "city": "Vaxjo",
      "country": "Sweden",
      "iata_code": "VXO",
      "_geoloc": {
        "latitude": 56.929144,
        "longitude": 14.727994
      },
      "links_count": 15,
      "objectID": "711"
    },
    {
      "name": "Kvernberget",
      "city": "Kristiansund",
      "country": "Norway",
      "iata_code": "KSU",
      "_geoloc": {
        "latitude": 63.111781,
        "longitude": 7.824522
      },
      "links_count": 15,
      "objectID": "647"
    },
    {
      "name": "Urgench Airport",
      "city": "Urgench",
      "country": "Uzbekistan",
      "iata_code": "UGC",
      "_geoloc": {
        "latitude": 41.5843,
        "longitude": 60.6417
      },
      "links_count": 15,
      "objectID": "6152"
    },
    {
      "name": "Deer Lake",
      "city": "Deer Lake",
      "country": "Canada",
      "iata_code": "YDF",
      "_geoloc": {
        "latitude": 49.210833,
        "longitude": -57.391388
      },
      "links_count": 15,
      "objectID": "45"
    },
    {
      "name": "Asmara Intl",
      "city": "Asmara",
      "country": "Eritrea",
      "iata_code": "ASM",
      "_geoloc": {
        "latitude": 15.291853,
        "longitude": 38.910667
      },
      "links_count": 15,
      "objectID": "3967"
    },
    {
      "name": "Valley Intl",
      "city": "Harlingen",
      "country": "United States",
      "iata_code": "HRL",
      "_geoloc": {
        "latitude": 26.2285,
        "longitude": -97.654389
      },
      "links_count": 15,
      "objectID": "3560"
    },
    {
      "name": "Mutiara",
      "city": "Palu",
      "country": "Indonesia",
      "iata_code": "PLW",
      "_geoloc": {
        "latitude": -0.918542,
        "longitude": 119.909642
      },
      "links_count": 15,
      "objectID": "3249"
    },
    {
      "name": "Orenburg",
      "city": "Orenburg",
      "country": "Russia",
      "iata_code": "REN",
      "_geoloc": {
        "latitude": 51.795786,
        "longitude": 55.456744
      },
      "links_count": 15,
      "objectID": "2991"
    },
    {
      "name": "Samarkand",
      "city": "Samarkand",
      "country": "Uzbekistan",
      "iata_code": "SKD",
      "_geoloc": {
        "latitude": 39.700547,
        "longitude": 66.983829
      },
      "links_count": 15,
      "objectID": "2981"
    },
    {
      "name": "Goloson Intl",
      "city": "La Ceiba",
      "country": "Honduras",
      "iata_code": "LCE",
      "_geoloc": {
        "latitude": 15.742481,
        "longitude": -86.853036
      },
      "links_count": 15,
      "objectID": "1771"
    },
    {
      "name": "Erkilet",
      "city": "Kayseri",
      "country": "Turkey",
      "iata_code": "ASR",
      "_geoloc": {
        "latitude": 38.770386,
        "longitude": 35.495428
      },
      "links_count": 15,
      "objectID": "1696"
    },
    {
      "name": "Berbera",
      "city": "Berbera",
      "country": "Somalia",
      "iata_code": "BBO",
      "_geoloc": {
        "latitude": 10.389167,
        "longitude": 44.941106
      },
      "links_count": 15,
      "objectID": "1122"
    },
    {
      "name": "Egal Intl",
      "city": "Hargeisa",
      "country": "Somalia",
      "iata_code": "HGA",
      "_geoloc": {
        "latitude": 9.518167,
        "longitude": 44.088758
      },
      "links_count": 15,
      "objectID": "1121"
    },
    {
      "name": "Tete Chingodzi",
      "city": "Tete",
      "country": "Mozambique",
      "iata_code": "TET",
      "_geoloc": {
        "latitude": -16.104817,
        "longitude": 33.640181
      },
      "links_count": 14,
      "objectID": "988"
    },
    {
      "name": "Beira",
      "city": "Beira",
      "country": "Mozambique",
      "iata_code": "BEW",
      "_geoloc": {
        "latitude": -19.796419,
        "longitude": 34.907556
      },
      "links_count": 14,
      "objectID": "974"
    },
    {
      "name": "Livingstone",
      "city": "Livingstone",
      "country": "Zambia",
      "iata_code": "LVI",
      "_geoloc": {
        "latitude": -17.821756,
        "longitude": 25.822692
      },
      "links_count": 14,
      "objectID": "906"
    },
    {
      "name": "Maun",
      "city": "Maun",
      "country": "Botswana",
      "iata_code": "MUB",
      "_geoloc": {
        "latitude": -19.972564,
        "longitude": 23.431086
      },
      "links_count": 14,
      "objectID": "880"
    },
    {
      "name": "Zhoubai",
      "city": "Qianjiang",
      "country": "China",
      "iata_code": "JIQ",
      "_geoloc": {
        "latitude": 29.515,
        "longitude": 108.83
      },
      "links_count": 14,
      "objectID": "8781"
    },
    {
      "name": "Uummannaq Heliport",
      "city": "Uummannaq",
      "country": "Greenland",
      "iata_code": "UMD",
      "_geoloc": {
        "latitude": 70.4047,
        "longitude": 52.0702
      },
      "links_count": 14,
      "objectID": "8628"
    },
    {
      "name": "Panama City-NW Florida Bea.",
      "city": "Panama City",
      "country": "United States",
      "iata_code": "ECP",
      "_geoloc": {
        "latitude": 30.3417,
        "longitude": -85.7973
      },
      "links_count": 14,
      "objectID": "7669"
    },
    {
      "name": "Dangriga Airport",
      "city": "Dangriga",
      "country": "Belize",
      "iata_code": "DGA",
      "_geoloc": {
        "latitude": 16.966667,
        "longitude": -88.216667
      },
      "links_count": 14,
      "objectID": "7287"
    },
    {
      "name": "Begishevo",
      "city": "Nizhnekamsk",
      "country": "Russia",
      "iata_code": "NBC",
      "_geoloc": {
        "latitude": 55.34,
        "longitude": 52.06
      },
      "links_count": 14,
      "objectID": "6969"
    },
    {
      "name": "Goleniow",
      "city": "Szczecin",
      "country": "Poland",
      "iata_code": "SZZ",
      "_geoloc": {
        "latitude": 53.584731,
        "longitude": 14.902206
      },
      "links_count": 14,
      "objectID": "676"
    },
    {
      "name": "Aro",
      "city": "Molde",
      "country": "Norway",
      "iata_code": "MOL",
      "_geoloc": {
        "latitude": 62.744722,
        "longitude": 7.2625
      },
      "links_count": 14,
      "objectID": "651"
    },
    {
      "name": "Jiayuguan Airport",
      "city": "Jiayuguan",
      "country": "China",
      "iata_code": "JGN",
      "_geoloc": {
        "latitude": 39.8569,
        "longitude": 98.3414
      },
      "links_count": 14,
      "objectID": "6432"
    },
    {
      "name": "Shanhaiguan Airport",
      "city": "Qinhuangdao",
      "country": "China",
      "iata_code": "SHP",
      "_geoloc": {
        "latitude": 39.9681,
        "longitude": 119.731
      },
      "links_count": 14,
      "objectID": "6429"
    },
    {
      "name": "Anqing Airport",
      "city": "Anqing",
      "country": "China",
      "iata_code": "AQG",
      "_geoloc": {
        "latitude": 30.5822,
        "longitude": 117.0502
      },
      "links_count": 14,
      "objectID": "6427"
    },
    {
      "name": "Weifang Airport",
      "city": "Weifang",
      "country": "China",
      "iata_code": "WEF",
      "_geoloc": {
        "latitude": 36.6467,
        "longitude": 119.119
      },
      "links_count": 14,
      "objectID": "6388"
    },
    {
      "name": "Diqing Airport",
      "city": "Shangri-La",
      "country": "China",
      "iata_code": "DIG",
      "_geoloc": {
        "latitude": 27.7936,
        "longitude": 99.6772
      },
      "links_count": 14,
      "objectID": "6375"
    },
    {
      "name": "Xilinhot Airport",
      "city": "Xilinhot",
      "country": "China",
      "iata_code": "XIL",
      "_geoloc": {
        "latitude": 43.9156,
        "longitude": 115.964
      },
      "links_count": 14,
      "objectID": "6350"
    },
    {
      "name": "Ulanhot Airport",
      "city": "Ulanhot",
      "country": "China",
      "iata_code": "HLH",
      "_geoloc": {
        "latitude": 46.083,
        "longitude": 122.017
      },
      "links_count": 14,
      "objectID": "6349"
    },
    {
      "name": "Hamilton Island Airport",
      "city": "Hamilton Island",
      "country": "Australia",
      "iata_code": "HTI",
      "_geoloc": {
        "latitude": -20.3581,
        "longitude": 148.952
      },
      "links_count": 14,
      "objectID": "6242"
    },
    {
      "name": "Vinh Airport",
      "city": "Vinh",
      "country": "Vietnam",
      "iata_code": "VII",
      "_geoloc": {
        "latitude": 18.737569,
        "longitude": 105.670764
      },
      "links_count": 14,
      "objectID": "6195"
    },
    {
      "name": "Cam Ranh Airport",
      "city": "Nha Trang",
      "country": "Vietnam",
      "iata_code": "CXR",
      "_geoloc": {
        "latitude": 11.998153,
        "longitude": 109.219372
      },
      "links_count": 14,
      "objectID": "6189"
    },
    {
      "name": "Buon Ma Thuot Airport",
      "city": "Buonmethuot",
      "country": "Vietnam",
      "iata_code": "BMV",
      "_geoloc": {
        "latitude": 12.668311,
        "longitude": 108.120272
      },
      "links_count": 14,
      "objectID": "6187"
    },
    {
      "name": "Fergana Airport",
      "city": "Fergana",
      "country": "Uzbekistan",
      "iata_code": "FEG",
      "_geoloc": {
        "latitude": 40.3588,
        "longitude": 71.745
      },
      "links_count": 14,
      "objectID": "6149"
    },
    {
      "name": "Cherepovets Airport",
      "city": "Cherepovets",
      "country": "Russia",
      "iata_code": "CEE",
      "_geoloc": {
        "latitude": 59.2736,
        "longitude": 38.0158
      },
      "links_count": 14,
      "objectID": "6111"
    },
    {
      "name": "Cayo Coco Airport",
      "city": "Cayo Coco",
      "country": "Cuba",
      "iata_code": "CCC",
      "_geoloc": {
        "latitude": 22.5132,
        "longitude": -78.511
      },
      "links_count": 14,
      "objectID": "5852"
    },
    {
      "name": "Osvaldo Vieira International Airport",
      "city": "Bissau",
      "country": "Guinea-Bissau",
      "iata_code": "OXB",
      "_geoloc": {
        "latitude": 11.89485,
        "longitude": -15.653681
      },
      "links_count": 14,
      "objectID": "5665"
    },
    {
      "name": "Kuujjuarapik Airport",
      "city": "Kuujjuarapik",
      "country": "Canada",
      "iata_code": "YGW",
      "_geoloc": {
        "latitude": 55.2819,
        "longitude": -77.7653
      },
      "links_count": 14,
      "objectID": "5496"
    },
    {
      "name": "Qaqortoq Heliport",
      "city": "Qaqortoq",
      "country": "Greenland",
      "iata_code": "JJU",
      "_geoloc": {
        "latitude": 60.7158,
        "longitude": -46.0294
      },
      "links_count": 14,
      "objectID": "5442"
    },
    {
      "name": "Arviat",
      "city": "Eskimo Point",
      "country": "Canada",
      "iata_code": "YEK",
      "_geoloc": {
        "latitude": 61.094166,
        "longitude": -94.070833
      },
      "links_count": 14,
      "objectID": "50"
    },
    {
      "name": "Albert J Ellis",
      "city": "Jacksonville NC",
      "country": "United States",
      "iata_code": "OAJ",
      "_geoloc": {
        "latitude": 34.829164,
        "longitude": -77.612139
      },
      "links_count": 14,
      "objectID": "4386"
    },
    {
      "name": "Sary-Arka",
      "city": "Karaganda",
      "country": "Kazakhstan",
      "iata_code": "KGF",
      "_geoloc": {
        "latitude": 49.670833,
        "longitude": 73.334444
      },
      "links_count": 14,
      "objectID": "4375"
    },
    {
      "name": "Airport",
      "city": "Vadso",
      "country": "Norway",
      "iata_code": "VDS",
      "_geoloc": {
        "latitude": 70.065,
        "longitude": 29.844
      },
      "links_count": 14,
      "objectID": "4328"
    },
    {
      "name": "Woerthersee International Airport",
      "city": "Klagenfurt",
      "country": "Austria",
      "iata_code": "KLU",
      "_geoloc": {
        "latitude": 46.642514,
        "longitude": 14.337739
      },
      "links_count": 14,
      "objectID": "4322"
    },
    {
      "name": "Dunhuang Airport",
      "city": "Dunhuang",
      "country": "China",
      "iata_code": "DNH",
      "_geoloc": {
        "latitude": 40.094,
        "longitude": 94.4818
      },
      "links_count": 14,
      "objectID": "4308"
    },
    {
      "name": "Santa Cruz",
      "city": "Santa Cruz",
      "country": "Bolivia",
      "iata_code": "SRZ",
      "_geoloc": {
        "latitude": -17.8,
        "longitude": -63.166667
      },
      "links_count": 14,
      "objectID": "4247"
    },
    {
      "name": "Missoula Intl",
      "city": "Missoula",
      "country": "United States",
      "iata_code": "MSO",
      "_geoloc": {
        "latitude": 46.916306,
        "longitude": -114.090556
      },
      "links_count": 14,
      "objectID": "4216"
    },
    {
      "name": "Palmas",
      "city": "Palmas",
      "country": "Brazil",
      "iata_code": "PMW",
      "_geoloc": {
        "latitude": -10.241667,
        "longitude": -48.35278
      },
      "links_count": 14,
      "objectID": "4214"
    },
    {
      "name": "Tri-Cities Regional Airport",
      "city": "BRISTOL",
      "country": "United States",
      "iata_code": "TRI",
      "_geoloc": {
        "latitude": 36.4752222,
        "longitude": -82.4074167
      },
      "links_count": 14,
      "objectID": "4116"
    },
    {
      "name": "Montgomery Regional Airport ",
      "city": "MONTGOMERY",
      "country": "United States",
      "iata_code": "MGM",
      "_geoloc": {
        "latitude": 32.3006389,
        "longitude": -86.3939722
      },
      "links_count": 14,
      "objectID": "4115"
    },
    {
      "name": "Dali",
      "city": "Dali",
      "country": "China",
      "iata_code": "DLU",
      "_geoloc": {
        "latitude": 25.649444,
        "longitude": 100.319444
      },
      "links_count": 14,
      "objectID": "4054"
    },
    {
      "name": "Taiz Intl",
      "city": "Taiz",
      "country": "Yemen",
      "iata_code": "TAI",
      "_geoloc": {
        "latitude": 13.685964,
        "longitude": 44.139056
      },
      "links_count": 14,
      "objectID": "3975"
    },
    {
      "name": "Juwata",
      "city": "Taraken",
      "country": "Indonesia",
      "iata_code": "TRK",
      "_geoloc": {
        "latitude": 3.326694,
        "longitude": 117.565569
      },
      "links_count": 14,
      "objectID": "3920"
    },
    {
      "name": "Iskandar",
      "city": "Pangkalan Bun",
      "country": "Indonesia",
      "iata_code": "PKN",
      "_geoloc": {
        "latitude": -2.705197,
        "longitude": 111.673208
      },
      "links_count": 14,
      "objectID": "3910"
    },
    {
      "name": "Depati Amir",
      "city": "Pangkal Pinang",
      "country": "Indonesia",
      "iata_code": "PGK",
      "_geoloc": {
        "latitude": -2.1622,
        "longitude": 106.139064
      },
      "links_count": 14,
      "objectID": "3905"
    },
    {
      "name": "Great Falls Intl",
      "city": "Great Falls",
      "country": "United States",
      "iata_code": "GTF",
      "_geoloc": {
        "latitude": 47.482,
        "longitude": -111.370689
      },
      "links_count": 14,
      "objectID": "3880"
    },
    {
      "name": "King Salmon",
      "city": "King Salmon",
      "country": "United States",
      "iata_code": "AKN",
      "_geoloc": {
        "latitude": 58.676778,
        "longitude": -156.649278
      },
      "links_count": 14,
      "objectID": "3794"
    },
    {
      "name": "Plattsburgh Intl",
      "city": "Plattsburgh",
      "country": "United States",
      "iata_code": "PBG",
      "_geoloc": {
        "latitude": 44.650944,
        "longitude": -73.468139
      },
      "links_count": 14,
      "objectID": "3771"
    },
    {
      "name": "Edward G Pitka Sr",
      "city": "Galena",
      "country": "United States",
      "iata_code": "GAL",
      "_geoloc": {
        "latitude": 64.736178,
        "longitude": -156.937417
      },
      "links_count": 14,
      "objectID": "3764"
    },
    {
      "name": "Augusta Rgnl At Bush Fld",
      "city": "Bush Field",
      "country": "United States",
      "iata_code": "AGS",
      "_geoloc": {
        "latitude": 33.369944,
        "longitude": -81.9645
      },
      "links_count": 14,
      "objectID": "3658"
    },
    {
      "name": "Karratha",
      "city": "Karratha",
      "country": "Australia",
      "iata_code": "KTA",
      "_geoloc": {
        "latitude": -20.712222,
        "longitude": 116.773333
      },
      "links_count": 14,
      "objectID": "3345"
    },
    {
      "name": "Mackay",
      "city": "Mackay",
      "country": "Australia",
      "iata_code": "MKY",
      "_geoloc": {
        "latitude": -21.171667,
        "longitude": 149.179722
      },
      "links_count": 14,
      "objectID": "3326"
    },
    {
      "name": "Sultan Mahmud",
      "city": "Kuala Terengganu",
      "country": "Malaysia",
      "iata_code": "TGG",
      "_geoloc": {
        "latitude": 5.382639,
        "longitude": 103.10336
      },
      "links_count": 14,
      "objectID": "3307"
    },
    {
      "name": "Minangkabau",
      "city": "Padang",
      "country": "Indonesia",
      "iata_code": "PDG",
      "_geoloc": {
        "latitude": -0.874989,
        "longitude": 100.351881
      },
      "links_count": 14,
      "objectID": "3278"
    },
    {
      "name": "Tawau",
      "city": "Tawau",
      "country": "Malaysia",
      "iata_code": "TWU",
      "_geoloc": {
        "latitude": 4.313369,
        "longitude": 118.121953
      },
      "links_count": 14,
      "objectID": "3271"
    },
    {
      "name": "Bintulu",
      "city": "Bintulu",
      "country": "Malaysia",
      "iata_code": "BTU",
      "_geoloc": {
        "latitude": 3.12385,
        "longitude": 113.020472
      },
      "links_count": 14,
      "objectID": "3262"
    },
    {
      "name": "Rendani",
      "city": "Manokwari",
      "country": "Indonesia",
      "iata_code": "MKW",
      "_geoloc": {
        "latitude": -0.891833,
        "longitude": 134.049183
      },
      "links_count": 14,
      "objectID": "3260"
    },
    {
      "name": "Silchar",
      "city": "Silchar",
      "country": "India",
      "iata_code": "IXS",
      "_geoloc": {
        "latitude": 24.912928,
        "longitude": 92.978742
      },
      "links_count": 14,
      "objectID": "3055"
    },
    {
      "name": "Udaipur",
      "city": "Udaipur",
      "country": "India",
      "iata_code": "UDR",
      "_geoloc": {
        "latitude": 24.617697,
        "longitude": 73.8961
      },
      "links_count": 14,
      "objectID": "3023"
    },
    {
      "name": "Bhopal",
      "city": "Bhopal",
      "country": "India",
      "iata_code": "BHO",
      "_geoloc": {
        "latitude": 23.287467,
        "longitude": 77.337375
      },
      "links_count": 14,
      "objectID": "3002"
    },
    {
      "name": "Murmansk",
      "city": "Murmansk",
      "country": "Russia",
      "iata_code": "MMK",
      "_geoloc": {
        "latitude": 68.781672,
        "longitude": 32.750822
      },
      "links_count": 14,
      "objectID": "2949"
    },
    {
      "name": "Simferopol Intl",
      "city": "Simferopol",
      "country": "Ukraine",
      "iata_code": "SIP",
      "_geoloc": {
        "latitude": 45.052222,
        "longitude": 33.975139
      },
      "links_count": 14,
      "objectID": "2942"
    },
    {
      "name": "Aktyubinsk",
      "city": "Aktyubinsk",
      "country": "Kazakhstan",
      "iata_code": "AKX",
      "_geoloc": {
        "latitude": 50.245833,
        "longitude": 57.206667
      },
      "links_count": 14,
      "objectID": "2920"
    },
    {
      "name": "Coronel Francisco Secada Vignetta Intl",
      "city": "Iquitos",
      "country": "Peru",
      "iata_code": "IQT",
      "_geoloc": {
        "latitude": -3.784739,
        "longitude": -73.308806
      },
      "links_count": 14,
      "objectID": "2801"
    },
    {
      "name": "Rochambeau",
      "city": "Cayenne",
      "country": "French Guiana",
      "iata_code": "CAY",
      "_geoloc": {
        "latitude": 4.819808,
        "longitude": -52.360447
      },
      "links_count": 14,
      "objectID": "2774"
    },
    {
      "name": "Mallam Aminu Intl",
      "city": "Kano",
      "country": "Nigeria",
      "iata_code": "KAN",
      "_geoloc": {
        "latitude": 12.047589,
        "longitude": 8.524622
      },
      "links_count": 14,
      "objectID": "270"
    },
    {
      "name": "La Florida",
      "city": "La Serena",
      "country": "Chile",
      "iata_code": "LSC",
      "_geoloc": {
        "latitude": -29.916233,
        "longitude": -71.199522
      },
      "links_count": 14,
      "objectID": "2662"
    },
    {
      "name": "Ministro Victor Konder Intl",
      "city": "Navegantes",
      "country": "Brazil",
      "iata_code": "NVT",
      "_geoloc": {
        "latitude": -26.879999,
        "longitude": -48.65139
      },
      "links_count": 14,
      "objectID": "2595"
    },
    {
      "name": "Prefeito Renato Moreira",
      "city": "Imperatriz",
      "country": "Brazil",
      "iata_code": "IMP",
      "_geoloc": {
        "latitude": -5.531292,
        "longitude": -47.46005
      },
      "links_count": 14,
      "objectID": "2572"
    },
    {
      "name": "San Carlos De Bariloche",
      "city": "San Carlos De Bariloche",
      "country": "Argentina",
      "iata_code": "BRC",
      "_geoloc": {
        "latitude": -41.151172,
        "longitude": -71.157542
      },
      "links_count": 14,
      "objectID": "2513"
    },
    {
      "name": "Comodoro Rivadavia",
      "city": "Comodoro Rivadavia",
      "country": "Argentina",
      "iata_code": "CRD",
      "_geoloc": {
        "latitude": -45.785347,
        "longitude": -67.465508
      },
      "links_count": 14,
      "objectID": "2487"
    },
    {
      "name": "Rosario",
      "city": "Rosario",
      "country": "Argentina",
      "iata_code": "ROS",
      "_geoloc": {
        "latitude": -32.903611,
        "longitude": -60.785
      },
      "links_count": 14,
      "objectID": "2440"
    },
    {
      "name": "Cagayan De Oro",
      "city": "Ladag",
      "country": "Philippines",
      "iata_code": "CGY",
      "_geoloc": {
        "latitude": 8.415619,
        "longitude": 124.611219
      },
      "links_count": 14,
      "objectID": "2400"
    },
    {
      "name": "Asahikawa",
      "city": "Asahikawa",
      "country": "Japan",
      "iata_code": "AKJ",
      "_geoloc": {
        "latitude": 43.670833,
        "longitude": 142.4475
      },
      "links_count": 14,
      "objectID": "2299"
    },
    {
      "name": "Salalah",
      "city": "Salalah",
      "country": "Oman",
      "iata_code": "SLL",
      "_geoloc": {
        "latitude": 17.038719,
        "longitude": 54.091297
      },
      "links_count": 14,
      "objectID": "2195"
    },
    {
      "name": "Yazd Shahid Sadooghi",
      "city": "Yazd",
      "country": "Iran",
      "iata_code": "AZD",
      "_geoloc": {
        "latitude": 31.904908,
        "longitude": 54.276503
      },
      "links_count": 14,
      "objectID": "2164"
    },
    {
      "name": "Playa De Oro Intl",
      "city": "Manzanillo",
      "country": "Mexico",
      "iata_code": "ZLO",
      "_geoloc": {
        "latitude": 19.144778,
        "longitude": -104.558631
      },
      "links_count": 14,
      "objectID": "1858"
    },
    {
      "name": "General Leobardo C Ruiz Intl",
      "city": "Zacatecas",
      "country": "Mexico",
      "iata_code": "ZCL",
      "_geoloc": {
        "latitude": 22.897112,
        "longitude": -102.68689
      },
      "links_count": 14,
      "objectID": "1855"
    },
    {
      "name": "General Francisco Javier Mina Intl",
      "city": "Tampico",
      "country": "Mexico",
      "iata_code": "TAM",
      "_geoloc": {
        "latitude": 22.29645,
        "longitude": -97.865931
      },
      "links_count": 14,
      "objectID": "1848"
    },
    {
      "name": "Queretaro Intercontinental",
      "city": "Queretaro",
      "country": "Mexico",
      "iata_code": "QRO",
      "_geoloc": {
        "latitude": 20.617289,
        "longitude": -100.185658
      },
      "links_count": 14,
      "objectID": "1838"
    },
    {
      "name": "Hermanos Serdan Intl",
      "city": "Puebla",
      "country": "Mexico",
      "iata_code": "PBC",
      "_geoloc": {
        "latitude": 19.158144,
        "longitude": -98.371447
      },
      "links_count": 14,
      "objectID": "1831"
    },
    {
      "name": "Diyarbakir",
      "city": "Diyabakir",
      "country": "Turkey",
      "iata_code": "DIY",
      "_geoloc": {
        "latitude": 37.893897,
        "longitude": 40.201019
      },
      "links_count": 14,
      "objectID": "1722"
    },
    {
      "name": "Val D Or",
      "city": "Val D'or",
      "country": "Canada",
      "iata_code": "YVO",
      "_geoloc": {
        "latitude": 48.053333,
        "longitude": -77.782778
      },
      "links_count": 14,
      "objectID": "153"
    },
    {
      "name": "Biard",
      "city": "Poitiers",
      "country": "France",
      "iata_code": "PIS",
      "_geoloc": {
        "latitude": 46.587745,
        "longitude": 0.306666
      },
      "links_count": 14,
      "objectID": "1268"
    },
    {
      "name": "Rijeka",
      "city": "Rijeka",
      "country": "Croatia",
      "iata_code": "RJK",
      "_geoloc": {
        "latitude": 45.216889,
        "longitude": 14.570267
      },
      "links_count": 14,
      "objectID": "1205"
    },
    {
      "name": "Comox",
      "city": "Comox",
      "country": "Canada",
      "iata_code": "YQQ",
      "_geoloc": {
        "latitude": 49.710833,
        "longitude": -124.886667
      },
      "links_count": 14,
      "objectID": "119"
    },
    {
      "name": "Victoria Falls Intl",
      "city": "Victoria Falls",
      "country": "Zimbabwe",
      "iata_code": "VFA",
      "_geoloc": {
        "latitude": -18.095881,
        "longitude": 25.839006
      },
      "links_count": 14,
      "objectID": "1004"
    },
    {
      "name": "Toamasina",
      "city": "Toamasina",
      "country": "Madagascar",
      "iata_code": "TMM",
      "_geoloc": {
        "latitude": -18.109517,
        "longitude": 49.392536
      },
      "links_count": 13,
      "objectID": "921"
    },
    {
      "name": "Mattala Rajapaksa Intl.",
      "city": "Mattala",
      "country": "Sri Lanka",
      "iata_code": "HRI",
      "_geoloc": {
        "latitude": 6.284467,
        "longitude": 81.124128
      },
      "links_count": 13,
      "objectID": "8949"
    },
    {
      "name": "Kulob Airport",
      "city": "Kulyab",
      "country": "Tajikistan",
      "iata_code": "TJU",
      "_geoloc": {
        "latitude": 37.981667,
        "longitude": 69.799444
      },
      "links_count": 13,
      "objectID": "7563"
    },
    {
      "name": "Placencia Airport",
      "city": "Placencia",
      "country": "Belize",
      "iata_code": "PLJ",
      "_geoloc": {
        "latitude": 16.536944,
        "longitude": -88.361667
      },
      "links_count": 13,
      "objectID": "7288"
    },
    {
      "name": "Hoybuktmoen",
      "city": "Kirkenes",
      "country": "Norway",
      "iata_code": "KKN",
      "_geoloc": {
        "latitude": 69.725781,
        "longitude": 29.891295
      },
      "links_count": 13,
      "objectID": "649"
    },
    {
      "name": "Eelde",
      "city": "Groningen",
      "country": "Netherlands",
      "iata_code": "GRQ",
      "_geoloc": {
        "latitude": 53.11972,
        "longitude": 6.579444
      },
      "links_count": 13,
      "objectID": "586"
    },
    {
      "name": "Bagan Intl",
      "city": "Nyuang U",
      "country": "Burma",
      "iata_code": "NYU",
      "_geoloc": {
        "latitude": 21.173833266,
        "longitude": 94.9246666
      },
      "links_count": 13,
      "objectID": "4001"
    },
    {
      "name": "Wiley Post Will Rogers Mem",
      "city": "Barrow",
      "country": "United States",
      "iata_code": "BRW",
      "_geoloc": {
        "latitude": 71.285446,
        "longitude": -156.766003
      },
      "links_count": 13,
      "objectID": "3571"
    },
    {
      "name": "Fort Yukon",
      "city": "Fort Yukon",
      "country": "United States",
      "iata_code": "FYU",
      "_geoloc": {
        "latitude": 66.571492,
        "longitude": -145.250417
      },
      "links_count": 13,
      "objectID": "3420"
    },
    {
      "name": "Bukhara",
      "city": "Bukhara",
      "country": "Uzbekistan",
      "iata_code": "BHK",
      "_geoloc": {
        "latitude": 39.775,
        "longitude": 64.483333
      },
      "links_count": 13,
      "objectID": "2980"
    },
    {
      "name": "Juliaca",
      "city": "Juliaca",
      "country": "Peru",
      "iata_code": "JUL",
      "_geoloc": {
        "latitude": -15.467103,
        "longitude": -70.158169
      },
      "links_count": 13,
      "objectID": "2792"
    },
    {
      "name": "Carlos Ibanez Del Campo Intl",
      "city": "Punta Arenas",
      "country": "Chile",
      "iata_code": "PUQ",
      "_geoloc": {
        "latitude": -53.002642,
        "longitude": -70.854586
      },
      "links_count": 13,
      "objectID": "2647"
    },
    {
      "name": "El Loa",
      "city": "Calama",
      "country": "Chile",
      "iata_code": "CJC",
      "_geoloc": {
        "latitude": -22.498175,
        "longitude": -68.903575
      },
      "links_count": 13,
      "objectID": "2645"
    },
    {
      "name": "Karpathos",
      "city": "Karpathos",
      "country": "Greece",
      "iata_code": "AOK",
      "_geoloc": {
        "latitude": 35.421408,
        "longitude": 27.146008
      },
      "links_count": 13,
      "objectID": "1459"
    },
    {
      "name": "Kefallinia",
      "city": "Keffallinia",
      "country": "Greece",
      "iata_code": "EFL",
      "_geoloc": {
        "latitude": 38.120069,
        "longitude": 20.500481
      },
      "links_count": 13,
      "objectID": "1455"
    },
    {
      "name": "Thompson",
      "city": "Thompson",
      "country": "Canada",
      "iata_code": "YTH",
      "_geoloc": {
        "latitude": 55.801111,
        "longitude": -97.864166
      },
      "links_count": 13,
      "objectID": "141"
    },
    {
      "name": "Natashquan",
      "city": "Natashquan",
      "country": "Canada",
      "iata_code": "YNA",
      "_geoloc": {
        "latitude": 50.19,
        "longitude": -61.789167
      },
      "links_count": 12,
      "objectID": "94"
    },
    {
      "name": "Yichun Mingyueshan Airport",
      "city": "Yichun",
      "country": "China",
      "iata_code": "YIC",
      "_geoloc": {
        "latitude": 27.8033,
        "longitude": 114.3081
      },
      "links_count": 12,
      "objectID": "9107"
    },
    {
      "name": "Lensk",
      "city": "Lensk",
      "country": "Russia",
      "iata_code": "ULK",
      "_geoloc": {
        "latitude": 60.723,
        "longitude": 114.825
      },
      "links_count": 12,
      "objectID": "9026"
    },
    {
      "name": "Sannvhe",
      "city": "Tangshan",
      "country": "China",
      "iata_code": "TVS",
      "_geoloc": {
        "latitude": 39.717444,
        "longitude": 118.002389
      },
      "links_count": 12,
      "objectID": "8858"
    },
    {
      "name": "Lublin",
      "city": "Lublin",
      "country": "Poland",
      "iata_code": "LUZ",
      "_geoloc": {
        "latitude": 51.239333,
        "longitude": 22.714083
      },
      "links_count": 12,
      "objectID": "8832"
    },
    {
      "name": "Jixi Airport",
      "city": "Jixi",
      "country": "China",
      "iata_code": "JXA",
      "_geoloc": {
        "latitude": 45.30611,
        "longitude": 130.99667
      },
      "links_count": 12,
      "objectID": "8417"
    },
    {
      "name": "Hebei Handan Airport",
      "city": "Handan",
      "country": "China",
      "iata_code": "HDG",
      "_geoloc": {
        "latitude": 36.524,
        "longitude": 114.43
      },
      "links_count": 12,
      "objectID": "8407"
    },
    {
      "name": "Gazipasa Airport",
      "city": "Alanya",
      "country": "Turkey",
      "iata_code": "GZP",
      "_geoloc": {
        "latitude": 36.2993,
        "longitude": 32.3014
      },
      "links_count": 12,
      "objectID": "8266"
    },
    {
      "name": "Xingyi Airport",
      "city": "Xingyi",
      "country": "China",
      "iata_code": "ACX",
      "_geoloc": {
        "latitude": 25.0882,
        "longitude": 104.9587
      },
      "links_count": 12,
      "objectID": "7506"
    },
    {
      "name": "Barreiras Airport",
      "city": "Barreiras",
      "country": "Brazil",
      "iata_code": "BRA",
      "_geoloc": {
        "latitude": -12.083333,
        "longitude": -45.0
      },
      "links_count": 12,
      "objectID": "7373"
    },
    {
      "name": "Kallax",
      "city": "Lulea",
      "country": "Sweden",
      "iata_code": "LLA",
      "_geoloc": {
        "latitude": 65.543758,
        "longitude": 22.121989
      },
      "links_count": 12,
      "objectID": "734"
    },
    {
      "name": "Stebbins Airport",
      "city": "Stebbins",
      "country": "United States",
      "iata_code": "WBB",
      "_geoloc": {
        "latitude": 63.515833,
        "longitude": -162.278056
      },
      "links_count": 12,
      "objectID": "7193"
    },
    {
      "name": "Gallivare",
      "city": "Gallivare",
      "country": "Sweden",
      "iata_code": "GEV",
      "_geoloc": {
        "latitude": 67.132408,
        "longitude": 20.814636
      },
      "links_count": 12,
      "objectID": "715"
    },
    {
      "name": "Show Low Regional Airport",
      "city": "Show Low",
      "country": "United States",
      "iata_code": "SOW",
      "_geoloc": {
        "latitude": 34.265556,
        "longitude": -110.005556
      },
      "links_count": 12,
      "objectID": "7078"
    },
    {
      "name": "San Luis Valley Regional Airport",
      "city": "Alamosa",
      "country": "United States",
      "iata_code": "ALS",
      "_geoloc": {
        "latitude": 37.435,
        "longitude": -105.866667
      },
      "links_count": 12,
      "objectID": "7073"
    },
    {
      "name": "Charles M Schulz Sonoma Co",
      "city": "Santa Rosa",
      "country": "United States",
      "iata_code": "STS",
      "_geoloc": {
        "latitude": 38.508978,
        "longitude": -122.81288
      },
      "links_count": 12,
      "objectID": "6992"
    },
    {
      "name": "Vieques Airport",
      "city": "Vieques Island",
      "country": "Puerto Rico",
      "iata_code": "VQS",
      "_geoloc": {
        "latitude": 18.1158,
        "longitude": -65.4227
      },
      "links_count": 12,
      "objectID": "6788"
    },
    {
      "name": "Gorgan Airport",
      "city": "Gorgan",
      "country": "Iran",
      "iata_code": "GBT",
      "_geoloc": {
        "latitude": 36.909381,
        "longitude": 54.401339
      },
      "links_count": 12,
      "objectID": "6747"
    },
    {
      "name": "Navoi Airport",
      "city": "Navoi",
      "country": "Uzbekistan",
      "iata_code": "NVI",
      "_geoloc": {
        "latitude": 40.1172,
        "longitude": 65.1708
      },
      "links_count": 12,
      "objectID": "6485"
    },
    {
      "name": "Dibrugarh Airport",
      "city": "Dibrugarh",
      "country": "India",
      "iata_code": "DIB",
      "_geoloc": {
        "latitude": 27.4839,
        "longitude": 95.0169
      },
      "links_count": 12,
      "objectID": "6443"
    },
    {
      "name": "Nanchong Airport",
      "city": "Nanchong",
      "country": "China",
      "iata_code": "NAO",
      "_geoloc": {
        "latitude": 30.754,
        "longitude": 106.062
      },
      "links_count": 12,
      "objectID": "6401"
    },
    {
      "name": "Quzhou Airport",
      "city": "Quzhou",
      "country": "China",
      "iata_code": "JUZ",
      "_geoloc": {
        "latitude": 28.9658,
        "longitude": 118.899
      },
      "links_count": 12,
      "objectID": "6382"
    },
    {
      "name": "Jiujiang Lushan Airport",
      "city": "Jiujiang",
      "country": "China",
      "iata_code": "JIU",
      "_geoloc": {
        "latitude": 29.733,
        "longitude": 115.983
      },
      "links_count": 12,
      "objectID": "6381"
    },
    {
      "name": "Mangshi Airport",
      "city": "Luxi",
      "country": "China",
      "iata_code": "LUM",
      "_geoloc": {
        "latitude": 24.4011,
        "longitude": 98.5317
      },
      "links_count": 12,
      "objectID": "6376"
    },
    {
      "name": "Qingyang Airport",
      "city": "Qingyang",
      "country": "China",
      "iata_code": "IQN",
      "_geoloc": {
        "latitude": 35.7997,
        "longitude": 107.603
      },
      "links_count": 12,
      "objectID": "6365"
    },
    {
      "name": "Port Macquarie Airport",
      "city": "Port Macquarie",
      "country": "Australia",
      "iata_code": "PQQ",
      "_geoloc": {
        "latitude": -31.4358,
        "longitude": 152.863
      },
      "links_count": 12,
      "objectID": "6320"
    },
    {
      "name": "Mildura Airport",
      "city": "Mildura",
      "country": "Australia",
      "iata_code": "MQL",
      "_geoloc": {
        "latitude": -34.2292,
        "longitude": 142.086
      },
      "links_count": 12,
      "objectID": "6298"
    },
    {
      "name": "Vitória da Conquista Airport",
      "city": "Vitória Da Conquista",
      "country": "Brazil",
      "iata_code": "VDC",
      "_geoloc": {
        "latitude": -14.862761,
        "longitude": -40.863106
      },
      "links_count": 12,
      "objectID": "6039"
    },
    {
      "name": "Kerry",
      "city": "Kerry",
      "country": "Ireland",
      "iata_code": "KIR",
      "_geoloc": {
        "latitude": 52.180878,
        "longitude": -9.523783
      },
      "links_count": 12,
      "objectID": "601"
    },
    {
      "name": "Wewak Intl",
      "city": "Wewak",
      "country": "Papua New Guinea",
      "iata_code": "WWK",
      "_geoloc": {
        "latitude": -3.583828,
        "longitude": 143.669186
      },
      "links_count": 12,
      "objectID": "6"
    },
    {
      "name": "Nagoya Airport",
      "city": "Nagoya",
      "country": "Japan",
      "iata_code": "NKM",
      "_geoloc": {
        "latitude": 35.255,
        "longitude": 136.924
      },
      "links_count": 12,
      "objectID": "5997"
    },
    {
      "name": "McGrath Airport",
      "city": "Mcgrath",
      "country": "United States",
      "iata_code": "MCG",
      "_geoloc": {
        "latitude": 62.9529,
        "longitude": -155.606
      },
      "links_count": 12,
      "objectID": "5965"
    },
    {
      "name": "Lar Airport",
      "city": "Lar",
      "country": "Iran",
      "iata_code": "LRR",
      "_geoloc": {
        "latitude": 27.674725,
        "longitude": 54.383278
      },
      "links_count": 12,
      "objectID": "5934"
    },
    {
      "name": "Sari Dasht E Naz Airport",
      "city": "Dasht-e-naz",
      "country": "Iran",
      "iata_code": "SRY",
      "_geoloc": {
        "latitude": 36.635833,
        "longitude": 53.193611
      },
      "links_count": 12,
      "objectID": "5933"
    },
    {
      "name": "Samaná El Catey International Airport",
      "city": "Samana",
      "country": "Dominican Republic",
      "iata_code": "AZS",
      "_geoloc": {
        "latitude": 19.267,
        "longitude": -69.742
      },
      "links_count": 12,
      "objectID": "5810"
    },
    {
      "name": "Asyut International Airport",
      "city": "Asyut",
      "country": "Egypt",
      "iata_code": "ATZ",
      "_geoloc": {
        "latitude": 27.046508,
        "longitude": 31.011983
      },
      "links_count": 12,
      "objectID": "5691"
    },
    {
      "name": "Ondjiva Pereira Airport",
      "city": "Ondjiva",
      "country": "Angola",
      "iata_code": "VPE",
      "_geoloc": {
        "latitude": -17.043464,
        "longitude": 15.683822
      },
      "links_count": 12,
      "objectID": "5632"
    },
    {
      "name": "Waskaganish Airport",
      "city": "Waskaganish",
      "country": "Canada",
      "iata_code": "YKQ",
      "_geoloc": {
        "latitude": 51.4733,
        "longitude": -78.7583
      },
      "links_count": 12,
      "objectID": "5507"
    },
    {
      "name": "Chesterfield Inlet Airport",
      "city": "Chesterfield Inlet",
      "country": "Canada",
      "iata_code": "YCS",
      "_geoloc": {
        "latitude": 63.3469,
        "longitude": -90.7311
      },
      "links_count": 12,
      "objectID": "5487"
    },
    {
      "name": "Caye Caulker Airport",
      "city": "Caye Caulker",
      "country": "Belize",
      "iata_code": "CUK",
      "_geoloc": {
        "latitude": 17.7347,
        "longitude": -88.0325
      },
      "links_count": 12,
      "objectID": "5454"
    },
    {
      "name": "Kimbe Airport",
      "city": "Hoskins",
      "country": "Papua New Guinea",
      "iata_code": "HKN",
      "_geoloc": {
        "latitude": -5.46217,
        "longitude": 150.405
      },
      "links_count": 12,
      "objectID": "5424"
    },
    {
      "name": "St Mawgan",
      "city": "Newquai",
      "country": "United Kingdom",
      "iata_code": "NQY",
      "_geoloc": {
        "latitude": 50.440558,
        "longitude": -4.995408
      },
      "links_count": 12,
      "objectID": "481"
    },
    {
      "name": "Marsa Alam Intl",
      "city": "Marsa Alam",
      "country": "Egypt",
      "iata_code": "RMF",
      "_geoloc": {
        "latitude": 25.557111,
        "longitude": 34.583711
      },
      "links_count": 12,
      "objectID": "4197"
    },
    {
      "name": "Kalymnos Island",
      "city": "Kalymnos",
      "country": "Greece",
      "iata_code": "JKL",
      "_geoloc": {
        "latitude": 36.963333,
        "longitude": 26.940556
      },
      "links_count": 12,
      "objectID": "4192"
    },
    {
      "name": "Muan",
      "city": "Muan",
      "country": "South Korea",
      "iata_code": "MWX",
      "_geoloc": {
        "latitude": 34.991389,
        "longitude": 126.382778
      },
      "links_count": 12,
      "objectID": "4189"
    },
    {
      "name": "Dongying Airport",
      "city": "Dongying",
      "country": "China",
      "iata_code": "DOY",
      "_geoloc": {
        "latitude": 37.2716,
        "longitude": 118.2819
      },
      "links_count": 12,
      "objectID": "4145"
    },
    {
      "name": "Sandakan",
      "city": "Sandakan",
      "country": "Malaysia",
      "iata_code": "SDK",
      "_geoloc": {
        "latitude": 5.900897,
        "longitude": 118.059486
      },
      "links_count": 12,
      "objectID": "4141"
    },
    {
      "name": "Page Municipal Airport",
      "city": "Page",
      "country": "United States",
      "iata_code": "PGA",
      "_geoloc": {
        "latitude": 36.9261,
        "longitude": -111.4483
      },
      "links_count": 12,
      "objectID": "4124"
    },
    {
      "name": "Bismarck Municipal Airport",
      "city": "Bismarck",
      "country": "United States",
      "iata_code": "BIS",
      "_geoloc": {
        "latitude": 46.775842,
        "longitude": -100.757931
      },
      "links_count": 12,
      "objectID": "4083"
    },
    {
      "name": "Mulu",
      "city": "Mulu",
      "country": "Malaysia",
      "iata_code": "MZV",
      "_geoloc": {
        "latitude": 4.048333,
        "longitude": 114.805
      },
      "links_count": 12,
      "objectID": "4056"
    },
    {
      "name": "Kalamazoo",
      "city": "Kalamazoo",
      "country": "United States",
      "iata_code": "AZO",
      "_geoloc": {
        "latitude": 42.234875,
        "longitude": -85.552058
      },
      "links_count": 12,
      "objectID": "4039"
    },
    {
      "name": "Batumi",
      "city": "Batumi",
      "country": "Georgia",
      "iata_code": "BUS",
      "_geoloc": {
        "latitude": 41.610278,
        "longitude": 41.599694
      },
      "links_count": 12,
      "objectID": "3971"
    },
    {
      "name": "Elmira Corning Rgnl",
      "city": "Elmira",
      "country": "United States",
      "iata_code": "ELM",
      "_geoloc": {
        "latitude": 42.159889,
        "longitude": -76.891611
      },
      "links_count": 12,
      "objectID": "3946"
    },
    {
      "name": "New Castle",
      "city": "Wilmington",
      "country": "United States",
      "iata_code": "ILG",
      "_geoloc": {
        "latitude": 39.678722,
        "longitude": -75.606528
      },
      "links_count": 12,
      "objectID": "3859"
    },
    {
      "name": "Alexandria Intl",
      "city": "Alexandria",
      "country": "United States",
      "iata_code": "AEX",
      "_geoloc": {
        "latitude": 31.3274,
        "longitude": -92.549833
      },
      "links_count": 12,
      "objectID": "3852"
    },
    {
      "name": "Mc Allen Miller Intl",
      "city": "Mcallen",
      "country": "United States",
      "iata_code": "MFE",
      "_geoloc": {
        "latitude": 26.175833,
        "longitude": -98.238611
      },
      "links_count": 12,
      "objectID": "3826"
    },
    {
      "name": "Cheyenne Rgnl Jerry Olson Fld",
      "city": "Cheyenne",
      "country": "United States",
      "iata_code": "CYS",
      "_geoloc": {
        "latitude": 41.155722,
        "longitude": -104.811839
      },
      "links_count": 12,
      "objectID": "3804"
    },
    {
      "name": "Santa Fe Muni",
      "city": "Santa Fe",
      "country": "United States",
      "iata_code": "SAF",
      "_geoloc": {
        "latitude": 35.617108,
        "longitude": -106.089422
      },
      "links_count": 12,
      "objectID": "3784"
    },
    {
      "name": "Robert Gray Aaf",
      "city": "Killeen",
      "country": "United States",
      "iata_code": "GRK",
      "_geoloc": {
        "latitude": 31.06725,
        "longitude": -97.828917
      },
      "links_count": 12,
      "objectID": "3775"
    },
    {
      "name": "Monroe Rgnl",
      "city": "Monroe",
      "country": "United States",
      "iata_code": "MLU",
      "_geoloc": {
        "latitude": 32.510864,
        "longitude": -92.037689
      },
      "links_count": 12,
      "objectID": "3732"
    },
    {
      "name": "Stewart Intl",
      "city": "Newburgh",
      "country": "United States",
      "iata_code": "SWF",
      "_geoloc": {
        "latitude": 41.504094,
        "longitude": -74.104839
      },
      "links_count": 12,
      "objectID": "3661"
    },
    {
      "name": "Meadows Fld",
      "city": "Bakersfield",
      "country": "United States",
      "iata_code": "BFL",
      "_geoloc": {
        "latitude": 35.433598,
        "longitude": -119.05677
      },
      "links_count": 12,
      "objectID": "3558"
    },
    {
      "name": "Nantucket Mem",
      "city": "Nantucket",
      "country": "United States",
      "iata_code": "ACK",
      "_geoloc": {
        "latitude": 41.253053,
        "longitude": -70.060181
      },
      "links_count": 12,
      "objectID": "3517"
    },
    {
      "name": "Lafayette Rgnl",
      "city": "Lafayette",
      "country": "United States",
      "iata_code": "LFT",
      "_geoloc": {
        "latitude": 30.205278,
        "longitude": -91.987611
      },
      "links_count": 12,
      "objectID": "3493"
    },
    {
      "name": "Hotan",
      "city": "Hotan",
      "country": "China",
      "iata_code": "HTN",
      "_geoloc": {
        "latitude": 37.038522,
        "longitude": 79.864933
      },
      "links_count": 12,
      "objectID": "3398"
    },
    {
      "name": "Erfurt",
      "city": "Erfurt",
      "country": "Germany",
      "iata_code": "ERF",
      "_geoloc": {
        "latitude": 50.979811,
        "longitude": 10.958106
      },
      "links_count": 12,
      "objectID": "339"
    },
    {
      "name": "Sultan Thaha",
      "city": "Jambi",
      "country": "Indonesia",
      "iata_code": "DJB",
      "_geoloc": {
        "latitude": -1.638017,
        "longitude": 103.644378
      },
      "links_count": 12,
      "objectID": "3287"
    },
    {
      "name": "Supadio",
      "city": "Pontianak",
      "country": "Indonesia",
      "iata_code": "PNK",
      "_geoloc": {
        "latitude": -0.150711,
        "longitude": 109.403892
      },
      "links_count": 12,
      "objectID": "3284"
    },
    {
      "name": "Marudi",
      "city": "Marudi",
      "country": "Malaysia",
      "iata_code": "MUR",
      "_geoloc": {
        "latitude": 4.1775,
        "longitude": 114.321944
      },
      "links_count": 12,
      "objectID": "3265"
    },
    {
      "name": "Cambridge Bay",
      "city": "Cambridge Bay",
      "country": "Canada",
      "iata_code": "YCB",
      "_geoloc": {
        "latitude": 69.108055,
        "longitude": -105.138333
      },
      "links_count": 12,
      "objectID": "32"
    },
    {
      "name": "Udon Thani",
      "city": "Udon Thani",
      "country": "Thailand",
      "iata_code": "UTH",
      "_geoloc": {
        "latitude": 17.386436,
        "longitude": 102.788247
      },
      "links_count": 12,
      "objectID": "3183"
    },
    {
      "name": "Hat Yai Intl",
      "city": "Hat Yai",
      "country": "Thailand",
      "iata_code": "HDY",
      "_geoloc": {
        "latitude": 6.933206,
        "longitude": 100.392975
      },
      "links_count": 12,
      "objectID": "3181"
    },
    {
      "name": "Leh",
      "city": "Leh",
      "country": "India",
      "iata_code": "IXL",
      "_geoloc": {
        "latitude": 34.135872,
        "longitude": 77.546514
      },
      "links_count": 12,
      "objectID": "3104"
    },
    {
      "name": "Jodhpur",
      "city": "Jodhpur",
      "country": "India",
      "iata_code": "JDH",
      "_geoloc": {
        "latitude": 26.251092,
        "longitude": 73.048869
      },
      "links_count": 12,
      "objectID": "3097"
    },
    {
      "name": "Aizawl",
      "city": "Aizwal",
      "country": "India",
      "iata_code": "AJL",
      "_geoloc": {
        "latitude": 23.746603,
        "longitude": 92.802767
      },
      "links_count": 12,
      "objectID": "3039"
    },
    {
      "name": "Campbell River",
      "city": "Campbell River",
      "country": "Canada",
      "iata_code": "YBL",
      "_geoloc": {
        "latitude": 49.950832,
        "longitude": -125.270833
      },
      "links_count": 12,
      "objectID": "30"
    },
    {
      "name": "Bolshoye Savino",
      "city": "Perm",
      "country": "Russia",
      "iata_code": "PEE",
      "_geoloc": {
        "latitude": 57.914517,
        "longitude": 56.021214
      },
      "links_count": 12,
      "objectID": "2973"
    },
    {
      "name": "Yelizovo",
      "city": "Petropavlovsk",
      "country": "Russia",
      "iata_code": "PKC",
      "_geoloc": {
        "latitude": 53.167889,
        "longitude": 158.453669
      },
      "links_count": 12,
      "objectID": "2932"
    },
    {
      "name": "Sokol",
      "city": "Magadan",
      "country": "Russia",
      "iata_code": "GDX",
      "_geoloc": {
        "latitude": 59.910989,
        "longitude": 150.720439
      },
      "links_count": 12,
      "objectID": "2930"
    },
    {
      "name": "Wallblake",
      "city": "The Valley",
      "country": "Anguilla",
      "iata_code": "AXA",
      "_geoloc": {
        "latitude": 18.204834,
        "longitude": -63.055084
      },
      "links_count": 12,
      "objectID": "2900"
    },
    {
      "name": "Baker Lake",
      "city": "Baker Lake",
      "country": "Canada",
      "iata_code": "YBK",
      "_geoloc": {
        "latitude": 64.298889,
        "longitude": -96.077778
      },
      "links_count": 12,
      "objectID": "29"
    },
    {
      "name": "Cadete Guillermo Del Castillo Paredes",
      "city": "Tarapoto",
      "country": "Peru",
      "iata_code": "TPP",
      "_geoloc": {
        "latitude": -6.508742,
        "longitude": -76.373247
      },
      "links_count": 12,
      "objectID": "2806"
    },
    {
      "name": "Cap Fap David Abenzur Rengifo Intl",
      "city": "Pucallpa",
      "country": "Peru",
      "iata_code": "PCL",
      "_geoloc": {
        "latitude": -8.377939,
        "longitude": -74.574297
      },
      "links_count": 12,
      "objectID": "2781"
    },
    {
      "name": "Juana Azurduy De Padilla",
      "city": "Sucre",
      "country": "Bolivia",
      "iata_code": "SRE",
      "_geoloc": {
        "latitude": -19.007083,
        "longitude": -65.288747
      },
      "links_count": 12,
      "objectID": "2767"
    },
    {
      "name": "El Carano",
      "city": "Quibdo",
      "country": "Colombia",
      "iata_code": "UIB",
      "_geoloc": {
        "latitude": 5.690758,
        "longitude": -76.641181
      },
      "links_count": 12,
      "objectID": "2753"
    },
    {
      "name": "Matecana",
      "city": "Pereira",
      "country": "Colombia",
      "iata_code": "PEI",
      "_geoloc": {
        "latitude": 4.812675,
        "longitude": -75.739519
      },
      "links_count": 12,
      "objectID": "2739"
    },
    {
      "name": "Alfredo Vasquez Cobo",
      "city": "Leticia",
      "country": "Colombia",
      "iata_code": "LET",
      "_geoloc": {
        "latitude": -4.193549,
        "longitude": -69.943163
      },
      "links_count": 12,
      "objectID": "2728"
    },
    {
      "name": "Baie Comeau",
      "city": "Baie Comeau",
      "country": "Canada",
      "iata_code": "YBC",
      "_geoloc": {
        "latitude": 49.1325,
        "longitude": -68.204444
      },
      "links_count": 12,
      "objectID": "27"
    },
    {
      "name": "Presidente Peron",
      "city": "Neuquen",
      "country": "Argentina",
      "iata_code": "NQN",
      "_geoloc": {
        "latitude": -38.949,
        "longitude": -68.155711
      },
      "links_count": 12,
      "objectID": "2509"
    },
    {
      "name": "Salta",
      "city": "Salta",
      "country": "Argentina",
      "iata_code": "SLA",
      "_geoloc": {
        "latitude": -24.855978,
        "longitude": -65.486169
      },
      "links_count": 12,
      "objectID": "2476"
    },
    {
      "name": "Bacolod",
      "city": "Bacolod",
      "country": "Philippines",
      "iata_code": "BCD",
      "_geoloc": {
        "latitude": 10.642511,
        "longitude": 122.929617
      },
      "links_count": 12,
      "objectID": "2423"
    },
    {
      "name": "Zamboanga Intl",
      "city": "Zamboanga",
      "country": "Philippines",
      "iata_code": "ZAM",
      "_geoloc": {
        "latitude": 6.922419,
        "longitude": 122.059633
      },
      "links_count": 12,
      "objectID": "2404"
    },
    {
      "name": "Daegu Ab",
      "city": "Taegu",
      "country": "South Korea",
      "iata_code": "TAE",
      "_geoloc": {
        "latitude": 35.894108,
        "longitude": 128.658856
      },
      "links_count": 12,
      "objectID": "2381"
    },
    {
      "name": "Oued Irara",
      "city": "Hassi Messaoud",
      "country": "Algeria",
      "iata_code": "HME",
      "_geoloc": {
        "latitude": 31.672972,
        "longitude": 6.140444
      },
      "links_count": 12,
      "objectID": "238"
    },
    {
      "name": "Zenata",
      "city": "Tlemcen",
      "country": "Algeria",
      "iata_code": "TLM",
      "_geoloc": {
        "latitude": 35.016667,
        "longitude": -1.45
      },
      "links_count": 12,
      "objectID": "230"
    },
    {
      "name": "Memanbetsu",
      "city": "Memanbetsu",
      "country": "Japan",
      "iata_code": "MMB",
      "_geoloc": {
        "latitude": 43.880606,
        "longitude": 144.164053
      },
      "links_count": 12,
      "objectID": "2290"
    },
    {
      "name": "Chah Bahar",
      "city": "Chah Bahar",
      "country": "Iran",
      "iata_code": "ZBR",
      "_geoloc": {
        "latitude": 25.44335,
        "longitude": 60.382114
      },
      "links_count": 12,
      "objectID": "2166"
    },
    {
      "name": "Shahid Ashrafi Esfahani",
      "city": "Bakhtaran",
      "country": "Iran",
      "iata_code": "KSH",
      "_geoloc": {
        "latitude": 34.345853,
        "longitude": 47.158128
      },
      "links_count": 12,
      "objectID": "2114"
    },
    {
      "name": "Abadan",
      "city": "Abadan",
      "country": "Iran",
      "iata_code": "ABD",
      "_geoloc": {
        "latitude": 30.371111,
        "longitude": 48.228333
      },
      "links_count": 12,
      "objectID": "2097"
    },
    {
      "name": "Soummam",
      "city": "Bejaja",
      "country": "Algeria",
      "iata_code": "BJA",
      "_geoloc": {
        "latitude": 36.711997,
        "longitude": 5.069922
      },
      "links_count": 12,
      "objectID": "209"
    },
    {
      "name": "King Abdullah Bin Abdulaziz",
      "city": "Gizan",
      "country": "Saudi Arabia",
      "iata_code": "GIZ",
      "_geoloc": {
        "latitude": 16.901111,
        "longitude": 42.585833
      },
      "links_count": 12,
      "objectID": "2066"
    },
    {
      "name": "Herat",
      "city": "Herat",
      "country": "Afghanistan",
      "iata_code": "HEA",
      "_geoloc": {
        "latitude": 34.210017,
        "longitude": 62.2283
      },
      "links_count": 12,
      "objectID": "2048"
    },
    {
      "name": "Bora Bora",
      "city": "Bora Bora",
      "country": "French Polynesia",
      "iata_code": "BOB",
      "_geoloc": {
        "latitude": -16.444378,
        "longitude": -151.751286
      },
      "links_count": 12,
      "objectID": "1989"
    },
    {
      "name": "Tajin",
      "city": "Poza Rico",
      "country": "Mexico",
      "iata_code": "PAZ",
      "_geoloc": {
        "latitude": 20.602671,
        "longitude": -97.460839
      },
      "links_count": 12,
      "objectID": "1830"
    },
    {
      "name": "Xoxocotlan Intl",
      "city": "Oaxaca",
      "country": "Mexico",
      "iata_code": "OAX",
      "_geoloc": {
        "latitude": 16.999906,
        "longitude": -96.726639
      },
      "links_count": 12,
      "objectID": "1829"
    },
    {
      "name": "London",
      "city": "London",
      "country": "Canada",
      "iata_code": "YXU",
      "_geoloc": {
        "latitude": 43.033056,
        "longitude": -81.151111
      },
      "links_count": 12,
      "objectID": "174"
    },
    {
      "name": "Gibraltar",
      "city": "Gibraltar",
      "country": "Gibraltar",
      "iata_code": "GIB",
      "_geoloc": {
        "latitude": 36.151219,
        "longitude": -5.349664
      },
      "links_count": 12,
      "objectID": "1738"
    },
    {
      "name": "Elazig",
      "city": "Elazig",
      "country": "Turkey",
      "iata_code": "EZS",
      "_geoloc": {
        "latitude": 38.606925,
        "longitude": 39.291417
      },
      "links_count": 12,
      "objectID": "1721"
    },
    {
      "name": "Fort St John",
      "city": "Fort Saint John",
      "country": "Canada",
      "iata_code": "YXJ",
      "_geoloc": {
        "latitude": 56.238056,
        "longitude": -120.740278
      },
      "links_count": 12,
      "objectID": "168"
    },
    {
      "name": "Horta",
      "city": "Horta",
      "country": "Portugal",
      "iata_code": "HOR",
      "_geoloc": {
        "latitude": 38.519894,
        "longitude": -28.715872
      },
      "links_count": 12,
      "objectID": "1628"
    },
    {
      "name": "Norman Wells",
      "city": "Norman Wells",
      "country": "Canada",
      "iata_code": "YVQ",
      "_geoloc": {
        "latitude": 65.281617,
        "longitude": -126.798219
      },
      "links_count": 12,
      "objectID": "155"
    },
    {
      "name": "Reggio Calabria",
      "city": "Reggio Calabria",
      "country": "Italy",
      "iata_code": "REG",
      "_geoloc": {
        "latitude": 38.071206,
        "longitude": 15.651556
      },
      "links_count": 12,
      "objectID": "1514"
    },
    {
      "name": "Leros",
      "city": "Leros",
      "country": "Greece",
      "iata_code": "LRS",
      "_geoloc": {
        "latitude": 37.184903,
        "longitude": 26.800289
      },
      "links_count": 12,
      "objectID": "1464"
    },
    {
      "name": "Megas Alexandros Intl",
      "city": "Kavala",
      "country": "Greece",
      "iata_code": "KVA",
      "_geoloc": {
        "latitude": 40.913306,
        "longitude": 24.619223
      },
      "links_count": 12,
      "objectID": "1462"
    },
    {
      "name": "Chios",
      "city": "Chios",
      "country": "Greece",
      "iata_code": "JKH",
      "_geoloc": {
        "latitude": 38.343175,
        "longitude": 26.140572
      },
      "links_count": 12,
      "objectID": "1450"
    },
    {
      "name": "Mwanza",
      "city": "Mwanza",
      "country": "Tanzania",
      "iata_code": "MWZ",
      "_geoloc": {
        "latitude": -2.444486,
        "longitude": 32.932667
      },
      "links_count": 12,
      "objectID": "1183"
    },
    {
      "name": "Wajir",
      "city": "Wajir",
      "country": "Kenya",
      "iata_code": "WJR",
      "_geoloc": {
        "latitude": 1.733239,
        "longitude": 40.091606
      },
      "links_count": 12,
      "objectID": "1149"
    },
    {
      "name": "Sao Pedro",
      "city": "Sao Vicente Island",
      "country": "Cape Verde",
      "iata_code": "VXE",
      "_geoloc": {
        "latitude": 16.833689,
        "longitude": -25.054661
      },
      "links_count": 12,
      "objectID": "1106"
    },
    {
      "name": "Shaktoolik Airport",
      "city": "Shaktoolik",
      "country": "United States",
      "iata_code": "SKK",
      "_geoloc": {
        "latitude": 64.371111,
        "longitude": -161.223889
      },
      "links_count": 11,
      "objectID": "7192"
    },
    {
      "name": "Zweibruecken",
      "city": "Zweibruecken",
      "country": "Germany",
      "iata_code": "ZQW",
      "_geoloc": {
        "latitude": 49.209445,
        "longitude": 7.401323
      },
      "links_count": 11,
      "objectID": "6510"
    },
    {
      "name": "Aksu Airport",
      "city": "Aksu",
      "country": "China",
      "iata_code": "AKU",
      "_geoloc": {
        "latitude": 41.2625,
        "longitude": 80.2917
      },
      "links_count": 11,
      "objectID": "6404"
    },
    {
      "name": "Yan'an Airport",
      "city": "Yan'an",
      "country": "China",
      "iata_code": "ENY",
      "_geoloc": {
        "latitude": 36.6369,
        "longitude": 109.554
      },
      "links_count": 11,
      "objectID": "6367"
    },
    {
      "name": "Radin Inten II (Branti) Airport",
      "city": "Bandar Lampung-Sumatra Island",
      "country": "Indonesia",
      "iata_code": "TKG",
      "_geoloc": {
        "latitude": -5.242339,
        "longitude": 105.178939
      },
      "links_count": 11,
      "objectID": "6223"
    },
    {
      "name": "Turbat International Airport",
      "city": "Turbat",
      "country": "Pakistan",
      "iata_code": "TUK",
      "_geoloc": {
        "latitude": 25.986369,
        "longitude": 63.030167
      },
      "links_count": 11,
      "objectID": "5951"
    },
    {
      "name": "Bahawalpur Airport",
      "city": "Bahawalpur",
      "country": "Pakistan",
      "iata_code": "BHV",
      "_geoloc": {
        "latitude": 29.3481,
        "longitude": 71.717981
      },
      "links_count": 11,
      "objectID": "5939"
    },
    {
      "name": "Whale Cove Airport",
      "city": "Whale Cove",
      "country": "Canada",
      "iata_code": "YXN",
      "_geoloc": {
        "latitude": 62.24,
        "longitude": -92.5981
      },
      "links_count": 11,
      "objectID": "5534"
    },
    {
      "name": "Gurney Airport",
      "city": "Gurney",
      "country": "Papua New Guinea",
      "iata_code": "GUR",
      "_geoloc": {
        "latitude": -10.3115,
        "longitude": 150.334
      },
      "links_count": 11,
      "objectID": "5422"
    },
    {
      "name": "Fairmont Hot Springs",
      "city": "Coral Harbour",
      "country": "Canada",
      "iata_code": "YZS",
      "_geoloc": {
        "latitude": 64.193333,
        "longitude": -83.359444
      },
      "links_count": 11,
      "objectID": "41"
    },
    {
      "name": "Deadhorse",
      "city": "Deadhorse",
      "country": "United States",
      "iata_code": "SCC",
      "_geoloc": {
        "latitude": 70.19475,
        "longitude": -148.465167
      },
      "links_count": 11,
      "objectID": "3620"
    },
    {
      "name": "Carriel Sur Intl",
      "city": "Concepcion",
      "country": "Chile",
      "iata_code": "CCP",
      "_geoloc": {
        "latitude": -36.77265,
        "longitude": -73.063106
      },
      "links_count": 11,
      "objectID": "2656"
    },
    {
      "name": "Rio Gallegos",
      "city": "Rio Gallegos",
      "country": "Argentina",
      "iata_code": "RGL",
      "_geoloc": {
        "latitude": -51.608875,
        "longitude": -69.312636
      },
      "links_count": 11,
      "objectID": "2496"
    },
    {
      "name": "Almirante Zar",
      "city": "Trelew",
      "country": "Argentina",
      "iata_code": "REL",
      "_geoloc": {
        "latitude": -43.2105,
        "longitude": -65.270319
      },
      "links_count": 11,
      "objectID": "2490"
    },
    {
      "name": "Ouargla",
      "city": "Ouargla",
      "country": "Algeria",
      "iata_code": "OGX",
      "_geoloc": {
        "latitude": 31.917223,
        "longitude": 5.412778
      },
      "links_count": 11,
      "objectID": "243"
    },
    {
      "name": "Touat Cheikh Sidi Mohamed Belkebir",
      "city": "Adrar",
      "country": "Algeria",
      "iata_code": "AZR",
      "_geoloc": {
        "latitude": 27.837589,
        "longitude": -0.186414
      },
      "links_count": 11,
      "objectID": "234"
    },
    {
      "name": "Sukkur",
      "city": "Sukkur",
      "country": "Pakistan",
      "iata_code": "SKZ",
      "_geoloc": {
        "latitude": 27.721989,
        "longitude": 68.791683
      },
      "links_count": 11,
      "objectID": "2227"
    },
    {
      "name": "Rangiroa",
      "city": "Rangiroa",
      "country": "French Polynesia",
      "iata_code": "RGI",
      "_geoloc": {
        "latitude": -14.954283,
        "longitude": -147.6608
      },
      "links_count": 11,
      "objectID": "1990"
    },
    {
      "name": "Faleolo Intl",
      "city": "Faleolo",
      "country": "Samoa",
      "iata_code": "APW",
      "_geoloc": {
        "latitude": -13.829969,
        "longitude": -172.008336
      },
      "links_count": 11,
      "objectID": "1969"
    },
    {
      "name": "Antonio Maceo Intl",
      "city": "Santiago De Cuba",
      "country": "Cuba",
      "iata_code": "SCU",
      "_geoloc": {
        "latitude": 19.969769,
        "longitude": -75.835414
      },
      "links_count": 11,
      "objectID": "1905"
    },
    {
      "name": "Kosice",
      "city": "Kosice",
      "country": "Slovakia",
      "iata_code": "KSC",
      "_geoloc": {
        "latitude": 48.663055,
        "longitude": 21.241112
      },
      "links_count": 11,
      "objectID": "1746"
    },
    {
      "name": "Timmins",
      "city": "Timmins",
      "country": "Canada",
      "iata_code": "YTS",
      "_geoloc": {
        "latitude": 48.569721,
        "longitude": -81.376667
      },
      "links_count": 11,
      "objectID": "143"
    },
    {
      "name": "Sudbury",
      "city": "Sudbury",
      "country": "Canada",
      "iata_code": "YSB",
      "_geoloc": {
        "latitude": 46.625,
        "longitude": -80.798889
      },
      "links_count": 11,
      "objectID": "133"
    },
    {
      "name": "La Roche",
      "city": "Brive",
      "country": "France",
      "iata_code": "BVE",
      "_geoloc": {
        "latitude": 45.150833,
        "longitude": 1.469167
      },
      "links_count": 11,
      "objectID": "1278"
    },
    {
      "name": "Arrachart",
      "city": "Antsiranana",
      "country": "Madagascar",
      "iata_code": "DIE",
      "_geoloc": {
        "latitude": -12.3494,
        "longitude": 49.291747
      },
      "links_count": 10,
      "objectID": "923"
    },
    {
      "name": "Sanliurfa GAP",
      "city": "Sanliurfa",
      "country": "Turkey",
      "iata_code": "GNY",
      "_geoloc": {
        "latitude": 37.45,
        "longitude": 38.9
      },
      "links_count": 10,
      "objectID": "9044"
    },
    {
      "name": "Changbaishan Airport",
      "city": "Baishan",
      "country": "China",
      "iata_code": "NBS",
      "_geoloc": {
        "latitude": 42.088056,
        "longitude": 127.548889
      },
      "links_count": 10,
      "objectID": "8826"
    },
    {
      "name": "Bayannur",
      "city": "Bayannur",
      "country": "China",
      "iata_code": "RLK",
      "_geoloc": {
        "latitude": 40.926389,
        "longitude": 107.738889
      },
      "links_count": 10,
      "objectID": "8630"
    },
    {
      "name": "Hector Silva Airstrip",
      "city": "Belmopan",
      "country": "Belize",
      "iata_code": "BCV",
      "_geoloc": {
        "latitude": 17.269444,
        "longitude": -88.776111
      },
      "links_count": 10,
      "objectID": "8227"
    },
    {
      "name": "George",
      "city": "George",
      "country": "South Africa",
      "iata_code": "GRJ",
      "_geoloc": {
        "latitude": -34.005553,
        "longitude": 22.378889
      },
      "links_count": 10,
      "objectID": "804"
    },
    {
      "name": "East London",
      "city": "East London",
      "country": "South Africa",
      "iata_code": "ELS",
      "_geoloc": {
        "latitude": -33.035569,
        "longitude": 27.825939
      },
      "links_count": 10,
      "objectID": "800"
    },
    {
      "name": "Schefferville",
      "city": "Schefferville",
      "country": "Canada",
      "iata_code": "YKL",
      "_geoloc": {
        "latitude": 54.805278,
        "longitude": -66.805278
      },
      "links_count": 10,
      "objectID": "80"
    },
    {
      "name": "Tengchong Tuofeng Airport",
      "city": "Tengchong",
      "country": "China",
      "iata_code": "TCZ",
      "_geoloc": {
        "latitude": 24.938651,
        "longitude": 98.483591
      },
      "links_count": 10,
      "objectID": "7862"
    },
    {
      "name": "Kamloops",
      "city": "Kamloops",
      "country": "Canada",
      "iata_code": "YKA",
      "_geoloc": {
        "latitude": 50.702222,
        "longitude": -120.444444
      },
      "links_count": 10,
      "objectID": "78"
    },
    {
      "name": "Laage",
      "city": "Laage",
      "country": "Germany",
      "iata_code": "RLG",
      "_geoloc": {
        "latitude": 53.918167,
        "longitude": 12.278333
      },
      "links_count": 10,
      "objectID": "772"
    },
    {
      "name": "Tasiilaq",
      "city": "Angmagssalik",
      "country": "Greenland",
      "iata_code": "AGM",
      "_geoloc": {
        "latitude": 65.612222,
        "longitude": -37.618333
      },
      "links_count": 10,
      "objectID": "7642"
    },
    {
      "name": "Persian Gulf Airport",
      "city": "Khalije Fars",
      "country": "Iran",
      "iata_code": "PGU",
      "_geoloc": {
        "latitude": 27.379444,
        "longitude": 52.7375
      },
      "links_count": 10,
      "objectID": "7546"
    },
    {
      "name": "Sundsvall Harnosand",
      "city": "Sundsvall",
      "country": "Sweden",
      "iata_code": "SDL",
      "_geoloc": {
        "latitude": 62.528125,
        "longitude": 17.443928
      },
      "links_count": 10,
      "objectID": "721"
    },
    {
      "name": "Koyuk Alfred Adams Airport",
      "city": "Koyuk",
      "country": "United States",
      "iata_code": "KKA",
      "_geoloc": {
        "latitude": 64.939444,
        "longitude": -161.154167
      },
      "links_count": 10,
      "objectID": "7190"
    },
    {
      "name": "Hollis Seaplane Base",
      "city": "Hollis",
      "country": "United States",
      "iata_code": "HYL",
      "_geoloc": {
        "latitude": 55.481667,
        "longitude": -132.646111
      },
      "links_count": 10,
      "objectID": "7145"
    },
    {
      "name": "Craig Seaplane Base",
      "city": "Craig",
      "country": "United States",
      "iata_code": "CGA",
      "_geoloc": {
        "latitude": 55.478889,
        "longitude": -133.147778
      },
      "links_count": 10,
      "objectID": "7144"
    },
    {
      "name": "Halmstad",
      "city": "Halmstad",
      "country": "Sweden",
      "iata_code": "HAD",
      "_geoloc": {
        "latitude": 56.691128,
        "longitude": 12.820211
      },
      "links_count": 10,
      "objectID": "709"
    },
    {
      "name": "Narsarsuaq",
      "city": "Narssarssuaq",
      "country": "Greenland",
      "iata_code": "UAK",
      "_geoloc": {
        "latitude": 61.160517,
        "longitude": -45.425978
      },
      "links_count": 10,
      "objectID": "7"
    },
    {
      "name": "Tongren",
      "city": "Tongren",
      "country": "China",
      "iata_code": "TEN",
      "_geoloc": {
        "latitude": 27.884,
        "longitude": 109.31
      },
      "links_count": 10,
      "objectID": "6963"
    },
    {
      "name": "Mardin Airport",
      "city": "Mardin",
      "country": "Turkey",
      "iata_code": "MQM",
      "_geoloc": {
        "latitude": 37.2233,
        "longitude": 40.6317
      },
      "links_count": 10,
      "objectID": "6753"
    },
    {
      "name": "St Marys Airport",
      "city": "St Mary's",
      "country": "United States",
      "iata_code": "KSM",
      "_geoloc": {
        "latitude": 62.0605,
        "longitude": -163.302
      },
      "links_count": 10,
      "objectID": "6718"
    },
    {
      "name": "Dandong",
      "city": "Dandong",
      "country": "China",
      "iata_code": "DDG",
      "_geoloc": {
        "latitude": 40.0255,
        "longitude": 124.2866
      },
      "links_count": 10,
      "objectID": "6433"
    },
    {
      "name": "Jinzhou Airport",
      "city": "Jinzhou",
      "country": "China",
      "iata_code": "JNZ",
      "_geoloc": {
        "latitude": 41.1014,
        "longitude": 121.062
      },
      "links_count": 10,
      "objectID": "6412"
    },
    {
      "name": "Nyingchi Airport",
      "city": "Nyingchi",
      "country": "China",
      "iata_code": "LZY",
      "_geoloc": {
        "latitude": 29.3033,
        "longitude": 94.3353
      },
      "links_count": 10,
      "objectID": "6402"
    },
    {
      "name": "Meixian Airport",
      "city": "Meixian",
      "country": "China",
      "iata_code": "MXZ",
      "_geoloc": {
        "latitude": 24.35,
        "longitude": 116.133
      },
      "links_count": 10,
      "objectID": "6354"
    },
    {
      "name": "Bronnoy",
      "city": "Bronnoysund",
      "country": "Norway",
      "iata_code": "BNN",
      "_geoloc": {
        "latitude": 65.461111,
        "longitude": 12.2175
      },
      "links_count": 10,
      "objectID": "634"
    },
    {
      "name": "Gove Airport",
      "city": "Gove",
      "country": "Australia",
      "iata_code": "GOV",
      "_geoloc": {
        "latitude": -12.2694,
        "longitude": 136.818
      },
      "links_count": 10,
      "objectID": "6316"
    },
    {
      "name": "Cloncurry Airport",
      "city": "Cloncurry",
      "country": "Australia",
      "iata_code": "CNJ",
      "_geoloc": {
        "latitude": -20.6686,
        "longitude": 140.504
      },
      "links_count": 10,
      "objectID": "6255"
    },
    {
      "name": "Karshi Khanabad Airport",
      "city": "Khanabad",
      "country": "Uzbekistan",
      "iata_code": "KSQ",
      "_geoloc": {
        "latitude": 38.8336,
        "longitude": 65.9215
      },
      "links_count": 10,
      "objectID": "6153"
    },
    {
      "name": "Sovetsky Tyumenskaya Airport",
      "city": "Sovetskiy",
      "country": "Russia",
      "iata_code": "OVS",
      "_geoloc": {
        "latitude": 61.32,
        "longitude": 63.6044
      },
      "links_count": 10,
      "objectID": "6140"
    },
    {
      "name": "Poliarny Airport",
      "city": "Yakutia",
      "country": "Russia",
      "iata_code": "PYJ",
      "_geoloc": {
        "latitude": 66.400431,
        "longitude": 112.030325
      },
      "links_count": 10,
      "objectID": "6092"
    },
    {
      "name": "Orlando Bezerra de Menezes Airport",
      "city": "Juazeiro Do Norte",
      "country": "Brazil",
      "iata_code": "JDO",
      "_geoloc": {
        "latitude": -7.218958,
        "longitude": -39.2701
      },
      "links_count": 10,
      "objectID": "6034"
    },
    {
      "name": "General Santos International Airport",
      "city": "General Santos City",
      "country": "Philippines",
      "iata_code": "GES",
      "_geoloc": {
        "latitude": 6.106439,
        "longitude": 125.2353
      },
      "links_count": 10,
      "objectID": "6011"
    },
    {
      "name": "Kushiro Airport",
      "city": "Kushiro",
      "country": "Japan",
      "iata_code": "KUH",
      "_geoloc": {
        "latitude": 43.041,
        "longitude": 144.193
      },
      "links_count": 10,
      "objectID": "5994"
    },
    {
      "name": "Sayun International Airport",
      "city": "Sayun Intl",
      "country": "Yemen",
      "iata_code": "GXF",
      "_geoloc": {
        "latitude": 15.966111,
        "longitude": 48.7883
      },
      "links_count": 10,
      "objectID": "5954"
    },
    {
      "name": "Norsup Airport",
      "city": "Norsup",
      "country": "Vanuatu",
      "iata_code": "NUS",
      "_geoloc": {
        "latitude": -16.0797,
        "longitude": 167.401
      },
      "links_count": 10,
      "objectID": "5905"
    },
    {
      "name": "Tri State Milton J Ferguson Field",
      "city": "Huntington",
      "country": "United States",
      "iata_code": "HTS",
      "_geoloc": {
        "latitude": 38.3667,
        "longitude": -82.558
      },
      "links_count": 10,
      "objectID": "5742"
    },
    {
      "name": "Dodge City Regional Airport",
      "city": "Dodge City",
      "country": "United States",
      "iata_code": "DDC",
      "_geoloc": {
        "latitude": 37.7634,
        "longitude": -99.9656
      },
      "links_count": 10,
      "objectID": "5733"
    },
    {
      "name": "Port Sudan New International Airport",
      "city": "Port Sudan",
      "country": "Sudan",
      "iata_code": "PZU",
      "_geoloc": {
        "latitude": 19.4336,
        "longitude": 37.2341
      },
      "links_count": 10,
      "objectID": "5702"
    },
    {
      "name": "Malindi Airport",
      "city": "Malindi",
      "country": "Kenya",
      "iata_code": "MYD",
      "_geoloc": {
        "latitude": -3.22931,
        "longitude": 40.1017
      },
      "links_count": 10,
      "objectID": "5694"
    },
    {
      "name": "Heringsdorf Airport",
      "city": "Heringsdorf",
      "country": "Germany",
      "iata_code": "HDF",
      "_geoloc": {
        "latitude": 53.878706,
        "longitude": 14.152347
      },
      "links_count": 10,
      "objectID": "5557"
    },
    {
      "name": "The Pas Airport",
      "city": "The Pas",
      "country": "Canada",
      "iata_code": "YQD",
      "_geoloc": {
        "latitude": 53.9714,
        "longitude": -101.091
      },
      "links_count": 10,
      "objectID": "5524"
    },
    {
      "name": "Igloolik Airport",
      "city": "Igloolik",
      "country": "Canada",
      "iata_code": "YGT",
      "_geoloc": {
        "latitude": 69.3647,
        "longitude": -81.8161
      },
      "links_count": 10,
      "objectID": "5495"
    },
    {
      "name": "Momote Airport",
      "city": "Momote",
      "country": "Papua New Guinea",
      "iata_code": "MAS",
      "_geoloc": {
        "latitude": -2.06189,
        "longitude": 147.424
      },
      "links_count": 10,
      "objectID": "5430"
    },
    {
      "name": "Girua Airport",
      "city": "Girua",
      "country": "Papua New Guinea",
      "iata_code": "PNP",
      "_geoloc": {
        "latitude": -8.80454,
        "longitude": 148.309
      },
      "links_count": 10,
      "objectID": "5423"
    },
    {
      "name": "Stornoway",
      "city": "Stornoway",
      "country": "United Kingdom",
      "iata_code": "SYY",
      "_geoloc": {
        "latitude": 58.215556,
        "longitude": -6.331111
      },
      "links_count": 10,
      "objectID": "541"
    },
    {
      "name": "Sumburgh",
      "city": "Sumburgh",
      "country": "United Kingdom",
      "iata_code": "LSI",
      "_geoloc": {
        "latitude": 59.878889,
        "longitude": -1.295556
      },
      "links_count": 10,
      "objectID": "530"
    },
    {
      "name": "Humberside",
      "city": "Humberside",
      "country": "United Kingdom",
      "iata_code": "HUY",
      "_geoloc": {
        "latitude": 53.574444,
        "longitude": -0.350833
      },
      "links_count": 10,
      "objectID": "515"
    },
    {
      "name": "City of Derry",
      "city": "Londonderry",
      "country": "United Kingdom",
      "iata_code": "LDY",
      "_geoloc": {
        "latitude": 55.042778,
        "longitude": -7.161111
      },
      "links_count": 10,
      "objectID": "468"
    },
    {
      "name": "Vaasa",
      "city": "Vaasa",
      "country": "Finland",
      "iata_code": "VAA",
      "_geoloc": {
        "latitude": 63.05065,
        "longitude": 21.762175
      },
      "links_count": 10,
      "objectID": "462"
    },
    {
      "name": "Noyabrsk",
      "city": "Noyabrsk",
      "country": "Russia",
      "iata_code": "NOJ",
      "_geoloc": {
        "latitude": 63.110079,
        "longitude": 75.162243
      },
      "links_count": 10,
      "objectID": "4365"
    },
    {
      "name": "Central",
      "city": "Saratov",
      "country": "Russia",
      "iata_code": "RTW",
      "_geoloc": {
        "latitude": 51.334366,
        "longitude": 46.022952
      },
      "links_count": 10,
      "objectID": "4363"
    },
    {
      "name": "Liberal Muni",
      "city": "Liberal",
      "country": "United States",
      "iata_code": "LBL",
      "_geoloc": {
        "latitude": 37.044222,
        "longitude": -100.95986
      },
      "links_count": 10,
      "objectID": "4341"
    },
    {
      "name": "Mehamn",
      "city": "Mehamn",
      "country": "Norway",
      "iata_code": "MEH",
      "_geoloc": {
        "latitude": 71.029722,
        "longitude": 27.826667
      },
      "links_count": 10,
      "objectID": "4327"
    },
    {
      "name": "University Park Airport",
      "city": "State College Pennsylvania",
      "country": "United States",
      "iata_code": "SCE",
      "_geoloc": {
        "latitude": 40.849278,
        "longitude": -77.848694
      },
      "links_count": 10,
      "objectID": "4318"
    },
    {
      "name": "Tomsk Bogashevo Airport",
      "city": "Tomsk",
      "country": "Russia",
      "iata_code": "TOF",
      "_geoloc": {
        "latitude": 56.380278,
        "longitude": 85.208333
      },
      "links_count": 10,
      "objectID": "4297"
    },
    {
      "name": "Ballina Byron Gateway",
      "city": "Ballina Byron Bay",
      "country": "Australia",
      "iata_code": "BNK",
      "_geoloc": {
        "latitude": -28.833889,
        "longitude": 153.5625
      },
      "links_count": 10,
      "objectID": "4291"
    },
    {
      "name": "Kulusuk",
      "city": "Kulusuk",
      "country": "Greenland",
      "iata_code": "KUS",
      "_geoloc": {
        "latitude": 65.566667,
        "longitude": -37.1166667
      },
      "links_count": 10,
      "objectID": "4248"
    },
    {
      "name": "Tanna island",
      "city": "Tanna",
      "country": "Vanuatu",
      "iata_code": "TAH",
      "_geoloc": {
        "latitude": -19.455198,
        "longitude": 169.22394
      },
      "links_count": 10,
      "objectID": "4242"
    },
    {
      "name": "Duong Dong Airport",
      "city": "Phu Quoc",
      "country": "Vietnam",
      "iata_code": "PQC",
      "_geoloc": {
        "latitude": 10.227025,
        "longitude": 103.967169
      },
      "links_count": 10,
      "objectID": "4168"
    },
    {
      "name": "Dalat",
      "city": "Dalat",
      "country": "Vietnam",
      "iata_code": "DLI",
      "_geoloc": {
        "latitude": 11.75,
        "longitude": 108.367
      },
      "links_count": 10,
      "objectID": "4153"
    },
    {
      "name": "Mbs Intl",
      "city": "Saginaw",
      "country": "United States",
      "iata_code": "MBS",
      "_geoloc": {
        "latitude": 43.532913,
        "longitude": -84.079647
      },
      "links_count": 10,
      "objectID": "4128"
    },
    {
      "name": "Glacier Park Intl",
      "city": "Kalispell",
      "country": "United States",
      "iata_code": "FCA",
      "_geoloc": {
        "latitude": 48.310472,
        "longitude": -114.256
      },
      "links_count": 10,
      "objectID": "4127"
    },
    {
      "name": "Central Wisconsin",
      "city": "Wassau",
      "country": "United States",
      "iata_code": "CWA",
      "_geoloc": {
        "latitude": 44.772726,
        "longitude": -89.646635
      },
      "links_count": 10,
      "objectID": "4045"
    },
    {
      "name": "Toledo",
      "city": "Toledo",
      "country": "United States",
      "iata_code": "TOL",
      "_geoloc": {
        "latitude": 41.586806,
        "longitude": -83.807833
      },
      "links_count": 10,
      "objectID": "4040"
    },
    {
      "name": "Chicago Rockford International Airport ",
      "city": "Rockford",
      "country": "United States",
      "iata_code": "RFD",
      "_geoloc": {
        "latitude": 42.1953611,
        "longitude": -89.0972222
      },
      "links_count": 10,
      "objectID": "4028"
    },
    {
      "name": "Cherry Capital Airport",
      "city": "Traverse City",
      "country": "United States",
      "iata_code": "TVC",
      "_geoloc": {
        "latitude": 44.741445,
        "longitude": -85.582235
      },
      "links_count": 10,
      "objectID": "4023"
    },
    {
      "name": "Ilulissat",
      "city": "Ilulissat",
      "country": "Greenland",
      "iata_code": "JAV",
      "_geoloc": {
        "latitude": 69.23444,
        "longitude": -51.05111
      },
      "links_count": 10,
      "objectID": "3995"
    },
    {
      "name": "Daytona Beach Intl",
      "city": "Daytona Beach",
      "country": "United States",
      "iata_code": "DAB",
      "_geoloc": {
        "latitude": 29.179917,
        "longitude": -81.058056
      },
      "links_count": 10,
      "objectID": "3950"
    },
    {
      "name": "Cold Bay",
      "city": "Cold Bay",
      "country": "United States",
      "iata_code": "CDB",
      "_geoloc": {
        "latitude": 55.206061,
        "longitude": -162.725436
      },
      "links_count": 10,
      "objectID": "3854"
    },
    {
      "name": "Corpus Christi Intl",
      "city": "Corpus Christi",
      "country": "United States",
      "iata_code": "CRP",
      "_geoloc": {
        "latitude": 27.770361,
        "longitude": -97.501222
      },
      "links_count": 10,
      "objectID": "3744"
    },
    {
      "name": "Craven Co Rgnl",
      "city": "New Bern",
      "country": "United States",
      "iata_code": "EWN",
      "_geoloc": {
        "latitude": 35.072972,
        "longitude": -77.042944
      },
      "links_count": 10,
      "objectID": "3730"
    },
    {
      "name": "Durango La Plata Co",
      "city": "Durango",
      "country": "United States",
      "iata_code": "DRO",
      "_geoloc": {
        "latitude": 37.151516,
        "longitude": -107.75377
      },
      "links_count": 10,
      "objectID": "3713"
    },
    {
      "name": "Kugluktuk",
      "city": "Coppermine",
      "country": "Canada",
      "iata_code": "YCO",
      "_geoloc": {
        "latitude": 67.816667,
        "longitude": -115.143889
      },
      "links_count": 10,
      "objectID": "37"
    },
    {
      "name": "Melbourne Intl",
      "city": "Melbourne",
      "country": "United States",
      "iata_code": "MLB",
      "_geoloc": {
        "latitude": 28.102753,
        "longitude": -80.645258
      },
      "links_count": 10,
      "objectID": "3671"
    },
    {
      "name": "Niagara Falls Intl",
      "city": "Niagara Falls",
      "country": "United States",
      "iata_code": "IAG",
      "_geoloc": {
        "latitude": 43.107333,
        "longitude": -78.946194
      },
      "links_count": 10,
      "objectID": "3630"
    },
    {
      "name": "Minot Intl",
      "city": "Minot",
      "country": "United States",
      "iata_code": "MOT",
      "_geoloc": {
        "latitude": 48.259378,
        "longitude": -101.280333
      },
      "links_count": 10,
      "objectID": "3498"
    },
    {
      "name": "Grand Forks Intl",
      "city": "Grand Forks",
      "country": "United States",
      "iata_code": "GFK",
      "_geoloc": {
        "latitude": 47.949256,
        "longitude": -97.176111
      },
      "links_count": 10,
      "objectID": "3442"
    },
    {
      "name": "Fort Smith Rgnl",
      "city": "Fort Smith",
      "country": "United States",
      "iata_code": "FSM",
      "_geoloc": {
        "latitude": 35.336583,
        "longitude": -94.367444
      },
      "links_count": 10,
      "objectID": "3437"
    },
    {
      "name": "Qingshan",
      "city": "Xichang",
      "country": "China",
      "iata_code": "XIC",
      "_geoloc": {
        "latitude": 27.989083,
        "longitude": 102.184361
      },
      "links_count": 10,
      "objectID": "3396"
    },
    {
      "name": "Pyongyang Intl",
      "city": "Pyongyang",
      "country": "Korea",
      "iata_code": "FNJ",
      "_geoloc": {
        "latitude": 39.224061,
        "longitude": 125.67015
      },
      "links_count": 10,
      "objectID": "3377"
    },
    {
      "name": "Kalgoorlie Boulder",
      "city": "Kalgoorlie",
      "country": "Australia",
      "iata_code": "KGI",
      "_geoloc": {
        "latitude": -30.789444,
        "longitude": 121.461667
      },
      "links_count": 10,
      "objectID": "3346"
    },
    {
      "name": "Rockhampton",
      "city": "Rockhampton",
      "country": "Australia",
      "iata_code": "ROK",
      "_geoloc": {
        "latitude": -23.381944,
        "longitude": 150.475278
      },
      "links_count": 10,
      "objectID": "3329"
    },
    {
      "name": "Sunshine Coast",
      "city": "Maroochydore",
      "country": "Australia",
      "iata_code": "MCY",
      "_geoloc": {
        "latitude": -26.603333,
        "longitude": 153.091111
      },
      "links_count": 10,
      "objectID": "3325"
    },
    {
      "name": "Kuantan",
      "city": "Kuantan",
      "country": "Malaysia",
      "iata_code": "KUA",
      "_geoloc": {
        "latitude": 3.775389,
        "longitude": 103.209056
      },
      "links_count": 10,
      "objectID": "3299"
    },
    {
      "name": "Sultan Abdul Halim",
      "city": "Alor Setar",
      "country": "Malaysia",
      "iata_code": "AOR",
      "_geoloc": {
        "latitude": 6.189667,
        "longitude": 100.398183
      },
      "links_count": 10,
      "objectID": "3296"
    },
    {
      "name": "Sultan Iskandarmuda",
      "city": "Banda Aceh",
      "country": "Indonesia",
      "iata_code": "BTJ",
      "_geoloc": {
        "latitude": 5.523522,
        "longitude": 95.420372
      },
      "links_count": 10,
      "objectID": "3294"
    },
    {
      "name": "Fatmawati Soekarno",
      "city": "Bengkulu",
      "country": "Indonesia",
      "iata_code": "BKS",
      "_geoloc": {
        "latitude": -3.8637,
        "longitude": 102.339036
      },
      "links_count": 10,
      "objectID": "3288"
    },
    {
      "name": "Paro",
      "city": "Thimphu",
      "country": "Bhutan",
      "iata_code": "PBH",
      "_geoloc": {
        "latitude": 27.403192,
        "longitude": 89.424606
      },
      "links_count": 10,
      "objectID": "3155"
    },
    {
      "name": "Pakse",
      "city": "Pakse",
      "country": "Laos",
      "iata_code": "PKZ",
      "_geoloc": {
        "latitude": 15.132053,
        "longitude": 105.781417
      },
      "links_count": 10,
      "objectID": "3116"
    },
    {
      "name": "Dehradun",
      "city": "Dehra Dun",
      "country": "India",
      "iata_code": "DED",
      "_geoloc": {
        "latitude": 30.189689,
        "longitude": 78.180256
      },
      "links_count": 10,
      "objectID": "3092"
    },
    {
      "name": "Osmany Intl",
      "city": "Sylhet Osmani",
      "country": "Bangladesh",
      "iata_code": "ZYL",
      "_geoloc": {
        "latitude": 24.963242,
        "longitude": 91.866783
      },
      "links_count": 10,
      "objectID": "3074"
    },
    {
      "name": "Vadodara",
      "city": "Baroda",
      "country": "India",
      "iata_code": "BDQ",
      "_geoloc": {
        "latitude": 22.336164,
        "longitude": 73.226289
      },
      "links_count": 10,
      "objectID": "3001"
    },
    {
      "name": "Aurangabad",
      "city": "Aurangabad",
      "country": "India",
      "iata_code": "IXU",
      "_geoloc": {
        "latitude": 19.862728,
        "longitude": 75.398114
      },
      "links_count": 10,
      "objectID": "2996"
    },
    {
      "name": "Ignatyevo",
      "city": "Blagoveschensk",
      "country": "Russia",
      "iata_code": "BQS",
      "_geoloc": {
        "latitude": 50.425394,
        "longitude": 127.412478
      },
      "links_count": 10,
      "objectID": "2926"
    },
    {
      "name": "Barquisimeto Intl",
      "city": "Barquisimeto",
      "country": "Venezuela",
      "iata_code": "BRM",
      "_geoloc": {
        "latitude": 10.042747,
        "longitude": -69.358619
      },
      "links_count": 10,
      "objectID": "2824"
    },
    {
      "name": "Palonegro",
      "city": "Bucaramanga",
      "country": "Colombia",
      "iata_code": "BGA",
      "_geoloc": {
        "latitude": 7.1265,
        "longitude": -73.184778
      },
      "links_count": 10,
      "objectID": "2708"
    },
    {
      "name": "Tefe",
      "city": "Tefe",
      "country": "Brazil",
      "iata_code": "TFF",
      "_geoloc": {
        "latitude": -3.382944,
        "longitude": -64.724056
      },
      "links_count": 10,
      "objectID": "2624"
    },
    {
      "name": "PlÃ¡cido de Castro",
      "city": "Rio Branco",
      "country": "Brazil",
      "iata_code": "RBR",
      "_geoloc": {
        "latitude": -9.583,
        "longitude": -67.4836
      },
      "links_count": 10,
      "objectID": "2609"
    },
    {
      "name": "Senador Nilo Coelho",
      "city": "Petrolina",
      "country": "Brazil",
      "iata_code": "PNZ",
      "_geoloc": {
        "latitude": -9.362411,
        "longitude": -40.569097
      },
      "links_count": 10,
      "objectID": "2604"
    },
    {
      "name": "Lauro Kurtz",
      "city": "Passo Fundo",
      "country": "Brazil",
      "iata_code": "PFB",
      "_geoloc": {
        "latitude": -28.243989,
        "longitude": -52.326558
      },
      "links_count": 10,
      "objectID": "2602"
    },
    {
      "name": "Lauro Carneiro De Loyola",
      "city": "Joinville",
      "country": "Brazil",
      "iata_code": "JOI",
      "_geoloc": {
        "latitude": -26.224453,
        "longitude": -48.797364
      },
      "links_count": 10,
      "objectID": "2576"
    },
    {
      "name": "Chapeco",
      "city": "Chapeco",
      "country": "Brazil",
      "iata_code": "XAP",
      "_geoloc": {
        "latitude": -27.134219,
        "longitude": -52.656553
      },
      "links_count": 10,
      "objectID": "2539"
    },
    {
      "name": "Ushuaia Malvinas Argentinas",
      "city": "Ushuaia",
      "country": "Argentina",
      "iata_code": "USH",
      "_geoloc": {
        "latitude": -54.843278,
        "longitude": -68.29575
      },
      "links_count": 10,
      "objectID": "2497"
    },
    {
      "name": "Daniel Z Romualdez",
      "city": "Tacloban",
      "country": "Philippines",
      "iata_code": "TAC",
      "_geoloc": {
        "latitude": 11.227628,
        "longitude": 125.027758
      },
      "links_count": 10,
      "objectID": "2422"
    },
    {
      "name": "Miyako",
      "city": "Miyako",
      "country": "Japan",
      "iata_code": "MMY",
      "_geoloc": {
        "latitude": 24.782833,
        "longitude": 125.295111
      },
      "links_count": 10,
      "objectID": "2390"
    },
    {
      "name": "Aomori",
      "city": "Aomori",
      "country": "Japan",
      "iata_code": "AOJ",
      "_geoloc": {
        "latitude": 40.734722,
        "longitude": 140.690833
      },
      "links_count": 10,
      "objectID": "2340"
    },
    {
      "name": "Hyakuri",
      "city": "Ibaraki",
      "country": "Japan",
      "iata_code": "IBR",
      "_geoloc": {
        "latitude": 36.181083,
        "longitude": 140.415444
      },
      "links_count": 10,
      "objectID": "2281"
    },
    {
      "name": "Magong",
      "city": "Makung",
      "country": "Taiwan",
      "iata_code": "MZG",
      "_geoloc": {
        "latitude": 23.568669,
        "longitude": 119.628311
      },
      "links_count": 10,
      "objectID": "2272"
    },
    {
      "name": "Shang Yi",
      "city": "Kinmen",
      "country": "Taiwan",
      "iata_code": "KNH",
      "_geoloc": {
        "latitude": 24.427892,
        "longitude": 118.359197
      },
      "links_count": 10,
      "objectID": "2259"
    },
    {
      "name": "Bushehr",
      "city": "Bushehr",
      "country": "Iran",
      "iata_code": "BUZ",
      "_geoloc": {
        "latitude": 28.944811,
        "longitude": 50.834637
      },
      "links_count": 10,
      "objectID": "2106"
    },
    {
      "name": "Hail",
      "city": "Hail",
      "country": "Saudi Arabia",
      "iata_code": "HAS",
      "_geoloc": {
        "latitude": 27.437917,
        "longitude": 41.686292
      },
      "links_count": 10,
      "objectID": "2069"
    },
    {
      "name": "Kandahar",
      "city": "Kandahar",
      "country": "Afghanistan",
      "iata_code": "KDH",
      "_geoloc": {
        "latitude": 31.505756,
        "longitude": 65.847822
      },
      "links_count": 10,
      "objectID": "2051"
    },
    {
      "name": "Palmerston North",
      "city": "Palmerston North",
      "country": "New Zealand",
      "iata_code": "PMR",
      "_geoloc": {
        "latitude": -40.320556,
        "longitude": 175.616944
      },
      "links_count": 10,
      "objectID": "2028"
    },
    {
      "name": "Dunedin",
      "city": "Dunedin",
      "country": "New Zealand",
      "iata_code": "DUD",
      "_geoloc": {
        "latitude": -45.928055,
        "longitude": 170.198333
      },
      "links_count": 10,
      "objectID": "2011"
    },
    {
      "name": "Fua Amotu Intl",
      "city": "Tongatapu",
      "country": "Tonga",
      "iata_code": "TBU",
      "_geoloc": {
        "latitude": -21.241214,
        "longitude": -175.149644
      },
      "links_count": 10,
      "objectID": "1963"
    },
    {
      "name": "Governors Harbour",
      "city": "Governor's Harbor",
      "country": "Bahamas",
      "iata_code": "GHB",
      "_geoloc": {
        "latitude": 25.284706,
        "longitude": -76.331011
      },
      "links_count": 10,
      "objectID": "1944"
    },
    {
      "name": "Valle Del Fuerte Intl",
      "city": "Los Mochis",
      "country": "Mexico",
      "iata_code": "LMM",
      "_geoloc": {
        "latitude": 25.685194,
        "longitude": -109.080806
      },
      "links_count": 10,
      "objectID": "1814"
    },
    {
      "name": "Durango Intl",
      "city": "Durango",
      "country": "Mexico",
      "iata_code": "DGO",
      "_geoloc": {
        "latitude": 24.124194,
        "longitude": -104.528014
      },
      "links_count": 10,
      "objectID": "1801"
    },
    {
      "name": "Reykjavik",
      "city": "Reykjavik",
      "country": "Iceland",
      "iata_code": "RKV",
      "_geoloc": {
        "latitude": 64.13,
        "longitude": -21.940556
      },
      "links_count": 10,
      "objectID": "18"
    },
    {
      "name": "Ciudad Obregon Intl",
      "city": "Ciudad Obregon",
      "country": "Mexico",
      "iata_code": "CEN",
      "_geoloc": {
        "latitude": 27.392639,
        "longitude": -109.833111
      },
      "links_count": 10,
      "objectID": "1794"
    },
    {
      "name": "Whitehorse Intl",
      "city": "Whitehorse",
      "country": "Canada",
      "iata_code": "YXY",
      "_geoloc": {
        "latitude": 60.709553,
        "longitude": -135.067269
      },
      "links_count": 10,
      "objectID": "176"
    },
    {
      "name": "Terrace",
      "city": "Terrace",
      "country": "Canada",
      "iata_code": "YXT",
      "_geoloc": {
        "latitude": 54.468508,
        "longitude": -128.576219
      },
      "links_count": 10,
      "objectID": "173"
    },
    {
      "name": "Van",
      "city": "Van",
      "country": "Turkey",
      "iata_code": "VAN",
      "_geoloc": {
        "latitude": 38.468219,
        "longitude": 43.3323
      },
      "links_count": 10,
      "objectID": "1728"
    },
    {
      "name": "Erzurum",
      "city": "Erzurum",
      "country": "Turkey",
      "iata_code": "ERZ",
      "_geoloc": {
        "latitude": 39.956501,
        "longitude": 41.170166
      },
      "links_count": 10,
      "objectID": "1724"
    },
    {
      "name": "Williams Lake",
      "city": "Williams Lake",
      "country": "Canada",
      "iata_code": "YWL",
      "_geoloc": {
        "latitude": 52.183056,
        "longitude": -122.054167
      },
      "links_count": 10,
      "objectID": "162"
    },
    {
      "name": "Eilat",
      "city": "Elat",
      "country": "Israel",
      "iata_code": "ETH",
      "_geoloc": {
        "latitude": 29.561281,
        "longitude": 34.960081
      },
      "links_count": 10,
      "objectID": "1594"
    },
    {
      "name": "Karlovy Vary",
      "city": "Karlovy Vary",
      "country": "Czech Republic",
      "iata_code": "KLV",
      "_geoloc": {
        "latitude": 50.202978,
        "longitude": 12.914983
      },
      "links_count": 10,
      "objectID": "1579"
    },
    {
      "name": "Perugia",
      "city": "Perugia",
      "country": "Italy",
      "iata_code": "PEG",
      "_geoloc": {
        "latitude": 43.095906,
        "longitude": 12.513222
      },
      "links_count": 10,
      "objectID": "1567"
    },
    {
      "name": "Marina Di Campo",
      "city": "Marina Di Campo",
      "country": "Italy",
      "iata_code": "EBA",
      "_geoloc": {
        "latitude": 42.760277,
        "longitude": 10.239445
      },
      "links_count": 10,
      "objectID": "1558"
    },
    {
      "name": "Levaldigi",
      "city": "Cuneo",
      "country": "Italy",
      "iata_code": "CUF",
      "_geoloc": {
        "latitude": 44.547019,
        "longitude": 7.623217
      },
      "links_count": 10,
      "objectID": "1534"
    },
    {
      "name": "Rouyn Noranda",
      "city": "Rouyn",
      "country": "Canada",
      "iata_code": "YUY",
      "_geoloc": {
        "latitude": 48.206111,
        "longitude": -78.835556
      },
      "links_count": 10,
      "objectID": "149"
    },
    {
      "name": "Sitia",
      "city": "Sitia",
      "country": "Greece",
      "iata_code": "JSH",
      "_geoloc": {
        "latitude": 35.216108,
        "longitude": 26.101325
      },
      "links_count": 10,
      "objectID": "1480"
    },
    {
      "name": "Limnos",
      "city": "Limnos",
      "country": "Greece",
      "iata_code": "LXS",
      "_geoloc": {
        "latitude": 39.917072,
        "longitude": 25.236308
      },
      "links_count": 10,
      "objectID": "1465"
    },
    {
      "name": "Nea Anchialos",
      "city": "Nea Anghialos",
      "country": "Greece",
      "iata_code": "VOL",
      "_geoloc": {
        "latitude": 39.219619,
        "longitude": 22.794339
      },
      "links_count": 10,
      "objectID": "1448"
    },
    {
      "name": "Val De Loire",
      "city": "Tours",
      "country": "France",
      "iata_code": "TUF",
      "_geoloc": {
        "latitude": 47.432222,
        "longitude": 0.727606
      },
      "links_count": 10,
      "objectID": "1376"
    },
    {
      "name": "Rivesaltes",
      "city": "Perpignan",
      "country": "France",
      "iata_code": "PGF",
      "_geoloc": {
        "latitude": 42.740442,
        "longitude": 2.870667
      },
      "links_count": 10,
      "objectID": "1356"
    },
    {
      "name": "Boutheon",
      "city": "St-Etienne",
      "country": "France",
      "iata_code": "EBU",
      "_geoloc": {
        "latitude": 45.540554,
        "longitude": 4.296389
      },
      "links_count": 10,
      "objectID": "1350"
    },
    {
      "name": "Metz Nancy Lorraine",
      "city": "Metz",
      "country": "France",
      "iata_code": "ETZ",
      "_geoloc": {
        "latitude": 48.982142,
        "longitude": 6.251319
      },
      "links_count": 10,
      "objectID": "1320"
    },
    {
      "name": "Lourdes",
      "city": "Tarbes",
      "country": "France",
      "iata_code": "LDE",
      "_geoloc": {
        "latitude": 43.178675,
        "longitude": -0.006439
      },
      "links_count": 10,
      "objectID": "1276"
    },
    {
      "name": "Pau Pyrenees",
      "city": "Pau",
      "country": "France",
      "iata_code": "PUF",
      "_geoloc": {
        "latitude": 43.38,
        "longitude": -0.418611
      },
      "links_count": 10,
      "objectID": "1274"
    },
    {
      "name": "Melilla",
      "city": "Melilla",
      "country": "Spain",
      "iata_code": "MLN",
      "_geoloc": {
        "latitude": 35.279817,
        "longitude": -2.956256
      },
      "links_count": 10,
      "objectID": "1058"
    },
    {
      "name": "Chileka Intl",
      "city": "Blantyre",
      "country": "Malawi",
      "iata_code": "BLZ",
      "_geoloc": {
        "latitude": -15.679053,
        "longitude": 34.974014
      },
      "links_count": 10,
      "objectID": "1013"
    },
    {
      "name": "Goroka",
      "city": "Goroka",
      "country": "Papua New Guinea",
      "iata_code": "GKA",
      "_geoloc": {
        "latitude": -6.081689,
        "longitude": 145.391881
      },
      "links_count": 10,
      "objectID": "1"
    },
    {
      "name": "Quinhagak Airport",
      "city": "Quinhagak",
      "country": "United States",
      "iata_code": "KWN",
      "_geoloc": {
        "latitude": 59.755,
        "longitude": -161.845278
      },
      "links_count": 9,
      "objectID": "7206"
    },
    {
      "name": "Wales Airport",
      "city": "Wales",
      "country": "United States",
      "iata_code": "WAA",
      "_geoloc": {
        "latitude": 65.6225,
        "longitude": -168.095
      },
      "links_count": 9,
      "objectID": "7187"
    },
    {
      "name": "Elim Airport",
      "city": "Elim",
      "country": "United States",
      "iata_code": "ELI",
      "_geoloc": {
        "latitude": 64.615,
        "longitude": -162.270556
      },
      "links_count": 9,
      "objectID": "7184"
    },
    {
      "name": "Tanana Airport",
      "city": "Tanana",
      "country": "United States",
      "iata_code": "TAL",
      "_geoloc": {
        "latitude": 65.179556,
        "longitude": -152.075833
      },
      "links_count": 9,
      "objectID": "7113"
    },
    {
      "name": "Gjoa Haven",
      "city": "Gjoa Haven",
      "country": "Canada",
      "iata_code": "YHK",
      "_geoloc": {
        "latitude": 68.635556,
        "longitude": -95.849722
      },
      "links_count": 9,
      "objectID": "69"
    },
    {
      "name": "Ruby Airport",
      "city": "Ruby",
      "country": "United States",
      "iata_code": "RBY",
      "_geoloc": {
        "latitude": 64.7272,
        "longitude": -155.47
      },
      "links_count": 9,
      "objectID": "6722"
    },
    {
      "name": "Stokka",
      "city": "Sandnessjoen",
      "country": "Norway",
      "iata_code": "SSJ",
      "_geoloc": {
        "latitude": 65.956828,
        "longitude": 12.468944
      },
      "links_count": 9,
      "objectID": "662"
    },
    {
      "name": "Kjaerstad",
      "city": "Mosjoen",
      "country": "Norway",
      "iata_code": "MJF",
      "_geoloc": {
        "latitude": 65.783997,
        "longitude": 13.214914
      },
      "links_count": 9,
      "objectID": "652"
    },
    {
      "name": "Floro",
      "city": "Floro",
      "country": "Norway",
      "iata_code": "FRO",
      "_geoloc": {
        "latitude": 61.583611,
        "longitude": 5.024722
      },
      "links_count": 9,
      "objectID": "643"
    },
    {
      "name": "Ganja Airport",
      "city": "Ganja",
      "country": "Azerbaijan",
      "iata_code": "KVD",
      "_geoloc": {
        "latitude": 40.7377,
        "longitude": 46.3176
      },
      "links_count": 9,
      "objectID": "6089"
    },
    {
      "name": "Flin Flon",
      "city": "Flin Flon",
      "country": "Canada",
      "iata_code": "YFO",
      "_geoloc": {
        "latitude": 54.678055,
        "longitude": -101.681667
      },
      "links_count": 9,
      "objectID": "58"
    },
    {
      "name": "Gamal Abdel Nasser Airport",
      "city": "Tobruk",
      "country": "Libya",
      "iata_code": "TOB",
      "_geoloc": {
        "latitude": 31.861,
        "longitude": 23.907
      },
      "links_count": 9,
      "objectID": "5697"
    },
    {
      "name": "Røssvoll Airport",
      "city": "Mo i Rana",
      "country": "Norway",
      "iata_code": "MQN",
      "_geoloc": {
        "latitude": 66.3639,
        "longitude": 14.3014
      },
      "links_count": 9,
      "objectID": "5582"
    },
    {
      "name": "Big Trout Lake Airport",
      "city": "Big Trout Lake",
      "country": "Canada",
      "iata_code": "YTL",
      "_geoloc": {
        "latitude": 53.8178,
        "longitude": -89.8969
      },
      "links_count": 9,
      "objectID": "5531"
    },
    {
      "name": "Kiunga Airport",
      "city": "Kiunga",
      "country": "Papua New Guinea",
      "iata_code": "UNG",
      "_geoloc": {
        "latitude": -6.12571,
        "longitude": 141.282
      },
      "links_count": 9,
      "objectID": "5425"
    },
    {
      "name": "Nusatupe Airport",
      "city": "Gizo",
      "country": "Solomon Islands",
      "iata_code": "GZO",
      "_geoloc": {
        "latitude": -8.09778,
        "longitude": 156.864
      },
      "links_count": 9,
      "objectID": "5412"
    },
    {
      "name": "Hodeidah Intl",
      "city": "Hodeidah",
      "country": "Yemen",
      "iata_code": "HOD",
      "_geoloc": {
        "latitude": 14.753,
        "longitude": 42.976336
      },
      "links_count": 9,
      "objectID": "3976"
    },
    {
      "name": "Helena Rgnl",
      "city": "Helena",
      "country": "United States",
      "iata_code": "HLN",
      "_geoloc": {
        "latitude": 46.606806,
        "longitude": -111.98275
      },
      "links_count": 9,
      "objectID": "3504"
    },
    {
      "name": "Bettles",
      "city": "Bettles",
      "country": "United States",
      "iata_code": "BTT",
      "_geoloc": {
        "latitude": 66.913944,
        "longitude": -151.529056
      },
      "links_count": 9,
      "objectID": "3417"
    },
    {
      "name": "Tachileik",
      "city": "Tachilek",
      "country": "Burma",
      "iata_code": "THL",
      "_geoloc": {
        "latitude": 20.483831,
        "longitude": 99.935353
      },
      "links_count": 9,
      "objectID": "3237"
    },
    {
      "name": "E T Joshua",
      "city": "Kingstown",
      "country": "Saint Vincent and the Grenadines",
      "iata_code": "SVD",
      "_geoloc": {
        "latitude": 13.144306,
        "longitude": -61.210861
      },
      "links_count": 9,
      "objectID": "2907"
    },
    {
      "name": "Crown Point",
      "city": "Scarborough",
      "country": "Trinidad and Tobago",
      "iata_code": "TAB",
      "_geoloc": {
        "latitude": 11.149658,
        "longitude": -60.832194
      },
      "links_count": 9,
      "objectID": "2901"
    },
    {
      "name": "Chacalluta",
      "city": "Arica",
      "country": "Chile",
      "iata_code": "ARI",
      "_geoloc": {
        "latitude": -18.348531,
        "longitude": -70.338742
      },
      "links_count": 9,
      "objectID": "2641"
    },
    {
      "name": "Raiatea",
      "city": "Raiatea Island",
      "country": "French Polynesia",
      "iata_code": "RFP",
      "_geoloc": {
        "latitude": -16.722861,
        "longitude": -151.465856
      },
      "links_count": 9,
      "objectID": "1995"
    },
    {
      "name": "La Managua",
      "city": "Quepos",
      "country": "Costa Rica",
      "iata_code": "XQP",
      "_geoloc": {
        "latitude": 9.443164,
        "longitude": -84.129772
      },
      "links_count": 9,
      "objectID": "1889"
    },
    {
      "name": "Sibiu",
      "city": "Sibiu",
      "country": "Romania",
      "iata_code": "SBZ",
      "_geoloc": {
        "latitude": 45.785597,
        "longitude": 24.091342
      },
      "links_count": 9,
      "objectID": "1658"
    },
    {
      "name": "Vilankulo",
      "city": "Vilankulu",
      "country": "Mozambique",
      "iata_code": "VNX",
      "_geoloc": {
        "latitude": -22.018431,
        "longitude": 35.313297
      },
      "links_count": 8,
      "objectID": "990"
    },
    {
      "name": "Maroantsetra",
      "city": "Maroantsetra",
      "country": "Madagascar",
      "iata_code": "WMN",
      "_geoloc": {
        "latitude": -15.436666,
        "longitude": 49.688332
      },
      "links_count": 8,
      "objectID": "932"
    },
    {
      "name": "Yading Daocheng",
      "city": "Daocheng",
      "country": "China",
      "iata_code": "DCY",
      "_geoloc": {
        "latitude": 29.3231,
        "longitude": 100.0533
      },
      "links_count": 8,
      "objectID": "9310"
    },
    {
      "name": "Fascene",
      "city": "Nosy-be",
      "country": "Madagascar",
      "iata_code": "NOS",
      "_geoloc": {
        "latitude": -13.312067,
        "longitude": 48.314822
      },
      "links_count": 8,
      "objectID": "930"
    },
    {
      "name": "Jiagedaqi Airport",
      "city": "Jiagedaqi District",
      "country": "China",
      "iata_code": "JGD",
      "_geoloc": {
        "latitude": 50.375,
        "longitude": 124.117
      },
      "links_count": 8,
      "objectID": "8979"
    },
    {
      "name": "Kasane",
      "city": "Kasane",
      "country": "Botswana",
      "iata_code": "BBK",
      "_geoloc": {
        "latitude": -17.832875,
        "longitude": 25.1624
      },
      "links_count": 8,
      "objectID": "879"
    },
    {
      "name": "Beloyarsky",
      "city": "Beloyarsky",
      "country": "Russia",
      "iata_code": "EYK",
      "_geoloc": {
        "latitude": 63.683056,
        "longitude": 66.683056
      },
      "links_count": 8,
      "objectID": "8428"
    },
    {
      "name": "Lanseria",
      "city": "Johannesburg",
      "country": "South Africa",
      "iata_code": "HLA",
      "_geoloc": {
        "latitude": -25.938514,
        "longitude": 27.926133
      },
      "links_count": 8,
      "objectID": "820"
    },
    {
      "name": "Bloemfontein Intl",
      "city": "Bloemfontein",
      "country": "South Africa",
      "iata_code": "BFN",
      "_geoloc": {
        "latitude": -29.092722,
        "longitude": 26.302444
      },
      "links_count": 8,
      "objectID": "794"
    },
    {
      "name": "Carajas Airport",
      "city": "Parauapebas",
      "country": "Brazil",
      "iata_code": "CKS",
      "_geoloc": {
        "latitude": -6.11781,
        "longitude": -50.0035
      },
      "links_count": 8,
      "objectID": "7532"
    },
    {
      "name": "Araguaina Airport",
      "city": "Araguaina",
      "country": "Brazil",
      "iata_code": "AUX",
      "_geoloc": {
        "latitude": -7.228333,
        "longitude": -48.240833
      },
      "links_count": 8,
      "objectID": "7376"
    },
    {
      "name": "Vilhelmina",
      "city": "Vilhelmina",
      "country": "Sweden",
      "iata_code": "VHM",
      "_geoloc": {
        "latitude": 64.579083,
        "longitude": 16.833575
      },
      "links_count": 8,
      "objectID": "729"
    },
    {
      "name": "Postville Airport",
      "city": "Postville",
      "country": "Canada",
      "iata_code": "YSO",
      "_geoloc": {
        "latitude": 54.910278,
        "longitude": -59.785278
      },
      "links_count": 8,
      "objectID": "7252"
    },
    {
      "name": "St. Michael Airport",
      "city": "St. Michael",
      "country": "United States",
      "iata_code": "SMK",
      "_geoloc": {
        "latitude": 63.49,
        "longitude": -162.110278
      },
      "links_count": 8,
      "objectID": "7191"
    },
    {
      "name": "Lycksele",
      "city": "Lycksele",
      "country": "Sweden",
      "iata_code": "LYC",
      "_geoloc": {
        "latitude": 64.548322,
        "longitude": 18.716219
      },
      "links_count": 8,
      "objectID": "719"
    },
    {
      "name": "White Mountain Airport",
      "city": "White Mountain",
      "country": "United States",
      "iata_code": "WMO",
      "_geoloc": {
        "latitude": 64.689167,
        "longitude": -163.412778
      },
      "links_count": 8,
      "objectID": "7188"
    },
    {
      "name": "Golovin Airport",
      "city": "Golovin",
      "country": "United States",
      "iata_code": "GLV",
      "_geoloc": {
        "latitude": 64.550556,
        "longitude": -163.007222
      },
      "links_count": 8,
      "objectID": "7185"
    },
    {
      "name": "Brevig Mission Airport",
      "city": "Brevig Mission",
      "country": "United States",
      "iata_code": "KTS",
      "_geoloc": {
        "latitude": 65.331389,
        "longitude": -166.465833
      },
      "links_count": 8,
      "objectID": "7183"
    },
    {
      "name": "Robert Curtis Memorial Airport",
      "city": "Noorvik",
      "country": "United States",
      "iata_code": "ORV",
      "_geoloc": {
        "latitude": 66.8175,
        "longitude": -161.022222
      },
      "links_count": 8,
      "objectID": "7181"
    },
    {
      "name": "Kramfors Solleftea",
      "city": "Kramfors",
      "country": "Sweden",
      "iata_code": "KRF",
      "_geoloc": {
        "latitude": 63.048597,
        "longitude": 17.768856
      },
      "links_count": 8,
      "objectID": "718"
    },
    {
      "name": "Bob Baker Memorial Airport",
      "city": "Kiana",
      "country": "United States",
      "iata_code": "IAN",
      "_geoloc": {
        "latitude": 66.975833,
        "longitude": -160.436667
      },
      "links_count": 8,
      "objectID": "7179"
    },
    {
      "name": "Buckland Airport",
      "city": "Buckland",
      "country": "United States",
      "iata_code": "BKC",
      "_geoloc": {
        "latitude": 65.981667,
        "longitude": -161.149167
      },
      "links_count": 8,
      "objectID": "7178"
    },
    {
      "name": "Ambler Airport",
      "city": "Ambler",
      "country": "United States",
      "iata_code": "ABL",
      "_geoloc": {
        "latitude": 67.106389,
        "longitude": -157.8575
      },
      "links_count": 8,
      "objectID": "7177"
    },
    {
      "name": "Thorne Bay Seaplane Base",
      "city": "Thorne Bay",
      "country": "United States",
      "iata_code": "KTB",
      "_geoloc": {
        "latitude": 55.688056,
        "longitude": -132.536667
      },
      "links_count": 8,
      "objectID": "7147"
    },
    {
      "name": "Toowoomba",
      "city": "Toowoomba",
      "country": "Australia",
      "iata_code": "TWB",
      "_geoloc": {
        "latitude": -27.542778,
        "longitude": 151.916389
      },
      "links_count": 8,
      "objectID": "7128"
    },
    {
      "name": "Huslia Airport",
      "city": "Huslia",
      "country": "United States",
      "iata_code": "HSL",
      "_geoloc": {
        "latitude": 65.697778,
        "longitude": -156.351389
      },
      "links_count": 8,
      "objectID": "7108"
    },
    {
      "name": "St Hubert",
      "city": "Montreal",
      "country": "Canada",
      "iata_code": "YHU",
      "_geoloc": {
        "latitude": 45.5175,
        "longitude": -73.416944
      },
      "links_count": 8,
      "objectID": "71"
    },
    {
      "name": "Russian Mission Airport",
      "city": "Russian Mission",
      "country": "United States",
      "iata_code": "RSH",
      "_geoloc": {
        "latitude": 61.775,
        "longitude": -161.319444
      },
      "links_count": 8,
      "objectID": "7098"
    },
    {
      "name": "Hilton Head",
      "city": "Hilton Head",
      "country": "United States",
      "iata_code": "HHH",
      "_geoloc": {
        "latitude": 32.216,
        "longitude": -80.752
      },
      "links_count": 8,
      "objectID": "7002"
    },
    {
      "name": "Hamilton",
      "city": "Hamilton",
      "country": "Canada",
      "iata_code": "YHM",
      "_geoloc": {
        "latitude": 43.173611,
        "longitude": -79.935
      },
      "links_count": 8,
      "objectID": "70"
    },
    {
      "name": "Branson LLC",
      "city": "Branson",
      "country": "United States",
      "iata_code": "BKG",
      "_geoloc": {
        "latitude": 36.531994,
        "longitude": -93.200556
      },
      "links_count": 8,
      "objectID": "6962"
    },
    {
      "name": "Choibalsan Airport",
      "city": "Choibalsan",
      "country": "Mongolia",
      "iata_code": "COQ",
      "_geoloc": {
        "latitude": 48.1357,
        "longitude": 114.646
      },
      "links_count": 8,
      "objectID": "6795"
    },
    {
      "name": "St Augustin Airport",
      "city": "St-Augustin",
      "country": "Canada",
      "iata_code": "YIF",
      "_geoloc": {
        "latitude": 51.2117,
        "longitude": -58.6583
      },
      "links_count": 8,
      "objectID": "6789"
    },
    {
      "name": "Deering Airport",
      "city": "Deering",
      "country": "United States",
      "iata_code": "DRG",
      "_geoloc": {
        "latitude": 66.0696,
        "longitude": -162.766
      },
      "links_count": 8,
      "objectID": "6755"
    },
    {
      "name": "Puvirnituq Airport",
      "city": "Puvirnituq",
      "country": "Canada",
      "iata_code": "YPX",
      "_geoloc": {
        "latitude": 60.0506,
        "longitude": -77.2869
      },
      "links_count": 8,
      "objectID": "6727"
    },
    {
      "name": "Savoonga Airport",
      "city": "Savoonga",
      "country": "United States",
      "iata_code": "SVA",
      "_geoloc": {
        "latitude": 63.6864,
        "longitude": -170.493
      },
      "links_count": 8,
      "objectID": "6724"
    },
    {
      "name": "Point Hope Airport",
      "city": "Point Hope",
      "country": "United States",
      "iata_code": "PHO",
      "_geoloc": {
        "latitude": 68.3488,
        "longitude": -166.799
      },
      "links_count": 8,
      "objectID": "6721"
    },
    {
      "name": "Gambell Airport",
      "city": "Gambell",
      "country": "United States",
      "iata_code": "GAM",
      "_geoloc": {
        "latitude": 63.7668,
        "longitude": -171.733
      },
      "links_count": 8,
      "objectID": "6715"
    },
    {
      "name": "Panzhihua",
      "city": "Panzhihua",
      "country": "China",
      "iata_code": "PZI",
      "_geoloc": {
        "latitude": 26.54,
        "longitude": 101.799
      },
      "links_count": 8,
      "objectID": "6435"
    },
    {
      "name": "Yining Airport",
      "city": "Yining",
      "country": "China",
      "iata_code": "YIN",
      "_geoloc": {
        "latitude": 43.9558,
        "longitude": 81.3303
      },
      "links_count": 8,
      "objectID": "6409"
    },
    {
      "name": "Batsfjord",
      "city": "Batsfjord",
      "country": "Norway",
      "iata_code": "BJF",
      "_geoloc": {
        "latitude": 70.600278,
        "longitude": 29.6925
      },
      "links_count": 8,
      "objectID": "637"
    },
    {
      "name": "Enshi Airport",
      "city": "Enshi",
      "country": "China",
      "iata_code": "ENH",
      "_geoloc": {
        "latitude": 30.3203,
        "longitude": 109.485
      },
      "links_count": 8,
      "objectID": "6358"
    },
    {
      "name": "Groote Eylandt Airport",
      "city": "Groote Eylandt",
      "country": "Australia",
      "iata_code": "GTE",
      "_geoloc": {
        "latitude": -13.975,
        "longitude": 136.46
      },
      "links_count": 8,
      "objectID": "6270"
    },
    {
      "name": "Gladstone Airport",
      "city": "Gladstone",
      "country": "Australia",
      "iata_code": "GLT",
      "_geoloc": {
        "latitude": -23.8697,
        "longitude": 151.223
      },
      "links_count": 8,
      "objectID": "6269"
    },
    {
      "name": "Vagar",
      "city": "Vagar",
      "country": "Faroe Islands",
      "iata_code": "FAE",
      "_geoloc": {
        "latitude": 62.063628,
        "longitude": -7.277219
      },
      "links_count": 8,
      "objectID": "625"
    },
    {
      "name": "Broken Hill Airport",
      "city": "Broken Hill",
      "country": "Australia",
      "iata_code": "BHQ",
      "_geoloc": {
        "latitude": -32.0014,
        "longitude": 141.472
      },
      "links_count": 8,
      "objectID": "6241"
    },
    {
      "name": "Cat Bi International Airport",
      "city": "Haiphong",
      "country": "Vietnam",
      "iata_code": "HPH",
      "_geoloc": {
        "latitude": 20.819386,
        "longitude": 106.724989
      },
      "links_count": 8,
      "objectID": "6188"
    },
    {
      "name": "Bugulma Airport",
      "city": "Bugulma",
      "country": "Russia",
      "iata_code": "UUA",
      "_geoloc": {
        "latitude": 54.64,
        "longitude": 52.8017
      },
      "links_count": 8,
      "objectID": "6160"
    },
    {
      "name": "Nukus Airport",
      "city": "Nukus",
      "country": "Uzbekistan",
      "iata_code": "NCU",
      "_geoloc": {
        "latitude": 42.4884,
        "longitude": 59.6233
      },
      "links_count": 8,
      "objectID": "6151"
    },
    {
      "name": "Izhevsk Airport",
      "city": "Izhevsk",
      "country": "Russia",
      "iata_code": "IJK",
      "_geoloc": {
        "latitude": 56.8281,
        "longitude": 53.4575
      },
      "links_count": 8,
      "objectID": "6141"
    },
    {
      "name": "Nyagan Airport",
      "city": "Nyagan",
      "country": "Russia",
      "iata_code": "NYA",
      "_geoloc": {
        "latitude": 62.11,
        "longitude": 65.615
      },
      "links_count": 8,
      "objectID": "6139"
    },
    {
      "name": "Kingman Airport",
      "city": "Kingman",
      "country": "United States",
      "iata_code": "IGM",
      "_geoloc": {
        "latitude": 35.2595,
        "longitude": -113.938
      },
      "links_count": 8,
      "objectID": "6132"
    },
    {
      "name": "Virgin Gorda Airport",
      "city": "Spanish Town",
      "country": "British Virgin Islands",
      "iata_code": "VIJ",
      "_geoloc": {
        "latitude": 18.4464,
        "longitude": -64.4275
      },
      "links_count": 8,
      "objectID": "6080"
    },
    {
      "name": "San Cristóbal Airport",
      "city": "San Cristóbal",
      "country": "Ecuador",
      "iata_code": "SCY",
      "_geoloc": {
        "latitude": -0.910206,
        "longitude": -89.61745
      },
      "links_count": 8,
      "objectID": "6045"
    },
    {
      "name": "Santa Maria Airport",
      "city": "Santa Maria",
      "country": "Brazil",
      "iata_code": "RIA",
      "_geoloc": {
        "latitude": -29.711358,
        "longitude": -53.688153
      },
      "links_count": 8,
      "objectID": "6040"
    },
    {
      "name": "Macaé Airport",
      "city": "Macaé",
      "country": "Brazil",
      "iata_code": "MEA",
      "_geoloc": {
        "latitude": -22.343,
        "longitude": -41.766
      },
      "links_count": 8,
      "objectID": "6037"
    },
    {
      "name": "Fukushima Airport",
      "city": "Fukushima",
      "country": "Japan",
      "iata_code": "FKS",
      "_geoloc": {
        "latitude": 37.2274,
        "longitude": 140.431
      },
      "links_count": 8,
      "objectID": "5999"
    },
    {
      "name": "Londolovit Airport",
      "city": "Londolovit",
      "country": "Papua New Guinea",
      "iata_code": "LNV",
      "_geoloc": {
        "latitude": -3.04361,
        "longitude": 152.629
      },
      "links_count": 8,
      "objectID": "5979"
    },
    {
      "name": "Kalskag Airport",
      "city": "Kalskag",
      "country": "United States",
      "iata_code": "KLG",
      "_geoloc": {
        "latitude": 61.5363,
        "longitude": -160.341
      },
      "links_count": 8,
      "objectID": "5964"
    },
    {
      "name": "Hiva Oa-Atuona Airport",
      "city": "Hiva-oa",
      "country": "French Polynesia",
      "iata_code": "AUQ",
      "_geoloc": {
        "latitude": -9.768794,
        "longitude": -139.011256
      },
      "links_count": 8,
      "objectID": "5890"
    },
    {
      "name": "Puerto Jimenez Airport",
      "city": "Puerto Jimenez",
      "country": "Costa Rica",
      "iata_code": "PJM",
      "_geoloc": {
        "latitude": 8.53333,
        "longitude": -83.3
      },
      "links_count": 8,
      "objectID": "5847"
    },
    {
      "name": "Cabo Velas Airport",
      "city": "Nicoya",
      "country": "Costa Rica",
      "iata_code": "TNO",
      "_geoloc": {
        "latitude": 10.3557,
        "longitude": -85.852892
      },
      "links_count": 8,
      "objectID": "5844"
    },
    {
      "name": "JAGS McCartney International Airport",
      "city": "Cockburn Town",
      "country": "Turks and Caicos Islands",
      "iata_code": "GDT",
      "_geoloc": {
        "latitude": 21.4445,
        "longitude": -71.1423
      },
      "links_count": 8,
      "objectID": "5807"
    },
    {
      "name": "San Luis County Regional Airport",
      "city": "San Luis Obispo",
      "country": "United States",
      "iata_code": "SBP",
      "_geoloc": {
        "latitude": 35.2368,
        "longitude": -120.642
      },
      "links_count": 8,
      "objectID": "5768"
    },
    {
      "name": "Central Nebraska Regional Airport",
      "city": "Grand Island",
      "country": "United States",
      "iata_code": "GRI",
      "_geoloc": {
        "latitude": 40.9675,
        "longitude": -98.3096
      },
      "links_count": 8,
      "objectID": "5740"
    },
    {
      "name": "Southwest Georgia Regional Airport",
      "city": "Albany",
      "country": "United States",
      "iata_code": "ABY",
      "_geoloc": {
        "latitude": 31.5355,
        "longitude": -84.1945
      },
      "links_count": 8,
      "objectID": "5715"
    },
    {
      "name": "Nanyuki Civil Airport",
      "city": "Nanyuki",
      "country": "Kenya",
      "iata_code": "NYK",
      "_geoloc": {
        "latitude": -0.067,
        "longitude": 37.033
      },
      "links_count": 8,
      "objectID": "5695"
    },
    {
      "name": "Galcaio Airport",
      "city": "Galcaio",
      "country": "Somalia",
      "iata_code": "GLK",
      "_geoloc": {
        "latitude": 6.78083,
        "longitude": 47.4547
      },
      "links_count": 8,
      "objectID": "5688"
    },
    {
      "name": "Bosaso Airport",
      "city": "Bosaso",
      "country": "Somalia",
      "iata_code": "BSA",
      "_geoloc": {
        "latitude": 11.2753,
        "longitude": 49.1494
      },
      "links_count": 8,
      "objectID": "5686"
    },
    {
      "name": "Hassan I Airport",
      "city": "El Aaiún",
      "country": "Western Sahara",
      "iata_code": "EUN",
      "_geoloc": {
        "latitude": 27.1517,
        "longitude": -13.2192
      },
      "links_count": 8,
      "objectID": "5672"
    },
    {
      "name": "Kruger Mpumalanga International Airport",
      "city": "Mpumalanga",
      "country": "South Africa",
      "iata_code": "MQP",
      "_geoloc": {
        "latitude": -25.3832,
        "longitude": 31.1056
      },
      "links_count": 8,
      "objectID": "5604"
    },
    {
      "name": "Fredericton",
      "city": "Fredericton",
      "country": "Canada",
      "iata_code": "YFC",
      "_geoloc": {
        "latitude": 45.868889,
        "longitude": -66.537222
      },
      "links_count": 8,
      "objectID": "56"
    },
    {
      "name": "Sogndal Airport",
      "city": "Sogndal",
      "country": "Norway",
      "iata_code": "SOG",
      "_geoloc": {
        "latitude": 61.1561,
        "longitude": 7.13778
      },
      "links_count": 8,
      "objectID": "5586"
    },
    {
      "name": "Kumasi Airport",
      "city": "Kumasi",
      "country": "Ghana",
      "iata_code": "KMS",
      "_geoloc": {
        "latitude": 6.71456,
        "longitude": -1.59082
      },
      "links_count": 8,
      "objectID": "5556"
    },
    {
      "name": "Batna Airport",
      "city": "Batna",
      "country": "Algeria",
      "iata_code": "BLJ",
      "_geoloc": {
        "latitude": 35.752106,
        "longitude": 6.308589
      },
      "links_count": 8,
      "objectID": "5552"
    },
    {
      "name": "Muskrat Dam Airport",
      "city": "Muskrat Dam",
      "country": "Canada",
      "iata_code": "MSA",
      "_geoloc": {
        "latitude": 53.4414,
        "longitude": -91.7628
      },
      "links_count": 8,
      "objectID": "5544"
    },
    {
      "name": "Chevery Airport",
      "city": "Chevery",
      "country": "Canada",
      "iata_code": "YHR",
      "_geoloc": {
        "latitude": 50.4689,
        "longitude": -59.6367
      },
      "links_count": 8,
      "objectID": "5503"
    },
    {
      "name": "Hopedale Airport",
      "city": "Hopedale",
      "country": "Canada",
      "iata_code": "YHO",
      "_geoloc": {
        "latitude": 55.4483,
        "longitude": -60.2286
      },
      "links_count": 8,
      "objectID": "5502"
    },
    {
      "name": "Makkovik Airport",
      "city": "Makkovik",
      "country": "Canada",
      "iata_code": "YMN",
      "_geoloc": {
        "latitude": 55.0769,
        "longitude": -59.1864
      },
      "links_count": 8,
      "objectID": "5492"
    },
    {
      "name": "Nain Airport",
      "city": "Nain",
      "country": "Canada",
      "iata_code": "YDP",
      "_geoloc": {
        "latitude": 56.5492,
        "longitude": -61.6803
      },
      "links_count": 8,
      "objectID": "5488"
    },
    {
      "name": "Apartadó Airport",
      "city": "Apartadó",
      "country": "Colombia",
      "iata_code": "APO",
      "_geoloc": {
        "latitude": 7.033,
        "longitude": -77.2
      },
      "links_count": 8,
      "objectID": "5476"
    },
    {
      "name": "Chisasibi Airport",
      "city": "Chisasibi",
      "country": "Canada",
      "iata_code": "YKU",
      "_geoloc": {
        "latitude": 53.8056,
        "longitude": -78.9169
      },
      "links_count": 8,
      "objectID": "5472"
    },
    {
      "name": "Bearskin Lake Airport",
      "city": "Bearskin Lake",
      "country": "Canada",
      "iata_code": "XBE",
      "_geoloc": {
        "latitude": 53.9656,
        "longitude": -91.0272
      },
      "links_count": 8,
      "objectID": "5468"
    },
    {
      "name": "Nanortalik Heliport",
      "city": "Nanortalik",
      "country": "Greenland",
      "iata_code": "JNN",
      "_geoloc": {
        "latitude": 60.14,
        "longitude": -45.2317
      },
      "links_count": 8,
      "objectID": "5444"
    },
    {
      "name": "Tabubil Airport",
      "city": "Tabubil",
      "country": "Papua New Guinea",
      "iata_code": "TBG",
      "_geoloc": {
        "latitude": -5.27861,
        "longitude": 141.226
      },
      "links_count": 8,
      "objectID": "5434"
    },
    {
      "name": "Kavieng Airport",
      "city": "Kavieng",
      "country": "Papua New Guinea",
      "iata_code": "KVG",
      "_geoloc": {
        "latitude": -2.5794,
        "longitude": 150.808
      },
      "links_count": 8,
      "objectID": "5428"
    },
    {
      "name": "Daru Airport",
      "city": "Daru",
      "country": "Papua New Guinea",
      "iata_code": "DAU",
      "_geoloc": {
        "latitude": -9.08676,
        "longitude": 143.208
      },
      "links_count": 8,
      "objectID": "5421"
    },
    {
      "name": "Buka Airport",
      "city": "Buka Island",
      "country": "Papua New Guinea",
      "iata_code": "BUA",
      "_geoloc": {
        "latitude": -5.42232,
        "longitude": 154.673
      },
      "links_count": 8,
      "objectID": "5419"
    },
    {
      "name": "Munda Airport",
      "city": "Munda",
      "country": "Solomon Islands",
      "iata_code": "MUA",
      "_geoloc": {
        "latitude": -8.32797,
        "longitude": 157.263
      },
      "links_count": 8,
      "objectID": "5411"
    },
    {
      "name": "Oulu",
      "city": "Oulu",
      "country": "Finland",
      "iata_code": "OUL",
      "_geoloc": {
        "latitude": 64.930061,
        "longitude": 25.354564
      },
      "links_count": 8,
      "objectID": "446"
    },
    {
      "name": "Mariehamn",
      "city": "Mariehamn",
      "country": "Finland",
      "iata_code": "MHQ",
      "_geoloc": {
        "latitude": 60.122203,
        "longitude": 19.898156
      },
      "links_count": 8,
      "objectID": "442"
    },
    {
      "name": "Naryan-Mar",
      "city": "Naryan-Mar",
      "country": "Russia",
      "iata_code": "NNM",
      "_geoloc": {
        "latitude": 67.380537,
        "longitude": 53.051016
      },
      "links_count": 8,
      "objectID": "4371"
    },
    {
      "name": "Ukhta",
      "city": "Ukhta",
      "country": "Russia",
      "iata_code": "UCT",
      "_geoloc": {
        "latitude": 63.340297,
        "longitude": 53.482592
      },
      "links_count": 8,
      "objectID": "4368"
    },
    {
      "name": "Kzyl-Orda",
      "city": "Kzyl-Orda",
      "country": "Kazakhstan",
      "iata_code": "KZO",
      "_geoloc": {
        "latitude": 44.709,
        "longitude": 65.591
      },
      "links_count": 8,
      "objectID": "4358"
    },
    {
      "name": "Berlevag",
      "city": "Berlevag",
      "country": "Norway",
      "iata_code": "BVG",
      "_geoloc": {
        "latitude": 70.866667,
        "longitude": 29.0
      },
      "links_count": 8,
      "objectID": "4350"
    },
    {
      "name": "Hovden",
      "city": "Orsta-Volda",
      "country": "Norway",
      "iata_code": "HOV",
      "_geoloc": {
        "latitude": 62.18,
        "longitude": 6.0742
      },
      "links_count": 8,
      "objectID": "4345"
    },
    {
      "name": "Copiapo",
      "city": "Copiapo",
      "country": "Chile",
      "iata_code": "CPO",
      "_geoloc": {
        "latitude": -27.0,
        "longitude": -70.0
      },
      "links_count": 8,
      "objectID": "4312"
    },
    {
      "name": "Ciudad del Este",
      "city": "Ciudad del Este",
      "country": "Paraguay",
      "iata_code": "AGT",
      "_geoloc": {
        "latitude": -25.4555,
        "longitude": -54.843592
      },
      "links_count": 8,
      "objectID": "4305"
    },
    {
      "name": "Erie Intl Tom Ridge Fld",
      "city": "Erie",
      "country": "United States",
      "iata_code": "ERI",
      "_geoloc": {
        "latitude": 42.082022,
        "longitude": -80.176217
      },
      "links_count": 8,
      "objectID": "4276"
    },
    {
      "name": "Martha\\\\'s Vineyard",
      "city": "Vineyard Haven MA",
      "country": "United States",
      "iata_code": "MVY",
      "_geoloc": {
        "latitude": 41.391667,
        "longitude": -70.615278
      },
      "links_count": 8,
      "objectID": "4265"
    },
    {
      "name": "Ozamis",
      "city": "Ozamis",
      "country": "Philippines",
      "iata_code": "OZC",
      "_geoloc": {
        "latitude": 8.178508,
        "longitude": 123.841731
      },
      "links_count": 8,
      "objectID": "4204"
    },
    {
      "name": "Legazpi",
      "city": "Legazpi",
      "country": "Philippines",
      "iata_code": "LGP",
      "_geoloc": {
        "latitude": 13.157064,
        "longitude": 123.746247
      },
      "links_count": 8,
      "objectID": "4203"
    },
    {
      "name": "Dipolog",
      "city": "Dipolog",
      "country": "Philippines",
      "iata_code": "DPL",
      "_geoloc": {
        "latitude": 8.601261,
        "longitude": 123.334481
      },
      "links_count": 8,
      "objectID": "4201"
    },
    {
      "name": "Butuan",
      "city": "Butuan",
      "country": "Philippines",
      "iata_code": "BXU",
      "_geoloc": {
        "latitude": 8.951322,
        "longitude": 125.477972
      },
      "links_count": 8,
      "objectID": "4200"
    },
    {
      "name": "Astypalaia",
      "city": "Astypalaia",
      "country": "Greece",
      "iata_code": "JTY",
      "_geoloc": {
        "latitude": 36.579886,
        "longitude": 26.375822
      },
      "links_count": 8,
      "objectID": "4190"
    },
    {
      "name": "Greater Binghamton Edwin A Link Fld",
      "city": "Binghamton",
      "country": "United States",
      "iata_code": "BGM",
      "_geoloc": {
        "latitude": 42.208689,
        "longitude": -75.979839
      },
      "links_count": 8,
      "objectID": "4129"
    },
    {
      "name": "Idaho Falls Rgnl",
      "city": "Idaho Falls",
      "country": "United States",
      "iata_code": "IDA",
      "_geoloc": {
        "latitude": 43.514556,
        "longitude": -112.07075
      },
      "links_count": 8,
      "objectID": "4100"
    },
    {
      "name": "Phu Bai",
      "city": "Hue",
      "country": "Vietnam",
      "iata_code": "HUI",
      "_geoloc": {
        "latitude": 16.401499,
        "longitude": 107.702614
      },
      "links_count": 8,
      "objectID": "4082"
    },
    {
      "name": "El Calafate",
      "city": "El Calafate",
      "country": "Argentina",
      "iata_code": "FTE",
      "_geoloc": {
        "latitude": -50.280322,
        "longitude": -72.053103
      },
      "links_count": 8,
      "objectID": "4061"
    },
    {
      "name": "Manhattan Reigonal",
      "city": "Manhattan",
      "country": "United States",
      "iata_code": "MHK",
      "_geoloc": {
        "latitude": 39.140972,
        "longitude": -96.670833
      },
      "links_count": 8,
      "objectID": "4050"
    },
    {
      "name": "Champaign",
      "city": "Champaign",
      "country": "United States",
      "iata_code": "CMI",
      "_geoloc": {
        "latitude": 40.03925,
        "longitude": -88.278056
      },
      "links_count": 8,
      "objectID": "4049"
    },
    {
      "name": "Rochester",
      "city": "Rochester",
      "country": "United States",
      "iata_code": "RST",
      "_geoloc": {
        "latitude": 43.908283,
        "longitude": -92.500014
      },
      "links_count": 8,
      "objectID": "4048"
    },
    {
      "name": "Ayers Rock",
      "city": "Uluru",
      "country": "Australia",
      "iata_code": "AYQ",
      "_geoloc": {
        "latitude": -25.186111,
        "longitude": 130.975556
      },
      "links_count": 8,
      "objectID": "4010"
    },
    {
      "name": "Godofredo P",
      "city": "Caticlan",
      "country": "Philippines",
      "iata_code": "MPH",
      "_geoloc": {
        "latitude": 11.9214999,
        "longitude": 121.953
      },
      "links_count": 8,
      "objectID": "4002"
    },
    {
      "name": "Surat Thani",
      "city": "Surat Thani",
      "country": "Thailand",
      "iata_code": "URT",
      "_geoloc": {
        "latitude": 9.1325,
        "longitude": 99.135556
      },
      "links_count": 8,
      "objectID": "4000"
    },
    {
      "name": "Clyde River",
      "city": "Clyde River",
      "country": "Canada",
      "iata_code": "YCY",
      "_geoloc": {
        "latitude": 70.486111,
        "longitude": -68.516667
      },
      "links_count": 8,
      "objectID": "40"
    },
    {
      "name": "Ithaca Tompkins Rgnl",
      "city": "Ithaca",
      "country": "United States",
      "iata_code": "ITH",
      "_geoloc": {
        "latitude": 42.491028,
        "longitude": -76.458444
      },
      "links_count": 8,
      "objectID": "3947"
    },
    {
      "name": "Lewiston Nez Perce Co",
      "city": "Lewiston",
      "country": "United States",
      "iata_code": "LWS",
      "_geoloc": {
        "latitude": 46.3745,
        "longitude": -117.015389
      },
      "links_count": 8,
      "objectID": "3945"
    },
    {
      "name": "Mutiara Ii",
      "city": "Labuhan Bajo",
      "country": "Indonesia",
      "iata_code": "LBJ",
      "_geoloc": {
        "latitude": -8.486656,
        "longitude": 119.88905
      },
      "links_count": 8,
      "objectID": "3917"
    },
    {
      "name": "H Hasan Aroeboesman",
      "city": "Ende",
      "country": "Indonesia",
      "iata_code": "ENE",
      "_geoloc": {
        "latitude": -8.849294,
        "longitude": 121.660644
      },
      "links_count": 8,
      "objectID": "3914"
    },
    {
      "name": "H As Hanandjoeddin",
      "city": "Tanjung Pandan",
      "country": "Indonesia",
      "iata_code": "TJQ",
      "_geoloc": {
        "latitude": -2.745722,
        "longitude": 107.754917
      },
      "links_count": 8,
      "objectID": "3904"
    },
    {
      "name": "Wolter Monginsidi",
      "city": "Kendari",
      "country": "Indonesia",
      "iata_code": "KDI",
      "_geoloc": {
        "latitude": -4.081608,
        "longitude": 122.418231
      },
      "links_count": 8,
      "objectID": "3890"
    },
    {
      "name": "Youngstown Warren Rgnl",
      "city": "Youngstown",
      "country": "United States",
      "iata_code": "YNG",
      "_geoloc": {
        "latitude": 41.260736,
        "longitude": -80.679097
      },
      "links_count": 8,
      "objectID": "3881"
    },
    {
      "name": "Watertown Intl",
      "city": "Watertown",
      "country": "United States",
      "iata_code": "ART",
      "_geoloc": {
        "latitude": 43.991922,
        "longitude": -76.021739
      },
      "links_count": 8,
      "objectID": "3838"
    },
    {
      "name": "Columbia Rgnl",
      "city": "Columbia",
      "country": "United States",
      "iata_code": "COU",
      "_geoloc": {
        "latitude": 38.818094,
        "longitude": -92.219631
      },
      "links_count": 8,
      "objectID": "3719"
    },
    {
      "name": "Laredo Intl",
      "city": "Laredo",
      "country": "United States",
      "iata_code": "LRD",
      "_geoloc": {
        "latitude": 27.54375,
        "longitude": -99.461556
      },
      "links_count": 8,
      "objectID": "3691"
    },
    {
      "name": "Salisbury Ocean City Wicomico Rgnl",
      "city": "Salisbury",
      "country": "United States",
      "iata_code": "SBY",
      "_geoloc": {
        "latitude": 38.340525,
        "longitude": -75.510289
      },
      "links_count": 8,
      "objectID": "3642"
    },
    {
      "name": "Lubeck Blankensee",
      "city": "Luebeck",
      "country": "Germany",
      "iata_code": "LBC",
      "_geoloc": {
        "latitude": 53.805367,
        "longitude": 10.719222
      },
      "links_count": 8,
      "objectID": "364"
    },
    {
      "name": "Duluth Intl",
      "city": "Duluth",
      "country": "United States",
      "iata_code": "DLH",
      "_geoloc": {
        "latitude": 46.842091,
        "longitude": -92.193649
      },
      "links_count": 8,
      "objectID": "3598"
    },
    {
      "name": "Hilo Intl",
      "city": "Hilo",
      "country": "United States",
      "iata_code": "ITO",
      "_geoloc": {
        "latitude": 19.721375,
        "longitude": -155.048469
      },
      "links_count": 8,
      "objectID": "3415"
    },
    {
      "name": "Coffs Harbour",
      "city": "Coff's Harbour",
      "country": "Australia",
      "iata_code": "CFS",
      "_geoloc": {
        "latitude": -30.320556,
        "longitude": 153.116389
      },
      "links_count": 8,
      "objectID": "3356"
    },
    {
      "name": "Albury",
      "city": "Albury",
      "country": "Australia",
      "iata_code": "ABX",
      "_geoloc": {
        "latitude": -36.067778,
        "longitude": 146.958056
      },
      "links_count": 8,
      "objectID": "3333"
    },
    {
      "name": "Charleville",
      "city": "Charlieville",
      "country": "Australia",
      "iata_code": "CTL",
      "_geoloc": {
        "latitude": -26.413334,
        "longitude": 146.2625
      },
      "links_count": 8,
      "objectID": "3323"
    },
    {
      "name": "Presidente Nicolau Lobato Intl",
      "city": "Dili",
      "country": "East Timor",
      "iata_code": "DIL",
      "_geoloc": {
        "latitude": -8.546553,
        "longitude": 125.524719
      },
      "links_count": 8,
      "objectID": "3310"
    },
    {
      "name": "Labuan",
      "city": "Labuan",
      "country": "Malaysia",
      "iata_code": "LBU",
      "_geoloc": {
        "latitude": 5.300683,
        "longitude": 115.250181
      },
      "links_count": 8,
      "objectID": "3270"
    },
    {
      "name": "Jalaluddin",
      "city": "Gorontalo",
      "country": "Indonesia",
      "iata_code": "GTO",
      "_geoloc": {
        "latitude": 0.637119,
        "longitude": 122.849858
      },
      "links_count": 8,
      "objectID": "3247"
    },
    {
      "name": "Moses Kilangin",
      "city": "Timika",
      "country": "Indonesia",
      "iata_code": "TIM",
      "_geoloc": {
        "latitude": -4.528275,
        "longitude": 136.887375
      },
      "links_count": 8,
      "objectID": "3243"
    },
    {
      "name": "Frans Kaisiepo",
      "city": "Biak",
      "country": "Indonesia",
      "iata_code": "BIK",
      "_geoloc": {
        "latitude": -1.190017,
        "longitude": 136.107997
      },
      "links_count": 8,
      "objectID": "3241"
    },
    {
      "name": "Myitkyina",
      "city": "Myitkyina",
      "country": "Burma",
      "iata_code": "MYT",
      "_geoloc": {
        "latitude": 25.383636,
        "longitude": 97.351919
      },
      "links_count": 8,
      "objectID": "3224"
    },
    {
      "name": "Shpakovskoye",
      "city": "Stavropol",
      "country": "Russia",
      "iata_code": "STW",
      "_geoloc": {
        "latitude": 45.109165,
        "longitude": 42.112778
      },
      "links_count": 8,
      "objectID": "2963"
    },
    {
      "name": "Uytash",
      "city": "Makhachkala",
      "country": "Russia",
      "iata_code": "MCX",
      "_geoloc": {
        "latitude": 42.816822,
        "longitude": 47.652294
      },
      "links_count": 8,
      "objectID": "2961"
    },
    {
      "name": "Abakan",
      "city": "Abakan",
      "country": "Russia",
      "iata_code": "ABA",
      "_geoloc": {
        "latitude": 53.74,
        "longitude": 91.385
      },
      "links_count": 8,
      "objectID": "2955"
    },
    {
      "name": "Bratsk",
      "city": "Bratsk",
      "country": "Russia",
      "iata_code": "BTK",
      "_geoloc": {
        "latitude": 56.370556,
        "longitude": 101.698331
      },
      "links_count": 8,
      "objectID": "2936"
    },
    {
      "name": "Rafael Hernandez",
      "city": "Aguadilla",
      "country": "Puerto Rico",
      "iata_code": "BQN",
      "_geoloc": {
        "latitude": 18.494861,
        "longitude": -67.129444
      },
      "links_count": 8,
      "objectID": "2885"
    },
    {
      "name": "Grand Case",
      "city": "St. Martin",
      "country": "Guadeloupe",
      "iata_code": "SFG",
      "_geoloc": {
        "latitude": 18.099914,
        "longitude": -63.047197
      },
      "links_count": 8,
      "objectID": "2879"
    },
    {
      "name": "Mayor Buenaventura Vivas",
      "city": "Santo Domingo",
      "country": "Venezuela",
      "iata_code": "STD",
      "_geoloc": {
        "latitude": 7.565111,
        "longitude": -72.035125
      },
      "links_count": 8,
      "objectID": "2861"
    },
    {
      "name": "Maturin",
      "city": "Maturin",
      "country": "Venezuela",
      "iata_code": "MUN",
      "_geoloc": {
        "latitude": 9.749067,
        "longitude": -63.1534
      },
      "links_count": 8,
      "objectID": "2852"
    },
    {
      "name": "Josefa Camejo",
      "city": "Paraguana",
      "country": "Venezuela",
      "iata_code": "LSP",
      "_geoloc": {
        "latitude": 11.780775,
        "longitude": -70.151497
      },
      "links_count": 8,
      "objectID": "2844"
    },
    {
      "name": "Bagotville",
      "city": "Bagotville",
      "country": "Canada",
      "iata_code": "YBG",
      "_geoloc": {
        "latitude": 48.330555,
        "longitude": -70.996391
      },
      "links_count": 8,
      "objectID": "28"
    },
    {
      "name": "Yacuiba",
      "city": "Yacuiba",
      "country": "Bolivia",
      "iata_code": "BYC",
      "_geoloc": {
        "latitude": -21.960925,
        "longitude": -63.651669
      },
      "links_count": 8,
      "objectID": "2772"
    },
    {
      "name": "Simon Bolivar",
      "city": "Santa Marta",
      "country": "Colombia",
      "iata_code": "SMR",
      "_geoloc": {
        "latitude": 11.11965,
        "longitude": -74.230647
      },
      "links_count": 8,
      "objectID": "2748"
    },
    {
      "name": "Camilo Daza",
      "city": "Cucuta",
      "country": "Colombia",
      "iata_code": "CUC",
      "_geoloc": {
        "latitude": 7.927567,
        "longitude": -72.511547
      },
      "links_count": 8,
      "objectID": "2713"
    },
    {
      "name": "Tres De Mayo",
      "city": "Puerto Asis",
      "country": "Colombia",
      "iata_code": "PUU",
      "_geoloc": {
        "latitude": 0.505228,
        "longitude": -76.500836
      },
      "links_count": 8,
      "objectID": "2706"
    },
    {
      "name": "Balmaceda",
      "city": "Balmaceda",
      "country": "Chile",
      "iata_code": "BBA",
      "_geoloc": {
        "latitude": -45.916058,
        "longitude": -71.689475
      },
      "links_count": 8,
      "objectID": "2642"
    },
    {
      "name": "Uberaba",
      "city": "Uberaba",
      "country": "Brazil",
      "iata_code": "UBA",
      "_geoloc": {
        "latitude": -19.765,
        "longitude": -47.964778
      },
      "links_count": 8,
      "objectID": "2635"
    },
    {
      "name": "Comandante Espora",
      "city": "Bahia Blanca",
      "country": "Argentina",
      "iata_code": "BHI",
      "_geoloc": {
        "latitude": -38.724967,
        "longitude": -62.169317
      },
      "links_count": 8,
      "objectID": "2501"
    },
    {
      "name": "Cataratas Del Iguazu",
      "city": "Iguazu Falls",
      "country": "Argentina",
      "iata_code": "IGR",
      "_geoloc": {
        "latitude": -25.737281,
        "longitude": -54.473444
      },
      "links_count": 8,
      "objectID": "2471"
    },
    {
      "name": "Dumaguete",
      "city": "Dumaguete",
      "country": "Philippines",
      "iata_code": "DGT",
      "_geoloc": {
        "latitude": 9.333714,
        "longitude": 123.300472
      },
      "links_count": 8,
      "objectID": "2425"
    },
    {
      "name": "Noumerat",
      "city": "Ghardaia",
      "country": "Algeria",
      "iata_code": "GHA",
      "_geoloc": {
        "latitude": 32.384106,
        "longitude": 3.794114
      },
      "links_count": 8,
      "objectID": "237"
    },
    {
      "name": "Gwangju",
      "city": "Kwangju",
      "country": "South Korea",
      "iata_code": "KWJ",
      "_geoloc": {
        "latitude": 35.126389,
        "longitude": 126.808889
      },
      "links_count": 8,
      "objectID": "2361"
    },
    {
      "name": "Biskra",
      "city": "Biskra",
      "country": "Algeria",
      "iata_code": "BSK",
      "_geoloc": {
        "latitude": 34.793289,
        "longitude": 5.738231
      },
      "links_count": 8,
      "objectID": "235"
    },
    {
      "name": "Hanamaki",
      "city": "Hanamaki",
      "country": "Japan",
      "iata_code": "HNA",
      "_geoloc": {
        "latitude": 39.428611,
        "longitude": 141.135278
      },
      "links_count": 8,
      "objectID": "2344"
    },
    {
      "name": "Kochi",
      "city": "Kochi",
      "country": "Japan",
      "iata_code": "KCZ",
      "_geoloc": {
        "latitude": 33.546111,
        "longitude": 133.669444
      },
      "links_count": 8,
      "objectID": "2332"
    },
    {
      "name": "Fukue",
      "city": "Fukue",
      "country": "Japan",
      "iata_code": "FUJ",
      "_geoloc": {
        "latitude": 32.666269,
        "longitude": 128.832808
      },
      "links_count": 8,
      "objectID": "2304"
    },
    {
      "name": "Hualien",
      "city": "Hualien",
      "country": "Taiwan",
      "iata_code": "HUN",
      "_geoloc": {
        "latitude": 24.023725,
        "longitude": 121.616906
      },
      "links_count": 8,
      "objectID": "2278"
    },
    {
      "name": "Cassidy Intl",
      "city": "Kiritimati",
      "country": "Kiribati",
      "iata_code": "CXI",
      "_geoloc": {
        "latitude": 1.986161,
        "longitude": -157.349778
      },
      "links_count": 8,
      "objectID": "2252"
    },
    {
      "name": "Marshall Islands Intl",
      "city": "Majuro",
      "country": "Marshall Islands",
      "iata_code": "MAJ",
      "_geoloc": {
        "latitude": 7.064758,
        "longitude": 171.272022
      },
      "links_count": 8,
      "objectID": "2249"
    },
    {
      "name": "Bateen",
      "city": "Abu Dhabi",
      "country": "United Arab Emirates",
      "iata_code": "AZI",
      "_geoloc": {
        "latitude": 24.428333,
        "longitude": 54.458084
      },
      "links_count": 8,
      "objectID": "2180"
    },
    {
      "name": "Tamanrasset",
      "city": "Tamanrasset",
      "country": "Algeria",
      "iata_code": "TMR",
      "_geoloc": {
        "latitude": 22.811461,
        "longitude": 5.451075
      },
      "links_count": 8,
      "objectID": "216"
    },
    {
      "name": "Kerman",
      "city": "Kerman",
      "country": "Iran",
      "iata_code": "KER",
      "_geoloc": {
        "latitude": 30.274444,
        "longitude": 56.951111
      },
      "links_count": 8,
      "objectID": "2136"
    },
    {
      "name": "Sault Ste Marie",
      "city": "Sault Sainte Marie",
      "country": "Canada",
      "iata_code": "YAM",
      "_geoloc": {
        "latitude": 46.485001,
        "longitude": -84.509445
      },
      "links_count": 8,
      "objectID": "21"
    },
    {
      "name": "Mazar I Sharif",
      "city": "Mazar-i-sharif",
      "country": "Afghanistan",
      "iata_code": "MZR",
      "_geoloc": {
        "latitude": 36.706914,
        "longitude": 67.209678
      },
      "links_count": 8,
      "objectID": "2053"
    },
    {
      "name": "Nelson",
      "city": "Nelson",
      "country": "New Zealand",
      "iata_code": "NSN",
      "_geoloc": {
        "latitude": -41.298333,
        "longitude": 173.221111
      },
      "links_count": 8,
      "objectID": "2024"
    },
    {
      "name": "Hamilton",
      "city": "Hamilton",
      "country": "New Zealand",
      "iata_code": "HLZ",
      "_geoloc": {
        "latitude": -37.866661,
        "longitude": 175.332056
      },
      "links_count": 8,
      "objectID": "2015"
    },
    {
      "name": "Huahine",
      "city": "Huahine Island",
      "country": "French Polynesia",
      "iata_code": "HUH",
      "_geoloc": {
        "latitude": -16.687242,
        "longitude": -151.021667
      },
      "links_count": 8,
      "objectID": "1991"
    },
    {
      "name": "Nuku Hiva",
      "city": "Nuku Hiva",
      "country": "French Polynesia",
      "iata_code": "NHV",
      "_geoloc": {
        "latitude": -8.795603,
        "longitude": -140.228789
      },
      "links_count": 8,
      "objectID": "1987"
    },
    {
      "name": "San Salvador",
      "city": "Cockburn Town",
      "country": "Bahamas",
      "iata_code": "ZSA",
      "_geoloc": {
        "latitude": 24.063275,
        "longitude": -74.523967
      },
      "links_count": 8,
      "objectID": "1956"
    },
    {
      "name": "Taloyoak",
      "city": "Spence Bay",
      "country": "Canada",
      "iata_code": "YYH",
      "_geoloc": {
        "latitude": 69.546667,
        "longitude": -93.576667
      },
      "links_count": 8,
      "objectID": "183"
    },
    {
      "name": "General Rodolfo Sanchez Taboada Intl",
      "city": "Mexicali",
      "country": "Mexico",
      "iata_code": "MXL",
      "_geoloc": {
        "latitude": 32.630634,
        "longitude": -115.241637
      },
      "links_count": 8,
      "objectID": "1820"
    },
    {
      "name": "Charlottetown",
      "city": "Charlottetown",
      "country": "Canada",
      "iata_code": "YYG",
      "_geoloc": {
        "latitude": 46.290001,
        "longitude": -63.121111
      },
      "links_count": 8,
      "objectID": "182"
    },
    {
      "name": "Smithers",
      "city": "Smithers",
      "country": "Canada",
      "iata_code": "YYD",
      "_geoloc": {
        "latitude": 54.824722,
        "longitude": -127.182778
      },
      "links_count": 8,
      "objectID": "179"
    },
    {
      "name": "Pangnirtung",
      "city": "Pangnirtung",
      "country": "Canada",
      "iata_code": "YXP",
      "_geoloc": {
        "latitude": 66.145,
        "longitude": -65.713611
      },
      "links_count": 8,
      "objectID": "170"
    },
    {
      "name": "Erhac",
      "city": "Malatya",
      "country": "Turkey",
      "iata_code": "MLX",
      "_geoloc": {
        "latitude": 38.435347,
        "longitude": 38.091006
      },
      "links_count": 8,
      "objectID": "1695"
    },
    {
      "name": "Sivas",
      "city": "Sivas",
      "country": "Turkey",
      "iata_code": "VAS",
      "_geoloc": {
        "latitude": 39.813828,
        "longitude": 36.903497
      },
      "links_count": 8,
      "objectID": "1694"
    },
    {
      "name": "Canadian Rockies Intl",
      "city": "Cranbrook",
      "country": "Canada",
      "iata_code": "YXC",
      "_geoloc": {
        "latitude": 49.612222,
        "longitude": -115.781944
      },
      "links_count": 8,
      "objectID": "164"
    },
    {
      "name": "Pico",
      "city": "Pico",
      "country": "Portugal",
      "iata_code": "PIX",
      "_geoloc": {
        "latitude": 38.554333,
        "longitude": -28.441333
      },
      "links_count": 8,
      "objectID": "1634"
    },
    {
      "name": "Flores",
      "city": "Flores",
      "country": "Portugal",
      "iata_code": "FLW",
      "_geoloc": {
        "latitude": 39.455272,
        "longitude": -31.131361
      },
      "links_count": 8,
      "objectID": "1625"
    },
    {
      "name": "Mosnov",
      "city": "Ostrava",
      "country": "Czech Republic",
      "iata_code": "OSR",
      "_geoloc": {
        "latitude": 49.696292,
        "longitude": 18.111053
      },
      "links_count": 8,
      "objectID": "1582"
    },
    {
      "name": "Parma",
      "city": "Parma",
      "country": "Italy",
      "iata_code": "PMF",
      "_geoloc": {
        "latitude": 44.824483,
        "longitude": 10.296367
      },
      "links_count": 8,
      "objectID": "1531"
    },
    {
      "name": "Hall Beach",
      "city": "Hall Beach",
      "country": "Canada",
      "iata_code": "YUX",
      "_geoloc": {
        "latitude": 68.776111,
        "longitude": -81.243611
      },
      "links_count": 8,
      "objectID": "148"
    },
    {
      "name": "Repulse Bay",
      "city": "Repulse Bay",
      "country": "Canada",
      "iata_code": "YUT",
      "_geoloc": {
        "latitude": 66.521389,
        "longitude": -86.224722
      },
      "links_count": 8,
      "objectID": "147"
    },
    {
      "name": "Kasos",
      "city": "Kasos",
      "country": "Greece",
      "iata_code": "KSJ",
      "_geoloc": {
        "latitude": 35.421358,
        "longitude": 26.910047
      },
      "links_count": 8,
      "objectID": "1461"
    },
    {
      "name": "Kithira",
      "city": "Kithira",
      "country": "Greece",
      "iata_code": "KIT",
      "_geoloc": {
        "latitude": 36.274258,
        "longitude": 23.016978
      },
      "links_count": 8,
      "objectID": "1454"
    },
    {
      "name": "Garons",
      "city": "Nimes",
      "country": "France",
      "iata_code": "FNI",
      "_geoloc": {
        "latitude": 43.757444,
        "longitude": 4.416347
      },
      "links_count": 8,
      "objectID": "1439"
    },
    {
      "name": "Carpiquet",
      "city": "Caen",
      "country": "France",
      "iata_code": "CFR",
      "_geoloc": {
        "latitude": 49.173333,
        "longitude": -0.45
      },
      "links_count": 8,
      "objectID": "1412"
    },
    {
      "name": "Fort Smith",
      "city": "Fort Smith",
      "country": "Canada",
      "iata_code": "YSM",
      "_geoloc": {
        "latitude": 60.020278,
        "longitude": -111.961944
      },
      "links_count": 8,
      "objectID": "136"
    },
    {
      "name": "Marcillac",
      "city": "Rodez",
      "country": "France",
      "iata_code": "RDZ",
      "_geoloc": {
        "latitude": 44.407869,
        "longitude": 2.482672
      },
      "links_count": 8,
      "objectID": "1289"
    },
    {
      "name": "Quesnel",
      "city": "Quesnel",
      "country": "Canada",
      "iata_code": "YQZ",
      "_geoloc": {
        "latitude": 53.026112,
        "longitude": -122.510278
      },
      "links_count": 8,
      "objectID": "127"
    },
    {
      "name": "Grande Prairie",
      "city": "Grande Prairie",
      "country": "Canada",
      "iata_code": "YQU",
      "_geoloc": {
        "latitude": 55.179722,
        "longitude": -118.885
      },
      "links_count": 8,
      "objectID": "122"
    },
    {
      "name": "Osijek",
      "city": "Osijek",
      "country": "Croatia",
      "iata_code": "OSI",
      "_geoloc": {
        "latitude": 45.462667,
        "longitude": 18.810156
      },
      "links_count": 8,
      "objectID": "1202"
    },
    {
      "name": "Lamu Manda",
      "city": "Lamu",
      "country": "Kenya",
      "iata_code": "LAU",
      "_geoloc": {
        "latitude": -2.252417,
        "longitude": 40.913097
      },
      "links_count": 8,
      "objectID": "1144"
    },
    {
      "name": "Aswan Intl",
      "city": "Aswan",
      "country": "Egypt",
      "iata_code": "ASW",
      "_geoloc": {
        "latitude": 23.964356,
        "longitude": 32.819975
      },
      "links_count": 8,
      "objectID": "1136"
    },
    {
      "name": "Nouadhibou",
      "city": "Nouadhibou",
      "country": "Mauritania",
      "iata_code": "NDB",
      "_geoloc": {
        "latitude": 20.933067,
        "longitude": -17.029956
      },
      "links_count": 8,
      "objectID": "1097"
    },
    {
      "name": "J M Nkomo Intl",
      "city": "Bulawayo",
      "country": "Zimbabwe",
      "iata_code": "BUQ",
      "_geoloc": {
        "latitude": -20.017431,
        "longitude": 28.617869
      },
      "links_count": 8,
      "objectID": "1001"
    },
    {
      "name": "Sao Tome Intl",
      "city": "Sao Tome",
      "country": "Sao Tome and Principe",
      "iata_code": "TMS",
      "_geoloc": {
        "latitude": 0.378175,
        "longitude": 6.712153
      },
      "links_count": 7,
      "objectID": "973"
    },
    {
      "name": "Mara Serena Airport",
      "city": "Masai Mara",
      "country": "Kenya",
      "iata_code": "MRE",
      "_geoloc": {
        "latitude": -1.406111,
        "longitude": 35.008056
      },
      "links_count": 7,
      "objectID": "7424"
    },
    {
      "name": "Kotlik Airport",
      "city": "Kotlik",
      "country": "United States",
      "iata_code": "KOT",
      "_geoloc": {
        "latitude": 63.030556,
        "longitude": -163.532778
      },
      "links_count": 7,
      "objectID": "7207"
    },
    {
      "name": "Kwigillingok Airport",
      "city": "Kwigillingok",
      "country": "United States",
      "iata_code": "KWK",
      "_geoloc": {
        "latitude": 59.876389,
        "longitude": -163.168611
      },
      "links_count": 7,
      "objectID": "7096"
    },
    {
      "name": "Emmonak Airport",
      "city": "Emmonak",
      "country": "United States",
      "iata_code": "EMK",
      "_geoloc": {
        "latitude": 62.786111,
        "longitude": -164.490833
      },
      "links_count": 7,
      "objectID": "7087"
    },
    {
      "name": "Bonaventure Airport",
      "city": "Bonaventure",
      "country": "Canada",
      "iata_code": "YVB",
      "_geoloc": {
        "latitude": 48.0711,
        "longitude": -65.4603
      },
      "links_count": 7,
      "objectID": "6775"
    },
    {
      "name": "Samburu South Airport",
      "city": "Samburu South",
      "country": "Kenya",
      "iata_code": "UAS",
      "_geoloc": {
        "latitude": 0.530583,
        "longitude": 37.5342
      },
      "links_count": 7,
      "objectID": "6773"
    },
    {
      "name": "Sege Airport",
      "city": "Sege",
      "country": "Solomon Islands",
      "iata_code": "EGM",
      "_geoloc": {
        "latitude": -8.57889,
        "longitude": 157.876
      },
      "links_count": 7,
      "objectID": "6758"
    },
    {
      "name": "Tambor Airport",
      "city": "Nicoya",
      "country": "Costa Rica",
      "iata_code": "TMU",
      "_geoloc": {
        "latitude": 9.73852,
        "longitude": -85.0138
      },
      "links_count": 7,
      "objectID": "6732"
    },
    {
      "name": "Anaktuvuk Pass Airport",
      "city": "Anaktuvuk Pass",
      "country": "United States",
      "iata_code": "AKP",
      "_geoloc": {
        "latitude": 68.1336,
        "longitude": -151.743
      },
      "links_count": 7,
      "objectID": "6712"
    },
    {
      "name": "Dryden Rgnl",
      "city": "Dryden",
      "country": "Canada",
      "iata_code": "YHD",
      "_geoloc": {
        "latitude": 49.831667,
        "longitude": -92.744167
      },
      "links_count": 7,
      "objectID": "67"
    },
    {
      "name": "Andenes",
      "city": "Andoya",
      "country": "Norway",
      "iata_code": "ANX",
      "_geoloc": {
        "latitude": 69.2925,
        "longitude": 16.144167
      },
      "links_count": 7,
      "objectID": "631"
    },
    {
      "name": "Longreach Airport",
      "city": "Longreach",
      "country": "Australia",
      "iata_code": "LRE",
      "_geoloc": {
        "latitude": -23.4342,
        "longitude": 144.28
      },
      "links_count": 7,
      "objectID": "6289"
    },
    {
      "name": "Haines Airport",
      "city": "Haines",
      "country": "United States",
      "iata_code": "HNS",
      "_geoloc": {
        "latitude": 59.2438,
        "longitude": -135.524
      },
      "links_count": 7,
      "objectID": "5963"
    },
    {
      "name": "Skagway Airport",
      "city": "Skagway",
      "country": "United States",
      "iata_code": "SGY",
      "_geoloc": {
        "latitude": 59.4601,
        "longitude": -135.316
      },
      "links_count": 7,
      "objectID": "5961"
    },
    {
      "name": "Craig Cove Airport",
      "city": "Craig Cove",
      "country": "Vanuatu",
      "iata_code": "CCV",
      "_geoloc": {
        "latitude": -16.265,
        "longitude": 167.924
      },
      "links_count": 7,
      "objectID": "5897"
    },
    {
      "name": "Pikangikum Airport",
      "city": "Pikangikum",
      "country": "Canada",
      "iata_code": "YPM",
      "_geoloc": {
        "latitude": 51.8197,
        "longitude": -93.9733
      },
      "links_count": 7,
      "objectID": "5521"
    },
    {
      "name": "Inukjuak Airport",
      "city": "Inukjuak",
      "country": "Canada",
      "iata_code": "YPH",
      "_geoloc": {
        "latitude": 58.4719,
        "longitude": -78.0769
      },
      "links_count": 7,
      "objectID": "5520"
    },
    {
      "name": "Skagen",
      "city": "Stokmarknes",
      "country": "Norway",
      "iata_code": "SKN",
      "_geoloc": {
        "latitude": 68.580833,
        "longitude": 15.026111
      },
      "links_count": 7,
      "objectID": "4252"
    },
    {
      "name": "Ikaria",
      "city": "Ikaria",
      "country": "Greece",
      "iata_code": "JIK",
      "_geoloc": {
        "latitude": 37.682717,
        "longitude": 26.347061
      },
      "links_count": 7,
      "objectID": "4191"
    },
    {
      "name": "Lanai",
      "city": "Lanai",
      "country": "United States",
      "iata_code": "LNY",
      "_geoloc": {
        "latitude": 20.785611,
        "longitude": -156.951419
      },
      "links_count": 7,
      "objectID": "3851"
    },
    {
      "name": "Molokai",
      "city": "Molokai",
      "country": "United States",
      "iata_code": "MKK",
      "_geoloc": {
        "latitude": 21.152886,
        "longitude": -157.096256
      },
      "links_count": 7,
      "objectID": "3705"
    },
    {
      "name": "Fak Fak",
      "city": "Fak Fak",
      "country": "Indonesia",
      "iata_code": "FKQ",
      "_geoloc": {
        "latitude": -2.920192,
        "longitude": 132.267031
      },
      "links_count": 7,
      "objectID": "3257"
    },
    {
      "name": "Taraz",
      "city": "Dzhambul",
      "country": "Kazakhstan",
      "iata_code": "DMB",
      "_geoloc": {
        "latitude": 42.853611,
        "longitude": 71.303611
      },
      "links_count": 7,
      "objectID": "2911"
    },
    {
      "name": "Pelotas",
      "city": "Pelotas",
      "country": "Brazil",
      "iata_code": "PET",
      "_geoloc": {
        "latitude": -31.718353,
        "longitude": -52.327689
      },
      "links_count": 7,
      "objectID": "2603"
    },
    {
      "name": "Altamira",
      "city": "Altamira",
      "country": "Brazil",
      "iata_code": "ATM",
      "_geoloc": {
        "latitude": -3.253906,
        "longitude": -52.253978
      },
      "links_count": 7,
      "objectID": "2566"
    },
    {
      "name": "Bartolomeu Lisandro",
      "city": "Campos",
      "country": "Brazil",
      "iata_code": "CAW",
      "_geoloc": {
        "latitude": -21.698333,
        "longitude": -41.301669
      },
      "links_count": 7,
      "objectID": "2543"
    },
    {
      "name": "Moorea",
      "city": "Moorea",
      "country": "French Polynesia",
      "iata_code": "MOZ",
      "_geoloc": {
        "latitude": -17.489972,
        "longitude": -149.761869
      },
      "links_count": 7,
      "objectID": "1992"
    },
    {
      "name": "Golfito",
      "city": "Golfito",
      "country": "Costa Rica",
      "iata_code": "GLF",
      "_geoloc": {
        "latitude": 8.653775,
        "longitude": -83.180544
      },
      "links_count": 7,
      "objectID": "1879"
    },
    {
      "name": "Konya",
      "city": "Konya",
      "country": "Turkey",
      "iata_code": "KYA",
      "_geoloc": {
        "latitude": 37.979,
        "longitude": 32.561861
      },
      "links_count": 7,
      "objectID": "1691"
    },
    {
      "name": "Transilvania Targu Mures",
      "city": "Tirgu Mures",
      "country": "Romania",
      "iata_code": "TGM",
      "_geoloc": {
        "latitude": 46.467714,
        "longitude": 24.412525
      },
      "links_count": 7,
      "objectID": "1662"
    },
    {
      "name": "Valladolid",
      "city": "Valladolid",
      "country": "Spain",
      "iata_code": "VLL",
      "_geoloc": {
        "latitude": 41.706111,
        "longitude": -4.851944
      },
      "links_count": 7,
      "objectID": "1247"
    },
    {
      "name": "Eldoret Intl",
      "city": "Eldoret",
      "country": "Kenya",
      "iata_code": "EDL",
      "_geoloc": {
        "latitude": 0.404458,
        "longitude": 35.238928
      },
      "links_count": 7,
      "objectID": "1138"
    },
    {
      "name": "Quelimane",
      "city": "Quelimane",
      "country": "Mozambique",
      "iata_code": "UEL",
      "_geoloc": {
        "latitude": -17.8555,
        "longitude": 36.869106
      },
      "links_count": 6,
      "objectID": "986"
    },
    {
      "name": "Inhambane",
      "city": "Inhambane",
      "country": "Mozambique",
      "iata_code": "INH",
      "_geoloc": {
        "latitude": -23.876431,
        "longitude": 35.408544
      },
      "links_count": 6,
      "objectID": "976"
    },
    {
      "name": "Lubango",
      "city": "Lubango",
      "country": "Angola",
      "iata_code": "SDD",
      "_geoloc": {
        "latitude": -14.924733,
        "longitude": 13.575022
      },
      "links_count": 6,
      "objectID": "959"
    },
    {
      "name": "Soyo",
      "city": "Soyo",
      "country": "Angola",
      "iata_code": "SZA",
      "_geoloc": {
        "latitude": -6.141086,
        "longitude": 12.371764
      },
      "links_count": 6,
      "objectID": "958"
    },
    {
      "name": "Menongue",
      "city": "Menongue",
      "country": "Angola",
      "iata_code": "SPP",
      "_geoloc": {
        "latitude": -14.657583,
        "longitude": 17.719833
      },
      "links_count": 6,
      "objectID": "953"
    },
    {
      "name": "Huambo",
      "city": "Huambo",
      "country": "Angola",
      "iata_code": "NOV",
      "_geoloc": {
        "latitude": -12.808878,
        "longitude": 15.760547
      },
      "links_count": 6,
      "objectID": "948"
    },
    {
      "name": "Toliara",
      "city": "Toliara",
      "country": "Madagascar",
      "iata_code": "TLE",
      "_geoloc": {
        "latitude": -23.383369,
        "longitude": 43.728453
      },
      "links_count": 6,
      "objectID": "943"
    },
    {
      "name": "Sambava",
      "city": "Sambava",
      "country": "Madagascar",
      "iata_code": "SVB",
      "_geoloc": {
        "latitude": -14.278611,
        "longitude": 50.174721
      },
      "links_count": 6,
      "objectID": "933"
    },
    {
      "name": "Philibert Tsiranana",
      "city": "Mahajanga",
      "country": "Madagascar",
      "iata_code": "MJN",
      "_geoloc": {
        "latitude": -15.667144,
        "longitude": 46.351828
      },
      "links_count": 6,
      "objectID": "929"
    },
    {
      "name": "Antsirabato",
      "city": "Antalaha",
      "country": "Madagascar",
      "iata_code": "ANM",
      "_geoloc": {
        "latitude": -14.999411,
        "longitude": 50.320233
      },
      "links_count": 6,
      "objectID": "927"
    },
    {
      "name": "Sigiriya Airport",
      "city": "Sigiriya",
      "country": "Sri Lanka",
      "iata_code": "GIU",
      "_geoloc": {
        "latitude": 7.57212,
        "longitude": 80.43412
      },
      "links_count": 6,
      "objectID": "9229"
    },
    {
      "name": "Sainte Marie",
      "city": "Sainte Marie",
      "country": "Madagascar",
      "iata_code": "SMS",
      "_geoloc": {
        "latitude": -17.093889,
        "longitude": 49.815834
      },
      "links_count": 6,
      "objectID": "920"
    },
    {
      "name": "St Pierre Pierrefonds",
      "city": "St.-pierre",
      "country": "Reunion",
      "iata_code": "ZSE",
      "_geoloc": {
        "latitude": -21.320039,
        "longitude": 55.423581
      },
      "links_count": 6,
      "objectID": "917"
    },
    {
      "name": "Moosonee",
      "city": "Moosonee",
      "country": "Canada",
      "iata_code": "YMO",
      "_geoloc": {
        "latitude": 51.291111,
        "longitude": -80.607778
      },
      "links_count": 6,
      "objectID": "91"
    },
    {
      "name": "Brusselton",
      "city": "Brusselton",
      "country": "Australia",
      "iata_code": "BQB",
      "_geoloc": {
        "latitude": -33.687222,
        "longitude": 115.400278
      },
      "links_count": 6,
      "objectID": "9090"
    },
    {
      "name": "Bangui M Poko",
      "city": "Bangui",
      "country": "Central African Republic",
      "iata_code": "BGF",
      "_geoloc": {
        "latitude": 4.398475,
        "longitude": 18.518786
      },
      "links_count": 6,
      "objectID": "888"
    },
    {
      "name": "Yongzhou Lingling Airport",
      "city": "Yongzhou",
      "country": "China",
      "iata_code": "LLF",
      "_geoloc": {
        "latitude": 26.345556,
        "longitude": 111.612222
      },
      "links_count": 6,
      "objectID": "8845"
    },
    {
      "name": "Bauru-Arealva",
      "city": "Bauru",
      "country": "Brazil",
      "iata_code": "JTC",
      "_geoloc": {
        "latitude": -22.157778,
        "longitude": -49.068333
      },
      "links_count": 6,
      "objectID": "8238"
    },
    {
      "name": "Toksook Bay Airport",
      "city": "Toksook Bay",
      "country": "United States",
      "iata_code": "OOK",
      "_geoloc": {
        "latitude": 60.541389,
        "longitude": -165.087222
      },
      "links_count": 6,
      "objectID": "8200"
    },
    {
      "name": "Tianyang",
      "city": "Baise",
      "country": "China",
      "iata_code": "AEB",
      "_geoloc": {
        "latitude": 23.72,
        "longitude": 106.96
      },
      "links_count": 6,
      "objectID": "8082"
    },
    {
      "name": "Mackenzie Airport",
      "city": "Mackenzie British Columbia",
      "country": "Canada",
      "iata_code": "YZY",
      "_geoloc": {
        "latitude": 55.29944,
        "longitude": -123.08333
      },
      "links_count": 6,
      "objectID": "7987"
    },
    {
      "name": "Ukunda Airport",
      "city": "Ukunda",
      "country": "Kenya",
      "iata_code": "UKA",
      "_geoloc": {
        "latitude": -4.29694,
        "longitude": 39.5714
      },
      "links_count": 6,
      "objectID": "7976"
    },
    {
      "name": "Waterloo",
      "city": "Waterloo",
      "country": "Canada",
      "iata_code": "YKF",
      "_geoloc": {
        "latitude": 43.460833,
        "longitude": -80.378611
      },
      "links_count": 6,
      "objectID": "79"
    },
    {
      "name": "Provo Municipal Airport",
      "city": "Provo",
      "country": "United States",
      "iata_code": "PVU",
      "_geoloc": {
        "latitude": 40.21805555,
        "longitude": -111.72222222
      },
      "links_count": 6,
      "objectID": "7579"
    },
    {
      "name": "Zhijiang Airport",
      "city": "Zhijiang",
      "country": "China",
      "iata_code": "HJJ",
      "_geoloc": {
        "latitude": 27.441389,
        "longitude": 109.699722
      },
      "links_count": 6,
      "objectID": "7519"
    },
    {
      "name": "Liping Airport",
      "city": "Liping",
      "country": "China",
      "iata_code": "HZH",
      "_geoloc": {
        "latitude": 26.206,
        "longitude": 109.039
      },
      "links_count": 6,
      "objectID": "7508"
    },
    {
      "name": "Pond Inlet",
      "city": "Pond Inlet",
      "country": "Canada",
      "iata_code": "YIO",
      "_geoloc": {
        "latitude": 72.683334,
        "longitude": -77.966667
      },
      "links_count": 6,
      "objectID": "75"
    },
    {
      "name": "Jijiga Airport",
      "city": "Jijiga",
      "country": "Ethiopia",
      "iata_code": "JIJ",
      "_geoloc": {
        "latitude": 9.359722,
        "longitude": 42.7875
      },
      "links_count": 6,
      "objectID": "7417"
    },
    {
      "name": "Joacaba Airport",
      "city": "Joacaba",
      "country": "Brazil",
      "iata_code": "JCB",
      "_geoloc": {
        "latitude": -27.172778,
        "longitude": -51.500833
      },
      "links_count": 6,
      "objectID": "7384"
    },
    {
      "name": "Dourados Airport",
      "city": "Dourados",
      "country": "Brazil",
      "iata_code": "DOU",
      "_geoloc": {
        "latitude": -22.220833,
        "longitude": -54.805833
      },
      "links_count": 6,
      "objectID": "7380"
    },
    {
      "name": "Sinop Airport",
      "city": "Sinop",
      "country": "Brazil",
      "iata_code": "OPS",
      "_geoloc": {
        "latitude": -11.885,
        "longitude": -55.586
      },
      "links_count": 6,
      "objectID": "7367"
    },
    {
      "name": "Cabo Frio International Airport",
      "city": "Cabo Frio",
      "country": "Brazil",
      "iata_code": "CFB",
      "_geoloc": {
        "latitude": -22.921667,
        "longitude": -42.074167
      },
      "links_count": 6,
      "objectID": "7364"
    },
    {
      "name": "Vasteras",
      "city": "Vasteras",
      "country": "Sweden",
      "iata_code": "VST",
      "_geoloc": {
        "latitude": 59.589444,
        "longitude": 16.633611
      },
      "links_count": 6,
      "objectID": "733"
    },
    {
      "name": "Bella Bella Airport",
      "city": "Bella Bella",
      "country": "Canada",
      "iata_code": "ZEL",
      "_geoloc": {
        "latitude": 52.139722,
        "longitude": -128.063611
      },
      "links_count": 6,
      "objectID": "7275"
    },
    {
      "name": "Skelleftea",
      "city": "Skelleftea",
      "country": "Sweden",
      "iata_code": "SFT",
      "_geoloc": {
        "latitude": 64.624772,
        "longitude": 21.076892
      },
      "links_count": 6,
      "objectID": "726"
    },
    {
      "name": "Havre Saint-Pierre Airport",
      "city": "Havre-Saint-Pierre",
      "country": "Canada",
      "iata_code": "YGV",
      "_geoloc": {
        "latitude": 50.281944,
        "longitude": -63.611389
      },
      "links_count": 6,
      "objectID": "7255"
    },
    {
      "name": "St. George Airport",
      "city": "St. George",
      "country": "United States",
      "iata_code": "STG",
      "_geoloc": {
        "latitude": 56.577222,
        "longitude": -169.663611
      },
      "links_count": 6,
      "objectID": "7247"
    },
    {
      "name": "Kiruna",
      "city": "Kiruna",
      "country": "Sweden",
      "iata_code": "KRN",
      "_geoloc": {
        "latitude": 67.821986,
        "longitude": 20.336764
      },
      "links_count": 6,
      "objectID": "724"
    },
    {
      "name": "Grayling Airport",
      "city": "Grayling",
      "country": "United States",
      "iata_code": "KGX",
      "_geoloc": {
        "latitude": 62.894444,
        "longitude": -160.065
      },
      "links_count": 6,
      "objectID": "7219"
    },
    {
      "name": "Tuluksak Airport",
      "city": "Tuluksak",
      "country": "United States",
      "iata_code": "TLT",
      "_geoloc": {
        "latitude": 61.096944,
        "longitude": -160.969444
      },
      "links_count": 6,
      "objectID": "7218"
    },
    {
      "name": "Akiak Airport",
      "city": "Akiak",
      "country": "United States",
      "iata_code": "AKI",
      "_geoloc": {
        "latitude": 60.902778,
        "longitude": -161.230556
      },
      "links_count": 6,
      "objectID": "7217"
    },
    {
      "name": "Pilot Station Airport",
      "city": "Pilot Station",
      "country": "United States",
      "iata_code": "PQS",
      "_geoloc": {
        "latitude": 61.934444,
        "longitude": -162.899444
      },
      "links_count": 6,
      "objectID": "7216"
    },
    {
      "name": "Kongiganak Airport",
      "city": "Kongiganak",
      "country": "United States",
      "iata_code": "KKH",
      "_geoloc": {
        "latitude": 59.960833,
        "longitude": -162.881111
      },
      "links_count": 6,
      "objectID": "7213"
    },
    {
      "name": "Klawock Airport",
      "city": "Klawock",
      "country": "United States",
      "iata_code": "KLW",
      "_geoloc": {
        "latitude": 55.579167,
        "longitude": -133.076111
      },
      "links_count": 6,
      "objectID": "7205"
    },
    {
      "name": "Kipnuk Airport",
      "city": "Kipnuk",
      "country": "United States",
      "iata_code": "KPN",
      "_geoloc": {
        "latitude": 59.933056,
        "longitude": -164.030556
      },
      "links_count": 6,
      "objectID": "7201"
    },
    {
      "name": "Hay River",
      "city": "Hay River",
      "country": "Canada",
      "iata_code": "YHY",
      "_geoloc": {
        "latitude": 60.839722,
        "longitude": -115.782778
      },
      "links_count": 6,
      "objectID": "72"
    },
    {
      "name": "Teller Airport",
      "city": "Teller",
      "country": "United States",
      "iata_code": "TLA",
      "_geoloc": {
        "latitude": 65.240278,
        "longitude": -166.339444
      },
      "links_count": 6,
      "objectID": "7186"
    },
    {
      "name": "Kobuk Airport",
      "city": "Kobuk",
      "country": "United States",
      "iata_code": "OBU",
      "_geoloc": {
        "latitude": 66.912222,
        "longitude": -156.897222
      },
      "links_count": 6,
      "objectID": "7180"
    },
    {
      "name": "Metlakatla Seaplane Base",
      "city": "Metakatla",
      "country": "United States",
      "iata_code": "MTM",
      "_geoloc": {
        "latitude": 55.131111,
        "longitude": -131.578056
      },
      "links_count": 6,
      "objectID": "7146"
    },
    {
      "name": "Hoonah Airport",
      "city": "Hoonah",
      "country": "United States",
      "iata_code": "HNH",
      "_geoloc": {
        "latitude": 58.096111,
        "longitude": -135.409722
      },
      "links_count": 6,
      "objectID": "7142"
    },
    {
      "name": "Shungnak Airport",
      "city": "Shungnak",
      "country": "United States",
      "iata_code": "SHG",
      "_geoloc": {
        "latitude": 66.888056,
        "longitude": -157.1625
      },
      "links_count": 6,
      "objectID": "7117"
    },
    {
      "name": "Nulato Airport",
      "city": "Nulato",
      "country": "United States",
      "iata_code": "NUL",
      "_geoloc": {
        "latitude": 64.729444,
        "longitude": -158.074167
      },
      "links_count": 6,
      "objectID": "7111"
    },
    {
      "name": "Kwethluk Airport",
      "city": "Kwethluk",
      "country": "United States",
      "iata_code": "KWT",
      "_geoloc": {
        "latitude": 60.790278,
        "longitude": -161.443611
      },
      "links_count": 6,
      "objectID": "7095"
    },
    {
      "name": "Eek Airport",
      "city": "Eek",
      "country": "United States",
      "iata_code": "EEK",
      "_geoloc": {
        "latitude": 60.213611,
        "longitude": -162.043889
      },
      "links_count": 6,
      "objectID": "7093"
    },
    {
      "name": "Shageluk Airport",
      "city": "Shageluk",
      "country": "United States",
      "iata_code": "SHX",
      "_geoloc": {
        "latitude": 62.692222,
        "longitude": -159.569167
      },
      "links_count": 6,
      "objectID": "7090"
    },
    {
      "name": "Kalmar",
      "city": "Kalkmar",
      "country": "Sweden",
      "iata_code": "KLR",
      "_geoloc": {
        "latitude": 56.685531,
        "longitude": 16.287578
      },
      "links_count": 6,
      "objectID": "707"
    },
    {
      "name": "Alliance Municipal Airport",
      "city": "Alliance",
      "country": "United States",
      "iata_code": "AIA",
      "_geoloc": {
        "latitude": 42.053333,
        "longitude": -102.803889
      },
      "links_count": 6,
      "objectID": "7067"
    },
    {
      "name": "Chadron Municipal Airport",
      "city": "Chadron",
      "country": "United States",
      "iata_code": "CDR",
      "_geoloc": {
        "latitude": 42.8375,
        "longitude": -103.095556
      },
      "links_count": 6,
      "objectID": "7066"
    },
    {
      "name": "Municipal",
      "city": "Corozal",
      "country": "Belize",
      "iata_code": "CZH",
      "_geoloc": {
        "latitude": 18.3822,
        "longitude": -88.4119
      },
      "links_count": 6,
      "objectID": "7029"
    },
    {
      "name": "Chefornak Airport",
      "city": "Chefornak",
      "country": "United States",
      "iata_code": "CYF",
      "_geoloc": {
        "latitude": 60.149167,
        "longitude": -164.285556
      },
      "links_count": 6,
      "objectID": "6960"
    },
    {
      "name": "Drake Bay Airport",
      "city": "Puntarenas",
      "country": "Costa Rica",
      "iata_code": "DRK",
      "_geoloc": {
        "latitude": 8.71889,
        "longitude": -83.6417
      },
      "links_count": 6,
      "objectID": "6945"
    },
    {
      "name": "Heilongjiang Mohe Airport",
      "city": "Mohe County",
      "country": "China",
      "iata_code": "OHE",
      "_geoloc": {
        "latitude": 52.915,
        "longitude": 122.427
      },
      "links_count": 6,
      "objectID": "6943"
    },
    {
      "name": "Ronneby",
      "city": "Ronneby",
      "country": "Sweden",
      "iata_code": "RNB",
      "_geoloc": {
        "latitude": 56.266667,
        "longitude": 15.265
      },
      "links_count": 6,
      "objectID": "685"
    },
    {
      "name": "Sawyer International Airport",
      "city": "Marquette",
      "country": "United States",
      "iata_code": "MQT",
      "_geoloc": {
        "latitude": 46.353611,
        "longitude": -87.395278
      },
      "links_count": 6,
      "objectID": "6838"
    },
    {
      "name": "Ulukhaktok Holman",
      "city": "Holman Island",
      "country": "Canada",
      "iata_code": "YHI",
      "_geoloc": {
        "latitude": 70.762778,
        "longitude": -117.806111
      },
      "links_count": 6,
      "objectID": "68"
    },
    {
      "name": "Mus Airport",
      "city": "Mus",
      "country": "Turkey",
      "iata_code": "MSR",
      "_geoloc": {
        "latitude": 38.747769,
        "longitude": 41.661236
      },
      "links_count": 6,
      "objectID": "6782"
    },
    {
      "name": "Walvis Bay Airport",
      "city": "Walvis Bay",
      "country": "Namibia",
      "iata_code": "WVB",
      "_geoloc": {
        "latitude": -22.9799,
        "longitude": 14.6453
      },
      "links_count": 6,
      "objectID": "6778"
    },
    {
      "name": "Capitan Corbeta C A Curbelo International Airport",
      "city": "Punta del Este",
      "country": "Uruguay",
      "iata_code": "PDP",
      "_geoloc": {
        "latitude": -34.855139,
        "longitude": -55.094278
      },
      "links_count": 6,
      "objectID": "6777"
    },
    {
      "name": "Chaoyang Airport",
      "city": "Chaoyang",
      "country": "China",
      "iata_code": "CHG",
      "_geoloc": {
        "latitude": 41.5381,
        "longitude": 120.435
      },
      "links_count": 6,
      "objectID": "6772"
    },
    {
      "name": "Changzhoudao Airport",
      "city": "Wuzhou",
      "country": "China",
      "iata_code": "WUZ",
      "_geoloc": {
        "latitude": 23.4567,
        "longitude": 111.248
      },
      "links_count": 6,
      "objectID": "6744"
    },
    {
      "name": "Arenal Airport",
      "city": "La Fortuna/San Carlos",
      "country": "Costa Rica",
      "iata_code": "FON",
      "_geoloc": {
        "latitude": 10.478,
        "longitude": -84.6345
      },
      "links_count": 6,
      "objectID": "6731"
    },
    {
      "name": "Shishmaref Airport",
      "city": "Shishmaref",
      "country": "United States",
      "iata_code": "SHH",
      "_geoloc": {
        "latitude": 66.2496,
        "longitude": -166.089
      },
      "links_count": 6,
      "objectID": "6723"
    },
    {
      "name": "Kivalina Airport",
      "city": "Kivalina",
      "country": "United States",
      "iata_code": "KVL",
      "_geoloc": {
        "latitude": 67.7362,
        "longitude": -164.563
      },
      "links_count": 6,
      "objectID": "6719"
    },
    {
      "name": "Kaltag Airport",
      "city": "Kaltag",
      "country": "United States",
      "iata_code": "KAL",
      "_geoloc": {
        "latitude": 64.3191,
        "longitude": -158.741
      },
      "links_count": 6,
      "objectID": "6717"
    },
    {
      "name": "Anvik Airport",
      "city": "Anvik",
      "country": "United States",
      "iata_code": "ANV",
      "_geoloc": {
        "latitude": 62.6467,
        "longitude": -160.191
      },
      "links_count": 6,
      "objectID": "6713"
    },
    {
      "name": "Sorstokken",
      "city": "Stord",
      "country": "Norway",
      "iata_code": "SRP",
      "_geoloc": {
        "latitude": 59.791925,
        "longitude": 5.34085
      },
      "links_count": 6,
      "objectID": "660"
    },
    {
      "name": "Longyear",
      "city": "Svalbard",
      "country": "Norway",
      "iata_code": "LYR",
      "_geoloc": {
        "latitude": 78.246111,
        "longitude": 15.465556
      },
      "links_count": 6,
      "objectID": "658"
    },
    {
      "name": "Iles De La Madeleine",
      "city": "Iles De La Madeleine",
      "country": "Canada",
      "iata_code": "YGR",
      "_geoloc": {
        "latitude": 47.424721,
        "longitude": -61.778056
      },
      "links_count": 6,
      "objectID": "65"
    },
    {
      "name": "Heihe Airport",
      "city": "Heihe",
      "country": "China",
      "iata_code": "HEK",
      "_geoloc": {
        "latitude": 50.25,
        "longitude": 127.3
      },
      "links_count": 6,
      "objectID": "6410"
    },
    {
      "name": "Qamdo Bangda Airport",
      "city": "Bangda",
      "country": "China",
      "iata_code": "BPX",
      "_geoloc": {
        "latitude": 30.5536,
        "longitude": 97.1083
      },
      "links_count": 6,
      "objectID": "6396"
    },
    {
      "name": "Zhaotong Airport",
      "city": "Zhaotong",
      "country": "China",
      "iata_code": "ZAT",
      "_geoloc": {
        "latitude": 27.3256,
        "longitude": 103.755
      },
      "links_count": 6,
      "objectID": "6378"
    },
    {
      "name": "Simao Airport",
      "city": "Simao",
      "country": "China",
      "iata_code": "SYM",
      "_geoloc": {
        "latitude": 22.7933,
        "longitude": 100.959
      },
      "links_count": 6,
      "objectID": "6377"
    },
    {
      "name": "Wynyard Airport",
      "city": "Burnie",
      "country": "Australia",
      "iata_code": "BWT",
      "_geoloc": {
        "latitude": -40.9989,
        "longitude": 145.731
      },
      "links_count": 6,
      "objectID": "6338"
    },
    {
      "name": "Roma Airport",
      "city": "Roma",
      "country": "Australia",
      "iata_code": "RMA",
      "_geoloc": {
        "latitude": -26.545,
        "longitude": 148.775
      },
      "links_count": 6,
      "objectID": "6324"
    },
    {
      "name": "Paraburdoo Airport",
      "city": "Paraburdoo",
      "country": "Australia",
      "iata_code": "PBO",
      "_geoloc": {
        "latitude": -23.1711,
        "longitude": 117.745
      },
      "links_count": 6,
      "objectID": "6314"
    },
    {
      "name": "Mornington Island Airport",
      "city": "Mornington Island",
      "country": "Australia",
      "iata_code": "ONG",
      "_geoloc": {
        "latitude": -16.6625,
        "longitude": 139.178
      },
      "links_count": 6,
      "objectID": "6304"
    },
    {
      "name": "Moranbah Airport",
      "city": "Moranbah",
      "country": "Australia",
      "iata_code": "MOV",
      "_geoloc": {
        "latitude": -22.0578,
        "longitude": 148.077
      },
      "links_count": 6,
      "objectID": "6301"
    },
    {
      "name": "Maningrida Airport",
      "city": "Maningrida",
      "country": "Australia",
      "iata_code": "MNG",
      "_geoloc": {
        "latitude": -12.0561,
        "longitude": 134.234
      },
      "links_count": 6,
      "objectID": "6296"
    },
    {
      "name": "Merimbula Airport",
      "city": "Merimbula",
      "country": "Australia",
      "iata_code": "MIM",
      "_geoloc": {
        "latitude": -36.9086,
        "longitude": 149.901
      },
      "links_count": 6,
      "objectID": "6294"
    },
    {
      "name": "Lord Howe Island Airport",
      "city": "Lord Howe Island",
      "country": "Australia",
      "iata_code": "LDH",
      "_geoloc": {
        "latitude": -31.5383,
        "longitude": 159.077
      },
      "links_count": 6,
      "objectID": "6285"
    },
    {
      "name": "Geraldton Airport",
      "city": "Geraldton",
      "country": "Australia",
      "iata_code": "GET",
      "_geoloc": {
        "latitude": -28.7961,
        "longitude": 114.707
      },
      "links_count": 6,
      "objectID": "6268"
    },
    {
      "name": "Doomadgee Airport",
      "city": "Doomadgee",
      "country": "Australia",
      "iata_code": "DMD",
      "_geoloc": {
        "latitude": -17.9403,
        "longitude": 138.822
      },
      "links_count": 6,
      "objectID": "6262"
    },
    {
      "name": "Albany Airport",
      "city": "Albany",
      "country": "Australia",
      "iata_code": "ALH",
      "_geoloc": {
        "latitude": -34.9433,
        "longitude": 117.809
      },
      "links_count": 6,
      "objectID": "6235"
    },
    {
      "name": "Lawas Airport",
      "city": "Lawas",
      "country": "Malaysia",
      "iata_code": "LWY",
      "_geoloc": {
        "latitude": 4.84917,
        "longitude": 115.408
      },
      "links_count": 6,
      "objectID": "6219"
    },
    {
      "name": "Dumatubun Airport",
      "city": "Langgur-Kei Islands",
      "country": "Indonesia",
      "iata_code": "LUV",
      "_geoloc": {
        "latitude": -5.661619,
        "longitude": 132.731431
      },
      "links_count": 6,
      "objectID": "6212"
    },
    {
      "name": "Barau(Kalimaru) Airport",
      "city": "Tanjung Redep-Borneo Island",
      "country": "Indonesia",
      "iata_code": "BEJ",
      "_geoloc": {
        "latitude": 2.155497,
        "longitude": 117.432256
      },
      "links_count": 6,
      "objectID": "6209"
    },
    {
      "name": "Tambolaka Airport",
      "city": "Waikabubak-Sumba Island",
      "country": "Indonesia",
      "iata_code": "TMC",
      "_geoloc": {
        "latitude": -9.409717,
        "longitude": 119.244494
      },
      "links_count": 6,
      "objectID": "6204"
    },
    {
      "name": "La Grande Riviere",
      "city": "La Grande Riviere",
      "country": "Canada",
      "iata_code": "YGL",
      "_geoloc": {
        "latitude": 53.625278,
        "longitude": -77.704167
      },
      "links_count": 6,
      "objectID": "62"
    },
    {
      "name": "Pleiku Airport",
      "city": "Pleiku",
      "country": "Vietnam",
      "iata_code": "PXU",
      "_geoloc": {
        "latitude": 14.004522,
        "longitude": 108.017158
      },
      "links_count": 6,
      "objectID": "6194"
    },
    {
      "name": "Phu Cat Airport",
      "city": "Phucat",
      "country": "Vietnam",
      "iata_code": "UIH",
      "_geoloc": {
        "latitude": 13.954986,
        "longitude": 109.042267
      },
      "links_count": 6,
      "objectID": "6193"
    },
    {
      "name": "Trà Nóc Airport",
      "city": "Can Tho",
      "country": "Vietnam",
      "iata_code": "VCA",
      "_geoloc": {
        "latitude": 10.085119,
        "longitude": 105.711922
      },
      "links_count": 6,
      "objectID": "6191"
    },
    {
      "name": "Gan Island Airport",
      "city": "Gan Island",
      "country": "Maldives",
      "iata_code": "GAN",
      "_geoloc": {
        "latitude": -0.693342,
        "longitude": 73.1556
      },
      "links_count": 6,
      "objectID": "6183"
    },
    {
      "name": "Andizhan Airport",
      "city": "Andizhan",
      "country": "Uzbekistan",
      "iata_code": "AZN",
      "_geoloc": {
        "latitude": 40.7277,
        "longitude": 72.294
      },
      "links_count": 6,
      "objectID": "6148"
    },
    {
      "name": "Pobedilovo Airport",
      "city": "Kirov",
      "country": "Russia",
      "iata_code": "KVX",
      "_geoloc": {
        "latitude": 58.5033,
        "longitude": 49.3483
      },
      "links_count": 6,
      "objectID": "6142"
    },
    {
      "name": "Kostanay West Airport",
      "city": "Kostanay",
      "country": "Kazakhstan",
      "iata_code": "KSN",
      "_geoloc": {
        "latitude": 53.206944,
        "longitude": 63.550278
      },
      "links_count": 6,
      "objectID": "6088"
    },
    {
      "name": "Juan Pablo Pérez Alfonso Airport",
      "city": "El Vigía",
      "country": "Venezuela",
      "iata_code": "VIG",
      "_geoloc": {
        "latitude": 8.6241,
        "longitude": -71.672819
      },
      "links_count": 6,
      "objectID": "6072"
    },
    {
      "name": "Obando Airport",
      "city": "Puerto Inírida",
      "country": "Colombia",
      "iata_code": "PDA",
      "_geoloc": {
        "latitude": 3.85,
        "longitude": -67.91
      },
      "links_count": 6,
      "objectID": "6054"
    },
    {
      "name": "General Rivadeneira Airport",
      "city": "Esmeraldas",
      "country": "Ecuador",
      "iata_code": "ESM",
      "_geoloc": {
        "latitude": 0.978519,
        "longitude": -79.6266
      },
      "links_count": 6,
      "objectID": "6047"
    },
    {
      "name": "Roxas Airport",
      "city": "Roxas City",
      "country": "Philippines",
      "iata_code": "RXS",
      "_geoloc": {
        "latitude": 11.597669,
        "longitude": 122.751669
      },
      "links_count": 6,
      "objectID": "6026"
    },
    {
      "name": "Tuguegarao Airport",
      "city": "Tuguegarao",
      "country": "Philippines",
      "iata_code": "TUG",
      "_geoloc": {
        "latitude": 17.638311,
        "longitude": 121.730614
      },
      "links_count": 6,
      "objectID": "6021"
    },
    {
      "name": "Surigao Airport",
      "city": "Sangley Point",
      "country": "Philippines",
      "iata_code": "SUG",
      "_geoloc": {
        "latitude": 9.757567,
        "longitude": 125.479328
      },
      "links_count": 6,
      "objectID": "6016"
    },
    {
      "name": "Sacheon Air Base",
      "city": "Sacheon",
      "country": "South Korea",
      "iata_code": "HIN",
      "_geoloc": {
        "latitude": 35.088543,
        "longitude": 128.07037
      },
      "links_count": 6,
      "objectID": "6007"
    },
    {
      "name": "Holy Cross Airport",
      "city": "Holy Cross",
      "country": "United States",
      "iata_code": "HCR",
      "_geoloc": {
        "latitude": 62.1883,
        "longitude": -159.775
      },
      "links_count": 6,
      "objectID": "5962"
    },
    {
      "name": "Gustavus Airport",
      "city": "Gustavus",
      "country": "United States",
      "iata_code": "GST",
      "_geoloc": {
        "latitude": 58.4253,
        "longitude": -135.707
      },
      "links_count": 6,
      "objectID": "5960"
    },
    {
      "name": "Uromiyeh Airport",
      "city": "Uromiyeh",
      "country": "Iran",
      "iata_code": "OMH",
      "_geoloc": {
        "latitude": 37.6681,
        "longitude": 45.0687
      },
      "links_count": 6,
      "objectID": "5936"
    },
    {
      "name": "Ardabil Airport",
      "city": "Ardabil",
      "country": "Iran",
      "iata_code": "ADU",
      "_geoloc": {
        "latitude": 38.325678,
        "longitude": 48.424356
      },
      "links_count": 6,
      "objectID": "5935"
    },
    {
      "name": "Ipota Airport",
      "city": "Ipota",
      "country": "Vanuatu",
      "iata_code": "IPA",
      "_geoloc": {
        "latitude": -18.8783,
        "longitude": 169.308
      },
      "links_count": 6,
      "objectID": "5918"
    },
    {
      "name": "Gaua Island Airport",
      "city": "Gaua Island",
      "country": "Vanuatu",
      "iata_code": "ZGU",
      "_geoloc": {
        "latitude": -14.2181,
        "longitude": 167.587
      },
      "links_count": 6,
      "objectID": "5906"
    },
    {
      "name": "Lonorore Airport",
      "city": "Lonorore",
      "country": "Vanuatu",
      "iata_code": "LNE",
      "_geoloc": {
        "latitude": -15.8656,
        "longitude": 168.172
      },
      "links_count": 6,
      "objectID": "5904"
    },
    {
      "name": "Torres Airstrip",
      "city": "Loh/Linua",
      "country": "Vanuatu",
      "iata_code": "TOH",
      "_geoloc": {
        "latitude": -13.328,
        "longitude": 166.638
      },
      "links_count": 6,
      "objectID": "5895"
    },
    {
      "name": "Sola Airport",
      "city": "Sola",
      "country": "Vanuatu",
      "iata_code": "SLH",
      "_geoloc": {
        "latitude": -13.8517,
        "longitude": 167.537
      },
      "links_count": 6,
      "objectID": "5894"
    },
    {
      "name": "Mota Lava Airport",
      "city": "Ablow",
      "country": "Vanuatu",
      "iata_code": "MTV",
      "_geoloc": {
        "latitude": -13.666,
        "longitude": 167.712
      },
      "links_count": 6,
      "objectID": "5893"
    },
    {
      "name": "Ua Huka Airport",
      "city": "Ua Huka",
      "country": "French Polynesia",
      "iata_code": "UAH",
      "_geoloc": {
        "latitude": -8.93611,
        "longitude": -139.552
      },
      "links_count": 6,
      "objectID": "5892"
    },
    {
      "name": "Ua Pou Airport",
      "city": "Ua Pou",
      "country": "French Polynesia",
      "iata_code": "UAP",
      "_geoloc": {
        "latitude": -9.35167,
        "longitude": -140.078
      },
      "links_count": 6,
      "objectID": "5891"
    },
    {
      "name": "Savusavu Airport",
      "city": "Savusavu",
      "country": "Fiji",
      "iata_code": "SVU",
      "_geoloc": {
        "latitude": -16.8028,
        "longitude": 179.341
      },
      "links_count": 6,
      "objectID": "5878"
    },
    {
      "name": "Matei Airport",
      "city": "Matei",
      "country": "Fiji",
      "iata_code": "TVU",
      "_geoloc": {
        "latitude": -16.6906,
        "longitude": -179.877
      },
      "links_count": 6,
      "objectID": "5875"
    },
    {
      "name": "Arthurs Town Airport",
      "city": "Arthur's Town",
      "country": "Bahamas",
      "iata_code": "ATC",
      "_geoloc": {
        "latitude": 24.629417,
        "longitude": -75.673775
      },
      "links_count": 6,
      "objectID": "5857"
    },
    {
      "name": "Dr Joaquin Balaguer International Airport",
      "city": "La Isabela",
      "country": "Dominican Republic",
      "iata_code": "JBQ",
      "_geoloc": {
        "latitude": 18.5725,
        "longitude": -69.9856
      },
      "links_count": 6,
      "objectID": "5811"
    },
    {
      "name": "Kahramanmaras Airport",
      "city": "Kahramanmaras",
      "country": "Turkey",
      "iata_code": "KCM",
      "_geoloc": {
        "latitude": 37.539,
        "longitude": 36.9534
      },
      "links_count": 6,
      "objectID": "5798"
    },
    {
      "name": "Kars Airport",
      "city": "Kars",
      "country": "Turkey",
      "iata_code": "KSY",
      "_geoloc": {
        "latitude": 40.562222,
        "longitude": 43.115002
      },
      "links_count": 6,
      "objectID": "5796"
    },
    {
      "name": "Banja Luka International Airport",
      "city": "Banja Luka",
      "country": "Bosnia and Herzegovina",
      "iata_code": "BNX",
      "_geoloc": {
        "latitude": 44.941444,
        "longitude": 17.297501
      },
      "links_count": 6,
      "objectID": "5794"
    },
    {
      "name": "Worland Municipal Airport",
      "city": "Worland",
      "country": "United States",
      "iata_code": "WRL",
      "_geoloc": {
        "latitude": 43.9657,
        "longitude": -107.951
      },
      "links_count": 6,
      "objectID": "5777"
    },
    {
      "name": "Valdosta Regional Airport",
      "city": "Valdosta",
      "country": "United States",
      "iata_code": "VLD",
      "_geoloc": {
        "latitude": 30.7825,
        "longitude": -83.2767
      },
      "links_count": 6,
      "objectID": "5776"
    },
    {
      "name": "Rock Springs Sweetwater County Airport",
      "city": "Rock Springs",
      "country": "United States",
      "iata_code": "RKS",
      "_geoloc": {
        "latitude": 41.5942,
        "longitude": -109.065
      },
      "links_count": 6,
      "objectID": "5766"
    },
    {
      "name": "Arnold Palmer Regional Airport",
      "city": "Latrobe",
      "country": "United States",
      "iata_code": "LBE",
      "_geoloc": {
        "latitude": 40.2759,
        "longitude": -79.4048
      },
      "links_count": 6,
      "objectID": "5747"
    },
    {
      "name": "Brunswick Golden Isles Airport",
      "city": "Brunswick",
      "country": "United States",
      "iata_code": "BQK",
      "_geoloc": {
        "latitude": 31.2588,
        "longitude": -81.4665
      },
      "links_count": 6,
      "objectID": "5725"
    },
    {
      "name": "Watertown Regional Airport",
      "city": "Watertown",
      "country": "United States",
      "iata_code": "ATY",
      "_geoloc": {
        "latitude": 44.914,
        "longitude": -97.1547
      },
      "links_count": 6,
      "objectID": "5721"
    },
    {
      "name": "La Abraq Airport",
      "city": "Al Bayda'",
      "country": "Libya",
      "iata_code": "LAQ",
      "_geoloc": {
        "latitude": 32.788673,
        "longitude": 21.964333
      },
      "links_count": 6,
      "objectID": "5699"
    },
    {
      "name": "Mogador Airport",
      "city": "Essadouira",
      "country": "Morocco",
      "iata_code": "ESU",
      "_geoloc": {
        "latitude": 31.3975,
        "longitude": -9.681667
      },
      "links_count": 6,
      "objectID": "5671"
    },
    {
      "name": "Dakhla Airport",
      "city": "Dakhla",
      "country": "Western Sahara",
      "iata_code": "VIL",
      "_geoloc": {
        "latitude": 23.7183,
        "longitude": -15.932
      },
      "links_count": 6,
      "objectID": "5670"
    },
    {
      "name": "Eros Airport",
      "city": "Windhoek",
      "country": "Namibia",
      "iata_code": "ERS",
      "_geoloc": {
        "latitude": -22.6122,
        "longitude": 17.0804
      },
      "links_count": 6,
      "objectID": "5645"
    },
    {
      "name": "Ängelholm-Helsingborg Airport",
      "city": "Ängelholm",
      "country": "Sweden",
      "iata_code": "AGH",
      "_geoloc": {
        "latitude": 56.2961,
        "longitude": 12.8471
      },
      "links_count": 6,
      "objectID": "5597"
    },
    {
      "name": "Östersund Airport",
      "city": "Östersund",
      "country": "Sweden",
      "iata_code": "OSD",
      "_geoloc": {
        "latitude": 63.1944,
        "longitude": 14.5003
      },
      "links_count": 6,
      "objectID": "5593"
    },
    {
      "name": "Bydgoszcz Ignacy Jan Paderewski Airport",
      "city": "Bydgoszcz",
      "country": "Poland",
      "iata_code": "BZG",
      "_geoloc": {
        "latitude": 53.0968,
        "longitude": 17.9777
      },
      "links_count": 6,
      "objectID": "5591"
    },
    {
      "name": "Svartnes Airport",
      "city": "Vardø",
      "country": "Norway",
      "iata_code": "VAW",
      "_geoloc": {
        "latitude": 70.355392,
        "longitude": 31.044889
      },
      "links_count": 6,
      "objectID": "5589"
    },
    {
      "name": "Svolvær Helle Airport",
      "city": "Svolvær",
      "country": "Norway",
      "iata_code": "SVJ",
      "_geoloc": {
        "latitude": 68.2433,
        "longitude": 14.6692
      },
      "links_count": 6,
      "objectID": "5587"
    },
    {
      "name": "Ryum Airport",
      "city": "Rørvik",
      "country": "Norway",
      "iata_code": "RVK",
      "_geoloc": {
        "latitude": 64.8383,
        "longitude": 11.1461
      },
      "links_count": 6,
      "objectID": "5583"
    },
    {
      "name": "Namsos Høknesøra Airport",
      "city": "Namsos",
      "country": "Norway",
      "iata_code": "OSY",
      "_geoloc": {
        "latitude": 64.4722,
        "longitude": 11.5786
      },
      "links_count": 6,
      "objectID": "5581"
    },
    {
      "name": "Leknes Airport",
      "city": "Leknes",
      "country": "Norway",
      "iata_code": "LKN",
      "_geoloc": {
        "latitude": 68.1525,
        "longitude": 13.6094
      },
      "links_count": 6,
      "objectID": "5580"
    },
    {
      "name": "Papa Westray Airport",
      "city": "Papa Westray",
      "country": "United Kingdom",
      "iata_code": "PPW",
      "_geoloc": {
        "latitude": 59.3517,
        "longitude": -2.90028
      },
      "links_count": 6,
      "objectID": "5567"
    },
    {
      "name": "North Ronaldsay Airport",
      "city": "North Ronaldsay",
      "country": "United Kingdom",
      "iata_code": "NRL",
      "_geoloc": {
        "latitude": 59.3675,
        "longitude": -2.43444
      },
      "links_count": 6,
      "objectID": "5566"
    },
    {
      "name": "Sandy Lake Airport",
      "city": "Sandy Lake",
      "country": "Canada",
      "iata_code": "ZSJ",
      "_geoloc": {
        "latitude": 53.0642,
        "longitude": -93.3444
      },
      "links_count": 6,
      "objectID": "5548"
    },
    {
      "name": "Sanikiluaq Airport",
      "city": "Sanikiluaq",
      "country": "Canada",
      "iata_code": "YSK",
      "_geoloc": {
        "latitude": 56.5378,
        "longitude": -79.2467
      },
      "links_count": 6,
      "objectID": "5529"
    },
    {
      "name": "Umiujaq Airport",
      "city": "Umiujaq",
      "country": "Canada",
      "iata_code": "YUD",
      "_geoloc": {
        "latitude": 56.5361,
        "longitude": -76.5183
      },
      "links_count": 6,
      "objectID": "5515"
    },
    {
      "name": "Chapais Airport",
      "city": "Chibougamau",
      "country": "Canada",
      "iata_code": "YMT",
      "_geoloc": {
        "latitude": 49.7719,
        "longitude": -74.5281
      },
      "links_count": 6,
      "objectID": "5514"
    },
    {
      "name": "Aupaluk Airport",
      "city": "Aupaluk",
      "country": "Canada",
      "iata_code": "YPJ",
      "_geoloc": {
        "latitude": 59.2967,
        "longitude": -69.5997
      },
      "links_count": 6,
      "objectID": "5508"
    },
    {
      "name": "Fort Hope Airport",
      "city": "Fort Hope",
      "country": "Canada",
      "iata_code": "YFH",
      "_geoloc": {
        "latitude": 51.5619,
        "longitude": -87.9078
      },
      "links_count": 6,
      "objectID": "5491"
    },
    {
      "name": "Lourdes De Blanc Sablon Airport",
      "city": "Lourdes-De-Blanc-Sablon",
      "country": "Canada",
      "iata_code": "YBX",
      "_geoloc": {
        "latitude": 51.4436,
        "longitude": -57.1853
      },
      "links_count": 6,
      "objectID": "5485"
    },
    {
      "name": "Kangirsuk Airport",
      "city": "Kangirsuk",
      "country": "Canada",
      "iata_code": "YKG",
      "_geoloc": {
        "latitude": 60.0272,
        "longitude": -69.9992
      },
      "links_count": 6,
      "objectID": "5481"
    },
    {
      "name": "Sisimiut Airport",
      "city": "Sisimiut",
      "country": "Greenland",
      "iata_code": "JHS",
      "_geoloc": {
        "latitude": 66.9513,
        "longitude": -53.7293
      },
      "links_count": 6,
      "objectID": "5447"
    },
    {
      "name": "Qaanaaq Airport",
      "city": "Qaanaaq",
      "country": "Greenland",
      "iata_code": "NAQ",
      "_geoloc": {
        "latitude": 77.4886,
        "longitude": -69.3887
      },
      "links_count": 6,
      "objectID": "5446"
    },
    {
      "name": "Vanimo Airport",
      "city": "Vanimo",
      "country": "Papua New Guinea",
      "iata_code": "VAI",
      "_geoloc": {
        "latitude": -2.69717,
        "longitude": 141.302
      },
      "links_count": 6,
      "objectID": "5436"
    },
    {
      "name": "Tari Airport",
      "city": "Tari",
      "country": "Papua New Guinea",
      "iata_code": "TIZ",
      "_geoloc": {
        "latitude": -5.845,
        "longitude": 142.948
      },
      "links_count": 6,
      "objectID": "5433"
    },
    {
      "name": "Moro Airport",
      "city": "Moro",
      "country": "Papua New Guinea",
      "iata_code": "MXH",
      "_geoloc": {
        "latitude": -6.36333,
        "longitude": 143.238
      },
      "links_count": 6,
      "objectID": "5431"
    },
    {
      "name": "Ngorangora Airport",
      "city": "Kirakira",
      "country": "Solomon Islands",
      "iata_code": "IRA",
      "_geoloc": {
        "latitude": -10.4497,
        "longitude": 161.898
      },
      "links_count": 6,
      "objectID": "5409"
    },
    {
      "name": "Durham Tees Valley Airport",
      "city": "Teesside",
      "country": "United Kingdom",
      "iata_code": "MME",
      "_geoloc": {
        "latitude": 54.509189,
        "longitude": -1.429406
      },
      "links_count": 6,
      "objectID": "522"
    },
    {
      "name": "Pori",
      "city": "Pori",
      "country": "Finland",
      "iata_code": "POR",
      "_geoloc": {
        "latitude": 61.461686,
        "longitude": 21.799983
      },
      "links_count": 6,
      "objectID": "448"
    },
    {
      "name": "Lappeenranta",
      "city": "Lappeenranta",
      "country": "Finland",
      "iata_code": "LPP",
      "_geoloc": {
        "latitude": 61.044553,
        "longitude": 28.144397
      },
      "links_count": 6,
      "objectID": "441"
    },
    {
      "name": "Arcata",
      "city": "Arcata CA",
      "country": "United States",
      "iata_code": "ACV",
      "_geoloc": {
        "latitude": 40.978111,
        "longitude": -124.108611
      },
      "links_count": 6,
      "objectID": "4384"
    },
    {
      "name": "Uraj",
      "city": "Uraj",
      "country": "Russia",
      "iata_code": "URJ",
      "_geoloc": {
        "latitude": 60.1,
        "longitude": 64.83
      },
      "links_count": 6,
      "objectID": "4377"
    },
    {
      "name": "Vityazevo",
      "city": "Anapa",
      "country": "Russia",
      "iata_code": "AAQ",
      "_geoloc": {
        "latitude": 45.002097,
        "longitude": 37.347272
      },
      "links_count": 6,
      "objectID": "4353"
    },
    {
      "name": "Kruunupyy",
      "city": "Kruunupyy",
      "country": "Finland",
      "iata_code": "KOK",
      "_geoloc": {
        "latitude": 63.721172,
        "longitude": 23.143131
      },
      "links_count": 6,
      "objectID": "435"
    },
    {
      "name": "ISLES OF SCILLY",
      "city": "ST MARY\\\\'S",
      "country": "United Kingdom",
      "iata_code": "ISC",
      "_geoloc": {
        "latitude": 49.919,
        "longitude": -6.3075
      },
      "links_count": 6,
      "objectID": "4347"
    },
    {
      "name": "Gillette-Campbell County Airport",
      "city": "Gillette",
      "country": "United States",
      "iata_code": "GCC",
      "_geoloc": {
        "latitude": 44.3489167,
        "longitude": -105.5393611
      },
      "links_count": 6,
      "objectID": "4296"
    },
    {
      "name": "Golden Triangle Regional Airport",
      "city": "Columbus Mississippi",
      "country": "United States",
      "iata_code": "GTR",
      "_geoloc": {
        "latitude": 33.450333,
        "longitude": -88.591361
      },
      "links_count": 6,
      "objectID": "4273"
    },
    {
      "name": "Columbus Metropolitan Airport",
      "city": "Columbus",
      "country": "United States",
      "iata_code": "CSG",
      "_geoloc": {
        "latitude": 32.5163333,
        "longitude": -84.9388611
      },
      "links_count": 6,
      "objectID": "4255"
    },
    {
      "name": "Busuanga",
      "city": "Busuanga",
      "country": "Philippines",
      "iata_code": "USU",
      "_geoloc": {
        "latitude": 12.121458,
        "longitude": 120.100031
      },
      "links_count": 6,
      "objectID": "4199"
    },
    {
      "name": "Napier",
      "city": "NAPIER",
      "country": "New Zealand",
      "iata_code": "NPE",
      "_geoloc": {
        "latitude": -39.465833,
        "longitude": 176.87
      },
      "links_count": 6,
      "objectID": "4095"
    },
    {
      "name": "Nauru Intl",
      "city": "Nauru",
      "country": "Nauru",
      "iata_code": "INU",
      "_geoloc": {
        "latitude": -0.547458,
        "longitude": 166.9191
      },
      "links_count": 6,
      "objectID": "4076"
    },
    {
      "name": "La Crosse Municipal",
      "city": "La Crosse",
      "country": "United States",
      "iata_code": "LSE",
      "_geoloc": {
        "latitude": 43.878986,
        "longitude": -91.256711
      },
      "links_count": 6,
      "objectID": "4044"
    },
    {
      "name": "Mundo Maya International",
      "city": "Flores",
      "country": "Guatemala",
      "iata_code": "FRS",
      "_geoloc": {
        "latitude": 16.913819,
        "longitude": -89.866383
      },
      "links_count": 6,
      "objectID": "4024"
    },
    {
      "name": "Aasiaat",
      "city": "Aasiaat",
      "country": "Greenland",
      "iata_code": "JEG",
      "_geoloc": {
        "latitude": 68.7,
        "longitude": -52.75
      },
      "links_count": 6,
      "objectID": "3997"
    },
    {
      "name": "Tagbilaran",
      "city": "Tagbilaran",
      "country": "Philippines",
      "iata_code": "TAG",
      "_geoloc": {
        "latitude": 9.66408056,
        "longitude": 123.853247
      },
      "links_count": 6,
      "objectID": "3994"
    },
    {
      "name": "Palanga Intl",
      "city": "Palanga",
      "country": "Lithuania",
      "iata_code": "PLQ",
      "_geoloc": {
        "latitude": 55.973228,
        "longitude": 21.093856
      },
      "links_count": 6,
      "objectID": "3958"
    },
    {
      "name": "Ubon Ratchathani",
      "city": "Ubon Ratchathani",
      "country": "Thailand",
      "iata_code": "UBP",
      "_geoloc": {
        "latitude": 15.251278,
        "longitude": 104.870231
      },
      "links_count": 6,
      "objectID": "3937"
    },
    {
      "name": "Muhammad Salahuddin",
      "city": "Bima",
      "country": "Indonesia",
      "iata_code": "BMU",
      "_geoloc": {
        "latitude": -8.539647,
        "longitude": 118.687322
      },
      "links_count": 6,
      "objectID": "3924"
    },
    {
      "name": "Tjilik Riwut",
      "city": "Palangkaraya",
      "country": "Indonesia",
      "iata_code": "PKY",
      "_geoloc": {
        "latitude": -2.225128,
        "longitude": 113.942661
      },
      "links_count": 6,
      "objectID": "3911"
    },
    {
      "name": "Kijang",
      "city": "Tanjung Pinang",
      "country": "Indonesia",
      "iata_code": "TNJ",
      "_geoloc": {
        "latitude": 0.922683,
        "longitude": 104.532311
      },
      "links_count": 6,
      "objectID": "3906"
    },
    {
      "name": "Abdul Rachman Saleh",
      "city": "Malang",
      "country": "Indonesia",
      "iata_code": "MLG",
      "_geoloc": {
        "latitude": -7.926556,
        "longitude": 112.714514
      },
      "links_count": 6,
      "objectID": "3894"
    },
    {
      "name": "Natrona Co Intl",
      "city": "Casper",
      "country": "United States",
      "iata_code": "CPR",
      "_geoloc": {
        "latitude": 42.908,
        "longitude": -106.464417
      },
      "links_count": 6,
      "objectID": "3872"
    },
    {
      "name": "Unalaska",
      "city": "Unalaska",
      "country": "United States",
      "iata_code": "DUT",
      "_geoloc": {
        "latitude": 53.900139,
        "longitude": -166.5435
      },
      "links_count": 6,
      "objectID": "3860"
    },
    {
      "name": "Sitka Rocky Gutierrez",
      "city": "Sitka",
      "country": "United States",
      "iata_code": "SIT",
      "_geoloc": {
        "latitude": 57.047138,
        "longitude": -135.361611
      },
      "links_count": 6,
      "objectID": "3856"
    },
    {
      "name": "Tyler Pounds Rgnl",
      "city": "Tyler",
      "country": "United States",
      "iata_code": "TYR",
      "_geoloc": {
        "latitude": 32.354139,
        "longitude": -95.402386
      },
      "links_count": 6,
      "objectID": "3848"
    },
    {
      "name": "Dothan Rgnl",
      "city": "Dothan",
      "country": "United States",
      "iata_code": "DHN",
      "_geoloc": {
        "latitude": 31.321339,
        "longitude": -85.449628
      },
      "links_count": 6,
      "objectID": "3739"
    },
    {
      "name": "Brownsville South Padre Island Intl",
      "city": "Brownsville",
      "country": "United States",
      "iata_code": "BRO",
      "_geoloc": {
        "latitude": 25.906833,
        "longitude": -97.425861
      },
      "links_count": 6,
      "objectID": "3738"
    },
    {
      "name": "Easterwood Fld",
      "city": "College Station",
      "country": "United States",
      "iata_code": "CLL",
      "_geoloc": {
        "latitude": 30.588583,
        "longitude": -96.363833
      },
      "links_count": 6,
      "objectID": "3715"
    },
    {
      "name": "Cincinnati Muni Lunken Fld",
      "city": "Cincinnati",
      "country": "United States",
      "iata_code": "LUK",
      "_geoloc": {
        "latitude": 39.103333,
        "longitude": -84.418611
      },
      "links_count": 6,
      "objectID": "3681"
    },
    {
      "name": "Kenai Muni",
      "city": "Kenai",
      "country": "United States",
      "iata_code": "ENA",
      "_geoloc": {
        "latitude": 60.573111,
        "longitude": -151.245
      },
      "links_count": 6,
      "objectID": "3628"
    },
    {
      "name": "Merle K Mudhole Smith",
      "city": "Cordova",
      "country": "United States",
      "iata_code": "CDV",
      "_geoloc": {
        "latitude": 60.491778,
        "longitude": -145.477556
      },
      "links_count": 6,
      "objectID": "3610"
    },
    {
      "name": "Yuma Mcas Yuma Intl",
      "city": "Yuma",
      "country": "United States",
      "iata_code": "YUM",
      "_geoloc": {
        "latitude": 32.656578,
        "longitude": -114.60598
      },
      "links_count": 6,
      "objectID": "3596"
    },
    {
      "name": "Lincoln",
      "city": "Lincoln",
      "country": "United States",
      "iata_code": "LNK",
      "_geoloc": {
        "latitude": 40.850971,
        "longitude": -96.75925
      },
      "links_count": 6,
      "objectID": "3543"
    },
    {
      "name": "Lake Charles Rgnl",
      "city": "Lake Charles",
      "country": "United States",
      "iata_code": "LCH",
      "_geoloc": {
        "latitude": 30.126112,
        "longitude": -93.223335
      },
      "links_count": 6,
      "objectID": "3513"
    },
    {
      "name": "Huron Rgnl",
      "city": "Huron",
      "country": "United States",
      "iata_code": "HON",
      "_geoloc": {
        "latitude": 44.3852,
        "longitude": -98.228542
      },
      "links_count": 6,
      "objectID": "3491"
    },
    {
      "name": "Dillingham",
      "city": "Dillingham",
      "country": "United States",
      "iata_code": "DLG",
      "_geoloc": {
        "latitude": 59.044667,
        "longitude": -158.5055
      },
      "links_count": 6,
      "objectID": "3460"
    },
    {
      "name": "St Paul Island",
      "city": "St. Paul Island",
      "country": "United States",
      "iata_code": "SNP",
      "_geoloc": {
        "latitude": 57.167333,
        "longitude": -170.220444
      },
      "links_count": 6,
      "objectID": "3426"
    },
    {
      "name": "Wagga Wagga",
      "city": "Wagga Wagga",
      "country": "Australia",
      "iata_code": "WGA",
      "_geoloc": {
        "latitude": -35.165278,
        "longitude": 147.466389
      },
      "links_count": 6,
      "objectID": "3363"
    },
    {
      "name": "Dubbo",
      "city": "Dubbo",
      "country": "Australia",
      "iata_code": "DBO",
      "_geoloc": {
        "latitude": -32.216667,
        "longitude": 148.574722
      },
      "links_count": 6,
      "objectID": "3358"
    },
    {
      "name": "Learmonth",
      "city": "Learmonth",
      "country": "Australia",
      "iata_code": "LEA",
      "_geoloc": {
        "latitude": -22.235556,
        "longitude": 114.088611
      },
      "links_count": 6,
      "objectID": "3348"
    },
    {
      "name": "Proserpine Whitsunday Coast",
      "city": "Prosserpine",
      "country": "Australia",
      "iata_code": "PPP",
      "_geoloc": {
        "latitude": -20.495,
        "longitude": 148.552222
      },
      "links_count": 6,
      "objectID": "3328"
    },
    {
      "name": "Mopah",
      "city": "Merauke",
      "country": "Indonesia",
      "iata_code": "MKQ",
      "_geoloc": {
        "latitude": -8.520294,
        "longitude": 140.418453
      },
      "links_count": 6,
      "objectID": "3246"
    },
    {
      "name": "Nabire",
      "city": "Nabire",
      "country": "Indonesia",
      "iata_code": "NBX",
      "_geoloc": {
        "latitude": -3.368183,
        "longitude": 135.496406
      },
      "links_count": 6,
      "objectID": "3242"
    },
    {
      "name": "Sittwe",
      "city": "Sittwe",
      "country": "Burma",
      "iata_code": "AKY",
      "_geoloc": {
        "latitude": 20.132708,
        "longitude": 92.872628
      },
      "links_count": 6,
      "objectID": "3235"
    },
    {
      "name": "Phitsanulok",
      "city": "Phitsanulok",
      "country": "Thailand",
      "iata_code": "PHS",
      "_geoloc": {
        "latitude": 16.782939,
        "longitude": 100.279122
      },
      "links_count": 6,
      "objectID": "3170"
    },
    {
      "name": "Rajahmundry",
      "city": "Rajahmundry",
      "country": "India",
      "iata_code": "RJA",
      "_geoloc": {
        "latitude": 17.110361,
        "longitude": 81.818208
      },
      "links_count": 6,
      "objectID": "3148"
    },
    {
      "name": "Vijayawada",
      "city": "Vijayawada",
      "country": "India",
      "iata_code": "VGA",
      "_geoloc": {
        "latitude": 16.530433,
        "longitude": 80.796847
      },
      "links_count": 6,
      "objectID": "3134"
    },
    {
      "name": "Savannakhet",
      "city": "Savannakhet",
      "country": "Laos",
      "iata_code": "ZVK",
      "_geoloc": {
        "latitude": 16.556594,
        "longitude": 104.759531
      },
      "links_count": 6,
      "objectID": "3118"
    },
    {
      "name": "Jessore",
      "city": "Jessore",
      "country": "Bangladesh",
      "iata_code": "JSR",
      "_geoloc": {
        "latitude": 23.1838,
        "longitude": 89.160833
      },
      "links_count": 6,
      "objectID": "3071"
    },
    {
      "name": "Coxs Bazar",
      "city": "Cox's Bazar",
      "country": "Bangladesh",
      "iata_code": "CXB",
      "_geoloc": {
        "latitude": 21.452194,
        "longitude": 91.963889
      },
      "links_count": 6,
      "objectID": "3068"
    },
    {
      "name": "Surat",
      "city": "Surat",
      "country": "India",
      "iata_code": "STV",
      "_geoloc": {
        "latitude": 21.114061,
        "longitude": 72.741792
      },
      "links_count": 6,
      "objectID": "3022"
    },
    {
      "name": "Rajkot",
      "city": "Rajkot",
      "country": "India",
      "iata_code": "RAJ",
      "_geoloc": {
        "latitude": 22.309183,
        "longitude": 70.779525
      },
      "links_count": 6,
      "objectID": "3019"
    },
    {
      "name": "Jabalpur",
      "city": "Jabalpur",
      "country": "India",
      "iata_code": "JLR",
      "_geoloc": {
        "latitude": 23.177817,
        "longitude": 80.052047
      },
      "links_count": 6,
      "objectID": "3009"
    },
    {
      "name": "Nefta",
      "city": "Tozeur",
      "country": "Tunisia",
      "iata_code": "TOE",
      "_geoloc": {
        "latitude": 33.939722,
        "longitude": 8.110556
      },
      "links_count": 6,
      "objectID": "296"
    },
    {
      "name": "Kemerovo",
      "city": "Kemorovo",
      "country": "Russia",
      "iata_code": "KEJ",
      "_geoloc": {
        "latitude": 55.270094,
        "longitude": 86.107208
      },
      "links_count": 6,
      "objectID": "2957"
    },
    {
      "name": "Barnaul",
      "city": "Barnaul",
      "country": "Russia",
      "iata_code": "BAX",
      "_geoloc": {
        "latitude": 53.363775,
        "longitude": 83.538533
      },
      "links_count": 6,
      "objectID": "2956"
    },
    {
      "name": "Semipalatinsk",
      "city": "Semiplatinsk",
      "country": "Kazakhstan",
      "iata_code": "PLX",
      "_geoloc": {
        "latitude": 50.3513,
        "longitude": 80.2344
      },
      "links_count": 6,
      "objectID": "2918"
    },
    {
      "name": "Pavlodar",
      "city": "Pavlodar",
      "country": "Kazakhstan",
      "iata_code": "PWQ",
      "_geoloc": {
        "latitude": 52.195,
        "longitude": 77.073889
      },
      "links_count": 6,
      "objectID": "2917"
    },
    {
      "name": "Uralsk",
      "city": "Uralsk",
      "country": "Kazakhstan",
      "iata_code": "URA",
      "_geoloc": {
        "latitude": 51.150833,
        "longitude": 51.543056
      },
      "links_count": 6,
      "objectID": "2916"
    },
    {
      "name": "Padre Aldamiz",
      "city": "Puerto Maldonado",
      "country": "Peru",
      "iata_code": "PEM",
      "_geoloc": {
        "latitude": -12.613611,
        "longitude": -69.228611
      },
      "links_count": 6,
      "objectID": "2808"
    },
    {
      "name": "Antonio Narino",
      "city": "Pasto",
      "country": "Colombia",
      "iata_code": "PSO",
      "_geoloc": {
        "latitude": 1.396247,
        "longitude": -77.291478
      },
      "links_count": 6,
      "objectID": "2742"
    },
    {
      "name": "Puerto Carreno",
      "city": "Puerto Carreno",
      "country": "Colombia",
      "iata_code": "PCR",
      "_geoloc": {
        "latitude": 6.184717,
        "longitude": -67.493164
      },
      "links_count": 6,
      "objectID": "2738"
    },
    {
      "name": "Fabio Alberto Leon Bentley",
      "city": "Mitu",
      "country": "Colombia",
      "iata_code": "MVP",
      "_geoloc": {
        "latitude": 1.253664,
        "longitude": -70.233878
      },
      "links_count": 6,
      "objectID": "2732"
    },
    {
      "name": "Los Garzones",
      "city": "Monteria",
      "country": "Colombia",
      "iata_code": "MTR",
      "_geoloc": {
        "latitude": 8.823744,
        "longitude": -75.825831
      },
      "links_count": 6,
      "objectID": "2731"
    },
    {
      "name": "Perales",
      "city": "Ibague",
      "country": "Colombia",
      "iata_code": "IBE",
      "_geoloc": {
        "latitude": 4.421608,
        "longitude": -75.1333
      },
      "links_count": 6,
      "objectID": "2724"
    },
    {
      "name": "Mariscal Lamar",
      "city": "Cuenca",
      "country": "Ecuador",
      "iata_code": "CUE",
      "_geoloc": {
        "latitude": -2.889467,
        "longitude": -78.984397
      },
      "links_count": 6,
      "objectID": "2671"
    },
    {
      "name": "Francisco De Orellana",
      "city": "Coca",
      "country": "Ecuador",
      "iata_code": "OCC",
      "_geoloc": {
        "latitude": -0.462886,
        "longitude": -76.986842
      },
      "links_count": 6,
      "objectID": "2670"
    },
    {
      "name": "Maquehue",
      "city": "Temuco",
      "country": "Chile",
      "iata_code": "ZCO",
      "_geoloc": {
        "latitude": -38.766819,
        "longitude": -72.637097
      },
      "links_count": 6,
      "objectID": "2664"
    },
    {
      "name": "Enugu",
      "city": "Enugu",
      "country": "Nigeria",
      "iata_code": "ENU",
      "_geoloc": {
        "latitude": 6.474272,
        "longitude": 7.561961
      },
      "links_count": 6,
      "objectID": "264"
    },
    {
      "name": "Professor Urbano Ernesto Stumpf",
      "city": "Sao Jose Dos Campos",
      "country": "Brazil",
      "iata_code": "SJK",
      "_geoloc": {
        "latitude": -23.228172,
        "longitude": -45.862739
      },
      "links_count": 6,
      "objectID": "2615"
    },
    {
      "name": "Macapa",
      "city": "Macapa",
      "country": "Brazil",
      "iata_code": "MCP",
      "_geoloc": {
        "latitude": 0.050664,
        "longitude": -51.072178
      },
      "links_count": 6,
      "objectID": "2591"
    },
    {
      "name": "Mario Ribeiro",
      "city": "Montes Claros",
      "country": "Brazil",
      "iata_code": "MOC",
      "_geoloc": {
        "latitude": -16.706925,
        "longitude": -43.8189
      },
      "links_count": 6,
      "objectID": "2587"
    },
    {
      "name": "Usiminas",
      "city": "Ipatinga",
      "country": "Brazil",
      "iata_code": "IPN",
      "_geoloc": {
        "latitude": -19.470722,
        "longitude": -42.487583
      },
      "links_count": 6,
      "objectID": "2570"
    },
    {
      "name": "Fernando De Noronha",
      "city": "Fernando Do Noronha",
      "country": "Brazil",
      "iata_code": "FEN",
      "_geoloc": {
        "latitude": -3.854928,
        "longitude": -32.423336
      },
      "links_count": 6,
      "objectID": "2556"
    },
    {
      "name": "Campo Dos Bugres",
      "city": "Caxias Do Sul",
      "country": "Brazil",
      "iata_code": "CXJ",
      "_geoloc": {
        "latitude": -29.197064,
        "longitude": -51.187536
      },
      "links_count": 6,
      "objectID": "2547"
    },
    {
      "name": "Cascavel",
      "city": "Cascavel",
      "country": "Brazil",
      "iata_code": "CAC",
      "_geoloc": {
        "latitude": -25.000339,
        "longitude": -53.500764
      },
      "links_count": 6,
      "objectID": "2535"
    },
    {
      "name": "Boa Vista",
      "city": "Boa Vista",
      "country": "Brazil",
      "iata_code": "BVB",
      "_geoloc": {
        "latitude": 2.846311,
        "longitude": -60.690069
      },
      "links_count": 6,
      "objectID": "2533"
    },
    {
      "name": "Mar Del Plata",
      "city": "Mar Del Plata",
      "country": "Argentina",
      "iata_code": "MDQ",
      "_geoloc": {
        "latitude": -37.934167,
        "longitude": -57.573333
      },
      "links_count": 6,
      "objectID": "2508"
    },
    {
      "name": "Tamale",
      "city": "Tamale",
      "country": "Ghana",
      "iata_code": "TML",
      "_geoloc": {
        "latitude": 9.557192,
        "longitude": -0.863214
      },
      "links_count": 6,
      "objectID": "249"
    },
    {
      "name": "Esquel",
      "city": "Esquel",
      "country": "Argentina",
      "iata_code": "EQS",
      "_geoloc": {
        "latitude": -42.90795,
        "longitude": -71.139472
      },
      "links_count": 6,
      "objectID": "2488"
    },
    {
      "name": "St Anthony",
      "city": "St. Anthony",
      "country": "Canada",
      "iata_code": "YAY",
      "_geoloc": {
        "latitude": 51.391944,
        "longitude": -56.083056
      },
      "links_count": 6,
      "objectID": "24"
    },
    {
      "name": "Cotabato",
      "city": "Cotabato",
      "country": "Philippines",
      "iata_code": "CBO",
      "_geoloc": {
        "latitude": 7.165242,
        "longitude": 124.209619
      },
      "links_count": 6,
      "objectID": "2399"
    },
    {
      "name": "Pohang",
      "city": "Pohang",
      "country": "South Korea",
      "iata_code": "KPO",
      "_geoloc": {
        "latitude": 35.987858,
        "longitude": 129.420486
      },
      "links_count": 6,
      "objectID": "2380"
    },
    {
      "name": "Ulsan",
      "city": "Ulsan",
      "country": "South Korea",
      "iata_code": "USN",
      "_geoloc": {
        "latitude": 35.593494,
        "longitude": 129.351722
      },
      "links_count": 6,
      "objectID": "2374"
    },
    {
      "name": "Yeosu",
      "city": "Yeosu",
      "country": "South Korea",
      "iata_code": "RSU",
      "_geoloc": {
        "latitude": 34.842328,
        "longitude": 127.61685
      },
      "links_count": 6,
      "objectID": "2365"
    },
    {
      "name": "Yamagata",
      "city": "Yamagata",
      "country": "Japan",
      "iata_code": "GAJ",
      "_geoloc": {
        "latitude": 38.411894,
        "longitude": 140.371331
      },
      "links_count": 6,
      "objectID": "2341"
    },
    {
      "name": "New Kitakyushu",
      "city": "Kitakyushu",
      "country": "Japan",
      "iata_code": "KKJ",
      "_geoloc": {
        "latitude": 33.845942,
        "longitude": 131.034689
      },
      "links_count": 6,
      "objectID": "2311"
    },
    {
      "name": "Tsushima",
      "city": "Tsushima",
      "country": "Japan",
      "iata_code": "TSJ",
      "_geoloc": {
        "latitude": 34.284889,
        "longitude": 129.33055
      },
      "links_count": 6,
      "objectID": "2297"
    },
    {
      "name": "Yamaguchi Ube",
      "city": "Yamaguchi",
      "country": "Japan",
      "iata_code": "UBJ",
      "_geoloc": {
        "latitude": 33.93,
        "longitude": 131.278611
      },
      "links_count": 6,
      "objectID": "2296"
    },
    {
      "name": "Obihiro",
      "city": "Obihiro",
      "country": "Japan",
      "iata_code": "OBO",
      "_geoloc": {
        "latitude": 42.733333,
        "longitude": 143.217222
      },
      "links_count": 6,
      "objectID": "2286"
    },
    {
      "name": "Pohnpei Intl",
      "city": "Pohnpei",
      "country": "Micronesia",
      "iata_code": "PNI",
      "_geoloc": {
        "latitude": 6.9851,
        "longitude": 158.208989
      },
      "links_count": 6,
      "objectID": "2255"
    },
    {
      "name": "Bucholz Aaf",
      "city": "Kwajalein",
      "country": "Marshall Islands",
      "iata_code": "KWA",
      "_geoloc": {
        "latitude": 8.720122,
        "longitude": 167.731661
      },
      "links_count": 6,
      "objectID": "2251"
    },
    {
      "name": "Sheikh Zayed",
      "city": "Rahim Yar Khan",
      "country": "Pakistan",
      "iata_code": "RYK",
      "_geoloc": {
        "latitude": 28.3839,
        "longitude": 70.279572
      },
      "links_count": 6,
      "objectID": "2222"
    },
    {
      "name": "Gwadar",
      "city": "Gwadar",
      "country": "Pakistan",
      "iata_code": "GWD",
      "_geoloc": {
        "latitude": 25.233308,
        "longitude": 62.329494
      },
      "links_count": 6,
      "objectID": "2203"
    },
    {
      "name": "Nejran",
      "city": "Nejran",
      "country": "Saudi Arabia",
      "iata_code": "EAM",
      "_geoloc": {
        "latitude": 17.611436,
        "longitude": 44.419169
      },
      "links_count": 6,
      "objectID": "2075"
    },
    {
      "name": "Bisha",
      "city": "Bisha",
      "country": "Saudi Arabia",
      "iata_code": "BHH",
      "_geoloc": {
        "latitude": 19.98435,
        "longitude": 42.620881
      },
      "links_count": 6,
      "objectID": "2062"
    },
    {
      "name": "Al Baha",
      "city": "El-baha",
      "country": "Saudi Arabia",
      "iata_code": "ABT",
      "_geoloc": {
        "latitude": 20.296139,
        "longitude": 41.634277
      },
      "links_count": 6,
      "objectID": "2061"
    },
    {
      "name": "Al Ahsa",
      "city": "Al-ahsa",
      "country": "Saudi Arabia",
      "iata_code": "HOF",
      "_geoloc": {
        "latitude": 25.285306,
        "longitude": 49.485189
      },
      "links_count": 6,
      "objectID": "2060"
    },
    {
      "name": "Woodbourne",
      "city": "Woodbourne",
      "country": "New Zealand",
      "iata_code": "BHE",
      "_geoloc": {
        "latitude": -41.518333,
        "longitude": 173.870278
      },
      "links_count": 6,
      "objectID": "2037"
    },
    {
      "name": "Tauranga",
      "city": "Tauranga",
      "country": "New Zealand",
      "iata_code": "TRG",
      "_geoloc": {
        "latitude": -37.671944,
        "longitude": 176.19611
      },
      "links_count": 6,
      "objectID": "2034"
    },
    {
      "name": "Rotorua",
      "city": "Rotorua",
      "country": "New Zealand",
      "iata_code": "ROT",
      "_geoloc": {
        "latitude": -38.109167,
        "longitude": 176.317222
      },
      "links_count": 6,
      "objectID": "2031"
    },
    {
      "name": "New Plymouth",
      "city": "New Plymouth",
      "country": "New Zealand",
      "iata_code": "NPL",
      "_geoloc": {
        "latitude": -39.008611,
        "longitude": 174.179167
      },
      "links_count": 6,
      "objectID": "2023"
    },
    {
      "name": "Lifou",
      "city": "Lifou",
      "country": "New Caledonia",
      "iata_code": "LIF",
      "_geoloc": {
        "latitude": -20.7748,
        "longitude": 167.239864
      },
      "links_count": 6,
      "objectID": "2000"
    },
    {
      "name": "Maupiti",
      "city": "Maupiti",
      "country": "French Polynesia",
      "iata_code": "MAU",
      "_geoloc": {
        "latitude": -16.426486,
        "longitude": -152.243669
      },
      "links_count": 6,
      "objectID": "1994"
    },
    {
      "name": "Manihi",
      "city": "Manihi",
      "country": "French Polynesia",
      "iata_code": "XMH",
      "_geoloc": {
        "latitude": -14.436764,
        "longitude": -146.070056
      },
      "links_count": 6,
      "objectID": "1978"
    },
    {
      "name": "Wallis",
      "city": "Wallis",
      "country": "Wallis and Futuna",
      "iata_code": "WLS",
      "_geoloc": {
        "latitude": -13.238281,
        "longitude": -176.199228
      },
      "links_count": 6,
      "objectID": "1968"
    },
    {
      "name": "Bonriki Intl",
      "city": "Tarawa",
      "country": "Kiribati",
      "iata_code": "TRW",
      "_geoloc": {
        "latitude": 1.381636,
        "longitude": 173.147036
      },
      "links_count": 6,
      "objectID": "1965"
    },
    {
      "name": "Ignacio Agramonte Intl",
      "city": "Camaguey",
      "country": "Cuba",
      "iata_code": "CMW",
      "_geoloc": {
        "latitude": 21.420428,
        "longitude": -77.847433
      },
      "links_count": 6,
      "objectID": "1904"
    },
    {
      "name": "Cap Haitien Intl",
      "city": "Cap Haitien",
      "country": "Haiti",
      "iata_code": "CAP",
      "_geoloc": {
        "latitude": 19.732989,
        "longitude": -72.194739
      },
      "links_count": 6,
      "objectID": "1895"
    },
    {
      "name": "Palmar Sur",
      "city": "Palmar Sur",
      "country": "Costa Rica",
      "iata_code": "PMZ",
      "_geoloc": {
        "latitude": 8.951025,
        "longitude": -83.468583
      },
      "links_count": 6,
      "objectID": "1887"
    },
    {
      "name": "Puerto Escondido Intl",
      "city": "Puerto Escondido",
      "country": "Mexico",
      "iata_code": "PXM",
      "_geoloc": {
        "latitude": 15.876861,
        "longitude": -97.089117
      },
      "links_count": 6,
      "objectID": "1837"
    },
    {
      "name": "Colima",
      "city": "Colima",
      "country": "Mexico",
      "iata_code": "CLQ",
      "_geoloc": {
        "latitude": 19.277011,
        "longitude": -103.577397
      },
      "links_count": 6,
      "objectID": "1808"
    },
    {
      "name": "Tepic",
      "city": "Tepic",
      "country": "Mexico",
      "iata_code": "TPQ",
      "_geoloc": {
        "latitude": 21.419453,
        "longitude": -104.842581
      },
      "links_count": 6,
      "objectID": "1802"
    },
    {
      "name": "Fort Nelson",
      "city": "Fort Nelson",
      "country": "Canada",
      "iata_code": "YYE",
      "_geoloc": {
        "latitude": 58.836389,
        "longitude": -122.596944
      },
      "links_count": 6,
      "objectID": "180"
    },
    {
      "name": "Ciudad Del Carmen Intl",
      "city": "Ciudad Del Carmen",
      "country": "Mexico",
      "iata_code": "CME",
      "_geoloc": {
        "latitude": 18.653739,
        "longitude": -91.799017
      },
      "links_count": 6,
      "objectID": "1789"
    },
    {
      "name": "Bahias De Huatulco Intl",
      "city": "Huatulco",
      "country": "Mexico",
      "iata_code": "HUX",
      "_geoloc": {
        "latitude": 15.775317,
        "longitude": -96.262572
      },
      "links_count": 6,
      "objectID": "1786"
    },
    {
      "name": "Batman",
      "city": "Batman",
      "country": "Turkey",
      "iata_code": "BAL",
      "_geoloc": {
        "latitude": 37.928969,
        "longitude": 41.116583
      },
      "links_count": 6,
      "objectID": "1729"
    },
    {
      "name": "Erzincan",
      "city": "Erzincan",
      "country": "Turkey",
      "iata_code": "ERC",
      "_geoloc": {
        "latitude": 39.710203,
        "longitude": 39.527003
      },
      "links_count": 6,
      "objectID": "1723"
    },
    {
      "name": "Porto Santo",
      "city": "Porto Santo",
      "country": "Portugal",
      "iata_code": "PXO",
      "_geoloc": {
        "latitude": 33.073386,
        "longitude": -16.349975
      },
      "links_count": 6,
      "objectID": "1637"
    },
    {
      "name": "Santa Maria",
      "city": "Santa Maria (island)",
      "country": "Portugal",
      "iata_code": "SMA",
      "_geoloc": {
        "latitude": 36.97139,
        "longitude": -25.170639
      },
      "links_count": 6,
      "objectID": "1617"
    },
    {
      "name": "Sde Dov",
      "city": "Tel-aviv",
      "country": "Israel",
      "iata_code": "SDV",
      "_geoloc": {
        "latitude": 32.114661,
        "longitude": 34.782239
      },
      "links_count": 6,
      "objectID": "1605"
    },
    {
      "name": "Rimini",
      "city": "Rimini",
      "country": "Italy",
      "iata_code": "RMI",
      "_geoloc": {
        "latitude": 44.020292,
        "longitude": 12.611747
      },
      "links_count": 6,
      "objectID": "1546"
    },
    {
      "name": "Pantelleria",
      "city": "Pantelleria",
      "country": "Italy",
      "iata_code": "PNL",
      "_geoloc": {
        "latitude": 36.816519,
        "longitude": 11.968864
      },
      "links_count": 6,
      "objectID": "1511"
    },
    {
      "name": "Lampedusa",
      "city": "Lampedusa",
      "country": "Italy",
      "iata_code": "LMP",
      "_geoloc": {
        "latitude": 35.497914,
        "longitude": 12.618083
      },
      "links_count": 6,
      "objectID": "1510"
    },
    {
      "name": "Skiros",
      "city": "Skiros",
      "country": "Greece",
      "iata_code": "SKU",
      "_geoloc": {
        "latitude": 38.967553,
        "longitude": 24.487228
      },
      "links_count": 6,
      "objectID": "1482"
    },
    {
      "name": "Araxos",
      "city": "Patras",
      "country": "Greece",
      "iata_code": "GPA",
      "_geoloc": {
        "latitude": 38.151111,
        "longitude": 21.425556
      },
      "links_count": 6,
      "objectID": "1473"
    },
    {
      "name": "Dimokritos",
      "city": "Alexandroupolis",
      "country": "Greece",
      "iata_code": "AXD",
      "_geoloc": {
        "latitude": 40.855869,
        "longitude": 25.956264
      },
      "links_count": 6,
      "objectID": "1446"
    },
    {
      "name": "St Pierre",
      "city": "St.-pierre",
      "country": "Saint Pierre and Miquelon",
      "iata_code": "FSP",
      "_geoloc": {
        "latitude": 46.762904,
        "longitude": -56.173088
      },
      "links_count": 6,
      "objectID": "1441"
    },
    {
      "name": "Le Palyvestre",
      "city": "Hyeres",
      "country": "France",
      "iata_code": "TLN",
      "_geoloc": {
        "latitude": 43.0973,
        "longitude": 6.14603
      },
      "links_count": 6,
      "objectID": "1438"
    },
    {
      "name": "Pleurtuit",
      "city": "Dinard",
      "country": "France",
      "iata_code": "DNR",
      "_geoloc": {
        "latitude": 48.587683,
        "longitude": -2.079958
      },
      "links_count": 6,
      "objectID": "1405"
    },
    {
      "name": "Cape Dorset",
      "city": "Cape Dorset",
      "country": "Canada",
      "iata_code": "YTE",
      "_geoloc": {
        "latitude": 64.23,
        "longitude": -76.526667
      },
      "links_count": 6,
      "objectID": "140"
    },
    {
      "name": "Saint John",
      "city": "St. John",
      "country": "Canada",
      "iata_code": "YSJ",
      "_geoloc": {
        "latitude": 45.316111,
        "longitude": -65.890278
      },
      "links_count": 6,
      "objectID": "135"
    },
    {
      "name": "Tavaux",
      "city": "Dole",
      "country": "France",
      "iata_code": "DLE",
      "_geoloc": {
        "latitude": 47.039014,
        "longitude": 5.42725
      },
      "links_count": 6,
      "objectID": "1309"
    },
    {
      "name": "Mazamet",
      "city": "Castres",
      "country": "France",
      "iata_code": "DCM",
      "_geoloc": {
        "latitude": 43.55625,
        "longitude": 2.289183
      },
      "links_count": 6,
      "objectID": "1285"
    },
    {
      "name": "Gander Intl",
      "city": "Gander",
      "country": "Canada",
      "iata_code": "YQX",
      "_geoloc": {
        "latitude": 48.936944,
        "longitude": -54.568056
      },
      "links_count": 6,
      "objectID": "125"
    },
    {
      "name": "San Sebastian",
      "city": "San Sebastian",
      "country": "Spain",
      "iata_code": "EAS",
      "_geoloc": {
        "latitude": 43.356519,
        "longitude": -1.790611
      },
      "links_count": 6,
      "objectID": "1242"
    },
    {
      "name": "Kufra",
      "city": "Kufra",
      "country": "Libya",
      "iata_code": "AKF",
      "_geoloc": {
        "latitude": 24.178728,
        "longitude": 23.313958
      },
      "links_count": 6,
      "objectID": "1153"
    },
    {
      "name": "Kenora",
      "city": "Kenora",
      "country": "Canada",
      "iata_code": "YQK",
      "_geoloc": {
        "latitude": 49.788334,
        "longitude": -94.363056
      },
      "links_count": 6,
      "objectID": "115"
    },
    {
      "name": "Windsor",
      "city": "Windsor",
      "country": "Canada",
      "iata_code": "YQG",
      "_geoloc": {
        "latitude": 42.275556,
        "longitude": -82.955556
      },
      "links_count": 6,
      "objectID": "113"
    },
    {
      "name": "Red Deer Regional",
      "city": "Red Deer Industrial",
      "country": "Canada",
      "iata_code": "YQF",
      "_geoloc": {
        "latitude": 52.182222,
        "longitude": -113.894444
      },
      "links_count": 6,
      "objectID": "112"
    },
    {
      "name": "Makale",
      "city": "Makale",
      "country": "Ethiopia",
      "iata_code": "MQX",
      "_geoloc": {
        "latitude": 13.467367,
        "longitude": 39.533464
      },
      "links_count": 6,
      "objectID": "1118"
    },
    {
      "name": "Lalibella",
      "city": "Lalibella",
      "country": "Ethiopia",
      "iata_code": "LLI",
      "_geoloc": {
        "latitude": 11.975014,
        "longitude": 38.979969
      },
      "links_count": 6,
      "objectID": "1117"
    },
    {
      "name": "Dire Dawa Intl",
      "city": "Dire Dawa",
      "country": "Ethiopia",
      "iata_code": "DIR",
      "_geoloc": {
        "latitude": 9.6247,
        "longitude": 41.854203
      },
      "links_count": 6,
      "objectID": "1112"
    },
    {
      "name": "Hierro",
      "city": "Hierro",
      "country": "Spain",
      "iata_code": "VDE",
      "_geoloc": {
        "latitude": 27.814847,
        "longitude": -17.887056
      },
      "links_count": 6,
      "objectID": "1052"
    },
    {
      "name": "Kananga",
      "city": "Kananga",
      "country": "Congo (Kinshasa)",
      "iata_code": "KGA",
      "_geoloc": {
        "latitude": -5.900055,
        "longitude": 22.469166
      },
      "links_count": 6,
      "objectID": "1042"
    },
    {
      "name": "Goma",
      "city": "Goma",
      "country": "Congo (Kinshasa)",
      "iata_code": "GOM",
      "_geoloc": {
        "latitude": -1.670814,
        "longitude": 29.238464
      },
      "links_count": 6,
      "objectID": "1036"
    },
    {
      "name": "Cabinda",
      "city": "Cabinda",
      "country": "Angola",
      "iata_code": "CAB",
      "_geoloc": {
        "latitude": -5.596992,
        "longitude": 12.188353
      },
      "links_count": 5,
      "objectID": "946"
    },
    {
      "name": "Tununak Airport",
      "city": "Tununak",
      "country": "United States",
      "iata_code": "TNK",
      "_geoloc": {
        "latitude": 60.575556,
        "longitude": -165.271667
      },
      "links_count": 5,
      "objectID": "8201"
    },
    {
      "name": "Nightmute Airport",
      "city": "Nightmute",
      "country": "United States",
      "iata_code": "NME",
      "_geoloc": {
        "latitude": 60.471111,
        "longitude": -164.700833
      },
      "links_count": 5,
      "objectID": "8199"
    },
    {
      "name": "Ravensthorpe Airport",
      "city": "Ravensthorpe",
      "country": "Australia",
      "iata_code": "RVT",
      "_geoloc": {
        "latitude": -33.797222,
        "longitude": 120.208056
      },
      "links_count": 5,
      "objectID": "7577"
    },
    {
      "name": "Allakaket Airport",
      "city": "Allakaket",
      "country": "United States",
      "iata_code": "AET",
      "_geoloc": {
        "latitude": 66.5519,
        "longitude": -152.6222
      },
      "links_count": 5,
      "objectID": "6839"
    },
    {
      "name": "Noatak Airport",
      "city": "Noatak",
      "country": "United States",
      "iata_code": "WTK",
      "_geoloc": {
        "latitude": 67.5661,
        "longitude": -162.975
      },
      "links_count": 5,
      "objectID": "6725"
    },
    {
      "name": "Erechim Airport",
      "city": "Erechim",
      "country": "Brazil",
      "iata_code": "ERM",
      "_geoloc": {
        "latitude": -27.6619,
        "longitude": -52.2683
      },
      "links_count": 5,
      "objectID": "6477"
    },
    {
      "name": "Kenmore Air Harbor Seaplane Base",
      "city": "Seattle",
      "country": "United States",
      "iata_code": "LKE",
      "_geoloc": {
        "latitude": 47.629,
        "longitude": -122.339
      },
      "links_count": 5,
      "objectID": "6457"
    },
    {
      "name": "Esperance Airport",
      "city": "Esperance",
      "country": "Australia",
      "iata_code": "EPR",
      "_geoloc": {
        "latitude": -33.6844,
        "longitude": 121.823
      },
      "links_count": 5,
      "objectID": "6266"
    },
    {
      "name": "Saga Airport",
      "city": "Saga",
      "country": "Japan",
      "iata_code": "HSG",
      "_geoloc": {
        "latitude": 33.1497,
        "longitude": 130.302
      },
      "links_count": 5,
      "objectID": "5996"
    },
    {
      "name": "Dera Ghazi Khan Airport",
      "city": "Dera Ghazi Khan",
      "country": "Pakistan",
      "iata_code": "DEA",
      "_geoloc": {
        "latitude": 29.961011,
        "longitude": 70.485925
      },
      "links_count": 5,
      "objectID": "5942"
    },
    {
      "name": "Uléi Airport",
      "city": "Ambryn Island",
      "country": "Vanuatu",
      "iata_code": "ULB",
      "_geoloc": {
        "latitude": -16.333,
        "longitude": 168.283
      },
      "links_count": 5,
      "objectID": "5910"
    },
    {
      "name": "Ahe Airport",
      "city": "Ahe",
      "country": "French Polynesia",
      "iata_code": "AHE",
      "_geoloc": {
        "latitude": -14.4281,
        "longitude": -146.257
      },
      "links_count": 5,
      "objectID": "5889"
    },
    {
      "name": "New Bedford Regional Airport",
      "city": "New Bedford",
      "country": "United States",
      "iata_code": "EWB",
      "_geoloc": {
        "latitude": 41.6761,
        "longitude": -70.9569
      },
      "links_count": 5,
      "objectID": "5737"
    },
    {
      "name": "Harrison Marion Regional Airport",
      "city": "Clarksburg",
      "country": "United States",
      "iata_code": "CKB",
      "_geoloc": {
        "latitude": 39.2966,
        "longitude": -80.2281
      },
      "links_count": 5,
      "objectID": "5730"
    },
    {
      "name": "Sorkjosen Airport",
      "city": "Sorkjosen",
      "country": "Norway",
      "iata_code": "SOJ",
      "_geoloc": {
        "latitude": 69.7868,
        "longitude": 20.9594
      },
      "links_count": 5,
      "objectID": "5588"
    },
    {
      "name": "Sanday Airport",
      "city": "Sanday",
      "country": "United Kingdom",
      "iata_code": "NDY",
      "_geoloc": {
        "latitude": 59.2503,
        "longitude": -2.57667
      },
      "links_count": 5,
      "objectID": "5569"
    },
    {
      "name": "Round Lake (Weagamow Lake) Airport",
      "city": "Round Lake",
      "country": "Canada",
      "iata_code": "ZRJ",
      "_geoloc": {
        "latitude": 52.9436,
        "longitude": -91.3128
      },
      "links_count": 5,
      "objectID": "5547"
    },
    {
      "name": "Fort Severn Airport",
      "city": "Fort Severn",
      "country": "Canada",
      "iata_code": "YER",
      "_geoloc": {
        "latitude": 56.0189,
        "longitude": -87.6761
      },
      "links_count": 5,
      "objectID": "5489"
    },
    {
      "name": "Fort Frances Municipal Airport",
      "city": "Fort Frances",
      "country": "Canada",
      "iata_code": "YAG",
      "_geoloc": {
        "latitude": 48.6542,
        "longitude": -93.4397
      },
      "links_count": 5,
      "objectID": "5479"
    },
    {
      "name": "Wunnumin Lake Airport",
      "city": "Wunnumin Lake",
      "country": "Canada",
      "iata_code": "WNN",
      "_geoloc": {
        "latitude": 52.8939,
        "longitude": -89.2892
      },
      "links_count": 5,
      "objectID": "5466"
    },
    {
      "name": "Wapekeka Airport",
      "city": "Angling Lake",
      "country": "Canada",
      "iata_code": "YAX",
      "_geoloc": {
        "latitude": 53.8492,
        "longitude": -89.5794
      },
      "links_count": 5,
      "objectID": "5465"
    },
    {
      "name": "Punta Gorda Airport",
      "city": "Punta Gorda",
      "country": "Belize",
      "iata_code": "PND",
      "_geoloc": {
        "latitude": 16.1024,
        "longitude": -88.8083
      },
      "links_count": 5,
      "objectID": "5455"
    },
    {
      "name": "Narsaq Heliport",
      "city": "Narsaq",
      "country": "Greenland",
      "iata_code": "JNS",
      "_geoloc": {
        "latitude": 60.9167,
        "longitude": -46.0586
      },
      "links_count": 5,
      "objectID": "5445"
    },
    {
      "name": "Forde Bringeland",
      "city": "Forde",
      "country": "Norway",
      "iata_code": "FDE",
      "_geoloc": {
        "latitude": 61.392,
        "longitude": 5.763
      },
      "links_count": 5,
      "objectID": "4389"
    },
    {
      "name": "Abraham Lincoln Capital",
      "city": "Springfield",
      "country": "United States",
      "iata_code": "SPI",
      "_geoloc": {
        "latitude": 39.8441,
        "longitude": -89.677889
      },
      "links_count": 5,
      "objectID": "4336"
    },
    {
      "name": "Valan",
      "city": "Honningsvag",
      "country": "Norway",
      "iata_code": "HVG",
      "_geoloc": {
        "latitude": 70.99,
        "longitude": 25.83
      },
      "links_count": 5,
      "objectID": "4326"
    },
    {
      "name": "Kemi Tornio",
      "city": "Kemi",
      "country": "Finland",
      "iata_code": "KEM",
      "_geoloc": {
        "latitude": 65.781889,
        "longitude": 24.5991
      },
      "links_count": 5,
      "objectID": "432"
    },
    {
      "name": "Jyvaskyla",
      "city": "Jyvaskyla",
      "country": "Finland",
      "iata_code": "JYV",
      "_geoloc": {
        "latitude": 62.399453,
        "longitude": 25.678253
      },
      "links_count": 5,
      "objectID": "430"
    },
    {
      "name": "Barnstable Muni Boardman Polando Fld",
      "city": "Barnstable",
      "country": "United States",
      "iata_code": "HYA",
      "_geoloc": {
        "latitude": 41.669336,
        "longitude": -70.280356
      },
      "links_count": 5,
      "objectID": "4278"
    },
    {
      "name": "Wai Oti",
      "city": "Maumere",
      "country": "Indonesia",
      "iata_code": "MOF",
      "_geoloc": {
        "latitude": -8.640647,
        "longitude": 122.236889
      },
      "links_count": 5,
      "objectID": "3913"
    },
    {
      "name": "South Arkansas Rgnl At Goodwin Fld",
      "city": "El Dorado",
      "country": "United States",
      "iata_code": "ELD",
      "_geoloc": {
        "latitude": 33.220972,
        "longitude": -92.813278
      },
      "links_count": 5,
      "objectID": "3696"
    },
    {
      "name": "Norfolk Island Intl",
      "city": "Norfolk Island",
      "country": "Norfolk Island",
      "iata_code": "NLK",
      "_geoloc": {
        "latitude": -29.041625,
        "longitude": 167.938742
      },
      "links_count": 5,
      "objectID": "3359"
    },
    {
      "name": "Kaimana",
      "city": "Kaimana",
      "country": "Indonesia",
      "iata_code": "KNG",
      "_geoloc": {
        "latitude": -3.644517,
        "longitude": 133.695553
      },
      "links_count": 5,
      "objectID": "3258"
    },
    {
      "name": "Heroes Del Acre",
      "city": "Cobija",
      "country": "Bolivia",
      "iata_code": "CIJ",
      "_geoloc": {
        "latitude": -11.040436,
        "longitude": -68.782972
      },
      "links_count": 5,
      "objectID": "2761"
    },
    {
      "name": "In Salah",
      "city": "In Salah",
      "country": "Algeria",
      "iata_code": "INZ",
      "_geoloc": {
        "latitude": 27.251022,
        "longitude": 2.512017
      },
      "links_count": 5,
      "objectID": "239"
    },
    {
      "name": "Takaroa",
      "city": "Takaroa",
      "country": "French Polynesia",
      "iata_code": "TKX",
      "_geoloc": {
        "latitude": -14.455781,
        "longitude": -145.024542
      },
      "links_count": 5,
      "objectID": "1986"
    },
    {
      "name": "Tikehau",
      "city": "Tikehau",
      "country": "French Polynesia",
      "iata_code": "TIH",
      "_geoloc": {
        "latitude": -15.119617,
        "longitude": -148.230697
      },
      "links_count": 5,
      "objectID": "1975"
    },
    {
      "name": "Tubuai",
      "city": "Tubuai",
      "country": "French Polynesia",
      "iata_code": "TUB",
      "_geoloc": {
        "latitude": -23.365353,
        "longitude": -149.524072
      },
      "links_count": 5,
      "objectID": "1972"
    },
    {
      "name": "Rurutu",
      "city": "Rurutu",
      "country": "French Polynesia",
      "iata_code": "RUR",
      "_geoloc": {
        "latitude": -22.434069,
        "longitude": -151.360614
      },
      "links_count": 5,
      "objectID": "1971"
    },
    {
      "name": "Aitutaki",
      "city": "Aitutaki",
      "country": "Cook Islands",
      "iata_code": "AIT",
      "_geoloc": {
        "latitude": -18.830922,
        "longitude": -159.764233
      },
      "links_count": 5,
      "objectID": "1958"
    },
    {
      "name": "Gerrard Smith Intl",
      "city": "Cayman Barac",
      "country": "Cayman Islands",
      "iata_code": "CYB",
      "_geoloc": {
        "latitude": 19.686981,
        "longitude": -79.882789
      },
      "links_count": 5,
      "objectID": "1925"
    },
    {
      "name": "Vilo Acuna Intl",
      "city": "Cayo Largo del Sur",
      "country": "Cuba",
      "iata_code": "CYO",
      "_geoloc": {
        "latitude": 21.616453,
        "longitude": -81.545989
      },
      "links_count": 5,
      "objectID": "1903"
    },
    {
      "name": "Bocas Del Toro Intl",
      "city": "Bocas Del Toro",
      "country": "Panama",
      "iata_code": "BOC",
      "_geoloc": {
        "latitude": 9.340853,
        "longitude": -82.250842
      },
      "links_count": 5,
      "objectID": "1865"
    },
    {
      "name": "Kisumu",
      "city": "Kisumu",
      "country": "Kenya",
      "iata_code": "KIS",
      "_geoloc": {
        "latitude": -0.086139,
        "longitude": 34.728892
      },
      "links_count": 5,
      "objectID": "1140"
    },
    {
      "name": "Kisangani Simisini",
      "city": "Kisangani",
      "country": "Congo (Kinshasa)",
      "iata_code": "FKI",
      "_geoloc": {
        "latitude": 0.5175,
        "longitude": 25.155014
      },
      "links_count": 5,
      "objectID": "1031"
    },
    {
      "name": "Mbandaka",
      "city": "Mbandaka",
      "country": "Congo (Kinshasa)",
      "iata_code": "MDK",
      "_geoloc": {
        "latitude": 0.0226,
        "longitude": 18.288744
      },
      "links_count": 5,
      "objectID": "1026"
    },
    {
      "name": "High Level",
      "city": "High Level",
      "country": "Canada",
      "iata_code": "YOJ",
      "_geoloc": {
        "latitude": 58.621389,
        "longitude": -117.164722
      },
      "links_count": 4,
      "objectID": "99"
    },
    {
      "name": "Lichinga",
      "city": "Lichinga",
      "country": "Mozambique",
      "iata_code": "VXC",
      "_geoloc": {
        "latitude": -13.273986,
        "longitude": 35.266262
      },
      "links_count": 4,
      "objectID": "977"
    },
    {
      "name": "Saurimo",
      "city": "Saurimo",
      "country": "Angola",
      "iata_code": "VHC",
      "_geoloc": {
        "latitude": -9.689067,
        "longitude": 20.431875
      },
      "links_count": 4,
      "objectID": "957"
    },
    {
      "name": "Malanje",
      "city": "Malanje",
      "country": "Angola",
      "iata_code": "MEG",
      "_geoloc": {
        "latitude": -9.525086,
        "longitude": 16.312406
      },
      "links_count": 4,
      "objectID": "952"
    },
    {
      "name": "Kuito",
      "city": "Kuito",
      "country": "Angola",
      "iata_code": "SVP",
      "_geoloc": {
        "latitude": -12.404633,
        "longitude": 16.947414
      },
      "links_count": 4,
      "objectID": "949"
    },
    {
      "name": "Tolagnaro",
      "city": "Tolagnaro",
      "country": "Madagascar",
      "iata_code": "FTU",
      "_geoloc": {
        "latitude": -25.038056,
        "longitude": 46.956111
      },
      "links_count": 4,
      "objectID": "937"
    },
    {
      "name": "Gannan",
      "city": "Xiahe city",
      "country": "China",
      "iata_code": "GXH",
      "_geoloc": {
        "latitude": 34.4909,
        "longitude": 102.3719
      },
      "links_count": 4,
      "objectID": "9311"
    },
    {
      "name": "Bingol",
      "city": "Bingol",
      "country": "Turkey",
      "iata_code": "BGG",
      "_geoloc": {
        "latitude": 38.86111,
        "longitude": 40.5925
      },
      "links_count": 4,
      "objectID": "9272"
    },
    {
      "name": "Morondava",
      "city": "Morondava",
      "country": "Madagascar",
      "iata_code": "MOQ",
      "_geoloc": {
        "latitude": -20.28475,
        "longitude": 44.317614
      },
      "links_count": 4,
      "objectID": "922"
    },
    {
      "name": "Igdir",
      "city": "Igdir",
      "country": "Turkey",
      "iata_code": "IGD",
      "_geoloc": {
        "latitude": 39.983056,
        "longitude": 43.866389
      },
      "links_count": 4,
      "objectID": "9043"
    },
    {
      "name": "Garoua",
      "city": "Garoua",
      "country": "Cameroon",
      "iata_code": "GOU",
      "_geoloc": {
        "latitude": 9.335892,
        "longitude": 13.370103
      },
      "links_count": 4,
      "objectID": "901"
    },
    {
      "name": "Sir Bani Yas Island",
      "city": "Sir Bani Yas Island",
      "country": "United Arab Emirates",
      "iata_code": "XSB",
      "_geoloc": {
        "latitude": 24.2856083,
        "longitude": 52.5783472
      },
      "links_count": 4,
      "objectID": "8961"
    },
    {
      "name": "Bodaibo",
      "city": "Bodaibo",
      "country": "Russia",
      "iata_code": "ODO",
      "_geoloc": {
        "latitude": 57.5137,
        "longitude": 114.1348
      },
      "links_count": 4,
      "objectID": "8944"
    },
    {
      "name": "Bata",
      "city": "Bata",
      "country": "Equatorial Guinea",
      "iata_code": "BSG",
      "_geoloc": {
        "latitude": 1.905469,
        "longitude": 9.805681
      },
      "links_count": 4,
      "objectID": "890"
    },
    {
      "name": "Kooddoo",
      "city": "Kooddoo",
      "country": "Maldives",
      "iata_code": "GKK",
      "_geoloc": {
        "latitude": 0.7308,
        "longitude": 73.433
      },
      "links_count": 4,
      "objectID": "8892"
    },
    {
      "name": "Lankaran International Airport",
      "city": "Lankaran",
      "country": "Azerbaijan",
      "iata_code": "LLK",
      "_geoloc": {
        "latitude": 38.746389,
        "longitude": 48.817778
      },
      "links_count": 4,
      "objectID": "8774"
    },
    {
      "name": "Francistown",
      "city": "Francistown",
      "country": "Botswana",
      "iata_code": "FRW",
      "_geoloc": {
        "latitude": -21.159597,
        "longitude": 27.474525
      },
      "links_count": 4,
      "objectID": "877"
    },
    {
      "name": "Upington",
      "city": "Upington",
      "country": "South Africa",
      "iata_code": "UTN",
      "_geoloc": {
        "latitude": -28.399097,
        "longitude": 21.260239
      },
      "links_count": 4,
      "objectID": "865"
    },
    {
      "name": "Prince Abdul Majeed Airport",
      "city": "Al-Ula",
      "country": "Saudi Arabia",
      "iata_code": "ULH",
      "_geoloc": {
        "latitude": 26.636718,
        "longitude": 37.908018
      },
      "links_count": 4,
      "objectID": "8381"
    },
    {
      "name": "Carlos Alberto da Costa Neves Airport",
      "city": "Cacador",
      "country": "Brazil",
      "iata_code": "CFC",
      "_geoloc": {
        "latitude": -26.788333,
        "longitude": -50.939722
      },
      "links_count": 4,
      "objectID": "8244"
    },
    {
      "name": "Arctic Bay Airport",
      "city": "Arctic Bay",
      "country": "Canada",
      "iata_code": "YAB",
      "_geoloc": {
        "latitude": 73.006389,
        "longitude": -85.047222
      },
      "links_count": 4,
      "objectID": "8225"
    },
    {
      "name": "Kegaska Airport",
      "city": "Kegaska",
      "country": "Canada",
      "iata_code": "ZKG",
      "_geoloc": {
        "latitude": 50.195833,
        "longitude": -61.265833
      },
      "links_count": 4,
      "objectID": "8217"
    },
    {
      "name": "Newtok Airport",
      "city": "Newtok",
      "country": "United States",
      "iata_code": "WWT",
      "_geoloc": {
        "latitude": 60.939167,
        "longitude": -164.641111
      },
      "links_count": 4,
      "objectID": "8203"
    },
    {
      "name": "Zona da Mata Regional Airport",
      "city": "Juiz de Fora",
      "country": "Brazil",
      "iata_code": "IZA",
      "_geoloc": {
        "latitude": -21.5130558014,
        "longitude": -43.1730575562
      },
      "links_count": 4,
      "objectID": "8180"
    },
    {
      "name": "Friday Harbor Seaplane Base",
      "city": "Friday Harbor",
      "country": "United States",
      "iata_code": "FBS",
      "_geoloc": {
        "latitude": 48.537222,
        "longitude": -123.009722
      },
      "links_count": 4,
      "objectID": "8174"
    },
    {
      "name": "Westsound Seaplane Base",
      "city": "Westsound",
      "country": "United States",
      "iata_code": "WSX",
      "_geoloc": {
        "latitude": 48.617778,
        "longitude": -122.952778
      },
      "links_count": 4,
      "objectID": "8173"
    },
    {
      "name": "Roche Harbor Seaplane Base",
      "city": "Roche Harbor",
      "country": "United States",
      "iata_code": "RCE",
      "_geoloc": {
        "latitude": 48.608056,
        "longitude": -123.159722
      },
      "links_count": 4,
      "objectID": "8170"
    },
    {
      "name": "Kimberley",
      "city": "Kimberley",
      "country": "South Africa",
      "iata_code": "KIM",
      "_geoloc": {
        "latitude": -28.802834,
        "longitude": 24.765167
      },
      "links_count": 4,
      "objectID": "815"
    },
    {
      "name": "NAYPYITAW",
      "city": "NAYPYITAW",
      "country": "Burma",
      "iata_code": "NYT",
      "_geoloc": {
        "latitude": 19.374,
        "longitude": 96.121
      },
      "links_count": 4,
      "objectID": "8130"
    },
    {
      "name": "Hoedspruit Afb",
      "city": "Hoedspruit",
      "country": "South Africa",
      "iata_code": "HDS",
      "_geoloc": {
        "latitude": -24.368642,
        "longitude": 31.048744
      },
      "links_count": 4,
      "objectID": "811"
    },
    {
      "name": "Zhongwei Xiangshan Airport",
      "city": "Zhongwei",
      "country": "China",
      "iata_code": "ZHY",
      "_geoloc": {
        "latitude": 37.5728,
        "longitude": 105.1544
      },
      "links_count": 4,
      "objectID": "8043"
    },
    {
      "name": "Gunsa",
      "city": "Shiquanhe",
      "country": "China",
      "iata_code": "NGQ",
      "_geoloc": {
        "latitude": 32.10027,
        "longitude": 80.052778
      },
      "links_count": 4,
      "objectID": "7932"
    },
    {
      "name": "Yushu Batang",
      "city": "Yushu",
      "country": "China",
      "iata_code": "YUS",
      "_geoloc": {
        "latitude": 32.825,
        "longitude": 97.125
      },
      "links_count": 4,
      "objectID": "7894"
    },
    {
      "name": "Belbek Sevastopol International Airport",
      "city": "Sevastopol",
      "country": "Ukraine",
      "iata_code": "UKS",
      "_geoloc": {
        "latitude": 44.691431,
        "longitude": 33.57567
      },
      "links_count": 4,
      "objectID": "7863"
    },
    {
      "name": "Zonguldak",
      "city": "Zonguldak",
      "country": "Turkey",
      "iata_code": "ONQ",
      "_geoloc": {
        "latitude": 41.506111,
        "longitude": 32.088611
      },
      "links_count": 4,
      "objectID": "7821"
    },
    {
      "name": "Cotopaxi International Airport",
      "city": "Latacunga",
      "country": "Ecuador",
      "iata_code": "LTX",
      "_geoloc": {
        "latitude": -0.5425,
        "longitude": -78.3657
      },
      "links_count": 4,
      "objectID": "7695"
    },
    {
      "name": "Morristown Municipal Airport",
      "city": "Morristown",
      "country": "United States",
      "iata_code": "MMU",
      "_geoloc": {
        "latitude": 40.79935,
        "longitude": -74.4148747
      },
      "links_count": 4,
      "objectID": "7657"
    },
    {
      "name": "Rundu",
      "city": "Rundu",
      "country": "Namibia",
      "iata_code": "NDU",
      "_geoloc": {
        "latitude": -17.956461,
        "longitude": 19.719439
      },
      "links_count": 4,
      "objectID": "7634"
    },
    {
      "name": "Santa Ana Airport",
      "city": "Santa Ana",
      "country": "Solomon Islands",
      "iata_code": "NNB",
      "_geoloc": {
        "latitude": -10.848056,
        "longitude": 162.454167
      },
      "links_count": 4,
      "objectID": "7618"
    },
    {
      "name": "Ulawa Airport",
      "city": "Ulawa",
      "country": "Solomon Islands",
      "iata_code": "RNA",
      "_geoloc": {
        "latitude": -9.854722,
        "longitude": 161.979167
      },
      "links_count": 4,
      "objectID": "7616"
    },
    {
      "name": "Cachimbo",
      "city": "Itaituba",
      "country": "Brazil",
      "iata_code": "ITB",
      "_geoloc": {
        "latitude": -4.2446,
        "longitude": -56.00384
      },
      "links_count": 4,
      "objectID": "7534"
    },
    {
      "name": "Wenshan Airport",
      "city": "Wenshan",
      "country": "China",
      "iata_code": "WNH",
      "_geoloc": {
        "latitude": 23.375833,
        "longitude": 104.243056
      },
      "links_count": 4,
      "objectID": "7528"
    },
    {
      "name": "Lincang Airport",
      "city": "Lincang",
      "country": "China",
      "iata_code": "LNJ",
      "_geoloc": {
        "latitude": 23.738333,
        "longitude": 100.025
      },
      "links_count": 4,
      "objectID": "7527"
    },
    {
      "name": "Baoshan Airport",
      "city": "Baoshan",
      "country": "China",
      "iata_code": "BSD",
      "_geoloc": {
        "latitude": 25.053333,
        "longitude": 99.168333
      },
      "links_count": 4,
      "objectID": "7505"
    },
    {
      "name": "Okha Airport",
      "city": "Okha",
      "country": "Russia",
      "iata_code": "OHH",
      "_geoloc": {
        "latitude": 53.583333,
        "longitude": 142.933333
      },
      "links_count": 4,
      "objectID": "7479"
    },
    {
      "name": "Foshan",
      "city": "Foshan",
      "country": "China",
      "iata_code": "FUO",
      "_geoloc": {
        "latitude": 23.133333,
        "longitude": 113.28333
      },
      "links_count": 4,
      "objectID": "7457"
    },
    {
      "name": "Raivavae Airport",
      "city": "Raivavae",
      "country": "French Polynesia",
      "iata_code": "RVV",
      "_geoloc": {
        "latitude": -23.87,
        "longitude": -147.67
      },
      "links_count": 4,
      "objectID": "7456"
    },
    {
      "name": "Kungsangen",
      "city": "Norrkoeping",
      "country": "Sweden",
      "iata_code": "NRK",
      "_geoloc": {
        "latitude": 58.586253,
        "longitude": 16.250622
      },
      "links_count": 4,
      "objectID": "743"
    },
    {
      "name": "Saab",
      "city": "Linkoeping",
      "country": "Sweden",
      "iata_code": "LPI",
      "_geoloc": {
        "latitude": 58.40615,
        "longitude": 15.680508
      },
      "links_count": 4,
      "objectID": "742"
    },
    {
      "name": "Borlange",
      "city": "Borlange",
      "country": "Sweden",
      "iata_code": "BLE",
      "_geoloc": {
        "latitude": 60.422017,
        "longitude": 15.515211
      },
      "links_count": 4,
      "objectID": "739"
    },
    {
      "name": "La Chorrera Airport",
      "city": "La Chorrera",
      "country": "Colombia",
      "iata_code": "LCR",
      "_geoloc": {
        "latitude": -0.733333,
        "longitude": -73.016667
      },
      "links_count": 4,
      "objectID": "7356"
    },
    {
      "name": "Los Colonizadores Airport",
      "city": "Saravena",
      "country": "Colombia",
      "iata_code": "RVE",
      "_geoloc": {
        "latitude": 6.916667,
        "longitude": -71.9
      },
      "links_count": 4,
      "objectID": "7355"
    },
    {
      "name": "Rurrenabaque Airport",
      "city": "Rerrenabaque",
      "country": "Bolivia",
      "iata_code": "RBQ",
      "_geoloc": {
        "latitude": -14.4275,
        "longitude": -67.498056
      },
      "links_count": 4,
      "objectID": "7317"
    },
    {
      "name": "Orebro",
      "city": "Orebro",
      "country": "Sweden",
      "iata_code": "ORB",
      "_geoloc": {
        "latitude": 59.223733,
        "longitude": 15.037956
      },
      "links_count": 4,
      "objectID": "731"
    },
    {
      "name": "Arvidsjaur",
      "city": "Arvidsjaur",
      "country": "Sweden",
      "iata_code": "AJR",
      "_geoloc": {
        "latitude": 65.590278,
        "longitude": 19.281944
      },
      "links_count": 4,
      "objectID": "730"
    },
    {
      "name": "Rainbow Lake Airport",
      "city": "Rainbow Lake",
      "country": "Canada",
      "iata_code": "YOP",
      "_geoloc": {
        "latitude": 58.491389,
        "longitude": -119.407778
      },
      "links_count": 4,
      "objectID": "7266"
    },
    {
      "name": "Kangiqsujuaq - Wakeham Bay Airport",
      "city": "Kangiqsujuaq",
      "country": "Canada",
      "iata_code": "YWB",
      "_geoloc": {
        "latitude": 61.588611,
        "longitude": -71.929444
      },
      "links_count": 4,
      "objectID": "7253"
    },
    {
      "name": "Sleetmute Airport",
      "city": "Sleetmute",
      "country": "United States",
      "iata_code": "SLQ",
      "_geoloc": {
        "latitude": 61.700566,
        "longitude": -157.165833
      },
      "links_count": 4,
      "objectID": "7240"
    },
    {
      "name": "Wainwright Airport",
      "city": "Wainwright",
      "country": "United States",
      "iata_code": "AIN",
      "_geoloc": {
        "latitude": 70.638056,
        "longitude": -159.994722
      },
      "links_count": 4,
      "objectID": "7220"
    },
    {
      "name": "Nunapitchuk Airport",
      "city": "Nunapitchuk",
      "country": "United States",
      "iata_code": "NUP",
      "_geoloc": {
        "latitude": 60.905833,
        "longitude": -162.439167
      },
      "links_count": 4,
      "objectID": "7212"
    },
    {
      "name": "Koyukuk Airport",
      "city": "Koyukuk",
      "country": "United States",
      "iata_code": "KYU",
      "_geoloc": {
        "latitude": 64.875833,
        "longitude": -157.730556
      },
      "links_count": 4,
      "objectID": "7208"
    },
    {
      "name": "Sheldon Point Airport",
      "city": "Nunam Iqua",
      "country": "United States",
      "iata_code": "SXP",
      "_geoloc": {
        "latitude": 62.520556,
        "longitude": -164.847778
      },
      "links_count": 4,
      "objectID": "7200"
    },
    {
      "name": "Alakanuk Airport",
      "city": "Alakanuk",
      "country": "United States",
      "iata_code": "AUK",
      "_geoloc": {
        "latitude": 62.68,
        "longitude": -164.66
      },
      "links_count": 4,
      "objectID": "7199"
    },
    {
      "name": "Selawik Airport",
      "city": "Selawik",
      "country": "United States",
      "iata_code": "WLK",
      "_geoloc": {
        "latitude": 66.6,
        "longitude": -159.985833
      },
      "links_count": 4,
      "objectID": "7182"
    },
    {
      "name": "Ouzinkie Airport",
      "city": "Ouzinkie",
      "country": "United States",
      "iata_code": "KOZ",
      "_geoloc": {
        "latitude": 57.922876,
        "longitude": -152.500511
      },
      "links_count": 4,
      "objectID": "7164"
    },
    {
      "name": "Sveg",
      "city": "Sveg",
      "country": "Sweden",
      "iata_code": "EVG",
      "_geoloc": {
        "latitude": 62.047811,
        "longitude": 14.42295
      },
      "links_count": 4,
      "objectID": "714"
    },
    {
      "name": "Beaver Airport",
      "city": "Beaver",
      "country": "United States",
      "iata_code": "WBQ",
      "_geoloc": {
        "latitude": 66.362222,
        "longitude": -147.406667
      },
      "links_count": 4,
      "objectID": "7115"
    },
    {
      "name": "Venetie Airport",
      "city": "Venetie",
      "country": "United States",
      "iata_code": "VEE",
      "_geoloc": {
        "latitude": 67.008611,
        "longitude": -146.366389
      },
      "links_count": 4,
      "objectID": "7114"
    },
    {
      "name": "Hughes Airport",
      "city": "Hughes",
      "country": "United States",
      "iata_code": "HUS",
      "_geoloc": {
        "latitude": 66.039167,
        "longitude": -154.264722
      },
      "links_count": 4,
      "objectID": "7107"
    },
    {
      "name": "Chalkyitsik Airport",
      "city": "Chalkyitsik",
      "country": "United States",
      "iata_code": "CIK",
      "_geoloc": {
        "latitude": 66.645,
        "longitude": -143.74
      },
      "links_count": 4,
      "objectID": "7105"
    },
    {
      "name": "Tuntutuliak Airport",
      "city": "Tuntutuliak",
      "country": "United States",
      "iata_code": "WTL",
      "_geoloc": {
        "latitude": 60.335278,
        "longitude": -162.666944
      },
      "links_count": 4,
      "objectID": "7099"
    },
    {
      "name": "Marshall Don Hunter Sr. Airport",
      "city": "Marshall",
      "country": "United States",
      "iata_code": "MLL",
      "_geoloc": {
        "latitude": 61.8646418,
        "longitude": -162.026111
      },
      "links_count": 4,
      "objectID": "7097"
    },
    {
      "name": "Kasigluk Airport",
      "city": "Kasigluk",
      "country": "United States",
      "iata_code": "KUK",
      "_geoloc": {
        "latitude": 60.873333,
        "longitude": -162.524444
      },
      "links_count": 4,
      "objectID": "7094"
    },
    {
      "name": "Nuiqsut Airport",
      "city": "Nuiqsut",
      "country": "United States",
      "iata_code": "NUI",
      "_geoloc": {
        "latitude": 70.21,
        "longitude": -151.005556
      },
      "links_count": 4,
      "objectID": "7092"
    },
    {
      "name": "Mammoth Yosemite Airport",
      "city": "Mammoth Lakes",
      "country": "United States",
      "iata_code": "MMH",
      "_geoloc": {
        "latitude": 37.624049,
        "longitude": -118.837772
      },
      "links_count": 4,
      "objectID": "7081"
    },
    {
      "name": "Dickinson Theodore Roosevelt Regional Airport",
      "city": "Dickinson",
      "country": "United States",
      "iata_code": "DIK",
      "_geoloc": {
        "latitude": 46.7975,
        "longitude": -102.801944
      },
      "links_count": 4,
      "objectID": "7064"
    },
    {
      "name": "Chautauqua County-Jamestown",
      "city": "Jamestown",
      "country": "United States",
      "iata_code": "JHW",
      "_geoloc": {
        "latitude": 42.153333,
        "longitude": -79.258056
      },
      "links_count": 4,
      "objectID": "7059"
    },
    {
      "name": "Barataevka",
      "city": "Ulyanovsk",
      "country": "Russia",
      "iata_code": "ULV",
      "_geoloc": {
        "latitude": 54.268299,
        "longitude": 48.2267
      },
      "links_count": 4,
      "objectID": "7003"
    },
    {
      "name": "Aspen Pitkin County Sardy Field",
      "city": "Aspen",
      "country": "United States",
      "iata_code": "ASE",
      "_geoloc": {
        "latitude": 39.2232,
        "longitude": -106.869
      },
      "links_count": 4,
      "objectID": "7001"
    },
    {
      "name": "Mora",
      "city": "Mora",
      "country": "Sweden",
      "iata_code": "MXX",
      "_geoloc": {
        "latitude": 60.957908,
        "longitude": 14.511383
      },
      "links_count": 4,
      "objectID": "698"
    },
    {
      "name": "Warri Airport",
      "city": "Osubi",
      "country": "Nigeria",
      "iata_code": "QRW",
      "_geoloc": {
        "latitude": 5.31,
        "longitude": 5.45
      },
      "links_count": 4,
      "objectID": "6972"
    },
    {
      "name": "Pitt-Greenville Airport",
      "city": "Greenville",
      "country": "United States",
      "iata_code": "PGV",
      "_geoloc": {
        "latitude": 35.635278,
        "longitude": -77.385278
      },
      "links_count": 4,
      "objectID": "6959"
    },
    {
      "name": "Greenbrier Valley Airport",
      "city": "Lewisburg",
      "country": "United States",
      "iata_code": "LWB",
      "_geoloc": {
        "latitude": 37.858333,
        "longitude": -80.399444
      },
      "links_count": 4,
      "objectID": "6958"
    },
    {
      "name": "Brainerd Lakes Rgnl",
      "city": "Brainerd",
      "country": "United States",
      "iata_code": "BRD",
      "_geoloc": {
        "latitude": 46.398308,
        "longitude": -94.138078
      },
      "links_count": 4,
      "objectID": "6957"
    },
    {
      "name": "Altay Airport",
      "city": "Altay",
      "country": "China",
      "iata_code": "AAT",
      "_geoloc": {
        "latitude": 47.866667,
        "longitude": 88.116667
      },
      "links_count": 4,
      "objectID": "6946"
    },
    {
      "name": "Rimatara",
      "city": "Rimatara",
      "country": "French Polynesia",
      "iata_code": "RMT",
      "_geoloc": {
        "latitude": -22.637253,
        "longitude": -152.805192
      },
      "links_count": 4,
      "objectID": "6926"
    },
    {
      "name": "Ust-Kut",
      "city": "Ust-Kut",
      "country": "Russia",
      "iata_code": "UKX",
      "_geoloc": {
        "latitude": 56.85,
        "longitude": 105.7167
      },
      "links_count": 4,
      "objectID": "6924"
    },
    {
      "name": "Bellona",
      "city": "Bellona",
      "country": "Solomon Islands",
      "iata_code": "BNY",
      "_geoloc": {
        "latitude": -11.302,
        "longitude": 159.8
      },
      "links_count": 4,
      "objectID": "6919"
    },
    {
      "name": "Jonkoping",
      "city": "Joenkoeping",
      "country": "Sweden",
      "iata_code": "JKG",
      "_geoloc": {
        "latitude": 57.757594,
        "longitude": 14.068731
      },
      "links_count": 4,
      "objectID": "688"
    },
    {
      "name": "Ford Airport",
      "city": "Iron Mountain",
      "country": "United States",
      "iata_code": "IMT",
      "_geoloc": {
        "latitude": 45.8183611,
        "longitude": -88.1145556
      },
      "links_count": 4,
      "objectID": "6837"
    },
    {
      "name": "Yakutat",
      "city": "Yakutat",
      "country": "United States",
      "iata_code": "YAK",
      "_geoloc": {
        "latitude": 59.3012,
        "longitude": -139.3937
      },
      "links_count": 4,
      "objectID": "6803"
    },
    {
      "name": "Taree Airport",
      "city": "Taree",
      "country": "Australia",
      "iata_code": "TRO",
      "_geoloc": {
        "latitude": -31.8886,
        "longitude": 152.514
      },
      "links_count": 4,
      "objectID": "6794"
    },
    {
      "name": "Katima Mulilo Airport",
      "city": "Mpacha",
      "country": "Namibia",
      "iata_code": "MPA",
      "_geoloc": {
        "latitude": -17.6344,
        "longitude": 24.1767
      },
      "links_count": 4,
      "objectID": "6779"
    },
    {
      "name": "Long Akah Airport",
      "city": "Long Akah",
      "country": "Malaysia",
      "iata_code": "LKH",
      "_geoloc": {
        "latitude": 3.3,
        "longitude": 114.783
      },
      "links_count": 4,
      "objectID": "6769"
    },
    {
      "name": "Geneina Airport",
      "city": "Geneina",
      "country": "Sudan",
      "iata_code": "EGN",
      "_geoloc": {
        "latitude": 13.4817,
        "longitude": 22.4672
      },
      "links_count": 4,
      "objectID": "6768"
    },
    {
      "name": "Kangra Airport",
      "city": "Kangra",
      "country": "India",
      "iata_code": "DHM",
      "_geoloc": {
        "latitude": 32.1651,
        "longitude": 76.2634
      },
      "links_count": 4,
      "objectID": "6760"
    },
    {
      "name": "Tacheng Airport",
      "city": "Tacheng",
      "country": "China",
      "iata_code": "TCG",
      "_geoloc": {
        "latitude": 46.6725,
        "longitude": 83.3408
      },
      "links_count": 4,
      "objectID": "6752"
    },
    {
      "name": "Sand Point Airport",
      "city": "Sand Point",
      "country": "United States",
      "iata_code": "SDP",
      "_geoloc": {
        "latitude": 55.315,
        "longitude": -160.523
      },
      "links_count": 4,
      "objectID": "6742"
    },
    {
      "name": "Gorakhpur Airport",
      "city": "Gorakhpur",
      "country": "India",
      "iata_code": "GOP",
      "_geoloc": {
        "latitude": 26.739708,
        "longitude": 83.449708
      },
      "links_count": 4,
      "objectID": "6741"
    },
    {
      "name": "Araracuara Airport",
      "city": "Araracuara",
      "country": "Colombia",
      "iata_code": "ACR",
      "_geoloc": {
        "latitude": -0.58,
        "longitude": -72.41
      },
      "links_count": 4,
      "objectID": "6740"
    },
    {
      "name": "Hagerstown Regional Richard A Henson Field",
      "city": "Hagerstown",
      "country": "United States",
      "iata_code": "HGR",
      "_geoloc": {
        "latitude": 39.7079,
        "longitude": -77.7295
      },
      "links_count": 4,
      "objectID": "6739"
    },
    {
      "name": "Pajala Airport",
      "city": "Pajala",
      "country": "Sweden",
      "iata_code": "PJA",
      "_geoloc": {
        "latitude": 67.2456,
        "longitude": 23.0689
      },
      "links_count": 4,
      "objectID": "6737"
    },
    {
      "name": "Imo Airport",
      "city": "Imo",
      "country": "Nigeria",
      "iata_code": "QOW",
      "_geoloc": {
        "latitude": 5.42706,
        "longitude": 7.20603
      },
      "links_count": 4,
      "objectID": "6730"
    },
    {
      "name": "Tasiujaq Airport",
      "city": "Tasiujaq",
      "country": "Canada",
      "iata_code": "YTQ",
      "_geoloc": {
        "latitude": 58.6678,
        "longitude": -69.9558
      },
      "links_count": 4,
      "objectID": "6728"
    },
    {
      "name": "Hooper Bay Airport",
      "city": "Hooper Bay",
      "country": "United States",
      "iata_code": "HPB",
      "_geoloc": {
        "latitude": 61.5239,
        "longitude": -166.147
      },
      "links_count": 4,
      "objectID": "6716"
    },
    {
      "name": "Atqasuk Edward Burnell Sr Memorial Airport",
      "city": "Atqasuk",
      "country": "United States",
      "iata_code": "ATK",
      "_geoloc": {
        "latitude": 70.4673,
        "longitude": -157.436
      },
      "links_count": 4,
      "objectID": "6714"
    },
    {
      "name": "Banak",
      "city": "Lakselv",
      "country": "Norway",
      "iata_code": "LKL",
      "_geoloc": {
        "latitude": 70.068814,
        "longitude": 24.973489
      },
      "links_count": 4,
      "objectID": "653"
    },
    {
      "name": "Hasvik",
      "city": "Hasvik",
      "country": "Norway",
      "iata_code": "HAA",
      "_geoloc": {
        "latitude": 70.486675,
        "longitude": 22.139744
      },
      "links_count": 4,
      "objectID": "646"
    },
    {
      "name": "Worcester Regional Airport",
      "city": "Worcester",
      "country": "United States",
      "iata_code": "ORH",
      "_geoloc": {
        "latitude": 42.2673,
        "longitude": -71.8757
      },
      "links_count": 4,
      "objectID": "6426"
    },
    {
      "name": "Karamay Airport",
      "city": "Karamay",
      "country": "China",
      "iata_code": "KRY",
      "_geoloc": {
        "latitude": 45.617,
        "longitude": 84.883
      },
      "links_count": 4,
      "objectID": "6408"
    },
    {
      "name": "Kuqa Airport",
      "city": "Kuqa",
      "country": "China",
      "iata_code": "KCA",
      "_geoloc": {
        "latitude": 41.7181,
        "longitude": 82.9869
      },
      "links_count": 4,
      "objectID": "6406"
    },
    {
      "name": "Muren Airport",
      "city": "Muren",
      "country": "Mongolia",
      "iata_code": "MXV",
      "_geoloc": {
        "latitude": 49.6633,
        "longitude": 100.099
      },
      "links_count": 4,
      "objectID": "6374"
    },
    {
      "name": "Bayankhongor Airport",
      "city": "Bayankhongor",
      "country": "Mongolia",
      "iata_code": "BYN",
      "_geoloc": {
        "latitude": 46.1633,
        "longitude": 100.704
      },
      "links_count": 4,
      "objectID": "6371"
    },
    {
      "name": "Golmud Airport",
      "city": "Golmud",
      "country": "China",
      "iata_code": "GOQ",
      "_geoloc": {
        "latitude": 34.633,
        "longitude": 98.867
      },
      "links_count": 4,
      "objectID": "6363"
    },
    {
      "name": "Winton Airport",
      "city": "Winton",
      "country": "Australia",
      "iata_code": "WIN",
      "_geoloc": {
        "latitude": -22.3636,
        "longitude": 143.086
      },
      "links_count": 4,
      "objectID": "6337"
    },
    {
      "name": "Windorah Airport",
      "city": "Windorah",
      "country": "Australia",
      "iata_code": "WNR",
      "_geoloc": {
        "latitude": -25.4131,
        "longitude": 142.667
      },
      "links_count": 4,
      "objectID": "6333"
    },
    {
      "name": "St George Airport",
      "city": "St George",
      "country": "Australia",
      "iata_code": "SGO",
      "_geoloc": {
        "latitude": -28.0497,
        "longitude": 148.595
      },
      "links_count": 4,
      "objectID": "6325"
    },
    {
      "name": "Quilpie Airport",
      "city": "Quilpie",
      "country": "Australia",
      "iata_code": "ULP",
      "_geoloc": {
        "latitude": -26.6122,
        "longitude": 144.253
      },
      "links_count": 4,
      "objectID": "6322"
    },
    {
      "name": "Pormpuraaw Airport",
      "city": "Pormpuraaw",
      "country": "Australia",
      "iata_code": "EDR",
      "_geoloc": {
        "latitude": -14.8967,
        "longitude": 141.609
      },
      "links_count": 4,
      "objectID": "6319"
    },
    {
      "name": "Port Lincoln Airport",
      "city": "Port Lincoln",
      "country": "Australia",
      "iata_code": "PLO",
      "_geoloc": {
        "latitude": -34.6053,
        "longitude": 135.88
      },
      "links_count": 4,
      "objectID": "6318"
    },
    {
      "name": "Parkes Airport",
      "city": "Parkes",
      "country": "Australia",
      "iata_code": "PKE",
      "_geoloc": {
        "latitude": -33.1314,
        "longitude": 148.239
      },
      "links_count": 4,
      "objectID": "6317"
    },
    {
      "name": "Newman Airport",
      "city": "Newman",
      "country": "Australia",
      "iata_code": "ZNE",
      "_geoloc": {
        "latitude": -23.4178,
        "longitude": 119.803
      },
      "links_count": 4,
      "objectID": "6310"
    },
    {
      "name": "Normanton Airport",
      "city": "Normanton",
      "country": "Australia",
      "iata_code": "NTN",
      "_geoloc": {
        "latitude": -17.6836,
        "longitude": 141.07
      },
      "links_count": 4,
      "objectID": "6309"
    },
    {
      "name": "Narrandera Airport",
      "city": "Narrandera",
      "country": "Australia",
      "iata_code": "NRA",
      "_geoloc": {
        "latitude": -34.7022,
        "longitude": 146.512
      },
      "links_count": 4,
      "objectID": "6307"
    },
    {
      "name": "Mount Gambier Airport",
      "city": "Mount Gambier",
      "country": "Australia",
      "iata_code": "MGB",
      "_geoloc": {
        "latitude": -37.7456,
        "longitude": 140.785
      },
      "links_count": 4,
      "objectID": "6303"
    },
    {
      "name": "Moruya Airport",
      "city": "Moruya",
      "country": "Australia",
      "iata_code": "MYA",
      "_geoloc": {
        "latitude": -35.8978,
        "longitude": 150.144
      },
      "links_count": 4,
      "objectID": "6302"
    },
    {
      "name": "Gaspe",
      "city": "Gaspe",
      "country": "Canada",
      "iata_code": "YGP",
      "_geoloc": {
        "latitude": 48.775278,
        "longitude": -64.478611
      },
      "links_count": 4,
      "objectID": "63"
    },
    {
      "name": "Lockhart River Airport",
      "city": "Lockhart River",
      "country": "Australia",
      "iata_code": "IRG",
      "_geoloc": {
        "latitude": -12.7869,
        "longitude": 143.305
      },
      "links_count": 4,
      "objectID": "6286"
    },
    {
      "name": "Kowanyama Airport",
      "city": "Kowanyama",
      "country": "Australia",
      "iata_code": "KWM",
      "_geoloc": {
        "latitude": -15.4856,
        "longitude": 141.751
      },
      "links_count": 4,
      "objectID": "6281"
    },
    {
      "name": "King Island Airport",
      "city": "King Island",
      "country": "Australia",
      "iata_code": "KNS",
      "_geoloc": {
        "latitude": -39.8775,
        "longitude": 143.878
      },
      "links_count": 4,
      "objectID": "6278"
    },
    {
      "name": "Julia Creek Airport",
      "city": "Julia Creek",
      "country": "Australia",
      "iata_code": "JCK",
      "_geoloc": {
        "latitude": -20.6683,
        "longitude": 141.723
      },
      "links_count": 4,
      "objectID": "6276"
    },
    {
      "name": "Griffith Airport",
      "city": "Griffith",
      "country": "Australia",
      "iata_code": "GFF",
      "_geoloc": {
        "latitude": -34.2508,
        "longitude": 146.067
      },
      "links_count": 4,
      "objectID": "6271"
    },
    {
      "name": "Cunnamulla Airport",
      "city": "Cunnamulla",
      "country": "Australia",
      "iata_code": "CMA",
      "_geoloc": {
        "latitude": -28.03,
        "longitude": 145.622
      },
      "links_count": 4,
      "objectID": "6258"
    },
    {
      "name": "Bathurst Airport",
      "city": "Bathurst",
      "country": "Australia",
      "iata_code": "BHS",
      "_geoloc": {
        "latitude": -33.4094,
        "longitude": 149.652
      },
      "links_count": 4,
      "objectID": "6249"
    },
    {
      "name": "Boulia Airport",
      "city": "Boulia",
      "country": "Australia",
      "iata_code": "BQL",
      "_geoloc": {
        "latitude": -22.9133,
        "longitude": 139.9
      },
      "links_count": 4,
      "objectID": "6248"
    },
    {
      "name": "Burketown Airport",
      "city": "Burketown",
      "country": "Australia",
      "iata_code": "BUC",
      "_geoloc": {
        "latitude": -17.7486,
        "longitude": 139.534
      },
      "links_count": 4,
      "objectID": "6245"
    },
    {
      "name": "Bedourie Airport",
      "city": "Bedourie",
      "country": "Australia",
      "iata_code": "BEU",
      "_geoloc": {
        "latitude": -24.3461,
        "longitude": 139.46
      },
      "links_count": 4,
      "objectID": "6243"
    },
    {
      "name": "Birdsville Airport",
      "city": "Birdsville",
      "country": "Australia",
      "iata_code": "BVI",
      "_geoloc": {
        "latitude": -25.8975,
        "longitude": 139.348
      },
      "links_count": 4,
      "objectID": "6240"
    },
    {
      "name": "Aurukun Airport",
      "city": "Aurukun",
      "country": "Australia",
      "iata_code": "AUU",
      "_geoloc": {
        "latitude": -13.3539,
        "longitude": 141.721
      },
      "links_count": 4,
      "objectID": "6237"
    },
    {
      "name": "Stagen Airport",
      "city": "Laut Island",
      "country": "Indonesia",
      "iata_code": "KBU",
      "_geoloc": {
        "latitude": -3.29472,
        "longitude": 116.165
      },
      "links_count": 4,
      "objectID": "6231"
    },
    {
      "name": "Kudat Airport",
      "city": "Kudat",
      "country": "Malaysia",
      "iata_code": "KUD",
      "_geoloc": {
        "latitude": 6.9225,
        "longitude": 116.836
      },
      "links_count": 4,
      "objectID": "6222"
    },
    {
      "name": "Bario Airport",
      "city": "Bario",
      "country": "Malaysia",
      "iata_code": "BBN",
      "_geoloc": {
        "latitude": 3.73389,
        "longitude": 115.479
      },
      "links_count": 4,
      "objectID": "6220"
    },
    {
      "name": "Mukah Airport",
      "city": "Mukah",
      "country": "Malaysia",
      "iata_code": "MKM",
      "_geoloc": {
        "latitude": 2.90639,
        "longitude": 112.08
      },
      "links_count": 4,
      "objectID": "6217"
    },
    {
      "name": "Long Seridan Airport",
      "city": "Long Seridan",
      "country": "Malaysia",
      "iata_code": "ODN",
      "_geoloc": {
        "latitude": 3.967,
        "longitude": 115.05
      },
      "links_count": 4,
      "objectID": "6216"
    },
    {
      "name": "Long Lellang Airport",
      "city": "Long Datih",
      "country": "Malaysia",
      "iata_code": "LGL",
      "_geoloc": {
        "latitude": 3.421,
        "longitude": 115.154
      },
      "links_count": 4,
      "objectID": "6215"
    },
    {
      "name": "Dawei Airport",
      "city": "Dawei",
      "country": "Burma",
      "iata_code": "TVY",
      "_geoloc": {
        "latitude": 14.103886,
        "longitude": 98.203636
      },
      "links_count": 4,
      "objectID": "6197"
    },
    {
      "name": "Co Ong Airport",
      "city": "Conson",
      "country": "Vietnam",
      "iata_code": "VCS",
      "_geoloc": {
        "latitude": 8.731831,
        "longitude": 106.632589
      },
      "links_count": 4,
      "objectID": "6190"
    },
    {
      "name": "Kadhdhoo Airport",
      "city": "Laamu Atoll",
      "country": "Maldives",
      "iata_code": "KDO",
      "_geoloc": {
        "latitude": 1.85917,
        "longitude": 73.5219
      },
      "links_count": 4,
      "objectID": "6185"
    },
    {
      "name": "Hanimaadhoo Airport",
      "city": "Haa Dhaalu Atoll",
      "country": "Maldives",
      "iata_code": "HAQ",
      "_geoloc": {
        "latitude": 6.74423,
        "longitude": 73.1705
      },
      "links_count": 4,
      "objectID": "6184"
    },
    {
      "name": "Dimapur Airport",
      "city": "Dimapur",
      "country": "India",
      "iata_code": "DMU",
      "_geoloc": {
        "latitude": 25.8839,
        "longitude": 93.7711
      },
      "links_count": 4,
      "objectID": "6174"
    },
    {
      "name": "Koggala Airport",
      "city": "Koggala",
      "country": "Sri Lanka",
      "iata_code": "KCT",
      "_geoloc": {
        "latitude": 5.99368,
        "longitude": 80.3203
      },
      "links_count": 4,
      "objectID": "6169"
    },
    {
      "name": "Hubli Airport",
      "city": "Hubli",
      "country": "India",
      "iata_code": "HBX",
      "_geoloc": {
        "latitude": 15.3617,
        "longitude": 75.0849
      },
      "links_count": 4,
      "objectID": "6168"
    },
    {
      "name": "Saransk Airport",
      "city": "Saransk",
      "country": "Russia",
      "iata_code": "SKX",
      "_geoloc": {
        "latitude": 54.1251,
        "longitude": 45.2123
      },
      "links_count": 4,
      "objectID": "6166"
    },
    {
      "name": "Cheboksary Airport",
      "city": "Cheboksary",
      "country": "Russia",
      "iata_code": "CSY",
      "_geoloc": {
        "latitude": 56.0903,
        "longitude": 47.3473
      },
      "links_count": 4,
      "objectID": "6162"
    },
    {
      "name": "Vorkuta Airport",
      "city": "Vorkuta",
      "country": "Russia",
      "iata_code": "VKT",
      "_geoloc": {
        "latitude": 67.4886,
        "longitude": 63.9931
      },
      "links_count": 4,
      "objectID": "6159"
    },
    {
      "name": "Termez Airport",
      "city": "Termez",
      "country": "Uzbekistan",
      "iata_code": "TMJ",
      "_geoloc": {
        "latitude": 37.286667,
        "longitude": 67.31
      },
      "links_count": 4,
      "objectID": "6154"
    },
    {
      "name": "Kurgan Airport",
      "city": "Kurgan",
      "country": "Russia",
      "iata_code": "KRO",
      "_geoloc": {
        "latitude": 55.4753,
        "longitude": 65.4156
      },
      "links_count": 4,
      "objectID": "6146"
    },
    {
      "name": "Spichenkovo Airport",
      "city": "Novokuznetsk",
      "country": "Russia",
      "iata_code": "NOZ",
      "_geoloc": {
        "latitude": 53.8114,
        "longitude": 86.8772
      },
      "links_count": 4,
      "objectID": "6119"
    },
    {
      "name": "Ivano Frankivsk International Airport",
      "city": "Ivano-Frankivsk",
      "country": "Ukraine",
      "iata_code": "IFO",
      "_geoloc": {
        "latitude": 48.884167,
        "longitude": 24.686111
      },
      "links_count": 4,
      "objectID": "6106"
    },
    {
      "name": "Zaporizhzhia International Airport",
      "city": "Zaporozhye",
      "country": "Ukraine",
      "iata_code": "OZH",
      "_geoloc": {
        "latitude": 47.867,
        "longitude": 35.3157
      },
      "links_count": 4,
      "objectID": "6103"
    },
    {
      "name": "Esbjerg",
      "city": "Esbjerg",
      "country": "Denmark",
      "iata_code": "EBJ",
      "_geoloc": {
        "latitude": 55.525942,
        "longitude": 8.553403
      },
      "links_count": 4,
      "objectID": "610"
    },
    {
      "name": "Ugolny Airport",
      "city": "Anadyr",
      "country": "Russia",
      "iata_code": "DYR",
      "_geoloc": {
        "latitude": 64.73495,
        "longitude": 177.741483
      },
      "links_count": 4,
      "objectID": "6098"
    },
    {
      "name": "Tiksi Airport",
      "city": "Tiksi",
      "country": "Russia",
      "iata_code": "IKS",
      "_geoloc": {
        "latitude": 71.6977,
        "longitude": 128.903
      },
      "links_count": 4,
      "objectID": "6095"
    },
    {
      "name": "Cherskiy Airport",
      "city": "Cherskiy",
      "country": "Russia",
      "iata_code": "CYX",
      "_geoloc": {
        "latitude": 68.7406,
        "longitude": 161.338
      },
      "links_count": 4,
      "objectID": "6094"
    },
    {
      "name": "Chokurdakh Airport",
      "city": "Chokurdah",
      "country": "Russia",
      "iata_code": "CKH",
      "_geoloc": {
        "latitude": 70.6231,
        "longitude": 147.902
      },
      "links_count": 4,
      "objectID": "6093"
    },
    {
      "name": "Zhezkazgan Airport",
      "city": "Zhezkazgan",
      "country": "Kazakhstan",
      "iata_code": "DZN",
      "_geoloc": {
        "latitude": 47.708333,
        "longitude": 67.733333
      },
      "links_count": 4,
      "objectID": "6085"
    },
    {
      "name": "Petropavlosk South Airport",
      "city": "Petropavlosk",
      "country": "Kazakhstan",
      "iata_code": "PPK",
      "_geoloc": {
        "latitude": 54.7747,
        "longitude": 69.1839
      },
      "links_count": 4,
      "objectID": "6084"
    },
    {
      "name": "Kokshetau Airport",
      "city": "Kokshetau",
      "country": "Kazakhstan",
      "iata_code": "KOV",
      "_geoloc": {
        "latitude": 53.3291,
        "longitude": 69.5946
      },
      "links_count": 4,
      "objectID": "6083"
    },
    {
      "name": "Ji-Paraná Airport",
      "city": "Ji-Paraná",
      "country": "Brazil",
      "iata_code": "JPR",
      "_geoloc": {
        "latitude": -10.8708,
        "longitude": -61.8465
      },
      "links_count": 4,
      "objectID": "6073"
    },
    {
      "name": "Alferez Fap David Figueroa Fernandini Airport",
      "city": "Huánuco",
      "country": "Peru",
      "iata_code": "HUU",
      "_geoloc": {
        "latitude": -9.878811,
        "longitude": -76.204797
      },
      "links_count": 4,
      "objectID": "6067"
    },
    {
      "name": "Mayor General FAP Armando Revoredo Iglesias Airport",
      "city": "Cajamarca",
      "country": "Peru",
      "iata_code": "CJA",
      "_geoloc": {
        "latitude": -7.139183,
        "longitude": -78.4894
      },
      "links_count": 4,
      "objectID": "6066"
    },
    {
      "name": "El Alcaraván Airport",
      "city": "Yopal",
      "country": "Colombia",
      "iata_code": "EYP",
      "_geoloc": {
        "latitude": 5.319114,
        "longitude": -72.383975
      },
      "links_count": 4,
      "objectID": "6055"
    },
    {
      "name": "Waterford",
      "city": "Waterford",
      "country": "Ireland",
      "iata_code": "WAT",
      "_geoloc": {
        "latitude": 52.1872,
        "longitude": -7.086964
      },
      "links_count": 4,
      "objectID": "605"
    },
    {
      "name": "Camilo Ponce Enriquez Airport",
      "city": "La Toma (Catamayo)",
      "country": "Ecuador",
      "iata_code": "LOH",
      "_geoloc": {
        "latitude": -3.99589,
        "longitude": -79.3719
      },
      "links_count": 4,
      "objectID": "6046"
    },
    {
      "name": "Marília Airport",
      "city": "Marília",
      "country": "Brazil",
      "iata_code": "MII",
      "_geoloc": {
        "latitude": -22.196892,
        "longitude": -49.9264
      },
      "links_count": 4,
      "objectID": "6038"
    },
    {
      "name": "Catarman National Airport",
      "city": "Catarman",
      "country": "Philippines",
      "iata_code": "CRM",
      "_geoloc": {
        "latitude": 12.502417,
        "longitude": 124.635778
      },
      "links_count": 4,
      "objectID": "6024"
    },
    {
      "name": "Basco Airport",
      "city": "Basco",
      "country": "Philippines",
      "iata_code": "BSO",
      "_geoloc": {
        "latitude": 20.451322,
        "longitude": 121.979883
      },
      "links_count": 4,
      "objectID": "6019"
    },
    {
      "name": "Naga Airport",
      "city": "Naga",
      "country": "Philippines",
      "iata_code": "WNP",
      "_geoloc": {
        "latitude": 13.584886,
        "longitude": 123.270239
      },
      "links_count": 4,
      "objectID": "6018"
    },
    {
      "name": "Kunsan Air Base",
      "city": "Kunsan",
      "country": "South Korea",
      "iata_code": "KUV",
      "_geoloc": {
        "latitude": 35.903756,
        "longitude": 126.615906
      },
      "links_count": 4,
      "objectID": "6003"
    },
    {
      "name": "Fort Simpson",
      "city": "Fort Simpson",
      "country": "Canada",
      "iata_code": "YFS",
      "_geoloc": {
        "latitude": 61.760153,
        "longitude": -121.236525
      },
      "links_count": 4,
      "objectID": "60"
    },
    {
      "name": "Wrangell Airport",
      "city": "Wrangell",
      "country": "United States",
      "iata_code": "WRG",
      "_geoloc": {
        "latitude": 56.4843,
        "longitude": -132.37
      },
      "links_count": 4,
      "objectID": "5969"
    },
    {
      "name": "Chevak Airport",
      "city": "Chevak",
      "country": "United States",
      "iata_code": "VAK",
      "_geoloc": {
        "latitude": 61.5338,
        "longitude": -165.584
      },
      "links_count": 4,
      "objectID": "5968"
    },
    {
      "name": "Mountain Village Airport",
      "city": "Mountain Village",
      "country": "United States",
      "iata_code": "MOU",
      "_geoloc": {
        "latitude": 62.0954,
        "longitude": -163.682
      },
      "links_count": 4,
      "objectID": "5966"
    },
    {
      "name": "Dera Ismael Khan Airport",
      "city": "Dera Ismael Khan",
      "country": "Pakistan",
      "iata_code": "DSK",
      "_geoloc": {
        "latitude": 31.909422,
        "longitude": 70.896639
      },
      "links_count": 4,
      "objectID": "5943"
    },
    {
      "name": "Chitral Airport",
      "city": "Chitral",
      "country": "Pakistan",
      "iata_code": "CJL",
      "_geoloc": {
        "latitude": 35.886592,
        "longitude": 71.800578
      },
      "links_count": 4,
      "objectID": "5940"
    },
    {
      "name": "Al Ain International Airport",
      "city": "Al Ain",
      "country": "United Arab Emirates",
      "iata_code": "AAN",
      "_geoloc": {
        "latitude": 24.261667,
        "longitude": 55.609167
      },
      "links_count": 4,
      "objectID": "5937"
    },
    {
      "name": "Noshahr Airport",
      "city": "Noshahr",
      "country": "Iran",
      "iata_code": "NSH",
      "_geoloc": {
        "latitude": 36.663333,
        "longitude": 51.464722
      },
      "links_count": 4,
      "objectID": "5932"
    },
    {
      "name": "Al-Jawf Domestic Airport",
      "city": "Al-Jawf",
      "country": "Saudi Arabia",
      "iata_code": "AJF",
      "_geoloc": {
        "latitude": 29.785133,
        "longitude": 40.100006
      },
      "links_count": 4,
      "objectID": "5925"
    },
    {
      "name": "Dawadmi Domestic Airport",
      "city": "Dawadmi",
      "country": "Saudi Arabia",
      "iata_code": "DWD",
      "_geoloc": {
        "latitude": 24.5,
        "longitude": 44.4
      },
      "links_count": 4,
      "objectID": "5924"
    },
    {
      "name": "Tiga Airport",
      "city": "Tiga",
      "country": "New Caledonia",
      "iata_code": "TGJ",
      "_geoloc": {
        "latitude": -21.0961,
        "longitude": 167.804
      },
      "links_count": 4,
      "objectID": "5919"
    },
    {
      "name": "Futuna Airport",
      "city": "Futuna Island",
      "country": "Vanuatu",
      "iata_code": "FTA",
      "_geoloc": {
        "latitude": -19.5164,
        "longitude": 170.232
      },
      "links_count": 4,
      "objectID": "5917"
    },
    {
      "name": "Dillon's Bay Airport",
      "city": "Dillon's Bay",
      "country": "Vanuatu",
      "iata_code": "DLY",
      "_geoloc": {
        "latitude": -18.7694,
        "longitude": 169.001
      },
      "links_count": 4,
      "objectID": "5916"
    },
    {
      "name": "Aniwa Airport",
      "city": "Aniwa",
      "country": "Vanuatu",
      "iata_code": "AWD",
      "_geoloc": {
        "latitude": -19.24,
        "longitude": 169.605
      },
      "links_count": 4,
      "objectID": "5915"
    },
    {
      "name": "Southwest Bay Airport",
      "city": "Malekula Island",
      "country": "Vanuatu",
      "iata_code": "SWJ",
      "_geoloc": {
        "latitude": -16.495,
        "longitude": 167.438
      },
      "links_count": 4,
      "objectID": "5912"
    },
    {
      "name": "Lamen Bay Airport",
      "city": "Lamen Bay",
      "country": "Vanuatu",
      "iata_code": "LNB",
      "_geoloc": {
        "latitude": -16.5842,
        "longitude": 168.159
      },
      "links_count": 4,
      "objectID": "5902"
    },
    {
      "name": "Lamap Airport",
      "city": "Lamap",
      "country": "Vanuatu",
      "iata_code": "LPM",
      "_geoloc": {
        "latitude": -16.454,
        "longitude": 167.823
      },
      "links_count": 4,
      "objectID": "5901"
    },
    {
      "name": "Tavie Airport",
      "city": "Paama Island",
      "country": "Vanuatu",
      "iata_code": "PBJ",
      "_geoloc": {
        "latitude": -16.439,
        "longitude": 168.257
      },
      "links_count": 4,
      "objectID": "5900"
    },
    {
      "name": "Longana Airport",
      "city": "Longana",
      "country": "Vanuatu",
      "iata_code": "LOD",
      "_geoloc": {
        "latitude": -15.3067,
        "longitude": 167.967
      },
      "links_count": 4,
      "objectID": "5898"
    },
    {
      "name": "Labasa Airport",
      "city": "Lambasa",
      "country": "Fiji",
      "iata_code": "LBS",
      "_geoloc": {
        "latitude": -16.466749,
        "longitude": 179.33986
      },
      "links_count": 4,
      "objectID": "5874"
    },
    {
      "name": "Vunisea Airport",
      "city": "Vunisea",
      "country": "Fiji",
      "iata_code": "KDV",
      "_geoloc": {
        "latitude": -19.0581,
        "longitude": 178.157
      },
      "links_count": 4,
      "objectID": "5869"
    },
    {
      "name": "Colonel Hill Airport",
      "city": "Colonel Hill",
      "country": "Bahamas",
      "iata_code": "CRI",
      "_geoloc": {
        "latitude": 22.745561,
        "longitude": -74.182353
      },
      "links_count": 4,
      "objectID": "5859"
    },
    {
      "name": "Lencero Airport",
      "city": "Jalapa",
      "country": "Mexico",
      "iata_code": "JAL",
      "_geoloc": {
        "latitude": 19.475083,
        "longitude": -96.797506
      },
      "links_count": 4,
      "objectID": "5837"
    },
    {
      "name": "Puerto Lempira Airport",
      "city": "Puerto Lempira",
      "country": "Honduras",
      "iata_code": "PEU",
      "_geoloc": {
        "latitude": 15.2622,
        "longitude": -83.7812
      },
      "links_count": 4,
      "objectID": "5832"
    },
    {
      "name": "Adiyaman Airport",
      "city": "Adiyaman",
      "country": "Turkey",
      "iata_code": "ADF",
      "_geoloc": {
        "latitude": 37.7314,
        "longitude": 38.4689
      },
      "links_count": 4,
      "objectID": "5800"
    },
    {
      "name": "Agri Airport",
      "city": "Agri",
      "country": "Turkey",
      "iata_code": "AJI",
      "_geoloc": {
        "latitude": 39.6546,
        "longitude": 43.0271
      },
      "links_count": 4,
      "objectID": "5799"
    },
    {
      "name": "Corvo Airport",
      "city": "Corvo",
      "country": "Portugal",
      "iata_code": "CVU",
      "_geoloc": {
        "latitude": 39.6715,
        "longitude": -31.1136
      },
      "links_count": 4,
      "objectID": "5793"
    },
    {
      "name": "Syros Airport",
      "city": "Syros Island",
      "country": "Greece",
      "iata_code": "JSY",
      "_geoloc": {
        "latitude": 37.422792,
        "longitude": 24.950936
      },
      "links_count": 4,
      "objectID": "5787"
    },
    {
      "name": "Tupelo Regional Airport",
      "city": "Tupelo",
      "country": "United States",
      "iata_code": "TUP",
      "_geoloc": {
        "latitude": 34.2681,
        "longitude": -88.7699
      },
      "links_count": 4,
      "objectID": "5773"
    },
    {
      "name": "Santa Maria Pub Cpt G Allan Hancock Airport",
      "city": "Santa Maria",
      "country": "United States",
      "iata_code": "SMX",
      "_geoloc": {
        "latitude": 34.8989,
        "longitude": -120.457
      },
      "links_count": 4,
      "objectID": "5772"
    },
    {
      "name": "Rhinelander Oneida County Airport",
      "city": "Rhinelander",
      "country": "United States",
      "iata_code": "RHI",
      "_geoloc": {
        "latitude": 45.6312,
        "longitude": -89.4675
      },
      "links_count": 4,
      "objectID": "5765"
    },
    {
      "name": "Owensboro Daviess County Airport",
      "city": "Owensboro",
      "country": "United States",
      "iata_code": "OWB",
      "_geoloc": {
        "latitude": 37.7401,
        "longitude": -87.1668
      },
      "links_count": 4,
      "objectID": "5758"
    },
    {
      "name": "Southwest Oregon Regional Airport",
      "city": "North Bend",
      "country": "United States",
      "iata_code": "OTH",
      "_geoloc": {
        "latitude": 43.4171,
        "longitude": -124.246
      },
      "links_count": 4,
      "objectID": "5757"
    },
    {
      "name": "Lynchburg Regional Preston Glenn Field",
      "city": "Lynchburg",
      "country": "United States",
      "iata_code": "LYH",
      "_geoloc": {
        "latitude": 37.3267,
        "longitude": -79.2004
      },
      "links_count": 4,
      "objectID": "5753"
    },
    {
      "name": "Klamath Falls Airport",
      "city": "Klamath Falls",
      "country": "United States",
      "iata_code": "LMT",
      "_geoloc": {
        "latitude": 42.1561,
        "longitude": -121.733
      },
      "links_count": 4,
      "objectID": "5750"
    },
    {
      "name": "Lebanon Municipal Airport",
      "city": "Lebanon",
      "country": "United States",
      "iata_code": "LEB",
      "_geoloc": {
        "latitude": 43.6261,
        "longitude": -72.3042
      },
      "links_count": 4,
      "objectID": "5749"
    },
    {
      "name": "Memorial Field",
      "city": "Hot Springs",
      "country": "United States",
      "iata_code": "HOT",
      "_geoloc": {
        "latitude": 34.478,
        "longitude": -93.0962
      },
      "links_count": 4,
      "objectID": "5741"
    },
    {
      "name": "DuBois Regional Airport",
      "city": "Du Bois",
      "country": "United States",
      "iata_code": "DUJ",
      "_geoloc": {
        "latitude": 41.1783,
        "longitude": -78.8987
      },
      "links_count": 4,
      "objectID": "5734"
    },
    {
      "name": "Del Norte County Airport",
      "city": "Crescent City",
      "country": "United States",
      "iata_code": "CEC",
      "_geoloc": {
        "latitude": 41.7802,
        "longitude": -124.237
      },
      "links_count": 4,
      "objectID": "5727"
    },
    {
      "name": "Southeast Iowa Regional Airport",
      "city": "Burlington",
      "country": "United States",
      "iata_code": "BRL",
      "_geoloc": {
        "latitude": 40.7832,
        "longitude": -91.1255
      },
      "links_count": 4,
      "objectID": "5726"
    },
    {
      "name": "Bradford Regional Airport",
      "city": "Bradford",
      "country": "United States",
      "iata_code": "BFD",
      "_geoloc": {
        "latitude": 41.8031,
        "longitude": -78.6401
      },
      "links_count": 4,
      "objectID": "5722"
    },
    {
      "name": "Alpena County Regional Airport",
      "city": "Alpena",
      "country": "United States",
      "iata_code": "APN",
      "_geoloc": {
        "latitude": 45.0781,
        "longitude": -83.5603
      },
      "links_count": 4,
      "objectID": "5720"
    },
    {
      "name": "Waterloo Regional Airport",
      "city": "Waterloo",
      "country": "United States",
      "iata_code": "ALO",
      "_geoloc": {
        "latitude": 42.5571,
        "longitude": -92.4003
      },
      "links_count": 4,
      "objectID": "5718"
    },
    {
      "name": "Diu Airport",
      "city": "Diu",
      "country": "India",
      "iata_code": "DIU",
      "_geoloc": {
        "latitude": 20.7131,
        "longitude": 70.9211
      },
      "links_count": 4,
      "objectID": "5711"
    },
    {
      "name": "Nyala Airport",
      "city": "Nyala",
      "country": "Sudan",
      "iata_code": "UYL",
      "_geoloc": {
        "latitude": 12.0535,
        "longitude": 24.9562
      },
      "links_count": 4,
      "objectID": "5701"
    },
    {
      "name": "Gardabya Airport",
      "city": "Sirt",
      "country": "Libya",
      "iata_code": "SRX",
      "_geoloc": {
        "latitude": 31.0635,
        "longitude": 16.595
      },
      "links_count": 4,
      "objectID": "5696"
    },
    {
      "name": "Tshikapa Airport",
      "city": "Tshikapa",
      "country": "Congo (Kinshasa)",
      "iata_code": "TSH",
      "_geoloc": {
        "latitude": -6.43833,
        "longitude": 20.7947
      },
      "links_count": 4,
      "objectID": "5652"
    },
    {
      "name": "Catumbela Airport",
      "city": "Catumbela",
      "country": "Angola",
      "iata_code": "CBT",
      "_geoloc": {
        "latitude": -12.4792,
        "longitude": 13.4869
      },
      "links_count": 4,
      "objectID": "5630"
    },
    {
      "name": "Solwesi Airport",
      "city": "Solwesi",
      "country": "Zambia",
      "iata_code": "SLI",
      "_geoloc": {
        "latitude": -12.1737,
        "longitude": 26.3651
      },
      "links_count": 4,
      "objectID": "5613"
    },
    {
      "name": "Hemavan Airport",
      "city": "Hemavan",
      "country": "Sweden",
      "iata_code": "HMV",
      "_geoloc": {
        "latitude": 65.806111,
        "longitude": 15.082778
      },
      "links_count": 4,
      "objectID": "5599"
    },
    {
      "name": "Torsby Airport",
      "city": "Torsby",
      "country": "Sweden",
      "iata_code": "TYF",
      "_geoloc": {
        "latitude": 60.157622,
        "longitude": 12.991269
      },
      "links_count": 4,
      "objectID": "5596"
    },
    {
      "name": "Karlstad Airport",
      "city": "Karlstad",
      "country": "Sweden",
      "iata_code": "KSD",
      "_geoloc": {
        "latitude": 59.4447,
        "longitude": 13.3374
      },
      "links_count": 4,
      "objectID": "5595"
    },
    {
      "name": "Hagfors Airport",
      "city": "Hagfors",
      "country": "Sweden",
      "iata_code": "HFS",
      "_geoloc": {
        "latitude": 60.020064,
        "longitude": 13.578908
      },
      "links_count": 4,
      "objectID": "5594"
    },
    {
      "name": "Anda Airport",
      "city": "Sandane",
      "country": "Norway",
      "iata_code": "SDN",
      "_geoloc": {
        "latitude": 61.83,
        "longitude": 6.10583
      },
      "links_count": 4,
      "objectID": "5585"
    },
    {
      "name": "Røst Airport",
      "city": "Røst",
      "country": "Norway",
      "iata_code": "RET",
      "_geoloc": {
        "latitude": 67.5278,
        "longitude": 12.1033
      },
      "links_count": 4,
      "objectID": "5584"
    },
    {
      "name": "Donegal Airport",
      "city": "Dongloe",
      "country": "Ireland",
      "iata_code": "CFN",
      "_geoloc": {
        "latitude": 55.044192,
        "longitude": -8.341
      },
      "links_count": 4,
      "objectID": "5577"
    },
    {
      "name": "Westray Airport",
      "city": "Westray",
      "country": "United Kingdom",
      "iata_code": "WRY",
      "_geoloc": {
        "latitude": 59.3503,
        "longitude": -2.95
      },
      "links_count": 4,
      "objectID": "5571"
    },
    {
      "name": "Stronsay Airport",
      "city": "Stronsay",
      "country": "United Kingdom",
      "iata_code": "SOY",
      "_geoloc": {
        "latitude": 59.1553,
        "longitude": -2.64139
      },
      "links_count": 4,
      "objectID": "5568"
    },
    {
      "name": "Churchill Falls Airport",
      "city": "Churchill Falls",
      "country": "Canada",
      "iata_code": "ZUM",
      "_geoloc": {
        "latitude": 53.5619,
        "longitude": -64.1064
      },
      "links_count": 4,
      "objectID": "5550"
    },
    {
      "name": "Sachigo Lake Airport",
      "city": "Sachigo Lake",
      "country": "Canada",
      "iata_code": "ZPB",
      "_geoloc": {
        "latitude": 53.8911,
        "longitude": -92.1964
      },
      "links_count": 4,
      "objectID": "5546"
    },
    {
      "name": "Kashechewan Airport",
      "city": "Kashechewan",
      "country": "Canada",
      "iata_code": "ZKE",
      "_geoloc": {
        "latitude": 52.2825,
        "longitude": -81.6778
      },
      "links_count": 4,
      "objectID": "5543"
    },
    {
      "name": "Eastmain River Airport",
      "city": "Eastmain River",
      "country": "Canada",
      "iata_code": "ZEM",
      "_geoloc": {
        "latitude": 52.2264,
        "longitude": -78.5225
      },
      "links_count": 4,
      "objectID": "5539"
    },
    {
      "name": "Salluit Airport",
      "city": "Salluit",
      "country": "Canada",
      "iata_code": "YZG",
      "_geoloc": {
        "latitude": 62.1794,
        "longitude": -75.6672
      },
      "links_count": 4,
      "objectID": "5535"
    },
    {
      "name": "Webequie Airport",
      "city": "Webequie",
      "country": "Canada",
      "iata_code": "YWP",
      "_geoloc": {
        "latitude": 52.9597,
        "longitude": -87.3689
      },
      "links_count": 4,
      "objectID": "5533"
    },
    {
      "name": "Wemindji Airport",
      "city": "Wemindji",
      "country": "Canada",
      "iata_code": "YNC",
      "_geoloc": {
        "latitude": 53.0106,
        "longitude": -78.8311
      },
      "links_count": 4,
      "objectID": "5516"
    },
    {
      "name": "Lansdowne House Airport",
      "city": "Lansdowne House",
      "country": "Canada",
      "iata_code": "YLH",
      "_geoloc": {
        "latitude": 52.1956,
        "longitude": -87.9342
      },
      "links_count": 4,
      "objectID": "5510"
    },
    {
      "name": "Akulivik Airport",
      "city": "Akulivik",
      "country": "Canada",
      "iata_code": "AKV",
      "_geoloc": {
        "latitude": 60.8186,
        "longitude": -78.1486
      },
      "links_count": 4,
      "objectID": "5506"
    },
    {
      "name": "Ivujivik Airport",
      "city": "Ivujivik",
      "country": "Canada",
      "iata_code": "YIK",
      "_geoloc": {
        "latitude": 62.4173,
        "longitude": -77.9253
      },
      "links_count": 4,
      "objectID": "5504"
    },
    {
      "name": "Nemiscau Airport",
      "city": "Nemiscau",
      "country": "Canada",
      "iata_code": "YNS",
      "_geoloc": {
        "latitude": 51.6911,
        "longitude": -76.1356
      },
      "links_count": 4,
      "objectID": "5501"
    },
    {
      "name": "Quaqtaq Airport",
      "city": "Quaqtaq",
      "country": "Canada",
      "iata_code": "YQC",
      "_geoloc": {
        "latitude": 61.0464,
        "longitude": -69.6178
      },
      "links_count": 4,
      "objectID": "5499"
    },
    {
      "name": "Gillam Airport",
      "city": "Gillam",
      "country": "Canada",
      "iata_code": "YGX",
      "_geoloc": {
        "latitude": 56.3575,
        "longitude": -94.7106
      },
      "links_count": 4,
      "objectID": "5497"
    },
    {
      "name": "Fort Albany Airport",
      "city": "Fort Albany",
      "country": "Canada",
      "iata_code": "YFA",
      "_geoloc": {
        "latitude": 52.2014,
        "longitude": -81.6969
      },
      "links_count": 4,
      "objectID": "5490"
    },
    {
      "name": "Attawapiskat Airport",
      "city": "Attawapiskat",
      "country": "Canada",
      "iata_code": "YAT",
      "_geoloc": {
        "latitude": 52.9275,
        "longitude": -82.4319
      },
      "links_count": 4,
      "objectID": "5482"
    },
    {
      "name": "Kasabonika Airport",
      "city": "Kasabonika",
      "country": "Canada",
      "iata_code": "XKS",
      "_geoloc": {
        "latitude": 53.5247,
        "longitude": -88.6428
      },
      "links_count": 4,
      "objectID": "5480"
    },
    {
      "name": "Cat Lake Airport",
      "city": "Cat Lake",
      "country": "Canada",
      "iata_code": "YAC",
      "_geoloc": {
        "latitude": 51.7272,
        "longitude": -91.8244
      },
      "links_count": 4,
      "objectID": "5478"
    },
    {
      "name": "La Tabatière Airport",
      "city": "La Tabatière",
      "country": "Canada",
      "iata_code": "ZLT",
      "_geoloc": {
        "latitude": 50.8308,
        "longitude": -58.9756
      },
      "links_count": 4,
      "objectID": "5474"
    },
    {
      "name": "Tête-à-la-Baleine Airport",
      "city": "Tête-à-la-Baleine",
      "country": "Canada",
      "iata_code": "ZTB",
      "_geoloc": {
        "latitude": 50.6744,
        "longitude": -59.3836
      },
      "links_count": 4,
      "objectID": "5473"
    },
    {
      "name": "Poplar Hill Airport",
      "city": "Poplar Hill",
      "country": "Canada",
      "iata_code": "YHP",
      "_geoloc": {
        "latitude": 52.1133,
        "longitude": -94.2556
      },
      "links_count": 4,
      "objectID": "5471"
    },
    {
      "name": "Kingfisher Lake Airport",
      "city": "Kingfisher Lake",
      "country": "Canada",
      "iata_code": "KIF",
      "_geoloc": {
        "latitude": 53.0125,
        "longitude": -89.8553
      },
      "links_count": 4,
      "objectID": "5469"
    },
    {
      "name": "North Spirit Lake Airport",
      "city": "North Spirit Lake",
      "country": "Canada",
      "iata_code": "YNO",
      "_geoloc": {
        "latitude": 52.49,
        "longitude": -92.9711
      },
      "links_count": 4,
      "objectID": "5467"
    },
    {
      "name": "Rigolet Airport",
      "city": "Rigolet",
      "country": "Canada",
      "iata_code": "YRG",
      "_geoloc": {
        "latitude": 54.1797,
        "longitude": -58.4575
      },
      "links_count": 4,
      "objectID": "5461"
    },
    {
      "name": "Qaarsut Airport",
      "city": "Uummannaq",
      "country": "Greenland",
      "iata_code": "JQA",
      "_geoloc": {
        "latitude": 70.7342,
        "longitude": -52.6962
      },
      "links_count": 4,
      "objectID": "5449"
    },
    {
      "name": "Maniitsoq Airport",
      "city": "Maniitsoq",
      "country": "Greenland",
      "iata_code": "JSU",
      "_geoloc": {
        "latitude": 65.4125,
        "longitude": -52.9394
      },
      "links_count": 4,
      "objectID": "5443"
    },
    {
      "name": "Paamiut Heliport",
      "city": "Paamiut",
      "country": "Greenland",
      "iata_code": "JFR",
      "_geoloc": {
        "latitude": 61.9922,
        "longitude": -49.6625
      },
      "links_count": 4,
      "objectID": "5440"
    },
    {
      "name": "Neerlerit Inaat Airport",
      "city": "Neerlerit Inaat",
      "country": "Greenland",
      "iata_code": "CNP",
      "_geoloc": {
        "latitude": 70.7433,
        "longitude": -22.6606
      },
      "links_count": 4,
      "objectID": "5439"
    },
    {
      "name": "Alluitsup Paa Heliport",
      "city": "Alluitsup Paa",
      "country": "Greenland",
      "iata_code": "LLU",
      "_geoloc": {
        "latitude": 60.4644,
        "longitude": -45.5778
      },
      "links_count": 4,
      "objectID": "5438"
    },
    {
      "name": "Misima Island Airport",
      "city": "Misima Island",
      "country": "Papua New Guinea",
      "iata_code": "MIS",
      "_geoloc": {
        "latitude": -10.6892,
        "longitude": 152.838
      },
      "links_count": 4,
      "objectID": "5432"
    },
    {
      "name": "Ramata Airport",
      "city": "Ramata",
      "country": "Solomon Islands",
      "iata_code": "RBV",
      "_geoloc": {
        "latitude": -8.16806,
        "longitude": 157.643
      },
      "links_count": 4,
      "objectID": "5418"
    },
    {
      "name": "Kagau Island Airport",
      "city": "Kagau Island",
      "country": "Solomon Islands",
      "iata_code": "KGE",
      "_geoloc": {
        "latitude": -7.333,
        "longitude": 157.583
      },
      "links_count": 4,
      "objectID": "5417"
    },
    {
      "name": "Suavanao Airport",
      "city": "Suavanao",
      "country": "Solomon Islands",
      "iata_code": "VAO",
      "_geoloc": {
        "latitude": -7.58556,
        "longitude": 158.731
      },
      "links_count": 4,
      "objectID": "5416"
    },
    {
      "name": "Rennell/Tingoa Airport",
      "city": "Rennell Island",
      "country": "Solomon Islands",
      "iata_code": "RNL",
      "_geoloc": {
        "latitude": -11.5339,
        "longitude": 160.063
      },
      "links_count": 4,
      "objectID": "5414"
    },
    {
      "name": "Benbecula",
      "city": "Benbecula",
      "country": "United Kingdom",
      "iata_code": "BEB",
      "_geoloc": {
        "latitude": 57.481111,
        "longitude": -7.362778
      },
      "links_count": 4,
      "objectID": "538"
    },
    {
      "name": "Wick",
      "city": "Wick",
      "country": "United Kingdom",
      "iata_code": "WIC",
      "_geoloc": {
        "latitude": 58.458889,
        "longitude": -3.093056
      },
      "links_count": 4,
      "objectID": "531"
    },
    {
      "name": "Hawarden",
      "city": "Hawarden",
      "country": "United Kingdom",
      "iata_code": "CEG",
      "_geoloc": {
        "latitude": 53.178056,
        "longitude": -2.977778
      },
      "links_count": 4,
      "objectID": "519"
    },
    {
      "name": "Alderney",
      "city": "Alderney",
      "country": "Guernsey",
      "iata_code": "ACI",
      "_geoloc": {
        "latitude": 49.706111,
        "longitude": -2.214722
      },
      "links_count": 4,
      "objectID": "497"
    },
    {
      "name": "Dawson Creek",
      "city": "Dawson Creek",
      "country": "Canada",
      "iata_code": "YDQ",
      "_geoloc": {
        "latitude": 55.742333,
        "longitude": -120.183
      },
      "links_count": 4,
      "objectID": "48"
    },
    {
      "name": "Savonlinna",
      "city": "Savonlinna",
      "country": "Finland",
      "iata_code": "SVL",
      "_geoloc": {
        "latitude": 61.943064,
        "longitude": 28.945136
      },
      "links_count": 4,
      "objectID": "455"
    },
    {
      "name": "Rovaniemi",
      "city": "Rovaniemi",
      "country": "Finland",
      "iata_code": "RVN",
      "_geoloc": {
        "latitude": 66.564822,
        "longitude": 25.830411
      },
      "links_count": 4,
      "objectID": "453"
    },
    {
      "name": "Dubuque Rgnl",
      "city": "Dubuque IA",
      "country": "United States",
      "iata_code": "DBQ",
      "_geoloc": {
        "latitude": 42.402,
        "longitude": -90.709472
      },
      "links_count": 4,
      "objectID": "4388"
    },
    {
      "name": "Camp Mabry Austin City",
      "city": "Austin TX",
      "country": "United States",
      "iata_code": "ATT",
      "_geoloc": {
        "latitude": 30.31666,
        "longitude": -97.7666
      },
      "links_count": 4,
      "objectID": "4385"
    },
    {
      "name": "Kittila",
      "city": "Kittila",
      "country": "Finland",
      "iata_code": "KTT",
      "_geoloc": {
        "latitude": 67.701022,
        "longitude": 24.84685
      },
      "links_count": 4,
      "objectID": "438"
    },
    {
      "name": "Usinsk",
      "city": "Usinsk",
      "country": "Russia",
      "iata_code": "USK",
      "_geoloc": {
        "latitude": 66.00077,
        "longitude": 57.221113
      },
      "links_count": 4,
      "objectID": "4369"
    },
    {
      "name": "Joplin Rgnl",
      "city": "Joplin",
      "country": "United States",
      "iata_code": "JLN",
      "_geoloc": {
        "latitude": 37.151814,
        "longitude": -94.498269
      },
      "links_count": 4,
      "objectID": "4354"
    },
    {
      "name": "Yellowstone Rgnl",
      "city": "Cody",
      "country": "United States",
      "iata_code": "COD",
      "_geoloc": {
        "latitude": 44.520194,
        "longitude": -109.023806
      },
      "links_count": 4,
      "objectID": "4344"
    },
    {
      "name": "Kajaani",
      "city": "Kajaani",
      "country": "Finland",
      "iata_code": "KAJ",
      "_geoloc": {
        "latitude": 64.285472,
        "longitude": 27.692414
      },
      "links_count": 4,
      "objectID": "433"
    },
    {
      "name": "Edward Bodden Airfield",
      "city": "Little Cayman",
      "country": "Cayman Islands",
      "iata_code": "LYB",
      "_geoloc": {
        "latitude": 19.6591666667,
        "longitude": -80.09083333
      },
      "links_count": 4,
      "objectID": "4314"
    },
    {
      "name": "Morgantown Muni Walter L Bill Hart Fld",
      "city": "Morgantown",
      "country": "United States",
      "iata_code": "MGW",
      "_geoloc": {
        "latitude": 39.642908,
        "longitude": -79.916314
      },
      "links_count": 4,
      "objectID": "4284"
    },
    {
      "name": "Saint Cloud Regional Airport",
      "city": "Saint Cloud",
      "country": "United States",
      "iata_code": "STC",
      "_geoloc": {
        "latitude": 45.546556,
        "longitude": -94.059889
      },
      "links_count": 4,
      "objectID": "4271"
    },
    {
      "name": "Flagstaff Pulliam Airport",
      "city": "Flagstaff",
      "country": "United States",
      "iata_code": "FLG",
      "_geoloc": {
        "latitude": 35.140318,
        "longitude": -111.6692392
      },
      "links_count": 4,
      "objectID": "4261"
    },
    {
      "name": "Lawton-Fort Sill Regional Airport",
      "city": "Lawton",
      "country": "United States",
      "iata_code": "LAW",
      "_geoloc": {
        "latitude": 34.5677144,
        "longitude": -98.4166367
      },
      "links_count": 4,
      "objectID": "4256"
    },
    {
      "name": "Fort Good Hope",
      "city": "Fort Good Hope",
      "country": "Canada",
      "iata_code": "YGH",
      "_geoloc": {
        "latitude": 66.26666667,
        "longitude": -128.65
      },
      "links_count": 4,
      "objectID": "4239"
    },
    {
      "name": "Tulita",
      "city": "Tulita",
      "country": "Canada",
      "iata_code": "ZFN",
      "_geoloc": {
        "latitude": 64.0833333,
        "longitude": -125.5833333
      },
      "links_count": 4,
      "objectID": "4238"
    },
    {
      "name": "Deline",
      "city": "Deline",
      "country": "Canada",
      "iata_code": "YWJ",
      "_geoloc": {
        "latitude": 65.1833333,
        "longitude": -125.41666667
      },
      "links_count": 4,
      "objectID": "4237"
    },
    {
      "name": "Kaadedhdhoo",
      "city": "Kaadedhdhoo",
      "country": "Maldives",
      "iata_code": "KDM",
      "_geoloc": {
        "latitude": 0.4880555,
        "longitude": 72.995556
      },
      "links_count": 4,
      "objectID": "4235"
    },
    {
      "name": "Bundaberg",
      "city": "Bundaberg",
      "country": "Australia",
      "iata_code": "BDB",
      "_geoloc": {
        "latitude": -24.903889,
        "longitude": 152.318611
      },
      "links_count": 4,
      "objectID": "4218"
    },
    {
      "name": "Caldas Novas",
      "city": "Caldas Novas",
      "country": "Brazil",
      "iata_code": "CLV",
      "_geoloc": {
        "latitude": -17.7267,
        "longitude": -48.6114
      },
      "links_count": 4,
      "objectID": "4215"
    },
    {
      "name": "Laoag Intl",
      "city": "Laoag",
      "country": "Philippines",
      "iata_code": "LAO",
      "_geoloc": {
        "latitude": 18.178092,
        "longitude": 120.531522
      },
      "links_count": 4,
      "objectID": "4202"
    },
    {
      "name": "Kastelorizo",
      "city": "Kastelorizo",
      "country": "Greece",
      "iata_code": "KZS",
      "_geoloc": {
        "latitude": 36.127777,
        "longitude": 29.566656
      },
      "links_count": 4,
      "objectID": "4196"
    },
    {
      "name": "Paros",
      "city": "Paros",
      "country": "Greece",
      "iata_code": "PAS",
      "_geoloc": {
        "latitude": 37.010278,
        "longitude": 25.127778
      },
      "links_count": 4,
      "objectID": "4195"
    },
    {
      "name": "Naxos",
      "city": "Cyclades Islands",
      "country": "Greece",
      "iata_code": "JNX",
      "_geoloc": {
        "latitude": 37.080556,
        "longitude": 25.368056
      },
      "links_count": 4,
      "objectID": "4194"
    },
    {
      "name": "Milos",
      "city": "Milos",
      "country": "Greece",
      "iata_code": "MLO",
      "_geoloc": {
        "latitude": 36.696111,
        "longitude": 24.4775
      },
      "links_count": 4,
      "objectID": "4193"
    },
    {
      "name": "John Murtha Johnstown-Cambria County Airport",
      "city": "Johnstown",
      "country": "United States",
      "iata_code": "JST",
      "_geoloc": {
        "latitude": 40.316111,
        "longitude": -78.833889
      },
      "links_count": 4,
      "objectID": "4169"
    },
    {
      "name": "Tartu",
      "city": "Tartu",
      "country": "Estonia",
      "iata_code": "TAY",
      "_geoloc": {
        "latitude": 58.307461,
        "longitude": 26.690428
      },
      "links_count": 4,
      "objectID": "416"
    },
    {
      "name": "Dong Tac",
      "city": "Tuy Hoa",
      "country": "Vietnam",
      "iata_code": "TBB",
      "_geoloc": {
        "latitude": 13.04955,
        "longitude": 109.333706
      },
      "links_count": 4,
      "objectID": "4158"
    },
    {
      "name": "Chu Lai",
      "city": "Chu Lai",
      "country": "Vietnam",
      "iata_code": "VCL",
      "_geoloc": {
        "latitude": 15.405944,
        "longitude": 108.705889
      },
      "links_count": 4,
      "objectID": "4157"
    },
    {
      "name": "Dong Hoi",
      "city": "Dong Hoi",
      "country": "Vietnam",
      "iata_code": "VDH",
      "_geoloc": {
        "latitude": 17.515,
        "longitude": 106.590556
      },
      "links_count": 4,
      "objectID": "4154"
    },
    {
      "name": "Petersburg James A. Johnson",
      "city": "Petersburg",
      "country": "United States",
      "iata_code": "PSG",
      "_geoloc": {
        "latitude": 56.801667,
        "longitude": -132.945278
      },
      "links_count": 4,
      "objectID": "4147"
    },
    {
      "name": "Nan",
      "city": "Nan",
      "country": "Thailand",
      "iata_code": "NNT",
      "_geoloc": {
        "latitude": 18.807914,
        "longitude": 100.783419
      },
      "links_count": 4,
      "objectID": "4131"
    },
    {
      "name": "Victoria Inner Harbour Airport",
      "city": "Victoria",
      "country": "Canada",
      "iata_code": "YWH",
      "_geoloc": {
        "latitude": 48.422778,
        "longitude": -123.3875
      },
      "links_count": 4,
      "objectID": "4106"
    },
    {
      "name": "St George Muni",
      "city": "Saint George",
      "country": "United States",
      "iata_code": "SGU",
      "_geoloc": {
        "latitude": 37.090583,
        "longitude": -113.593056
      },
      "links_count": 4,
      "objectID": "4064"
    },
    {
      "name": "Armidale",
      "city": "Armidale",
      "country": "Australia",
      "iata_code": "ARM",
      "_geoloc": {
        "latitude": -30.528056,
        "longitude": 151.617222
      },
      "links_count": 4,
      "objectID": "4062"
    },
    {
      "name": "Franklin",
      "city": "Franklin",
      "country": "United States",
      "iata_code": "FKL",
      "_geoloc": {
        "latitude": 41.377874,
        "longitude": -79.860362
      },
      "links_count": 4,
      "objectID": "4058"
    },
    {
      "name": "Hervey Bay Airport",
      "city": "Hervey Bay",
      "country": "Australia",
      "iata_code": "HVB",
      "_geoloc": {
        "latitude": -25.318889,
        "longitude": 152.880278
      },
      "links_count": 4,
      "objectID": "4052"
    },
    {
      "name": "Decatur",
      "city": "Decatur",
      "country": "United States",
      "iata_code": "DEC",
      "_geoloc": {
        "latitude": 39.834564,
        "longitude": -88.865689
      },
      "links_count": 4,
      "objectID": "4042"
    },
    {
      "name": "Jackson Hole Airport",
      "city": "Jacksn Hole",
      "country": "United States",
      "iata_code": "JAC",
      "_geoloc": {
        "latitude": 43.607333333,
        "longitude": -110.73775
      },
      "links_count": 4,
      "objectID": "4027"
    },
    {
      "name": "Redang",
      "city": "Redang",
      "country": "Malaysia",
      "iata_code": "RDN",
      "_geoloc": {
        "latitude": 5.76528,
        "longitude": 103.007
      },
      "links_count": 4,
      "objectID": "4013"
    },
    {
      "name": "Tweed-New Haven Airport",
      "city": "New Haven",
      "country": "United States",
      "iata_code": "HVN",
      "_geoloc": {
        "latitude": 41.26375,
        "longitude": -72.886806
      },
      "links_count": 4,
      "objectID": "4006"
    },
    {
      "name": "Kassel Calden",
      "city": "Kassel",
      "country": "Germany",
      "iata_code": "KSF",
      "_geoloc": {
        "latitude": 51.408394,
        "longitude": 9.377631
      },
      "links_count": 4,
      "objectID": "400"
    },
    {
      "name": "Emerald",
      "city": "Emerald",
      "country": "Australia",
      "iata_code": "EMD",
      "_geoloc": {
        "latitude": -23.5675,
        "longitude": 148.179167
      },
      "links_count": 4,
      "objectID": "3990"
    },
    {
      "name": "Kapadokya",
      "city": "Nevsehir",
      "country": "Turkey",
      "iata_code": "NAV",
      "_geoloc": {
        "latitude": 38.771867,
        "longitude": 34.53455
      },
      "links_count": 4,
      "objectID": "3987"
    },
    {
      "name": "Socotra Intl",
      "city": "Socotra",
      "country": "Yemen",
      "iata_code": "SCT",
      "_geoloc": {
        "latitude": 12.630672,
        "longitude": 53.905778
      },
      "links_count": 4,
      "objectID": "3984"
    },
    {
      "name": "Pullman-Moscow Rgnl",
      "city": "Pullman",
      "country": "United States",
      "iata_code": "PUW",
      "_geoloc": {
        "latitude": 46.743861,
        "longitude": -117.109583
      },
      "links_count": 4,
      "objectID": "3944"
    },
    {
      "name": "Khon Kaen",
      "city": "Khon Kaen",
      "country": "Thailand",
      "iata_code": "KKC",
      "_geoloc": {
        "latitude": 16.466628,
        "longitude": 102.783661
      },
      "links_count": 4,
      "objectID": "3938"
    },
    {
      "name": "Nakhon Phanom",
      "city": "Nakhon Phanom",
      "country": "Thailand",
      "iata_code": "KOP",
      "_geoloc": {
        "latitude": 17.383794,
        "longitude": 104.643022
      },
      "links_count": 4,
      "objectID": "3936"
    },
    {
      "name": "Nakhon Si Thammarat",
      "city": "Nakhon Si Thammarat",
      "country": "Thailand",
      "iata_code": "NST",
      "_geoloc": {
        "latitude": 8.539617,
        "longitude": 99.944725
      },
      "links_count": 4,
      "objectID": "3933"
    },
    {
      "name": "Florence Rgnl",
      "city": "Florence",
      "country": "United States",
      "iata_code": "FLO",
      "_geoloc": {
        "latitude": 34.185361,
        "longitude": -79.723889
      },
      "links_count": 4,
      "objectID": "3879"
    },
    {
      "name": "Valdez Pioneer Fld",
      "city": "Valdez",
      "country": "United States",
      "iata_code": "VDZ",
      "_geoloc": {
        "latitude": 61.133949,
        "longitude": -146.248342
      },
      "links_count": 4,
      "objectID": "3865"
    },
    {
      "name": "Kapalua",
      "city": "Lahania-kapalua",
      "country": "United States",
      "iata_code": "JHM",
      "_geoloc": {
        "latitude": 20.962936,
        "longitude": -156.673031
      },
      "links_count": 4,
      "objectID": "3796"
    },
    {
      "name": "Texarkana Rgnl Webb Fld",
      "city": "Texarkana",
      "country": "United States",
      "iata_code": "TXK",
      "_geoloc": {
        "latitude": 33.453722,
        "longitude": -93.991028
      },
      "links_count": 4,
      "objectID": "3770"
    },
    {
      "name": "Middle Georgia Rgnl",
      "city": "Macon",
      "country": "United States",
      "iata_code": "MCN",
      "_geoloc": {
        "latitude": 32.69285,
        "longitude": -83.649211
      },
      "links_count": 4,
      "objectID": "3754"
    },
    {
      "name": "Sioux Gateway Col Bud Day Fld",
      "city": "Sioux City",
      "country": "United States",
      "iata_code": "SUX",
      "_geoloc": {
        "latitude": 42.402603,
        "longitude": -96.384367
      },
      "links_count": 4,
      "objectID": "3753"
    },
    {
      "name": "Roswell Intl Air Center",
      "city": "Roswell",
      "country": "United States",
      "iata_code": "ROW",
      "_geoloc": {
        "latitude": 33.301556,
        "longitude": -104.530556
      },
      "links_count": 4,
      "objectID": "3736"
    },
    {
      "name": "Boeing Fld King Co Intl",
      "city": "Seattle",
      "country": "United States",
      "iata_code": "BFI",
      "_geoloc": {
        "latitude": 47.53,
        "longitude": -122.301947
      },
      "links_count": 4,
      "objectID": "3726"
    },
    {
      "name": "Abilene Rgnl",
      "city": "Abilene",
      "country": "United States",
      "iata_code": "ABI",
      "_geoloc": {
        "latitude": 32.411319,
        "longitude": -99.681897
      },
      "links_count": 4,
      "objectID": "3718"
    },
    {
      "name": "San Angelo Rgnl Mathis Fld",
      "city": "San Angelo",
      "country": "United States",
      "iata_code": "SJT",
      "_geoloc": {
        "latitude": 31.35775,
        "longitude": -100.496306
      },
      "links_count": 4,
      "objectID": "3708"
    },
    {
      "name": "Mc Kellar Sipes Rgnl",
      "city": "Jackson",
      "country": "United States",
      "iata_code": "MKL",
      "_geoloc": {
        "latitude": 35.599889,
        "longitude": -88.915611
      },
      "links_count": 4,
      "objectID": "3704"
    },
    {
      "name": "Waco Rgnl",
      "city": "Waco",
      "country": "United States",
      "iata_code": "ACT",
      "_geoloc": {
        "latitude": 31.611289,
        "longitude": -97.230519
      },
      "links_count": 4,
      "objectID": "3700"
    },
    {
      "name": "Altoona Blair Co",
      "city": "Altoona",
      "country": "United States",
      "iata_code": "AOO",
      "_geoloc": {
        "latitude": 40.296372,
        "longitude": -78.320022
      },
      "links_count": 4,
      "objectID": "3694"
    },
    {
      "name": "Imperial Co",
      "city": "Imperial",
      "country": "United States",
      "iata_code": "IPL",
      "_geoloc": {
        "latitude": 32.834219,
        "longitude": -115.578744
      },
      "links_count": 4,
      "objectID": "3689"
    },
    {
      "name": "Sheppard Afb Wichita Falls Muni",
      "city": "Wichita Falls",
      "country": "United States",
      "iata_code": "SPS",
      "_geoloc": {
        "latitude": 33.988797,
        "longitude": -98.491894
      },
      "links_count": 4,
      "objectID": "3680"
    },
    {
      "name": "Rickenbacker Intl",
      "city": "Columbus",
      "country": "United States",
      "iata_code": "LCK",
      "_geoloc": {
        "latitude": 39.813786,
        "longitude": -82.927822
      },
      "links_count": 4,
      "objectID": "3674"
    },
    {
      "name": "Homer",
      "city": "Homer",
      "country": "United States",
      "iata_code": "HOM",
      "_geoloc": {
        "latitude": 59.645556,
        "longitude": -151.476583
      },
      "links_count": 4,
      "objectID": "3664"
    },
    {
      "name": "Sloulin Fld Intl",
      "city": "Williston",
      "country": "United States",
      "iata_code": "ISN",
      "_geoloc": {
        "latitude": 48.177939,
        "longitude": -103.642347
      },
      "links_count": 4,
      "objectID": "3659"
    },
    {
      "name": "Southeast Texas Rgnl",
      "city": "Beaumont",
      "country": "United States",
      "iata_code": "BPT",
      "_geoloc": {
        "latitude": 29.950833,
        "longitude": -94.020694
      },
      "links_count": 4,
      "objectID": "3612"
    },
    {
      "name": "Charlo",
      "city": "Charlo",
      "country": "Canada",
      "iata_code": "YCL",
      "_geoloc": {
        "latitude": 47.990833,
        "longitude": -66.330278
      },
      "links_count": 4,
      "objectID": "36"
    },
    {
      "name": "Williamsport Rgnl",
      "city": "Williamsport",
      "country": "United States",
      "iata_code": "IPT",
      "_geoloc": {
        "latitude": 41.241836,
        "longitude": -76.921094
      },
      "links_count": 4,
      "objectID": "3584"
    },
    {
      "name": "Falls Intl",
      "city": "International Falls",
      "country": "United States",
      "iata_code": "INL",
      "_geoloc": {
        "latitude": 48.566186,
        "longitude": -93.403067
      },
      "links_count": 4,
      "objectID": "3535"
    },
    {
      "name": "Northern Maine Rgnl At Presque Isle",
      "city": "Presque Isle",
      "country": "United States",
      "iata_code": "PQI",
      "_geoloc": {
        "latitude": 46.688958,
        "longitude": -68.044797
      },
      "links_count": 4,
      "objectID": "3528"
    },
    {
      "name": "Garden City Rgnl",
      "city": "Garden City",
      "country": "United States",
      "iata_code": "GCK",
      "_geoloc": {
        "latitude": 37.927528,
        "longitude": -100.724417
      },
      "links_count": 4,
      "objectID": "3497"
    },
    {
      "name": "East Texas Rgnl",
      "city": "Longview",
      "country": "United States",
      "iata_code": "GGG",
      "_geoloc": {
        "latitude": 32.384014,
        "longitude": -94.711486
      },
      "links_count": 4,
      "objectID": "3465"
    },
    {
      "name": "Boone Co",
      "city": "Harrison",
      "country": "United States",
      "iata_code": "HRO",
      "_geoloc": {
        "latitude": 36.261519,
        "longitude": -93.154728
      },
      "links_count": 4,
      "objectID": "3461"
    },
    {
      "name": "Point Lay Lrrs",
      "city": "Point Lay",
      "country": "United States",
      "iata_code": "PIZ",
      "_geoloc": {
        "latitude": 69.732875,
        "longitude": -163.005342
      },
      "links_count": 4,
      "objectID": "3414"
    },
    {
      "name": "Barter Island Lrrs",
      "city": "Barter Island",
      "country": "United States",
      "iata_code": "BTI",
      "_geoloc": {
        "latitude": 70.133989,
        "longitude": -143.581867
      },
      "links_count": 4,
      "objectID": "3411"
    },
    {
      "name": "Castlegar",
      "city": "Castlegar",
      "country": "Canada",
      "iata_code": "YCG",
      "_geoloc": {
        "latitude": 49.296389,
        "longitude": -117.6325
      },
      "links_count": 4,
      "objectID": "34"
    },
    {
      "name": "Christmas Island",
      "city": "Christmas Island",
      "country": "Christmas Island",
      "iata_code": "XCH",
      "_geoloc": {
        "latitude": -10.450556,
        "longitude": 105.690278
      },
      "links_count": 4,
      "objectID": "3353"
    },
    {
      "name": "Weipa",
      "city": "Weipa",
      "country": "Australia",
      "iata_code": "WEI",
      "_geoloc": {
        "latitude": -12.678611,
        "longitude": 141.925278
      },
      "links_count": 4,
      "objectID": "3331"
    },
    {
      "name": "Sultan Azlan Shah",
      "city": "Ipoh",
      "country": "Malaysia",
      "iata_code": "IPH",
      "_geoloc": {
        "latitude": 4.567972,
        "longitude": 101.092194
      },
      "links_count": 4,
      "objectID": "3302"
    },
    {
      "name": "Kerteh",
      "city": "Kerteh",
      "country": "Malaysia",
      "iata_code": "KTE",
      "_geoloc": {
        "latitude": 4.537222,
        "longitude": 103.426756
      },
      "links_count": 4,
      "objectID": "3300"
    },
    {
      "name": "Nanaimo",
      "city": "Nanaimo",
      "country": "Canada",
      "iata_code": "YCD",
      "_geoloc": {
        "latitude": 49.052333,
        "longitude": -123.870167
      },
      "links_count": 4,
      "objectID": "33"
    },
    {
      "name": "Rahadi Usman",
      "city": "Ketapang",
      "country": "Indonesia",
      "iata_code": "KTG",
      "_geoloc": {
        "latitude": -1.816639,
        "longitude": 109.963483
      },
      "links_count": 4,
      "objectID": "3282"
    },
    {
      "name": "Bubung",
      "city": "Luwuk",
      "country": "Indonesia",
      "iata_code": "LUW",
      "_geoloc": {
        "latitude": -1.038919,
        "longitude": 122.771906
      },
      "links_count": 4,
      "objectID": "3254"
    },
    {
      "name": "Thandwe",
      "city": "Thandwe",
      "country": "Burma",
      "iata_code": "SNW",
      "_geoloc": {
        "latitude": 18.460731,
        "longitude": 94.300119
      },
      "links_count": 4,
      "objectID": "3236"
    },
    {
      "name": "Myeik",
      "city": "Myeik",
      "country": "Burma",
      "iata_code": "MGZ",
      "_geoloc": {
        "latitude": 12.439797,
        "longitude": 98.621478
      },
      "links_count": 4,
      "objectID": "3223"
    },
    {
      "name": "Trang",
      "city": "Trang",
      "country": "Thailand",
      "iata_code": "TST",
      "_geoloc": {
        "latitude": 7.508744,
        "longitude": 99.616578
      },
      "links_count": 4,
      "objectID": "3182"
    },
    {
      "name": "U Taphao Intl",
      "city": "Pattaya",
      "country": "Thailand",
      "iata_code": "UTP",
      "_geoloc": {
        "latitude": 12.679944,
        "longitude": 101.005028
      },
      "links_count": 4,
      "objectID": "3161"
    },
    {
      "name": "Tirupati",
      "city": "Tirupeti",
      "country": "India",
      "iata_code": "TIR",
      "_geoloc": {
        "latitude": 13.632492,
        "longitude": 79.543256
      },
      "links_count": 4,
      "objectID": "3151"
    },
    {
      "name": "Allahabad",
      "city": "Allahabad",
      "country": "India",
      "iata_code": "IXD",
      "_geoloc": {
        "latitude": 25.440064,
        "longitude": 81.733872
      },
      "links_count": 4,
      "objectID": "3080"
    },
    {
      "name": "Agra",
      "city": "Agra",
      "country": "India",
      "iata_code": "AGR",
      "_geoloc": {
        "latitude": 27.155831,
        "longitude": 77.960892
      },
      "links_count": 4,
      "objectID": "3079"
    },
    {
      "name": "Porbandar",
      "city": "Porbandar",
      "country": "India",
      "iata_code": "PBD",
      "_geoloc": {
        "latitude": 21.648675,
        "longitude": 69.657219
      },
      "links_count": 4,
      "objectID": "3018"
    },
    {
      "name": "Bhavnagar",
      "city": "Bhaunagar",
      "country": "India",
      "iata_code": "BHU",
      "_geoloc": {
        "latitude": 21.752206,
        "longitude": 72.185181
      },
      "links_count": 4,
      "objectID": "3003"
    },
    {
      "name": "Bhuj",
      "city": "Bhuj",
      "country": "India",
      "iata_code": "BHJ",
      "_geoloc": {
        "latitude": 23.287828,
        "longitude": 69.670147
      },
      "links_count": 4,
      "objectID": "2999"
    },
    {
      "name": "Deurne",
      "city": "Antwerp",
      "country": "Belgium",
      "iata_code": "ANR",
      "_geoloc": {
        "latitude": 51.189444,
        "longitude": 4.460278
      },
      "links_count": 4,
      "objectID": "299"
    },
    {
      "name": "Magnitogorsk",
      "city": "Magnetiogorsk",
      "country": "Russia",
      "iata_code": "MQF",
      "_geoloc": {
        "latitude": 53.393131,
        "longitude": 58.755661
      },
      "links_count": 4,
      "objectID": "2969"
    },
    {
      "name": "Gabes",
      "city": "Gabes",
      "country": "Tunisia",
      "iata_code": "GAE",
      "_geoloc": {
        "latitude": 33.876919,
        "longitude": 10.103333
      },
      "links_count": 4,
      "objectID": "291"
    },
    {
      "name": "Mercedita",
      "city": "Ponce",
      "country": "Puerto Rico",
      "iata_code": "PSE",
      "_geoloc": {
        "latitude": 18.008306,
        "longitude": -66.563028
      },
      "links_count": 4,
      "objectID": "2889"
    },
    {
      "name": "Dr Antonio Nicolas Briceno",
      "city": "Valera",
      "country": "Venezuela",
      "iata_code": "VLV",
      "_geoloc": {
        "latitude": 9.340797,
        "longitude": -70.584089
      },
      "links_count": 4,
      "objectID": "2870"
    },
    {
      "name": "General Bartolome Salom Intl",
      "city": "Puerto Cabello",
      "country": "Venezuela",
      "iata_code": "PBL",
      "_geoloc": {
        "latitude": 10.4805,
        "longitude": -68.073025
      },
      "links_count": 4,
      "objectID": "2854"
    },
    {
      "name": "Alberto Carnevalli",
      "city": "Merida",
      "country": "Venezuela",
      "iata_code": "MRD",
      "_geoloc": {
        "latitude": 8.582294,
        "longitude": -71.161186
      },
      "links_count": 4,
      "objectID": "2849"
    },
    {
      "name": "Barinas",
      "city": "Barinas",
      "country": "Venezuela",
      "iata_code": "BNS",
      "_geoloc": {
        "latitude": 8.619575,
        "longitude": -70.220825
      },
      "links_count": 4,
      "objectID": "2822"
    },
    {
      "name": "Capitan Fap Guillermo Concha Iberico",
      "city": "Piura",
      "country": "Peru",
      "iata_code": "PIU",
      "_geoloc": {
        "latitude": -5.20575,
        "longitude": -80.616444
      },
      "links_count": 4,
      "objectID": "2809"
    },
    {
      "name": "Coronel Carlos Ciriani Santa Rosa Intl",
      "city": "Tacna",
      "country": "Peru",
      "iata_code": "TCQ",
      "_geoloc": {
        "latitude": -18.053333,
        "longitude": -70.275833
      },
      "links_count": 4,
      "objectID": "2807"
    },
    {
      "name": "Coronel Fap Alfredo Mendivil Duarte",
      "city": "Ayacucho",
      "country": "Peru",
      "iata_code": "AYP",
      "_geoloc": {
        "latitude": -13.154819,
        "longitude": -74.204417
      },
      "links_count": 4,
      "objectID": "2786"
    },
    {
      "name": "Capitan Nicolas Rojas",
      "city": "Potosi",
      "country": "Bolivia",
      "iata_code": "POI",
      "_geoloc": {
        "latitude": -19.543069,
        "longitude": -65.723706
      },
      "links_count": 4,
      "objectID": "2764"
    },
    {
      "name": "Alfonso Lopez Pumarejo",
      "city": "Valledupar",
      "country": "Colombia",
      "iata_code": "VUP",
      "_geoloc": {
        "latitude": 10.435042,
        "longitude": -73.249506
      },
      "links_count": 4,
      "objectID": "2755"
    },
    {
      "name": "Santiago Perez",
      "city": "Arauca",
      "country": "Colombia",
      "iata_code": "AUC",
      "_geoloc": {
        "latitude": 7.068881,
        "longitude": -70.736925
      },
      "links_count": 4,
      "objectID": "2752"
    },
    {
      "name": "Tame",
      "city": "Tame",
      "country": "Colombia",
      "iata_code": "TME",
      "_geoloc": {
        "latitude": 6.451081,
        "longitude": -71.760261
      },
      "links_count": 4,
      "objectID": "2751"
    },
    {
      "name": "Eduardo Falla Solano",
      "city": "San Vincente De Caguan",
      "country": "Colombia",
      "iata_code": "SVI",
      "_geoloc": {
        "latitude": 2.152175,
        "longitude": -74.76635
      },
      "links_count": 4,
      "objectID": "2750"
    },
    {
      "name": "Jorge E Gonzalez Torres",
      "city": "San Jose Del Guaviare",
      "country": "Colombia",
      "iata_code": "SJE",
      "_geoloc": {
        "latitude": 2.579694,
        "longitude": -72.639358
      },
      "links_count": 4,
      "objectID": "2747"
    },
    {
      "name": "Benito Salas",
      "city": "Neiva",
      "country": "Colombia",
      "iata_code": "NVA",
      "_geoloc": {
        "latitude": 2.95015,
        "longitude": -75.294
      },
      "links_count": 4,
      "objectID": "2734"
    },
    {
      "name": "Juan Casiano",
      "city": "Guapi",
      "country": "Colombia",
      "iata_code": "GPI",
      "_geoloc": {
        "latitude": 2.570133,
        "longitude": -77.8986
      },
      "links_count": 4,
      "objectID": "2722"
    },
    {
      "name": "Gustavo Artunduaga Paredes",
      "city": "Florencia",
      "country": "Colombia",
      "iata_code": "FLA",
      "_geoloc": {
        "latitude": 1.589189,
        "longitude": -75.564372
      },
      "links_count": 4,
      "objectID": "2719"
    },
    {
      "name": "Las Brujas",
      "city": "Corozal",
      "country": "Colombia",
      "iata_code": "CZU",
      "_geoloc": {
        "latitude": 9.332742,
        "longitude": -75.285594
      },
      "links_count": 4,
      "objectID": "2717"
    },
    {
      "name": "Gerardo Tobar Lopez",
      "city": "Buenaventura",
      "country": "Colombia",
      "iata_code": "BUN",
      "_geoloc": {
        "latitude": 3.819628,
        "longitude": -76.989767
      },
      "links_count": 4,
      "objectID": "2712"
    },
    {
      "name": "El Eden",
      "city": "Armenia",
      "country": "Colombia",
      "iata_code": "AXM",
      "_geoloc": {
        "latitude": 4.452775,
        "longitude": -75.766447
      },
      "links_count": 4,
      "objectID": "2705"
    },
    {
      "name": "Seymour",
      "city": "Galapagos",
      "country": "Ecuador",
      "iata_code": "GPS",
      "_geoloc": {
        "latitude": -0.453758,
        "longitude": -90.265914
      },
      "links_count": 4,
      "objectID": "2672"
    },
    {
      "name": "Pichoy",
      "city": "Valdivia",
      "country": "Chile",
      "iata_code": "ZAL",
      "_geoloc": {
        "latitude": -39.649956,
        "longitude": -73.086111
      },
      "links_count": 4,
      "objectID": "2667"
    },
    {
      "name": "Mataveri Intl",
      "city": "Easter Island",
      "country": "Chile",
      "iata_code": "IPC",
      "_geoloc": {
        "latitude": -27.164792,
        "longitude": -109.421831
      },
      "links_count": 4,
      "objectID": "2657"
    },
    {
      "name": "Calabar",
      "city": "Calabar",
      "country": "Nigeria",
      "iata_code": "CBQ",
      "_geoloc": {
        "latitude": 4.976019,
        "longitude": 8.347197
      },
      "links_count": 4,
      "objectID": "263"
    },
    {
      "name": "Benin",
      "city": "Benin",
      "country": "Nigeria",
      "iata_code": "BNI",
      "_geoloc": {
        "latitude": 6.316981,
        "longitude": 5.599503
      },
      "links_count": 4,
      "objectID": "262"
    },
    {
      "name": "Rio Grande",
      "city": "Rio Grande",
      "country": "Brazil",
      "iata_code": "RIG",
      "_geoloc": {
        "latitude": -32.082617,
        "longitude": -52.166542
      },
      "links_count": 4,
      "objectID": "2611"
    },
    {
      "name": "Santo Angelo",
      "city": "Santo Angelo",
      "country": "Brazil",
      "iata_code": "GEL",
      "_geoloc": {
        "latitude": -28.281683,
        "longitude": -54.169139
      },
      "links_count": 4,
      "objectID": "2596"
    },
    {
      "name": "Presidente Joao Suassuna",
      "city": "Campina Grande",
      "country": "Brazil",
      "iata_code": "CPV",
      "_geoloc": {
        "latitude": -7.269917,
        "longitude": -35.896364
      },
      "links_count": 4,
      "objectID": "2577"
    },
    {
      "name": "Presidente Prudente",
      "city": "President Prudente",
      "country": "Brazil",
      "iata_code": "PPB",
      "_geoloc": {
        "latitude": -22.175056,
        "longitude": -51.424639
      },
      "links_count": 4,
      "objectID": "2550"
    },
    {
      "name": "Forquilhinha",
      "city": "Criciuma",
      "country": "Brazil",
      "iata_code": "CCM",
      "_geoloc": {
        "latitude": -28.725817,
        "longitude": -49.424739
      },
      "links_count": 4,
      "objectID": "2541"
    },
    {
      "name": "Aracatuba",
      "city": "Aracatuba",
      "country": "Brazil",
      "iata_code": "ARU",
      "_geoloc": {
        "latitude": -21.141342,
        "longitude": -50.424722
      },
      "links_count": 4,
      "objectID": "2525"
    },
    {
      "name": "Takoradi",
      "city": "Takoradi",
      "country": "Ghana",
      "iata_code": "TKD",
      "_geoloc": {
        "latitude": 4.896056,
        "longitude": -1.774756
      },
      "links_count": 4,
      "objectID": "252"
    },
    {
      "name": "Rio Grande",
      "city": "Rio Grande",
      "country": "Argentina",
      "iata_code": "RGA",
      "_geoloc": {
        "latitude": -53.777667,
        "longitude": -67.749389
      },
      "links_count": 4,
      "objectID": "2495"
    },
    {
      "name": "Jujuy",
      "city": "Jujuy",
      "country": "Argentina",
      "iata_code": "JUJ",
      "_geoloc": {
        "latitude": -24.392778,
        "longitude": -65.097778
      },
      "links_count": 4,
      "objectID": "2477"
    },
    {
      "name": "Bobo Dioulasso",
      "city": "Bobo-dioulasso",
      "country": "Burkina Faso",
      "iata_code": "BOY",
      "_geoloc": {
        "latitude": 11.160056,
        "longitude": -4.330969
      },
      "links_count": 4,
      "objectID": "247"
    },
    {
      "name": "San Juan",
      "city": "San Julian",
      "country": "Argentina",
      "iata_code": "UAQ",
      "_geoloc": {
        "latitude": -31.571472,
        "longitude": -68.418194
      },
      "links_count": 4,
      "objectID": "2461"
    },
    {
      "name": "Teniente Benjamin Matienzo",
      "city": "Tucuman",
      "country": "Argentina",
      "iata_code": "TUC",
      "_geoloc": {
        "latitude": -26.840861,
        "longitude": -65.104944
      },
      "links_count": 4,
      "objectID": "2460"
    },
    {
      "name": "San Rafael",
      "city": "San Rafael",
      "country": "Argentina",
      "iata_code": "AFA",
      "_geoloc": {
        "latitude": -34.588314,
        "longitude": -68.403854
      },
      "links_count": 4,
      "objectID": "2454"
    },
    {
      "name": "Sauce Viejo",
      "city": "Santa Fe",
      "country": "Argentina",
      "iata_code": "SFN",
      "_geoloc": {
        "latitude": -31.711666,
        "longitude": -60.811668
      },
      "links_count": 4,
      "objectID": "2441"
    },
    {
      "name": "In Amenas",
      "city": "Zarzaitine",
      "country": "Algeria",
      "iata_code": "IAM",
      "_geoloc": {
        "latitude": 28.05155,
        "longitude": 9.642911
      },
      "links_count": 4,
      "objectID": "244"
    },
    {
      "name": "General Urquiza",
      "city": "Parana",
      "country": "Argentina",
      "iata_code": "PRA",
      "_geoloc": {
        "latitude": -31.794778,
        "longitude": -60.480361
      },
      "links_count": 4,
      "objectID": "2439"
    },
    {
      "name": "Pagadian",
      "city": "Pagadian",
      "country": "Philippines",
      "iata_code": "PAG",
      "_geoloc": {
        "latitude": 7.827197,
        "longitude": 123.458294
      },
      "links_count": 4,
      "objectID": "2401"
    },
    {
      "name": "El Golea",
      "city": "El Golea",
      "country": "Algeria",
      "iata_code": "ELG",
      "_geoloc": {
        "latitude": 30.571294,
        "longitude": 2.859586
      },
      "links_count": 4,
      "objectID": "236"
    },
    {
      "name": "Misawa Ab",
      "city": "Misawa",
      "country": "Japan",
      "iata_code": "MSJ",
      "_geoloc": {
        "latitude": 40.703222,
        "longitude": 141.368364
      },
      "links_count": 4,
      "objectID": "2346"
    },
    {
      "name": "Tokushima",
      "city": "Tokushima",
      "country": "Japan",
      "iata_code": "TKS",
      "_geoloc": {
        "latitude": 34.132808,
        "longitude": 134.606639
      },
      "links_count": 4,
      "objectID": "2336"
    },
    {
      "name": "Amami",
      "city": "Amami",
      "country": "Japan",
      "iata_code": "ASJ",
      "_geoloc": {
        "latitude": 28.430633,
        "longitude": 129.712542
      },
      "links_count": 4,
      "objectID": "2316"
    },
    {
      "name": "Iki",
      "city": "Iki",
      "country": "Japan",
      "iata_code": "IKI",
      "_geoloc": {
        "latitude": 33.749027,
        "longitude": 129.785417
      },
      "links_count": 4,
      "objectID": "2295"
    },
    {
      "name": "Wakkanai",
      "city": "Wakkanai",
      "country": "Japan",
      "iata_code": "WKJ",
      "_geoloc": {
        "latitude": 45.404167,
        "longitude": 141.800833
      },
      "links_count": 4,
      "objectID": "2294"
    },
    {
      "name": "Nakashibetsu",
      "city": "Nakashibetsu",
      "country": "Japan",
      "iata_code": "SHB",
      "_geoloc": {
        "latitude": 43.5775,
        "longitude": 144.96
      },
      "links_count": 4,
      "objectID": "2291"
    },
    {
      "name": "Matsumoto",
      "city": "Matsumoto",
      "country": "Japan",
      "iata_code": "MMJ",
      "_geoloc": {
        "latitude": 36.166758,
        "longitude": 137.922669
      },
      "links_count": 4,
      "objectID": "2280"
    },
    {
      "name": "Yap Intl",
      "city": "Yap",
      "country": "Micronesia",
      "iata_code": "YAP",
      "_geoloc": {
        "latitude": 9.498911,
        "longitude": 138.082497
      },
      "links_count": 4,
      "objectID": "2258"
    },
    {
      "name": "Kosrae",
      "city": "Kosrae",
      "country": "Micronesia",
      "iata_code": "KSA",
      "_geoloc": {
        "latitude": 5.356975,
        "longitude": 162.958386
      },
      "links_count": 4,
      "objectID": "2257"
    },
    {
      "name": "Chuuk Intl",
      "city": "Chuuk",
      "country": "Micronesia",
      "iata_code": "TKK",
      "_geoloc": {
        "latitude": 7.461869,
        "longitude": 151.843006
      },
      "links_count": 4,
      "objectID": "2254"
    },
    {
      "name": "Rota Intl",
      "city": "Rota",
      "country": "Northern Mariana Islands",
      "iata_code": "ROP",
      "_geoloc": {
        "latitude": 14.174308,
        "longitude": 145.242536
      },
      "links_count": 4,
      "objectID": "2243"
    },
    {
      "name": "Hassi R Mel",
      "city": "Tilrempt",
      "country": "Algeria",
      "iata_code": "HRM",
      "_geoloc": {
        "latitude": 32.930431,
        "longitude": 3.311542
      },
      "links_count": 4,
      "objectID": "224"
    },
    {
      "name": "Zhob",
      "city": "Zhob",
      "country": "Pakistan",
      "iata_code": "PZH",
      "_geoloc": {
        "latitude": 31.358381,
        "longitude": 69.463606
      },
      "links_count": 4,
      "objectID": "2233"
    },
    {
      "name": "Moenjodaro",
      "city": "Moenjodaro",
      "country": "Pakistan",
      "iata_code": "MJD",
      "_geoloc": {
        "latitude": 27.335156,
        "longitude": 68.143053
      },
      "links_count": 4,
      "objectID": "2212"
    },
    {
      "name": "Faisalabad Intl",
      "city": "Faisalabad",
      "country": "Pakistan",
      "iata_code": "LYP",
      "_geoloc": {
        "latitude": 31.365014,
        "longitude": 72.994842
      },
      "links_count": 4,
      "objectID": "2202"
    },
    {
      "name": "Aqaba King Hussein Intl",
      "city": "Aqaba",
      "country": "Jordan",
      "iata_code": "AQJ",
      "_geoloc": {
        "latitude": 29.611619,
        "longitude": 35.018067
      },
      "links_count": 4,
      "objectID": "2172"
    },
    {
      "name": "Ramsar",
      "city": "Ramsar",
      "country": "Iran",
      "iata_code": "RZR",
      "_geoloc": {
        "latitude": 36.909908,
        "longitude": 50.679589
      },
      "links_count": 4,
      "objectID": "2151"
    },
    {
      "name": "Birjand",
      "city": "Birjand",
      "country": "Iran",
      "iata_code": "XBJ",
      "_geoloc": {
        "latitude": 32.898056,
        "longitude": 59.266111
      },
      "links_count": 4,
      "objectID": "2142"
    },
    {
      "name": "Bandar Lengeh",
      "city": "Bandar Lengeh",
      "country": "Iran",
      "iata_code": "BDH",
      "_geoloc": {
        "latitude": 26.532,
        "longitude": 54.824847
      },
      "links_count": 4,
      "objectID": "2110"
    },
    {
      "name": "Mahshahr",
      "city": "Bandar Mahshahr",
      "country": "Iran",
      "iata_code": "MRX",
      "_geoloc": {
        "latitude": 30.556192,
        "longitude": 49.151879
      },
      "links_count": 4,
      "objectID": "2103"
    },
    {
      "name": "Sharurah",
      "city": "Sharurah",
      "country": "Saudi Arabia",
      "iata_code": "SHW",
      "_geoloc": {
        "latitude": 17.466875,
        "longitude": 47.121431
      },
      "links_count": 4,
      "objectID": "2086"
    },
    {
      "name": "Arar",
      "city": "Arar",
      "country": "Saudi Arabia",
      "iata_code": "RAE",
      "_geoloc": {
        "latitude": 30.906589,
        "longitude": 41.138217
      },
      "links_count": 4,
      "objectID": "2084"
    },
    {
      "name": "Qaisumah",
      "city": "Hafr Al-batin",
      "country": "Saudi Arabia",
      "iata_code": "AQI",
      "_geoloc": {
        "latitude": 28.335192,
        "longitude": 46.125069
      },
      "links_count": 4,
      "objectID": "2076"
    },
    {
      "name": "Guriat",
      "city": "Guriat",
      "country": "Saudi Arabia",
      "iata_code": "URY",
      "_geoloc": {
        "latitude": 31.411942,
        "longitude": 37.279469
      },
      "links_count": 4,
      "objectID": "2068"
    },
    {
      "name": "Whangarei",
      "city": "Whangarei",
      "country": "New Zealand",
      "iata_code": "WRE",
      "_geoloc": {
        "latitude": -35.768333,
        "longitude": 174.365
      },
      "links_count": 4,
      "objectID": "2045"
    },
    {
      "name": "Paraparaumu",
      "city": "Paraparaumu",
      "country": "New Zealand",
      "iata_code": "PPQ",
      "_geoloc": {
        "latitude": -40.904722,
        "longitude": 174.989167
      },
      "links_count": 4,
      "objectID": "2029"
    },
    {
      "name": "Invercargill",
      "city": "Invercargill",
      "country": "New Zealand",
      "iata_code": "IVC",
      "_geoloc": {
        "latitude": -46.412408,
        "longitude": 168.312992
      },
      "links_count": 4,
      "objectID": "2025"
    },
    {
      "name": "Gisborne",
      "city": "Gisborne",
      "country": "New Zealand",
      "iata_code": "GIS",
      "_geoloc": {
        "latitude": -38.663333,
        "longitude": 177.978333
      },
      "links_count": 4,
      "objectID": "2012"
    },
    {
      "name": "Taupo",
      "city": "Taupo",
      "country": "New Zealand",
      "iata_code": "TUO",
      "_geoloc": {
        "latitude": -38.739723,
        "longitude": 176.084444
      },
      "links_count": 4,
      "objectID": "2007"
    },
    {
      "name": "Ouvea",
      "city": "Ouvea",
      "country": "New Caledonia",
      "iata_code": "UVE",
      "_geoloc": {
        "latitude": -20.640556,
        "longitude": 166.572778
      },
      "links_count": 4,
      "objectID": "2004"
    },
    {
      "name": "Port Hardy",
      "city": "Port Hardy",
      "country": "Canada",
      "iata_code": "YZT",
      "_geoloc": {
        "latitude": 50.680556,
        "longitude": -127.366667
      },
      "links_count": 4,
      "objectID": "200"
    },
    {
      "name": "Koumac",
      "city": "Koumac",
      "country": "New Caledonia",
      "iata_code": "KOC",
      "_geoloc": {
        "latitude": -20.546314,
        "longitude": 164.255625
      },
      "links_count": 4,
      "objectID": "1999"
    },
    {
      "name": "Mataiva",
      "city": "Mataiva",
      "country": "French Polynesia",
      "iata_code": "MVT",
      "_geoloc": {
        "latitude": -14.868055,
        "longitude": -148.717225
      },
      "links_count": 4,
      "objectID": "1985"
    },
    {
      "name": "Fakarava",
      "city": "Fakarava",
      "country": "French Polynesia",
      "iata_code": "FAV",
      "_geoloc": {
        "latitude": -16.05415,
        "longitude": -145.656994
      },
      "links_count": 4,
      "objectID": "1977"
    },
    {
      "name": "Mayaguana",
      "city": "Mayaguana",
      "country": "Bahamas",
      "iata_code": "MYG",
      "_geoloc": {
        "latitude": 22.379528,
        "longitude": -73.0135
      },
      "links_count": 4,
      "objectID": "1952"
    },
    {
      "name": "Stella Maris",
      "city": "Stella Maris",
      "country": "Bahamas",
      "iata_code": "SML",
      "_geoloc": {
        "latitude": 23.581444,
        "longitude": -75.270475
      },
      "links_count": 4,
      "objectID": "1951"
    },
    {
      "name": "Deadmans Cay",
      "city": "Dead Man's Cay",
      "country": "Bahamas",
      "iata_code": "LGI",
      "_geoloc": {
        "latitude": 23.179014,
        "longitude": -75.093597
      },
      "links_count": 4,
      "objectID": "1950"
    },
    {
      "name": "Matthew Town",
      "city": "Matthew Town",
      "country": "Bahamas",
      "iata_code": "IGA",
      "_geoloc": {
        "latitude": 20.975,
        "longitude": -73.666862
      },
      "links_count": 4,
      "objectID": "1949"
    },
    {
      "name": "Rock Sound",
      "city": "Rock Sound",
      "country": "Bahamas",
      "iata_code": "RSD",
      "_geoloc": {
        "latitude": 24.8917,
        "longitude": -76.177739
      },
      "links_count": 4,
      "objectID": "1946"
    },
    {
      "name": "South Bimini",
      "city": "Alice Town",
      "country": "Bahamas",
      "iata_code": "BIM",
      "_geoloc": {
        "latitude": 25.699881,
        "longitude": -79.264656
      },
      "links_count": 4,
      "objectID": "1937"
    },
    {
      "name": "Treasure Cay",
      "city": "Treasure Cay",
      "country": "Bahamas",
      "iata_code": "TCB",
      "_geoloc": {
        "latitude": 26.745336,
        "longitude": -77.391269
      },
      "links_count": 4,
      "objectID": "1934"
    },
    {
      "name": "Spring Point",
      "city": "Spring Point",
      "country": "Bahamas",
      "iata_code": "AXP",
      "_geoloc": {
        "latitude": 22.441828,
        "longitude": -73.970858
      },
      "links_count": 4,
      "objectID": "1932"
    },
    {
      "name": "Enrique Malek Intl",
      "city": "David",
      "country": "Panama",
      "iata_code": "DAV",
      "_geoloc": {
        "latitude": 8.391003,
        "longitude": -82.434992
      },
      "links_count": 4,
      "objectID": "1867"
    },
    {
      "name": "Tapachula Intl",
      "city": "Tapachula",
      "country": "Mexico",
      "iata_code": "TAP",
      "_geoloc": {
        "latitude": 14.794339,
        "longitude": -92.370025
      },
      "links_count": 4,
      "objectID": "1851"
    },
    {
      "name": "Licenciado Y Gen Ignacio Lopez Rayon",
      "city": "Uruapan",
      "country": "Mexico",
      "iata_code": "UPN",
      "_geoloc": {
        "latitude": 19.396692,
        "longitude": -102.039056
      },
      "links_count": 4,
      "objectID": "1835"
    },
    {
      "name": "Piedras Negras Intl",
      "city": "Piedras Negras",
      "country": "Mexico",
      "iata_code": "PDS",
      "_geoloc": {
        "latitude": 28.627394,
        "longitude": -100.535211
      },
      "links_count": 4,
      "objectID": "1834"
    },
    {
      "name": "Minatitlan",
      "city": "Minatitlan",
      "country": "Mexico",
      "iata_code": "MTT",
      "_geoloc": {
        "latitude": 18.103419,
        "longitude": -94.580681
      },
      "links_count": 4,
      "objectID": "1822"
    },
    {
      "name": "General Servando Canales Intl",
      "city": "Matamoros",
      "country": "Mexico",
      "iata_code": "MAM",
      "_geoloc": {
        "latitude": 25.769894,
        "longitude": -97.525311
      },
      "links_count": 4,
      "objectID": "1818"
    },
    {
      "name": "Lazaro Cardenas",
      "city": "Lazard Cardenas",
      "country": "Mexico",
      "iata_code": "LZC",
      "_geoloc": {
        "latitude": 18.001731,
        "longitude": -102.220525
      },
      "links_count": 4,
      "objectID": "1813"
    },
    {
      "name": "Plan De Guadalupe Intl",
      "city": "Saltillo",
      "country": "Mexico",
      "iata_code": "SLW",
      "_geoloc": {
        "latitude": 25.549497,
        "longitude": -100.928669
      },
      "links_count": 4,
      "objectID": "1810"
    },
    {
      "name": "General Pedro Jose Mendez Intl",
      "city": "Ciudad Victoria",
      "country": "Mexico",
      "iata_code": "CVM",
      "_geoloc": {
        "latitude": 23.703336,
        "longitude": -98.956486
      },
      "links_count": 4,
      "objectID": "1798"
    },
    {
      "name": "Ingeniero Alberto Acuna Ongay Intl",
      "city": "Campeche",
      "country": "Mexico",
      "iata_code": "CPE",
      "_geoloc": {
        "latitude": 19.816794,
        "longitude": -90.500314
      },
      "links_count": 4,
      "objectID": "1795"
    },
    {
      "name": "North Bay",
      "city": "North Bay",
      "country": "Canada",
      "iata_code": "YYB",
      "_geoloc": {
        "latitude": 46.363611,
        "longitude": -79.422778
      },
      "links_count": 4,
      "objectID": "177"
    },
    {
      "name": "South Caicos",
      "city": "South Caicos",
      "country": "Turks and Caicos Islands",
      "iata_code": "XSC",
      "_geoloc": {
        "latitude": 21.515739,
        "longitude": -71.528528
      },
      "links_count": 4,
      "objectID": "1755"
    },
    {
      "name": "Abbotsford",
      "city": "Abbotsford",
      "country": "Canada",
      "iata_code": "YXX",
      "_geoloc": {
        "latitude": 49.025278,
        "longitude": -122.360556
      },
      "links_count": 4,
      "objectID": "175"
    },
    {
      "name": "Cardak",
      "city": "Denizli",
      "country": "Turkey",
      "iata_code": "DNZ",
      "_geoloc": {
        "latitude": 37.785567,
        "longitude": 29.701297
      },
      "links_count": 4,
      "objectID": "1699"
    },
    {
      "name": "Merzifon",
      "city": "Merzifon",
      "country": "Turkey",
      "iata_code": "MZH",
      "_geoloc": {
        "latitude": 40.829375,
        "longitude": 35.521992
      },
      "links_count": 4,
      "objectID": "1693"
    },
    {
      "name": "St Gallen Altenrhein",
      "city": "Altenrhein",
      "country": "Switzerland",
      "iata_code": "ACH",
      "_geoloc": {
        "latitude": 47.485033,
        "longitude": 9.560775
      },
      "links_count": 4,
      "objectID": "1679"
    },
    {
      "name": "Lugano",
      "city": "Lugano",
      "country": "Switzerland",
      "iata_code": "LUG",
      "_geoloc": {
        "latitude": 46.004275,
        "longitude": 8.910578
      },
      "links_count": 4,
      "objectID": "1675"
    },
    {
      "name": "Satu Mare",
      "city": "Satu Mare",
      "country": "Romania",
      "iata_code": "SUJ",
      "_geoloc": {
        "latitude": 47.703275,
        "longitude": 22.8857
      },
      "links_count": 4,
      "objectID": "1659"
    },
    {
      "name": "Oradea",
      "city": "Oradea",
      "country": "Romania",
      "iata_code": "OMR",
      "_geoloc": {
        "latitude": 47.025278,
        "longitude": 21.9025
      },
      "links_count": 4,
      "objectID": "1656"
    },
    {
      "name": "Craiova",
      "city": "Craiova",
      "country": "Romania",
      "iata_code": "CRA",
      "_geoloc": {
        "latitude": 44.318139,
        "longitude": 23.888611
      },
      "links_count": 4,
      "objectID": "1654"
    },
    {
      "name": "Tautii Magheraus",
      "city": "Baia Mare",
      "country": "Romania",
      "iata_code": "BAY",
      "_geoloc": {
        "latitude": 47.658389,
        "longitude": 23.470022
      },
      "links_count": 4,
      "objectID": "1649"
    },
    {
      "name": "Sao Jorge",
      "city": "Sao Jorge Island",
      "country": "Portugal",
      "iata_code": "SJZ",
      "_geoloc": {
        "latitude": 38.6655,
        "longitude": -28.175817
      },
      "links_count": 4,
      "objectID": "1639"
    },
    {
      "name": "Haifa",
      "city": "Haifa",
      "country": "Israel",
      "iata_code": "HFA",
      "_geoloc": {
        "latitude": 32.809444,
        "longitude": 35.043056
      },
      "links_count": 4,
      "objectID": "1596"
    },
    {
      "name": "Pardubice",
      "city": "Pardubice",
      "country": "Czech Republic",
      "iata_code": "PED",
      "_geoloc": {
        "latitude": 50.013419,
        "longitude": 15.738647
      },
      "links_count": 4,
      "objectID": "1584"
    },
    {
      "name": "Bolzano",
      "city": "Bolzano",
      "country": "Italy",
      "iata_code": "BZO",
      "_geoloc": {
        "latitude": 46.460194,
        "longitude": 11.326383
      },
      "links_count": 4,
      "objectID": "1536"
    },
    {
      "name": "Qikiqtarjuaq",
      "city": "Broughton Island",
      "country": "Canada",
      "iata_code": "YVM",
      "_geoloc": {
        "latitude": 67.545833,
        "longitude": -64.031389
      },
      "links_count": 4,
      "objectID": "152"
    },
    {
      "name": "Debrecen",
      "city": "Debrecen",
      "country": "Hungary",
      "iata_code": "DEB",
      "_geoloc": {
        "latitude": 47.488917,
        "longitude": 21.615333
      },
      "links_count": 4,
      "objectID": "1490"
    },
    {
      "name": "Alexandros Papadiamantis",
      "city": "Skiathos",
      "country": "Greece",
      "iata_code": "JSI",
      "_geoloc": {
        "latitude": 39.1771,
        "longitude": 23.503675
      },
      "links_count": 4,
      "objectID": "1475"
    },
    {
      "name": "Ioannina",
      "city": "Ioannina",
      "country": "Greece",
      "iata_code": "IOA",
      "_geoloc": {
        "latitude": 39.696388,
        "longitude": 20.8225
      },
      "links_count": 4,
      "objectID": "1451"
    },
    {
      "name": "Lann Bihoue",
      "city": "Lorient",
      "country": "France",
      "iata_code": "LRT",
      "_geoloc": {
        "latitude": 47.760555,
        "longitude": -3.44
      },
      "links_count": 4,
      "objectID": "1409"
    },
    {
      "name": "St Gatien",
      "city": "Deauville",
      "country": "France",
      "iata_code": "DOL",
      "_geoloc": {
        "latitude": 49.365339,
        "longitude": 0.154306
      },
      "links_count": 4,
      "objectID": "1408"
    },
    {
      "name": "Sachs Harbour",
      "city": "Sachs Harbour",
      "country": "Canada",
      "iata_code": "YSY",
      "_geoloc": {
        "latitude": 71.993889,
        "longitude": -125.2425
      },
      "links_count": 4,
      "objectID": "139"
    },
    {
      "name": "Vatry",
      "city": "Chalons",
      "country": "France",
      "iata_code": "XCR",
      "_geoloc": {
        "latitude": 48.776072,
        "longitude": 4.184492
      },
      "links_count": 4,
      "objectID": "1374"
    },
    {
      "name": "Caumont",
      "city": "Avignon",
      "country": "France",
      "iata_code": "AVN",
      "_geoloc": {
        "latitude": 43.9073,
        "longitude": 4.901831
      },
      "links_count": 4,
      "objectID": "1361"
    },
    {
      "name": "Resolute Bay",
      "city": "Resolute",
      "country": "Canada",
      "iata_code": "YRB",
      "_geoloc": {
        "latitude": 74.716944,
        "longitude": -94.969444
      },
      "links_count": 4,
      "objectID": "128"
    },
    {
      "name": "Bassillac",
      "city": "Perigueux",
      "country": "France",
      "iata_code": "PGX",
      "_geoloc": {
        "latitude": 45.198055,
        "longitude": 0.815556
      },
      "links_count": 4,
      "objectID": "1279"
    },
    {
      "name": "La Garenne",
      "city": "Agen",
      "country": "France",
      "iata_code": "AGF",
      "_geoloc": {
        "latitude": 44.174721,
        "longitude": 0.590556
      },
      "links_count": 4,
      "objectID": "1262"
    },
    {
      "name": "Sydney",
      "city": "Sydney",
      "country": "Canada",
      "iata_code": "YQY",
      "_geoloc": {
        "latitude": 46.161388,
        "longitude": -60.047779
      },
      "links_count": 4,
      "objectID": "126"
    },
    {
      "name": "Talavera La Real",
      "city": "Badajoz",
      "country": "Spain",
      "iata_code": "BJZ",
      "_geoloc": {
        "latitude": 38.89125,
        "longitude": -6.821333
      },
      "links_count": 4,
      "objectID": "1219"
    },
    {
      "name": "Plovdiv",
      "city": "Plovdiv",
      "country": "Bulgaria",
      "iata_code": "PDV",
      "_geoloc": {
        "latitude": 42.067806,
        "longitude": 24.850833
      },
      "links_count": 4,
      "objectID": "1193"
    },
    {
      "name": "El Fashir",
      "city": "El Fasher",
      "country": "Sudan",
      "iata_code": "ELF",
      "_geoloc": {
        "latitude": 13.614892,
        "longitude": 25.32465
      },
      "links_count": 4,
      "objectID": "1169"
    },
    {
      "name": "Gondar",
      "city": "Gondar",
      "country": "Ethiopia",
      "iata_code": "GDQ",
      "_geoloc": {
        "latitude": 12.5199,
        "longitude": 37.434047
      },
      "links_count": 4,
      "objectID": "1114"
    },
    {
      "name": "Axum",
      "city": "Axum",
      "country": "Ethiopia",
      "iata_code": "AXU",
      "_geoloc": {
        "latitude": 14.14675,
        "longitude": 38.772833
      },
      "links_count": 4,
      "objectID": "1110"
    },
    {
      "name": "Preguica",
      "city": "Sao Nocolau Island",
      "country": "Cape Verde",
      "iata_code": "SNE",
      "_geoloc": {
        "latitude": 16.588356,
        "longitude": -24.284656
      },
      "links_count": 4,
      "objectID": "1105"
    },
    {
      "name": "Fort Chipewyan",
      "city": "Fort Chipewyan",
      "country": "Canada",
      "iata_code": "YPY",
      "_geoloc": {
        "latitude": 58.767223,
        "longitude": -111.117222
      },
      "links_count": 4,
      "objectID": "109"
    },
    {
      "name": "Prince Rupert",
      "city": "Prince Pupert",
      "country": "Canada",
      "iata_code": "YPR",
      "_geoloc": {
        "latitude": 54.28611,
        "longitude": -130.444722
      },
      "links_count": 4,
      "objectID": "108"
    },
    {
      "name": "Ouarzazate",
      "city": "Ouarzazate",
      "country": "Morocco",
      "iata_code": "OZZ",
      "_geoloc": {
        "latitude": 30.939053,
        "longitude": -6.909431
      },
      "links_count": 4,
      "objectID": "1077"
    },
    {
      "name": "Monrovia Spriggs Payne",
      "city": "Monrovia",
      "country": "Liberia",
      "iata_code": "MLW",
      "_geoloc": {
        "latitude": 6.289061,
        "longitude": -10.758722
      },
      "links_count": 4,
      "objectID": "1062"
    },
    {
      "name": "Port Menier",
      "city": "Port Menier",
      "country": "Canada",
      "iata_code": "YPN",
      "_geoloc": {
        "latitude": 49.836389,
        "longitude": -64.288611
      },
      "links_count": 4,
      "objectID": "106"
    },
    {
      "name": "Mbuji Mayi",
      "city": "Mbuji-mayi",
      "country": "Congo (Kinshasa)",
      "iata_code": "MJM",
      "_geoloc": {
        "latitude": -6.121236,
        "longitude": 23.569008
      },
      "links_count": 4,
      "objectID": "1043"
    },
    {
      "name": "Kindu",
      "city": "Kindu",
      "country": "Congo (Kinshasa)",
      "iata_code": "KND",
      "_geoloc": {
        "latitude": -2.919178,
        "longitude": 25.915361
      },
      "links_count": 4,
      "objectID": "1037"
    },
    {
      "name": "Bukavu Kavumu",
      "city": "Bukavu/kavumu",
      "country": "Congo (Kinshasa)",
      "iata_code": "BKY",
      "_geoloc": {
        "latitude": -2.308978,
        "longitude": 28.808803
      },
      "links_count": 4,
      "objectID": "1035"
    },
    {
      "name": "Bunia",
      "city": "Bunia",
      "country": "Congo (Kinshasa)",
      "iata_code": "BUX",
      "_geoloc": {
        "latitude": 1.565719,
        "longitude": 30.220833
      },
      "links_count": 4,
      "objectID": "1033"
    },
    {
      "name": "Thule Air Base",
      "city": "Thule",
      "country": "Greenland",
      "iata_code": "THU",
      "_geoloc": {
        "latitude": 76.531203,
        "longitude": -68.703161
      },
      "links_count": 4,
      "objectID": "10"
    },
    {
      "name": "Oriximina Airport",
      "city": "Oriximina",
      "country": "Brazil",
      "iata_code": "ORX",
      "_geoloc": {
        "latitude": -1.714167,
        "longitude": -55.836111
      },
      "links_count": 3,
      "objectID": "8259"
    },
    {
      "name": "Ourilandia do Norte Airport",
      "city": "Ourilandia do Norte",
      "country": "Brazil",
      "iata_code": "OIA",
      "_geoloc": {
        "latitude": -6.763056,
        "longitude": -51.05
      },
      "links_count": 3,
      "objectID": "8239"
    },
    {
      "name": "Patos de Minas Airport",
      "city": "Patos de Minas",
      "country": "Brazil",
      "iata_code": "POJ",
      "_geoloc": {
        "latitude": -18.672778,
        "longitude": -46.491111
      },
      "links_count": 3,
      "objectID": "8237"
    },
    {
      "name": "Choiseul Bay Airport",
      "city": "Choiseul Bay",
      "country": "Solomon Islands",
      "iata_code": "CHY",
      "_geoloc": {
        "latitude": -6.711944,
        "longitude": 156.396111
      },
      "links_count": 3,
      "objectID": "7617"
    },
    {
      "name": "Crooked Creek Airport",
      "city": "Crooked Creek",
      "country": "United States",
      "iata_code": "CKD",
      "_geoloc": {
        "latitude": 61.867778,
        "longitude": -158.135
      },
      "links_count": 3,
      "objectID": "7238"
    },
    {
      "name": "Coffman Cove Seaplane Base",
      "city": "Coffman Cove",
      "country": "United States",
      "iata_code": "KCC",
      "_geoloc": {
        "latitude": 56.014722,
        "longitude": -132.833889
      },
      "links_count": 3,
      "objectID": "7237"
    },
    {
      "name": "Scammon Bay Airport",
      "city": "Scammon Bay",
      "country": "United States",
      "iata_code": "SCM",
      "_geoloc": {
        "latitude": 61.845278,
        "longitude": -165.571389
      },
      "links_count": 3,
      "objectID": "7209"
    },
    {
      "name": "Port Lions Airport",
      "city": "Port Lions",
      "country": "United States",
      "iata_code": "ORI",
      "_geoloc": {
        "latitude": 57.885278,
        "longitude": -152.846111
      },
      "links_count": 3,
      "objectID": "7165"
    },
    {
      "name": "Old Harbor Airport",
      "city": "Old Harbor",
      "country": "United States",
      "iata_code": "OLH",
      "_geoloc": {
        "latitude": 57.218056,
        "longitude": -153.269722
      },
      "links_count": 3,
      "objectID": "7163"
    },
    {
      "name": "Shenandoah Valley Regional Airport",
      "city": "Weyers Cave",
      "country": "United States",
      "iata_code": "SHD",
      "_geoloc": {
        "latitude": 38.263889,
        "longitude": -78.896389
      },
      "links_count": 3,
      "objectID": "7062"
    },
    {
      "name": "Bella Coola Airport",
      "city": "Bella Coola",
      "country": "Canada",
      "iata_code": "QBC",
      "_geoloc": {
        "latitude": 52.3875,
        "longitude": -126.596
      },
      "links_count": 3,
      "objectID": "6738"
    },
    {
      "name": "Flinders Island Airport",
      "city": "Flinders Island",
      "country": "Australia",
      "iata_code": "FLS",
      "_geoloc": {
        "latitude": -40.0917,
        "longitude": 147.993
      },
      "links_count": 3,
      "objectID": "6267"
    },
    {
      "name": "Coen Airport",
      "city": "Coen",
      "country": "Australia",
      "iata_code": "CUQ",
      "_geoloc": {
        "latitude": -13.7608,
        "longitude": 143.114
      },
      "links_count": 3,
      "objectID": "6260"
    },
    {
      "name": "Tufi Airport",
      "city": "Tufi",
      "country": "Papua New Guinea",
      "iata_code": "TFI",
      "_geoloc": {
        "latitude": -9.07595,
        "longitude": 149.32
      },
      "links_count": 3,
      "objectID": "5984"
    },
    {
      "name": "Belep Islands Airport",
      "city": "Waala",
      "country": "New Caledonia",
      "iata_code": "BMY",
      "_geoloc": {
        "latitude": -19.7206,
        "longitude": 163.661
      },
      "links_count": 3,
      "objectID": "5920"
    },
    {
      "name": "Atiu Island Airport",
      "city": "Atiu Island",
      "country": "Cook Islands",
      "iata_code": "AIU",
      "_geoloc": {
        "latitude": -19.9678,
        "longitude": -158.119
      },
      "links_count": 3,
      "objectID": "5861"
    },
    {
      "name": "Raleigh County Memorial Airport",
      "city": "Beckley",
      "country": "United States",
      "iata_code": "BKW",
      "_geoloc": {
        "latitude": 37.7873,
        "longitude": -81.1242
      },
      "links_count": 3,
      "objectID": "5724"
    },
    {
      "name": "Amboseli Airport",
      "city": "Amboseli National Park",
      "country": "Kenya",
      "iata_code": "ASV",
      "_geoloc": {
        "latitude": -2.64505,
        "longitude": 37.2531
      },
      "links_count": 3,
      "objectID": "5692"
    },
    {
      "name": "Eday Airport",
      "city": "Eday",
      "country": "United Kingdom",
      "iata_code": "EOI",
      "_geoloc": {
        "latitude": 59.1906,
        "longitude": -2.77222
      },
      "links_count": 3,
      "objectID": "5564"
    },
    {
      "name": "Bathurst Airport",
      "city": "Bathurst",
      "country": "Canada",
      "iata_code": "ZBF",
      "_geoloc": {
        "latitude": 47.6297,
        "longitude": -65.7389
      },
      "links_count": 3,
      "objectID": "5538"
    },
    {
      "name": "Deer Lake Airport",
      "city": "Deer Lake",
      "country": "Canada",
      "iata_code": "YVZ",
      "_geoloc": {
        "latitude": 52.6558,
        "longitude": -94.0614
      },
      "links_count": 3,
      "objectID": "5532"
    },
    {
      "name": "Fera/Maringe Airport",
      "city": "Fera Island",
      "country": "Solomon Islands",
      "iata_code": "FRE",
      "_geoloc": {
        "latitude": -8.1075,
        "longitude": 159.577
      },
      "links_count": 3,
      "objectID": "5407"
    },
    {
      "name": "Ivalo",
      "city": "Ivalo",
      "country": "Finland",
      "iata_code": "IVL",
      "_geoloc": {
        "latitude": 68.607269,
        "longitude": 27.405328
      },
      "links_count": 3,
      "objectID": "428"
    },
    {
      "name": "Juancho E. Yrausquin",
      "city": "Saba",
      "country": "Netherlands Antilles",
      "iata_code": "SAB",
      "_geoloc": {
        "latitude": 17.645278,
        "longitude": -63.220556
      },
      "links_count": 3,
      "objectID": "4249"
    },
    {
      "name": "Blackall",
      "city": "Blackall",
      "country": "Australia",
      "iata_code": "BKQ",
      "_geoloc": {
        "latitude": -24.427778,
        "longitude": 145.428611
      },
      "links_count": 3,
      "objectID": "4217"
    },
    {
      "name": "Al Ghaidah Intl",
      "city": "Al Ghaidah Intl",
      "country": "Yemen",
      "iata_code": "AAY",
      "_geoloc": {
        "latitude": 16.191667,
        "longitude": 52.175
      },
      "links_count": 3,
      "objectID": "3979"
    },
    {
      "name": "Saidpur",
      "city": "Saidpur",
      "country": "Bangladesh",
      "iata_code": "SPD",
      "_geoloc": {
        "latitude": 25.759228,
        "longitude": 88.908869
      },
      "links_count": 3,
      "objectID": "3073"
    },
    {
      "name": "Gafsa",
      "city": "Gafsa",
      "country": "Tunisia",
      "iata_code": "GAF",
      "_geoloc": {
        "latitude": 34.422022,
        "longitude": 8.822503
      },
      "links_count": 3,
      "objectID": "290"
    },
    {
      "name": "San Luis",
      "city": "San Luis",
      "country": "Argentina",
      "iata_code": "LUQ",
      "_geoloc": {
        "latitude": -33.273192,
        "longitude": -66.356422
      },
      "links_count": 3,
      "objectID": "2467"
    },
    {
      "name": "Ghriss",
      "city": "Ghriss",
      "country": "Algeria",
      "iata_code": "MUW",
      "_geoloc": {
        "latitude": 35.207725,
        "longitude": 0.147142
      },
      "links_count": 3,
      "objectID": "233"
    },
    {
      "name": "Bou Chekif",
      "city": "Tiaret",
      "country": "Algeria",
      "iata_code": "TID",
      "_geoloc": {
        "latitude": 35.341136,
        "longitude": 1.463147
      },
      "links_count": 3,
      "objectID": "225"
    },
    {
      "name": "Tiska",
      "city": "Djanet",
      "country": "Algeria",
      "iata_code": "DJG",
      "_geoloc": {
        "latitude": 24.292767,
        "longitude": 9.452444
      },
      "links_count": 3,
      "objectID": "211"
    },
    {
      "name": "Hao",
      "city": "Hao Island",
      "country": "French Polynesia",
      "iata_code": "HOI",
      "_geoloc": {
        "latitude": -18.074814,
        "longitude": -140.945886
      },
      "links_count": 3,
      "objectID": "1993"
    },
    {
      "name": "Kapuskasing",
      "city": "Kapuskasing",
      "country": "Canada",
      "iata_code": "YYU",
      "_geoloc": {
        "latitude": 49.413889,
        "longitude": -82.4675
      },
      "links_count": 3,
      "objectID": "190"
    },
    {
      "name": "Pamplona",
      "city": "Pamplona",
      "country": "Spain",
      "iata_code": "PNA",
      "_geoloc": {
        "latitude": 42.770039,
        "longitude": -1.646331
      },
      "links_count": 3,
      "objectID": "1234"
    },
    {
      "name": "Lodwar",
      "city": "Lodwar",
      "country": "Kenya",
      "iata_code": "LOK",
      "_geoloc": {
        "latitude": 3.121967,
        "longitude": 35.608692
      },
      "links_count": 3,
      "objectID": "1143"
    },
    {
      "name": "Asosa",
      "city": "Asosa",
      "country": "Ethiopia",
      "iata_code": "ASO",
      "_geoloc": {
        "latitude": 10.01855,
        "longitude": 34.586253
      },
      "links_count": 3,
      "objectID": "1119"
    },
    {
      "name": "Jimma",
      "city": "Jimma",
      "country": "Ethiopia",
      "iata_code": "JIM",
      "_geoloc": {
        "latitude": 7.666094,
        "longitude": 36.816639
      },
      "links_count": 3,
      "objectID": "1116"
    },
    {
      "name": "Gambella",
      "city": "Gambella",
      "country": "Ethiopia",
      "iata_code": "GMB",
      "_geoloc": {
        "latitude": 8.128764,
        "longitude": 34.563131
      },
      "links_count": 3,
      "objectID": "1113"
    },
    {
      "name": "Bahir Dar",
      "city": "Bahar Dar",
      "country": "Ethiopia",
      "iata_code": "BJR",
      "_geoloc": {
        "latitude": 11.608075,
        "longitude": 37.321644
      },
      "links_count": 3,
      "objectID": "1111"
    },
    {
      "name": "Arba Minch",
      "city": "Arba Minch",
      "country": "Ethiopia",
      "iata_code": "AMH",
      "_geoloc": {
        "latitude": 6.039389,
        "longitude": 37.590453
      },
      "links_count": 3,
      "objectID": "1109"
    },
    {
      "name": "Ziguinchor",
      "city": "Ziguinchor",
      "country": "Senegal",
      "iata_code": "ZIG",
      "_geoloc": {
        "latitude": 12.555617,
        "longitude": -16.281783
      },
      "links_count": 3,
      "objectID": "1081"
    },
    {
      "name": "Praslin",
      "city": "Praslin",
      "country": "Seychelles",
      "iata_code": "PRI",
      "_geoloc": {
        "latitude": -4.319292,
        "longitude": 55.691417
      },
      "links_count": 2,
      "objectID": "995"
    },
    {
      "name": "Port Gentil",
      "city": "Port Gentil",
      "country": "Gabon",
      "iata_code": "POG",
      "_geoloc": {
        "latitude": -0.711739,
        "longitude": 8.754383
      },
      "links_count": 2,
      "objectID": "967"
    },
    {
      "name": "Luena",
      "city": "Luena",
      "country": "Angola",
      "iata_code": "LUO",
      "_geoloc": {
        "latitude": -11.768086,
        "longitude": 19.897672
      },
      "links_count": 2,
      "objectID": "960"
    },
    {
      "name": "Mbanza Congo",
      "city": "M'banza-congo",
      "country": "Angola",
      "iata_code": "SSY",
      "_geoloc": {
        "latitude": -6.269897,
        "longitude": 14.247025
      },
      "links_count": 2,
      "objectID": "944"
    },
    {
      "name": "Uzunyazi",
      "city": "Kastamonu",
      "country": "Turkey",
      "iata_code": "KFS",
      "_geoloc": {
        "latitude": 41.316944,
        "longitude": 33.796111
      },
      "links_count": 2,
      "objectID": "9273"
    },
    {
      "name": "Avaratra",
      "city": "Mananara",
      "country": "Madagascar",
      "iata_code": "WMR",
      "_geoloc": {
        "latitude": -16.1639,
        "longitude": 49.773753
      },
      "links_count": 2,
      "objectID": "924"
    },
    {
      "name": "Tampa Padang",
      "city": "Mamuju",
      "country": "Indonesia",
      "iata_code": "MJU",
      "_geoloc": {
        "latitude": -2.583333,
        "longitude": 119.033333
      },
      "links_count": 2,
      "objectID": "9181"
    },
    {
      "name": "Tho Xuan Airport",
      "city": "Thanh Hoa",
      "country": "Vietnam",
      "iata_code": "THD",
      "_geoloc": {
        "latitude": 19.90167,
        "longitude": 105.46778
      },
      "links_count": 2,
      "objectID": "9135"
    },
    {
      "name": "Mfuwe",
      "city": "Mfuwe",
      "country": "Zambia",
      "iata_code": "MFU",
      "_geoloc": {
        "latitude": -13.258878,
        "longitude": 31.936581
      },
      "links_count": 2,
      "objectID": "908"
    },
    {
      "name": "Zafer",
      "city": "Kutahya",
      "country": "Turkey",
      "iata_code": "KZR",
      "_geoloc": {
        "latitude": 39.111389,
        "longitude": 30.13
      },
      "links_count": 2,
      "objectID": "9045"
    },
    {
      "name": "Ngaoundere",
      "city": "N'gaoundere",
      "country": "Cameroon",
      "iata_code": "NGE",
      "_geoloc": {
        "latitude": 7.357011,
        "longitude": 13.559242
      },
      "links_count": 2,
      "objectID": "900"
    },
    {
      "name": "Salak",
      "city": "Maroua",
      "country": "Cameroon",
      "iata_code": "MVR",
      "_geoloc": {
        "latitude": 10.451392,
        "longitude": 14.257361
      },
      "links_count": 2,
      "objectID": "898"
    },
    {
      "name": "Dalma Airport",
      "city": "Dalma Island",
      "country": "United Arab Emirates",
      "iata_code": "ZDY",
      "_geoloc": {
        "latitude": 24.5033833,
        "longitude": 52.3360528
      },
      "links_count": 2,
      "objectID": "8962"
    },
    {
      "name": "Plaine Corail",
      "city": "Rodriguez Island",
      "country": "Mauritius",
      "iata_code": "RRG",
      "_geoloc": {
        "latitude": -19.757658,
        "longitude": 63.360983
      },
      "links_count": 2,
      "objectID": "894"
    },
    {
      "name": "Veliky Ustyug",
      "city": "Veliky Ustyug",
      "country": "Russia",
      "iata_code": "VUS",
      "_geoloc": {
        "latitude": 60.788333,
        "longitude": 46.26
      },
      "links_count": 2,
      "objectID": "8924"
    },
    {
      "name": "Kangding Airport",
      "city": "Kangding",
      "country": "China",
      "iata_code": "KGT",
      "_geoloc": {
        "latitude": 30.1575,
        "longitude": 101.734722
      },
      "links_count": 2,
      "objectID": "8921"
    },
    {
      "name": "Termal",
      "city": "Rio Hondo",
      "country": "Argentina",
      "iata_code": "RHD",
      "_geoloc": {
        "latitude": -27.509946,
        "longitude": -64.936666
      },
      "links_count": 2,
      "objectID": "8914"
    },
    {
      "name": "Matsapha",
      "city": "Manzini",
      "country": "Swaziland",
      "iata_code": "MTS",
      "_geoloc": {
        "latitude": -26.529022,
        "longitude": 31.307519
      },
      "links_count": 2,
      "objectID": "887"
    },
    {
      "name": "Mendeleevo",
      "city": "Yuzhno-Kurilsk",
      "country": "Russia",
      "iata_code": "DEE",
      "_geoloc": {
        "latitude": 43.5739,
        "longitude": 145.4107
      },
      "links_count": 2,
      "objectID": "8782"
    },
    {
      "name": "Qabala Airport",
      "city": "Qabala",
      "country": "Azerbaijan",
      "iata_code": "GBB",
      "_geoloc": {
        "latitude": 40.826667,
        "longitude": 47.7125
      },
      "links_count": 2,
      "objectID": "8775"
    },
    {
      "name": "Gorno-Altaysk Airport",
      "city": "Gorno-Altaysk",
      "country": "Russia",
      "iata_code": "RGK",
      "_geoloc": {
        "latitude": 51.966667,
        "longitude": 85.833333
      },
      "links_count": 2,
      "objectID": "8740"
    },
    {
      "name": "Pomalaa",
      "city": "Pomalaa",
      "country": "Indonesia",
      "iata_code": "PUM",
      "_geoloc": {
        "latitude": -4.183333,
        "longitude": 121.61667
      },
      "links_count": 2,
      "objectID": "8735"
    },
    {
      "name": "Mthatha",
      "city": "Umtata",
      "country": "South Africa",
      "iata_code": "UTT",
      "_geoloc": {
        "latitude": -31.547903,
        "longitude": 28.674289
      },
      "links_count": 2,
      "objectID": "866"
    },
    {
      "name": "Lloydminster",
      "city": "Lloydminster",
      "country": "Canada",
      "iata_code": "YLL",
      "_geoloc": {
        "latitude": 53.309166,
        "longitude": -110.0725
      },
      "links_count": 2,
      "objectID": "85"
    },
    {
      "name": "Ellisras",
      "city": "Lephalale",
      "country": "South Africa",
      "iata_code": "ELL",
      "_geoloc": {
        "latitude": -23.666667,
        "longitude": 27.75
      },
      "links_count": 2,
      "objectID": "8492"
    },
    {
      "name": "Richards Bay",
      "city": "Richard's Bay",
      "country": "South Africa",
      "iata_code": "RCB",
      "_geoloc": {
        "latitude": -28.741039,
        "longitude": 32.092111
      },
      "links_count": 2,
      "objectID": "849"
    },
    {
      "name": "Pietermaritzburg",
      "city": "Pietermaritzburg",
      "country": "South Africa",
      "iata_code": "PZB",
      "_geoloc": {
        "latitude": -29.648975,
        "longitude": 30.398667
      },
      "links_count": 2,
      "objectID": "843"
    },
    {
      "name": "Polokwane International",
      "city": "Polokwane",
      "country": "South Africa",
      "iata_code": "PTG",
      "_geoloc": {
        "latitude": -23.926089,
        "longitude": 29.484422
      },
      "links_count": 2,
      "objectID": "841"
    },
    {
      "name": "Phalaborwa",
      "city": "Phalaborwa",
      "country": "South Africa",
      "iata_code": "PHW",
      "_geoloc": {
        "latitude": -23.937166,
        "longitude": 31.15539
      },
      "links_count": 2,
      "objectID": "840"
    },
    {
      "name": "Keewaywin",
      "city": "Keewaywin",
      "country": "Canada",
      "iata_code": "KEW",
      "_geoloc": {
        "latitude": 52.991111,
        "longitude": -92.836389
      },
      "links_count": 2,
      "objectID": "8355"
    },
    {
      "name": "Margate",
      "city": "Margate",
      "country": "South Africa",
      "iata_code": "MGH",
      "_geoloc": {
        "latitude": -30.857408,
        "longitude": 30.343019
      },
      "links_count": 2,
      "objectID": "827"
    },
    {
      "name": "Tapuruquara Airport",
      "city": "Santa Isabel do Rio Negro",
      "country": "Brazil",
      "iata_code": "IRZ",
      "_geoloc": {
        "latitude": -0.416944,
        "longitude": -65.033889
      },
      "links_count": 2,
      "objectID": "8258"
    },
    {
      "name": "Senadora Eunice Micheles Airport",
      "city": "Sao Paulo de Olivenca",
      "country": "Brazil",
      "iata_code": "OLC",
      "_geoloc": {
        "latitude": -3.465556,
        "longitude": -68.918889
      },
      "links_count": 2,
      "objectID": "8256"
    },
    {
      "name": "Amaury Feitosa Tomaz Airport",
      "city": "Eirunepe",
      "country": "Brazil",
      "iata_code": "ERN",
      "_geoloc": {
        "latitude": -6.639444,
        "longitude": -69.879722
      },
      "links_count": 2,
      "objectID": "8247"
    },
    {
      "name": "Sao Felix do Araguaia Airport",
      "city": "Sao Felix do Araguaia",
      "country": "Brazil",
      "iata_code": "SXO",
      "_geoloc": {
        "latitude": -11.6325,
        "longitude": -50.689444
      },
      "links_count": 2,
      "objectID": "8243"
    },
    {
      "name": "Bonito Airport",
      "city": "Bointo",
      "country": "Brazil",
      "iata_code": "BYO",
      "_geoloc": {
        "latitude": -21.247222,
        "longitude": -56.4525
      },
      "links_count": 2,
      "objectID": "8242"
    },
    {
      "name": "Redencao Airport",
      "city": "Redencao",
      "country": "Brazil",
      "iata_code": "RDC",
      "_geoloc": {
        "latitude": -8.033333,
        "longitude": -49.98
      },
      "links_count": 2,
      "objectID": "8240"
    },
    {
      "name": "Trail Airport",
      "city": "Trail",
      "country": "Canada",
      "iata_code": "YZZ",
      "_geoloc": {
        "latitude": 49.055556,
        "longitude": -117.609167
      },
      "links_count": 2,
      "objectID": "8223"
    },
    {
      "name": "Vinnitsa",
      "city": "Vinnitsa",
      "country": "Ukraine",
      "iata_code": "VIN",
      "_geoloc": {
        "latitude": 49.2433,
        "longitude": 28.6063
      },
      "links_count": 2,
      "objectID": "8209"
    },
    {
      "name": "Ittoqqortoormiit Heliport",
      "city": "Ittoqqortoormiit",
      "country": "Greenland",
      "iata_code": "OBY",
      "_geoloc": {
        "latitude": 70.485278,
        "longitude": -21.966667
      },
      "links_count": 2,
      "objectID": "8208"
    },
    {
      "name": "Mulatupo Airport",
      "city": "Mulatupo",
      "country": "Panama",
      "iata_code": "MPP",
      "_geoloc": {
        "latitude": 8.95,
        "longitude": -77.75
      },
      "links_count": 2,
      "objectID": "8207"
    },
    {
      "name": "Garachine Airport",
      "city": "Garachine",
      "country": "Panama",
      "iata_code": "GHE",
      "_geoloc": {
        "latitude": 8.06,
        "longitude": -78.36
      },
      "links_count": 2,
      "objectID": "8206"
    },
    {
      "name": "Achutupo Airport",
      "city": "Achutupo",
      "country": "Panama",
      "iata_code": "ACU",
      "_geoloc": {
        "latitude": 9.2,
        "longitude": -77.98
      },
      "links_count": 2,
      "objectID": "8204"
    },
    {
      "name": "Goodnews Airport",
      "city": "Goodnews Bay",
      "country": "United States",
      "iata_code": "GNU",
      "_geoloc": {
        "latitude": 59.1175,
        "longitude": -161.5775
      },
      "links_count": 2,
      "objectID": "8202"
    },
    {
      "name": "Puerto Obaldia",
      "city": "Puerto Obaldia",
      "country": "Panama",
      "iata_code": "PUE",
      "_geoloc": {
        "latitude": 8.68333,
        "longitude": -77.5333
      },
      "links_count": 2,
      "objectID": "7962"
    },
    {
      "name": "El Porvenir",
      "city": "El Porvenir",
      "country": "Panama",
      "iata_code": "PVE",
      "_geoloc": {
        "latitude": 9.559167,
        "longitude": -78.971111
      },
      "links_count": 2,
      "objectID": "7901"
    },
    {
      "name": "Playon Chico",
      "city": "Playon Chico",
      "country": "Panama",
      "iata_code": "PYC",
      "_geoloc": {
        "latitude": 9.303333,
        "longitude": -78.236111
      },
      "links_count": 2,
      "objectID": "7895"
    },
    {
      "name": "Marktoberdorf BF",
      "city": "Marktoberdorf",
      "country": "Germany",
      "iata_code": "OAL",
      "_geoloc": {
        "latitude": 47.78,
        "longitude": 10.627
      },
      "links_count": 2,
      "objectID": "7798"
    },
    {
      "name": "Mysore Airport",
      "city": "Mysore",
      "country": "India",
      "iata_code": "MYQ",
      "_geoloc": {
        "latitude": 12.3072,
        "longitude": 76.6497
      },
      "links_count": 2,
      "objectID": "7774"
    },
    {
      "name": "Stephenville",
      "city": "Stephenville",
      "country": "Canada",
      "iata_code": "YJT",
      "_geoloc": {
        "latitude": 48.544167,
        "longitude": -58.549999
      },
      "links_count": 2,
      "objectID": "77"
    },
    {
      "name": "Los Alamos Airport",
      "city": "Los Alamos",
      "country": "United States",
      "iata_code": "LAM",
      "_geoloc": {
        "latitude": 35.8798019,
        "longitude": -106.2694153
      },
      "links_count": 2,
      "objectID": "7584"
    },
    {
      "name": "Dickwella Airport",
      "city": "Dickwella",
      "country": "Sri Lanka",
      "iata_code": "DIW",
      "_geoloc": {
        "latitude": 5.966667,
        "longitude": 80.683333
      },
      "links_count": 2,
      "objectID": "7562"
    },
    {
      "name": "Ulaangom Airport",
      "city": "Ulaangom",
      "country": "Mongolia",
      "iata_code": "ULO",
      "_geoloc": {
        "latitude": 49.973333,
        "longitude": 92.079722
      },
      "links_count": 2,
      "objectID": "7558"
    },
    {
      "name": "Yasuj Airport",
      "city": "Yasuj",
      "country": "Iran",
      "iata_code": "YES",
      "_geoloc": {
        "latitude": 30.700556,
        "longitude": 51.545
      },
      "links_count": 2,
      "objectID": "7547"
    },
    {
      "name": "Sao Gabriel da Cachoeira Airport",
      "city": "Sao Gabriel da Cachoeira",
      "country": "Brazil",
      "iata_code": "SJL",
      "_geoloc": {
        "latitude": -0.148056,
        "longitude": -66.9858
      },
      "links_count": 2,
      "objectID": "7530"
    },
    {
      "name": "Longyan Airport",
      "city": "Longyan",
      "country": "China",
      "iata_code": "LCX",
      "_geoloc": {
        "latitude": 25.674167,
        "longitude": 116.746389
      },
      "links_count": 2,
      "objectID": "7504"
    },
    {
      "name": "Burevestnik Airport",
      "city": "Iturup Island",
      "country": "Russia",
      "iata_code": "BVV",
      "_geoloc": {
        "latitude": 44.92,
        "longitude": 147.621667
      },
      "links_count": 2,
      "objectID": "7478"
    },
    {
      "name": "Olgii Airport",
      "city": "Olgii",
      "country": "Mongolia",
      "iata_code": "ULG",
      "_geoloc": {
        "latitude": 48.991667,
        "longitude": 89.919722
      },
      "links_count": 2,
      "objectID": "7470"
    },
    {
      "name": "Lleida-Alguaire Airport",
      "city": "Lleida",
      "country": "Spain",
      "iata_code": "ILD",
      "_geoloc": {
        "latitude": 41.727778,
        "longitude": 0.535833
      },
      "links_count": 2,
      "objectID": "7459"
    },
    {
      "name": "Pakuba Airport",
      "city": "Pakuba",
      "country": "Uganda",
      "iata_code": "PAF",
      "_geoloc": {
        "latitude": 2.3275,
        "longitude": 31.5
      },
      "links_count": 2,
      "objectID": "7450"
    },
    {
      "name": "Guanambi Airport",
      "city": "Guanambi",
      "country": "Brazil",
      "iata_code": "GNM",
      "_geoloc": {
        "latitude": -14.216667,
        "longitude": -42.783333
      },
      "links_count": 2,
      "objectID": "7407"
    },
    {
      "name": "Barcelos Airport",
      "city": "Barcelos",
      "country": "Brazil",
      "iata_code": "BAZ",
      "_geoloc": {
        "latitude": -0.975,
        "longitude": -62.923889
      },
      "links_count": 2,
      "objectID": "7399"
    },
    {
      "name": "Coari Airport",
      "city": "Coari",
      "country": "Brazil",
      "iata_code": "CIZ",
      "_geoloc": {
        "latitude": -4.085,
        "longitude": -63.140833
      },
      "links_count": 2,
      "objectID": "7398"
    },
    {
      "name": "Araxa Airport",
      "city": "Araxa",
      "country": "Brazil",
      "iata_code": "AAX",
      "_geoloc": {
        "latitude": -19.563056,
        "longitude": -46.960278
      },
      "links_count": 2,
      "objectID": "7395"
    },
    {
      "name": "General leite de Castro Airport",
      "city": "Rio Verde",
      "country": "Brazil",
      "iata_code": "RVD",
      "_geoloc": {
        "latitude": -17.790278,
        "longitude": -50.918333
      },
      "links_count": 2,
      "objectID": "7394"
    },
    {
      "name": "Tancredo Thomaz de Faria Airport",
      "city": "Guarapuava",
      "country": "Brazil",
      "iata_code": "GPB",
      "_geoloc": {
        "latitude": -25.383333,
        "longitude": -51.45
      },
      "links_count": 2,
      "objectID": "7383"
    },
    {
      "name": "Rondonopolis Airport",
      "city": "Rondonopolis",
      "country": "Brazil",
      "iata_code": "ROO",
      "_geoloc": {
        "latitude": -16.466667,
        "longitude": -54.633333
      },
      "links_count": 2,
      "objectID": "7382"
    },
    {
      "name": "Minacu Airport",
      "city": "Minacu",
      "country": "Brazil",
      "iata_code": "MQH",
      "_geoloc": {
        "latitude": -13.526944,
        "longitude": -48.220556
      },
      "links_count": 2,
      "objectID": "7375"
    },
    {
      "name": "Julio Belem Airport",
      "city": "Parintins",
      "country": "Brazil",
      "iata_code": "PIN",
      "_geoloc": {
        "latitude": -2.627778,
        "longitude": -56.735833
      },
      "links_count": 2,
      "objectID": "7372"
    },
    {
      "name": "Gurupi Airport",
      "city": "Gurupi",
      "country": "Brazil",
      "iata_code": "GRP",
      "_geoloc": {
        "latitude": -11.728889,
        "longitude": -49.068889
      },
      "links_count": 2,
      "objectID": "7368"
    },
    {
      "name": "Villa Garzon Airport",
      "city": "Villa Garzon",
      "country": "Colombia",
      "iata_code": "VGZ",
      "_geoloc": {
        "latitude": 0.978889,
        "longitude": -76.605556
      },
      "links_count": 2,
      "objectID": "7359"
    },
    {
      "name": "La Macarena",
      "city": "La Macarena",
      "country": "Colombia",
      "iata_code": "LMC",
      "_geoloc": {
        "latitude": 2.179167,
        "longitude": -73.7875
      },
      "links_count": 2,
      "objectID": "7358"
    },
    {
      "name": "Uyuni Airport",
      "city": "Uyuni",
      "country": "Bolivia",
      "iata_code": "UYU",
      "_geoloc": {
        "latitude": -20.466667,
        "longitude": -66.833333
      },
      "links_count": 2,
      "objectID": "7313"
    },
    {
      "name": "Christiansted Harbor Seaplane Base",
      "city": "Christiansted",
      "country": "Virgin Islands",
      "iata_code": "SSB",
      "_geoloc": {
        "latitude": 17.747222,
        "longitude": -64.705
      },
      "links_count": 2,
      "objectID": "7310"
    },
    {
      "name": "Manley Hot Springs Airport",
      "city": "Manley Hot Springs",
      "country": "United States",
      "iata_code": "MLY",
      "_geoloc": {
        "latitude": 64.9975,
        "longitude": -150.644167
      },
      "links_count": 2,
      "objectID": "7246"
    },
    {
      "name": "Kake Seaplane Base",
      "city": "Kake",
      "country": "United States",
      "iata_code": "KAE",
      "_geoloc": {
        "latitude": 56.973056,
        "longitude": -133.945556
      },
      "links_count": 2,
      "objectID": "7243"
    },
    {
      "name": "Healy River Airport",
      "city": "Healy",
      "country": "United States",
      "iata_code": "HKB",
      "_geoloc": {
        "latitude": 63.8675,
        "longitude": -148.968889
      },
      "links_count": 2,
      "objectID": "7242"
    },
    {
      "name": "Stony River 2 Airport",
      "city": "Stony River",
      "country": "United States",
      "iata_code": "SRV",
      "_geoloc": {
        "latitude": 61.7875,
        "longitude": -156.591111
      },
      "links_count": 2,
      "objectID": "7241"
    },
    {
      "name": "Red Devil Airport",
      "city": "Red Devil",
      "country": "United States",
      "iata_code": "RDV",
      "_geoloc": {
        "latitude": 61.788056,
        "longitude": -157.350278
      },
      "links_count": 2,
      "objectID": "7239"
    },
    {
      "name": "Circle City Airport",
      "city": "Circle",
      "country": "United States",
      "iata_code": "IRC",
      "_geoloc": {
        "latitude": 65.827778,
        "longitude": -144.076111
      },
      "links_count": 2,
      "objectID": "7236"
    },
    {
      "name": "Ornskoldsvik",
      "city": "Ornskoldsvik",
      "country": "Sweden",
      "iata_code": "OER",
      "_geoloc": {
        "latitude": 63.408339,
        "longitude": 18.990039
      },
      "links_count": 2,
      "objectID": "722"
    },
    {
      "name": "Takotna Airport",
      "city": "Takotna",
      "country": "United States",
      "iata_code": "TCT",
      "_geoloc": {
        "latitude": 62.971944,
        "longitude": -156.082778
      },
      "links_count": 2,
      "objectID": "7215"
    },
    {
      "name": "Nikolai Airport",
      "city": "Nikolai",
      "country": "United States",
      "iata_code": "NIB",
      "_geoloc": {
        "latitude": 63.010833,
        "longitude": -154.383889
      },
      "links_count": 2,
      "objectID": "7214"
    },
    {
      "name": "Nelson Lagoon",
      "city": "Nelson Lagoon",
      "country": "United States",
      "iata_code": "NLG",
      "_geoloc": {
        "latitude": 56.0075,
        "longitude": -161.160278
      },
      "links_count": 2,
      "objectID": "7203"
    },
    {
      "name": "False Pass Airport",
      "city": "False Pass",
      "country": "United States",
      "iata_code": "KFP",
      "_geoloc": {
        "latitude": 54.8475,
        "longitude": -163.410278
      },
      "links_count": 2,
      "objectID": "7202"
    },
    {
      "name": "Nikolski Air Station",
      "city": "Nikolski",
      "country": "United States",
      "iata_code": "IKO",
      "_geoloc": {
        "latitude": 52.941667,
        "longitude": -168.848889
      },
      "links_count": 2,
      "objectID": "7196"
    },
    {
      "name": "Atka Airport",
      "city": "Atka",
      "country": "United States",
      "iata_code": "AKB",
      "_geoloc": {
        "latitude": 52.220278,
        "longitude": -174.206389
      },
      "links_count": 2,
      "objectID": "7195"
    },
    {
      "name": "Tin City LRRS Airport",
      "city": "Tin City",
      "country": "United States",
      "iata_code": "TNC",
      "_geoloc": {
        "latitude": 65.563056,
        "longitude": -167.921667
      },
      "links_count": 2,
      "objectID": "7194"
    },
    {
      "name": "Seal Bay Seaplane Base",
      "city": "Seal Bay",
      "country": "United States",
      "iata_code": "SYB",
      "_geoloc": {
        "latitude": 58.166667,
        "longitude": -152.5
      },
      "links_count": 2,
      "objectID": "7173"
    },
    {
      "name": "Kitoi Bay Seaplane Base",
      "city": "Kitoi Bay",
      "country": "United States",
      "iata_code": "KKB",
      "_geoloc": {
        "latitude": 58.190833,
        "longitude": -152.370556
      },
      "links_count": 2,
      "objectID": "7168"
    },
    {
      "name": "Amook Bay Seaplane Base",
      "city": "Amook Bay",
      "country": "United States",
      "iata_code": "AOS",
      "_geoloc": {
        "latitude": 57.471389,
        "longitude": -153.815278
      },
      "links_count": 2,
      "objectID": "7167"
    },
    {
      "name": "Larsen Bay Airport",
      "city": "Larsen Bay",
      "country": "United States",
      "iata_code": "KLN",
      "_geoloc": {
        "latitude": 57.535,
        "longitude": -153.976667
      },
      "links_count": 2,
      "objectID": "7162"
    },
    {
      "name": "Akhiok Airport",
      "city": "Akhiok",
      "country": "United States",
      "iata_code": "AKK",
      "_geoloc": {
        "latitude": 56.938611,
        "longitude": -154.1825
      },
      "links_count": 2,
      "objectID": "7160"
    },
    {
      "name": "South Naknek Airport",
      "city": "South Naknek",
      "country": "United States",
      "iata_code": "WSN",
      "_geoloc": {
        "latitude": 58.702222,
        "longitude": -157.0025
      },
      "links_count": 2,
      "objectID": "7159"
    },
    {
      "name": "Pilot Point Airport",
      "city": "Pilot Point",
      "country": "United States",
      "iata_code": "PIP",
      "_geoloc": {
        "latitude": 57.585393,
        "longitude": -157.571944
      },
      "links_count": 2,
      "objectID": "7158"
    },
    {
      "name": "Perryville Airport",
      "city": "Perryville",
      "country": "United States",
      "iata_code": "KPV",
      "_geoloc": {
        "latitude": 55.906667,
        "longitude": -159.160833
      },
      "links_count": 2,
      "objectID": "7157"
    },
    {
      "name": "Chignik Lagoon Airport",
      "city": "Chignik Lagoon",
      "country": "United States",
      "iata_code": "KCL",
      "_geoloc": {
        "latitude": 56.311111,
        "longitude": -158.534167
      },
      "links_count": 2,
      "objectID": "7155"
    },
    {
      "name": "Egegik Airport",
      "city": "Egegik",
      "country": "United States",
      "iata_code": "EGX",
      "_geoloc": {
        "latitude": 58.185556,
        "longitude": -157.375556
      },
      "links_count": 2,
      "objectID": "7154"
    },
    {
      "name": "Chignik Lake Airport",
      "city": "Chignik Lake",
      "country": "United States",
      "iata_code": "KCQ",
      "_geoloc": {
        "latitude": 56.255,
        "longitude": -158.775278
      },
      "links_count": 2,
      "objectID": "7153"
    },
    {
      "name": "North Whale Seaplane Base",
      "city": "North Whale Pass",
      "country": "United States",
      "iata_code": "WWP",
      "_geoloc": {
        "latitude": 56.116389,
        "longitude": -133.121667
      },
      "links_count": 2,
      "objectID": "7152"
    },
    {
      "name": "Port Protection Seaplane Base",
      "city": "Port Protection",
      "country": "United States",
      "iata_code": "PPV",
      "_geoloc": {
        "latitude": 56.328889,
        "longitude": -133.61
      },
      "links_count": 2,
      "objectID": "7151"
    },
    {
      "name": "Point Baker Seaplane Base",
      "city": "Point Baker",
      "country": "United States",
      "iata_code": "KPB",
      "_geoloc": {
        "latitude": 56.351944,
        "longitude": -133.6225
      },
      "links_count": 2,
      "objectID": "7150"
    },
    {
      "name": "Hydaburg Seaplane Base",
      "city": "Hydaburg",
      "country": "United States",
      "iata_code": "HYG",
      "_geoloc": {
        "latitude": 55.206389,
        "longitude": -132.828333
      },
      "links_count": 2,
      "objectID": "7148"
    },
    {
      "name": "Excursion Inlet Seaplane Base",
      "city": "Excursion Inlet",
      "country": "United States",
      "iata_code": "EXI",
      "_geoloc": {
        "latitude": 58.420556,
        "longitude": -135.449167
      },
      "links_count": 2,
      "objectID": "7141"
    },
    {
      "name": "Pelican Seaplane Base",
      "city": "Pelican",
      "country": "United States",
      "iata_code": "PEC",
      "_geoloc": {
        "latitude": 57.955278,
        "longitude": -136.236389
      },
      "links_count": 2,
      "objectID": "7138"
    },
    {
      "name": "Tenakee Seaplane Base",
      "city": "Tenakee Springs",
      "country": "United States",
      "iata_code": "TKE",
      "_geoloc": {
        "latitude": 57.779722,
        "longitude": -135.218333
      },
      "links_count": 2,
      "objectID": "7137"
    },
    {
      "name": "Elfin Cove Seaplane Base",
      "city": "Elfin Cove",
      "country": "United States",
      "iata_code": "ELV",
      "_geoloc": {
        "latitude": 58.195278,
        "longitude": -136.3475
      },
      "links_count": 2,
      "objectID": "7136"
    },
    {
      "name": "Angoon Seaplane Base",
      "city": "Angoon",
      "country": "United States",
      "iata_code": "AGN",
      "_geoloc": {
        "latitude": 57.503611,
        "longitude": -134.585
      },
      "links_count": 2,
      "objectID": "7135"
    },
    {
      "name": "Merced Municipal Airport",
      "city": "Merced",
      "country": "United States",
      "iata_code": "MCE",
      "_geoloc": {
        "latitude": 37.284722,
        "longitude": -120.513889
      },
      "links_count": 2,
      "objectID": "7122"
    },
    {
      "name": "Visalia Municipal Airport",
      "city": "Visalia",
      "country": "United States",
      "iata_code": "VIS",
      "_geoloc": {
        "latitude": 36.318611,
        "longitude": -119.392778
      },
      "links_count": 2,
      "objectID": "7121"
    },
    {
      "name": "Coldfoot Airport",
      "city": "Coldfoot",
      "country": "United States",
      "iata_code": "CXF",
      "_geoloc": {
        "latitude": 67.251389,
        "longitude": -150.176111
      },
      "links_count": 2,
      "objectID": "7119"
    },
    {
      "name": "Birch Creek Airport",
      "city": "Brich Creek",
      "country": "United States",
      "iata_code": "KBC",
      "_geoloc": {
        "latitude": 66.256708,
        "longitude": -145.815319
      },
      "links_count": 2,
      "objectID": "7118"
    },
    {
      "name": "Central Airport",
      "city": "Central",
      "country": "United States",
      "iata_code": "CEM",
      "_geoloc": {
        "latitude": 65.573889,
        "longitude": -144.780833
      },
      "links_count": 2,
      "objectID": "7116"
    },
    {
      "name": "Rampart Airport",
      "city": "Rampart",
      "country": "United States",
      "iata_code": "RMP",
      "_geoloc": {
        "latitude": 65.507778,
        "longitude": -150.140833
      },
      "links_count": 2,
      "objectID": "7112"
    },
    {
      "name": "Minto Airport",
      "city": "Minto",
      "country": "United States",
      "iata_code": "MNT",
      "_geoloc": {
        "latitude": 65.143611,
        "longitude": -149.37
      },
      "links_count": 2,
      "objectID": "7110"
    },
    {
      "name": "Levelock Airport",
      "city": "Levelock",
      "country": "United States",
      "iata_code": "KLL",
      "_geoloc": {
        "latitude": 59.128056,
        "longitude": -156.858611
      },
      "links_count": 2,
      "objectID": "7102"
    },
    {
      "name": "Chuathbaluk Airport",
      "city": "Chuathbaluk",
      "country": "United States",
      "iata_code": "CHU",
      "_geoloc": {
        "latitude": 61.579167,
        "longitude": -159.215556
      },
      "links_count": 2,
      "objectID": "7091"
    },
    {
      "name": "Orcas Island Airport",
      "city": "Eastsound",
      "country": "United States",
      "iata_code": "ESD",
      "_geoloc": {
        "latitude": 48.708056,
        "longitude": -122.910556
      },
      "links_count": 2,
      "objectID": "7083"
    },
    {
      "name": "Friday Harbor Airport",
      "city": "Friday Harbor",
      "country": "United States",
      "iata_code": "FRD",
      "_geoloc": {
        "latitude": 48.521944,
        "longitude": -123.024444
      },
      "links_count": 2,
      "objectID": "7082"
    },
    {
      "name": "Vernal Regional Airport",
      "city": "Vernal",
      "country": "United States",
      "iata_code": "VEL",
      "_geoloc": {
        "latitude": 40.440833,
        "longitude": -109.51
      },
      "links_count": 2,
      "objectID": "7076"
    },
    {
      "name": "Canyonlands Field",
      "city": "Moab",
      "country": "United States",
      "iata_code": "CNY",
      "_geoloc": {
        "latitude": 38.755,
        "longitude": -109.754722
      },
      "links_count": 2,
      "objectID": "7074"
    },
    {
      "name": "LM Clayton Airport",
      "city": "Wolf Point",
      "country": "United States",
      "iata_code": "OLF",
      "_geoloc": {
        "latitude": 48.094444,
        "longitude": -105.575
      },
      "links_count": 2,
      "objectID": "7071"
    },
    {
      "name": "Dawson Community Airport",
      "city": "Glendive",
      "country": "United States",
      "iata_code": "GDV",
      "_geoloc": {
        "latitude": 47.138611,
        "longitude": -104.807222
      },
      "links_count": 2,
      "objectID": "7070"
    },
    {
      "name": "McCook Regional Airport",
      "city": "McCook",
      "country": "United States",
      "iata_code": "MCK",
      "_geoloc": {
        "latitude": 40.206389,
        "longitude": -100.592222
      },
      "links_count": 2,
      "objectID": "7068"
    },
    {
      "name": "Sidney-Richland Municipal Airport",
      "city": "Sidney",
      "country": "United States",
      "iata_code": "SDY",
      "_geoloc": {
        "latitude": 47.706944,
        "longitude": -104.1925
      },
      "links_count": 2,
      "objectID": "7065"
    },
    {
      "name": "Manistee County-Blacker Airport",
      "city": "Manistee",
      "country": "United States",
      "iata_code": "MBL",
      "_geoloc": {
        "latitude": 44.2725,
        "longitude": -86.246944
      },
      "links_count": 2,
      "objectID": "7054"
    },
    {
      "name": "Gunnison - Crested Butte",
      "city": "Gunnison",
      "country": "United States",
      "iata_code": "GUC",
      "_geoloc": {
        "latitude": 38.533889,
        "longitude": -106.933056
      },
      "links_count": 2,
      "objectID": "7051"
    },
    {
      "name": "Gelendzik",
      "city": "Gelendzik",
      "country": "Russia",
      "iata_code": "GDZ",
      "_geoloc": {
        "latitude": 44.566666666667,
        "longitude": 38.016666666667
      },
      "links_count": 2,
      "objectID": "7041"
    },
    {
      "name": "Kristianstad",
      "city": "Kristianstad",
      "country": "Sweden",
      "iata_code": "KID",
      "_geoloc": {
        "latitude": 55.921686,
        "longitude": 14.085536
      },
      "links_count": 2,
      "objectID": "703"
    },
    {
      "name": "Thief River Falls",
      "city": "Thief River Falls",
      "country": "United States",
      "iata_code": "TVF",
      "_geoloc": {
        "latitude": 48.065556,
        "longitude": -96.185
      },
      "links_count": 2,
      "objectID": "7018"
    },
    {
      "name": "St. Augustine Airport",
      "city": "St. Augustine Airport",
      "country": "United States",
      "iata_code": "UST",
      "_geoloc": {
        "latitude": 29.959167,
        "longitude": -81.339722
      },
      "links_count": 2,
      "objectID": "6989"
    },
    {
      "name": "Tunoshna",
      "city": "Yaroslavl",
      "country": "Russia",
      "iata_code": "IAR",
      "_geoloc": {
        "latitude": 57.560666676667,
        "longitude": 40.157369454444
      },
      "links_count": 2,
      "objectID": "6940"
    },
    {
      "name": "Trollhattan Vanersborg",
      "city": "Trollhattan",
      "country": "Sweden",
      "iata_code": "THN",
      "_geoloc": {
        "latitude": 58.318056,
        "longitude": 12.345
      },
      "links_count": 2,
      "objectID": "693"
    },
    {
      "name": "Pangborn Field",
      "city": "Wenatchee",
      "country": "United States",
      "iata_code": "EAT",
      "_geoloc": {
        "latitude": 47.398,
        "longitude": -120.206
      },
      "links_count": 2,
      "objectID": "6916"
    },
    {
      "name": "Eastern Oregon Regional Airport",
      "city": "Pendleton",
      "country": "United States",
      "iata_code": "PDT",
      "_geoloc": {
        "latitude": 45.695,
        "longitude": -118.841389
      },
      "links_count": 2,
      "objectID": "6883"
    },
    {
      "name": "Riverton Regional",
      "city": "Riverton WY",
      "country": "United States",
      "iata_code": "RIW",
      "_geoloc": {
        "latitude": 43.064167,
        "longitude": -108.459722
      },
      "links_count": 2,
      "objectID": "6881"
    },
    {
      "name": "Montrose Regional Airport",
      "city": "Montrose CO",
      "country": "United States",
      "iata_code": "MTJ",
      "_geoloc": {
        "latitude": 38.509794,
        "longitude": -107.894242
      },
      "links_count": 2,
      "objectID": "6880"
    },
    {
      "name": "Williamson Country Regional Airport",
      "city": "Marion",
      "country": "United States",
      "iata_code": "MWA",
      "_geoloc": {
        "latitude": 37.7549569,
        "longitude": -89.0110936
      },
      "links_count": 2,
      "objectID": "6825"
    },
    {
      "name": "Culebra Airport",
      "city": "Culebra Island",
      "country": "Puerto Rico",
      "iata_code": "CPX",
      "_geoloc": {
        "latitude": 18.3127,
        "longitude": -65.3034
      },
      "links_count": 2,
      "objectID": "6814"
    },
    {
      "name": "Delta County Airport",
      "city": "Escanaba",
      "country": "United States",
      "iata_code": "ESC",
      "_geoloc": {
        "latitude": 45.722778,
        "longitude": -87.093611
      },
      "links_count": 2,
      "objectID": "6800"
    },
    {
      "name": "Orange Airport",
      "city": "Orange",
      "country": "Australia",
      "iata_code": "OAG",
      "_geoloc": {
        "latitude": -33.3817,
        "longitude": 149.133
      },
      "links_count": 2,
      "objectID": "6793"
    },
    {
      "name": "Grafton Airport",
      "city": "Grafton",
      "country": "Australia",
      "iata_code": "GFN",
      "_geoloc": {
        "latitude": -29.7594,
        "longitude": 153.03
      },
      "links_count": 2,
      "objectID": "6792"
    },
    {
      "name": "Hamadan Airport",
      "city": "Hamadan",
      "country": "Iran",
      "iata_code": "HDM",
      "_geoloc": {
        "latitude": 34.869167,
        "longitude": 48.5525
      },
      "links_count": 2,
      "objectID": "6790"
    },
    {
      "name": "Tekirdağ Çorlu Airport",
      "city": "Çorlu",
      "country": "Turkey",
      "iata_code": "TEQ",
      "_geoloc": {
        "latitude": 41.13825,
        "longitude": 27.919094
      },
      "links_count": 2,
      "objectID": "6784"
    },
    {
      "name": "Sinop Airport",
      "city": "Sinop",
      "country": "Turkey",
      "iata_code": "SIC",
      "_geoloc": {
        "latitude": 42.0158,
        "longitude": 35.0664
      },
      "links_count": 2,
      "objectID": "6783"
    },
    {
      "name": "Canakkale Airport",
      "city": "Canakkale",
      "country": "Turkey",
      "iata_code": "CKZ",
      "_geoloc": {
        "latitude": 40.137722,
        "longitude": 26.426777
      },
      "links_count": 2,
      "objectID": "6781"
    },
    {
      "name": "Anadolu Airport",
      "city": "Eskissehir",
      "country": "Turkey",
      "iata_code": "AOE",
      "_geoloc": {
        "latitude": 39.809858,
        "longitude": 30.519378
      },
      "links_count": 2,
      "objectID": "6780"
    },
    {
      "name": "Walaha Airport",
      "city": "Walaha",
      "country": "Vanuatu",
      "iata_code": "WLH",
      "_geoloc": {
        "latitude": -15.412,
        "longitude": 167.691
      },
      "links_count": 2,
      "objectID": "6771"
    },
    {
      "name": "Tanjung Manis Airport",
      "city": "Tanjung Manis",
      "country": "Malaysia",
      "iata_code": "TGC",
      "_geoloc": {
        "latitude": 2.17784,
        "longitude": 111.202
      },
      "links_count": 2,
      "objectID": "6770"
    },
    {
      "name": "Togiak Airport",
      "city": "Togiak Village",
      "country": "United States",
      "iata_code": "TOG",
      "_geoloc": {
        "latitude": 59.0528,
        "longitude": -160.397
      },
      "links_count": 2,
      "objectID": "6767"
    },
    {
      "name": "Port Heiden Airport",
      "city": "Port Heiden",
      "country": "United States",
      "iata_code": "PTH",
      "_geoloc": {
        "latitude": 56.9591,
        "longitude": -158.633
      },
      "links_count": 2,
      "objectID": "6766"
    },
    {
      "name": "King Cove Airport",
      "city": "King Cove",
      "country": "United States",
      "iata_code": "KVC",
      "_geoloc": {
        "latitude": 55.1163,
        "longitude": -162.266
      },
      "links_count": 2,
      "objectID": "6765"
    },
    {
      "name": "Igiugig Airport",
      "city": "Igiugig",
      "country": "United States",
      "iata_code": "IGG",
      "_geoloc": {
        "latitude": 59.324,
        "longitude": -155.902
      },
      "links_count": 2,
      "objectID": "6763"
    },
    {
      "name": "Burgos Airport",
      "city": "Burgos",
      "country": "Spain",
      "iata_code": "RGS",
      "_geoloc": {
        "latitude": 42.357628,
        "longitude": -3.620764
      },
      "links_count": 2,
      "objectID": "6757"
    },
    {
      "name": "Leon Airport",
      "city": "Leon",
      "country": "Spain",
      "iata_code": "LEN",
      "_geoloc": {
        "latitude": 42.589,
        "longitude": -5.655556
      },
      "links_count": 2,
      "objectID": "6756"
    },
    {
      "name": "Nueva Loja Airport",
      "city": "Lago Agrio",
      "country": "Ecuador",
      "iata_code": "LGQ",
      "_geoloc": {
        "latitude": 0.093056,
        "longitude": -76.8675
      },
      "links_count": 2,
      "objectID": "6750"
    },
    {
      "name": "Parsabade Moghan Airport",
      "city": "Parsabad",
      "country": "Iran",
      "iata_code": "PFQ",
      "_geoloc": {
        "latitude": 39.603606,
        "longitude": 47.8815
      },
      "links_count": 2,
      "objectID": "6749"
    },
    {
      "name": "Ilam Airport",
      "city": "Ilam",
      "country": "Iran",
      "iata_code": "IIL",
      "_geoloc": {
        "latitude": 33.586606,
        "longitude": 46.404842
      },
      "links_count": 2,
      "objectID": "6748"
    },
    {
      "name": "Governador Valadares Airport",
      "city": "Governador Valadares",
      "country": "Brazil",
      "iata_code": "GVR",
      "_geoloc": {
        "latitude": -18.8952,
        "longitude": -41.9822
      },
      "links_count": 2,
      "objectID": "6735"
    },
    {
      "name": "Kirovsk-Apatity Airport",
      "city": "Apatity",
      "country": "Russia",
      "iata_code": "KVK",
      "_geoloc": {
        "latitude": 67.4633,
        "longitude": 33.5883
      },
      "links_count": 2,
      "objectID": "6734"
    },
    {
      "name": "Cauayan Airport",
      "city": "Cauayan",
      "country": "Philippines",
      "iata_code": "CYZ",
      "_geoloc": {
        "latitude": 16.929861,
        "longitude": 121.753036
      },
      "links_count": 2,
      "objectID": "6733"
    },
    {
      "name": "Arctic Village Airport",
      "city": "Arctic Village",
      "country": "United States",
      "iata_code": "ARC",
      "_geoloc": {
        "latitude": 68.1147,
        "longitude": -145.579
      },
      "links_count": 2,
      "objectID": "6729"
    },
    {
      "name": "Mekoryuk Airport",
      "city": "Mekoryuk",
      "country": "United States",
      "iata_code": "MYU",
      "_geoloc": {
        "latitude": 60.3714,
        "longitude": -166.271
      },
      "links_count": 2,
      "objectID": "6720"
    },
    {
      "name": "Geiteryggen",
      "city": "Skien",
      "country": "Norway",
      "iata_code": "SKE",
      "_geoloc": {
        "latitude": 59.185,
        "longitude": 9.566944
      },
      "links_count": 2,
      "objectID": "659"
    },
    {
      "name": "Roros",
      "city": "Roros",
      "country": "Norway",
      "iata_code": "RRS",
      "_geoloc": {
        "latitude": 62.578411,
        "longitude": 11.342347
      },
      "links_count": 2,
      "objectID": "656"
    },
    {
      "name": "Orland",
      "city": "Orland",
      "country": "Norway",
      "iata_code": "OLA",
      "_geoloc": {
        "latitude": 63.698908,
        "longitude": 9.604003
      },
      "links_count": 2,
      "objectID": "655"
    },
    {
      "name": "Tambow",
      "city": "Tambow",
      "country": "Russia",
      "iata_code": "TBW",
      "_geoloc": {
        "latitude": 52.81,
        "longitude": 41.48
      },
      "links_count": 2,
      "objectID": "6466"
    },
    {
      "name": "Provincetown Muni",
      "city": "Provincetown",
      "country": "United States",
      "iata_code": "PVC",
      "_geoloc": {
        "latitude": 42.071945,
        "longitude": -70.22139
      },
      "links_count": 2,
      "objectID": "6456"
    },
    {
      "name": "Boulder City Municipal Airport",
      "city": "Boulder City",
      "country": "United States",
      "iata_code": "BLD",
      "_geoloc": {
        "latitude": 35.5651,
        "longitude": -114.514
      },
      "links_count": 2,
      "objectID": "6449"
    },
    {
      "name": "Grand Canyon West Airport",
      "city": "Grand Canyon West",
      "country": "United States",
      "iata_code": "GCW",
      "_geoloc": {
        "latitude": 35.5925,
        "longitude": -113.4859
      },
      "links_count": 2,
      "objectID": "6448"
    },
    {
      "name": "Leirin",
      "city": "Fagernes",
      "country": "Norway",
      "iata_code": "VDB",
      "_geoloc": {
        "latitude": 61.015556,
        "longitude": 9.288056
      },
      "links_count": 2,
      "objectID": "642"
    },
    {
      "name": "Bardufoss",
      "city": "Bardufoss",
      "country": "Norway",
      "iata_code": "BDU",
      "_geoloc": {
        "latitude": 69.055758,
        "longitude": 18.540356
      },
      "links_count": 2,
      "objectID": "640"
    },
    {
      "name": "Khovd Airport",
      "city": "Khovd",
      "country": "Mongolia",
      "iata_code": "HVD",
      "_geoloc": {
        "latitude": 47.9541,
        "longitude": 91.6282
      },
      "links_count": 2,
      "objectID": "6373"
    },
    {
      "name": "Altai Airport",
      "city": "Altai",
      "country": "Mongolia",
      "iata_code": "LTI",
      "_geoloc": {
        "latitude": 46.3764,
        "longitude": 96.2211
      },
      "links_count": 2,
      "objectID": "6370"
    },
    {
      "name": "Whyalla Airport",
      "city": "Whyalla",
      "country": "Australia",
      "iata_code": "WYA",
      "_geoloc": {
        "latitude": -33.0589,
        "longitude": 137.514
      },
      "links_count": 2,
      "objectID": "6334"
    },
    {
      "name": "Thargomindah Airport",
      "city": "Thargomindah",
      "country": "Australia",
      "iata_code": "XTG",
      "_geoloc": {
        "latitude": -27.9864,
        "longitude": 143.811
      },
      "links_count": 2,
      "objectID": "6329"
    },
    {
      "name": "Cocos Keeling Island Airport",
      "city": "Cocos Keeling Island",
      "country": "Cocos (Keeling) Islands",
      "iata_code": "CCK",
      "_geoloc": {
        "latitude": -12.1883,
        "longitude": 96.8339
      },
      "links_count": 2,
      "objectID": "6315"
    },
    {
      "name": "Port Augusta Airport",
      "city": "Argyle",
      "country": "Australia",
      "iata_code": "PUG",
      "_geoloc": {
        "latitude": -32.506944,
        "longitude": 137.716667
      },
      "links_count": 2,
      "objectID": "6312"
    },
    {
      "name": "Olympic Dam Airport",
      "city": "Olympic Dam",
      "country": "Australia",
      "iata_code": "OLP",
      "_geoloc": {
        "latitude": -30.485,
        "longitude": 136.877
      },
      "links_count": 2,
      "objectID": "6311"
    },
    {
      "name": "Moree Airport",
      "city": "Moree",
      "country": "Australia",
      "iata_code": "MRZ",
      "_geoloc": {
        "latitude": -29.4989,
        "longitude": 149.845
      },
      "links_count": 2,
      "objectID": "6300"
    },
    {
      "name": "McArthur River Mine Airport",
      "city": "McArthur River Mine",
      "country": "Australia",
      "iata_code": "MCV",
      "_geoloc": {
        "latitude": -16.4425,
        "longitude": 136.084
      },
      "links_count": 2,
      "objectID": "6297"
    },
    {
      "name": "Milingimbi Airport",
      "city": "Milingimbi",
      "country": "Australia",
      "iata_code": "MGT",
      "_geoloc": {
        "latitude": -12.0944,
        "longitude": 134.894
      },
      "links_count": 2,
      "objectID": "6295"
    },
    {
      "name": "Lismore Airport",
      "city": "Lismore",
      "country": "Australia",
      "iata_code": "LSY",
      "_geoloc": {
        "latitude": -28.8303,
        "longitude": 153.26
      },
      "links_count": 2,
      "objectID": "6287"
    },
    {
      "name": "Horn Island Airport",
      "city": "Horn Island",
      "country": "Australia",
      "iata_code": "HID",
      "_geoloc": {
        "latitude": -10.5864,
        "longitude": 142.29
      },
      "links_count": 2,
      "objectID": "6272"
    },
    {
      "name": "Elcho Island Airport",
      "city": "Elcho Island",
      "country": "Australia",
      "iata_code": "ELC",
      "_geoloc": {
        "latitude": -12.0194,
        "longitude": 135.571
      },
      "links_count": 2,
      "objectID": "6265"
    },
    {
      "name": "Devonport Airport",
      "city": "Devonport",
      "country": "Australia",
      "iata_code": "DPO",
      "_geoloc": {
        "latitude": -41.1697,
        "longitude": 146.43
      },
      "links_count": 2,
      "objectID": "6264"
    },
    {
      "name": "Ceduna Airport",
      "city": "Ceduna",
      "country": "Australia",
      "iata_code": "CED",
      "_geoloc": {
        "latitude": -32.1306,
        "longitude": 133.71
      },
      "links_count": 2,
      "objectID": "6256"
    },
    {
      "name": "Coober Pedy Airport",
      "city": "Coober Pedy",
      "country": "Australia",
      "iata_code": "CPD",
      "_geoloc": {
        "latitude": -29.04,
        "longitude": 134.721
      },
      "links_count": 2,
      "objectID": "6253"
    },
    {
      "name": "Barcaldine Airport",
      "city": "Barcaldine",
      "country": "Australia",
      "iata_code": "BCI",
      "_geoloc": {
        "latitude": -23.5653,
        "longitude": 145.307
      },
      "links_count": 2,
      "objectID": "6238"
    },
    {
      "name": "Ranai Airport",
      "city": "Ranai-Natuna Besar Island",
      "country": "Indonesia",
      "iata_code": "NTX",
      "_geoloc": {
        "latitude": 3.908714,
        "longitude": 108.387897
      },
      "links_count": 2,
      "objectID": "6225"
    },
    {
      "name": "Bakalalan Airport",
      "city": "Bakalalan",
      "country": "Malaysia",
      "iata_code": "BKM",
      "_geoloc": {
        "latitude": 3.974,
        "longitude": 115.618
      },
      "links_count": 2,
      "objectID": "6218"
    },
    {
      "name": "Kawthoung Airport",
      "city": "Kawthoung",
      "country": "Burma",
      "iata_code": "KAW",
      "_geoloc": {
        "latitude": 10.049258,
        "longitude": 98.538006
      },
      "links_count": 2,
      "objectID": "6198"
    },
    {
      "name": "Dien Bien Phu Airport",
      "city": "Dienbienphu",
      "country": "Vietnam",
      "iata_code": "DIN",
      "_geoloc": {
        "latitude": 21.397481,
        "longitude": 103.007831
      },
      "links_count": 2,
      "objectID": "6192"
    },
    {
      "name": "Sonderborg",
      "city": "Soenderborg",
      "country": "Denmark",
      "iata_code": "SGD",
      "_geoloc": {
        "latitude": 54.964367,
        "longitude": 9.791731
      },
      "links_count": 2,
      "objectID": "619"
    },
    {
      "name": "Mae Sot Airport",
      "city": "Tak",
      "country": "Thailand",
      "iata_code": "MAQ",
      "_geoloc": {
        "latitude": 16.699856,
        "longitude": 98.545056
      },
      "links_count": 2,
      "objectID": "6186"
    },
    {
      "name": "Nepalgunj Airport",
      "city": "Nepalgunj",
      "country": "Nepal",
      "iata_code": "KEP",
      "_geoloc": {
        "latitude": 28.103633,
        "longitude": 81.667006
      },
      "links_count": 2,
      "objectID": "6182"
    },
    {
      "name": "Chandragadhi Airport",
      "city": "Chandragarhi",
      "country": "Nepal",
      "iata_code": "BDP",
      "_geoloc": {
        "latitude": 26.570822,
        "longitude": 88.079578
      },
      "links_count": 2,
      "objectID": "6180"
    },
    {
      "name": "Bornholm Ronne",
      "city": "Ronne",
      "country": "Denmark",
      "iata_code": "RNN",
      "_geoloc": {
        "latitude": 55.063267,
        "longitude": 14.759558
      },
      "links_count": 2,
      "objectID": "618"
    },
    {
      "name": "Bharatpur Airport",
      "city": "Bharatpur",
      "country": "Nepal",
      "iata_code": "BHR",
      "_geoloc": {
        "latitude": 27.6781,
        "longitude": 84.4294
      },
      "links_count": 2,
      "objectID": "6179"
    },
    {
      "name": "Barisal Airport",
      "city": "Barisal",
      "country": "Bangladesh",
      "iata_code": "BZL",
      "_geoloc": {
        "latitude": 22.801,
        "longitude": 90.3012
      },
      "links_count": 2,
      "objectID": "6176"
    },
    {
      "name": "Shillong Airport",
      "city": "Shillong",
      "country": "India",
      "iata_code": "SHL",
      "_geoloc": {
        "latitude": 25.7036,
        "longitude": 91.9787
      },
      "links_count": 2,
      "objectID": "6172"
    },
    {
      "name": "Penza Airport",
      "city": "Penza",
      "country": "Russia",
      "iata_code": "PEZ",
      "_geoloc": {
        "latitude": 53.1106,
        "longitude": 45.0211
      },
      "links_count": 2,
      "objectID": "6165"
    },
    {
      "name": "Orsk Airport",
      "city": "Orsk",
      "country": "Russia",
      "iata_code": "OSW",
      "_geoloc": {
        "latitude": 51.0725,
        "longitude": 58.5956
      },
      "links_count": 2,
      "objectID": "6164"
    },
    {
      "name": "Kursk East Airport",
      "city": "Kursk",
      "country": "Russia",
      "iata_code": "URS",
      "_geoloc": {
        "latitude": 51.7506,
        "longitude": 36.2956
      },
      "links_count": 2,
      "objectID": "6157"
    },
    {
      "name": "Lopez Island Airport",
      "city": "Lopez",
      "country": "United States",
      "iata_code": "LPS",
      "_geoloc": {
        "latitude": 48.4839,
        "longitude": -122.938
      },
      "links_count": 2,
      "objectID": "6136"
    },
    {
      "name": "Grant County Airport",
      "city": "Silver City",
      "country": "United States",
      "iata_code": "SVC",
      "_geoloc": {
        "latitude": 32.6365,
        "longitude": -108.156
      },
      "links_count": 2,
      "objectID": "6135"
    },
    {
      "name": "Akutan Seaplane Base",
      "city": "Akutan",
      "country": "United States",
      "iata_code": "KQA",
      "_geoloc": {
        "latitude": 54.1325,
        "longitude": -165.785
      },
      "links_count": 2,
      "objectID": "6134"
    },
    {
      "name": "Mid Delta Regional Airport",
      "city": "Greenville",
      "country": "United States",
      "iata_code": "GLH",
      "_geoloc": {
        "latitude": 33.4829,
        "longitude": -90.9856
      },
      "links_count": 2,
      "objectID": "6130"
    },
    {
      "name": "Kearney Municipal Airport",
      "city": "Kearney",
      "country": "United States",
      "iata_code": "EAR",
      "_geoloc": {
        "latitude": 40.727,
        "longitude": -99.0068
      },
      "links_count": 2,
      "objectID": "6129"
    },
    {
      "name": "Elista Airport",
      "city": "Elista",
      "country": "Russia",
      "iata_code": "ESL",
      "_geoloc": {
        "latitude": 46.3739,
        "longitude": 44.3309
      },
      "links_count": 2,
      "objectID": "6125"
    },
    {
      "name": "Beslan Airport",
      "city": "Beslan",
      "country": "Russia",
      "iata_code": "OGZ",
      "_geoloc": {
        "latitude": 43.2051,
        "longitude": 44.6066
      },
      "links_count": 2,
      "objectID": "6124"
    },
    {
      "name": "Grozny Airport",
      "city": "Grozny",
      "country": "Russia",
      "iata_code": "GRV",
      "_geoloc": {
        "latitude": 43.2981,
        "longitude": 45.7841
      },
      "links_count": 2,
      "objectID": "6122"
    },
    {
      "name": "Igarka Airport",
      "city": "Igarka",
      "country": "Russia",
      "iata_code": "IAA",
      "_geoloc": {
        "latitude": 67.4372,
        "longitude": 86.6219
      },
      "links_count": 2,
      "objectID": "6121"
    },
    {
      "name": "Karup",
      "city": "Karup",
      "country": "Denmark",
      "iata_code": "KRP",
      "_geoloc": {
        "latitude": 56.297458,
        "longitude": 9.124628
      },
      "links_count": 2,
      "objectID": "612"
    },
    {
      "name": "Kyzyl Airport",
      "city": "Kyzyl",
      "country": "Russia",
      "iata_code": "KYZ",
      "_geoloc": {
        "latitude": 51.6694,
        "longitude": 94.4006
      },
      "links_count": 2,
      "objectID": "6118"
    },
    {
      "name": "Petrozavodsk Airport",
      "city": "Petrozavodsk",
      "country": "Russia",
      "iata_code": "PES",
      "_geoloc": {
        "latitude": 61.8852,
        "longitude": 34.1547
      },
      "links_count": 2,
      "objectID": "6114"
    },
    {
      "name": "Solovki Airport",
      "city": "Solovetsky Islands",
      "country": "Russia",
      "iata_code": "CSH",
      "_geoloc": {
        "latitude": 65.03,
        "longitude": 35.7333
      },
      "links_count": 2,
      "objectID": "6110"
    },
    {
      "name": "Uzhhorod International Airport",
      "city": "Uzhgorod",
      "country": "Ukraine",
      "iata_code": "UDJ",
      "_geoloc": {
        "latitude": 48.634278,
        "longitude": 22.263356
      },
      "links_count": 2,
      "objectID": "6109"
    },
    {
      "name": "Kingston",
      "city": "Kingston",
      "country": "Canada",
      "iata_code": "YGK",
      "_geoloc": {
        "latitude": 44.225277,
        "longitude": -76.596944
      },
      "links_count": 2,
      "objectID": "61"
    },
    {
      "name": "Nakhchivan Airport",
      "city": "Nakhchivan",
      "country": "Azerbaijan",
      "iata_code": "NAJ",
      "_geoloc": {
        "latitude": 39.1888,
        "longitude": 45.4584
      },
      "links_count": 2,
      "objectID": "6090"
    },
    {
      "name": "Santa Rosa Airport",
      "city": "Santa Rosa",
      "country": "Brazil",
      "iata_code": "SRA",
      "_geoloc": {
        "latitude": -27.9067,
        "longitude": -54.5204
      },
      "links_count": 2,
      "objectID": "6069"
    },
    {
      "name": "Capitán Av. Selin Zeitun Lopez Airport",
      "city": "Riberalta",
      "country": "Bolivia",
      "iata_code": "RIB",
      "_geoloc": {
        "latitude": -11.0,
        "longitude": -66.0
      },
      "links_count": 2,
      "objectID": "6058"
    },
    {
      "name": "Capitán de Av. Emilio Beltrán Airport",
      "city": "Guayaramerín",
      "country": "Bolivia",
      "iata_code": "GYA",
      "_geoloc": {
        "latitude": -10.8206,
        "longitude": -65.3456
      },
      "links_count": 2,
      "objectID": "6056"
    },
    {
      "name": "Reyes Murillo Airport",
      "city": "Nuquí",
      "country": "Colombia",
      "iata_code": "NQU",
      "_geoloc": {
        "latitude": 5.7,
        "longitude": -77.28
      },
      "links_count": 2,
      "objectID": "6053"
    },
    {
      "name": "La Pedrera Airport",
      "city": "La Pedrera",
      "country": "Colombia",
      "iata_code": "LPD",
      "_geoloc": {
        "latitude": -1.33,
        "longitude": -69.58
      },
      "links_count": 2,
      "objectID": "6052"
    },
    {
      "name": "Caucaya Airport",
      "city": "Puerto Leguízamo",
      "country": "Colombia",
      "iata_code": "LQM",
      "_geoloc": {
        "latitude": -0.18,
        "longitude": -74.77
      },
      "links_count": 2,
      "objectID": "6051"
    },
    {
      "name": "Chapada Diamantina Airport",
      "city": "Lençóis",
      "country": "Brazil",
      "iata_code": "LEC",
      "_geoloc": {
        "latitude": -12.4823,
        "longitude": -41.277
      },
      "links_count": 2,
      "objectID": "6036"
    },
    {
      "name": "Masbate Airport",
      "city": "Masbate",
      "country": "Philippines",
      "iata_code": "MBT",
      "_geoloc": {
        "latitude": 12.3694,
        "longitude": 123.629
      },
      "links_count": 2,
      "objectID": "6025"
    },
    {
      "name": "Calbayog Airport",
      "city": "Calbayog City",
      "country": "Philippines",
      "iata_code": "CYP",
      "_geoloc": {
        "latitude": 12.072706,
        "longitude": 124.545092
      },
      "links_count": 2,
      "objectID": "6023"
    },
    {
      "name": "Virac Airport",
      "city": "Virac",
      "country": "Philippines",
      "iata_code": "VRC",
      "_geoloc": {
        "latitude": 13.576439,
        "longitude": 124.205672
      },
      "links_count": 2,
      "objectID": "6022"
    },
    {
      "name": "Jolo Airport",
      "city": "Jolo",
      "country": "Philippines",
      "iata_code": "JOL",
      "_geoloc": {
        "latitude": 6.05367,
        "longitude": 121.011
      },
      "links_count": 2,
      "objectID": "6013"
    },
    {
      "name": "Camiguin Airport",
      "city": "Camiguin",
      "country": "Philippines",
      "iata_code": "CGM",
      "_geoloc": {
        "latitude": 9.25352,
        "longitude": 124.707
      },
      "links_count": 2,
      "objectID": "6012"
    },
    {
      "name": "Yangyang International Airport",
      "city": "Sokcho / Gangneung",
      "country": "South Korea",
      "iata_code": "YNY",
      "_geoloc": {
        "latitude": 38.061311,
        "longitude": 128.669164
      },
      "links_count": 2,
      "objectID": "6006"
    },
    {
      "name": "Wonju Airport",
      "city": "Wonju",
      "country": "South Korea",
      "iata_code": "WJU",
      "_geoloc": {
        "latitude": 37.438081,
        "longitude": 127.960383
      },
      "links_count": 2,
      "objectID": "6005"
    },
    {
      "name": "Shonai Airport",
      "city": "Shonai",
      "country": "Japan",
      "iata_code": "SYO",
      "_geoloc": {
        "latitude": 38.812222,
        "longitude": 139.787222
      },
      "links_count": 2,
      "objectID": "6001"
    },
    {
      "name": "Odate Noshiro Airport",
      "city": "Odate Noshiro",
      "country": "Japan",
      "iata_code": "ONJ",
      "_geoloc": {
        "latitude": 40.1919,
        "longitude": 140.371
      },
      "links_count": 2,
      "objectID": "6000"
    },
    {
      "name": "Iwami Airport",
      "city": "Iwami",
      "country": "Japan",
      "iata_code": "IWJ",
      "_geoloc": {
        "latitude": 34.6764,
        "longitude": 131.79
      },
      "links_count": 2,
      "objectID": "5998"
    },
    {
      "name": "Losuia Airport",
      "city": "Losuia",
      "country": "Papua New Guinea",
      "iata_code": "LSA",
      "_geoloc": {
        "latitude": -8.50582,
        "longitude": 151.081
      },
      "links_count": 2,
      "objectID": "5980"
    },
    {
      "name": "Adak Airport",
      "city": "Adak Island",
      "country": "United States",
      "iata_code": "ADK",
      "_geoloc": {
        "latitude": 51.878,
        "longitude": -176.646
      },
      "links_count": 2,
      "objectID": "5959"
    },
    {
      "name": "Sambu Airport",
      "city": "Boca de Sábalo",
      "country": "Panama",
      "iata_code": "SAX",
      "_geoloc": {
        "latitude": 8.017,
        "longitude": -78.2
      },
      "links_count": 2,
      "objectID": "5958"
    },
    {
      "name": "Contadora Airport",
      "city": "Contadora Island",
      "country": "Panama",
      "iata_code": "OTD",
      "_geoloc": {
        "latitude": 8.62876,
        "longitude": -79.0347
      },
      "links_count": 2,
      "objectID": "5957"
    },
    {
      "name": "Bahia Piña Airport",
      "city": "Bahia Piña",
      "country": "Panama",
      "iata_code": "BFQ",
      "_geoloc": {
        "latitude": 7.583,
        "longitude": -78.2
      },
      "links_count": 2,
      "objectID": "5955"
    },
    {
      "name": "Skardu Airport",
      "city": "Skardu",
      "country": "Pakistan",
      "iata_code": "KDU",
      "_geoloc": {
        "latitude": 35.335508,
        "longitude": 75.536047
      },
      "links_count": 2,
      "objectID": "5949"
    },
    {
      "name": "Dalbandin Airport",
      "city": "Dalbandin",
      "country": "Pakistan",
      "iata_code": "DBA",
      "_geoloc": {
        "latitude": 28.8783,
        "longitude": 64.3998
      },
      "links_count": 2,
      "objectID": "5941"
    },
    {
      "name": "Sabzevar National Airport",
      "city": "Sabzevar",
      "country": "Iran",
      "iata_code": "AFZ",
      "_geoloc": {
        "latitude": 36.168083,
        "longitude": 57.595183
      },
      "links_count": 2,
      "objectID": "5931"
    },
    {
      "name": "Bojnourd Airport",
      "city": "Bojnourd",
      "country": "Iran",
      "iata_code": "BJB",
      "_geoloc": {
        "latitude": 37.492958,
        "longitude": 57.308219
      },
      "links_count": 2,
      "objectID": "5930"
    },
    {
      "name": "Bam Airport",
      "city": "Bam",
      "country": "Iran",
      "iata_code": "BXR",
      "_geoloc": {
        "latitude": 29.084169,
        "longitude": 58.450042
      },
      "links_count": 2,
      "objectID": "5928"
    },
    {
      "name": "Khoram Abad Airport",
      "city": "Khorram Abad",
      "country": "Iran",
      "iata_code": "KHD",
      "_geoloc": {
        "latitude": 33.435378,
        "longitude": 48.282889
      },
      "links_count": 2,
      "objectID": "5927"
    },
    {
      "name": "Île des Pins Airport",
      "city": "Île des Pins",
      "country": "New Caledonia",
      "iata_code": "ILP",
      "_geoloc": {
        "latitude": -22.5889,
        "longitude": 167.456
      },
      "links_count": 2,
      "objectID": "5921"
    },
    {
      "name": "Anelghowhat Airport",
      "city": "Anelghowhat",
      "country": "Vanuatu",
      "iata_code": "AUY",
      "_geoloc": {
        "latitude": -20.2492,
        "longitude": 169.771
      },
      "links_count": 2,
      "objectID": "5914"
    },
    {
      "name": "Valesdir Airport",
      "city": "Valesdir",
      "country": "Vanuatu",
      "iata_code": "VLS",
      "_geoloc": {
        "latitude": -16.7961,
        "longitude": 168.177
      },
      "links_count": 2,
      "objectID": "5911"
    },
    {
      "name": "Tongoa Island Airport",
      "city": "Tongoa Island",
      "country": "Vanuatu",
      "iata_code": "TGH",
      "_geoloc": {
        "latitude": -16.8911,
        "longitude": 168.551
      },
      "links_count": 2,
      "objectID": "5909"
    },
    {
      "name": "Naone Airport",
      "city": "Maewo Island",
      "country": "Vanuatu",
      "iata_code": "MWF",
      "_geoloc": {
        "latitude": -15.0,
        "longitude": 168.083
      },
      "links_count": 2,
      "objectID": "5903"
    },
    {
      "name": "Sara Airport",
      "city": "Pentecost Island",
      "country": "Vanuatu",
      "iata_code": "SSR",
      "_geoloc": {
        "latitude": -15.4708,
        "longitude": 168.152
      },
      "links_count": 2,
      "objectID": "5899"
    },
    {
      "name": "Sangafa Airport",
      "city": "Sangafa",
      "country": "Vanuatu",
      "iata_code": "EAE",
      "_geoloc": {
        "latitude": -17.0903,
        "longitude": 168.343
      },
      "links_count": 2,
      "objectID": "5896"
    },
    {
      "name": "Pointe Vele Airport",
      "city": "Futuna Island",
      "country": "Wallis and Futuna",
      "iata_code": "FUT",
      "_geoloc": {
        "latitude": -14.3114,
        "longitude": -178.066
      },
      "links_count": 2,
      "objectID": "5885"
    },
    {
      "name": "Vanua Balavu Airport",
      "city": "Vanua Balavu",
      "country": "Fiji",
      "iata_code": "VBV",
      "_geoloc": {
        "latitude": -17.269,
        "longitude": -178.976
      },
      "links_count": 2,
      "objectID": "5883"
    },
    {
      "name": "Rotuma Airport",
      "city": "Rotuma",
      "country": "Fiji",
      "iata_code": "RTA",
      "_geoloc": {
        "latitude": -12.4825,
        "longitude": 177.071
      },
      "links_count": 2,
      "objectID": "5877"
    },
    {
      "name": "Lakeba Island Airport",
      "city": "Lakeba Island",
      "country": "Fiji",
      "iata_code": "LKB",
      "_geoloc": {
        "latitude": -18.1992,
        "longitude": -178.817
      },
      "links_count": 2,
      "objectID": "5873"
    },
    {
      "name": "Cicia Airport",
      "city": "Cicia",
      "country": "Fiji",
      "iata_code": "ICI",
      "_geoloc": {
        "latitude": -17.7433,
        "longitude": -179.342
      },
      "links_count": 2,
      "objectID": "5867"
    },
    {
      "name": "Mitiaro Island Airport",
      "city": "Mitiaro Island",
      "country": "Cook Islands",
      "iata_code": "MOI",
      "_geoloc": {
        "latitude": -19.8425,
        "longitude": -157.703
      },
      "links_count": 2,
      "objectID": "5865"
    },
    {
      "name": "Mauke Airport",
      "city": "Mauke Island",
      "country": "Cook Islands",
      "iata_code": "MUK",
      "_geoloc": {
        "latitude": -20.1361,
        "longitude": -157.345
      },
      "links_count": 2,
      "objectID": "5864"
    },
    {
      "name": "Mangaia Island Airport",
      "city": "Mangaia Island",
      "country": "Cook Islands",
      "iata_code": "MGS",
      "_geoloc": {
        "latitude": -21.8956,
        "longitude": -157.905
      },
      "links_count": 2,
      "objectID": "5862"
    },
    {
      "name": "Long Banga Airport",
      "city": "Long Banga",
      "country": "Malaysia",
      "iata_code": "LBP",
      "_geoloc": {
        "latitude": 3.18495,
        "longitude": 115.454
      },
      "links_count": 2,
      "objectID": "5855"
    },
    {
      "name": "Tobias Bolanos International Airport",
      "city": "San Jose",
      "country": "Costa Rica",
      "iata_code": "SYQ",
      "_geoloc": {
        "latitude": 9.957053,
        "longitude": -84.139797
      },
      "links_count": 2,
      "objectID": "5848"
    },
    {
      "name": "Aerotortuguero Airport",
      "city": "Roxana",
      "country": "Costa Rica",
      "iata_code": "TTQ",
      "_geoloc": {
        "latitude": 10.569,
        "longitude": -83.5148
      },
      "links_count": 2,
      "objectID": "5842"
    },
    {
      "name": "Jaqué Airport",
      "city": "Jaqué",
      "country": "Panama",
      "iata_code": "JQE",
      "_geoloc": {
        "latitude": 7.51778,
        "longitude": -78.1572
      },
      "links_count": 2,
      "objectID": "5840"
    },
    {
      "name": "Salt Cay Airport",
      "city": "Salt Cay",
      "country": "Turks and Caicos Islands",
      "iata_code": "SLX",
      "_geoloc": {
        "latitude": 21.333,
        "longitude": -71.2
      },
      "links_count": 2,
      "objectID": "5809"
    },
    {
      "name": "Ubari Airport",
      "city": "Ubari",
      "country": "Libya",
      "iata_code": "QUB",
      "_geoloc": {
        "latitude": 26.5675,
        "longitude": 12.8231
      },
      "links_count": 2,
      "objectID": "5805"
    },
    {
      "name": "Balikesir Korfez Airport",
      "city": "Balikesir Korfez",
      "country": "Turkey",
      "iata_code": "EDO",
      "_geoloc": {
        "latitude": 39.5546,
        "longitude": 27.0138
      },
      "links_count": 2,
      "objectID": "5802"
    },
    {
      "name": "Isparta Süleyman Demirel Airport",
      "city": "Isparta",
      "country": "Turkey",
      "iata_code": "ISE",
      "_geoloc": {
        "latitude": 37.8554,
        "longitude": 30.3684
      },
      "links_count": 2,
      "objectID": "5801"
    },
    {
      "name": "Mount Pleasant",
      "city": "Mount Pleasant",
      "country": "Falkland Islands",
      "iata_code": "MPN",
      "_geoloc": {
        "latitude": -51.822777,
        "longitude": -58.447222
      },
      "links_count": 2,
      "objectID": "579"
    },
    {
      "name": "Logroño-Agoncillo Airport",
      "city": "Logroño-Agoncillo",
      "country": "Spain",
      "iata_code": "RJL",
      "_geoloc": {
        "latitude": 42.4542,
        "longitude": -2.32083
      },
      "links_count": 2,
      "objectID": "5781"
    },
    {
      "name": "Yakima Air Terminal McAllister Field",
      "city": "Yakima",
      "country": "United States",
      "iata_code": "YKM",
      "_geoloc": {
        "latitude": 46.5682,
        "longitude": -120.544
      },
      "links_count": 2,
      "objectID": "5779"
    },
    {
      "name": "Victoria Regional Airport",
      "city": "Victoria",
      "country": "United States",
      "iata_code": "VCT",
      "_geoloc": {
        "latitude": 28.8526,
        "longitude": -96.9185
      },
      "links_count": 2,
      "objectID": "5775"
    },
    {
      "name": "Quincy Regional Baldwin Field",
      "city": "Quincy",
      "country": "United States",
      "iata_code": "UIN",
      "_geoloc": {
        "latitude": 39.9427,
        "longitude": -91.1946
      },
      "links_count": 2,
      "objectID": "5774"
    },
    {
      "name": "Salina Municipal Airport",
      "city": "Salina",
      "country": "United States",
      "iata_code": "SLN",
      "_geoloc": {
        "latitude": 38.791,
        "longitude": -97.6522
      },
      "links_count": 2,
      "objectID": "5771"
    },
    {
      "name": "Adirondack Regional Airport",
      "city": "Saranac Lake",
      "country": "United States",
      "iata_code": "SLK",
      "_geoloc": {
        "latitude": 44.3853,
        "longitude": -74.2062
      },
      "links_count": 2,
      "objectID": "5770"
    },
    {
      "name": "Sheridan County Airport",
      "city": "Sheridan",
      "country": "United States",
      "iata_code": "SHR",
      "_geoloc": {
        "latitude": 44.7692,
        "longitude": -106.98
      },
      "links_count": 2,
      "objectID": "5769"
    },
    {
      "name": "Rutland State Airport",
      "city": "Rutland",
      "country": "United States",
      "iata_code": "RUT",
      "_geoloc": {
        "latitude": 43.5294,
        "longitude": -72.9496
      },
      "links_count": 2,
      "objectID": "5767"
    },
    {
      "name": "Pease International Tradeport",
      "city": "Portsmouth",
      "country": "United States",
      "iata_code": "PSM",
      "_geoloc": {
        "latitude": 43.0779,
        "longitude": -70.8233
      },
      "links_count": 2,
      "objectID": "5763"
    },
    {
      "name": "Pellston Regional Airport of Emmet County Airport",
      "city": "Pellston",
      "country": "United States",
      "iata_code": "PLN",
      "_geoloc": {
        "latitude": 45.5709,
        "longitude": -84.7967
      },
      "links_count": 2,
      "objectID": "5762"
    },
    {
      "name": "Pocatello Regional Airport",
      "city": "Pocatello",
      "country": "United States",
      "iata_code": "PIH",
      "_geoloc": {
        "latitude": 42.9098,
        "longitude": -112.596
      },
      "links_count": 2,
      "objectID": "5760"
    },
    {
      "name": "Hattiesburg Laurel Regional Airport",
      "city": "Hattiesburg/Laurel",
      "country": "United States",
      "iata_code": "PIB",
      "_geoloc": {
        "latitude": 31.4671,
        "longitude": -89.3371
      },
      "links_count": 2,
      "objectID": "5759"
    },
    {
      "name": "Northwest Alabama Regional Airport",
      "city": "Muscle Shoals",
      "country": "United States",
      "iata_code": "MSL",
      "_geoloc": {
        "latitude": 34.7453,
        "longitude": -87.6102
      },
      "links_count": 2,
      "objectID": "5756"
    },
    {
      "name": "Muskegon County Airport",
      "city": "Muskegon",
      "country": "United States",
      "iata_code": "MKG",
      "_geoloc": {
        "latitude": 43.1695,
        "longitude": -86.2382
      },
      "links_count": 2,
      "objectID": "5754"
    },
    {
      "name": "Lancaster Airport",
      "city": "Lancaster",
      "country": "United States",
      "iata_code": "LNS",
      "_geoloc": {
        "latitude": 40.1217,
        "longitude": -76.2961
      },
      "links_count": 2,
      "objectID": "5751"
    },
    {
      "name": "North Platte Regional Airport Lee Bird Field",
      "city": "North Platte",
      "country": "United States",
      "iata_code": "LBF",
      "_geoloc": {
        "latitude": 41.1262,
        "longitude": -100.684
      },
      "links_count": 2,
      "objectID": "5748"
    },
    {
      "name": "Laramie Regional Airport",
      "city": "Laramie",
      "country": "United States",
      "iata_code": "LAR",
      "_geoloc": {
        "latitude": 41.3121,
        "longitude": -105.675
      },
      "links_count": 2,
      "objectID": "5746"
    },
    {
      "name": "Kirksville Regional Airport",
      "city": "Kirksville",
      "country": "United States",
      "iata_code": "IRK",
      "_geoloc": {
        "latitude": 40.0935,
        "longitude": -92.5449
      },
      "links_count": 2,
      "objectID": "5744"
    },
    {
      "name": "Wokal Field Glasgow International Airport",
      "city": "Glasgow",
      "country": "United States",
      "iata_code": "GGW",
      "_geoloc": {
        "latitude": 48.2125,
        "longitude": -106.615
      },
      "links_count": 2,
      "objectID": "5739"
    },
    {
      "name": "Elko Regional Airport",
      "city": "Elko",
      "country": "United States",
      "iata_code": "EKO",
      "_geoloc": {
        "latitude": 40.8249,
        "longitude": -115.792
      },
      "links_count": 2,
      "objectID": "5736"
    },
    {
      "name": "Chippewa Valley Regional Airport",
      "city": "Eau Claire",
      "country": "United States",
      "iata_code": "EAU",
      "_geoloc": {
        "latitude": 44.8658,
        "longitude": -91.4843
      },
      "links_count": 2,
      "objectID": "5735"
    },
    {
      "name": "Houghton County Memorial Airport",
      "city": "Hancock",
      "country": "United States",
      "iata_code": "CMX",
      "_geoloc": {
        "latitude": 47.1684,
        "longitude": -88.4891
      },
      "links_count": 2,
      "objectID": "5732"
    },
    {
      "name": "William R Fairchild International Airport",
      "city": "Port Angeles",
      "country": "United States",
      "iata_code": "CLM",
      "_geoloc": {
        "latitude": 48.1202,
        "longitude": -123.5
      },
      "links_count": 2,
      "objectID": "5731"
    },
    {
      "name": "Chippewa County International Airport",
      "city": "Sault Ste Marie",
      "country": "United States",
      "iata_code": "CIU",
      "_geoloc": {
        "latitude": 46.2508,
        "longitude": -84.4724
      },
      "links_count": 2,
      "objectID": "5729"
    },
    {
      "name": "Cape Girardeau Regional Airport",
      "city": "Cape Girardeau",
      "country": "United States",
      "iata_code": "CGI",
      "_geoloc": {
        "latitude": 37.2253,
        "longitude": -89.5708
      },
      "links_count": 2,
      "objectID": "5728"
    },
    {
      "name": "Western Nebraska Regional Airport",
      "city": "Scottsbluff",
      "country": "United States",
      "iata_code": "BFF",
      "_geoloc": {
        "latitude": 41.874,
        "longitude": -103.596
      },
      "links_count": 2,
      "objectID": "5723"
    },
    {
      "name": "Walla Walla Regional Airport",
      "city": "Walla Walla",
      "country": "United States",
      "iata_code": "ALW",
      "_geoloc": {
        "latitude": 46.0949,
        "longitude": -118.288
      },
      "links_count": 2,
      "objectID": "5719"
    },
    {
      "name": "Athens Ben Epps Airport",
      "city": "Athens",
      "country": "United States",
      "iata_code": "AHN",
      "_geoloc": {
        "latitude": 33.9486,
        "longitude": -83.3263
      },
      "links_count": 2,
      "objectID": "5716"
    },
    {
      "name": "Aberdeen Regional Airport",
      "city": "Aberdeen",
      "country": "United States",
      "iata_code": "ABR",
      "_geoloc": {
        "latitude": 45.4491,
        "longitude": -98.4218
      },
      "links_count": 2,
      "objectID": "5714"
    },
    {
      "name": "Arua Airport",
      "city": "Arua",
      "country": "Uganda",
      "iata_code": "RUA",
      "_geoloc": {
        "latitude": 3.05,
        "longitude": 30.917
      },
      "links_count": 2,
      "objectID": "5709"
    },
    {
      "name": "Bukoba Airport",
      "city": "Bukoba",
      "country": "Tanzania",
      "iata_code": "BKZ",
      "_geoloc": {
        "latitude": -1.3,
        "longitude": 31.8
      },
      "links_count": 2,
      "objectID": "5703"
    },
    {
      "name": "Lokichoggio Airport",
      "city": "Lokichoggio",
      "country": "Kenya",
      "iata_code": "LKG",
      "_geoloc": {
        "latitude": 4.204117,
        "longitude": 34.348186
      },
      "links_count": 2,
      "objectID": "5693"
    },
    {
      "name": "Gode Airport",
      "city": "Gode",
      "country": "Ethiopia",
      "iata_code": "GDE",
      "_geoloc": {
        "latitude": 5.935128,
        "longitude": 43.578567
      },
      "links_count": 2,
      "objectID": "5680"
    },
    {
      "name": "Sao Filipe Airport",
      "city": "Sao Filipe",
      "country": "Fogo Island",
      "iata_code": "SFL",
      "_geoloc": {
        "latitude": 0.0,
        "longitude": 14.885
      },
      "links_count": 2,
      "objectID": "5675"
    },
    {
      "name": "La Gomera Airport",
      "city": "La Gomera",
      "country": "Spain",
      "iata_code": "GMZ",
      "_geoloc": {
        "latitude": 28.0296,
        "longitude": -17.2146
      },
      "links_count": 2,
      "objectID": "5659"
    },
    {
      "name": "Oranjemund Airport",
      "city": "Oranjemund",
      "country": "Namibia",
      "iata_code": "OMD",
      "_geoloc": {
        "latitude": -28.5847,
        "longitude": 16.4467
      },
      "links_count": 2,
      "objectID": "5643"
    },
    {
      "name": "Ondangwa Airport",
      "city": "Ondangwa",
      "country": "Namibia",
      "iata_code": "OND",
      "_geoloc": {
        "latitude": -17.8782,
        "longitude": 15.9526
      },
      "links_count": 2,
      "objectID": "5642"
    },
    {
      "name": "Luderitz Airport",
      "city": "Luderitz",
      "country": "Namibia",
      "iata_code": "LUD",
      "_geoloc": {
        "latitude": -26.6874,
        "longitude": 15.2429
      },
      "links_count": 2,
      "objectID": "5641"
    },
    {
      "name": "Chimoio Airport",
      "city": "Chimoio",
      "country": "Mozambique",
      "iata_code": "VPY",
      "_geoloc": {
        "latitude": -19.151267,
        "longitude": 33.428958
      },
      "links_count": 2,
      "objectID": "5637"
    },
    {
      "name": "Namibe Airport",
      "city": "Mocamedes",
      "country": "Angola",
      "iata_code": "MSZ",
      "_geoloc": {
        "latitude": -15.261222,
        "longitude": 12.146756
      },
      "links_count": 2,
      "objectID": "5633"
    },
    {
      "name": "Chipata Airport",
      "city": "Chipata",
      "country": "Zambia",
      "iata_code": "CIP",
      "_geoloc": {
        "latitude": -13.5583,
        "longitude": 32.5872
      },
      "links_count": 2,
      "objectID": "5612"
    },
    {
      "name": "Shire Inda Selassie Airport",
      "city": "Shire Indasilase",
      "country": "Ethiopia",
      "iata_code": "SHC",
      "_geoloc": {
        "latitude": 14.0781,
        "longitude": 38.2725
      },
      "links_count": 2,
      "objectID": "5601"
    },
    {
      "name": "Barra Airport",
      "city": "Barra",
      "country": "United Kingdom",
      "iata_code": "BRR",
      "_geoloc": {
        "latitude": 57.0228,
        "longitude": -7.44306
      },
      "links_count": 2,
      "objectID": "5575"
    },
    {
      "name": "Land's End / St. Just Airport",
      "city": "Land's End",
      "country": "United Kingdom",
      "iata_code": "LEQ",
      "_geoloc": {
        "latitude": 50.1028,
        "longitude": -5.67056
      },
      "links_count": 2,
      "objectID": "5572"
    },
    {
      "name": "Campbeltown Airport",
      "city": "Campbeltown",
      "country": "United Kingdom",
      "iata_code": "CAL",
      "_geoloc": {
        "latitude": 55.4372,
        "longitude": -5.68639
      },
      "links_count": 2,
      "objectID": "5563"
    },
    {
      "name": "Guemar Airport",
      "city": "Guemar",
      "country": "Algeria",
      "iata_code": "ELU",
      "_geoloc": {
        "latitude": 33.5114,
        "longitude": 6.77679
      },
      "links_count": 2,
      "objectID": "5555"
    },
    {
      "name": "Bordj Badji Mokhtar Airport",
      "city": "Bordj Badji Mokhtar",
      "country": "Algeria",
      "iata_code": "BMW",
      "_geoloc": {
        "latitude": 21.375,
        "longitude": 0.923889
      },
      "links_count": 2,
      "objectID": "5554"
    },
    {
      "name": "Béchar Boudghene Ben Ali Lotfi Airport",
      "city": "Béchar",
      "country": "Algeria",
      "iata_code": "CBH",
      "_geoloc": {
        "latitude": 31.6457,
        "longitude": -2.26986
      },
      "links_count": 2,
      "objectID": "5553"
    },
    {
      "name": "Masset Airport",
      "city": "Masset",
      "country": "Canada",
      "iata_code": "ZMT",
      "_geoloc": {
        "latitude": 54.0275,
        "longitude": -132.125
      },
      "links_count": 2,
      "objectID": "5545"
    },
    {
      "name": "Rae Lakes Airport",
      "city": "Gamètì",
      "country": "Canada",
      "iata_code": "YRA",
      "_geoloc": {
        "latitude": 64.1161,
        "longitude": -117.31
      },
      "links_count": 2,
      "objectID": "5526"
    },
    {
      "name": "Powell River Airport",
      "city": "Powell River",
      "country": "Canada",
      "iata_code": "YPW",
      "_geoloc": {
        "latitude": 49.8342,
        "longitude": -124.5
      },
      "links_count": 2,
      "objectID": "5523"
    },
    {
      "name": "Peawanuck Airport",
      "city": "Peawanuck",
      "country": "Canada",
      "iata_code": "YPO",
      "_geoloc": {
        "latitude": 54.9881,
        "longitude": -85.4433
      },
      "links_count": 2,
      "objectID": "5522"
    },
    {
      "name": "Kangiqsualujjuaq (Georges River) Airport",
      "city": "Kangiqsualujjuaq",
      "country": "Canada",
      "iata_code": "XGR",
      "_geoloc": {
        "latitude": 58.7114,
        "longitude": -65.9928
      },
      "links_count": 2,
      "objectID": "5512"
    },
    {
      "name": "Lutselk'e Airport",
      "city": "Lutselk'e",
      "country": "Canada",
      "iata_code": "YSG",
      "_geoloc": {
        "latitude": 62.4183,
        "longitude": -110.682
      },
      "links_count": 2,
      "objectID": "5511"
    },
    {
      "name": "Kimmirut Airport",
      "city": "Kimmirut",
      "country": "Canada",
      "iata_code": "YLC",
      "_geoloc": {
        "latitude": 62.85,
        "longitude": -69.8833
      },
      "links_count": 2,
      "objectID": "5509"
    },
    {
      "name": "Grise Fiord Airport",
      "city": "Grise Fiord",
      "country": "Canada",
      "iata_code": "YGZ",
      "_geoloc": {
        "latitude": 76.4261,
        "longitude": -82.9092
      },
      "links_count": 2,
      "objectID": "5498"
    },
    {
      "name": "Tarapacá Airport",
      "city": "Tarapacá",
      "country": "Colombia",
      "iata_code": "TCD",
      "_geoloc": {
        "latitude": -2.867,
        "longitude": -69.733
      },
      "links_count": 2,
      "objectID": "5477"
    },
    {
      "name": "Ogoki Post Airport",
      "city": "Ogoki Post",
      "country": "Canada",
      "iata_code": "YOG",
      "_geoloc": {
        "latitude": 51.6586,
        "longitude": -85.9017
      },
      "links_count": 2,
      "objectID": "5470"
    },
    {
      "name": "Summer Beaver Airport",
      "city": "Summer Beaver",
      "country": "Canada",
      "iata_code": "SUR",
      "_geoloc": {
        "latitude": 52.7086,
        "longitude": -88.5419
      },
      "links_count": 2,
      "objectID": "5464"
    },
    {
      "name": "Whatì Airport",
      "city": "Whatì",
      "country": "Canada",
      "iata_code": "YLE",
      "_geoloc": {
        "latitude": 63.1317,
        "longitude": -117.246
      },
      "links_count": 2,
      "objectID": "5463"
    },
    {
      "name": "Anahim Lake Airport",
      "city": "Anahim Lake",
      "country": "Canada",
      "iata_code": "YAA",
      "_geoloc": {
        "latitude": 52.4525,
        "longitude": -125.303
      },
      "links_count": 2,
      "objectID": "5457"
    },
    {
      "name": "Wapenamanda Airport",
      "city": "Wapenamanda",
      "country": "Papua New Guinea",
      "iata_code": "WBM",
      "_geoloc": {
        "latitude": -5.6433,
        "longitude": 143.895
      },
      "links_count": 2,
      "objectID": "5437"
    },
    {
      "name": "Mendi Airport",
      "city": "Mendi",
      "country": "Papua New Guinea",
      "iata_code": "MDU",
      "_geoloc": {
        "latitude": -6.14774,
        "longitude": 143.657
      },
      "links_count": 2,
      "objectID": "5429"
    },
    {
      "name": "Chimbu Airport",
      "city": "Kundiawa",
      "country": "Papua New Guinea",
      "iata_code": "CMU",
      "_geoloc": {
        "latitude": -6.02429,
        "longitude": 144.971
      },
      "links_count": 2,
      "objectID": "5420"
    },
    {
      "name": "Tiree",
      "city": "Tiree",
      "country": "United Kingdom",
      "iata_code": "TRE",
      "_geoloc": {
        "latitude": 56.499167,
        "longitude": -6.869167
      },
      "links_count": 2,
      "objectID": "542"
    },
    {
      "name": "Marau Airport",
      "city": "Marau",
      "country": "Solomon Islands",
      "iata_code": "RUS",
      "_geoloc": {
        "latitude": -9.86167,
        "longitude": 160.825
      },
      "links_count": 2,
      "objectID": "5415"
    },
    {
      "name": "Santa Cruz/Graciosa Bay/Luova Airport",
      "city": "Santa Cruz/Graciosa Bay/Luova",
      "country": "Solomon Islands",
      "iata_code": "SCZ",
      "_geoloc": {
        "latitude": -10.7203,
        "longitude": 165.795
      },
      "links_count": 2,
      "objectID": "5410"
    },
    {
      "name": "Uru Harbour Airport",
      "city": "Atoifi",
      "country": "Solomon Islands",
      "iata_code": "ATD",
      "_geoloc": {
        "latitude": -8.87333,
        "longitude": 161.011
      },
      "links_count": 2,
      "objectID": "5404"
    },
    {
      "name": "Dundee",
      "city": "Dundee",
      "country": "United Kingdom",
      "iata_code": "DND",
      "_geoloc": {
        "latitude": 56.452499,
        "longitude": -3.025833
      },
      "links_count": 2,
      "objectID": "540"
    },
    {
      "name": "Islay",
      "city": "Islay",
      "country": "United Kingdom",
      "iata_code": "ILY",
      "_geoloc": {
        "latitude": 55.681944,
        "longitude": -6.256667
      },
      "links_count": 2,
      "objectID": "536"
    },
    {
      "name": "Gloucestershire",
      "city": "Golouchestershire",
      "country": "United Kingdom",
      "iata_code": "GLO",
      "_geoloc": {
        "latitude": 51.894167,
        "longitude": -2.167222
      },
      "links_count": 2,
      "objectID": "472"
    },
    {
      "name": "Kuopio",
      "city": "Kuopio",
      "country": "Finland",
      "iata_code": "KUO",
      "_geoloc": {
        "latitude": 63.00715,
        "longitude": 27.797756
      },
      "links_count": 2,
      "objectID": "439"
    },
    {
      "name": "Kogalym International",
      "city": "Kogalym",
      "country": "Russia",
      "iata_code": "KGP",
      "_geoloc": {
        "latitude": 62.18,
        "longitude": 74.53
      },
      "links_count": 2,
      "objectID": "4373"
    },
    {
      "name": "Kuusamo",
      "city": "Kuusamo",
      "country": "Finland",
      "iata_code": "KAO",
      "_geoloc": {
        "latitude": 65.987575,
        "longitude": 29.239381
      },
      "links_count": 2,
      "objectID": "437"
    },
    {
      "name": "Framnes",
      "city": "Narvik",
      "country": "Norway",
      "iata_code": "NVK",
      "_geoloc": {
        "latitude": 68.435833,
        "longitude": 17.388056
      },
      "links_count": 2,
      "objectID": "4349"
    },
    {
      "name": "Yampa Valley",
      "city": "Hayden",
      "country": "United States",
      "iata_code": "HDN",
      "_geoloc": {
        "latitude": 40.481181,
        "longitude": -107.21766
      },
      "links_count": 2,
      "objectID": "4339"
    },
    {
      "name": "Cortez Muni",
      "city": "Cortez",
      "country": "United States",
      "iata_code": "CEZ",
      "_geoloc": {
        "latitude": 37.303,
        "longitude": -108.628056
      },
      "links_count": 2,
      "objectID": "4338"
    },
    {
      "name": "Key Field",
      "city": "Meridian",
      "country": "United States",
      "iata_code": "MEI",
      "_geoloc": {
        "latitude": 32.332624,
        "longitude": -88.751868
      },
      "links_count": 2,
      "objectID": "4335"
    },
    {
      "name": "Ogle",
      "city": "Georgetown",
      "country": "Guyana",
      "iata_code": "OGL",
      "_geoloc": {
        "latitude": 6.806944,
        "longitude": -58.104444
      },
      "links_count": 2,
      "objectID": "4306"
    },
    {
      "name": "Chumphon",
      "city": "Chumphon",
      "country": "Thailand",
      "iata_code": "CJM",
      "_geoloc": {
        "latitude": 10.7112,
        "longitude": 99.361706
      },
      "links_count": 2,
      "objectID": "4300"
    },
    {
      "name": "Joensuu",
      "city": "Joensuu",
      "country": "Finland",
      "iata_code": "JOE",
      "_geoloc": {
        "latitude": 62.662906,
        "longitude": 29.60755
      },
      "links_count": 2,
      "objectID": "429"
    },
    {
      "name": "Bemidji Regional Airport",
      "city": "Bemidji",
      "country": "United States",
      "iata_code": "BJI",
      "_geoloc": {
        "latitude": 47.510722,
        "longitude": -94.934722
      },
      "links_count": 2,
      "objectID": "4287"
    },
    {
      "name": "Monaco",
      "city": "Monaco",
      "country": "Monaco",
      "iata_code": "MCM",
      "_geoloc": {
        "latitude": 43.73333333,
        "longitude": 7.41666666
      },
      "links_count": 2,
      "objectID": "4264"
    },
    {
      "name": "Magic Valley Regional Airport",
      "city": "Twin Falls",
      "country": "United States",
      "iata_code": "TWF",
      "_geoloc": {
        "latitude": 42.481803,
        "longitude": -114.487733
      },
      "links_count": 2,
      "objectID": "4263"
    },
    {
      "name": "Eagle Co Rgnl",
      "city": "Vail",
      "country": "United States",
      "iata_code": "EGE",
      "_geoloc": {
        "latitude": 39.642556,
        "longitude": -106.917694
      },
      "links_count": 2,
      "objectID": "4250"
    },
    {
      "name": "Paulatuk",
      "city": "Paulatuk",
      "country": "Canada",
      "iata_code": "YPC",
      "_geoloc": {
        "latitude": 62.35,
        "longitude": -124.3333
      },
      "links_count": 2,
      "objectID": "4244"
    },
    {
      "name": "Grand Canyon National Park Airport",
      "city": "Grand Canyon",
      "country": "United States",
      "iata_code": "GCN",
      "_geoloc": {
        "latitude": 35.9523611,
        "longitude": -112.1469722
      },
      "links_count": 2,
      "objectID": "4219"
    },
    {
      "name": "Dhangarhi",
      "city": "Dhangarhi",
      "country": "Nepal",
      "iata_code": "DHI",
      "_geoloc": {
        "latitude": 28.753333,
        "longitude": 80.581944
      },
      "links_count": 2,
      "objectID": "4188"
    },
    {
      "name": "Tumling Tar",
      "city": "Tumling Tar",
      "country": "Nepal",
      "iata_code": "TMI",
      "_geoloc": {
        "latitude": 27.315,
        "longitude": 87.193333
      },
      "links_count": 2,
      "objectID": "4183"
    },
    {
      "name": "Brac",
      "city": "Brac",
      "country": "Croatia",
      "iata_code": "BWK",
      "_geoloc": {
        "latitude": 43.285719,
        "longitude": 16.679719
      },
      "links_count": 2,
      "objectID": "4160"
    },
    {
      "name": "Pai",
      "city": "Pai",
      "country": "Thailand",
      "iata_code": "PYY",
      "_geoloc": {
        "latitude": 19.372,
        "longitude": 98.437
      },
      "links_count": 2,
      "objectID": "4159"
    },
    {
      "name": "Ca Mau",
      "city": "Ca Mau",
      "country": "Vietnam",
      "iata_code": "CAH",
      "_geoloc": {
        "latitude": 9.188049,
        "longitude": 105.174721
      },
      "links_count": 2,
      "objectID": "4156"
    },
    {
      "name": "Rach Gia",
      "city": "Rach Gia",
      "country": "Vietnam",
      "iata_code": "VKG",
      "_geoloc": {
        "latitude": 9.949676,
        "longitude": 105.133659
      },
      "links_count": 2,
      "objectID": "4155"
    },
    {
      "name": "Oudomxay",
      "city": "Muang Xay",
      "country": "Laos",
      "iata_code": "ODY",
      "_geoloc": {
        "latitude": 20.6827,
        "longitude": 101.994
      },
      "links_count": 2,
      "objectID": "4143"
    },
    {
      "name": "Luang Namtha",
      "city": "Luang Namtha",
      "country": "Laos",
      "iata_code": "LXG",
      "_geoloc": {
        "latitude": 20.960556,
        "longitude": 101.4025
      },
      "links_count": 2,
      "objectID": "4142"
    },
    {
      "name": "Trat",
      "city": "Trat",
      "country": "Thailand",
      "iata_code": "TDX",
      "_geoloc": {
        "latitude": 12.274572,
        "longitude": 102.318958
      },
      "links_count": 2,
      "objectID": "4135"
    },
    {
      "name": "Ranong",
      "city": "Ranong",
      "country": "Thailand",
      "iata_code": "UNN",
      "_geoloc": {
        "latitude": 9.777622,
        "longitude": 98.585483
      },
      "links_count": 2,
      "objectID": "4134"
    },
    {
      "name": "Buri Ram",
      "city": "Buri Ram",
      "country": "Thailand",
      "iata_code": "BFV",
      "_geoloc": {
        "latitude": 15.229539,
        "longitude": 103.253231
      },
      "links_count": 2,
      "objectID": "4133"
    },
    {
      "name": "Roi Et",
      "city": "Roi Et",
      "country": "Thailand",
      "iata_code": "ROI",
      "_geoloc": {
        "latitude": 16.116761,
        "longitude": 103.773797
      },
      "links_count": 2,
      "objectID": "4132"
    },
    {
      "name": "Kuressaare",
      "city": "Kuressaare",
      "country": "Estonia",
      "iata_code": "URE",
      "_geoloc": {
        "latitude": 58.229883,
        "longitude": 22.509494
      },
      "links_count": 2,
      "objectID": "413"
    },
    {
      "name": "Santa Elena Airport",
      "city": "Santa Elena de Uairen",
      "country": "Venezuela",
      "iata_code": "SNV",
      "_geoloc": {
        "latitude": 4.554722,
        "longitude": -61.144922
      },
      "links_count": 2,
      "objectID": "4126"
    },
    {
      "name": "Barkley Regional Airport",
      "city": "PADUCAH",
      "country": "United States",
      "iata_code": "PAH",
      "_geoloc": {
        "latitude": 37.0602875,
        "longitude": -88.7729583
      },
      "links_count": 2,
      "objectID": "4117"
    },
    {
      "name": "Mid-Ohio Valley Regional Airport",
      "city": "PARKERSBURG",
      "country": "United States",
      "iata_code": "PKB",
      "_geoloc": {
        "latitude": 39.3451039,
        "longitude": -81.4392031
      },
      "links_count": 2,
      "objectID": "4114"
    },
    {
      "name": "Vancouver Coal Harbour",
      "city": "Vancouver",
      "country": "Canada",
      "iata_code": "CXH",
      "_geoloc": {
        "latitude": 49.289722,
        "longitude": -123.115833
      },
      "links_count": 2,
      "objectID": "4107"
    },
    {
      "name": "Redding Muni",
      "city": "Redding",
      "country": "United States",
      "iata_code": "RDD",
      "_geoloc": {
        "latitude": 40.509,
        "longitude": -122.293389
      },
      "links_count": 2,
      "objectID": "4098"
    },
    {
      "name": "Sihanoukville",
      "city": "Sihanoukville",
      "country": "Cambodia",
      "iata_code": "KOS",
      "_geoloc": {
        "latitude": 10.579686,
        "longitude": 103.636828
      },
      "links_count": 2,
      "objectID": "4093"
    },
    {
      "name": "McClellan-Palomar Airport",
      "city": "Carlsbad",
      "country": "United States",
      "iata_code": "CLD",
      "_geoloc": {
        "latitude": 33.0742,
        "longitude": -117.1648
      },
      "links_count": 2,
      "objectID": "4088"
    },
    {
      "name": "Mae Hong Son",
      "city": "Mae Hong Son",
      "country": "Thailand",
      "iata_code": "HGN",
      "_geoloc": {
        "latitude": 19.301667,
        "longitude": 97.975
      },
      "links_count": 2,
      "objectID": "4086"
    },
    {
      "name": "Xieng Khouang",
      "city": "Phon Savan",
      "country": "Laos",
      "iata_code": "XKH",
      "_geoloc": {
        "latitude": 19.449997,
        "longitude": 103.158333
      },
      "links_count": 2,
      "objectID": "4081"
    },
    {
      "name": "Funafuti International",
      "city": "Funafuti",
      "country": "Tuvalu",
      "iata_code": "FUN",
      "_geoloc": {
        "latitude": -8.525,
        "longitude": 179.196389
      },
      "links_count": 2,
      "objectID": "4077"
    },
    {
      "name": "Kingscote Airport",
      "city": "Kingscote",
      "country": "Australia",
      "iata_code": "KGC",
      "_geoloc": {
        "latitude": -35.713889,
        "longitude": 137.521389
      },
      "links_count": 2,
      "objectID": "4051"
    },
    {
      "name": "Knox County Regional Airport",
      "city": "Rockland",
      "country": "United States",
      "iata_code": "RKD",
      "_geoloc": {
        "latitude": 44.0601111,
        "longitude": -69.0992303
      },
      "links_count": 2,
      "objectID": "4026"
    },
    {
      "name": "Hancock County - Bar Harbor",
      "city": "Bar Harbor",
      "country": "United States",
      "iata_code": "BHB",
      "_geoloc": {
        "latitude": 44.4497689,
        "longitude": -68.3615653
      },
      "links_count": 2,
      "objectID": "4025"
    },
    {
      "name": "Bert Mooney Airport",
      "city": "Butte",
      "country": "United States",
      "iata_code": "BTM",
      "_geoloc": {
        "latitude": 45.954806,
        "longitude": -112.497472
      },
      "links_count": 2,
      "objectID": "4022"
    },
    {
      "name": "Naples Muni",
      "city": "Naples",
      "country": "United States",
      "iata_code": "APF",
      "_geoloc": {
        "latitude": 26.152619,
        "longitude": -81.775294
      },
      "links_count": 2,
      "objectID": "4012"
    },
    {
      "name": "Ataq",
      "city": "Ataq",
      "country": "Yemen",
      "iata_code": "AXK",
      "_geoloc": {
        "latitude": 14.551322,
        "longitude": 46.826183
      },
      "links_count": 2,
      "objectID": "3978"
    },
    {
      "name": "Gyumri",
      "city": "Gyumri",
      "country": "Armenia",
      "iata_code": "LWN",
      "_geoloc": {
        "latitude": 40.750369,
        "longitude": 43.859342
      },
      "links_count": 2,
      "objectID": "3965"
    },
    {
      "name": "Sukhothai",
      "city": "Sukhothai",
      "country": "Thailand",
      "iata_code": "THS",
      "_geoloc": {
        "latitude": 17.237992,
        "longitude": 99.818183
      },
      "links_count": 2,
      "objectID": "3939"
    },
    {
      "name": "Mau Hau",
      "city": "Waingapu",
      "country": "Indonesia",
      "iata_code": "WGP",
      "_geoloc": {
        "latitude": -9.669217,
        "longitude": 120.302006
      },
      "links_count": 2,
      "objectID": "3927"
    },
    {
      "name": "Naha",
      "city": "Naha",
      "country": "Indonesia",
      "iata_code": "NAH",
      "_geoloc": {
        "latitude": 3.683214,
        "longitude": 125.528019
      },
      "links_count": 2,
      "objectID": "3886"
    },
    {
      "name": "Forbes Fld",
      "city": "Topeka",
      "country": "United States",
      "iata_code": "FOE",
      "_geoloc": {
        "latitude": 38.950944,
        "longitude": -95.663611
      },
      "links_count": 2,
      "objectID": "3843"
    },
    {
      "name": "Cedar City Rgnl",
      "city": "Cedar City",
      "country": "United States",
      "iata_code": "CDC",
      "_geoloc": {
        "latitude": 37.700967,
        "longitude": -113.098847
      },
      "links_count": 2,
      "objectID": "3824"
    },
    {
      "name": "Modesto City Co Harry Sham",
      "city": "Modesto",
      "country": "United States",
      "iata_code": "MOD",
      "_geoloc": {
        "latitude": 37.625817,
        "longitude": -120.954422
      },
      "links_count": 2,
      "objectID": "3816"
    },
    {
      "name": "Stockton Metropolitan",
      "city": "Stockton",
      "country": "United States",
      "iata_code": "SCK",
      "_geoloc": {
        "latitude": 37.894167,
        "longitude": -121.238306
      },
      "links_count": 2,
      "objectID": "3805"
    },
    {
      "name": "Scott Afb Midamerica",
      "city": "Belleville",
      "country": "United States",
      "iata_code": "BLV",
      "_geoloc": {
        "latitude": 38.545178,
        "longitude": -89.835183
      },
      "links_count": 2,
      "objectID": "3790"
    },
    {
      "name": "Lea Co Rgnl",
      "city": "Hobbs",
      "country": "United States",
      "iata_code": "HOB",
      "_geoloc": {
        "latitude": 32.687528,
        "longitude": -103.217028
      },
      "links_count": 2,
      "objectID": "3749"
    },
    {
      "name": "Augsburg",
      "city": "Augsburg",
      "country": "Germany",
      "iata_code": "AGB",
      "_geoloc": {
        "latitude": 48.425158,
        "longitude": 10.931764
      },
      "links_count": 2,
      "objectID": "374"
    },
    {
      "name": "Ogdensburg Intl",
      "city": "Ogdensburg",
      "country": "United States",
      "iata_code": "OGS",
      "_geoloc": {
        "latitude": 44.681854,
        "longitude": -75.4655
      },
      "links_count": 2,
      "objectID": "3724"
    },
    {
      "name": "Chico Muni",
      "city": "Chico",
      "country": "United States",
      "iata_code": "CIC",
      "_geoloc": {
        "latitude": 39.795383,
        "longitude": -121.858422
      },
      "links_count": 2,
      "objectID": "3710"
    },
    {
      "name": "Augusta State",
      "city": "Augusta",
      "country": "United States",
      "iata_code": "AUG",
      "_geoloc": {
        "latitude": 44.320647,
        "longitude": -69.797317
      },
      "links_count": 2,
      "objectID": "3701"
    },
    {
      "name": "Waynesville Rgnl Arpt At Forney Fld",
      "city": "Fort Leonardwood",
      "country": "United States",
      "iata_code": "TBN",
      "_geoloc": {
        "latitude": 37.741631,
        "longitude": -92.140736
      },
      "links_count": 2,
      "objectID": "3665"
    },
    {
      "name": "Chisholm Hibbing",
      "city": "Hibbing",
      "country": "United States",
      "iata_code": "HIB",
      "_geoloc": {
        "latitude": 47.3866,
        "longitude": -92.838994
      },
      "links_count": 2,
      "objectID": "3650"
    },
    {
      "name": "Teterboro",
      "city": "Teterboro",
      "country": "United States",
      "iata_code": "TEB",
      "_geoloc": {
        "latitude": 40.850103,
        "longitude": -74.060837
      },
      "links_count": 2,
      "objectID": "3624"
    },
    {
      "name": "Hamburg Finkenwerder",
      "city": "Hamburg",
      "country": "Germany",
      "iata_code": "XFW",
      "_geoloc": {
        "latitude": 53.535886,
        "longitude": 9.837025
      },
      "links_count": 2,
      "objectID": "362"
    },
    {
      "name": "Scappoose Industrial Airpark",
      "city": "San Luis",
      "country": "United States",
      "iata_code": "SPB",
      "_geoloc": {
        "latitude": 45.771028,
        "longitude": -122.861833
      },
      "links_count": 2,
      "objectID": "3616"
    },
    {
      "name": "Havre City Co",
      "city": "Havre",
      "country": "United States",
      "iata_code": "HVR",
      "_geoloc": {
        "latitude": 48.542983,
        "longitude": -109.762342
      },
      "links_count": 2,
      "objectID": "3604"
    },
    {
      "name": "Cavern City Air Terminal",
      "city": "Carlsbad",
      "country": "United States",
      "iata_code": "CNM",
      "_geoloc": {
        "latitude": 32.337472,
        "longitude": -104.263278
      },
      "links_count": 2,
      "objectID": "3597"
    },
    {
      "name": "Jonesboro Muni",
      "city": "Jonesboro",
      "country": "United States",
      "iata_code": "JBR",
      "_geoloc": {
        "latitude": 35.831708,
        "longitude": -90.646417
      },
      "links_count": 2,
      "objectID": "3591"
    },
    {
      "name": "Mannheim City",
      "city": "Mannheim",
      "country": "Germany",
      "iata_code": "MHG",
      "_geoloc": {
        "latitude": 49.472706,
        "longitude": 8.514264
      },
      "links_count": 2,
      "objectID": "356"
    },
    {
      "name": "Massena Intl Richards Fld",
      "city": "Massena",
      "country": "United States",
      "iata_code": "MSS",
      "_geoloc": {
        "latitude": 44.935833,
        "longitude": -74.845547
      },
      "links_count": 2,
      "objectID": "3546"
    },
    {
      "name": "Waimea Kohala",
      "city": "Kamuela",
      "country": "United States",
      "iata_code": "MUE",
      "_geoloc": {
        "latitude": 20.001328,
        "longitude": -155.668108
      },
      "links_count": 2,
      "objectID": "3545"
    },
    {
      "name": "Pueblo Memorial",
      "city": "Pueblo",
      "country": "United States",
      "iata_code": "PUB",
      "_geoloc": {
        "latitude": 38.289085,
        "longitude": -104.496572
      },
      "links_count": 2,
      "objectID": "3527"
    },
    {
      "name": "Ernest A Love Fld",
      "city": "Prescott",
      "country": "United States",
      "iata_code": "PRC",
      "_geoloc": {
        "latitude": 34.654472,
        "longitude": -112.419583
      },
      "links_count": 2,
      "objectID": "3446"
    },
    {
      "name": "Hana",
      "city": "Hana",
      "country": "United States",
      "iata_code": "HNM",
      "_geoloc": {
        "latitude": 20.795636,
        "longitude": -156.014439
      },
      "links_count": 2,
      "objectID": "3445"
    },
    {
      "name": "Platinum",
      "city": "Port Moller",
      "country": "United States",
      "iata_code": "PTU",
      "_geoloc": {
        "latitude": 59.011356,
        "longitude": -161.819664
      },
      "links_count": 2,
      "objectID": "3430"
    },
    {
      "name": "Iliamna",
      "city": "Iliamna",
      "country": "United States",
      "iata_code": "ILI",
      "_geoloc": {
        "latitude": 59.754356,
        "longitude": -154.910961
      },
      "links_count": 2,
      "objectID": "3429"
    },
    {
      "name": "Tatalina Lrrs",
      "city": "Tatalina",
      "country": "United States",
      "iata_code": "TLJ",
      "_geoloc": {
        "latitude": 62.894369,
        "longitude": -155.976525
      },
      "links_count": 2,
      "objectID": "3423"
    },
    {
      "name": "Cape Lisburne Lrrs",
      "city": "Cape Lisburne",
      "country": "United States",
      "iata_code": "LUR",
      "_geoloc": {
        "latitude": 68.875133,
        "longitude": -166.110022
      },
      "links_count": 2,
      "objectID": "3413"
    },
    {
      "name": "Noto",
      "city": "Wajima",
      "country": "Japan",
      "iata_code": "NTQ",
      "_geoloc": {
        "latitude": 37.293097,
        "longitude": 136.961853
      },
      "links_count": 2,
      "objectID": "3409"
    },
    {
      "name": "Tamworth",
      "city": "Tamworth",
      "country": "Australia",
      "iata_code": "TMW",
      "_geoloc": {
        "latitude": -31.083889,
        "longitude": 150.846667
      },
      "links_count": 2,
      "objectID": "3362"
    },
    {
      "name": "Richmond",
      "city": "Richmond",
      "country": "Australia",
      "iata_code": "RCM",
      "_geoloc": {
        "latitude": -33.600556,
        "longitude": 150.780833
      },
      "links_count": 2,
      "objectID": "3360"
    },
    {
      "name": "Melbourne Essendon",
      "city": "Melbourne",
      "country": "Australia",
      "iata_code": "MEB",
      "_geoloc": {
        "latitude": -37.728056,
        "longitude": 144.901944
      },
      "links_count": 2,
      "objectID": "3334"
    },
    {
      "name": "Avalon",
      "city": "Avalon",
      "country": "Australia",
      "iata_code": "AVV",
      "_geoloc": {
        "latitude": -38.039444,
        "longitude": 144.469444
      },
      "links_count": 2,
      "objectID": "3332"
    },
    {
      "name": "Bamaga Injinoo",
      "city": "Amberley",
      "country": "Australia",
      "iata_code": "ABM",
      "_geoloc": {
        "latitude": -10.950833,
        "longitude": 142.459444
      },
      "links_count": 2,
      "objectID": "3318"
    },
    {
      "name": "Lahad Datu",
      "city": "Lahad Datu",
      "country": "Malaysia",
      "iata_code": "LDU",
      "_geoloc": {
        "latitude": 5.032247,
        "longitude": 118.324036
      },
      "links_count": 2,
      "objectID": "3268"
    },
    {
      "name": "Limbang",
      "city": "Limbang",
      "country": "Malaysia",
      "iata_code": "LMN",
      "_geoloc": {
        "latitude": 4.808303,
        "longitude": 115.010439
      },
      "links_count": 2,
      "objectID": "3264"
    },
    {
      "name": "Babo",
      "city": "Babo",
      "country": "Indonesia",
      "iata_code": "BXB",
      "_geoloc": {
        "latitude": -2.532242,
        "longitude": 133.438894
      },
      "links_count": 2,
      "objectID": "3259"
    },
    {
      "name": "Kasiguncu",
      "city": "Poso",
      "country": "Indonesia",
      "iata_code": "PSJ",
      "_geoloc": {
        "latitude": -1.416753,
        "longitude": 120.657669
      },
      "links_count": 2,
      "objectID": "3251"
    },
    {
      "name": "Wamena",
      "city": "Wamena",
      "country": "Indonesia",
      "iata_code": "WMX",
      "_geoloc": {
        "latitude": -4.102511,
        "longitude": 138.957372
      },
      "links_count": 2,
      "objectID": "3245"
    },
    {
      "name": "Putao",
      "city": "Putao",
      "country": "Burma",
      "iata_code": "PBU",
      "_geoloc": {
        "latitude": 27.329922,
        "longitude": 97.426269
      },
      "links_count": 2,
      "objectID": "3232"
    },
    {
      "name": "Kyaukpyu",
      "city": "Kyaukpyu",
      "country": "Burma",
      "iata_code": "KYP",
      "_geoloc": {
        "latitude": 19.426447,
        "longitude": 93.534836
      },
      "links_count": 2,
      "objectID": "3217"
    },
    {
      "name": "Kengtung",
      "city": "Kengtung",
      "country": "Burma",
      "iata_code": "KET",
      "_geoloc": {
        "latitude": 21.301611,
        "longitude": 99.635997
      },
      "links_count": 2,
      "objectID": "3215"
    },
    {
      "name": "Loei",
      "city": "Loei",
      "country": "Thailand",
      "iata_code": "LOE",
      "_geoloc": {
        "latitude": 17.439133,
        "longitude": 101.722064
      },
      "links_count": 2,
      "objectID": "3186"
    },
    {
      "name": "Sakon Nakhon",
      "city": "Sakon Nakhon",
      "country": "Thailand",
      "iata_code": "SNO",
      "_geoloc": {
        "latitude": 17.195142,
        "longitude": 104.118625
      },
      "links_count": 2,
      "objectID": "3184"
    },
    {
      "name": "Narathiwat",
      "city": "Narathiwat",
      "country": "Thailand",
      "iata_code": "NAW",
      "_geoloc": {
        "latitude": 6.519922,
        "longitude": 101.7434
      },
      "links_count": 2,
      "objectID": "3173"
    },
    {
      "name": "Phrae",
      "city": "Phrae",
      "country": "Thailand",
      "iata_code": "PRH",
      "_geoloc": {
        "latitude": 18.132169,
        "longitude": 100.164664
      },
      "links_count": 2,
      "objectID": "3164"
    },
    {
      "name": "Lampang",
      "city": "Lampang",
      "country": "Thailand",
      "iata_code": "LPT",
      "_geoloc": {
        "latitude": 18.270933,
        "longitude": 99.504167
      },
      "links_count": 2,
      "objectID": "3163"
    },
    {
      "name": "Agatti",
      "city": "Agatti Island",
      "country": "India",
      "iata_code": "AGX",
      "_geoloc": {
        "latitude": 10.823656,
        "longitude": 72.176042
      },
      "links_count": 2,
      "objectID": "3130"
    },
    {
      "name": "Biratnagar",
      "city": "Biratnagar",
      "country": "Nepal",
      "iata_code": "BIR",
      "_geoloc": {
        "latitude": 26.481453,
        "longitude": 87.264036
      },
      "links_count": 2,
      "objectID": "3129"
    },
    {
      "name": "Pokhara",
      "city": "Pokhara",
      "country": "Nepal",
      "iata_code": "PKR",
      "_geoloc": {
        "latitude": 28.200881,
        "longitude": 83.982056
      },
      "links_count": 2,
      "objectID": "3127"
    },
    {
      "name": "Bhairahawa",
      "city": "Bhairawa",
      "country": "Nepal",
      "iata_code": "BWA",
      "_geoloc": {
        "latitude": 27.505703,
        "longitude": 83.41625
      },
      "links_count": 2,
      "objectID": "3122"
    },
    {
      "name": "Ludhiana",
      "city": "Ludhiaha",
      "country": "India",
      "iata_code": "LUH",
      "_geoloc": {
        "latitude": 30.854681,
        "longitude": 75.952592
      },
      "links_count": 2,
      "objectID": "3103"
    },
    {
      "name": "Kanpur",
      "city": "Kanpur",
      "country": "India",
      "iata_code": "KNU",
      "_geoloc": {
        "latitude": 26.441444,
        "longitude": 80.364864
      },
      "links_count": 2,
      "objectID": "3101"
    },
    {
      "name": "Oostende",
      "city": "Ostend",
      "country": "Belgium",
      "iata_code": "OST",
      "_geoloc": {
        "latitude": 51.198889,
        "longitude": 2.862222
      },
      "links_count": 2,
      "objectID": "310"
    },
    {
      "name": "Brandon Muni",
      "city": "Brandon",
      "country": "Canada",
      "iata_code": "YBR",
      "_geoloc": {
        "latitude": 49.91,
        "longitude": -99.951944
      },
      "links_count": 2,
      "objectID": "31"
    },
    {
      "name": "Gwalior",
      "city": "Gwalior",
      "country": "India",
      "iata_code": "GWL",
      "_geoloc": {
        "latitude": 26.293336,
        "longitude": 78.227753
      },
      "links_count": 2,
      "objectID": "3094"
    },
    {
      "name": "Kullu Manali",
      "city": "Kulu",
      "country": "India",
      "iata_code": "KUU",
      "_geoloc": {
        "latitude": 31.876706,
        "longitude": 77.154367
      },
      "links_count": 2,
      "objectID": "3085"
    },
    {
      "name": "Shah Mokhdum",
      "city": "Rajshahi",
      "country": "Bangladesh",
      "iata_code": "RJH",
      "_geoloc": {
        "latitude": 24.437219,
        "longitude": 88.616511
      },
      "links_count": 2,
      "objectID": "3072"
    },
    {
      "name": "China Bay",
      "city": "Trinciomalee",
      "country": "Sri Lanka",
      "iata_code": "TRR",
      "_geoloc": {
        "latitude": 8.538514,
        "longitude": 81.181853
      },
      "links_count": 2,
      "objectID": "3030"
    },
    {
      "name": "Khajuraho",
      "city": "Khajuraho",
      "country": "India",
      "iata_code": "HJR",
      "_geoloc": {
        "latitude": 24.817197,
        "longitude": 79.918597
      },
      "links_count": 2,
      "objectID": "3012"
    },
    {
      "name": "Jamnagar",
      "city": "Jamnagar",
      "country": "India",
      "iata_code": "JGA",
      "_geoloc": {
        "latitude": 22.465522,
        "longitude": 70.012556
      },
      "links_count": 2,
      "objectID": "3010"
    },
    {
      "name": "Belgaum",
      "city": "Belgaum",
      "country": "India",
      "iata_code": "IXG",
      "_geoloc": {
        "latitude": 15.859286,
        "longitude": 74.618292
      },
      "links_count": 2,
      "objectID": "3000"
    },
    {
      "name": "Pevek",
      "city": "Pevek",
      "country": "Russia",
      "iata_code": "PWE",
      "_geoloc": {
        "latitude": 69.783283,
        "longitude": 170.597006
      },
      "links_count": 2,
      "objectID": "2931"
    },
    {
      "name": "F D Roosevelt",
      "city": "Oranjestad",
      "country": "Netherlands Antilles",
      "iata_code": "EUX",
      "_geoloc": {
        "latitude": 17.496492,
        "longitude": -62.979439
      },
      "links_count": 2,
      "objectID": "2898"
    },
    {
      "name": "Eugenio Maria De Hostos",
      "city": "Mayaguez",
      "country": "Puerto Rico",
      "iata_code": "MAZ",
      "_geoloc": {
        "latitude": 18.255694,
        "longitude": -67.148472
      },
      "links_count": 2,
      "objectID": "2888"
    },
    {
      "name": "San Tome",
      "city": "San Tome",
      "country": "Venezuela",
      "iata_code": "SOM",
      "_geoloc": {
        "latitude": 8.945147,
        "longitude": -64.151083
      },
      "links_count": 2,
      "objectID": "2864"
    },
    {
      "name": "San Antonio Del Tachira",
      "city": "San Antonio",
      "country": "Venezuela",
      "iata_code": "SVZ",
      "_geoloc": {
        "latitude": 7.840831,
        "longitude": -72.439742
      },
      "links_count": 2,
      "objectID": "2858"
    },
    {
      "name": "Casique Aramare",
      "city": "Puerto Ayacucho",
      "country": "Venezuela",
      "iata_code": "PYH",
      "_geoloc": {
        "latitude": 5.619992,
        "longitude": -67.606103
      },
      "links_count": 2,
      "objectID": "2853"
    },
    {
      "name": "La Fria",
      "city": "La Fria",
      "country": "Venezuela",
      "iata_code": "LFR",
      "_geoloc": {
        "latitude": 8.239167,
        "longitude": -72.271028
      },
      "links_count": 2,
      "objectID": "2846"
    },
    {
      "name": "Antonio Jose De Sucre",
      "city": "Cumana",
      "country": "Venezuela",
      "iata_code": "CUM",
      "_geoloc": {
        "latitude": 10.450333,
        "longitude": -64.130472
      },
      "links_count": 2,
      "objectID": "2835"
    },
    {
      "name": "Jose Leonardo Chirinos",
      "city": "Coro",
      "country": "Venezuela",
      "iata_code": "CZE",
      "_geoloc": {
        "latitude": 11.414867,
        "longitude": -69.681656
      },
      "links_count": 2,
      "objectID": "2833"
    },
    {
      "name": "Canaima",
      "city": "Canaima",
      "country": "Venezuela",
      "iata_code": "CAJ",
      "_geoloc": {
        "latitude": 6.231989,
        "longitude": -62.854433
      },
      "links_count": 2,
      "objectID": "2830"
    },
    {
      "name": "Capitan Carlos Martinez De Pinillos",
      "city": "Trujillo",
      "country": "Peru",
      "iata_code": "TRU",
      "_geoloc": {
        "latitude": -8.081411,
        "longitude": -79.108761
      },
      "links_count": 2,
      "objectID": "2804"
    },
    {
      "name": "Pedro Canga",
      "city": "Tumbes",
      "country": "Peru",
      "iata_code": "TBP",
      "_geoloc": {
        "latitude": -3.552528,
        "longitude": -80.381356
      },
      "links_count": 2,
      "objectID": "2796"
    },
    {
      "name": "Comandante Fap German Arias Graziani",
      "city": "Anta",
      "country": "Peru",
      "iata_code": "ATA",
      "_geoloc": {
        "latitude": -9.347444,
        "longitude": -77.598392
      },
      "links_count": 2,
      "objectID": "2788"
    },
    {
      "name": "Andahuaylas",
      "city": "Andahuaylas",
      "country": "Peru",
      "iata_code": "ANS",
      "_geoloc": {
        "latitude": -13.706408,
        "longitude": -73.350378
      },
      "links_count": 2,
      "objectID": "2787"
    },
    {
      "name": "Capt Jose A Quinones Gonzales Intl",
      "city": "Chiclayo",
      "country": "Peru",
      "iata_code": "CIX",
      "_geoloc": {
        "latitude": -6.787475,
        "longitude": -79.828097
      },
      "links_count": 2,
      "objectID": "2785"
    },
    {
      "name": "Yola",
      "city": "Yola",
      "country": "Nigeria",
      "iata_code": "YOL",
      "_geoloc": {
        "latitude": 9.257553,
        "longitude": 12.430422
      },
      "links_count": 2,
      "objectID": "277"
    },
    {
      "name": "Sadiq Abubakar Iii Intl",
      "city": "Sokoto",
      "country": "Nigeria",
      "iata_code": "SKO",
      "_geoloc": {
        "latitude": 12.916322,
        "longitude": 5.207189
      },
      "links_count": 2,
      "objectID": "276"
    },
    {
      "name": "Almirante Padilla",
      "city": "Rio Hacha",
      "country": "Colombia",
      "iata_code": "RCH",
      "_geoloc": {
        "latitude": 11.526222,
        "longitude": -72.925958
      },
      "links_count": 2,
      "objectID": "2746"
    },
    {
      "name": "El Embrujo",
      "city": "Providencia",
      "country": "Colombia",
      "iata_code": "PVA",
      "_geoloc": {
        "latitude": 13.356944,
        "longitude": -81.35833
      },
      "links_count": 2,
      "objectID": "2743"
    },
    {
      "name": "Guillermo Leon Valencia",
      "city": "Popayan",
      "country": "Colombia",
      "iata_code": "PPN",
      "_geoloc": {
        "latitude": 2.4544,
        "longitude": -76.609319
      },
      "links_count": 2,
      "objectID": "2741"
    },
    {
      "name": "La Nubia",
      "city": "Manizales",
      "country": "Colombia",
      "iata_code": "MZL",
      "_geoloc": {
        "latitude": 5.029597,
        "longitude": -75.464708
      },
      "links_count": 2,
      "objectID": "2733"
    },
    {
      "name": "San Luis",
      "city": "Ipiales",
      "country": "Colombia",
      "iata_code": "IPI",
      "_geoloc": {
        "latitude": 0.861925,
        "longitude": -77.671764
      },
      "links_count": 2,
      "objectID": "2725"
    },
    {
      "name": "Yariguies",
      "city": "Barrancabermeja",
      "country": "Colombia",
      "iata_code": "EJA",
      "_geoloc": {
        "latitude": 7.024331,
        "longitude": -73.8068
      },
      "links_count": 2,
      "objectID": "2718"
    },
    {
      "name": "La Florida",
      "city": "Tumaco",
      "country": "Colombia",
      "iata_code": "TCO",
      "_geoloc": {
        "latitude": 1.814417,
        "longitude": -78.749228
      },
      "links_count": 2,
      "objectID": "2716"
    },
    {
      "name": "Jose Celestino Mutis",
      "city": "Bahia Solano",
      "country": "Colombia",
      "iata_code": "BSC",
      "_geoloc": {
        "latitude": 6.202917,
        "longitude": -77.394675
      },
      "links_count": 2,
      "objectID": "2711"
    },
    {
      "name": "Kaduna",
      "city": "Kaduna",
      "country": "Nigeria",
      "iata_code": "KAD",
      "_geoloc": {
        "latitude": 10.696025,
        "longitude": 7.320114
      },
      "links_count": 2,
      "objectID": "269"
    },
    {
      "name": "Eloy Alfaro Intl",
      "city": "Manta",
      "country": "Ecuador",
      "iata_code": "MEC",
      "_geoloc": {
        "latitude": -0.946078,
        "longitude": -80.678808
      },
      "links_count": 2,
      "objectID": "2683"
    },
    {
      "name": "Coronel E Carvajal",
      "city": "Macas",
      "country": "Ecuador",
      "iata_code": "XMS",
      "_geoloc": {
        "latitude": -2.299167,
        "longitude": -78.12075
      },
      "links_count": 2,
      "objectID": "2680"
    },
    {
      "name": "Yakubu Gowon",
      "city": "Jos",
      "country": "Nigeria",
      "iata_code": "JOS",
      "_geoloc": {
        "latitude": 9.639828,
        "longitude": 8.86905
      },
      "links_count": 2,
      "objectID": "268"
    },
    {
      "name": "Ilorin",
      "city": "Ilorin",
      "country": "Nigeria",
      "iata_code": "ILR",
      "_geoloc": {
        "latitude": 8.440211,
        "longitude": 4.493919
      },
      "links_count": 2,
      "objectID": "267"
    },
    {
      "name": "Ibadan",
      "city": "Ibadan",
      "country": "Nigeria",
      "iata_code": "IBA",
      "_geoloc": {
        "latitude": 7.362458,
        "longitude": 3.978333
      },
      "links_count": 2,
      "objectID": "266"
    },
    {
      "name": "Canal Bajo Carlos Hott Siebert",
      "city": "Osorno",
      "country": "Chile",
      "iata_code": "ZOS",
      "_geoloc": {
        "latitude": -40.611208,
        "longitude": -73.061042
      },
      "links_count": 2,
      "objectID": "2658"
    },
    {
      "name": "Vilhena",
      "city": "Vilhena",
      "country": "Brazil",
      "iata_code": "BVH",
      "_geoloc": {
        "latitude": -12.694375,
        "longitude": -60.098269
      },
      "links_count": 2,
      "objectID": "2637"
    },
    {
      "name": "Rubem Berta",
      "city": "Uruguaiana",
      "country": "Brazil",
      "iata_code": "URG",
      "_geoloc": {
        "latitude": -29.782178,
        "longitude": -57.038189
      },
      "links_count": 2,
      "objectID": "2632"
    },
    {
      "name": "Paulo Afonso",
      "city": "Paulo Alfonso",
      "country": "Brazil",
      "iata_code": "PAV",
      "_geoloc": {
        "latitude": -9.400878,
        "longitude": -38.250575
      },
      "links_count": 2,
      "objectID": "2631"
    },
    {
      "name": "Tucurui",
      "city": "Tucurui",
      "country": "Brazil",
      "iata_code": "TUR",
      "_geoloc": {
        "latitude": -3.786008,
        "longitude": -49.720267
      },
      "links_count": 2,
      "objectID": "2629"
    },
    {
      "name": "Tabatinga",
      "city": "Tabatinga",
      "country": "Brazil",
      "iata_code": "TBT",
      "_geoloc": {
        "latitude": -4.255669,
        "longitude": -69.935828
      },
      "links_count": 2,
      "objectID": "2628"
    },
    {
      "name": "Trombetas",
      "city": "Oriximina",
      "country": "Brazil",
      "iata_code": "TMT",
      "_geoloc": {
        "latitude": -1.4896,
        "longitude": -56.396803
      },
      "links_count": 2,
      "objectID": "2622"
    },
    {
      "name": "Bom Jesus Da Lapa",
      "city": "Bom Jesus Da Lapa",
      "country": "Brazil",
      "iata_code": "LAZ",
      "_geoloc": {
        "latitude": -13.262086,
        "longitude": -43.408114
      },
      "links_count": 2,
      "objectID": "2582"
    },
    {
      "name": "Cruzeiro do Sul",
      "city": "Cruzeiro do Sul",
      "country": "Brazil",
      "iata_code": "CZS",
      "_geoloc": {
        "latitude": -7.599906,
        "longitude": -72.769489
      },
      "links_count": 2,
      "objectID": "2549"
    },
    {
      "name": "Corumba Intl",
      "city": "Corumba",
      "country": "Brazil",
      "iata_code": "CMG",
      "_geoloc": {
        "latitude": -19.011931,
        "longitude": -57.673053
      },
      "links_count": 2,
      "objectID": "2544"
    },
    {
      "name": "Alta Floresta",
      "city": "Alta Floresta",
      "country": "Brazil",
      "iata_code": "AFL",
      "_geoloc": {
        "latitude": -9.866092,
        "longitude": -56.106206
      },
      "links_count": 2,
      "objectID": "2524"
    },
    {
      "name": "Araraquara",
      "city": "Araracuara",
      "country": "Brazil",
      "iata_code": "AQA",
      "_geoloc": {
        "latitude": -21.812,
        "longitude": -48.133028
      },
      "links_count": 2,
      "objectID": "2521"
    },
    {
      "name": "Conceicao Do Araguaia",
      "city": "Conceicao Do Araguaia",
      "country": "Brazil",
      "iata_code": "CDJ",
      "_geoloc": {
        "latitude": -8.348347,
        "longitude": -49.301528
      },
      "links_count": 2,
      "objectID": "2518"
    },
    {
      "name": "Aviador C Campos",
      "city": "San Martin Des Andes",
      "country": "Argentina",
      "iata_code": "CPC",
      "_geoloc": {
        "latitude": -40.075383,
        "longitude": -71.137294
      },
      "links_count": 2,
      "objectID": "2517"
    },
    {
      "name": "Santa Rosa",
      "city": "Santa Rosa",
      "country": "Argentina",
      "iata_code": "RSA",
      "_geoloc": {
        "latitude": -36.588322,
        "longitude": -64.275694
      },
      "links_count": 2,
      "objectID": "2512"
    },
    {
      "name": "Sunyani",
      "city": "Sunyani",
      "country": "Ghana",
      "iata_code": "NYI",
      "_geoloc": {
        "latitude": 7.361828,
        "longitude": -2.328756
      },
      "links_count": 2,
      "objectID": "251"
    },
    {
      "name": "El Tehuelche",
      "city": "Puerto Madryn",
      "country": "Argentina",
      "iata_code": "PMY",
      "_geoloc": {
        "latitude": -42.759161,
        "longitude": -65.102725
      },
      "links_count": 2,
      "objectID": "2492"
    },
    {
      "name": "Gobernador Castello",
      "city": "Viedma",
      "country": "Argentina",
      "iata_code": "VDM",
      "_geoloc": {
        "latitude": -40.869222,
        "longitude": -63.000389
      },
      "links_count": 2,
      "objectID": "2491"
    },
    {
      "name": "Posadas",
      "city": "Posadas",
      "country": "Argentina",
      "iata_code": "PSS",
      "_geoloc": {
        "latitude": -27.385839,
        "longitude": -55.970728
      },
      "links_count": 2,
      "objectID": "2474"
    },
    {
      "name": "Formosa",
      "city": "Formosa",
      "country": "Argentina",
      "iata_code": "FMA",
      "_geoloc": {
        "latitude": -26.212722,
        "longitude": -58.228111
      },
      "links_count": 2,
      "objectID": "2470"
    },
    {
      "name": "Resistencia",
      "city": "Resistencia",
      "country": "Argentina",
      "iata_code": "RES",
      "_geoloc": {
        "latitude": -27.449986,
        "longitude": -59.056125
      },
      "links_count": 2,
      "objectID": "2469"
    },
    {
      "name": "La Rioja",
      "city": "La Rioja",
      "country": "Argentina",
      "iata_code": "IRJ",
      "_geoloc": {
        "latitude": -29.381636,
        "longitude": -66.795839
      },
      "links_count": 2,
      "objectID": "2458"
    },
    {
      "name": "Santiago Del Estero",
      "city": "Santiago Del Estero",
      "country": "Argentina",
      "iata_code": "SDE",
      "_geoloc": {
        "latitude": -27.765617,
        "longitude": -64.310122
      },
      "links_count": 2,
      "objectID": "2456"
    },
    {
      "name": "Catamarca",
      "city": "Catamarca",
      "country": "Argentina",
      "iata_code": "CTC",
      "_geoloc": {
        "latitude": -28.593214,
        "longitude": -65.750925
      },
      "links_count": 2,
      "objectID": "2455"
    },
    {
      "name": "Antique",
      "city": "San Jose",
      "country": "Philippines",
      "iata_code": "SJI",
      "_geoloc": {
        "latitude": 10.766044,
        "longitude": 121.933439
      },
      "links_count": 2,
      "objectID": "2435"
    },
    {
      "name": "Sidi Mahdi",
      "city": "Touggourt",
      "country": "Algeria",
      "iata_code": "TGR",
      "_geoloc": {
        "latitude": 33.067803,
        "longitude": 6.088672
      },
      "links_count": 2,
      "objectID": "240"
    },
    {
      "name": "Kumejima",
      "city": "Kumejima",
      "country": "Japan",
      "iata_code": "UEO",
      "_geoloc": {
        "latitude": 26.363506,
        "longitude": 126.713806
      },
      "links_count": 2,
      "objectID": "2388"
    },
    {
      "name": "Oshima",
      "city": "Oshima",
      "country": "Japan",
      "iata_code": "OIM",
      "_geoloc": {
        "latitude": 34.782033,
        "longitude": 139.360306
      },
      "links_count": 2,
      "objectID": "2356"
    },
    {
      "name": "Hachijojima",
      "city": "Hachijojima",
      "country": "Japan",
      "iata_code": "HAC",
      "_geoloc": {
        "latitude": 33.115,
        "longitude": 139.785833
      },
      "links_count": 2,
      "objectID": "2352"
    },
    {
      "name": "Tottori",
      "city": "Tottori",
      "country": "Japan",
      "iata_code": "TTJ",
      "_geoloc": {
        "latitude": 35.530069,
        "longitude": 134.166553
      },
      "links_count": 2,
      "objectID": "2335"
    },
    {
      "name": "Izumo",
      "city": "Izumo",
      "country": "Japan",
      "iata_code": "IZO",
      "_geoloc": {
        "latitude": 35.413611,
        "longitude": 132.89
      },
      "links_count": 2,
      "objectID": "2328"
    },
    {
      "name": "Monbetsu",
      "city": "Monbetsu",
      "country": "Japan",
      "iata_code": "MBE",
      "_geoloc": {
        "latitude": 44.303914,
        "longitude": 143.404028
      },
      "links_count": 2,
      "objectID": "2298"
    },
    {
      "name": "Nanki Shirahama",
      "city": "Nanki-shirahama",
      "country": "Japan",
      "iata_code": "SHM",
      "_geoloc": {
        "latitude": 33.662222,
        "longitude": 135.364444
      },
      "links_count": 2,
      "objectID": "2284"
    },
    {
      "name": "Tainan",
      "city": "Tainan",
      "country": "Taiwan",
      "iata_code": "TNN",
      "_geoloc": {
        "latitude": 22.950361,
        "longitude": 120.205778
      },
      "links_count": 2,
      "objectID": "2270"
    },
    {
      "name": "Fengnin",
      "city": "Fengnin",
      "country": "Taiwan",
      "iata_code": "TTT",
      "_geoloc": {
        "latitude": 22.754986,
        "longitude": 121.101681
      },
      "links_count": 2,
      "objectID": "2262"
    },
    {
      "name": "Cheikh Larbi Tebessi",
      "city": "Tebessa",
      "country": "Algeria",
      "iata_code": "TEE",
      "_geoloc": {
        "latitude": 35.431611,
        "longitude": 8.120717
      },
      "links_count": 2,
      "objectID": "222"
    },
    {
      "name": "Panjgur",
      "city": "Panjgur",
      "country": "Pakistan",
      "iata_code": "PJG",
      "_geoloc": {
        "latitude": 26.954547,
        "longitude": 64.132517
      },
      "links_count": 2,
      "objectID": "2217"
    },
    {
      "name": "Gilgit",
      "city": "Gilgit",
      "country": "Pakistan",
      "iata_code": "GIL",
      "_geoloc": {
        "latitude": 35.918786,
        "longitude": 74.333644
      },
      "links_count": 2,
      "objectID": "2204"
    },
    {
      "name": "Khasab",
      "city": "Khasab",
      "country": "Oman",
      "iata_code": "KHS",
      "_geoloc": {
        "latitude": 26.170986,
        "longitude": 56.240569
      },
      "links_count": 2,
      "objectID": "2192"
    },
    {
      "name": "Fujairah Intl",
      "city": "Fujeirah",
      "country": "United Arab Emirates",
      "iata_code": "FJR",
      "_geoloc": {
        "latitude": 25.112225,
        "longitude": 56.323964
      },
      "links_count": 2,
      "objectID": "2189"
    },
    {
      "name": "Sanandaj",
      "city": "Sanandaj",
      "country": "Iran",
      "iata_code": "SDG",
      "_geoloc": {
        "latitude": 35.245856,
        "longitude": 47.009247
      },
      "links_count": 2,
      "objectID": "2117"
    },
    {
      "name": "Wejh",
      "city": "Wejh",
      "country": "Saudi Arabia",
      "iata_code": "EJH",
      "_geoloc": {
        "latitude": 26.198553,
        "longitude": 36.476381
      },
      "links_count": 2,
      "objectID": "2095"
    },
    {
      "name": "Turaif",
      "city": "Turaif",
      "country": "Saudi Arabia",
      "iata_code": "TUI",
      "_geoloc": {
        "latitude": 31.692683,
        "longitude": 38.7312
      },
      "links_count": 2,
      "objectID": "2093"
    },
    {
      "name": "Rafha",
      "city": "Rafha",
      "country": "Saudi Arabia",
      "iata_code": "RAH",
      "_geoloc": {
        "latitude": 29.626419,
        "longitude": 43.490614
      },
      "links_count": 2,
      "objectID": "2081"
    },
    {
      "name": "Fort Mcpherson",
      "city": "Fort Mcpherson",
      "country": "Canada",
      "iata_code": "ZFM",
      "_geoloc": {
        "latitude": 67.4075,
        "longitude": -134.860556
      },
      "links_count": 2,
      "objectID": "206"
    },
    {
      "name": "Wanganui",
      "city": "Wanganui",
      "country": "New Zealand",
      "iata_code": "WAG",
      "_geoloc": {
        "latitude": -39.962222,
        "longitude": 175.025278
      },
      "links_count": 2,
      "objectID": "2047"
    },
    {
      "name": "Westport",
      "city": "Westport",
      "country": "New Zealand",
      "iata_code": "WSZ",
      "_geoloc": {
        "latitude": -41.738056,
        "longitude": 171.580833
      },
      "links_count": 2,
      "objectID": "2046"
    },
    {
      "name": "Whakatane",
      "city": "Whakatane",
      "country": "New Zealand",
      "iata_code": "WHK",
      "_geoloc": {
        "latitude": -37.920556,
        "longitude": 176.914167
      },
      "links_count": 2,
      "objectID": "2041"
    },
    {
      "name": "Timaru",
      "city": "Timaru",
      "country": "New Zealand",
      "iata_code": "TIU",
      "_geoloc": {
        "latitude": -44.302778,
        "longitude": 171.225278
      },
      "links_count": 2,
      "objectID": "2035"
    },
    {
      "name": "Kaitaia",
      "city": "Kaitaia",
      "country": "New Zealand",
      "iata_code": "KAT",
      "_geoloc": {
        "latitude": -35.07,
        "longitude": 173.285278
      },
      "links_count": 2,
      "objectID": "2018"
    },
    {
      "name": "Kerikeri",
      "city": "Kerikeri",
      "country": "New Zealand",
      "iata_code": "KKE",
      "_geoloc": {
        "latitude": -35.262779,
        "longitude": 173.911944
      },
      "links_count": 2,
      "objectID": "2017"
    },
    {
      "name": "Hokitika",
      "city": "Hokitika",
      "country": "New Zealand",
      "iata_code": "HKK",
      "_geoloc": {
        "latitude": -42.713611,
        "longitude": 170.985278
      },
      "links_count": 2,
      "objectID": "2014"
    },
    {
      "name": "Touho",
      "city": "Touho",
      "country": "New Caledonia",
      "iata_code": "TOU",
      "_geoloc": {
        "latitude": -20.790028,
        "longitude": 165.259486
      },
      "links_count": 2,
      "objectID": "2003"
    },
    {
      "name": "Mare",
      "city": "Mare",
      "country": "New Caledonia",
      "iata_code": "MEE",
      "_geoloc": {
        "latitude": -21.481678,
        "longitude": 168.037508
      },
      "links_count": 2,
      "objectID": "2002"
    },
    {
      "name": "Kone",
      "city": "Kone",
      "country": "New Caledonia",
      "iata_code": "KNQ",
      "_geoloc": {
        "latitude": -21.053428,
        "longitude": 164.837806
      },
      "links_count": 2,
      "objectID": "1998"
    },
    {
      "name": "Chris Hadfield",
      "city": "Sarnia",
      "country": "Canada",
      "iata_code": "YZR",
      "_geoloc": {
        "latitude": 42.999444,
        "longitude": -82.308889
      },
      "links_count": 2,
      "objectID": "199"
    },
    {
      "name": "Arutua",
      "city": "Arutua",
      "country": "French Polynesia",
      "iata_code": "AXR",
      "_geoloc": {
        "latitude": -15.248289,
        "longitude": -146.616708
      },
      "links_count": 2,
      "objectID": "1984"
    },
    {
      "name": "Takapoto",
      "city": "Takapoto",
      "country": "French Polynesia",
      "iata_code": "TKP",
      "_geoloc": {
        "latitude": -14.709544,
        "longitude": -145.245814
      },
      "links_count": 2,
      "objectID": "1983"
    },
    {
      "name": "Makemo",
      "city": "Makemo",
      "country": "French Polynesia",
      "iata_code": "MKP",
      "_geoloc": {
        "latitude": -16.583919,
        "longitude": -143.658369
      },
      "links_count": 2,
      "objectID": "1981"
    },
    {
      "name": "Kaukura",
      "city": "Kaukura Atoll",
      "country": "French Polynesia",
      "iata_code": "KKR",
      "_geoloc": {
        "latitude": -15.663333,
        "longitude": -146.884769
      },
      "links_count": 2,
      "objectID": "1980"
    },
    {
      "name": "Sandspit",
      "city": "Sandspit",
      "country": "Canada",
      "iata_code": "YZP",
      "_geoloc": {
        "latitude": 53.254333,
        "longitude": -131.813833
      },
      "links_count": 2,
      "objectID": "198"
    },
    {
      "name": "Totegegie",
      "city": "Totegegie",
      "country": "French Polynesia",
      "iata_code": "GMR",
      "_geoloc": {
        "latitude": -23.079861,
        "longitude": -134.890333
      },
      "links_count": 2,
      "objectID": "1979"
    },
    {
      "name": "Pago Pago Intl",
      "city": "Pago Pago",
      "country": "American Samoa",
      "iata_code": "PPG",
      "_geoloc": {
        "latitude": -14.331,
        "longitude": -170.7105
      },
      "links_count": 2,
      "objectID": "1970"
    },
    {
      "name": "Mariana Grajales",
      "city": "Guantanamo",
      "country": "Cuba",
      "iata_code": "GAO",
      "_geoloc": {
        "latitude": 20.085419,
        "longitude": -75.158328
      },
      "links_count": 2,
      "objectID": "1908"
    },
    {
      "name": "Nosara",
      "city": "Nosara Beach",
      "country": "Costa Rica",
      "iata_code": "NOB",
      "_geoloc": {
        "latitude": 9.97649,
        "longitude": -85.653
      },
      "links_count": 2,
      "objectID": "1884"
    },
    {
      "name": "Cap Manuel Nino Intl",
      "city": "Changuinola",
      "country": "Panama",
      "iata_code": "CHX",
      "_geoloc": {
        "latitude": 9.458636,
        "longitude": -82.516806
      },
      "links_count": 2,
      "objectID": "1866"
    },
    {
      "name": "Quetzalcoatl Intl",
      "city": "Nuevo Laredo",
      "country": "Mexico",
      "iata_code": "NLD",
      "_geoloc": {
        "latitude": 27.443918,
        "longitude": -99.57046
      },
      "links_count": 2,
      "objectID": "1828"
    },
    {
      "name": "Loreto Intl",
      "city": "Loreto",
      "country": "Mexico",
      "iata_code": "LTO",
      "_geoloc": {
        "latitude": 25.989194,
        "longitude": -111.348361
      },
      "links_count": 2,
      "objectID": "1817"
    },
    {
      "name": "Penticton",
      "city": "Penticton",
      "country": "Canada",
      "iata_code": "YYF",
      "_geoloc": {
        "latitude": 49.463056,
        "longitude": -119.602222
      },
      "links_count": 2,
      "objectID": "181"
    },
    {
      "name": "Chetumal Intl",
      "city": "Chetumal",
      "country": "Mexico",
      "iata_code": "CTM",
      "_geoloc": {
        "latitude": 18.504667,
        "longitude": -88.326847
      },
      "links_count": 2,
      "objectID": "1793"
    },
    {
      "name": "Guanaja",
      "city": "Guanaja",
      "country": "Honduras",
      "iata_code": "GJA",
      "_geoloc": {
        "latitude": 16.445367,
        "longitude": -85.906611
      },
      "links_count": 2,
      "objectID": "1773"
    },
    {
      "name": "Medicine Hat",
      "city": "Medicine Hat",
      "country": "Canada",
      "iata_code": "YXH",
      "_geoloc": {
        "latitude": 50.01889,
        "longitude": -110.720833
      },
      "links_count": 2,
      "objectID": "167"
    },
    {
      "name": "Mihail Kogalniceanu",
      "city": "Constanta",
      "country": "Romania",
      "iata_code": "CND",
      "_geoloc": {
        "latitude": 44.362222,
        "longitude": 28.488333
      },
      "links_count": 2,
      "objectID": "1651"
    },
    {
      "name": "Arad",
      "city": "Arad",
      "country": "Romania",
      "iata_code": "ARW",
      "_geoloc": {
        "latitude": 46.17655,
        "longitude": 21.262022
      },
      "links_count": 2,
      "objectID": "1647"
    },
    {
      "name": "Mostar",
      "city": "Mostar",
      "country": "Bosnia and Herzegovina",
      "iata_code": "OMO",
      "_geoloc": {
        "latitude": 43.2829,
        "longitude": 17.845878
      },
      "links_count": 2,
      "objectID": "1645"
    },
    {
      "name": "Graciosa",
      "city": "Graciosa Island",
      "country": "Portugal",
      "iata_code": "GRW",
      "_geoloc": {
        "latitude": 39.092169,
        "longitude": -28.029847
      },
      "links_count": 2,
      "objectID": "1627"
    },
    {
      "name": "Turany",
      "city": "Brno",
      "country": "Czech Republic",
      "iata_code": "BRQ",
      "_geoloc": {
        "latitude": 49.151269,
        "longitude": 16.694433
      },
      "links_count": 2,
      "objectID": "1588"
    },
    {
      "name": "Isafjordur",
      "city": "Isafjordur",
      "country": "Iceland",
      "iata_code": "IFJ",
      "_geoloc": {
        "latitude": 66.058056,
        "longitude": -23.135278
      },
      "links_count": 2,
      "objectID": "15"
    },
    {
      "name": "Aristotelis",
      "city": "Kastoria",
      "country": "Greece",
      "iata_code": "KSO",
      "_geoloc": {
        "latitude": 40.446294,
        "longitude": 21.282186
      },
      "links_count": 2,
      "objectID": "1453"
    },
    {
      "name": "Tuktoyaktuk",
      "city": "Tuktoyaktuk",
      "country": "Canada",
      "iata_code": "YUB",
      "_geoloc": {
        "latitude": 69.433334,
        "longitude": -133.026389
      },
      "links_count": 2,
      "objectID": "145"
    },
    {
      "name": "Longvic",
      "city": "Dijon",
      "country": "France",
      "iata_code": "DIJ",
      "_geoloc": {
        "latitude": 47.26889,
        "longitude": 5.09
      },
      "links_count": 2,
      "objectID": "1425"
    },
    {
      "name": "Pluguffan",
      "city": "Quimper",
      "country": "France",
      "iata_code": "UIP",
      "_geoloc": {
        "latitude": 47.974981,
        "longitude": -4.167786
      },
      "links_count": 2,
      "objectID": "1417"
    },
    {
      "name": "Lannion",
      "city": "Lannion",
      "country": "France",
      "iata_code": "LAI",
      "_geoloc": {
        "latitude": 48.754378,
        "longitude": -3.471656
      },
      "links_count": 2,
      "objectID": "1416"
    },
    {
      "name": "Octeville",
      "city": "Le Havre",
      "country": "France",
      "iata_code": "LEH",
      "_geoloc": {
        "latitude": 49.533889,
        "longitude": 0.088056
      },
      "links_count": 2,
      "objectID": "1371"
    },
    {
      "name": "Aurillac",
      "city": "Aurillac",
      "country": "France",
      "iata_code": "AUR",
      "_geoloc": {
        "latitude": 44.891388,
        "longitude": 2.421944
      },
      "links_count": 2,
      "objectID": "1344"
    },
    {
      "name": "Loudes",
      "city": "Le Puy",
      "country": "France",
      "iata_code": "LPY",
      "_geoloc": {
        "latitude": 45.080689,
        "longitude": 3.762889
      },
      "links_count": 2,
      "objectID": "1313"
    },
    {
      "name": "Brie Champniers",
      "city": "Angouleme",
      "country": "France",
      "iata_code": "ANG",
      "_geoloc": {
        "latitude": 45.729247,
        "longitude": 0.221456
      },
      "links_count": 2,
      "objectID": "1277"
    },
    {
      "name": "Salamanca",
      "city": "Salamanca",
      "country": "Spain",
      "iata_code": "SLM",
      "_geoloc": {
        "latitude": 40.952117,
        "longitude": -5.501986
      },
      "links_count": 2,
      "objectID": "1238"
    },
    {
      "name": "Egilsstadir",
      "city": "Egilsstadir",
      "country": "Iceland",
      "iata_code": "EGS",
      "_geoloc": {
        "latitude": 65.283333,
        "longitude": -14.401389
      },
      "links_count": 2,
      "objectID": "12"
    },
    {
      "name": "Mtwara",
      "city": "Mtwara",
      "country": "Tanzania",
      "iata_code": "MYW",
      "_geoloc": {
        "latitude": -10.339058,
        "longitude": 40.181781
      },
      "links_count": 2,
      "objectID": "1182"
    },
    {
      "name": "Arusha",
      "city": "Arusha",
      "country": "Tanzania",
      "iata_code": "ARK",
      "_geoloc": {
        "latitude": -3.367794,
        "longitude": 36.633333
      },
      "links_count": 2,
      "objectID": "1176"
    },
    {
      "name": "Kamembe",
      "city": "Kamembe",
      "country": "Rwanda",
      "iata_code": "KME",
      "_geoloc": {
        "latitude": -2.462242,
        "longitude": 28.90795
      },
      "links_count": 2,
      "objectID": "1166"
    },
    {
      "name": "Ghadames East",
      "city": "Ghadames",
      "country": "Libya",
      "iata_code": "LTD",
      "_geoloc": {
        "latitude": 30.151695,
        "longitude": 9.715305
      },
      "links_count": 2,
      "objectID": "1162"
    },
    {
      "name": "Lethbridge",
      "city": "Lethbridge",
      "country": "Canada",
      "iata_code": "YQL",
      "_geoloc": {
        "latitude": 49.630278,
        "longitude": -112.799722
      },
      "links_count": 2,
      "objectID": "116"
    },
    {
      "name": "Ghat",
      "city": "Ghat",
      "country": "Libya",
      "iata_code": "GHT",
      "_geoloc": {
        "latitude": 25.145564,
        "longitude": 10.142647
      },
      "links_count": 2,
      "objectID": "1152"
    },
    {
      "name": "Kitale",
      "city": "Kitale",
      "country": "Kenya",
      "iata_code": "KTL",
      "_geoloc": {
        "latitude": 0.971989,
        "longitude": 34.958556
      },
      "links_count": 2,
      "objectID": "1141"
    },
    {
      "name": "Abu Simbel",
      "city": "Abu Simbel",
      "country": "Egypt",
      "iata_code": "ABS",
      "_geoloc": {
        "latitude": 22.375953,
        "longitude": 31.611722
      },
      "links_count": 2,
      "objectID": "1127"
    },
    {
      "name": "Maio",
      "city": "Maio",
      "country": "Cape Verde",
      "iata_code": "MMO",
      "_geoloc": {
        "latitude": 15.155928,
        "longitude": -23.213703
      },
      "links_count": 2,
      "objectID": "1104"
    },
    {
      "name": "Akureyri",
      "city": "Akureyri",
      "country": "Iceland",
      "iata_code": "AEY",
      "_geoloc": {
        "latitude": 65.659994,
        "longitude": -18.072703
      },
      "links_count": 2,
      "objectID": "11"
    },
    {
      "name": "Cap Skiring",
      "city": "Cap Skiring",
      "country": "Senegal",
      "iata_code": "CSK",
      "_geoloc": {
        "latitude": 12.4102,
        "longitude": -16.746125
      },
      "links_count": 2,
      "objectID": "1082"
    },
    {
      "name": "Saniat Rmel",
      "city": "Tetouan",
      "country": "Morocco",
      "iata_code": "TTU",
      "_geoloc": {
        "latitude": 35.594333,
        "longitude": -5.320019
      },
      "links_count": 2,
      "objectID": "1079"
    },
    {
      "name": "Cherif El Idrissi",
      "city": "Al Hociema",
      "country": "Morocco",
      "iata_code": "AHU",
      "_geoloc": {
        "latitude": 35.177103,
        "longitude": -3.839525
      },
      "links_count": 2,
      "objectID": "1078"
    },
    {
      "name": "Plage Blanche",
      "city": "Tan Tan",
      "country": "Morocco",
      "iata_code": "TTA",
      "_geoloc": {
        "latitude": 28.448194,
        "longitude": -11.161347
      },
      "links_count": 2,
      "objectID": "1065"
    },
    {
      "name": "Pickle Lake",
      "city": "Pickle Lake",
      "country": "Canada",
      "iata_code": "YPL",
      "_geoloc": {
        "latitude": 51.446388,
        "longitude": -90.214167
      },
      "links_count": 2,
      "objectID": "105"
    },
    {
      "name": "Matari",
      "city": "Isiro",
      "country": "Congo (Kinshasa)",
      "iata_code": "IRP",
      "_geoloc": {
        "latitude": 2.827606,
        "longitude": 27.588253
      },
      "links_count": 2,
      "objectID": "1032"
    },
    {
      "name": "Gemena",
      "city": "Gemena",
      "country": "Congo (Kinshasa)",
      "iata_code": "GMA",
      "_geoloc": {
        "latitude": 3.235369,
        "longitude": 19.771258
      },
      "links_count": 2,
      "objectID": "1028"
    },
    {
      "name": "Moshoeshoe I Intl",
      "city": "Maseru",
      "country": "Lesotho",
      "iata_code": "MSU",
      "_geoloc": {
        "latitude": -29.462256,
        "longitude": 27.552503
      },
      "links_count": 2,
      "objectID": "1018"
    },
    {
      "name": "Sao Felix do Xingu Airport",
      "city": "Sao Felix do Xingu",
      "country": "Brazil",
      "iata_code": "SXX",
      "_geoloc": {
        "latitude": -6.641389,
        "longitude": -51.952222
      },
      "links_count": 1,
      "objectID": "8241"
    },
    {
      "name": "Confresa Airport",
      "city": "Santa Terezinha",
      "country": "Brazil",
      "iata_code": "STZ",
      "_geoloc": {
        "latitude": -10.47,
        "longitude": -50.502778
      },
      "links_count": 1,
      "objectID": "7374"
    },
    {
      "name": "Breves Airport",
      "city": "Breves",
      "country": "Brazil",
      "iata_code": "BVS",
      "_geoloc": {
        "latitude": -1.681944,
        "longitude": -50.48
      },
      "links_count": 1,
      "objectID": "7370"
    },
    {
      "name": "Campo Alegre Airport",
      "city": "Santana do Araguaia",
      "country": "Brazil",
      "iata_code": "CMP",
      "_geoloc": {
        "latitude": -9.505,
        "longitude": -50.625
      },
      "links_count": 1,
      "objectID": "7369"
    },
    {
      "name": "Zachar Bay Seaplane Base",
      "city": "Zachar Bay",
      "country": "United States",
      "iata_code": "KZB",
      "_geoloc": {
        "latitude": 57.55,
        "longitude": -153.75
      },
      "links_count": 1,
      "objectID": "7176"
    },
    {
      "name": "Port Williams Seaplane Base",
      "city": "Port Williams",
      "country": "United States",
      "iata_code": "KPR",
      "_geoloc": {
        "latitude": 58.49,
        "longitude": -152.582222
      },
      "links_count": 1,
      "objectID": "7172"
    },
    {
      "name": "Karuluk Airport",
      "city": "Karluk",
      "country": "United States",
      "iata_code": "KYK",
      "_geoloc": {
        "latitude": 57.566944,
        "longitude": -154.450278
      },
      "links_count": 1,
      "objectID": "7161"
    },
    {
      "name": "Dalanzadgad Airport",
      "city": "Dalanzadgad",
      "country": "Mongolia",
      "iata_code": "DLZ",
      "_geoloc": {
        "latitude": 43.5917,
        "longitude": 104.43
      },
      "links_count": 1,
      "objectID": "6372"
    },
    {
      "name": "Portland Airport",
      "city": "Portland",
      "country": "Australia",
      "iata_code": "PTJ",
      "_geoloc": {
        "latitude": -38.3181,
        "longitude": 141.471
      },
      "links_count": 1,
      "objectID": "6321"
    },
    {
      "name": "Niue International Airport",
      "city": "Alofi",
      "country": "Niue",
      "iata_code": "IUE",
      "_geoloc": {
        "latitude": -19.080028,
        "longitude": -169.925639
      },
      "links_count": 1,
      "objectID": "5884"
    },
    {
      "name": "Lodja Airport",
      "city": "Lodja",
      "country": "Congo (Kinshasa)",
      "iata_code": "LJA",
      "_geoloc": {
        "latitude": -3.417,
        "longitude": 23.45
      },
      "links_count": 1,
      "objectID": "5653"
    },
    {
      "name": "Utila Airport",
      "city": "Utila",
      "country": "Honduras",
      "iata_code": "UII",
      "_geoloc": {
        "latitude": 16.091667,
        "longitude": -86.8875
      },
      "links_count": 1,
      "objectID": "4125"
    },
    {
      "name": "Massawa Intl",
      "city": "Massawa",
      "country": "Eritrea",
      "iata_code": "MSW",
      "_geoloc": {
        "latitude": 15.669989,
        "longitude": 39.370103
      },
      "links_count": 1,
      "objectID": "3968"
    },
    {
      "name": "Teniente Coronel Luis A Mantilla",
      "city": "Tulcan",
      "country": "Ecuador",
      "iata_code": "TUA",
      "_geoloc": {
        "latitude": 0.809506,
        "longitude": -77.708056
      },
      "links_count": 1,
      "objectID": "2697"
    },
    {
      "name": "Ovda",
      "city": "Ovda",
      "country": "Israel",
      "iata_code": "VDA",
      "_geoloc": {
        "latitude": 29.94025,
        "longitude": 34.93585
      },
      "links_count": 1,
      "objectID": "1602"
    },
    {
      "name": "Filippos",
      "city": "Kozani",
      "country": "Greece",
      "iata_code": "KZI",
      "_geoloc": {
        "latitude": 40.28611,
        "longitude": 21.840834
      },
      "links_count": 1,
      "objectID": "1463"
    },
    {
      "name": "Kalemie",
      "city": "Kalemie",
      "country": "Congo (Kinshasa)",
      "iata_code": "FMI",
      "_geoloc": {
        "latitude": -5.875556,
        "longitude": 29.25
      },
      "links_count": 1,
      "objectID": "1040"
    }
  ];

  module.exports = airports;