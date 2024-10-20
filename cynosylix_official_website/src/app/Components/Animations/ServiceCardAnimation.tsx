"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function ServiceCardAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use a ref to track the visibility of the component
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger animation when 20% of the element is visible

  // Animation variants for parent (container) and children (cards)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger each child by 0.2s
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref} // Attach the ref to the container
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"} // Only animate if in view
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={card}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
