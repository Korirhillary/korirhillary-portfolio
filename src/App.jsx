import { useState, useEffect, useRef } from "react";

// ── Asset Imports ──
import korirImg from "./assets/korir.png";
import graduationImg from "./assets/graduation.jpeg";
import lmsImg from "./assets/lms.JPG";
import millImg from "./assets/mill.PNG";
import elimikaImg from "./assets/Elimika.JPG";

const NAV_ITEMS = [
  "HOME",
  "ABOUT",
  "SKILLS",
  "SERVICES",
  "PROJECTS",
  "CONTACT",
];

// ── Update these URLs with your actual links ──
const SOCIALS = {
  github: "https://github.com/", // ← replace with your GitHub profile URL
  linkedin: "https://linkedin.com/in/", // ← replace with your LinkedIn profile URL
  email: "mailto:available@request.com",
};

const SKILLS = {
  "Programming Languages": ["Python", "JavaScript", "SQL"],
  "Backend Development": [
    "Flask",
    "FastAPI",
    "RESTful API Development",
    "Backend Web Development",
  ],
  "Frontend Development": ["React.js", "HTML5", "CSS3", "JavaScript (ES6)"],
  Databases: ["PostgreSQL", "SQLite", "Database Design & Management"],
  Concepts: [
    "OOP",
    "Web App Development",
    "API Integration",
    "Version Control (Git)",
  ],
};

const SKILL_BARS = [
  { label: "Python / Flask", years: "3 years of experience", pct: 90 },
  { label: "React.js / Frontend", years: "2 years of experience", pct: 80 },
  { label: "PostgreSQL / SQLite", years: "2 years of experience", pct: 85 },
  { label: "RESTful API Design", years: "2 years of experience", pct: 88 },
  { label: "JavaScript (ES6)", years: "3 years of experience", pct: 82 },
  { label: "Git / Version Control", years: "3 years of experience", pct: 92 },
];

const SERVICES = [
  {
    icon: "⚙️",
    title: "Backend Development",
    desc: "Building scalable, secure backend systems and RESTful APIs using Python, Flask, and FastAPI.",
  },
  {
    icon: "🗄️",
    title: "Database Management",
    desc: "Designing and managing relational databases with PostgreSQL and SQLite for efficient data storage.",
  },
  {
    icon: "🖥️",
    title: "Full-Stack Web Apps",
    desc: "End-to-end web application development combining React.js frontends with Python-powered backends.",
  },
  {
    icon: "🔗",
    title: "API Integration",
    desc: "Seamless integration of third-party APIs and development of custom API solutions for your platform.",
  },
];

const PROJECTS = [
  {
    date: "Sep 2023 – Feb 2024",
    tag: "FULL-STACK",
    title: "Elimika — Online Learning Platform",
    tech: ["React.js", "Python", "Flask", "PostgreSQL"],
    desc: "A full-stack web application enabling users to access online learning resources, book events, enroll in courses, and leave feedback.",
    features: [
      "User authentication (signup/login/logout)",
      "Course enrollment functionality",
      "Event booking system",
      "Feedback & review system",
    ],
    color: "#e8683a",
    image: elimikaImg,
    liveUrl: "#", // ← replace with live deployment URL
    githubUrl: "https://github.com/", // ← replace with repo URL
  },
  {
    date: "2024",
    tag: "BACKEND",
    title: "Library Management System",
    tech: ["Python", "Flask", "SQLite", "REST API"],
    desc: "A comprehensive LMS enabling librarians to manage books, members, and borrowing records with an intuitive admin dashboard.",
    features: [
      "Book catalog & inventory tracking",
      "Member registration & management",
      "Borrowing & return workflows",
      "Overdue notifications & reporting",
    ],
    color: "#2a6496",
    image: lmsImg,
    liveUrl: "#", // ← replace with live deployment URL
    githubUrl: "https://github.com/", // ← replace with repo URL
  },
  {
    date: "2024",
    tag: "E-COMMERCE",
    title: "Mill — E-Commerce Website",
    tech: ["React.js", "Python", "Flask", "PostgreSQL"],
    desc: "A modern e-commerce platform for product discovery, cart management, and secure checkout experiences.",
    features: [
      "Product listing & search functionality",
      "Shopping cart & checkout flow",
      "User accounts & order history",
      "Admin product management panel",
    ],
    color: "#27ae60",
    image: millImg,
    liveUrl: "#", // ← replace with live deployment URL
    githubUrl: "https://github.com/", // ← replace with repo URL
  },
];

