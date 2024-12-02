import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [show, setShow] = useState(false);

  return <div>
    <button onClick={() => setShow(!show)}>Toggle</button>
    <AnimatePresence>
      {show && (
        <motion.p
          key="text"
          exit={{ x: 20, opacity: 0 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Hello
        </motion.p>
      )}
    </AnimatePresence>
  </div>;
}
