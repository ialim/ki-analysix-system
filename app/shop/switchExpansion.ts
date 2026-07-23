import type { Product } from "./products";

const common = {
  category: "Smart switches",
  categoryKey: "switches",
  ecosystem: "Tuya/Smart Life pairing confirmed before order",
  neutral: "Neutral-live version",
  salesPath: "Buy with installation",
} as const;

type LightFamily = {
  series: string;
  gangs: number[];
  model: (gang: number) => string;
  name?: (gang: number) => string;
  protocol: string;
  gateway: string;
  electrical: string;
  size: string;
  cataloguePage: number;
  launchTier?: Product["launchTier"];
  note: string;
  image?: (gang: number) => string;
};

function lightFamily(config: LightFamily): Product[] {
  return config.gangs.map((gang) => ({
    ...common,
    sku: `KI-TAOS-SW-${config.model(gang).replace(/[^a-z0-9]/gi, "").toUpperCase()}`,
    model: config.model(gang),
    name: config.name?.(gang) ?? `${config.series} ${gang}-gang smart light switch`,
    series: config.series,
    image: config.image?.(gang),
    protocol: config.protocol,
    gateway: config.gateway,
    electrical: config.electrical,
    size: config.size,
    launchTier: config.launchTier ?? "Extended",
    cataloguePage: config.cataloguePage,
    note: config.note,
  }));
}

const s1Sockets: Product[] = [
  {
    ...common,
    sku: "KI-TAOS-SW-S159",
    model: "S159",
    name: "S1 Zigbee switched socket",
    series: "S1",
    image: "s159.webp",
    protocol: "Zigbee 3.0",
    gateway: "Required",
    electrical: "AC 250V; 16A relay",
    size: "86 x 86 x 37.2mm with base",
    launchTier: "Conditional",
    cataloguePage: 5,
    note: "Supplier catalogue marks this model as under development; availability must be reconfirmed.",
  },
  {
    ...common,
    sku: "KI-TAOS-SW-S160",
    model: "S160",
    name: "S1 Zigbee 5-pin switched socket",
    series: "S1",
    image: "s160.webp",
    protocol: "Zigbee 3.0",
    gateway: "Required",
    electrical: "AC 250V; 16A relay",
    size: "86 x 86 x 37.2mm with base",
    launchTier: "Conditional",
    cataloguePage: 5,
    note: "Supplier catalogue marks this model as under development; availability must be reconfirmed.",
  },
];

const m1: Product[] = [{
  ...common,
  sku: "KI-TAOS-SW-M1004",
  model: "M1-004",
  name: "M1 4-gang display smart switch",
  series: "M1",
  image: "m1-004.webp",
  protocol: "Zigbee 3.0",
  gateway: "Required",
  electrical: "AC 250V; 16A relay; up to 2,500W/gang",
  size: "86 x 86 x 35mm with base",
  launchTier: "Extended",
  cataloguePage: 8,
  note: "Weather and time display; configurable for lighting, scene, curtain or dimming control.",
}];

const m2 = lightFamily({
  series: "M2",
  gangs: [1, 2, 3, 4],
  model: (gang) => `M2-00${gang}`,
  protocol: "Zigbee 3.0",
  gateway: "Required",
  electrical: "AC 250V; 16A relay; up to 2,500W/gang",
  size: "86 x 86 x 34mm with base",
  cataloguePage: 9,
  note: "Circular-button range; final panel material and colour confirmed with each request.",
});

const a1 = lightFamily({
  series: "A1",
  gangs: [1, 2, 3, 4],
  model: (gang) => `A1-00${gang}`,
  protocol: "Zigbee 3.0",
  gateway: "Required",
  electrical: "AC 250V; 16A relay; up to 2,500W/gang",
  size: "86 x 86 x 33mm with base",
  cataloguePage: 10,
  note: "PC, coated-PC or glass panel options; 24mm base depth.",
});

const r1 = lightFamily({
  series: "R1",
  gangs: [1, 2, 3, 4],
  model: (gang) => `R100${gang}`,
  protocol: "Zigbee 3.0",
  gateway: "Required",
  electrical: "AC 250V; 16A relay; up to 2,500W/gang",
  size: "86 x 87.5 x 32.5mm with base",
  cataloguePage: 12,
  note: "Glass panel with surround backlight; white, grey and blue catalogue variants.",
});

