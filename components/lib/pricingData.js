export const pricingTabs = [
  { id: 'bathroom', label: 'Bathroom Tiling', icon: '🚿' },
  { id: 'kitchen', label: 'Kitchen Splashback', icon: '🍽️' },
  { id: 'outdoor', label: 'Outdoor & Pool', icon: '🏊‍♂️' },
  { id: 'waterproofing', label: 'Waterproofing', icon: '🛡️' },
  { id: 'flooring', label: 'Flooring', icon: '🪵' },
];

export const pricingData = {
  bathroom: {
    title: "Bathroom Tiling & Waterproofing",
    description: "Complete bathroom tiling solutions with Australian standard waterproofing",
    packages: [
      {
        name: "Standard",
        standardPrice: "$5,000",
        discountPrice: "$4,800",
        duration: "10-14 days",
        features: [
          { included: true, text: "Waterproofing certificate" },
          { included: true, text: "Porcelain tile installation" },
          { included: true, text: "Demolition & disposal" },
          { included: true, text: "Grouting & sealing" },
          { included: true, text: "Basic fixtures" },
          { included: false, text: "Premium tiles" },
          { included: false, text: "Heated flooring" },
          { included: false, text: "Design consultation" },
        ],
        popular: false,
        highlight: false,
      },
      {
        name: "Premium",
        standardPrice: "$7,500",
        discountPrice: "$7,200",
        duration: "14-21 days",
        features: [
          { included: true, text: "10-year waterproofing warranty" },
          { included: true, text: "Large format porcelain/stone" },
          { included: true, text: "Laser level precision" },
          { included: true, text: "Premium grout & sealants" },
          { included: true, text: "Design consultation" },
          { included: true, text: "Heated flooring option" },
          { included: true, text: "Smart bathroom features" },
          { included: true, text: "Extended 5-year workmanship" },
        ],
        popular: true,
        highlight: true,
      },
      {
        name: "Luxury",
        standardPrice: "$12,500",
        discountPrice: "$12,000",
        duration: "3-4 weeks",
        features: [
          { included: true, text: "15-year waterproofing warranty" },
          { included: true, text: "Natural stone/marble tiles" },
          { included: true, text: "Custom mosaic features" },
          { included: true, text: "Smart home integration" },
          { included: true, text: "Premium fixtures & fittings" },
          { included: true, text: "Heated flooring included" },
          { included: true, text: "Architectural design" },
          { included: true, text: "10-year comprehensive warranty" },
        ],
        popular: false,
        highlight: false,
      }
    ],
    addOns: [
      { name: "Tile Removal", price: "$45/sqm", description: "Professional removal and disposal" },
      { name: "Additional Waterproofing", price: "$35/sqm", description: "Extended membrane coverage" },
      { name: "Underfloor Heating", price: "$120/sqm", description: "Electric heating system" },
      { name: "Premium Sealants", price: "$15/sqm", description: "Long-lasting protection" },
    ]
  },
  kitchen: {
    title: "Kitchen Splashback Tiling",
    description: "Professional kitchen splashback installation with premium finishes",
    packages: [
      {
        name: "Basic",
        standardPrice: "$950",
        discountPrice: "$900",
        duration: "1-2 days",
        features: [
          { included: true, text: "Standard ceramic tiles" },
          { included: true, text: "Professional installation" },
          { included: true, text: "Grouting & cleaning" },
          { included: true, text: "Basic edge finishing" },
          { included: false, text: "Glass/mosaic tiles" },
          { included: false, text: "Premium sealants" },
          { included: false, text: "Design service" },
        ],
        popular: false,
        highlight: false,
      },
      {
        name: "Premium",
        standardPrice: "$1,900",
        discountPrice: "$1,800",
        duration: "2-3 days",
        features: [
          { included: true, text: "Glass or mosaic tiles" },
          { included: true, text: "Precision laser cutting" },
          { included: true, text: "Premium waterproof grout" },
          { included: true, text: "Professional finishing" },
          { included: true, text: "Design consultation" },
          { included: true, text: "3-year warranty" },
          { included: true, text: "Quick installation" },
        ],
        popular: true,
        highlight: true,
      },
      {
        name: "Custom",
        standardPrice: "From $2,500",
        discountPrice: "From $2,500",
        duration: "3-5 days",
        features: [
          { included: true, text: "Custom tile design" },
          { included: true, text: "Premium materials" },
          { included: true, text: "Integrated lighting" },
          { included: true, text: "5-year warranty" },
          { included: true, text: "Full design service" },
          { included: true, text: "Extended support" },
        ],
        popular: false,
        highlight: false,
      }
    ],
    addOns: [
      { name: "Tile Pattern Design", price: "$300", description: "Custom pattern creation" },
      { name: "Integrated LED Lighting", price: "$450", description: "Under-cabinet lighting" },
      { name: "Premium Sealants", price: "$150", description: "Stain-resistant coating" },
      { name: "Express Service", price: "+25%", description: "Priority scheduling" },
    ]
  },
  outdoor: {
    title: "Outdoor & Pool Tiling",
    description: "Durable outdoor tiling solutions for pools, patios, and entertainment areas",
    packages: [
      {
        name: "Patio Basic",
        standardPrice: "$3,800",
        discountPrice: "$3,600",
        duration: "5-7 days",
        features: [
          { included: true, text: "Slip-resistant porcelain" },
          { included: true, text: "Weatherproof installation" },
          { included: true, text: "Basic drainage" },
          { included: true, text: "3-year warranty" },
          { included: false, text: "Custom patterns" },
          { included: false, text: "Premium sealants" },
          { included: false, text: "Lighting integration" },
        ],
        popular: false,
        highlight: false,
      },
      {
        name: "Pool Premium",
        standardPrice: "$6,300",
        discountPrice: "$6,000",
        duration: "10-14 days",
        features: [
          { included: true, text: "Anti-slip pool tiles" },
          { included: true, text: "Chemical-resistant grout" },
          { included: true, text: "Professional waterproofing" },
          { included: true, text: "Custom design options" },
          { included: true, text: "5-year warranty" },
          { included: true, text: "Safety compliance" },
          { included: true, text: "Quick installation" },
        ],
        popular: true,
        highlight: true,
      },
      {
        name: "Luxury Outdoor",
        standardPrice: "From $8,500",
        discountPrice: "From $8,500",
        duration: "2-3 weeks",
        features: [
          { included: true, text: "Natural stone paving" },
          { included: true, text: "Custom mosaic features" },
          { included: true, text: "Integrated drainage" },
          { included: true, text: "Landscape lighting" },
          { included: true, text: "10-year warranty" },
          { included: true, text: "Full design service" },
        ],
        popular: false,
        highlight: false,
      }
    ],
    addOns: [
      { name: "Pool Coping", price: "$120/linear m", description: "Premium edge finishing" },
      { name: "Custom Mosaic", price: "$300/sqm", description: "Artistic tile designs" },
      { name: "Outdoor Lighting", price: "$750", description: "LED pathway lights" },
      { name: "Premium Sealants", price: "$15/sqm", description: "UV-resistant coating" },
    ]
  },
  waterproofing: {
    title: "Commercial & Residential Waterproofing",
    description: "Certified waterproofing solutions with compliance guarantees",
    packages: [
      {
        name: "Residential",
        standardPrice: "$2,500",
        discountPrice: "$2,400",
        duration: "3-5 days",
        features: [
          { included: true, text: "Australian standards compliant" },
          { included: true, text: "5-year warranty" },
          { included: true, text: "Certificate provided" },
          { included: true, text: "Professional application" },
          { included: false, text: "Extended warranty" },
          { included: false, text: "Premium membranes" },
          { included: false, text: "Commercial grade" },
        ],
        popular: false,
        highlight: false,
      },
      {
        name: "Commercial",
        standardPrice: "$5,000",
        discountPrice: "$4,800",
        duration: "7-10 days",
        features: [
          { included: true, text: "Commercial grade membranes" },
          { included: true, text: "10-year warranty" },
          { included: true, text: "Full compliance certificate" },
          { included: true, text: "Structural assessment" },
          { included: true, text: "Priority service" },
          { included: true, text: "BAL rated options" },
          { included: true, text: "Project management" },
        ],
        popular: true,
        highlight: true,
      },
      {
        name: "Premium",
        standardPrice: "Custom Quote",
        discountPrice: "Custom Quote",
        duration: "Varies",
        features: [
          { included: true, text: "15+ year warranty" },
          { included: true, text: "Premium European membranes" },
          { included: true, text: "Full architectural design" },
          { included: true, text: "24/7 support" },
          { included: true, text: "Compliance management" },
          { included: true, text: "Multi-point inspection" },
        ],
        popular: false,
        highlight: false,
      }
    ],
    addOns: [
      { name: "Extended Warranty", price: "+20%", description: "Up to 25 years coverage" },
      { name: "Structural Assessment", price: "$450", description: "Full building inspection" },
      { name: "Express Certificate", price: "$200", description: "Same-day certification" },
      { name: "Premium Membranes", price: "+35%", description: "European grade materials" },
    ]
  },
  flooring: {
    title: "Flooring Installation",
    description: "Professional flooring solutions for any space",
    packages: [
      {
        name: "Laminate",
        standardPrice: "$48/sqm",
        discountPrice: "$45/sqm",
        duration: "2-3 days",
        features: [
          { included: true, text: "Quality laminate flooring" },
          { included: true, text: "Underlay included" },
          { included: true, text: "Professional installation" },
          { included: true, text: "3-year warranty" },
          { included: false, text: "Premium underlay" },
          { included: false, text: "Soundproofing" },
          { included: false, text: "Extended warranty" },
        ],
        popular: false,
        highlight: false,
      },
      {
        name: "Hybrid",
        standardPrice: "$68/sqm",
        discountPrice: "$65/sqm",
        duration: "3-4 days",
        features: [
          { included: true, text: "Water-resistant hybrid" },
          { included: true, text: "Premium underlay" },
          { included: true, text: "Soundproofing option" },
          { included: true, text: "5-year warranty" },
          { included: true, text: "Quick installation" },
          { included: true, text: "Pet-friendly options" },
          { included: true, text: "Design consultation" },
        ],
        popular: true,
        highlight: true,
      },
      {
        name: "Timber",
        standardPrice: "$99/sqm",
        discountPrice: "$95/sqm",
        duration: "5-7 days",
        features: [
          { included: true, text: "Engineered timber" },
          { included: true, text: "Professional sanding" },
          { included: true, text: "Premium finishing" },
          { included: true, text: "10-year warranty" },
          { included: true, text: "Custom staining" },
          { included: true, text: "Expert craftsmanship" },
        ],
        popular: false,
        highlight: false,
      }
    ],
    addOns: [
      { name: "Soundproof Underlay", price: "$12/sqm", description: "Noise reduction layer" },
      { name: "Custom Staining", price: "$25/sqm", description: "Color matching service" },
      { name: "Skirting Installation", price: "$35/linear m", description: "Premium skirting boards" },
      { name: "Express Service", price: "+20%", description: "Fast-track completion" },
    ]
  }
};

export const features = [
  {
    icon: "shield",
    title: "Certified Workmanship",
    description: "All work comes with comprehensive warranties and Australian standard compliance",
    gradient: "gold"
  },
  {
    icon: "tools",
    title: "Premium Materials",
    description: "We use only high-quality, durable materials from trusted suppliers",
    gradient: "dark"
  },
  {
    icon: "ruler",
    title: "Free Quotes",
    description: "Get a detailed, no-obligation quote with transparent pricing breakdown",
    gradient: "gold"
  }
];

export const contactInfo = {
  phone: "(03) 0000 0000",
  ctaTitle: "Need a Custom Quote?",
  ctaDescription: "Every project is unique. Contact us for a personalized quote based on your specific requirements.",
  ctaNote: "All quotes include free site inspection and detailed project plan"
};

export const disclaimers = [
  "*Prices are indicative and may vary based on project complexity, materials selected, and site conditions. Final quotes provided after site inspection.",
  "**All prices include GST. Waterproofing certificates provided for relevant services."
];