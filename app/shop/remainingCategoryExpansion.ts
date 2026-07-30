import type { Product } from "./products";

type ProductSeed = Omit<Product, "sku" | "ecosystem"> & {
  skuPrefix: string;
  ecosystem?: string;
};

const product = ({ skuPrefix, ecosystem, ...seed }: ProductSeed): Product => ({
  ...seed,
  sku: `KI-TAOS-${skuPrefix}-${seed.model.replace(/[^a-z0-9]/gi, "").toUpperCase()}`,
  ecosystem: ecosystem ?? "Supplier ecosystem claim; confirm final Tuya/Smart Life pairing before order",
});

const curtains: Product[] = [
  product({ skuPrefix: "CM", model: "RX-CM41Z", name: "Zigbee smart curtain motor", category: "Curtains & blinds", categoryKey: "curtains", family: "Motors", protocol: "Zigbee 3.0", gateway: "Required", neutral: "Mains-powered", electrical: "AC 100-250V; ≤0.3A; 1.2Nm", size: "284 x 50.6 x 71mm", salesPath: "Configure a project", launchTier: "Core", cataloguePage: 25, note: "75/90/110rpm options; specify track length, opening direction and required load." }),
  product({ skuPrefix: "CM", model: "RX-CM35", name: "Zigbee tubular blind motor", category: "Curtains & blinds", categoryKey: "curtains", family: "Motors", protocol: "Zigbee 3.0", gateway: "Required", neutral: "Mains-powered", electrical: "AC 100-240V; 60W; 5Nm", size: "Ø35 x 540.5mm", salesPath: "Configure a project", launchTier: "Extended", cataloguePage: 25, note: "For compatible roller, Roman, Venetian and honeycomb blind systems; supplier states smart-box connection." }),
  ...[
    ["RX-CT70-1830", "1.8-3m adjustable curtain track", "1.8-3m", "1800 x 51-3000 x 51mm"],
    ["RX-CT70-2240", "2.2-4m adjustable curtain track", "2.2-4m", "2200 x 51-4000 x 51mm"],
    ["RX-CT70-2545", "2.5-4.5m adjustable curtain track", "2.5-4.5m", "2500 x 51-4500 x 51mm"],
  ].map(([model, name, range, size]) => product({
    skuPrefix: "CT", model, name, category: "Curtains & blinds", categoryKey: "curtains",
    family: "Tracks & remotes", protocol: "Mechanical track", ecosystem: "Pair with a compatible curtain motor",
    gateway: "Not applicable", neutral: "Not applicable", electrical: "No electrical load",
    size, salesPath: "Configure a project", launchTier: "Extended", cataloguePage: 25,
    note: `${range} finished adjustable track; opening direction, mounting and motor compatibility are confirmed after survey.`,
  })),
  product({ skuPrefix: "CT", model: "RX-RC02", name: "Two-channel curtain remote control", category: "Curtains & blinds", categoryKey: "curtains", family: "Tracks & remotes", protocol: "RF 433.92MHz", gateway: "Compatible RF curtain receiver required", neutral: "CR2032 battery", electrical: "Battery-powered transmitter", size: "141 x 41 x 13mm", salesPath: "Buy with installation", launchTier: "Extended", cataloguePage: 25, note: "Indoor transmission up to 30m stated; 6-channel and 20-channel versions are also noted by the supplier." }),
];

