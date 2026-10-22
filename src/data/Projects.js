// Edit this file to add or change projects — pages render from it automatically.
export const projects = [
  {
    id: "innovprocure",
    title: "InnovProcure",
    year: "2026",
    category: "React",
    summary:
      "Smart India Hackathon 2026 project by Team DoraX: a procurement platform built with React, Node and PostgreSQL.",
    stack: ["React", "Node.js", "PostgreSQL", "Render"],
    links: { live: "", github: "" },
  },
  {
    id: "cafe-dashboard",
    title: "Café Data Dashboard",
    year: "2026",
    category: "Django",
    summary:
      "A premium editorial-style data analysis dashboard built with Django, with a luxury café look and feel.",
    stack: ["Django", "Python", "Data Analytics"],
    links: { live: "", github: "" },
  },
  {
    id: "impactiq",
    title: "ImpactIQ",
    year: "2026",
    category: "React",
    summary:
      "A premium enterprise SaaS product concept with a refined green and blue brand palette.",
    stack: ["React", "UI Design"],
    links: { live: "", github: "" },
  },
  {
    id: "midas",
    title: "Midas Backend Sandbox",
    year: "2026",
    category: "Java",
    summary:
      "Java / Spring Boot Maven project from the JPMorgan Chase Advanced Software Engineering simulation.",
    stack: ["Java", "Spring Boot", "Maven"],
    links: { live: "", github: "" },
  },
];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
