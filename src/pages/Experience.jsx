import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <div className="page">
      <p className="mono">The timeline</p>
      <h1 className="page-title">Experience</h1>
      <p className="page-lead">Each stop is an era. Scroll to travel forward in time.</p>

      <div className="timeline">
        {experience.map((e) => (
          <motion.div
            key={e.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="mono">{e.period}</span>
            <h3>{e.title}</h3>
            <p style={{ color: "var(--accent)", fontWeight: 600 }}>{e.place}</p>
            <ul>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
