import { motion, useScroll, useSpring } from "framer-motion";

// Thin "timeline" bar at the top that fills as you scroll.
export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div className="era-bar" style={{ scaleX, width: "100%" }} />;
}
