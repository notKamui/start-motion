import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [show, setShow] = useState(false);
  return (
    <div>
      Hello "/"!
      <button onClick={() => setShow((s) => !s)}>Toggle</button>
      <AnimatePresence>
        {show && (
          <motion.p
            key="text"
            exit={{ x: 20, opacity: 0 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Zooming in from left
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