const gateways: Product[] = [
  product({ skuPrefix: "GW", model: "RC006IRW", name: "Wi-Fi infrared remote controller", category: "Gateways", categoryKey: "gateways", family: "Infrared control", protocol: "Wi-Fi 2.4GHz / IR 38kHz", gateway: "Not required", neutral: "USB-powered", electrical: "DC 5V/1A", size: "63 x 63 x 24mm", salesPath: "Buy directly", launchTier: "Extended", cataloguePage: 27, note: "Multi-directional infrared with an indicated range up to 11m; validate the appliance code library before sale." }),
  product({ skuPrefix: "GW", model: "GWZ12", name: "Wireless multi-mode gateway", category: "Gateways", categoryKey: "gateways", family: "Wireless gateways", protocol: "Zigbee 3.0 / Bluetooth Mesh & BLE", gateway: "This is the gateway", neutral: "USB-powered", electrical: "DC 5V/1A", size: "60.5 x 60.5 x 16mm", salesPath: "Buy directly", launchTier: "Core", cataloguePage: 27, note: "Bridge for selected Zigbee and Bluetooth devices; final device count and pairing compatibility are confirmed per project." }),
  product({ skuPrefix: "GW", model: "GWZ11AWC", name: "Wired Zigbee gateway", category: "Gateways", categoryKey: "gateways", family: "Wired gateways", protocol: "Zigbee 3.0 / Ethernet", gateway: "This is the gateway", neutral: "USB-powered", electrical: "DC 5V/1A", size: "90 x 90 x 20mm", salesPath: "Buy with installation", launchTier: "Core", cataloguePage: 27, note: "RJ45 network connection; final supported-device count and Tuya pairing are confirmed before order." }),
];

const sensors: Product[] = [
  product({ skuPrefix: "SE", model: "SR-S001", name: "Zigbee smoke sensor", category: "Sensors", categoryKey: "sensors", family: "Safety sensors", protocol: "Zigbee 3.0", gateway: "Required", neutral: "123A battery", electrical: "DC 3V", size: "Ø90 x 40mm", salesPath: "Buy with installation", launchTier: "Conditional", cataloguePage: 28, note: "Supplier states ≥80dB local alarm; life-safety certification and code compliance must be verified before specification." }),
  product({ skuPrefix: "SE", model: "SR-G001", name: "Zigbee gas-leak sensor", category: "Sensors", categoryKey: "sensors", family: "Safety sensors", protocol: "Zigbee 3.0", gateway: "Required", neutral: "USB-C external adapter", electrical: "External DC power", size: "85 x 29mm", salesPath: "Buy with installation", launchTier: "Conditional", cataloguePage: 28, note: "Gas type, alarm behavior and relevant certification must be confirmed before sale." }),
  product({ skuPrefix: "SE", model: "SR-M001", name: "Zigbee PIR motion sensor", category: "Sensors", categoryKey: "sensors", family: "Occupancy sensors", protocol: "Zigbee 3.0", gateway: "Required", neutral: "Battery-powered", electrical: "DC 3V; supplier lists CR2045 battery", size: "80 x 42 x 36.5mm", salesPath: "Buy directly", launchTier: "Core", cataloguePage: 28, note: "For security alerts and occupancy-linked scenes; battery designation should be reconfirmed." }),
  product({ skuPrefix: "SE", model: "SR-P00224G", name: "24GHz human-presence sensor", category: "Sensors", categoryKey: "sensors", family: "Occupancy sensors", protocol: "Zigbee 3.0 / 24GHz radar", gateway: "Required", neutral: "Mains-powered", electrical: "AC 90-260V; 0.8W standby", size: "67 x 49.4mm; 55mm opening", salesPath: "Buy with installation", launchTier: "Extended", cataloguePage: 28, note: "Detects moving and static occupants; mounting location and scene logic require commissioning." }),
  product({ skuPrefix: "SE", model: "SR-T001", name: "Temperature and humidity sensor", category: "Sensors", categoryKey: "sensors", family: "Environmental sensors", protocol: "Zigbee 3.0", gateway: "Required", neutral: "CR2032 battery", electrical: "DC 3V", size: "50 x 17mm", salesPath: "Buy directly", launchTier: "Core", cataloguePage: 28, note: "For monitoring and automation scenes; confirm stated measurement ranges and accuracy before specification." }),
  product({ skuPrefix: "SE", model: "SR-D001", name: "Zigbee door and window sensor", category: "Sensors", categoryKey: "sensors", family: "Entry & leak sensors", protocol: "Zigbee 3.0", gateway: "Required", neutral: "CR2032 battery", electrical: "DC 3V", size: "52 x 29 x 11mm main unit", salesPath: "Buy directly", launchTier: "Core", cataloguePage: 28, note: "For opening alerts and automation scenes; confirm mounting gap and surface compatibility." }),
  product({ skuPrefix: "SE", model: "SR-F002", name: "Zigbee flood sensor", category: "Sensors", categoryKey: "sensors", family: "Entry & leak sensors", protocol: "Zigbee 3.0", gateway: "Required", neutral: "CR2032 battery", electrical: "DC 3V", size: "50 x 17mm", salesPath: "Buy directly", launchTier: "Core", cataloguePage: 28, note: "For kitchens, wet areas, pumps and plant rooms; final placement depends on the risk area." }),
];

