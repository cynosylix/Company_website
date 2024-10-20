"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number; // optional speed control
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="typewriter-container"
      >
        <span>{displayedText}</span>
        <span className="blinking-cursor">|</span>
      </motion.div>

      {/* Add CSS directly in the same component */}
      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 24px;
          color: black;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% {
            color: transparent;
          }
        }
      `}</style>
    </>
  );
};

export default Typewriter;
