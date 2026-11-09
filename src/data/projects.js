// Edit this file to add or change projects — pages render from it automatically.
export const projects = [
  {
    id: "innovprocure",
    title: "InnovProcure",
    year: "2026",
    category: "Full-Stack",
    summary:
      "Smart India Hackathon 2026 project by Team TechQuesters: a procurement platform built with React, Node and PostgreSQL.",
    stack: ["React", "Node.js", "PostgreSQL", "Render"],
    links: { live: "", github: "https://github.com/Ksh-16/InnovProcure.git" },
    image: "",   // e.g. "/projects/innovprocure.png"
  role: "Team Lead, Frontend developer, Team TechQuesters",
  problem: "Government departments struggle to identify, evaluate, and pilot innovative startup solutions through a structured and transparent procurement process. InnovProcure addresses this gap by providing a unified platform that connects government challenges with eligible startups and enables evaluation, KPI-driven pilot testing, procurement, and scaling.",
  highlights: [
    "1. Developed InnovProcure, a full-stack digital procurement platform with role-based dashboards for government departments, startups, evaluators, procurement officers, and administrators.",
    "2. Addressed the gap between startup innovation and government procurement by designing an end-to-end workflow for startup discovery, proposal evaluation, pilot management, KPI tracking, and milestone-based procurement.",
    "3. Gained practical experience in full-stack development using React.js, Node.js, Express.js, and PostgreSQL, along with API integration, authentication, role-based access control, teamwork, and building solutions for real-world problems.",
  ],
  },
  {
    id: "chirps",
    title: "Chirps_django",
    year: "2026",
    category: "Django",
    summary:
      "Chirps is a Twitter-style social app built with Django where users can register, log in, and post short 240-character updates with optional photos, and only the author can edit or delete their own posts.",
    stack: ["Django", "Python", "Bootstrap", "PythonAnywhere", "PostgreSQL"],
    links: { live: "https://ksh16.pythonanywhere.com", github: "https://github.com/Ksh-16/Chirps_django.git" },
    image: "",   // e.g. "/projects/innovprocure.png"
  role: "Full-Stack Developer (solo project), Backend + UI/UX Developer",
  problem: "",
highlights: [
  "Built a full Django app with user registration, login/logout, and a public feed showing the newest chirps first",
  "Solved post ownership: edit and delete views only fetch a tweet if it belongs to the logged-in user, so nobody can modify someone else's post",
  "Learned Django's MVT structure, ModelForms, authentication, image uploads, and template inheritance with Bootstrap",
],
  },
  {
    id: "CSRConnect",
    title: "CSRConnect",
    year: "2026",
    category: "Full-Stack",
    summary:
      "A centralized CSR platform connecting companies, NGOs, and administrators",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Neon", "JWT", "Multer", "Cloudinary", "React Leaflet", "Vercel", "Render"],
    links: { live: "https://csr-connect-one.vercel.app/", github: "https://github.com/Ksh-16/CSRConnect.git" },
    image: "",   // e.g. "/projects/innovprocure.png"
  role: "Full-Stack Developer (solo project), Backend + UI/UX Developer",
  problem: "CSRConnect addresses the lack of transparency, coordination, and efficient monitoring in Corporate Social Responsibility (CSR) initiatives. It connects companies, NGOs, and administrators on one platform to manage CSR projects, verify NGOs, track project progress, and measure social impact.",
highlights: [
  "Developed a full-stack CSR management platform with role-based dashboards for Admins, Companies, and NGOs, including NGO verification, project management, progress tracking, and ESG/SDG analytics.",
  "Designed a centralized workflow to streamline collaboration between companies and NGOs while ensuring project updates, supporting evidence, and public impact information remain organized and transparent.",
  "Gained practical experience in full-stack development, role-based authentication and authorization, REST API integration, database management, file uploads, and building data-driven dashboards.",
],
  },
  {
    id: "finpilot",
    title: "FinPilot",
    year: "2026",
    category: "Full-Stack",
    summary:
      "A centralized CSR platform connecting companies, NGOs, and administrators",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Python", "yfinance", "Recharts", "Vercel", "Render"],
    links: { live: "", github: "https://github.com/Ksh-16/FinPilot.git" },
    image: "",   // e.g. "/projects/innovprocure.png"
  role: "Frontend Developer",
  problem: "FinPilot solves the problem of fragmented personal financial management, where users need multiple applications to track expenses, manage savings goals, plan investments, and monitor stock markets. It brings these capabilities together in one platform, helping Indian users understand their financial health and make more informed financial decisions.",
highlights: [
  "Developed a full-stack personal finance platform featuring financial health scoring, expense tracking, goal management, what-if simulations, future cost projections, investment planning, portfolio tracking, Indian stock-market data, and personalized financial insights.",
  "Integrated multiple financial functionalities into a unified platform, including dynamic financial calculations, user-specific data management, JWT-based authentication, and live market-data integration for Indian stocks and indices.",
  "Gained practical experience in full-stack development, Next.js App Router, TypeScript, REST API development, authentication, MongoDB integration, Python-based market-data handling, financial calculations, and interactive data visualization.",
],
  },
  
{
  id: "scaleguard",
  title: "ScaleGuard",
  year: "2026",
  category: "Systems / Distributed Systems",
  summary:
    "A distributed rate limiting service built with C++20 and Redis, featuring Token Bucket and Fixed Window algorithms, thread-safe request handling, and REST APIs.",
  stack: [
    "C++20", "Redis", "Crow", "Docker", "Docker Compose", "CMake", "Ninja", "Asio", "hiredis", "REST APIs", "GitHub Actions"
  ],
  links: {
    live: "",
    github: "https://github.com/Ksh-16/distributed-system.git"
  },
  image: "", // e.g. "/projects/scaleguard.png"
  role: "Systems Developer",
  problem:
    "High-traffic applications need reliable rate limiting to prevent excessive requests, protect backend services, and maintain system stability. ScaleGuard addresses this by providing a distributed, Redis-backed rate limiting service that manages request limits across instances while supporting concurrent requests.",
  highlights: [
    "Built a distributed rate limiting service in C++20 implementing Token Bucket and Fixed Window algorithms, with Redis-backed state management and REST APIs using Crow.",
    "Implemented thread-safe request handling using mutexes, shared mutexes, locks, and atomic operations, along with a storage abstraction supporting in-memory and Redis-based storage.",
    "Gained practical experience in distributed systems, concurrency and synchronization, C++ systems programming, Redis integration, Docker networking, REST API development, benchmarking, and CI/CD using GitHub Actions."
  ]
},

];

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
