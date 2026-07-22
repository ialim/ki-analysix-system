import productData from "./products.json";

export type SalesPath = "Buy directly" | "Buy with installation" | "Configure a project";
export type Product = {
  sku: string; model: string; name: string; category: string; categoryKey: string;
  protocol: string; ecosystem: string; gateway: string; neutral: string;
  electrical: string; size: string; salesPath: SalesPath;
  launchTier: "Core" | "Extended" | "Conditional"; cataloguePage: number; note: string;
};

export const categories = [
  ["switches", "Smart switches"], ["curtains", "Curtains & blinds"], ["gateways", "Gateways"],
  ["sensors", "Sensors"], ["panels", "Control panels"], ["drivers", "LED control"],
  ["lighting", "Smart lighting"], ["wireless", "Wireless controls"], ["locks", "Door locks"],
  ["hvac", "Climate control"], ["plugs", "Smart plugs"], ["modules", "DIY modules"],
  ["cameras", "Smart cameras"],
] as const;

export const products = productData as Product[];
