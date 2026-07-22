import Link from "next/link";

export const metadata = {
  title: "Loxone, Tuya or both? | KI Analysix System",
  description: "How to choose the right smart-home automation platform for a residential or hospitality project.",
};

export default function ArticlePage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <main className="article-page">
      <header className="site-header blog-header">
        <Link className="brand" href="/" aria-label="KI Analysix System home">
          <img src={`${base}/ki-analysix-logo.png`} alt="KI Analysix System" />
          <span className="brand-name">KI Analysix System</span>
        </Link>
        <nav><Link href="/blog/">All insights</Link><Link href="/shop/">Shop</Link><a href="mailto:info@ki-analysix.com">Contact</a></nav>
      </header>
      <article className="article-shell">
        <p className="section-kicker light">Smart homes · 22 July 2026</p>
        <h1>Loxone, Tuya or both? Choosing the right smart-home platform</h1>
        <p className="article-lead">The best automation system is not the one with the longest feature list. It is the one that fits the building, the people using it and the team supporting it.</p>
        <h2>Start with the experience</h2>
        <p>Define what should happen when someone arrives, leaves, sleeps, hosts guests or responds to an alarm. The technology decision should follow these scenarios—not lead them.</p>
        <h2>Where Loxone fits</h2>
        <p>Loxone is well suited to projects that need tightly integrated, dependable control across lighting, climate, shading, security and energy. Its wired-first approach is especially valuable in new builds and major renovations where infrastructure can be planned early.</p>
        <h2>Where Tuya fits</h2>
        <p>Tuya’s broad device ecosystem makes it useful for flexible retrofits, focused upgrades and projects with more accessible entry budgets. Careful product selection, network design and commissioning remain essential.</p>
        <h2>A hybrid can be deliberate</h2>
        <p>Some properties benefit from a robust core system for critical functions and selected wireless devices for convenience or later expansion. The key is to define clear system boundaries and one support plan.</p>
        <div className="article-cta"><h2>Planning a connected property?</h2><p>We can help translate the experience you want into a practical, supportable architecture.</p><a className="button button-primary" href="mailto:info@ki-analysix.com?subject=Smart%20home%20consultation">Discuss your project <span>↗</span></a></div>
      </article>
    </main>
  );
}