const wireless: Product[] = [
  ...["A", "B"].flatMap((series) => [1, 2, 3].map((gang) => product({
    skuPrefix: "WC", model: `QN-${series}00${gang}`, name: `${series}-series ${gang}-gang kinetic wireless switch`,
    category: "Wireless controls", categoryKey: "wireless", family: "Kinetic wall switches",
    protocol: "RF 433MHz OOK/FSK", ecosystem: "Requires a compatible TAOS RF controller",
    gateway: "QN-CZ4, QN-CW4 or QN-C4 controller", neutral: "Battery-free kinetic generation",
    electrical: "Self-generating transmitter", size: "Confirm with supplier", salesPath: "Buy directly",
    launchTier: "Extended", cataloguePage: series === "A" ? 35 : 36,
    note: "Supplier states ≥100m open-area and ≥30m indoor range, over 100,000 operations and MOQ of 100 pieces.",
  }))),
  product({ skuPrefix: "WC", model: "QN-CZ4", name: "Zigbee and RF433 controller", category: "Wireless controls", categoryKey: "wireless", family: "RF controllers", protocol: "Zigbee 2.4GHz / RF 433MHz", gateway: "Zigbee gateway required", neutral: "Mains-powered", electrical: "AC 100-240V; max 16A", size: "Confirm with supplier", salesPath: "Buy with installation", launchTier: "Extended", cataloguePage: 36, note: "Dual-control support stated; pair only with compatible kinetic switches and gateway." }),
  product({ skuPrefix: "WC", model: "QN-CW4", name: "Wi-Fi and RF433 controller", category: "Wireless controls", categoryKey: "wireless", family: "RF controllers", protocol: "Wi-Fi 2.4GHz / RF 433MHz", gateway: "Not required", neutral: "Mains-powered", electrical: "AC 100-240V; max 16A", size: "Confirm with supplier", salesPath: "Buy with installation", launchTier: "Extended", cataloguePage: 36, note: "Dual-control support stated; final app and Tuya pairing must be confirmed." }),
  product({ skuPrefix: "WC", model: "QN-C4", name: "RF433 wireless controller", category: "Wireless controls", categoryKey: "wireless", family: "RF controllers", protocol: "RF 433MHz", ecosystem: "Standalone RF control; Tuya pairing not stated", gateway: "Not required", neutral: "Mains-powered", electrical: "AC 100-240V; max 16A", size: "Confirm with supplier", salesPath: "Buy with installation", launchTier: "Conditional", cataloguePage: 36, note: "ABS and PC controller for compatible kinetic switches; supplier states MOQ of 100 pieces." }),
];

