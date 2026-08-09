export interface Landmark {
  name: string;
  desc: string;
}

export interface SplitSection {
  imageLeft: boolean;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface ServiceAreaData {
  slug: string;
  cityName: string;
  state: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  headline: string;
  tagline: string;
  leadParagraph: string;
  heroBullets: string[];
  splitSections: SplitSection[];
  landmarks: Landmark[];
  neighborhoods: string[];
  faqs: { question: string; answer: string }[];
}

export const serviceAreasData: ServiceAreaData[] = [
  {
    slug: "arlington-wa",
    cityName: "Arlington",
    state: "WA",
    zipCode: "98223",
    latitude: 48.1986,
    longitude: -122.1251,
    headline: "Landscaping & Hardscaping Services in Arlington, WA",
    tagline: "Custom Paver Patios, Decks & Excavation in Arlington",
    leadParagraph: "Arlington properties contend with heavy Stillaguamish River basin moisture, rolling foothill slopes, and diverse soil profiles from Smokey Point to Gleneagle. Got Yard provides custom landscape construction engineered to handle Pacific Northwest weather while elevating your outdoor living space.",
    heroBullets: [
      "✔ Custom Paver Patios & Outdoor Fire Pit Living",
      "✔ Heavy Yard Grading & French Drain Systems",
      "✔ Structural Retaining Walls for Slopes & Terraces",
      "✔ Free On-Site Estimates Across Arlington & Smokey Point"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/3109C95B-6E8B-4255-9C4A-04ECA2D9E075.webp",
        imageAlt: "Custom Paver Patio and Fire Pit Installation in Arlington WA",
        eyebrow: "Arlington Outdoor Living",
        title: "Custom Paver Patios & Outdoor Fire Pit Spaces",
        description: "Transform your Arlington backyard into an entertainer's dream. We install commercial-grade stone paver patios, fire pits, and seating walls engineered over compacted gravel bases that withstand wet Arlington winters without settling or cracking.",
        bullets: [
          "Interlocking concrete & natural stone paver designs",
          "Built-in fire tables, seating walls & outdoor kitchens",
          "Permeable joint sanding for superior water drainage"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/5846597F-A577-4BAF-AC83-E61DD2763FD0.webp",
        imageAlt: "Retaining Wall and Slope Stabilization Build in Arlington WA",
        eyebrow: "Structural Site Engineering",
        title: "Retaining Wall Construction & Slope Stabilization",
        description: "Arlington properties near Gleneagle and High Bridge often feature significant grade changes. Our team builds structural block and boulder retaining walls designed to hold back heavy soil loads while preventing erosion during torrential river valley downpours.",
        bullets: [
          "Heavy-duty concrete block & natural stone retaining walls",
          "Integrated perforated drain tile & crushed rock backfill",
          "Terraced garden steps & hillside level adjustments"
        ]
      }
    ],
    landmarks: [
      { name: "Centennial Trail Corridor", desc: "Custom patio and deck installations built for homes surrounding the trail, designed for Pacific Northwest weather." },
      { name: "Gleneagle & High Bridge", desc: "Full-scale hardscaping, retaining walls, and sod installation for established residential properties." },
      { name: "Stillaguamish River Basin", desc: "Expert yard grading, drainage solutions, and erosion control engineered for Pacific Northwest rainfall." },
      { name: "Smokey Point & Bryant", desc: "Heavy land clearing, excavation, and structural outdoor living spaces built with precision." }
    ],
    neighborhoods: ["Gleneagle", "Smokey Point", "Haller Park", "Bryant", "High Bridge", "Portage Creek", "Silvana", "Island Crossing"],
    faqs: [
      {
        question: "Do I need a permit for deck building or retaining walls in Arlington, WA?",
        answer: "Permit requirements depend on structure height and size. In Arlington and Snohomish County, retaining walls over 4 feet tall or attached decks typically require building permits. Got Yard assists homeowners with plans and engineering to ensure full compliance with municipal codes."
      },
      {
        question: "How do you design landscapes in Arlington to withstand heavy Pacific Northwest rainfall?",
        answer: "Arlington properties in the Stillaguamish River basin frequently experience wet soil conditions. We engineer every project with proper slope grading, French drains, gravel base preparation, and permeable materials to prevent standing water."
      },
      {
        question: "What areas of Arlington, WA do you serve?",
        answer: "We serve all neighborhoods across Arlington (ZIP 98223), including Gleneagle, Smokey Point, Bryant, High Bridge, Haller Park, Portage Creek, and surrounding Snohomish County communities."
      },
      {
        question: "How quickly can Got Yard start my landscaping or deck project in Arlington?",
        answer: "We pride ourselves on fast turnaround times and clear schedules. Once your consultation is complete and design plans are approved, most projects begin within 1 to 2 weeks."
      }
    ]
  },
  {
    slug: "marysville-wa",
    cityName: "Marysville",
    state: "WA",
    zipCode: "98270",
    latitude: 48.0518,
    longitude: -122.1771,
    headline: "Marysville's Hometown Landscape Construction & Patios",
    tagline: "Headquartered in Marysville — Custom Hardscaping & Decks",
    leadParagraph: "As Marysville's premier local landscape contractor, Got Yard understands the unique soil composition, coastal marine climate, and property topography across our hometown. From Sunnyside hillside terraces to Ebey Waterfront entertainment spaces, we build outdoor yards built to last.",
    heroBullets: [
      "✔ Headquartered Locally in Marysville, WA",
      "✔ High-Durability Composite Decking & Timber Structures",
      "✔ Custom Paver Walkways, Driveways & Fire Pits",
      "✔ Fast On-Site Estimates & Turnkey Project Execution"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/623CF190-7319-4F5A-9E58-AC06F10AD535.webp",
        imageAlt: "Composite Deck Building Project in Marysville WA",
        eyebrow: "Marysville Deck Builders",
        title: "Custom Composite & Timber Deck Construction",
        description: "Expand your indoor living outdoors with a custom deck built specifically for Marysville weather. We construct rot-resistant composite and traditional timber decks featuring hidden fasteners, custom railings, and multi-tier staircases.",
        bullets: [
          "Trex, TimberTech & cedar decking installations",
          "Code-compliant structural footings & pressure-treated framing",
          "Integrated deck lighting, benches & aluminum railings"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/IMG_1338.webp",
        imageAlt: "Yard Drainage and Sod Installation in Marysville WA",
        eyebrow: "Marysville Soil & Lawn Care",
        title: "Drainage Systems, Grading & Lawn Replacement",
        description: "Clay-heavy soils in Kellogg Marsh and Getchell often trap water, leaving yards soggy and muddy. We install subterranean French drains, regrade property slopes, and lay dense Northwest sod lawns for year-round usability.",
        bullets: [
          "Deep French drains & catch basin rain management",
          "Excavator grading for proper house runoff diversion",
          "Fresh premium Northwest sod installation & topsoil prep"
        ]
      }
    ],
    landmarks: [
      { name: "Ebey Waterfront & Downtown", desc: "Waterfront patio construction, walkway paving, and custom deck builds tailored for Marysville homes." },
      { name: "Sunnyside & Getchell", desc: "Heavy land grading, soil excavation, and retaining wall installations for hillside and residential yards." },
      { name: "Tulalip & Lakewood Corridor", desc: "Low-maintenance hardscaping, custom outdoor kitchens, and high-durability composite decking." },
      { name: "Quil Ceda & Smokey Point Border", desc: "Commercial and residential landscape construction, sod installation, and French drain solutions." }
    ],
    neighborhoods: ["Sunnyside", "Getchell", "Whispering Pines", "Lakewood", "Quil Ceda", "Tulalip", "Kellogg Marsh", "Shuksan"],
    faqs: [
      {
        question: "Where is Got Yard located in Marysville, WA?",
        answer: "Got Yard is locally owned and operated right here in Marysville, WA! We serve all local neighborhoods with fast response times and on-site consultations."
      },
      {
        question: "What services do you provide in Marysville?",
        answer: "We specialize in complete outdoor transformations including hardscaping, paver patios, composite deck building, retaining walls, sod installation, yard grading, and drainage systems."
      }
    ]
  },
  {
    slug: "everett-wa",
    cityName: "Everett",
    state: "WA",
    zipCode: "98201",
    latitude: 47.9790,
    longitude: -122.2021,
    headline: "Landscape Construction & Hardscaping in Everett, WA",
    tagline: "Terraced Retaining Walls, Patios & Decks in Everett",
    leadParagraph: "Everett's diverse topography—ranging from steep Puget Sound-overlooking hillsides in Bayside to lakeside properties along Silver Lake—demands specialized landscape engineering. Got Yard delivers structural retaining walls, custom decks, and high-end paver hardscapes across Everett.",
    heroBullets: [
      "✔ Terraced Hillside Retaining Walls & Stone Steps",
      "✔ Silver Lake Lakeside Patio & Deck Building",
      "✔ Space-Efficient Urban Hardscaping Solutions",
      "✔ Full Licensing, Bonding & Engineering Support"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/35404C40-991F-444A-85E2-0CFC8F9484AF.webp",
        imageAlt: "Terraced Stone Retaining Wall in Everett WA",
        eyebrow: "Everett Hillside Solutions",
        title: "Terraced Retaining Walls & Slope Terracing",
        description: "Transform unmanageable Everett hillside slopes into usable, multi-tiered outdoor spaces. We engineer structural retaining walls using engineered concrete block, natural basalt, and reinforced geogrid to prevent soil displacement.",
        bullets: [
          "Engineered block & natural stone retaining walls",
          "Terraced garden beds & built-in access stairways",
          "Complete drainage backfill to eliminate hydraulic pressure"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/8E068ADE-A26A-424E-ABE5-EB3C09EB6B93.webp",
        imageAlt: "Modern Paver Patio Living Space in Everett WA",
        eyebrow: "Everett Urban Hardscaping",
        title: "Custom Outdoor Living Patios & Entertaining Spaces",
        description: "Whether in historic Port Gardner or South Everett neighborhoods, we build custom paver patios, outdoor seating areas, and low-maintenance yards designed for maximum outdoor enjoyment with minimal upkeep.",
        bullets: [
          "Precision paver laying & border course masonry",
          "Outdoor dining pads, fire pits & BBQ surrounds",
          "Gravel border accents & low-voltage garden lighting"
        ]
      }
    ],
    landmarks: [
      { name: "Silver Lake & Pinehurst", desc: "Lakeside patio paving, composite decks, and water-friendly landscape drainage systems." },
      { name: "Grandview & Bayside", desc: "Terraced hillside retaining walls, slope stabilization, and stone staircases." },
      { name: "Lowell & Port Gardner", desc: "Custom outdoor living spaces, fire pit tables, and durable deck construction." },
      { name: "Delta & Northwest Everett", desc: "Sod replacement, yard leveling, gravel driveways, and land clearing." }
    ],
    neighborhoods: ["Silver Lake", "Bayside", "Grandview", "Lowell", "Delta", "Pinehurst", "Port Gardner", "Valley View"],
    faqs: [
      {
        question: "Do you service all neighborhoods in Everett, WA?",
        answer: "Yes! We serve all of Everett from Silver Lake up to Port Gardner and Bayside with comprehensive landscape construction services."
      }
    ]
  },
  {
    slug: "lake-stevens-wa",
    cityName: "Lake Stevens",
    state: "WA",
    zipCode: "98258",
    latitude: 48.0145,
    longitude: -122.0640,
    headline: "Lakeside Landscape Construction in Lake Stevens, WA",
    tagline: "Custom Lakeview Decks, Patios & Drainage Systems",
    leadParagraph: "Living in Lake Stevens means maximizing your outdoor space for lakeview entertaining while engineering your yard against seasonal slope runoff and wet clay soils. Got Yard builds custom decks, paver fire pit patios, and drainage systems across Lake Stevens.",
    heroBullets: [
      "✔ Lakeview Composite Decks & Staircases",
      "✔ Permeable Paver Patio & Fire Pit Hardscaping",
      "✔ Slope Runoff Mitigation & French Drains",
      "✔ Heavy Machinery Site Prep & Land Clearing"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/C8804C51-CDF0-4FB9-968E-28B306356A79.webp",
        imageAlt: "Lakeview Deck and Outdoor Living Space in Lake Stevens WA",
        eyebrow: "Lake Stevens Decking",
        title: "Lakeview Multi-Tier Composite Decks",
        description: "Capitalize on beautiful Lake Stevens views with a custom deck designed for gathering. Our moisture-hardened composite decking materials resist algae growth, rot, and splintering, giving you a maintenance-free outdoor room.",
        bullets: [
          "Custom multi-level deck layouts & lakeview seating",
          "Algae-resistant composite boards & hidden fastener systems",
          "Heavy timber framing built for Northwest humidity"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/D49B4CEC-4EBC-4B2F-B533-6B29FD3B6DC3.webp",
        imageAlt: "Excavation and Slope Grading in Lake Stevens WA",
        eyebrow: "Lake Stevens Site Preparation",
        title: "Heavy Excavation, Grading & Runoff Controls",
        description: "Properties in Machias and Cavelero often require heavy machinery site preparation before building. We operate mini-excavators and skid steers for clearing brush, leveling terrain, and installing deep drainage networks.",
        bullets: [
          "Precision machine grading & topsoil excavation",
          "Catch basins & underground downspout piping",
          "Property boundary clearing & gravel base installation"
        ]
      }
    ],
    landmarks: [
      { name: "Lake Stevens Waterfront", desc: "Custom lakeview decks, outdoor patio living spaces, and erosion-resistant retaining walls." },
      { name: "Frontier Heights & Cavelero", desc: "Full yard grading, fresh sod installation, and paver walkways." },
      { name: "Machias & Glenwood", desc: "Heavy excavation, brush clearing, property grading, and structural block retaining walls." },
      { name: "Lochsloy & Hartford", desc: "French drain installation, lawn leveling, flagstone paths, and soil stabilization." }
    ],
    neighborhoods: ["Frontier Heights", "Cavelero", "Glenwood", "Machias", "Lochsloy", "Hartford"],
    faqs: [
      {
        question: "Can you build lakeside decks and retaining walls in Lake Stevens?",
        answer: "Yes! We specialize in lakeside outdoor construction engineered for slope stability and moisture protection."
      }
    ]
  },
  {
    slug: "stanwood-wa",
    cityName: "Stanwood",
    state: "WA",
    zipCode: "98292",
    latitude: 48.2415,
    longitude: -122.3707,
    headline: "Stanwood Landscape Construction & Heavy Excavation",
    tagline: "Weather-Hardened Decks, Retaining Walls & Rural Hardscaping",
    leadParagraph: "Stanwood's coastal proximity along Port Susan and sprawling rural acreage require landscape construction built to withstand saltwater air, heavy wind exposure, and seasonal groundwater. Got Yard builds weather-hardened decks, retaining walls, and acreage drainage in Stanwood.",
    heroBullets: [
      "✔ Saltwater & Wind-Hardened Deck Construction",
      "✔ Acreage Retaining Walls & Driveway Grading",
      "✔ French Drains & Heavy Drainage Networks",
      "✔ Land Clearing & Gravel Base Preparation"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/E02C06A6-230C-4116-9F1A-E4EDFE93481A.webp",
        imageAlt: "Coastal Deck Construction in Stanwood WA",
        eyebrow: "Stanwood Deck & Structure Builds",
        title: "Weather-Hardened Decking & Outdoor Structures",
        description: "Coastal winds and salt spray near Warm Beach and Port Susan demand high-spec fasteners and weather-resistant materials. We construct outdoor decks and covered structures built to endure marine conditions for decades.",
        bullets: [
          "Stainless steel hardware & marine-grade structural framing",
          "High-durability composite deck boards",
          "Custom staircases, railings & outdoor shelter roofs"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/IMG_1562.webp",
        imageAlt: "Acreage Drainage and Retaining Wall in Stanwood WA",
        eyebrow: "Stanwood Rural Landscaping",
        title: "Rural Property Retaining Walls & Drainage",
        description: "Sprawling parcels in Cedarhome and Florence require proper water management and slope retention. We construct heavy block retaining walls and agricultural-grade drainage swales to protect your pasture and lawn areas.",
        bullets: [
          "Large-scale block & stone retaining wall structures",
          "Subsurface drainage swales & French drain systems",
          "Driveway regrading & gravel spreading"
        ]
      }
    ],
    landmarks: [
      { name: "Downtown Stanwood & Port Susan", desc: "Custom deck building, flagstone walkways, and outdoor patio spaces." },
      { name: "Florence & Cedarhome", desc: "Retaining walls, land excavation, and property drainage systems." },
      { name: "Warm Beach & Kayak Point", desc: "Waterfront-hardened composite decking, timber steps, and patio paving." },
      { name: "Stanwood Heights", desc: "Heavy land grading, brush clearing, sod replacement, and gravel base prep." }
    ],
    neighborhoods: ["Cedarhome", "Florence", "Port Susan", "Warm Beach", "Stanwood Heights"],
    faqs: [
      {
        question: "Do you offer excavation and land clearing in Stanwood?",
        answer: "Yes! We have heavy machinery ready for land clearing, property grading, and site preparation across Stanwood."
      }
    ]
  },
  {
    slug: "snohomish-wa",
    cityName: "Snohomish",
    state: "WA",
    zipCode: "98290",
    latitude: 47.9129,
    longitude: -122.0982,
    headline: "Snohomish Valley Hardscaping & Landscape Construction",
    tagline: "Rustic Paver Patios, Retaining Walls & Drainage Systems",
    leadParagraph: "Snohomish Valley properties feature rich alluvial soils and steep foothill slopes that demand customized drainage and structural hardscaping. Got Yard builds custom paver outdoor fire pits, terraced retaining walls, and French drains across Snohomish, WA.",
    heroBullets: [
      "✔ Rustic Stone Paver Patios & Fireplace Surrounds",
      "✔ Terraced Hillside Retaining Walls for Cathcart & Fobes Hill",
      "✔ Agricultural & Residential French Drain Systems",
      "✔ Full Excavation, Grading & Topsoil Preparation"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/E91E8AA7-31CF-49BC-8AC9-25CBCDBEC608.webp",
        imageAlt: "Paver Fireplace and Patio Space in Snohomish WA",
        eyebrow: "Snohomish Outdoor Living",
        title: "Rustic Stone Paver Patios & Fireplace Surrounds",
        description: "Blend your outdoor space seamlessly with the natural beauty of the Snohomish Valley. We craft custom paver patios, natural stone seating walls, and fire pit centers designed for year-round evening gatherings.",
        bullets: [
          "Textured paver stones & natural basalt accents",
          "Custom fire pits & outdoor fireplace surrounds",
          "Compacted crushed rock base for zero settling"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/3DE8DB3E-C6D8-488B-BE38-BD55FF056CC2.webp",
        imageAlt: "French Drain and Lawn Installation in Snohomish WA",
        eyebrow: "Snohomish Water Management",
        title: "Valley Drainage Systems & Lawn Replacement",
        description: "Heavy valley moisture around Blackman Lake and Clearview can oversaturate lawns and threaten home foundations. We design deep drainage networks that channel water safely away from your property.",
        bullets: [
          "Perforated pipe French drain systems & catch basins",
          "Property slope regrading with excavator equipment",
          "Fresh sod installation over premium topsoil"
        ]
      }
    ],
    landmarks: [
      { name: "Historic Snohomish Valley", desc: "Custom paver patios, outdoor fireplaces, and agricultural property landscaping." },
      { name: "Cathcart & Fobes Hill", desc: "Hillside retaining walls, terraced gardens, and heavy drainage systems." },
      { name: "Dutch Hill & Three Lakes", desc: "Custom composite deck builds, timber staircases, and land clearing." },
      { name: "Blackman Lake & Clearview", desc: "Lawn drainage solutions, French drains, sod installation, and slope grading." }
    ],
    neighborhoods: ["Cathcart", "Fobes Hill", "Dutch Hill", "Three Lakes", "Clearview"],
    faqs: [
      {
        question: "Do you install French drains and drainage systems in Snohomish?",
        answer: "Yes! Snohomish valley properties often need specialized drainage to handle groundwater. We install French drains, catch basins, and proper slope grading."
      }
    ]
  },
  {
    slug: "granite-falls-wa",
    cityName: "Granite Falls",
    state: "WA",
    zipCode: "98252",
    latitude: 48.0840,
    longitude: -121.9687,
    headline: "Granite Falls Landscaping & Heavy Hardscape Construction",
    tagline: "Custom Paver Patios, Retaining Walls & Land Clearing in Granite Falls, WA",
    leadParagraph: "Properties in Granite Falls and along the Mountain Loop Highway feature rugged foothill terrain, heavy mountain rainfall, and rocky soil conditions. Got Yard provides specialized landscape construction, heavy stone retaining walls, timber decks, and land clearing engineered for the Cascade foothills.",
    heroBullets: [
      "✔ Heavy-Duty Stone Retaining Walls for Granite Falls Hillsides",
      "✔ Custom Paver Patios & Mountain View Fire Pit Spaces",
      "✔ Land Clearing, Blackberry Removal & Heavy Excavation",
      "✔ Free On-Site Estimates Across Granite Falls & Verlot"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/paver-patio-construction.webp",
        imageAlt: "Custom Paver Patio and Outdoor Fire Pit in Granite Falls WA",
        eyebrow: "Foothill Outdoor Living",
        title: "Custom Paver Patios & Outdoor Fire Pit Spaces",
        description: "Transform your Granite Falls backyard into an outdoor mountain retreat. We design and install commercial-grade stone paver patios, built-in fire pits, and stone seating walls built over compacted crushed rock bases engineered to withstand heavy foothill rain and winter freezes.",
        bullets: [
          "Interlocking stone pavers & natural basalt flagstone options",
          "Wood-burning & gas fire pit tables for chilly mountain evenings",
          "6-inch compacted gravel base preventing settling & weed growth"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/yard-clearing-overhaul.webp",
        imageAlt: "Land Clearing and Slope Retaining Wall Construction in Granite Falls WA",
        eyebrow: "Foothill Site Preparation",
        title: "Land Clearing, Excavation & Slope Retaining Walls",
        description: "Granite Falls properties often require heavy site work before landscaping can begin. We operate mini-excavators to clear dense blackberry thickets, remove stumps, grade steep slopes, and build heavy-duty block retaining walls that expand usable yard space.",
        bullets: [
          "Heavy block & natural boulder retaining walls for sloped yards",
          "Blackberry bush clearing, brush removal, & site excavation",
          "French drain networks & slope drainage channelling water away"
        ]
      }
    ],
    landmarks: [
      { name: "Granite Falls City Center", desc: "Custom paver patios, fire pits, sod lawn installations, and outdoor living space builds." },
      { name: "Mountain Loop Highway & Verlot", desc: "Heavy land clearing, blackberry removal, tree stump clearing, and boulder retaining walls." },
      { name: "Gun Club Road & Burn Road", desc: "Slope regrading, French drain installations, and composite timber deck construction." },
      { name: "Pilchuck River Corridor", desc: "Heavy-duty lawn drainage systems, catch basins, topsoil grading, and erosion control." }
    ],
    neighborhoods: ["City Center", "Mountain Loop", "Verlot", "Gun Club Road", "Burn Road"],
    faqs: [
      {
        question: "What landscaping services do you provide in Granite Falls, WA?",
        answer: "We provide complete landscape construction in Granite Falls including paver patio installation, retaining walls, land clearing, sod laying, French drains, pressure washing, and deck building."
      },
      {
        question: "How do you handle rocky soil and hillside slopes in Granite Falls?",
        answer: "Our crew operates heavy mini-excavators and skid steers designed for clearing rocky Cascade foothill soil and building engineered structural block and boulder retaining walls."
      }
    ]
  },
  {
    slug: "seattle-wa",
    cityName: "Seattle",
    state: "WA",
    zipCode: "98101",
    latitude: 47.6062,
    longitude: -122.3321,
    headline: "Seattle Landscaping & Hardscape Construction Contractors",
    tagline: "Custom Paver Patios, Retaining Walls, Decks & Drainage in Seattle, WA",
    leadParagraph: "Seattle urban properties demand smart space planning, hillside slope stability, and high-efficiency water management. Got Yard provides full-service landscape construction, custom paver patios, composite decks, structural retaining walls, and French drain networks engineered for Greater Seattle homes.",
    heroBullets: [
      "✔ Custom Paver Patios & Urban Outdoor Living Spaces",
      "✔ Structural Hillside Retaining Walls & Slope Terracing",
      "✔ Trex & Composite Decking Construction",
      "✔ Free On-Site Estimates Across Seattle & King/Snohomish County"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/paver-patio-construction.webp",
        imageAlt: "Custom Paver Patio and Outdoor Fire Pit in Seattle WA",
        eyebrow: "Seattle Outdoor Living",
        title: "Custom Paver Patios & Urban Outdoor Living Spaces",
        description: "Maximize your Seattle backyard footprint with a low-maintenance stone paver patio. We build custom entertaining spaces, built-in fire pits, and stone seating walls engineered over compacted gravel bases that withstand wet Seattle winters without cracking.",
        bullets: [
          "Interlocking concrete & natural basalt flagstone paver designs",
          "Built-in fire tables, seating walls & outdoor kitchens",
          "Compacted crushed rock base engineered for zero settling"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/yard-clearing-overhaul.webp",
        imageAlt: "Structural Retaining Wall and Slope Drainage in Seattle WA",
        eyebrow: "Seattle Slope Management",
        title: "Structural Retaining Walls & Deep French Drain Systems",
        description: "Seattle's steep topography around Queen Anne, Capitol Hill, and Ballard requires engineered slope retention and proper groundwater drainage. We build heavy-duty block retaining walls and French drain networks that protect your foundation from water buildup.",
        bullets: [
          "Engineered block & natural stone retaining walls for sloped yards",
          "Perforated pipe French drain systems & catch basins",
          "Tight-access mini-excavation equipment fitting through standard 36\" gates"
        ]
      }
    ],
    landmarks: [
      { name: "North Seattle & Shoreline", desc: "Custom paver patios, outdoor dining spaces, and lawn sod overhauls." },
      { name: "Ballard & Magnolia", desc: "Modern composite decks, privacy fencing, and slope drainage solutions." },
      { name: "Queen Anne & Capitol Hill", desc: "Structural retaining walls, terraced gardens, and tight-access excavation." },
      { name: "West Seattle & Green Lake", desc: "Low-voltage LED outdoor lighting, drip irrigation, and custom hardscaping." }
    ],
    neighborhoods: ["Ballard", "Queen Anne", "Capitol Hill", "Magnolia", "Green Lake", "West Seattle", "Shoreline"],
    faqs: [
      {
        question: "Do you handle landscape construction projects in Seattle, WA?",
        answer: "Yes! Got Yard serves homeowners throughout Greater Seattle and North King County with complete hardscaping, deck building, retaining walls, drainage systems, and sod installation."
      },
      {
        question: "How do you navigate tight urban access lots in Seattle?",
        answer: "We utilize compact mini-excavators and motorized wheelbarrows designed specifically to fit through standard 36-inch yard gates without damaging surrounding property."
      }
    ]
  },
  {
    slug: "mill-creek-wa",
    cityName: "Mill Creek",
    state: "WA",
    zipCode: "98012",
    latitude: 47.8601,
    longitude: -122.2040,
    headline: "Mill Creek Landscaping & Custom Hardscape Construction",
    tagline: "Custom Paver Patios, Retaining Walls, Decks & Drainage in Mill Creek, WA",
    leadParagraph: "Properties in Mill Creek and surrounding North Creek developments demand high-end outdoor living spaces, manicured paver patios, and pristine drainage management. Got Yard provides luxury landscape construction, custom paver patios, composite decks, structural block retaining walls, and French drain installations tailored for Mill Creek neighborhoods.",
    heroBullets: [
      "✔ Custom Paver Patios & Luxury Outdoor Kitchen Living",
      "✔ HOA-Compliant Retaining Walls & Architectural Hardscaping",
      "✔ Trex & Composite Decking Construction",
      "✔ Free On-Site Estimates Across Mill Creek & Surrounding Communities"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/paver-patio-construction.webp",
        imageAlt: "Custom Paver Patio and Outdoor Living Space in Mill Creek WA",
        eyebrow: "Mill Creek Luxury Outdoor Living",
        title: "Custom Paver Patios & Outdoor Kitchen Spaces",
        description: "Elevate your Mill Creek home with a custom-engineered stone paver patio. We build outdoor living spaces featuring built-in gas fire tables, stone seating walls, and outdoor kitchens designed over heavy compacted gravel bases for zero settling.",
        bullets: [
          "Belgard & Mutual Materials interlocking paver designs",
          "Built-in fire tables, seating walls & outdoor kitchens",
          "6-inch compacted crushed rock base engineered for Northwest rain"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/yard-clearing-overhaul.webp",
        imageAlt: "HOA Approved Retaining Wall and Drainage in Mill Creek WA",
        eyebrow: "Mill Creek Slope & Water Management",
        title: "HOA-Approved Retaining Walls & French Drain Networks",
        description: "North Creek groundwater and sloped properties in Mill Creek require structural soil retention and deep water management. We build engineered block retaining walls and French drain networks that keep your yard dry and foundation protected.",
        bullets: [
          "Architectural block & natural stone retaining walls engineered to HOA specs",
          "Perforated pipe French drain systems & catch basins",
          "Premium topsoil grading & fresh sod lawn installation"
        ]
      }
    ],
    landmarks: [
      { name: "Mill Creek Town Center", desc: "Luxury paver patios, outdoor dining spaces, and custom fire pit surrounds." },
      { name: "North Creek & Sweetwater", desc: "French drain installations, groundwater control, and sod lawn overhauls." },
      { name: "Huckleberry & Highlands", desc: "Structural block retaining walls, slope terracing, and composite decks." },
      { name: "Seattle Hill & Thomas Lake", desc: "Drip irrigation, low-voltage LED landscape lighting, and paver walkways." }
    ],
    neighborhoods: ["Town Center", "North Creek", "Sweetwater", "Huckleberry", "Highlands", "Seattle Hill", "Thomas Lake"],
    faqs: [
      {
        question: "Do you handle HOA approvals for landscaping in Mill Creek, WA?",
        answer: "Yes! Mill Creek homeowners associations require detailed site plans and material specs. Got Yard provides full 3D designs and CAD plans formatted specifically for fast HOA board approval."
      },
      {
        question: "What landscaping services do you offer in Mill Creek?",
        answer: "We offer complete custom landscape construction including paver patios, composite deck building, structural retaining walls, French drains, sod installation, pressure washing, and 3D design."
      }
    ]
  }
];
