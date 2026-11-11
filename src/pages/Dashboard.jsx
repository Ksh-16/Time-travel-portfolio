import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { experience } from "../data/experience";
import Typewriter from "../components/Typewriter";
import GitHubActivity from "../components/GitHubActivity";

// The 3D scene loads as its own chunk, so other pages don't pay for it.
const HeroBackground = lazy(() => import("../components/HeroBackground"));

// Hero background scene (see heroScenes.js)
const HERO_3D = "orbit";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const portals = [
  { to: "/about", year: "Year Zero", title: "About", text: "Where the journey began." },
  { to: "/experience", year: "The Timeline", title: "Experience", text: "Simulations, hackathons, open source." },
  { to: "/projects", year: "Artifacts", title: "Projects", text: "Things I've built along the way." },
  { to: "/certifications", year: "Relics", title: "Certifications", text: "Credentials collected." },
  { to: "/contact", year: "Return Portal", title: "Contact", text: "Send a message across time." },
];
   const roles = ["React frontend", "Web Dev", "Data analytics", "Open source"];
export default function Dashboard() {
  const stats = [
    { num: projects.length, label: "Projects" },
    { num: experience.length, label: "Eras" },
    { num: certifications.length, label: "Certifications" },
  ];

  return (
    <div className="page dashboard">
      <section className="hero hero-stage">
        <Suspense fallback={null}>
          <HeroBackground variant={HERO_3D} />
        </Suspense>

        <motion.div className="hero-content" variants={stagger} initial="hidden" animate="show">
          <motion.p variants={rise} className="mono contact-eyebrow">
            <span className="pulse-dot" /> Time machine · Online
          </motion.p>
          <motion.h1 variants={rise}>
            Hi, I'm <span>Kanishka</span>.
          </motion.h1>
          <motion.p variants={rise} className="page-lead" style={{ marginTop: "1rem" }}>
            Student developer into <strong><Typewriter words={roles} /></strong>.
            Scroll through my timeline, one era at a time.
          </motion.p>
          <motion.div variants={rise} style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <Link to="/projects" className="btn">View projects</Link>
            <Link to="/experience" className="btn ghost">Start the journey</Link>
            <a href="/Kanishka-Resume.pdf" download className="btn ghost">Download resume</a>
          </motion.div>
        </motion.div>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div key={s.label} className="card stat">
            <div className="num">{s.num}</div>
            <p className="mono">{s.label}</p>
          </div>
        ))}
      </section>

      <p className="mono" style={{ marginBottom: "1rem" }}>Choose your destination</p>
      <section className="grid">
        {portals.map((p) => (
          <Link key={p.to} to={p.to} className="card portal">
            <span className="mono year">{p.year}</span>
            <h3>{p.title}</h3>
            <p style={{ color: "var(--text-muted)" }}>{p.text}</p>
          </Link>
        ))}
      </section>
      <GitHubActivity />
    </div>
  );
}