const locks: Product[] = [
  ["JLY2", "Camera-enabled smart door lock", "Camera locks", "40-120mm", "Single latch / 6050", "300,000-pixel camera stated"],
  ["JLC2", "Smart fingerprint door lock", "Standard locks", "35-55mm", "5050; alternative mortises stated", "Card, password and fingerprint access"],
  ["JLC2PR", "Camera smart door lock", "Camera locks", "35-55mm", "5050; alternative mortises stated", "300,000-pixel camera stated"],
  ["JLX6PL", "Smart fingerprint door lock", "Standard locks", "40-55mm", "6052", "Card, password and fingerprint access"],
  ["JLF10", "Smart fingerprint door lock", "Standard locks", "35-70mm", "3585", "Card, password and fingerprint access"],
].map(([model, name, family, thickness, mortise, feature]) => product({
  skuPrefix: "DL", model, name, category: "Door locks", categoryKey: "locks", family,
  protocol: "Confirm wireless version", gateway: "Confirm with supplier", neutral: "4-battery pack; exact cell size varies by model",
  electrical: "6V; emergency 5V DC", size: `Door thickness ${thickness}`, salesPath: "Buy with installation",
  launchTier: "Conditional", cataloguePage: ["JLX6PL", "JLF10"].includes(model) ? 38 : 37,
  note: `${feature}; ${mortise} lock body stated. Door survey, handing, mortise, finish and app compatibility must be confirmed.`,
}));

const hvac: Product[] = [
  product({ skuPrefix: "HV", model: "HS1214Z", name: "Digital heating thermostat", category: "Climate control", categoryKey: "hvac", family: "Thermostats", protocol: "Confirm wireless version", gateway: "Confirm with supplier", neutral: "Mains-powered; recessed installation", electrical: "AC 90-240V; 3A or 16A options", size: "86 x 86 x 27mm", salesPath: "Buy with installation", launchTier: "Conditional", cataloguePage: 39, note: "NTC 10k probe and weekly schedule stated; heating type, sensor configuration and final protocol must be confirmed." }),
  product({ skuPrefix: "HV", model: "HS736", name: "Smart thermostatic radiator valve", category: "Climate control", categoryKey: "hvac", family: "Radiator valves", protocol: "Confirm wireless version", gateway: "Confirm with supplier", neutral: "2 AA alkaline batteries", electrical: "Battery-powered; max current 90mA", size: "53 x 89.5mm; M30 x 1.5 thread", salesPath: "Buy with installation", launchTier: "Conditional", cataloguePage: 39, note: "Weekly schedule and 5-35°C adjustment range stated; radiator-valve fit and ecosystem compatibility require confirmation." }),
  product({ skuPrefix: "HV", model: "GAC-DMA", name: "Single indoor-unit Zigbee AC gateway", category: "Climate control", categoryKey: "hvac", family: "AC gateways", protocol: "Zigbee 3.0", gateway: "Zigbee gateway required", neutral: "DIN-rail installation", electrical: "Confirm with supplier", size: "54 x 87 x 31mm", salesPath: "Configure a project", launchTier: "Extended", cataloguePage: 39, note: "For one indoor unit; verify AC brand, model, control bus and commissioning method." }),
  product({ skuPrefix: "HV", model: "GAC-DMB", name: "Multiple indoor-unit Zigbee AC gateway", category: "Climate control", categoryKey: "hvac", family: "AC gateways", protocol: "Zigbee 3.0", gateway: "Zigbee gateway required", neutral: "DIN-rail installation", electrical: "Confirm with supplier", size: "105 x 87 x 58mm", salesPath: "Configure a project", launchTier: "Extended", cataloguePage: 39, note: "For multiple indoor units; verify brands, topology, supported unit count and commissioning method." }),
];