const r2 = lightFamily({
  series: "R2",
  gangs: [1, 2, 3, 4],
  model: (gang) => `R2-00${gang}`,
  protocol: "Wireless protocol not stated",
  gateway: "Confirm with supplier",
  electrical: "AC 120-240V; 10A relay; 800W/gang",
  size: "86 x 86 x 37mm",
  cataloguePage: 13,
  launchTier: "Conditional",
  note: "Concave button and 2.5D glass frame; connectivity and app pairing require supplier confirmation.",
});

const ru2 = lightFamily({
  series: "RU2",
  gangs: [1, 2, 3, 4],
  model: (gang) => `RU2-00${gang}`,
  protocol: "Wireless protocol not stated",
  gateway: "Confirm with supplier",
  electrical: "AC 120-240V; 10A relay; 800W/gang",
  size: "120 x 72 x 35mm",
  cataloguePage: 14,
  launchTier: "Conditional",
  note: "US-format concave button with 2.5D glass frame; verify wall box and app pairing before order.",
});

const t3 = lightFamily({
  series: "T3",
  gangs: [1, 2, 3, 4],
  model: (gang) => `T3-00${gang}`,
  protocol: "Zigbee 3.0",
  gateway: "Required",
  electrical: "AC 220V; 10A relay; up to 2,500W/gang",
  size: "86 x 86 x 34mm with base",
  cataloguePage: 16,
  note: "Glass touch panel with LED strip indicator; white and grey catalogue variants.",
});

const series91Zigbee = lightFamily({
  series: "91",
  gangs: [1, 2, 3, 4],
  model: (gang) => `911${gang}Z4`,
  name: (gang) => `91 Series ${gang}-gang Zigbee/RF switch`,
  image: (gang) => `91-${gang}.webp`,
  protocol: "Zigbee 3.0 + RF433",
  gateway: "Required for app control",
  electrical: "AC 250V; 12A relay; 600W incandescent / 400W fluorescent per gang",
  size: "86 x 86 x 40mm with base",
  cataloguePage: 18,
  note: "PC panel; relay upgrade to 16A is listed as an order option.",
});

const series91Wifi = lightFamily({
  series: "91",
  gangs: [1, 2, 3, 4],
  model: (gang) => `911${gang}W4`,
  name: (gang) => `91 Series ${gang}-gang Wi-Fi/RF switch`,
  image: (gang) => `91-${gang}.webp`,
  protocol: "Wi-Fi + RF433",
  gateway: "Not normally required",
  electrical: "AC 250V; 12A relay; 600W incandescent / 400W fluorescent per gang",
  size: "86 x 86 x 40mm with base",
  cataloguePage: 18,
  note: "PC panel; relay upgrade to 16A is listed as an order option.",
});

const series91Special: Product[] = [
  {
    ...common,
    sku: "KI-TAOS-SW-9122Z4",
    model: "9122Z4",
    name: "91 Series Zigbee/RF curtain switch",
    series: "91",
    image: "91-curtain.webp",
    protocol: "Zigbee 3.0 + RF433",
    gateway: "Required for app control",
    electrical: "AC 250V; 12A relay; max 600W/gang",
    size: "86 x 86 x 40mm with base",
    launchTier: "Extended",
    cataloguePage: 18,
    note: "Two-gang open/close curtain control; confirm motor wiring and limit compatibility.",
  },
  {
    ...common,
    sku: "KI-TAOS-SW-9122W4",
    model: "9122W4",
    name: "91 Series Wi-Fi/RF curtain switch",
    series: "91",
    image: "91-curtain.webp",
    protocol: "Wi-Fi + RF433",
    gateway: "Not normally required",
    electrical: "AC 250V; 12A relay; max 600W/gang",
    size: "86 x 86 x 40mm with base",
    launchTier: "Extended",
    cataloguePage: 18,
    note: "Two-gang open/close curtain control; confirm motor wiring and limit compatibility.",
  },
  {
    ...common,
    sku: "KI-TAOS-SW-9140Z4",
    model: "9140Z4",
    name: "91 Series 4-scene Zigbee/RF switch",
    series: "91",
    image: "91-scene.webp",
    protocol: "Zigbee 3.0 + RF433",
    gateway: "Required",
    electrical: "AC 250V; mains powered",
    size: "86 x 86 x 40mm with base",
    launchTier: "Extended",
    cataloguePage: 18,
    note: "Four programmable scene keys; scene support depends on the selected gateway and app.",
  },
  {
    ...common,
    sku: "KI-TAOS-SW-9140W4",
    model: "9140W4",
    name: "91 Series 4-scene Wi-Fi/RF switch",
    series: "91",
    image: "91-scene.webp",
    protocol: "Wi-Fi + RF433",
    gateway: "Confirm scene architecture",
    electrical: "AC 250V; mains powered",
    size: "86 x 86 x 40mm with base",
    launchTier: "Conditional",
    cataloguePage: 18,
    note: "Four programmable scene keys; app and scene compatibility must be confirmed before sale.",
  },
];

