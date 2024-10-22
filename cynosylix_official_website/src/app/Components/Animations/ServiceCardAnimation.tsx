"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface ServiceCardAnimationProps {
  children: React.ReactNode;
}

const ServiceCardAnimation: React.FC<ServiceCardAnimationProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={card}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceCardAnimation;