type PlugSeed = [string, string, string, string, string, number];
const plugSeeds: PlugSeed[] = [
  ["DL16022-USA", "American smart plug", "Single smart plugs", "15A; 1,800W", "66.5 x 40.5 x 51.5mm", 40],
  ["DL16022M-USA", "American smart plug with metering", "Single smart plugs", "15A; 1,800W", "66.5 x 40.5 x 51.5mm", 40],
  ["DL1604-DEU", "German smart plug", "Single smart plugs", "16A; 3,680W", "52 x 52 x 82mm", 40],
  ["DL1604M-DEU", "German smart plug with metering", "Single smart plugs", "16A; 3,680W", "52 x 52 x 82mm", 40],
  ["DL1656M-DEU", "Weather-resistant German smart plug with metering", "Single smart plugs", "16A; 3,680W", "52 x 52 x 82mm", 40],
  ["DL1606M-FRA", "French smart plug with metering", "Single smart plugs", "16A; 3,680W", "52 x 52 x 79mm", 41],
  ["DL1608M-GBR", "British smart plug with metering", "Single smart plugs", "13A; 2,990W", "55 x 55 x 61mm", 41],
  ["DL1610M-AUS", "Australian smart plug with metering", "Single smart plugs", "10A; 2,200W", "66 x 43 x 62mm", 41],
  ["DL1612M-ARG", "Argentinian smart plug with metering", "Single smart plugs", "10A; 2,200W", "70 x 46 x 52mm", 41],
  ["DL1634M-BRA", "Brazilian smart plug with metering", "Single smart plugs", "10A/16A/20A options; supplier-stated load varies", "70 x 46 x 52mm", 41],
  ["DL1662M-ITA", "Italian smart plug with metering", "Single smart plugs", "10A/16A; 2,300W/3,680W", "51 x 51 x 80mm", 41],
  ["DL1614-USA", "Dual American smart plug", "Multi-outlet plugs", "15A; 1,800W", "88 x 41 x 51mm", 41],
  ["DL1618M-DEU", "Dual German smart plug with metering", "Multi-outlet plugs", "16A; 3,680W", "97 x 50 x 82mm", 41],
  ["DL1632M-DEU", "Triple German smart plug with metering", "Multi-outlet plugs", "16A; 3,680W", "97 x 50 x 82mm", 41],
  ["DL1622M-FRA", "Dual French smart plug with metering", "Multi-outlet plugs", "16A; 3,680W", "97 x 50 x 79mm", 41],
  ["DL1626M-GBR", "Dual British smart plug with metering", "Multi-outlet plugs", "13A; 2,990W", "102 x 51 x 61mm", 42],
  ["DL16162U-USA", "American smart plug with USB-A and USB-C", "USB charging plugs", "15A; 1,800W; USB 12W", "88 x 41 x 51mm", 42],
  ["DL16202U-DEU", "German smart plug with USB-A and USB-C", "USB charging plugs", "16A; 3,680W; USB 12W", "97 x 50 x 82mm", 42],
  ["DL16202UM-DEU", "Metering German plug with USB-A and USB-C", "USB charging plugs", "16A; 3,680W; USB 12W", "97 x 50 x 82mm", 42],
  ["DL16204UM-DEU", "Metering German plug with PD fast charging", "USB charging plugs", "16A; 3,680W; USB 20W", "97 x 50 x 82mm", 42],
  ["DL16242UM-FRA", "Metering French plug with USB-A and USB-C", "USB charging plugs", "16A; 3,680W; USB 12W", "97 x 50 x 79mm", 42],
  ["DL16244UM-FRA", "Metering French plug with PD fast charging", "USB charging plugs", "16A; 3,680W; USB 20W", "97 x 50 x 79mm", 42],
  ["DL16282U-GBR", "British smart plug with USB-A and USB-C", "USB charging plugs", "13A; supplier states 3,120W; USB 12W", "102 x 51 x 61mm", 42],
  ["DL1630UM-AUS", "Metering Australian plug with PD fast charging", "USB charging plugs", "10A; 2,200W; USB 20W", "100 x 43 x 62mm", 42],
  ["DL1638UM-BRA", "Metering Brazilian plug with USB-A and USB-C", "USB charging plugs", "10A; 2,200W; USB 15W", "76 x 50 x 79mm", 42],
];
const plugs = plugSeeds.map(([model, name, family, rating, size, cataloguePage]) => product({
  skuPrefix: "PL", model, name, category: "Smart plugs", categoryKey: "plugs", family,
  protocol: "Wi-Fi 2.4GHz", ecosystem: "Tuya platform stated", gateway: "Not required",
  neutral: "Plug-in", electrical: `AC 110-250V; ${rating}`, size, salesPath: "Buy directly",
  launchTier: model.includes("GBR") ? "Core" : "Conditional", cataloguePage,
  note: `${model.includes("M") ? "Energy metering is supplier-stated. " : ""}Socket standard, local regulatory suitability, stock and exact variant must be confirmed before sale.`,
}));

