import { motion } from "framer-motion";

// "Warp" transition between pages: fade + slight blur + rise.
export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}
