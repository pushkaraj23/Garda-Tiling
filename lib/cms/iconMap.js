import {
  Award,
  Bath,
  Clock,
  Handshake,
  HeadphonesIcon,
  Layers,
  Map,
  Ruler,
  ShieldCheck,
  Star,
  UtensilsCrossed,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

const MAP = {
  award: Award,
  bath: Bath,
  clock: Clock,
  handshake: Handshake,
  headphones: HeadphonesIcon,
  layers: Layers,
  map: Map,
  ruler: Ruler,
  shield: ShieldCheck,
  shieldCheck: ShieldCheck,
  star: Star,
  utensils: UtensilsCrossed,
  waves: Waves,
  wrench: Wrench,
  zap: Zap,
};

export function resolveIcon(key, fallback = Star) {
  if (!key) return fallback;
  return MAP[String(key).trim()] || MAP[String(key).toLowerCase()] || fallback;
}
