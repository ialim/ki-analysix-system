const solutions = [
  {
    number: "01",
    title: "Smart living & hospitality",
    copy: "Whole-home and guest-room automation for lighting, climate, access, entertainment and energy—designed around how people actually live and stay.",
    tags: ["Loxone", "Tuya", "GRMS"],
  },
  {
    number: "02",
    title: "Electronic security",
    copy: "Integrated surveillance, access control, intrusion detection and screening systems with clearer visibility and faster response.",
    tags: ["CCTV", "Access", "Monitoring"],
  },
  {
    number: "03",
    title: "Networks & communication",
    copy: "Dependable LAN, WLAN, fibre, telephony and conference infrastructure engineered for the systems and people that rely on it.",
    tags: ["LAN / WAN", "Fibre", "IP telephony"],
  },
  {
    number: "04",
    title: "Audio visual & public address",
    copy: "Purpose-built sound, video distribution, signage, paging and room-control experiences for homes, hotels and commercial spaces.",
    tags: ["AV", "PA", "Digital signage"],
  },
  {
    number: "05",
    title: "Life safety systems",
    copy: "Fire detection, voice evacuation and panic-alert systems designed to communicate clearly when every second matters.",
    tags: ["Fire", "Evacuation", "Panic alert"],
  },
  {
    number: "06",
    title: "Software, data & power",
    copy: "Business software, cloud platforms, analytics and renewable-power systems that complete the operational picture.",
    tags: ["ERP", "Cloud", "Solar"],
  },
];

const industries = [
  ["Residential", "Comfort, security and energy control that disappears into everyday living."],
  ["Hospitality", "Connected guest journeys and efficient rooms, from arrival to checkout."],
  ["Commercial", "Reliable building infrastructure that supports productive teams and operations."],
  ["Government", "Scalable infrastructure for safer, accountable and resilient public services."],
  ["Healthcare & education", "Secure communication, data and learning environments built for continuity."],
  ["Industry & logistics", "Visibility, control and business systems for complex, moving operations."],
];

const deliveryProcess = [
  ["Discover", "We map the space, users, risks and operational goals."],
  ["Design", "We engineer one coordinated system and a clear implementation path."],
  ["Deploy", "We install, integrate and test against the agreed experience."],
  ["Support", "We maintain performance, document changes and plan the next stage."],
];

