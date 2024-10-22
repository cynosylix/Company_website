"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);

  // Check screen width to determine the amount for the useInView hook
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640; // Adjust the breakpoint as needed
  const amount = isMobile ? 0.20 : 0.60; // 25% for mobile, 60% for larger screens

  // Use the dynamic amount in the useInView hook
  const isInView = useInView(ref, { once: true, amount });

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