const EXPERIENCE = [
  {
    role: "Accountant",
    company: "Thrive Pharmaceuticals LTD",
    period: "Nov 2021 – Aug 2023",
    points: [
      "Performed financial data analysis to support business decision making.",
      "Managed financial records and bookkeeping systems.",
      "Prepared financial statements, reports, and statutory filings.",
      "Implemented reconciliation controls for budgets and payments.",
    ],
  },
  {
    role: "Accounting Assistant",
    company: "Thrive Pharmaceuticals LTD",
    period: "Jul 2020 – Oct 2021",
    points: [
      "Processed accounting transactions and maintained financial records.",
      "Conducted monthly bank reconciliations and financial reporting.",
      "Managed accounts payable and supplier payments.",
    ],
  },
  {
    role: "Finance Intern",
    company: "Thrive Pharmaceuticals LTD",
    period: "Jan 2020 – May 2020",
    points: [
      "Prepared VAT returns and processed supplier invoices.",
      "Maintained purchase records and reconciled bank accounts.",
      "Assisted with financial reporting and documentation.",
    ],
  },
];

// ── SVG Icons ──
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.72.08-.72 1.19.08 1.82 1.22 1.82 1.22 1.06 1.82 2.78 1.29 3.46.99.1-.77.41-1.29.75-1.59-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.42v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="14"
    height="14"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ── Hooks ──
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function AnimatedBar({ pct, delay = 0, inView }) {
  return (
    <div className="bar-track">
      <div
        className="bar-fill"
        style={{
          width: inView ? `${pct}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("HOME");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [typed, setTyped] = useState("");
  const [heroVisible, setHeroVisible] = useState(false);
  const [skillsRef, skillsInView] = useInView();
  const sectionRefs = useRef({});
  const titles = [
    "Software Developer",
    "Backend Engineer",
    "Full-Stack Builder",
    "API Architect",
  ];

  // Typing animation
  useEffect(() => {
    setHeroVisible(true);
    let i = 0;
    let deleting = false;
    let tIdx = 0;
    const tick = () => {
      const word = titles[tIdx];
      if (!deleting) {
        i++;
        setTyped(word.slice(0, i));
        if (i > word.length) {
          deleting = true;
          setTimeout(tick, 1200);
          return;
        }
      } else {
        i--;
        setTyped(word.slice(0, i));
        if (i === 0) {
          deleting = false;
          tIdx = (tIdx + 1) % titles.length;
        }
      }
      setTimeout(tick, deleting ? 60 : 110);
    };
    const t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const key of NAV_ITEMS) {
        const el = sectionRefs.current[key];
        if (
          el &&
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        )
          setActive(key);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };
  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="app-root">
      {/* ── SIDEBAR ── */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-avatar">
          <div className="avatar-ring">
            <img src={korirImg} alt="Korir Hillary" className="avatar-img" />
          </div>
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`nav-item ${active === item ? "nav-active" : ""}`}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-socials">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href={SOCIALS.email} className="social-icon" title="Email">
            <EmailIcon />
          </a>
        </div>
      </aside>

      {/* Sidebar toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen((p) => !p)}
      >
        {sidebarOpen ? "❮" : "❯"}
      </button>

      {/* ── MAIN ── */}
      <main className={`main-content ${sidebarOpen ? "" : "full"}`}>
        {/* ── HERO ── */}
        <section
          ref={setRef("HOME")}
          id="HOME"
          className="section hero-section"
        >
          <div className="hero-bg" />
          <div className={`hero-inner ${heroVisible ? "hero-visible" : ""}`}>
            <div className="hero-avatar-large">
              <div className="hero-avatar-ring">
                <img
                  src={korirImg}
                  alt="Korir Hillary"
                  className="hero-avatar-img"
                />
              </div>
            </div>
            <h1 className="hero-name">
              KORIR <span className="accent">HILLARY</span>
            </h1>
            <p className="hero-subtitle">
              I'm a{" "}
              <span className="typed-text">
                {typed}
                <span className="cursor">|</span>
              </span>
            </p>
            <div className="hero-location">📍 Nairobi, Kenya</div>

            {/* Social buttons on hero */}
            <div className="hero-social-row">
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn hero-social-btn--linkedin"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>

            <button className="hero-cta" onClick={() => scrollTo("CONTACT")}>
              Get In Touch
            </button>
            <div className="hero-scroll-hint" onClick={() => scrollTo("ABOUT")}>
              <span>▼</span>
              <span>▼</span>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section
          ref={setRef("ABOUT")}
          id="ABOUT"
          className="section about-section"
        >
          <div className="section-header">
            <div className="section-bar" />
            <div>
              <h2 className="section-title">ABOUT ME</h2>
              <p className="section-sub">Main information about me</p>
            </div>
          </div>
          <div className="about-grid">
            {/* Graduation photo */}
            <div className="about-image-col">
              <div className="about-photo-wrap">
                <img
                  src={graduationImg}
                  alt="Korir Hillary — Graduation"
                  className="about-photo"
                />
                <div className="about-photo-badge">🎓 Software Engineer</div>
              </div>
            </div>

            <div className="about-text-col">
              <h3 className="about-heading">
                I'm <span className="accent">Korir Hillary</span> — a{" "}
                <span className="accent">Backend Engineer</span>
              </h3>
              <p className="about-body">
                Motivated Software Developer specializing in backend development
                and database management with experience building full-stack web
                applications using{" "}
                <strong>Python, Flask, JavaScript, and React.js</strong>.
                Skilled in designing RESTful APIs, building scalable backend
                systems, and managing relational databases such as PostgreSQL
                and SQLite.
              </p>
              <p className="about-body">
                Strong analytical background with experience in data analysis,
                financial systems, and problem solving, combined with modern
                software development practices to build efficient and
                user-friendly applications.
              </p>
              <div className="about-highlights">
                {[
                  "Backend System Development",
                  "API Design & Integration",
                  "Database Architecture",
                  "Agile Team Collaboration",
                ].map((s) => (
                  <span key={s} className="highlight-chip">
                    {s}
                  </span>
                ))}
              </div>
              <div className="edu-block">
                <h4 className="edu-title">Education</h4>
                <div className="edu-item">
                  <span className="edu-school">Moringa School</span>
                  <span className="edu-degree">
                    Software Engineering — Full-Stack Development
                  </span>
                  <span className="edu-period">Sep 2023 – Feb 2024</span>
                </div>
                <div className="edu-item">
                  <span className="edu-school">
                    Masinde Muliro University of Science and Technology
                  </span>
                  <span className="edu-degree">BSc. Economics</span>
                  <span className="edu-period">2015 – 2019</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section
          ref={(el) => {
            setRef("SKILLS")(el);
            skillsRef.current = el;
          }}
          id="SKILLS"
          className="section skills-section"
        >
          <div className="section-header">
            <div className="section-bar" />
            <div>
              <h2 className="section-title">SKILLS</h2>
              <p className="section-sub">
                Some of my key skills and competencies
              </p>
            </div>
          </div>
          <div className="skills-grid">
            <div className="skills-left">
              <div className="competencies">
                <h4 className="comp-heading">Core Competencies</h4>
                <ul className="comp-list">
                  <li>
                    Ability to multi-task and meet deadlines under pressure.
                  </li>
                  <li>
                    Proactive and confident with a positive "can-do" attitude.
                  </li>
                  <li>
                    Clearly communicates technical data to non-technical
                    clients.
                  </li>
                  <li>Continuously monitors industry trends and standards.</li>
                </ul>
              </div>
              <div className="skill-tags-section">
                {Object.entries(SKILLS).map(([cat, items]) => (
                  <div key={cat} className="skill-cat">
                    <span className="skill-cat-label">{cat}</span>
                    <div className="skill-chips">
                      {items.map((s) => (
                        <span key={s} className="skill-chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-right" ref={skillsRef}>
              {SKILL_BARS.map((s, i) => (
                <div key={s.label} className="skill-bar-row">
                  <div className="skill-bar-meta">
                    <span className="skill-bar-label">{s.label}</span>
                    <span className="skill-bar-years">{s.years}</span>
                    <span className="skill-bar-pct">{s.pct}%</span>
                  </div>
                  <AnimatedBar
                    pct={s.pct}
                    delay={i * 120}
                    inView={skillsInView}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          ref={setRef("SERVICES")}
          id="SERVICES"
          className="section services-section"
        >
          <div className="section-header">
            <div className="section-bar" />
            <div>
              <h2 className="section-title">SERVICES</h2>
              <p className="section-sub">What I do best</p>
            </div>
          </div>
          <div className="services-grid">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="service-card">
                <div className="service-icon">{svc.icon}</div>
                <h3 className="service-title">{svc.title}</h3>
                <p className="service-desc">{svc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── QUOTE ── */}
        <section className="quote-section">
          <div className="quote-bg" />
          <div className="quote-inner">
            <div className="quote-mark">"</div>
            <blockquote className="quote-text">
              Take up one idea. Make that one idea your life — think of it,
              dream of it, live on that idea. Let the brain, muscles, nerves,
              every part of your body, be full of that idea, and just leave
              every other idea alone. This is the way to success.
            </blockquote>
            <cite className="quote-author">— Swami Vivekananda</cite>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section
          ref={setRef("PROJECTS")}
          id="PROJECTS"
          className="section projects-section"
        >
          <div className="section-header">
            <div className="section-bar" />
            <div>
              <h2 className="section-title">PROJECTS COMPLETED</h2>
              <p className="section-sub">
                Hover over a project image to preview — or use the links below
                each card
              </p>
            </div>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <div key={p.title} className="project-card">
                {/* Image + hover overlay */}
                <div className="project-img-wrap">
                  <img src={p.image} alt={p.title} className="project-img" />
                  <div className="project-img-overlay">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn overlay-btn--live"
                    >
                      <ExternalLinkIcon /> Live Preview
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn overlay-btn--code"
                    >
                      <GitHubIcon /> View Code
                    </a>
                  </div>
                  {/* Floating badges on image */}
                  <div className="project-img-badges">
                    <span
                      className="project-tag-img"
                      style={{ background: p.color }}
                    >
                      {p.tag}
                    </span>
                    <span className="project-date-img">{p.date}</span>
                  </div>
                </div>

                <div className="project-card-body">
                  <h3 className="project-title">{p.title}</h3>
                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="project-desc">{p.desc}</p>
                  <ul className="project-features">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  {/* Link row always visible */}
                  <div className="project-links">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link--live"
                    >
                      <ExternalLinkIcon /> Live Preview
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link--code"
                    >
                      <GitHubIcon /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="section experience-section">
          <div className="section-header">
            <div className="section-bar" />
            <div>
              <h2 className="section-title">EXPERIENCE</h2>
              <p className="section-sub">Professional background</p>
            </div>
          </div>
          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p className="timeline-company">
                    {exp.company} — Nairobi, Kenya
                  </p>
                  <ul className="timeline-points">
                    {exp.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          ref={setRef("CONTACT")}
          id="CONTACT"
          className="section contact-section"
        >
          <div className="section-header">
            <div className="section-bar" />
            <div>
              <h2 className="section-title">CONTACT ME</h2>
              <p className="section-sub">Get in touch with me</p>
            </div>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-info-heading">Get in Touch</h3>
              <div className="contact-detail">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>Available on Request</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Phone</strong>
                  <p>Available on Request</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">💼</span>
                <div>
                  <strong>LinkedIn</strong>
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-icon">🐙</span>
                <div>
                  <strong>GitHub</strong>
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    View Repositories →
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-input"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-input form-textarea"
                  placeholder="Your Message"
                  rows={5}
                />
              </div>
              <button className="form-submit">✉ Send Message</button>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <p>Copyright © 2026 Korir Hillary — All Rights Reserved</p>
          <div className="footer-socials">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href={SOCIALS.email} className="footer-social" title="Email">
              <EmailIcon />
            </a>
          </div>
        </footer>
      </main>

      {/* Scroll to top */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ▲
      </button>
    </div>
  );
}