const series58 = lightFamily({
  series: "58",
  gangs: [1, 2, 3, 4],
  model: (gang) => `581${gang}`,
  name: (gang) => `58 Series ${gang}-gang Zigbee switch`,
  image: (gang) => `58-${gang}.webp`,
  protocol: "Zigbee 3.0",
  gateway: "Required",
  electrical: "AC 250V; 16A relay; 800W incandescent / 400W fluorescent per gang",
  size: "86 x 86 x 36mm with base",
  cataloguePage: 20,
  note: "White, black, gold and grey variants use base, BK, CH and GR model suffixes; 2,500W total maximum.",
});

const series58Special: Product[] = [
  {
    ...common,
    sku: "KI-TAOS-SW-5822",
    model: "5822",
    name: "58 Series Zigbee curtain switch",
    series: "58",
    image: "58-curtain.webp",
    protocol: "Zigbee 3.0",
    gateway: "Required",
    electrical: "AC 250V; 16A relay; max 400W/gang",
    size: "86 x 86 x 36mm with base",
    launchTier: "Extended",
    cataloguePage: 20,
    note: "Two-gang curtain control; available in white, black, gold and grey catalogue finishes.",
  },
  {
    ...common,
    sku: "KI-TAOS-SW-5840",
    model: "5840",
    name: "58 Series 4-scene Zigbee switch",
    series: "58",
    image: "58-scene.webp",
    protocol: "Zigbee 3.0",
    gateway: "Required",
    electrical: "AC 250V; mains powered",
    size: "86 x 86 x 36mm with base",
    launchTier: "Extended",
    cataloguePage: 20,
    note: "Four programmable scene keys; available in white, black, gold and grey catalogue finishes.",
  },
];

const cq = lightFamily({
  series: "CQ",
  gangs: [1, 2, 3, 4],
  model: (gang) => `CQ00${gang}`,
  protocol: "Zigbee 3.0",
  gateway: "Required",
  electrical: "AC 250V; 16A relay; 800W incandescent / 400W fluorescent per gang",
  size: "86 x 86 x 41mm with base",
  cataloguePage: 22,
  note: "Skin-feel glass panel, 28mm base depth and 2,400W total maximum.",
});

const m3 = lightFamily({
  series: "M3",
  gangs: [1, 2, 3, 4, 6],
  model: (gang) => `M300${gang === 6 ? 5 : gang}`,
  name: (gang) => `M3 ${gang}-gang Zigbee switch`,
  protocol: "Zigbee 3.0",
  gateway: "Required",
  electrical: "AC 250V; 16A relay; 1,000W incandescent / 400W fluorescent per gang",
  size: "86 x 86 x 35.8mm with base",
  cataloguePage: 23,
  note: "PC, glass (G) and skin-feel glass (SFG) variants; 2,200W total maximum.",
});

export const switchExpansion: Product[] = [
  ...s1Sockets,
  ...m1,
  ...m2,
  ...a1,
  ...r1,
  ...r2,
  ...ru2,
  ...t3,
  ...series91Zigbee,
  ...series91Wifi,
  ...series91Special,
  ...series58,
  ...series58Special,
  ...cq,
  ...m3,
];
