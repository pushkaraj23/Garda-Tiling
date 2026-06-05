export const PRICING_TABS = [
  { id: "bathroom",      label: "Bathroom Tiling",    iconKey: "bath" },
  { id: "kitchen",       label: "Kitchen Splashback",  iconKey: "utensils" },
  { id: "outdoor",       label: "Outdoor & Pool",      iconKey: "waves" },
  { id: "waterproofing", label: "Waterproofing",       iconKey: "shield" },
  { id: "flooring",      label: "Flooring",            iconKey: "layers" },
];

export const PRICING_DATA = {
  bathroom: {
    title: "Bathroom Tiling & Waterproofing",
    desc: "Complete bathroom tiling solutions with Australian standard waterproofing",
    packages: [
      {
        name: "Standard", price: "$5,000", duration: "10–14 days", popular: false,
        features: [
          { ok: true,  text: "Waterproofing certificate" },
          { ok: true,  text: "Porcelain tile installation" },
          { ok: true,  text: "Demolition & disposal" },
          { ok: true,  text: "Grouting & sealing" },
          { ok: true,  text: "Basic fixtures" },
          { ok: false, text: "Premium tiles" },
          { ok: false, text: "Heated flooring" },
          { ok: false, text: "Design consultation" },
        ],
      },
      {
        name: "Premium", price: "$7,500", duration: "14–21 days", popular: true,
        features: [
          { ok: true, text: "10-year waterproofing warranty" },
          { ok: true, text: "Large format porcelain/stone" },
          { ok: true, text: "Laser level precision" },
          { ok: true, text: "Premium grout & sealants" },
          { ok: true, text: "Design consultation" },
          { ok: true, text: "Heated flooring option" },
          { ok: true, text: "Smart bathroom features" },
          { ok: true, text: "Extended 5-year workmanship" },
        ],
      },
      {
        name: "Luxury", price: "$12,500", duration: "3–4 weeks", popular: false,
        features: [
          { ok: true, text: "15-year waterproofing warranty" },
          { ok: true, text: "Natural stone/marble tiles" },
          { ok: true, text: "Custom mosaic features" },
          { ok: true, text: "Smart home integration" },
          { ok: true, text: "Premium fixtures & fittings" },
          { ok: true, text: "Heated flooring included" },
          { ok: true, text: "Architectural design" },
          { ok: true, text: "10-year comprehensive warranty" },
        ],
      },
    ],
    addOns: [
      { name: "Tile Removal",             price: "$45/sqm" },
      { name: "Additional Waterproofing", price: "$35/sqm" },
      { name: "Underfloor Heating",       price: "$120/sqm" },
      { name: "Premium Sealants",         price: "$15/sqm" },
    ],
  },
  kitchen: {
    title: "Kitchen Splashback Tiling",
    desc: "Professional kitchen splashback installation with premium finishes",
    packages: [
      {
        name: "Basic", price: "$950", duration: "1–2 days", popular: false,
        features: [
          { ok: true,  text: "Standard ceramic tiles" },
          { ok: true,  text: "Professional installation" },
          { ok: true,  text: "Grouting & cleaning" },
          { ok: true,  text: "Basic edge finishing" },
          { ok: false, text: "Glass/mosaic tiles" },
          { ok: false, text: "Premium sealants" },
          { ok: false, text: "Design service" },
        ],
      },
      {
        name: "Premium", price: "$1,900", duration: "2–3 days", popular: true,
        features: [
          { ok: true, text: "Glass or mosaic tiles" },
          { ok: true, text: "Precision laser cutting" },
          { ok: true, text: "Premium waterproof grout" },
          { ok: true, text: "Professional finishing" },
          { ok: true, text: "Design consultation" },
          { ok: true, text: "3-year warranty" },
          { ok: true, text: "Quick installation" },
        ],
      },
      {
        name: "Custom", price: "From $2,500", duration: "3–5 days", popular: false,
        features: [
          { ok: true, text: "Custom tile design" },
          { ok: true, text: "Premium materials" },
          { ok: true, text: "Integrated lighting" },
          { ok: true, text: "5-year warranty" },
          { ok: true, text: "Full design service" },
          { ok: true, text: "Extended support" },
        ],
      },
    ],
    addOns: [
      { name: "Tile Pattern Design",     price: "$300" },
      { name: "Integrated LED Lighting", price: "$450" },
      { name: "Premium Sealants",        price: "$150" },
      { name: "Express Service",         price: "+25%" },
    ],
  },
  outdoor: {
    title: "Outdoor & Pool Tiling",
    desc: "Durable outdoor tiling solutions for pools, patios, and entertainment areas",
    packages: [
      {
        name: "Patio Basic", price: "$3,800", duration: "5–7 days", popular: false,
        features: [
          { ok: true,  text: "Slip-resistant porcelain" },
          { ok: true,  text: "Weatherproof installation" },
          { ok: true,  text: "Basic drainage" },
          { ok: true,  text: "3-year warranty" },
          { ok: false, text: "Custom patterns" },
          { ok: false, text: "Premium sealants" },
          { ok: false, text: "Lighting integration" },
        ],
      },
      {
        name: "Pool Premium", price: "$6,300", duration: "10–14 days", popular: true,
        features: [
          { ok: true, text: "Anti-slip pool tiles" },
          { ok: true, text: "Chemical-resistant grout" },
          { ok: true, text: "Professional waterproofing" },
          { ok: true, text: "Custom design options" },
          { ok: true, text: "5-year warranty" },
          { ok: true, text: "Safety compliance" },
          { ok: true, text: "Quick installation" },
        ],
      },
      {
        name: "Luxury Outdoor", price: "From $8,500", duration: "2–3 weeks", popular: false,
        features: [
          { ok: true, text: "Natural stone paving" },
          { ok: true, text: "Custom mosaic features" },
          { ok: true, text: "Integrated drainage" },
          { ok: true, text: "Landscape lighting" },
          { ok: true, text: "10-year warranty" },
          { ok: true, text: "Full design service" },
        ],
      },
    ],
    addOns: [
      { name: "Pool Coping",    price: "$120/linear m" },
      { name: "Custom Mosaic",  price: "$300/sqm" },
      { name: "Outdoor Lighting", price: "$750" },
      { name: "Premium Sealants", price: "$15/sqm" },
    ],
  },
  waterproofing: {
    title: "Commercial & Residential Waterproofing",
    desc: "Certified waterproofing solutions with compliance guarantees",
    packages: [
      {
        name: "Residential", price: "$2,500", duration: "3–5 days", popular: false,
        features: [
          { ok: true,  text: "Australian standards compliant" },
          { ok: true,  text: "5-year warranty" },
          { ok: true,  text: "Certificate provided" },
          { ok: true,  text: "Professional application" },
          { ok: false, text: "Extended warranty" },
          { ok: false, text: "Premium membranes" },
          { ok: false, text: "Commercial grade" },
        ],
      },
      {
        name: "Commercial", price: "$5,000", duration: "7–10 days", popular: true,
        features: [
          { ok: true, text: "Commercial grade membranes" },
          { ok: true, text: "10-year warranty" },
          { ok: true, text: "Full compliance certificate" },
          { ok: true, text: "Structural assessment" },
          { ok: true, text: "Priority service" },
          { ok: true, text: "BAL rated options" },
          { ok: true, text: "Project management" },
        ],
      },
      {
        name: "Premium", price: "Custom Quote", duration: "Varies", popular: false,
        features: [
          { ok: true, text: "15+ year warranty" },
          { ok: true, text: "Premium European membranes" },
          { ok: true, text: "Full architectural design" },
          { ok: true, text: "24/7 support" },
          { ok: true, text: "Compliance management" },
          { ok: true, text: "Multi-point inspection" },
        ],
      },
    ],
    addOns: [
      { name: "Extended Warranty",    price: "+20%" },
      { name: "Structural Assessment", price: "$450" },
      { name: "Express Certificate",  price: "$200" },
      { name: "Premium Membranes",    price: "+35%" },
    ],
  },
  flooring: {
    title: "Flooring Installation",
    desc: "Professional flooring solutions for any space",
    packages: [
      {
        name: "Laminate", price: "$48/sqm", duration: "2–3 days", popular: false,
        features: [
          { ok: true,  text: "Quality laminate flooring" },
          { ok: true,  text: "Underlay included" },
          { ok: true,  text: "Professional installation" },
          { ok: true,  text: "3-year warranty" },
          { ok: false, text: "Premium underlay" },
          { ok: false, text: "Soundproofing" },
          { ok: false, text: "Extended warranty" },
        ],
      },
      {
        name: "Hybrid", price: "$68/sqm", duration: "3–4 days", popular: true,
        features: [
          { ok: true, text: "Water-resistant hybrid" },
          { ok: true, text: "Premium underlay" },
          { ok: true, text: "Soundproofing option" },
          { ok: true, text: "5-year warranty" },
          { ok: true, text: "Quick installation" },
          { ok: true, text: "Pet-friendly options" },
          { ok: true, text: "Design consultation" },
        ],
      },
      {
        name: "Timber", price: "$99/sqm", duration: "5–7 days", popular: false,
        features: [
          { ok: true, text: "Engineered timber" },
          { ok: true, text: "Professional sanding" },
          { ok: true, text: "Premium finishing" },
          { ok: true, text: "10-year warranty" },
          { ok: true, text: "Custom staining" },
          { ok: true, text: "Expert craftsmanship" },
        ],
      },
    ],
    addOns: [
      { name: "Soundproof Underlay",  price: "$12/sqm" },
      { name: "Custom Staining",      price: "$25/sqm" },
      { name: "Skirting Installation", price: "$35/linear m" },
      { name: "Express Service",      price: "+20%" },
    ],
  },
};

