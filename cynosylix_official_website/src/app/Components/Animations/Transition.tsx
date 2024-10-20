"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  // Change amount to 0.75 to trigger the animation when 75% of the component is in view
  const isInView = useInView(ref, { once: true, amount: 0.60 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ ease: "easeInOut", duration: 0.50 }}
    >
      {children}
    </motion.div>
  );
}