export default function Home() {
  const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main style={{ "--hero-url": `url("${publicBasePath}/ki-analysix-hero.webp")` } as React.CSSProperties}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="KI Analysix System home">
          <img src={`${publicBasePath}/ki-analysix-logo.png`} alt="KI Analysix System" />
          <span className="brand-name">KI Analysix System</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#solutions">Solutions</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href={`${publicBasePath}/blog/`}>Insights</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="tel:+2349011151234">
          <span>Talk to us</span>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content shell">
          <p className="eyebrow"><span /> Intelligent infrastructure. Built around you.</p>
          <h1>Secure.<br />Connect.<br />Automate.</h1>
          <p className="hero-copy">
            Integrated security, networks, smart homes and hospitality systems—engineered as one dependable experience.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Plan your project <span>↗</span></a>
            <a className="button button-ghost" href="#solutions">Explore solutions <span>↓</span></a>
          </div>
        </div>
        <div className="signal-card signal-one" aria-hidden="true">
          <span className="signal-dot" /> System approach
          <strong>One integrated architecture</strong>
        </div>
        <div className="signal-card signal-two" aria-hidden="true">
          <span className="signal-dot" /> Deployment range
          <strong>Premium to accessible</strong>
        </div>
        <div className="hero-foot shell">
          <span>LOXONE</span><i />
          <span>TUYA</span><i />
          <span>MULTI-BRAND INTEGRATION</span>
        </div>
      </section>

      <section className="intro-section">
        <div className="shell intro-grid">
          <div>
            <p className="section-kicker">One partner. One system.</p>
            <h2>Technology should make a space feel simpler—not more complicated.</h2>
          </div>
          <div className="intro-copy">
            <p>KI Analysix System designs, deploys and manages connected technology for homes, hotels, businesses and public organisations.</p>
            <p>We combine strong infrastructure with carefully selected devices—from premium Loxone automation to flexible Tuya ecosystems—so every solution fits its purpose, scale and budget.</p>
            <a className="text-link" href="#about">Why KI Analysix <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker light">Integrated capabilities</p>
              <h2>Solutions that work together.</h2>
            </div>
            <p>From the network beneath the walls to the interface in your hand, we coordinate every layer.</p>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.number}>
                <div className="card-top"><span>{solution.number}</span><span>↗</span></div>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <div className="tag-row">
                  {solution.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="living-section">
        <div className="living-visual" aria-hidden="true">
          <div className="room-panel">
            <span className="room-label">SCENE / ARRIVAL</span>
            <strong>Welcome home</strong>
            <div className="room-stats">
              <span>LIGHTS<b>68%</b></span>
              <span>CLIMATE<b>22°</b></span>
              <span>SECURITY<b>ARMED</b></span>
            </div>
          </div>
        </div>
        <div className="living-copy">
          <p className="section-kicker">Smart living + hospitality</p>
          <h2>Premium when it should be. Practical where it matters.</h2>
          <p>There is no single “best” automation platform—only the right architecture for the project. We specify robust wired systems, flexible wireless ecosystems or a considered combination.</p>
          <div className="platform-row">
            <div><strong>LOXONE</strong><span>Integrated, premium building automation</span></div>
            <div><strong>TUYA</strong><span>Flexible, accessible smart-device ecosystem</span></div>
          </div>
          <a className="button button-dark" href="#contact">Discuss your space <span>↗</span></a>
        </div>
      </section>

      <section className="process-section" id="about">
        <div className="shell">
          <div className="section-heading dark-text">
            <div>
              <p className="section-kicker">How we deliver</p>
              <h2>Designed beyond installation day.</h2>
            </div>
            <p>Reliable outcomes come from understanding, documenting and testing the full system—not just fitting devices.</p>
          </div>
          <div className="process-grid">
            {deliveryProcess.map((item, index) => (
              <article key={item[0]}>
                <span>0{index + 1}</span>
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </article>
            ))}
          </div>
          <div className="values-band">
            <p>Our design principles</p>
            <span>Reliability</span><i />
            <span>Security</span><i />
            <span>Scalability</span><i />
            <span>User experience</span>
          </div>
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="shell industries-layout">
          <div className="industries-title">
            <p className="section-kicker light">Where we work</p>
            <h2>Systems shaped around real operations.</h2>
            <p>Each environment has different people, pressures and priorities. Our approach starts there.</p>
          </div>
          <div className="industry-list">
            {industries.map((industry, index) => (
              <article key={industry[0]}>
                <span>0{index + 1}</span>
                <h3>{industry[0]}</h3>
                <p>{industry[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="section-kicker">Start a conversation</p>
            <h2>What should your space do better?</h2>
            <p className="contact-lead">Tell us what you are planning. We’ll help turn the requirement into one clear, scalable system.</p>
            <a className="button button-primary" href="mailto:info@ki-analysix.com?subject=Project%20enquiry">Send a project enquiry <span>↗</span></a>
          </div>
          <address>
            <div><span>CALL</span><a href="tel:+2349011151234">+234 901 115 1234</a></div>
            <div><span>EMAIL</span><a href="mailto:info@ki-analysix.com">info@ki-analysix.com</a></div>
            <div><span>VISIT</span><p>26 Olufemi Street, off Nathan,<br />Surulere, Lagos, Nigeria</p></div>
          </address>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <a className="brand" href="#top" aria-label="KI Analysix System home">
            <img src={`${publicBasePath}/ki-analysix-logo.png`} alt="KI Analysix System" />
          </a>
          <p>Integrated systems for safer, smarter and more efficient spaces.</p>
          <div><a href="#solutions">Solutions</a><a href="#industries">Industries</a><a href="#about">About</a><a href={`${publicBasePath}/blog/`}>Insights</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 KI Analysix System</span><span>Lagos, Nigeria</span></div>
      </footer>
    </main>
  );
}
