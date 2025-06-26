import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// MorphText component - cycles through strings by applying effects to individual words
const MorphText = ({ texts, interval = 3000, duration = 0.4, className = "", wordStagger = 0.05 }) => {
  const [textIndex, setTextIndex] = useState(0); // Index to track current string
  const currentText = texts[textIndex]; // Get the current text based on the index
  const words = currentText.split(" "); // Splitting current text into words

  // Variants for word animations
  const wordVariants = {
    hidden: { // word starts hidden and at the top
      opacity: 0,
      y: "50%",
    },
    visible: (i) => ({ // word ends visible and at the baseline
      opacity: 1,
      y: "0%",
      transition: {
        delay: i * wordStagger, // each word is given incremental transition delay
        duration: duration,
        ease: "easeOut",
      },
    }),
    exit: (i) => ({ // word ends up hidden and back at the top
      opacity: 0,
      y: "50%",
      transition: { // word starts hidden and at the top
        delay: i * wordStagger,
        duration: duration,
        ease: "easeIn",
      },
    }),
  };

  // Effect that cycles through texts at a specified interval
  useEffect(() => {
    const cycleText = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // set next string
    }, interval);

    return () => clearInterval(cycleText);
  }, [texts, interval]);

  return (
    <div className={`inline-block ${className}`} style={{ overflow: "hidden" }}>
      <AnimatePresence mode="wait"> {/* AnimatePresence required to animate an element that might be partially in/out of DOM */}
        <motion.div key={textIndex} initial="hidden" animate="visible" exit="exit" className="flex flex-wrap justify-center max-h-[3rem]">
          {words.map((word, i) => (
            <motion.span key={word + i} variants={wordVariants} custom={i} className="mr-[0.25rem] whitespace-nowrap">
              {word} {/* Render each word with animation */}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MorphText;
