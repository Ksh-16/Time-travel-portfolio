import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = projects.find((x) => x.id === id);

  if (!p) {
    return (
      <div className="page">
        <h1 className="page-title">Artifact not found</h1>
        <p className="page-lead">No project with that id exists in this era.</p>
        <Link to="/projects" className="btn">← All projects</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/projects" className="mono">← All projects</Link>
      <p className="mono" style={{ marginTop: "1.2rem" }}>{p.year} · {p.category}</p>
      <h1 className="page-title">{p.title}</h1>
      <p className="page-lead">{p.summary}</p>

      {p.image && (
        <img
          src={p.image}
          alt={`${p.title} screenshot`}
          style={{ width: "100%", borderRadius: "16px", margin: "1.5rem 0" }}
        />
      )}

      <div className="card" style={{ marginTop: "1.5rem" }}>
        {p.role && (
          <>
            <p className="mono">My role</p>
            <p style={{ marginBottom: "1.2rem" }}>{p.role}</p>
          </>
        )}
        {p.problem && (
          <>
            <p className="mono">The problem</p>
            <p style={{ marginBottom: "1.2rem" }}>{p.problem}</p>
          </>
        )}
        {p.highlights && (
          <>
            <p className="mono">Highlights</p>
            <ul style={{ margin: "0.4rem 0 1.2rem 1.1rem", listStyle: "disc" }}>
              {p.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </>
        )}
        <p className="mono">Stack</p>
        <div style={{ marginTop: "0.4rem" }}>
          {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
        </div>
        <p style={{ marginTop: "1.2rem", display: "flex", gap: "1rem" }}>
          {p.links.live && <a href={p.links.live} target="_blank" rel="noreferrer">Live →</a>}
          {p.links.github && <a href={p.links.github} target="_blank" rel="noreferrer">GitHub →</a>}
        </p>
      </div>
    </div>
  );
}