import { useState } from "react";
import { projects, categories } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="page">
      <p className="mono">Artifacts</p>
      <h1 className="page-title">Projects</h1>
      <p className="page-lead">Things I've built, from hackathons to dashboards.</p>

      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`filter${active === c ? " active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {shown.map((p) => (
          <article key={p.id} className="card">
            <p className="mono">{p.year} · {p.category}</p>
            <h3 style={{ margin: "0.4rem 0 0.6rem", fontSize: "1.7rem" }}>{p.title}</h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>{p.summary}</p>
            <div>
              {p.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
            <p style={{ marginTop: "0.8rem", display: "flex", gap: "1rem" }}>
              {p.links.live && <a href={p.links.live} target="_blank" rel="noreferrer">Live →</a>}
              {p.links.github && <a href={p.links.github} target="_blank" rel="noreferrer">GitHub →</a>}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
