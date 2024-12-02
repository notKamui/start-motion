import { AnimatePresence, motion } from "motion/react";

export function AnimatedText({ text, show }: { text: string; show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.p
          key="text"
          exit={{ x: 20, opacity: 0 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          {text}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
