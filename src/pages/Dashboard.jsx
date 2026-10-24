import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { experience } from "../data/experience";

const portals = [
  { to: "/about", year: "Year Zero", title: "About", text: "Where the journey began." },
  { to: "/experience", year: "The Timeline", title: "Experience", text: "Simulations, hackathons, open source." },
  { to: "/projects", year: "Artifacts", title: "Projects", text: "Things I've built along the way." },
  { to: "/certifications", year: "Relics", title: "Certifications", text: "Credentials collected." },
  { to: "/contact", year: "Return Portal", title: "Contact", text: "Send a message across time." },
];

export default function Dashboard() {
  const stats = [
    { num: projects.length, label: "Projects" },
    { num: experience.length, label: "Eras" },
    { num: certifications.length, label: "Certifications" },
  ];

  return (
    <div className="page">
      <section className="hero">
        <p className="mono">Time machine · Online</p>
        <h1>
          Hi, I'm <span>Kanishka</span>.
        </h1>
        <p className="page-lead" style={{ marginTop: "1rem" }}>
          Student developer working across Java backend, React frontend and data
          analytics. Scroll through my timeline, one era at a time.
        </p>
        <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
          <Link to="/projects" className="btn">View projects</Link>
          <Link to="/experience" className="btn ghost">Start the journey</Link>
        </div>
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
    </div>
  );
}
