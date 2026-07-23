"use client";

import { useMemo, useState } from "react";
import { categories, products, type SalesPath } from "./products";

const paths: Array<"All" | SalesPath> = ["All", "Buy directly", "Buy with installation", "Configure a project"];
const switchSeries = ["S1", "M1", "M2", "A1", "R1", "R2", "RU2", "T1", "T3", "91", "58", "CQ", "M3"];
const lightingFamilies = [
  "LED controllers",
  "Power supplies",
  "Magnetic downlights",
  "Magnetic flood lights",
  "Magnetic grille lights",
  "Folding grille lights",
  "Spotlights",
  "Downlights",
  "LED strips",
  "Track & power",
];
const panelFamilies = [
  "Compact relay panels",
  "Compact gateway panels",
  "Central gateway panels",
  "Audio & intercom panels",
];

export default function ShopCatalog() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [category, setCategory] = useState("all");
  const [path, setPath] = useState<(typeof paths)[number]>("All");
  const [series, setSeries] = useState("all");
  const [lightingFamily, setLightingFamily] = useState("all");
  const [panelFamily, setPanelFamily] = useState("all");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) =>
      (category === "all" || product.categoryKey === category) &&
      (path === "All" || product.salesPath === path) &&
      (category !== "switches" || series === "all" || product.series === series ||
        (!product.series && product.model.toLowerCase().startsWith(series.toLowerCase()))) &&
      (!["lighting", "drivers"].includes(category) || lightingFamily === "all" || product.family === lightingFamily) &&
      (category !== "panels" || panelFamily === "all" || product.family === panelFamily) &&
      (!term || [product.name, product.model, product.sku, product.protocol, product.category].some((value) => value.toLowerCase().includes(term)))
    );
  }, [category, lightingFamily, panelFamily, path, query, series]);

  return <>
    <section className="shop-controls shell" aria-label="Catalogue filters">
      <label className="shop-search"><span>Search catalogue</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Product, model or protocol" /></label>
      <div className="filter-block"><span>Category</span><div className="filter-pills"><button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>All</button>{categories.map(([key, label]) => <button className={category === key ? "active" : ""} onClick={() => setCategory(key)} key={key}>{label}</button>)}</div></div>
      {category === "switches" && <div className="filter-block"><span>Switch series</span><div className="filter-pills"><button className={series === "all" ? "active" : ""} onClick={() => setSeries("all")}>All series</button>{switchSeries.map((item) => <button className={series === item ? "active" : ""} onClick={() => setSeries(item)} key={item}>{item}</button>)}</div></div>}
      {["lighting", "drivers"].includes(category) && <div className="filter-block"><span>Lighting family</span><div className="filter-pills"><button className={lightingFamily === "all" ? "active" : ""} onClick={() => setLightingFamily("all")}>All lighting</button>{lightingFamilies.map((item) => <button className={lightingFamily === item ? "active" : ""} onClick={() => setLightingFamily(item)} key={item}>{item}</button>)}</div></div>}
      {category === "panels" && <div className="filter-block"><span>Panel family</span><div className="filter-pills"><button className={panelFamily === "all" ? "active" : ""} onClick={() => setPanelFamily("all")}>All panels</button>{panelFamilies.map((item) => <button className={panelFamily === item ? "active" : ""} onClick={() => setPanelFamily(item)} key={item}>{item}</button>)}</div></div>}
      <div className="filter-block path-filter"><span>How to buy</span><div className="filter-pills">{paths.map((item) => <button className={path === item ? "active" : ""} onClick={() => setPath(item)} key={item}>{item}</button>)}</div></div>
    </section>
    <section className="catalogue shell" id="catalogue">
      <div className="catalogue-heading"><div><p className="section-kicker light">Complete catalogue range</p><h2>{filtered.length} products</h2></div><p>All supplier-catalogue switch, smart-lighting and control-panel families are represented. KI Analysix holds physical samples for most switch families; exact protocol, finish, panel features, lighting configuration and availability are confirmed with every request.</p></div>
      <div className="product-grid">{filtered.map((product) => {
        const message = encodeURIComponent(`Hello KI Analysix,\n\nI would like to request the current price and availability for:\nProduct: ${product.name}\nModel: ${product.model}\nSKU: ${product.sku}\nPreferred path: ${product.salesPath}\n\nQuantity:\nProject location:\nInstallation required: Yes / No`);
        const imageName = product.image ?? `${product.model.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.webp`;
        return <article className="product-card" key={product.sku}>
          <div className="product-card-top"><span>{product.category}</span><b>{product.model}</b></div>
          <div className="product-media"><img src={`${base}/products/${imageName}`} alt={`${product.name}, supplier catalogue image`} loading="lazy" /></div>
          <h3>{product.name}</h3><div className="product-badges"><span>{product.protocol}</span><span>{product.salesPath}</span></div>
          <dl><div><dt>Gateway</dt><dd>{product.gateway}</dd></div><div><dt>Power / load</dt><dd>{product.electrical}</dd></div><div><dt>Wiring</dt><dd>{product.neutral}</dd></div></dl>
          {product.launchTier === "Conditional" && <p className="compatibility-note">Compatibility confirmation required before sale.</p>}
          <a href={`https://wa.me/2349011151234?text=${message}`} target="_blank" rel="noopener noreferrer">Request price & availability <span>↗</span></a>
        </article>;
      })}</div>
      {filtered.length === 0 && <div className="empty-results"><h3>No products match those filters.</h3><button onClick={() => { setQuery(""); setCategory("all"); setSeries("all"); setLightingFamily("all"); setPanelFamily("all"); setPath("All"); }}>Reset catalogue</button></div>}
    </section>
  </>;
}
