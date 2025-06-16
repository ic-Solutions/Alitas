import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MorphText = ({ texts, interval = 3000, duration = 0.4, className = "", wordStagger = 0.05 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const currentText = texts[textIndex];
  const words = currentText.split(" ");

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: "50%",
    },
    visible: (i) => ({
      opacity: 1,
      y: "0%",
      transition: {
        delay: i * wordStagger,
        duration: duration,
        ease: "easeOut",
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: "50%",
      transition: {
        delay: i * wordStagger,
        duration: duration,
        ease: "easeIn",
      },
    }),
  };

  useEffect(() => {
    const cycleText = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(cycleText);
  }, [texts, interval]);

  return (
    <div className={`inline-block ${className}`} style={{ overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        <motion.div key={textIndex} initial="hidden" animate="visible" exit="exit" className="flex flex-wrap justify-center max-h-[3rem]">
          {words.map((word, i) => (
            <motion.span key={word + i} variants={wordVariants} custom={i} className="mr-[0.25rem] whitespace-nowrap">
              {word}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MorphText;
