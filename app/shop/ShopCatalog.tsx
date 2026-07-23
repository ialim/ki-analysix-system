"use client";

import { useMemo, useState } from "react";
import { categories, products, type SalesPath } from "./products";

const paths: Array<"All" | SalesPath> = ["All", "Buy directly", "Buy with installation", "Configure a project"];

export default function ShopCatalog() {
  const [category, setCategory] = useState("all");
  const [path, setPath] = useState<(typeof paths)[number]>("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) =>
      (category === "all" || product.categoryKey === category) &&
      (path === "All" || product.salesPath === path) &&
      (!term || [product.name, product.model, product.sku, product.protocol, product.category].some((value) => value.toLowerCase().includes(term)))
    );
  }, [category, path, query]);

  return <>
    <section className="shop-controls shell" aria-label="Catalogue filters">
      <label className="shop-search"><span>Search catalogue</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Product, model or protocol" /></label>
      <div className="filter-block"><span>Category</span><div className="filter-pills"><button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>All</button>{categories.map(([key, label]) => <button className={category === key ? "active" : ""} onClick={() => setCategory(key)} key={key}>{label}</button>)}</div></div>
      <div className="filter-block path-filter"><span>How to buy</span><div className="filter-pills">{paths.map((item) => <button className={path === item ? "active" : ""} onClick={() => setPath(item)} key={item}>{item}</button>)}</div></div>
    </section>
    <section className="catalogue shell" id="catalogue">
      <div className="catalogue-heading"><div><p className="section-kicker light">Curated launch range</p><h2>{filtered.length} products</h2></div><p>Prices and live stock will be added after supplier verification. Every request is checked for protocol, wiring, load and installation fit.</p></div>
      <div className="product-grid">{filtered.map((product) => {
        const message = encodeURIComponent(`Hello KI Analysix,\n\nI would like to request the current price and availability for:\nProduct: ${product.name}\nModel: ${product.model}\nSKU: ${product.sku}\nPreferred path: ${product.salesPath}\n\nQuantity:\nProject location:\nInstallation required: Yes / No`);
        return <article className="product-card" key={product.sku}>
          <div className="product-card-top"><span>{product.category}</span><b>{product.model}</b></div><div className="product-mark" aria-hidden="true">{product.category.slice(0, 2).toUpperCase()}</div>
          <h3>{product.name}</h3><div className="product-badges"><span>{product.protocol}</span><span>{product.salesPath}</span></div>
          <dl><div><dt>Gateway</dt><dd>{product.gateway}</dd></div><div><dt>Power / load</dt><dd>{product.electrical}</dd></div><div><dt>Wiring</dt><dd>{product.neutral}</dd></div></dl>
          {product.launchTier === "Conditional" && <p className="compatibility-note">Compatibility confirmation required before sale.</p>}
          <a href={`https://wa.me/2349011151234?text=${message}`} target="_blank" rel="noopener noreferrer">Request price & availability <span>↗</span></a>
        </article>;
      })}</div>
      {filtered.length === 0 && <div className="empty-results"><h3>No products match those filters.</h3><button onClick={() => { setQuery(""); setCategory("all"); setPath("All"); }}>Reset catalogue</button></div>}
    </section>
  </>;
}
