import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pricingPath = path.join(__dirname, "../components/Pricing/Pricing.js");
const src = fs.readFileSync(pricingPath, "utf8");

const tabsMatch = src.match(/const TABS = (\[[\s\S]*?\]);/);
const dataMatch = src.match(/const DATA = (\{[\s\S]*?\n\});/);
const trustMatch = src.match(/const trustPoints = (\[[\s\S]*?\]);/);

const iconMap = {
  Bath: "bath",
  UtensilsCrossed: "utensils",
  Waves: "waves",
  ShieldCheck: "shield",
  Layers: "layers",
  Wrench: "wrench",
  Ruler: "ruler",
};

function replaceIcons(code, map) {
  return code.replace(/icon: (\w+)/g, (_, name) => `iconKey: "${map[name] || "star"}"`);
}

const tabs = replaceIcons(tabsMatch[1], iconMap).replace(/label:/g, "label:");
const data = dataMatch[1];
const trustPoints = replaceIcons(trustMatch[1], iconMap).replace(/desc:/g, "text:");

const out = `export const PRICING_TABS = ${tabs};

export const PRICING_DATA = ${data};

export const PRICING_TRUST_DEFAULTS = {
  headline: "Why Trust Our",
  headlineAccent: "Pricing",
  description: "Our transparent approach ensures you get the best value for your investment.",
  points: ${trustPoints},
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
`;

const outPath = path.join(__dirname, "../lib/cms/defaults/pricingDefaults.js");
fs.writeFileSync(outPath, out);
console.log("Wrote", outPath);
