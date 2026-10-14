import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import PageTransition from "./components/PageTransition";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Each route is an "era": the body's data-era attribute swaps the theme
// variables defined in styles/theme.css, and the background fades between them.
const routes = [
  { path: "/", era: "dashboard", element: <Dashboard /> },
  { path: "/about", era: "about", element: <About /> },
  { path: "/certifications", era: "certifications", element: <Certifications /> },
  { path: "/experience", era: "experience", element: <Experience /> },
  { path: "/projects", era: "projects", element: <Projects /> },
  { path: "/contact", era: "contact", element: <Contact /> },
];

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const current = routes.find((r) => r.path === location.pathname);
    document.body.dataset.era = current ? current.era : "about";
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <ProgressBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map((r) => (
            <Route
              key={r.path}
              path={r.path}
              element={<PageTransition>{r.element}</PageTransition>}
            />
          ))}
          <Route
            path="*"
            element={
              <PageTransition>
                <div className="page">
                  <h1 className="page-title">Lost in time</h1>
                  <p className="page-lead">This page doesn't exist in any era.</p>
                </div>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
