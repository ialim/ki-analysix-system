import Link from "next/link";

const posts = [
  {
    slug: "choosing-the-right-smart-home-platform",
    category: "Smart homes",
    date: "22 July 2026",
    title: "Loxone, Tuya or both? Choosing the right smart-home platform",
    excerpt: "A practical framework for matching automation architecture to the property, experience, budget and long-term support needs.",
  },
];

export const metadata = {
  title: "Insights | KI Analysix System",
  description: "Practical thinking on smart homes, hospitality technology, security, networking and integrated systems.",
};

export default function BlogPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <main className="blog-page">
      <header className="site-header blog-header">
        <Link className="brand" href={`${base}/`}><span className="brand-mark" /><span>KI ANALYSIX</span></Link>
        <nav><Link href={`${base}/`}>Home</Link><a href="mailto:info@ki-analysix.com">Contact</a></nav>
      </header>
      <section className="blog-hero shell">
        <p className="section-kicker light">KI Analysix insights</p>
        <h1>Clear thinking for connected spaces.</h1>
        <p>Practical guidance on smart homes, hospitality technology, security, networking and integrated infrastructure.</p>
      </section>
      <section className="post-list shell">
        {posts.map((post) => (
          <article className="post-card" key={post.slug}>
            <div><span>{post.category}</span><time>{post.date}</time></div>
            <h2>{post.title}</h2><p>{post.excerpt}</p>
            <Link href={`${base}/blog/${post.slug}/`}>Read article <span>→</span></Link>
          </article>
        ))}
      </section>
    </main>
  );
}
