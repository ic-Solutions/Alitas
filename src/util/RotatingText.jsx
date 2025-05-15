import React, { useEffect, useRef, useState } from "react";
import "./RotatingText.css";

const RotatingText = ({ items, className = "", typingInterval = 50, pause = 5000, cursor = false }) => {
  const [output, setOutput] = useState(items[0]);
  const [index, setIndex] = useState(1);
  const [cursorPos, setCursorPos] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);

  // refs to manage current position and timers
  const posRef = useRef(0);
  const typingTimerRef = useRef(null);
  const pauseTimerRef = useRef(null);

  useEffect(() => {
    const currentWord = items[index];
    const prevWord = items[(index + items.length - 1) % items.length];
    // reset position and blinking state
    posRef.current = 0;
    setIsBlinking(false);

    // start typing interval
    typingTimerRef.current = setInterval(() => {
      if (posRef.current < currentWord.length) {
        const nextPos = posRef.current + 1;
        // morph effect: prefix of new word + suffix of old word
        setOutput(currentWord.slice(0, nextPos) + prevWord.slice(nextPos));
        setCursorPos(nextPos);
        posRef.current = nextPos;
      } else {
        // finished typing, clear interval and start pause
        clearInterval(typingTimerRef.current);
        setOutput(currentWord);
        setCursorPos(currentWord.length);
        setIsBlinking(true);

        // after pause, move to next word
        pauseTimerRef.current = setTimeout(() => {
          setIsBlinking(false);
          setCursorPos(0);
          setIndex((i) => (i + 1) % items.length);
        }, pause);
      }
    }, typingInterval);

    return () => {
      clearInterval(typingTimerRef.current);
      clearTimeout(pauseTimerRef.current);
    };
  }, [index, items, typingInterval, pause]);

  return (
    <span className={className} aria-label={items[index]}>
      {output.slice(0, cursorPos)}
      {cursor && (
        <span className={`text-purple-500 ${isBlinking ? "blinking" : ""}`}>|</span>
      )}
      {output.slice(cursorPos)}
    </span>
  );
};

export default RotatingText;
