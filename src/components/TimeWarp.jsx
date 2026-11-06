import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Year shown for each page ("era")
const years = {
  "/": 2026,
  "/about": 2024,
  "/experience": 2025,
  "/projects": 2026,
  "/certifications": 2026,
  "/contact": 2027,
};

const yearFor = (path) => {
  if (path.startsWith("/projects")) return years["/projects"];
  return years[path] ?? 2026;
};

export default function TimeWarp({ pathname }) {
  const reduce = useReducedMotion();
  const prev = useRef(pathname);
  const [warp, setWarp] = useState(null); // { from, to }
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (prev.current === pathname) return;
    const from = yearFor(prev.current);
    const to = yearFor(pathname);
    prev.current = pathname;
    if (reduce) return;

    setWarp({ from, to });
    setShown(from);

    // count from -> to over ~500ms
    const steps = Math.abs(to - from);
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setShown(from + Math.sign(to - from) * Math.min(i, steps));
      if (i >= steps) clearInterval(timer);
    }, steps ? 500 / steps : 500);

    const done = setTimeout(() => setWarp(null), 900);
    return () => {
      clearInterval(timer);
      clearTimeout(done);
    };
  }, [pathname, reduce]);

  return (
    <AnimatePresence>
      {warp && (
        <motion.div
          key="warp"
          initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 1 }}
          animate={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "grid",
            placeItems: "center",
            background: "var(--accent)",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(4rem, 14vw, 9rem)",
              color: "var(--bg)",
              fontStyle: "italic",
            }}
          >
            {shown}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}