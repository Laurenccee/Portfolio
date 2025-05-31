import Layout from "@/components/transitions/stair-transition";
import Typewrite from "@/components/typewiter-text";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const initialLabel = "{ HOVER ME }";
const finalLabel = "{ PRESS START }";
const glitchDuration = 400;
const shuffleInterval = 100;
const randomGlitchInterval = 5000;

const shuffleText = (text: string) => {
  const arr = text.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
};

const getGlitchedText = (text: string) => {
  const chars = "!@#$%^&*()_+-=[]{}|;:',.<>/?~1234567890";
  return text
    .split("")
    .map((char) =>
      char === " " ? char : chars[Math.floor(Math.random() * chars.length)]
    )
    .join("");
};

const START = () => {
  const [label, setLabel] = useState(initialLabel);
  const [isHovered, setIsHovered] = useState(false);

  const shuffleTimer = useRef<NodeJS.Timeout | null>(null);
  const glitchTimer = useRef<NodeJS.Timeout | null>(null);
  const randomGlitchTimer = useRef<NodeJS.Timeout | null>(null);

  const glitchAndShuffleTo = (targetLabel: string) => {
    if (shuffleTimer.current) clearInterval(shuffleTimer.current);
    if (glitchTimer.current) clearTimeout(glitchTimer.current);

    setLabel(getGlitchedText(targetLabel));

    shuffleTimer.current = setInterval(() => {
      setLabel((prev) => shuffleText(prev));
    }, shuffleInterval);

    glitchTimer.current = setTimeout(() => {
      if (shuffleTimer.current) clearInterval(shuffleTimer.current);
      setLabel(targetLabel);
    }, glitchDuration);
  };

  useEffect(() => {
    randomGlitchTimer.current = setInterval(() => {
      if (!isHovered && label === initialLabel) {
        glitchAndShuffleTo(initialLabel);
      }
    }, randomGlitchInterval);

    return () => {
      if (randomGlitchTimer.current) clearInterval(randomGlitchTimer.current);
    };
  }, [label, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    glitchAndShuffleTo(finalLabel);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    glitchAndShuffleTo(initialLabel);
  };

  return (
    <main className="h-screen bg-main flex items-center justify-center">
      <motion.div
        className="text-2xl font-extrabold tracking-wide"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/home">
          <Typewrite
            className="text-2xl font-extrabold"
            label={label}
            loadingTime={300}
          />
        </Link>
      </motion.div>
    </main>
  );
};

export default Layout(START);
