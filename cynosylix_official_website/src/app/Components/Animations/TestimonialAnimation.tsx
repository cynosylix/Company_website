"use client";

import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

export default function TestimonialAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });

  // Animation variants for the testimonial cards
  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    show: { opacity: 1, x: 0 }, // Move into view
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
    >
      {React.Children.map(children, (child, index) => (
        <motion.div variants={cardVariants} transition={{ duration: 0.5, delay: index * 0.2 }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
