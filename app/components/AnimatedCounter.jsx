"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const AnimatedCounter = ({ from = 0, to = 100 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const element = ref.current;
    if (!element) return;

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [inView, from, to]);

  return <span ref={ref}>{from}</span>;
};

export default AnimatedCounter;