export const PRICING_TRUST_DEFAULTS = {
  headline: "Why Trust Our",
  headlineAccent: "Pricing",
  description: "Our transparent approach ensures you get the best value for your investment.",
  points: [
  { iconKey: "shield", title: "Certified Workmanship", text: "All work comes with comprehensive warranties and Australian standard compliance" },
  { iconKey: "wrench",      title: "Premium Materials",     text: "We use only high-quality, durable materials from trusted suppliers" },
  { iconKey: "ruler",       title: "Free Quotes",           text: "Get a detailed, no-obligation quote with transparent pricing breakdown" },
],
};

export const PRICING_HERO_DEFAULTS = {
  pill: "Transparent Pricing",
  headline: "Honest Pricing.",
  headlineAccent: "No Surprises.",
  description:
    "Indicative pricing across all our services. Every project gets a free, detailed quote after site inspection.",
};

export const PRICING_CTA_DEFAULTS = {
  headline: "Need a Custom",
  headlineAccent: "Quote?",
  description:
    "Every project is unique. Contact us for a personalised quote based on your specific requirements.",
  ctas: [
    { label: "Request Custom Quote", href: "/contact" },
    { label: "View Our Gallery", href: "/projects" },
  ],
  contacts: [
    { label: "Call Us", value: "(03) 0000 0000", type: "phone" },
    { label: "Email Us", value: "hello@garda-tiling.com", type: "email" },
    { label: "Service Area", value: "All Brisbane", type: "area" },
  ],
};

export const PRICING_DISCLAIMER_DEFAULTS = {
  title: "Pricing Information",
  paragraphs: [
    "* Prices are indicative and may vary based on project complexity, materials selected, and site conditions. Final quotes provided after site inspection.",
    "** All prices include GST. Waterproofing certificates provided for relevant services.",
  ],
  badges: ["Free site inspections", "No obligation quotes", "Transparent pricing"],
};

export const PRICING_ADDONS_DEFAULTS = {
  headline: "Popular Add-ons &",
  headlineAccent: "Extras",
  description: "Enhance your project with these optional extras",
};
