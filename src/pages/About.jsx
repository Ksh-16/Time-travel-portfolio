import { motion } from "framer-motion";

// Small line icons, same style as the Contact page.
const Icon = {
  cap: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
    </svg>
  ),
};

// Quick facts shown next to the portrait.
const facts = [
  { icon: "cap", label: "University", value: "B.Tech CSE · GGSIPU, batch of 2029" },
  { icon: "award", label: "Academics", value: "CGPA 8.77" },
  { icon: "code", label: "Focus", value: "Backend and data analytics" },
];

const skills = [
  { name: "Backend", icon: "server", items: ["Java", "Node.js", "Django"] },
  { name: "Frontend", icon: "layout", items: ["React", "JavaScript", "HTML & CSS"] },
  { name: "Data", icon: "chart", items: ["Python", "Data Analytics", "PostgreSQL", "MySql"] },
  { name: "Languages", icon: "code", items: ["Java", "C++", "Python", "C"] },
];

// Each era is shown as a card, all visible at once (no sideways scrolling).
const story = [
  { num: "I", title: "The Curious Student", text: "A school student who loved asking how things work. I took part in several science fair competitions, got selected at the state level, and attended a personality development camp that built my confidence and communication." },
  { num: "II", title: "The Coding Spark", text: "Then I found programming and started my coding journey. From the very start I took part in hackathons, learning through structured programs and virtual job simulations and shipping projects across stacks: a financial knowledge platform, a Django clone project." },
  { num: "III", title: "Taking the Lead", text: "I stepped into positions of responsibility, joining my college's GDG community as a DSA lead to guide fellow members, and started applying for internships." },
  { num: "Next", title: "What's ahead", text: "Contributing to open source and growing into a backend-focused software engineer with strong data skills." },
];

const education = [
  {
    level: "University",
    icon: "cap",
    name: "Guru Gobind Singh Indraprastha University",
    detail: "B.Tech in Computer Science & Engineering",
    note: "Bhagwan Parshuram Institute of Technology",
    period: "2025-2029",
    scores: [{ label: "CGPA", value: "8.77" }],
  },
  {
    level: "School",
    icon: "book",
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

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
// For sections further down: fade in as they come into view.
const inView = {
  variants: stagger,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.12 },
};

export default function About() {
  return (
    <div className="page about">
      {/* ---------- intro: text and facts on the left, portrait card on the right ---------- */}
      <motion.section className="ab-top" variants={stagger} initial="hidden" animate="show">
        <div className="ab-intro">
          <motion.p variants={rise} className="mono contact-eyebrow">
            <span className="pulse-dot" /> Year zero · Origin story
          </motion.p>
          <motion.h1 variants={rise} className="page-title contact-title">
            About <span>me</span>.
          </motion.h1>
          <motion.p variants={rise} className="page-lead" style={{ marginTop: "1rem" }}>
            I'm Kanishka, a student building early career experience in software
            engineering and data analytics. I like turning ideas into clean,
            working products, and I learn best by building.
          </motion.p>

          <motion.div variants={rise} className="ab-facts">
            {facts.map((f) => (
              <div key={f.label} className="channel">
                <span className="channel-main">
                  <span className="channel-icon">{Icon[f.icon]}</span>
                  <span className="channel-text">
                    <span className="mono">{f.label}</span>
                    <strong>{f.value}</strong>
                  </span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={rise} className="ab-photo-wrap">
          <div className="portal-rings about-rings" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="transmit">
            <div className="ab-portrait">
              <div className="transmit-head">
                <p className="mono">Portrait</p>
                <span className="transmit-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="ab-portrait-img">
                <img src="/profile_img.jpeg" alt="Portrait of Kanishka" width="400" height="440" />
              </div>
              <div className="ab-caption">
                <b>Kanishka</b>
                <span className="mono">B.Tech CSE · 2029</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ---------- eras: unchanged ---------- */}
      <motion.section className="ab-eras" {...inView} aria-label="My story in four eras">
        {story.map((s) => (
          <motion.article
            key={s.num}
            variants={rise}
            className={`ab-era${s.num === "Next" ? " is-next" : ""}`}
          >
            <span className="ab-num" aria-hidden="true">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </motion.article>
        ))}
      </motion.section>

      <motion.section className="ab-section" {...inView}>
        <motion.div variants={rise} className="ab-head">
          <p className="mono">Toolkit</p>
          <h2>Skills</h2>
        </motion.div>
        <div className="ab-grid2">
          {skills.map((g) => (
            <motion.div key={g.name} variants={rise} className="channel">
              <span className="channel-main">
                <span className="channel-icon">{Icon[g.icon]}</span>
                <span className="ab-ctext">
                  <strong>{g.name}</strong>
                  <span className="ab-tags">
                    {g.items.map((i) => (
                      <span key={i} className="tag">{i}</span>
                    ))}
                  </span>
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="ab-section" {...inView}>
        <motion.div variants={rise} className="ab-head">
          <p className="mono">Where I studied</p>
          <h2>Education</h2>
        </motion.div>
        <div className="ab-grid2">
          {education.map((e) => (
            <motion.div key={e.name} variants={rise} className="channel is-top">
              <span className="channel-main">
                <span className="channel-icon">{Icon[e.icon]}</span>
                <span className="ab-ctext">
                  <span className="mono">{e.level}{e.period && ` · ${e.period}`}</span>
                  <strong>{e.name}</strong>
                  <span className="ab-detail">{e.detail}</span>
                  {e.note && <small>{e.note}</small>}
                  <span className="ab-tags">
                    {e.scores.map((s) => (
                      <span key={s.label} className="tag ab-score">{s.label}: {s.value}</span>
                    ))}
                  </span>
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}