import Link from "next/link";
import ShopCatalog from "./ShopCatalog";
import SystemBuilder from "./SystemBuilder";
import { products } from "./products";

export const metadata = { title: "Smart Technology Shop | KI Analysix System", description: "Curated TAOS and Tuya-compatible smart products, packages, installation and project configuration." };

const packages = [
  ["Smart lighting starter", "Gateway, two smart switches and a motion sensor", "Apartment · Retrofit"],
  ["Security awareness starter", "Gateway, door sensor, motion sensor and indoor camera", "Home · Small office"],
  ["Automated curtain set", "Curtain motor, track specification, control and commissioning", "Bedroom · Living room"],
  ["Connected guest-room concept", "Lighting, climate, access and scene control designed as one room", "Hotel · Short-let"],
];

export default function ShopPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const categoryCount = new Set(products.map((product) => product.categoryKey)).size;
  const expertMessage = encodeURIComponent("Hello KI Analysix, I need help choosing compatible smart products for my project.\n\nProject type:\nLocation:\nWhat I want to automate:");
  return <main className="shop-page">
    <header className="site-header shop-header"><Link className="brand" href="/" aria-label="KI Analysix System home"><img src={`${base}/ki-analysix-logo.png`} alt="KI Analysix System" /><span className="brand-name">KI Analysix System</span></Link><nav aria-label="Shop navigation"><Link href="/">Home</Link><a href="#catalogue">Products</a><a href="#packages">Packages</a><a href="#builder">Build your system</a></nav><a className="header-cta" href={`https://wa.me/2349011151234?text=${expertMessage}`} target="_blank" rel="noopener noreferrer"><span>Ask an expert</span><span aria-hidden="true">↗</span></a></header>
    <section className="shop-hero"><div className="shop-hero-grid" aria-hidden="true" /><div className="shell shop-hero-layout"><div><p className="eyebrow"><span /> Curated smart technology</p><h1>Choose devices that work <em>together.</em></h1><p>Browse a launch range selected from the TAOS catalogue, with compatibility, wiring and installation guidance built into every buying path.</p><div className="hero-actions"><a className="button button-primary" href="#catalogue">Browse products <span>↓</span></a><a className="button button-ghost" href="#builder">Build your system <span>↗</span></a></div></div><aside><div><span>Launch range</span><strong>{products.length}</strong><small>curated products</small></div><div><span>Product families</span><strong>{categoryCount}</strong><small>from one connected ecosystem</small></div><p>Supplier stock, certification and final Tuya/Smart Life pairing are verified before an order is accepted.</p></aside></div></section>
    <section className="shop-paths shell"><article><span>01</span><h2>Buy directly</h2><p>Selected plug-in or battery-powered devices that need no specialist installation.</p></article><article><span>02</span><h2>Buy with installation</h2><p>Switches, sensors and modules supplied with the right installation and commissioning scope.</p></article><article><span>03</span><h2>Configure a project</h2><p>Multi-room, hospitality, curtain, climate and lighting systems designed before procurement.</p></article></section>
    <ShopCatalog />
    <section className="package-section" id="packages"><div className="shell"><div className="catalogue-heading"><div><p className="section-kicker">Start with an outcome</p><h2>Smart packages</h2></div><p>Packages are design starting points. Exact quantities and models are confirmed after a compatibility review.</p></div><div className="package-grid">{packages.map((item, index) => {
      const packageMessage = encodeURIComponent(`Hello KI Analysix,\n\nI would like to configure the ${item[0]} package.\nIncluded concept: ${item[1]}\nSuitable for: ${item[2]}\n\nNumber of rooms:\nProject location:\nTarget date:`);
      return <article key={item[0]}><span>0{index + 1}</span><small>{item[2]}</small><h3>{item[0]}</h3><p>{item[1]}</p><a href={`https://wa.me/2349011151234?text=${packageMessage}`} target="_blank" rel="noopener noreferrer">Configure this package <b>↗</b></a></article>;
    })}</div></div></section>
    <SystemBuilder />
    <section className="shop-notes"><div className="shell"><p><strong>Important:</strong> Catalogue specifications are supplier-provided and subject to confirmation. Mains-wired products must be assessed and installed by a qualified professional. Life-safety, gas and access-control products require project-specific compliance review.</p></div></section>
    <footer><div className="shell footer-grid"><Link className="brand" href="/"><img src={`${base}/ki-analysix-logo.png`} alt="KI Analysix System" /></Link><p>Integrated systems for safer, smarter and more efficient spaces.</p><div><Link href="/">Home</Link><a href="#catalogue">Shop</a><a href="#builder">Build your system</a><Link href="/blog/">Insights</Link></div></div><div className="shell footer-bottom"><span>© 2026 KI Analysix System</span><span>Lagos, Nigeria</span></div></footer>
  </main>;
}
