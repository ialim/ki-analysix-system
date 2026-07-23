import productData from "./products.json";
import { lightingExpansion } from "./lightingExpansion";
import { switchExpansion } from "./switchExpansion";

export type SalesPath = "Buy directly" | "Buy with installation" | "Configure a project";
export type Product = {
  sku: string; model: string; name: string; category: string; categoryKey: string;
  protocol: string; ecosystem: string; gateway: string; neutral: string;
  electrical: string; size: string; salesPath: SalesPath;
  launchTier: "Core" | "Extended" | "Conditional"; cataloguePage: number; note: string;
  image?: string; series?: string; family?: string;
};

export const categories = [
  ["switches", "Smart switches"], ["curtains", "Curtains & blinds"], ["gateways", "Gateways"],
  ["sensors", "Sensors"], ["panels", "Control panels"], ["drivers", "LED control"],
  ["lighting", "Smart lighting"], ["wireless", "Wireless controls"], ["locks", "Door locks"],
  ["hvac", "Climate control"], ["plugs", "Smart plugs"], ["modules", "DIY modules"],
  ["cameras", "Smart cameras"],
] as const;

const replacedLightingModels = new Set([
  "ZAN-CS240LC",
  "ZAN-S100LC",
  "EU-M20-D12",
  "CK-S001-10",
  "CK-D001-10",
]);

const baseProducts = (productData as Product[]).filter(
  (product) => !replacedLightingModels.has(product.model)
);

export const products = [...baseProducts, ...switchExpansion, ...lightingExpansion];
