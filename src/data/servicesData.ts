export interface SplitSection {
  imageLeft: boolean;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface SubServiceCard {
  title: string;
  desc: string;
  iconSvg: string;
}

export interface ServicePageData {
  slug: string;
  titleName: string;
  headline: string;
  tagline: string;
  description: string;
  leadParagraph: string;
  heroImage?: string;
  heroBullets: string[];
  splitSections: SplitSection[];
  subServices: SubServiceCard[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServicePageData[] = [
  {
    slug: "hardscaping",
    heroImage: "/assets/paver-patio-construction.webp",
    titleName: "Hardscaping & Paver Patios",
    headline: "Custom Hardscaping & Paver Patio Installation",
    tagline: "Commercial-Grade Paver Patios, Walkways, Fire Pits & Stone Masonry",
    description: "Transform your outdoor yard into a functional, high-value living space. Got Yard designs and installs commercial-grade paver patios, walkways, driveways, retaining walls, fire pits, and outdoor kitchens across Marysville, WA and Snohomish County.",
    leadParagraph: "Transform your yard into a multi-functional outdoor oasis. Got Yard builds custom paver patios, stone walkways, interlocking driveways, fire pit tables, and outdoor kitchens engineered over compacted crushed rock bases to withstand Northwest rain without settling or cracking.",
    heroBullets: [
      "✔ Interlocking Concrete & Natural Basalt Pavers",
      "✔ Built-in Fire Pits, Seating Walls & BBQ Surrounds",
      "✔ Heavy 6-Inch Compacted Base Preparation",
      "✔ Free On-Site Consultations & Digital Estimates"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/paver-patio-construction.webp",
        imageAlt: "Custom Stone Paver Patio and Outdoor Seating Space",
        eyebrow: "Custom Outdoor Living",
        title: "Paver Patio Construction & Outdoor Seating",
        description: "Your patio is the anchor of your outdoor living space. We design custom paver patios tailored to your home's architecture, combining multi-piece stone patterns, dark accent borders, and built-in stone seating walls.",
        bullets: [
          "Belgard, Mutual Materials & natural flagstone paver options",
          "Engineered crushed rock base & geotextile fabric layer",
          "Polymeric joint sand to seal out weeds & rain runoff"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/fireplace-patio.webp",
        imageAlt: "Custom Outdoor Fireplace Surround and Patio Hearth Build",
        eyebrow: "Year-Round Warmth",
        title: "Fire Pit Tables, Fireplaces & Outdoor Kitchens",
        description: "Extend your patio usage into cool Northwest evenings with a custom fire pit or outdoor fireplace. We build wood-burning and gas fire pits integrated directly into your paver patio surface.",
        bullets: [
          "Wood-burning & natural gas fire pit table construction",
          "Outdoor BBQ island counters & masonry grill bases",
          "Built-in LED coping lighting & stone bench seating"
        ]
      },
      {
        imageLeft: true,
        image: "/assets/paver-walkway-path.webp",
        imageAlt: "Interlocking Stone Paver Walkway and Entryway Path",
        eyebrow: "Durable Curb Appeal",
        title: "Interlocking Paver Driveways & Walkways",
        description: "Upgrade cracking concrete with heavy-duty interlocking paver walkways and driveways. Pavers distribute weight evenly and flex with freeze-thaw cycles, eliminating cracking for decades.",
        bullets: [
          "Commercial-rated paver driveways designed for vehicular loads",
          "Curving flagstone & paver walkways connecting outdoor zones",
          "Concrete edge restraint borders for permanent structural hold"
        ]
      }
    ],
    subServices: [
      {
        title: "Paver Patio Construction",
        desc: "Custom patio designs using Belgard, Mutual Materials, and natural stone pavers engineered over compacted base rock.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'
      },
      {
        title: "Fire Pits & Outdoor Kitchens",
        desc: "Wood and gas fire pit tables, stone fireplaces, BBQ surrounds, and outdoor kitchen islands built for year-round entertaining.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>'
      },
      {
        title: "Paver Driveways & Walkways",
        desc: "Heavy-duty interlocking paver driveways and garden walkways that won't crack or shift under heavy traffic.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M4 19L10 5M14 5L20 19M6 14H18"></path></svg>'
      },
      {
        title: "Natural Stone Masonry",
        desc: "Flagstone patios, natural basalt steps, stone pillar columns, and decorative rock borders.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>'
      }
    ],
    faqs: [
      {
        question: "How long do paver patios last compared to poured concrete?",
        answer: "Paver patios last 30 to 50+ years with minimal maintenance. Unlike poured concrete slabs that crack when ground moves or freezes, interlocking pavers flex individually and can be easily repaired or expanded if needed."
      },
      {
        question: "How do you prepare the base for a paver patio in Snohomish County wet soil?",
        answer: "Base preparation is the most critical step. We excavate 8 to 10 inches of topsoil, lay heavy geotextile fabric, compact 6+ inches of crushed rock gravel in layers, and screend concrete sand before setting pavers."
      },
      {
        question: "Can I add a gas or wood-burning fire pit to my paver patio?",
        answer: "Yes! We design and build custom gas and wood-burning fire pits integrated seamlessly into paver patios with proper heat shielding and underground gas line conduit."
      },
      {
        question: "How much does a custom paver patio cost in Marysville and Snohomish County?",
        answer: "Cost varies based on patio square footage, paver style selection, site access, and custom additions like seating walls or fire pits. Contact Got Yard for a free, detailed on-site estimate!"
      }
    ]
  },
  {
    slug: "landscaping",
    heroImage: "/assets/sod-installation-lawn.webp",
    titleName: "Landscaping & Sod Installation",
    headline: "Professional Landscaping Services & Sod Installation",
    tagline: "Lush Sod Lawns, Complete Yard Overhauls & Bark Bed Installation",
    description: "Transform unmanageable outdoor yards into plush green lawns and low-maintenance landscapes. Got Yard delivers complete yard overhauls, premium sod laying, property clearing, and plant bed installation across Marysville, WA and Snohomish County.",
    leadParagraph: "Turn your outdoor yard into a lush, thriving sanctuary. Got Yard specializes in complete landscape renovations, premium Northwest sod installation, property clearing, soil preparation, and low-maintenance bark and river rock plant beds engineered for long-term health and beauty.",
    heroBullets: [
      "✔ Fresh Northwest Sod Installation & Organic Topsoil Prep",
      "✔ Overgrown Yard Clearing & Property Brush Removal",
      "✔ Low-Maintenance Bark, Mulch & River Rock Beds",
      "✔ Free On-Site Estimates Across Marysville & Snohomish County"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/sod-installation-lawn.webp",
        imageAlt: "Fresh Northwest Sod Installation and Topsoil Grading in Marysville WA",
        eyebrow: "Instant Green Lawns",
        title: "Premium Sod Installation & Soil Preparation",
        description: "Replace muddy, patchy, or weed-infested yards with dense, vibrant Northwest sod. We excavate old turf, level your property slope, spread rich organic topsoil mix, and lay farm-fresh sod for instant curb appeal.",
        bullets: [
          "Deep topsoil excavation & precision machine grading",
          "Rich organic soil blend for fast root establishment",
          "Farm-fresh perennial ryegrass & fescue sod rolls"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/yard-clearing-overhaul.webp",
        imageAlt: "Complete Yard Overhaul and Property Brush Clearing in Snohomish County",
        eyebrow: "Yard Transformations",
        title: "Complete Yard Overhauls & Land Clearing",
        description: "Have a messy or overgrown yard? Got Yard clears out thick blackberry vines, overgrown shrubs, tree stumps, and debris, leaving a clean, level canvas ready for your new lawn, patio, or garden expansion.",
        bullets: [
          "Heavy excavator brush clearing & root removal",
          "Stump grinding & unwanted vegetation haul-away",
          "Property line clearing for fence or driveway additions"
        ]
      },
      {
        imageLeft: true,
        image: "/assets/decorative-rock-landscape.webp",
        imageAlt: "Low-Maintenance Bark and Decorative Rock Garden Bed Installation",
        eyebrow: "Low-Maintenance Design",
        title: "Bark, Mulch & Decorative Rock Beds",
        description: "Protect your soil and suppress weed growth with professionally installed plant beds. We lay heavy commercial weed-barrier fabric underneath dark fir bark, hemlock mulch, or river rock borders.",
        bullets: [
          "Commercial-grade heavy woven weed fabric barriers",
          "Dark hemlock, cedar, & shredded fir bark options",
          "Rounded river rock & basalt garden border edging"
        ]
      }
    ],
    subServices: [
      {
        title: "Premium Sod Installation",
        desc: "Instant green lawns featuring deep topsoil grading, organic soil amendments, and fresh local sod rolls.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"></path></svg>'
      },
      {
        title: "Complete Yard Overhauls",
        desc: "Clearing thick brush, removing overgrown vegetation, stump removal, and full site prep.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>'
      },
      {
        title: "Bark & Mulch Beds",
        desc: "Weed-barrier fabric installation paired with fresh shredded fir bark, hemlock, or cedar mulch.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
      },
      {
        title: "Decorative Rock Borders",
        desc: "River rock swales, basalt garden edging, and clean gravel pathways for zero-water landscaping zones.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path></svg>'
      }
    ],
    faqs: [
      {
        question: "When is the best time to lay new sod in Snohomish County?",
        answer: "Spring and early autumn are ideal for sod installation due to moderate temperatures and reliable moisture. However, with proper watering, new sod can be successfully installed throughout spring, summer, and fall."
      },
      {
        question: "How long does it take for new sod to establish roots?",
        answer: "New sod typically establishes initial shallow roots within 10 to 14 days. We recommend keeping foot traffic off the lawn during this initial two-week watering window until roots securely anchor into the topsoil."
      },
      {
        question: "Do you clear heavy brush and overgrown vegetation?",
        answer: "Yes! We operate mini-excavators and heavy equipment designed for clearing thick blackberry brambles, overgrown brush, small tree stumps, and debris."
      },
      {
        question: "What is included in a complete yard overhaul?",
        answer: "A complete yard overhaul typically includes clearing old vegetation, regrading soil for proper house drainage, laying fresh topsoil, installing new sod, and building clean bark or rock garden beds."
      }
    ]
  },
  {
    slug: "pressure-washing",
    heroImage: "/assets/pressure-washing-driveway.webp",
    titleName: "Pressure Washing & Exterior Cleaning",
    headline: "Professional Pressure Washing & Surface Restoration",
    tagline: "Driveways, Patios, Walkways, Decks, Siding & Exterior Cleaning in Marysville, WA",
    description: "Restore your home's curb appeal with heavy-duty commercial pressure washing and soft washing. Got Yard safely cleans concrete driveways, paver patios, timber decks, retaining walls, siding, and walkways across Marysville, WA and Snohomish County.",
    leadParagraph: "Over time, Pacific Northwest rain, moss, algae, and road grime build up on concrete driveways, patios, and siding, creating slippery hazards and dulling your property's value. Got Yard uses commercial surface rotary cleaners and soft-wash treatments to restore surfaces back to brand-new condition.",
    heroBullets: [
      "✔ Commercial Rotary Surface Driveway & Concrete Cleaning",
      "✔ Low-Pressure Soft Washing for Siding, Decks & Fences",
      "✔ Moss, Algae & Oil Stain Extraction",
      "✔ Free On-Site Estimates & Same-Day Quotes"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/pressure-washing-driveway.webp",
        imageAlt: "Commercial Pressure Washing Driveway and Concrete Surface Cleaning",
        eyebrow: "Concrete & Driveway Cleaning",
        title: "Commercial Surface Cleaning for Driveways & Sidewalks",
        description: "Standard pressure wands can leave unsightly streak lines on large concrete driveways. We use heavy commercial rotary surface cleaners that deliver uniform, high-pressure water flow across driveways, sidewalks, and entry steps.",
        bullets: [
          "Removes deep-set oil stains, tire marks, moss, & winter grime",
          "Rotary surface cleaner ensures 100% streak-free uniform finish",
          "Eco-friendly cleaning solutions safe for lawns & landscaping"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/patio-paver-washing.webp",
        imageAlt: "Paver Patio and Retaining Wall Pressure Washing Restoration",
        eyebrow: "Patio & Stone Restoration",
        title: "Paver Patio, Brick & Retaining Wall Power Washing",
        description: "Bring dull paver patios and mossy retaining walls back to life. Our specialized pressure washing technique removes embedded weeds and grime between paver joints without eroding the underlying base material.",
        bullets: [
          "Restores natural vibrant color to interlocking stone pavers & brick",
          "Cleans dirt & algae off gravity retaining walls & stone steps",
          "Optional polymeric sand re-sanding & paver sealing treatment"
        ]
      },
      {
        imageLeft: true,
        image: "/assets/exterior-soft-washing.webp",
        imageAlt: "Residential Exterior Soft Washing and Siding Cleaning",
        eyebrow: "Exterior House Washing",
        title: "Gentle Soft Washing for Siding, Decks & Fences",
        description: "High pressure can damage delicate vinyl siding, cedar shingles, and wood decks. We use soft-wash low-pressure techniques paired with specialized cleaning agents to safely lift mildew, green algae, and dirt.",
        bullets: [
          "Low-pressure soft washing safe for vinyl, fiber cement, & stucco siding",
          "Wood deck & timber fence cleaning removing organic graying",
          "Gutter exterior brightening & soffit mildew cleaning"
        ]
      }
    ],
    subServices: [
      {
        title: "Driveway & Concrete Cleaning",
        desc: "Commercial rotary surface washing for driveways, sidewalks, garage aprons, and entry pathways.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"></path></svg>'
      },
      {
        title: "Paver & Patio Restoration",
        desc: "Deep cleaning stone pavers, brick pathways, fire pit surrounds, and masonry retaining walls.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>'
      },
      {
        title: "Soft Washing Siding & Houses",
        desc: "Safe, low-pressure soft wash treatments removing mildew, algae, and grime from home exteriors.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
      },
      {
        title: "Deck & Fence Power Washing",
        desc: "Restoring timber decks, composite decking, perimeter fences, and wooden outdoor structures.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path></svg>'
      }
    ],
    faqs: [
      {
        question: "Will high pressure damage my vinyl siding or deck?",
        answer: "No! We use specialized low-pressure soft washing for house siding, cedar shingles, and wood decks. Soft washing relies on eco-friendly cleaning agents to break down algae and dirt while using high water volume at safe low pressure."
      },
      {
        question: "How often should I pressure wash my driveway in Washington?",
        answer: "Due to Pacific Northwest dampness, moss and black algae grow rapidly on concrete. We recommend pressure washing driveways, sidewalks, and patios once every 12 to 18 months to prevent slippery hazards and maintain curb appeal."
      },
      {
        question: "Can pressure washing remove oil stains from concrete?",
        answer: "Yes, our commercial surface cleaners paired with specialized oil degreasers can significantly reduce and lift deep-set oil and grease stains from concrete driveways and garage aprons."
      },
      {
        question: "Do you offer paver re-sanding after patio washing?",
        answer: "Yes! After pressure washing paver patios, we offer joint re-sanding with polymeric sand to prevent future weed growth and keep pavers locked firmly in place."
      }
    ]
  },
  {
    slug: "decks",
    heroImage: "/assets/composite-deck-building.webp",
    titleName: "Deck Building & Timber Framing",
    headline: "Custom Deck Building & Outdoor Structures",
    tagline: "Trex & Composite Decking, Cedar Wood Decks, Covered Patios & Pergolas in Marysville, WA",
    description: "Expand your indoor living outdoors with custom composite and timber deck construction. Got Yard builds engineered composite decks, natural cedar wood decks, covered patio roofs, pergolas, and custom railings across Marysville, WA and Snohomish County.",
    leadParagraph: "A custom-built deck transforms unused backyard slope into an expansive outdoor entertaining space. Got Yard builds high-durability composite and natural timber decks engineered with heavy pressure-treated footings, hidden fasteners, and custom aluminum or cable railing systems built to endure Pacific Northwest rainfall.",
    heroBullets: [
      "✔ Low-Maintenance Composite (Trex, TimberTech & Fiberon)",
      "✔ Natural Western Red Cedar & Pressure-Treated Framing",
      "✔ Covered Patio Roofs, Pergolas & Timber Gazebos",
      "✔ Free On-Site Consultations & 3D Structure Planning"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/composite-deck-building.webp",
        imageAlt: "Custom Composite Decking Construction with Aluminum Railings",
        eyebrow: "Low-Maintenance Performance",
        title: "Composite Decking & Trex Deck Installation",
        description: "Enjoy your deck without spending weekends staining or replacing rotted boards. We build premium composite decks using Trex, TimberTech, and Fiberon decking that resist stain, fading, mold, and splintering.",
        bullets: [
          "Hidden clip fastener systems for completely smooth surface finish",
          "Black powder-coated aluminum & modern cable wire railing options",
          "Heavy 2x10 joist framing over concrete piers set below frost line"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/covered-deck-pergola.webp",
        imageAlt: "Covered Cedar Deck and Vaulted Timber Pergola Structure",
        eyebrow: "Year-Round Protection",
        title: "Covered Decks, Vaulted Patio Roofs & Pergolas",
        description: "Don't let rainy Northwest days keep you inside. We build timber-framed covered deck roofs, vaulted patio extensions, and open cedar pergolas with integrated LED accent lighting, heaters, and outdoor ceiling fans.",
        bullets: [
          "Architectural cedar post & beam timber framing with black steel brackets",
          "Shingled & metal roof extensions matching your home's roofline",
          "Integrated electrical conduits for heaters, fans, & TV mounts"
        ]
      },
      {
        imageLeft: true,
        image: "/assets/deck-building-construction.webp",
        imageAlt: "Natural Western Red Cedar Deck Construction and Stairs",
        eyebrow: "Classic Craftsmanship",
        title: "Natural Cedar Wood Decks & Multi-Level Structures",
        description: "Nothing matches the natural warmth and grain of genuine Western Red Cedar. We build custom multi-tier cedar decks, wrap-around staircases, built-in bench seating, and hot tub reinforcement framing.",
        bullets: [
          "Select tight-knot & clear Western Red Cedar deck boards",
          "Multi-level deck designs for sloped yards & elevated second stories",
          "Commercial structural load framing for hot tubs & heavy outdoor kitchens"
        ]
      }
    ],
    subServices: [
      {
        title: "Composite & Trex Decking",
        desc: "Stain and rot-resistant composite deck boards featuring hidden fasteners and modern aluminum railings.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"></path></svg>'
      },
      {
        title: "Covered Deck Roofs",
        desc: "Timber-framed covered patio structures protecting your outdoor living room from rain and sun.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>'
      },
      {
        title: "Western Red Cedar Decks",
        desc: "Classic timber craftsmanship featuring Western Red Cedar deck boards, built-in benches, and custom stairs.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
      },
      {
        title: "Pergolas & Gazebos",
        desc: "Custom timber pergolas, privacy screens, and shaded garden gazebos built to elevate your yard.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path></svg>'
      }
    ],
    faqs: [
      {
        question: "How long does a composite deck last compared to wood?",
        answer: "Composite decking (like Trex or TimberTech) lasts 25 to 30+ years with minimal maintenance and typically carries a 25 to 50-year manufacturer warranty against fading and staining. Natural cedar decks typically last 15 to 20 years with regular staining and cleaning."
      },
      {
        question: "Do I need a building permit for a deck in Snohomish County?",
        answer: "In Snohomish County and Marysville, WA, decks attached to a house or elevated more than 30 inches above ground level generally require a building permit. Got Yard handles all structural engineering plans and permit applications for you!"
      },
      {
        question: "Can you build a covered roof over an existing deck?",
        answer: "In many cases, yes! We inspect your existing deck framing and footings to ensure structural integrity. If needed, we reinforce key post locations to support the weight of a new covered timber roof structure."
      },
      {
        question: "What railing options do you install?",
        answer: "We install black powder-coated aluminum railings, modern stainless steel cable wire railings, glass panel railings, and traditional cedar wood picket railings."
      }
    ]
  },
  {
    slug: "irrigation-system-installation",
    heroImage: "/assets/sprinkler-irrigation-lawn.webp",
    titleName: "Irrigation & Sprinkler Installation",
    headline: "Automated Sprinkler Systems & Drip Irrigation",
    tagline: "Custom Sprinkler Systems, Drip Irrigation & WiFi Controllers in Marysville, WA",
    description: "Keep your lawn lush and garden beds thriving while saving water. Got Yard designs and installs multi-zone commercial lawn sprinkler systems, garden drip irrigation, backflow preventers, and smart WiFi controllers across Marysville, WA and Snohomish County.",
    leadParagraph: "A custom-installed automated irrigation system delivers precise water volume directly to your lawn and plant beds, eliminating hand-watering hassle and preventing dry brown lawn patches during dry Pacific Northwest summers. Got Yard installs head-to-head coverage systems featuring water-saving MP rotators and smart weather sensors.",
    heroBullets: [
      "✔ Head-to-Head Pop-Up Sprinkler Lawn Coverage",
      "✔ Micro-Drip Irrigation for Bark & Flower Beds",
      "✔ Smart WiFi Controllers (Rachio & Hunter Hydrawise)",
      "✔ Spring Start-Up, Winterization & Backflow Prevention"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/sprinkler-irrigation-lawn.webp",
        imageAlt: "Automated Lawn Pop Up Sprinkler System Installation",
        eyebrow: "Lawn Hydration",
        title: "Automated Lawn Sprinkler Systems & Zone Design",
        description: "Achieve deep green lawn coverage without wasted overspray on driveways or fences. We design multi-zone automated sprinkler systems tailored to your yard's unique sun exposure and turf contours.",
        bullets: [
          "Hunter & Rain Bird high-efficiency pop-up spray heads & MP rotators",
          "Pressure-regulated valves ensuring balanced water distribution",
          "Vibratory plow pipe installation minimizing lawn disturbance"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/drip-irrigation-garden.webp",
        imageAlt: "Micro Drip Irrigation System in Bark Garden Bed",
        eyebrow: "Targeted Water Efficiency",
        title: "Drip Irrigation for Garden Beds, Trees & Shrubs",
        description: "Overhead sprinklers waste water through evaporation and can cause fungal growth on foliage. Our targeted micro-drip irrigation systems deliver water directly to the root zone beneath bark mulch, saving up to 50% on water usage.",
        bullets: [
          "Sub-surface & micro-drip tubing installed beneath bark & rock mulch",
          "Individual emitter stakes tailored for shrubs, trees, & potted plants",
          "Prevents soil erosion, weed germination, & leaf fungal mildew"
        ]
      },
      {
        imageLeft: true,
        image: "/assets/smart-irrigation-controller.webp",
        imageAlt: "Technician Installing Smart WiFi Irrigation Controller Box",
        eyebrow: "Smart Technology",
        title: "Smart WiFi Controllers & Automated Rain Sensors",
        description: "Control your entire watering schedule from your smartphone. We install smart WiFi irrigation controllers that automatically adjust watering duration based on real-time local weather forecasts and rain sensor data.",
        bullets: [
          "Rachio & Hunter Hydrawise smartphone app watering controls",
          "Automated weather skip features preventing watering during rain",
          "Certified backflow assembly valves protecting clean house water"
        ]
      }
    ],
    subServices: [
      {
        title: "Lawn Sprinkler Systems",
        desc: "Multi-zone automated pop-up lawn sprinkler design and underground piping installation.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"></path></svg>'
      },
      {
        title: "Garden Drip Irrigation",
        desc: "Targeted root-zone drip tubing and micro-emitters for flower beds, shrubs, and trees.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>'
      },
      {
        title: "Smart WiFi Controllers",
        desc: "Smartphone-controlled irrigation timers featuring automated weather adjustments and rain sensors.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
      },
      {
        title: "Spring Start-Up & Winterization",
        desc: "Seasonal system blowouts to prevent freeze damage and spring valve tune-ups.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path></svg>'
      }
    ],
    faqs: [
      {
        question: "How much water can a smart WiFi controller save?",
        answer: "Smart WiFi irrigation controllers (like Rachio or Hunter Hydrawise) save up to 30% to 50% on outdoor water bills by automatically adjusting watering runtimes according to live local weather forecasts and skipping watering cycles when rain is detected."
      },
      {
        question: "Can an irrigation system be installed in an existing lawn?",
        answer: "Yes! We use specialized vibratory plows and clean trenching equipment designed to lay underground pipe with minimal disruption to your existing turf. In most cases, lawn seams heal completely within 1 to 2 weeks."
      },
      {
        question: "Do I need a backflow preventer for my sprinkler system?",
        answer: "Yes! Washington State plumbing codes require a certified Backflow Assembly device installed on all irrigation connections to prevent irrigation water from siphoning back into your home's drinking water supply."
      },
      {
        question: "What is winterization and why is it necessary?",
        answer: "Winterization (or blowout) uses compressed air to clear all water out of underground pipes, valves, and sprinkler heads before freezing winter temperatures hit, preventing cracked pipes and burst valves."
      }
    ]
  },
  {
    slug: "landscape-design",
    heroImage: "/assets/custom-plant-hardscape-design.webp",
    titleName: "3D Landscape Design & Planning",
    headline: "Custom 3D Landscape Design & Master Architecture",
    tagline: "3D Digital Renderings, Plant Selection, Hardscape Layouts & Lighting Design in Marysville, WA",
    description: "Visualize your dream yard before construction begins. Got Yard creates 3D digital landscape designs, master architectural layouts, plant softscaping plans, and low-voltage outdoor lighting designs across Marysville, WA and Snohomish County.",
    leadParagraph: "A great yard transformation starts with a thoughtful master design plan. Got Yard combines 3D CAD modeling with Pacific Northwest botanical expertise to design outdoor living spaces, paver patio layouts, retaining wall elevations, and plant palettes customized for your home's grade and sunlight.",
    heroBullets: [
      "✔ Full 3D Color Landscape Renderings & Video Walkthroughs",
      "✔ Comprehensive Hardscape, Patio & Retaining Wall Layouts",
      "✔ Native Pacific Northwest Plant & Tree Palette Selection",
      "✔ Low-Voltage Architectural LED Landscape Lighting Design"
    ],
    splitSections: [
      {
        imageLeft: true,
        image: "/assets/3d-landscape-design-plan.webp",
        imageAlt: "3D Digital Landscape Design Rendering on Tablet",
        eyebrow: "Digital Visualization",
        title: "3D Digital Renderings & Architectural Master Plans",
        description: "Eliminate guesswork and see your completed yard transformation in vibrant 3D before ground is broken. We build to-scale 3D models showing exact paver patterns, outdoor kitchens, fire pits, plant heights, and property boundaries.",
        bullets: [
          "To-scale 3D digital landscape renderings & daytime/nighttime lighting previews",
          "Itemized material cost estimations & phase-by-phase project budgeting",
          "HOA approval architectural drawings & site grading blueprints"
        ]
      },
      {
        imageLeft: false,
        image: "/assets/custom-plant-hardscape-design.webp",
        imageAlt: "Custom Softscaping Plant Palette and Hardscape Layout Design",
        eyebrow: "Botanical & Hardscape Harmony",
        title: "Softscaping, Plant Selection & Garden Bed Layouts",
        description: "Pairing structural hardscaping with vibrant living greenery creates a balanced landscape. We select low-maintenance Pacific Northwest native plants, Japanese maples, hydrangeas, evergreen shrubs, and drought-tolerant perennials tailored to your soil.",
        bullets: [
          "Custom plant palettes engineered for Northwest rain & sun exposure",
          "Four-season bloom planning providing color year-round",
          "Drought-tolerant & deer-resistant plant layout designs"
        ]
      },
      {
        imageLeft: true,
        image: "/assets/softscape-lighting-design.webp",
        imageAlt: "Architectural Low Voltage LED Outdoor Landscape Lighting Design at Dusk",
        eyebrow: "Nighttime Ambience",
        title: "Low-Voltage LED Landscape & Architectural Lighting",
        description: "Bring your yard to life after dark with custom low-voltage LED landscape lighting. We strategically place brass uplights on specimen trees, path lights along stone walkways, and recessed coping lights under paver wall steps.",
        bullets: [
          "Energy-efficient low-voltage LED solid brass light fixtures",
          "Path lighting, tree uplighting, & retaining wall coping lights",
          "Smart WiFi transformers with automated dusk-to-dawn timers"
        ]
      }
    ],
    subServices: [
      {
        title: "3D Landscape Renderings",
        desc: "Interactive 3D digital design master plans showing paver materials, plants, and structures.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"></path></svg>'
      },
      {
        title: "Plant & Softscape Design",
        desc: "Custom Pacific Northwest plant palettes, flower bed layouts, and ornamental tree selection.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>'
      },
      {
        title: "Outdoor LED Lighting",
        desc: "Low-voltage brass LED path lights, tree uplights, and smart WiFi transformer controls.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
      },
      {
        title: "HOA & Permit Blueprints",
        desc: "Detailed architectural CAD drawings and site plans formatted for HOA board approvals.",
        iconSvg: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e5a93c" stroke-width="2.2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path></svg>'
      }
    ],
    faqs: [
      {
        question: "What is included in a 3D landscape design package?",
        answer: "Our 3D landscape design package includes an initial on-site consultation, digital site measurements, a full 3D color digital rendering, a plant and material specification list, and an itemized construction proposal."
      },
      {
        question: "Can 3D designs be submitted to my HOA for approval?",
        answer: "Yes! Homeowners associations love 3D landscape renderings because they show exact property line setbacks, hardscape materials, and plant selections clearly. We provide all necessary dimensions for fast HOA approval."
      },
      {
        question: "Do you design for low-maintenance landscaping?",
        answer: "Absolutely! We specialize in low-maintenance landscape designs featuring drip irrigation, weed-barrier bark beds, drought-tolerant native plants, and durable stone paver patios that require minimal upkeep."
      },
      {
        question: "How does the design fee apply to construction?",
        answer: "When you choose Got Yard to build your landscape project, your design consultation deposit is credited directly toward your final project construction agreement!"
      }
    ]
  }
];
