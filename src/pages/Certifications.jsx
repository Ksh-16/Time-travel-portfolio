import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <div className="page">
      <p className="mono">Relics</p>
      <h1 className="page-title">Certifications</h1>
      <p className="page-lead">Credentials collected along the journey.</p>

      <div className="grid">
        {certifications.map((c) => (
          <div key={c.id} className="card">
            <div className="badge">{c.issuer.charAt(0)}</div>
            <p className="mono">{c.year}</p>
            <h3 style={{ margin: "0.3rem 0" }}>{c.title}</h3>
            <p style={{ color: "var(--text-muted)" }}>{c.issuer}</p>
            {c.verify && (
              <p style={{ marginTop: "0.8rem" }}>
                <a href={c.verify} target="_blank" rel="noreferrer">Verify credential →</a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
