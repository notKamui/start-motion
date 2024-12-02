import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatedText } from "../components/animated-text";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [show, setShow] = useState(false);
  return (
    <div>
      Hello "/"!
      <button onClick={() => setShow((s) => !s)}>Toggle</button>
      <AnimatedText text="Hello, world!" show={show} />
    </div>
  );
}
