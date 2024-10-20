"use client";

import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

export default function GalleryAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.30 });

  // Animation variants for each item in the gallery
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 15 }, // Initially scale down and rotate slightly
    show: { opacity: 1, scale: 1, rotate: 0 }, // Scale up and rotate back to normal
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ staggerChildren: 0.3 }} // Stagger animation for children
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
