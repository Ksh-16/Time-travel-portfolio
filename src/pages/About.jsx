const skills = {
  Backend: ["Java", "Node.js", "Django"],
  Frontend: ["React", "JavaScript", "HTML & CSS"],
  Data: ["Python", "Data Analytics", "PostgreSQL", "MySql"],
  Languages: ["Java", "C++", "Python", "C"],
};

const story = [
  { year: "Era I · The Curious Student", text: "A school student who loved asking how things work. I took part in several science fair competitions, got selected at the state level, and attended a personality development camp that built my confidence and communication." },
  { year: "Era II · The Coding Spark", text: "Then I found programming and started my coding journey. From the very start I took part in hackathons, learning through structured programs and virtual job simulations and shipping projects across stacks: a financial knowledge platform, a Django clone project." },
  { year: "Era III · Taking the Lead", text: "I stepped into positions of responsibility, joining my college's GDG community as a DSA lead to guide fellow members, and started applying for internships." },
  { year: "Next", text: "Contributing to open source and growing into a backend-focused software engineer with strong data skills." },
];

const education = [
  {
    level: "University",
    name: "Guru Gobind Singh Indraprastha University",
    detail: "B.Tech in Computer Science & Engineering",
    note: "Bhagwan Parshuram Institute of Technology",
    period: "2025-2029", 
    scores: [{ label: "CGPA", value: "8.77" }],
  },
  {
    level: "School",
    name: "MCLSBM",
    detail: "Primary and high school education",
    note: "",
    period: "2021-2025",
    scores: [
      { label: "Class 12", value: "84.4%" },
      { label: "Class 10", value: "94%" },
    ],
  },
];
export default function About() {
  return (
    <div className="page">
            <div className="about-intro">
        <img
          className="about-photo"
          src="/profile_img.jpeg"
          alt="Portrait of Kanishka"
          width="200"
          height="200"
        />
        <div>
          <p className="mono">Year zero</p>
          <h1 className="page-title">About me</h1>
          <p className="page-lead">
            I'm Kanishka, a student building early career experience in software
            engineering and data analytics. I like turning ideas into clean,
            working products, and I learn best by building.
          </p>
        </div>
      </div>

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
                 <h2 style={{ margin: "3rem 0 1rem" }}>Education</h2>
      <div className="grid">
        {education.map((e) => (
          <div key={e.name} className="card">
            <p className="mono">{e.level}{e.period && ` · ${e.period}`}</p>
            <h3 style={{ margin: "0.3rem 0" }}>{e.name}</h3>
            <p style={{ color: "var(--accent)", fontWeight: 600 }}>{e.detail}</p>
            {e.note && <p style={{ color: "var(--text-muted)" }}>{e.note}</p>}
            <div style={{ marginTop: "0.8rem" }}>
              {e.scores.map((s) => (
                <span key={s.label} className="tag">{s.label}: {s.value}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