type ModuleSeed = [string, string, string, string, string, number];
const moduleSeeds: ModuleSeed[] = [
  ["KN-S201ZE", "One-channel Zigbee switch module", "Zigbee switch modules", "Zigbee", "16A; 3,680W / 300W LED", 43],
  ["KN-S202ZE", "Two-channel Zigbee switch module", "Zigbee switch modules", "Zigbee", "2 x 10A; 2 x 2,300W / 250W LED", 43],
  ["KN-S203ZE", "Three-channel Zigbee switch module", "Zigbee switch modules", "Zigbee", "3 x 5A; 3 x 1,125W / 135W LED", 43],
  ["KN-S204ZE", "Four-channel Zigbee switch module", "Zigbee switch modules", "Zigbee", "4 x 5A; 4 x 1,125W / 135W LED", 43],
  ["KN-C201ZE", "One-channel Zigbee curtain module", "Curtain & special modules", "Zigbee", "5A", 43],
  ["KN-BC201WE", "One-channel Wi-Fi blind and curtain module", "Curtain & special modules", "Wi-Fi 2.4GHz", "3A", 43],
  ["KN-G201ZE", "Zigbee gate-open switch module", "Curtain & special modules", "Zigbee", "230V; two sensors with 350mm wire", 44],
  ["KN-SDC201ZE", "One-channel Zigbee dry-contact module", "Curtain & special modules", "Zigbee", "5A; 1,125W / 150W LED", 44],
  ["KN-RGBCW/W", "RGBCW Wi-Fi lighting controller", "Wi-Fi & lighting modules", "Wi-Fi 2.4GHz", "DC 12-24V; 4A/channel; 12A total", 44],
  ["KN-S201M", "One-channel Matter switch module", "Matter switch modules", "Matter over Wi-Fi", "10A; 2,300W / 250W LED", 44],
  ["KN-S202M", "Two-channel Matter switch module", "Matter switch modules", "Matter over Wi-Fi", "2 x 10A; 2 x 2,300W / 250W LED", 44],
  ["KN-S203M", "Three-channel Matter switch module", "Matter switch modules", "Matter over Wi-Fi", "3 x 5A; 3 x 1,150W / 150W LED", 44],
  ["KN-S201ZL", "One-channel no-neutral Zigbee module", "No-neutral modules", "Zigbee", "Max 100W", 44],
  ["KN-S202ZL", "Two-channel no-neutral Zigbee module", "No-neutral modules", "Zigbee", "2 x 100W", 44],
  ["KN-S203ZL", "Three-channel no-neutral Zigbee module", "No-neutral modules", "Zigbee", "3 x 100W", 44],
  ["KN-S201ZS", "One-channel self-adaptive Zigbee module", "Self-adaptive modules", "Zigbee", "16A; 3,680W / 10-500W LED", 44],
  ["KN-S202ZS", "Two-channel self-adaptive Zigbee module", "Self-adaptive modules", "Zigbee", "2 x 10A; 2 x 1,600W / 10-500W LED", 44],
];
const modules = moduleSeeds.map(([model, name, family, protocol, rating, cataloguePage]) => product({
  skuPrefix: "MO", model, name, category: "DIY modules", categoryKey: "modules", family,
  protocol, gateway: protocol === "Zigbee" ? "Required" : "Not required unless the selected ecosystem requires one",
  neutral: family === "No-neutral modules" ? "No neutral" : family === "Self-adaptive modules" ? "With or without neutral" : "Confirm wiring diagram",
  electrical: rating, size: model === "KN-S202ZS" ? "46 x 46 x 18mm" : model.includes("ZE") ? "40 x 40 x 18mm" : "39 x 39 x 18mm",
  salesPath: "Buy with installation", launchTier: "Conditional", cataloguePage,
  note: "For dry indoor use unless stated otherwise; load type, wiring, ecosystem pairing and enclosure space must be confirmed before installation.",
}));

