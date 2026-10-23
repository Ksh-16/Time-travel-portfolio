const skills = {
  Backend: ["Java", "Spring Boot", "Node.js", "Django"],
  Frontend: ["React", "JavaScript", "HTML & CSS"],
  Data: ["Python", "Data Analytics", "PostgreSQL"],
};

const story = [
  { year: "The spark", text: "Started learning software engineering through structured programs and virtual job simulations." },
  { year: "Building", text: "Shipped projects across stacks: a hackathon platform, a Django dashboard, and a Spring Boot sandbox." },
  { year: "Next", text: "Contributing to open source and growing into a backend-focused software engineer with strong data skills." },
];

export default function About() {
  return (
    <div className="page">
      <p className="mono">Year zero</p>
      <h1 className="page-title">About me</h1>
      <p className="page-lead">
        I'm Kanishka, a student building early career experience in software
        engineering and data analytics. I like turning ideas into clean,
        working products, and I learn best by building.
      </p>

      <div className="timeline">
        {story.map((s) => (
          <div key={s.year} className="timeline-item">
            <span className="mono">{s.year}</span>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

      <h2 style={{ margin: "3rem 0 1rem" }}>Skills</h2>
      <div className="grid">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="card">
            <h3 style={{ marginBottom: "0.8rem" }}>{group}</h3>
            {items.map((i) => (
              <span key={i} className="tag">{i}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