type CameraSeed = [string, string, string, string, string, number];
const cameraSeeds: CameraSeed[] = [
  ["AJD-422EM", "3MP pan-and-tilt indoor camera", "Indoor cameras", "3MP", "Wi-Fi 2.4GHz", 45],
  ["AJS-MD44E18EA", "4MP dual-lens pan-and-tilt camera", "Dual-lens cameras", "4MP", "Wi-Fi 2.4GHz", 45],
  ["AJY-1222EM", "3MP pan-and-tilt indoor camera", "Indoor cameras", "3MP", "Wi-Fi 2.4GHz", 45],
  ["AJ-12408", "4MP dual-lens pan-and-tilt camera", "Dual-lens cameras", "4MP", "Wi-Fi 2.4GHz", 46],
  ["AJS-MQ16440EA", "1080p dual-lens pan-and-tilt camera", "Dual-lens cameras", "1080p", "Wi-Fi 2.4GHz", 46],
  ["AJQ-1624EM", "3MP wired and Wi-Fi pan-and-tilt camera", "Wired & Wi-Fi cameras", "3MP", "Wi-Fi 2.4GHz / cable", 46],
  ["AJQ-1628EM", "3MP wired and Wi-Fi pan-and-tilt camera", "Wired & Wi-Fi cameras", "3MP", "Wi-Fi 2.4GHz / cable", 46],
  ["AJQ-1642", "6MP dual-lens wired and Wi-Fi camera", "Wired & Wi-Fi cameras", "6MP", "Wi-Fi 2.4GHz / cable", 46],
  ["AJQ-16432", "6MP dual-lens wired and Wi-Fi camera", "Wired & Wi-Fi cameras", "6MP", "Wi-Fi 2.4GHz / cable", 46],
  ["AJC-200", "2MP pan-and-tilt indoor camera", "Indoor cameras", "2MP", "Wi-Fi 2.4GHz", 46],
  ["AJQ-16282-WiFi", "3MP battery pan-and-tilt camera", "Battery cameras", "3MP", "Wi-Fi 2.4GHz", 46],
  ["AJS-TLK200EM", "3MP battery security camera", "Battery cameras", "3MP", "Wi-Fi 2.4GHz", 46],
];
const cameras = cameraSeeds.map(([model, name, family, resolution, protocol, cataloguePage]) => product({
  skuPrefix: "CA", model, name, category: "Smart cameras", categoryKey: "cameras", family,
  protocol, ecosystem: "Tuya/Smart Life compatibility not confirmed in the catalogue", gateway: "Not required",
  neutral: family === "Battery cameras" ? "Rechargeable battery" : "DC 5V",
  electrical: model === "AJQ-16282-WiFi" ? "8,000mAh battery" : model === "AJS-TLK200EM" ? "4,000mAh battery" : "DC 5V",
  size: "Confirm with supplier", salesPath: protocol.includes("cable") ? "Buy with installation" : "Buy directly",
  launchTier: "Conditional", cataloguePage,
  note: `${resolution}; supplier states two-way audio, humanoid detection, full-colour night vision and TF/cloud storage. Privacy, app, storage and notification behavior require confirmation.`,
}));

export const remainingCategoryExpansion: Product[] = [
  ...curtains,
  ...gateways,
  ...sensors,
  ...wireless,
  ...locks,
  ...hvac,
  ...plugs,
  ...modules,
  ...cameras,
];
