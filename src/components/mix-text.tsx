import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Typewrite from "@/components/typewiter-text";
import { Link } from "react-router-dom";

interface GlitchyTextProps {
  initialLabel: string;
  finalLabel: string;
  glitchDuration?: number;
  shuffleInterval?: number;
  randomGlitchInterval?: number;
  linkTo?: string; // Optional prop
  className?: string; // Accept className prop
}

const GlitchyText: React.FC<GlitchyTextProps> = ({
  initialLabel,
  finalLabel,
  glitchDuration = 500,
  shuffleInterval = 100,
  randomGlitchInterval = 8000,
  linkTo, // Optional prop
  className, // Accept className prop
}) => {
  const [label, setLabel] = useState(initialLabel);
  const [isHovered, setIsHovered] = useState(false);

  const shuffleTimer = useRef<NodeJS.Timeout | null>(null);
  const glitchTimer = useRef<NodeJS.Timeout | null>(null);
  const randomGlitchTimer = useRef<NodeJS.Timeout | null>(null);

  // Function to shuffle text
  const shuffleText = (text: string) => {
    const arr = text.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr.join("");
  };

  // Function to generate glitchy text with random characters
  const getGlitchedText = (text: string) => {
    const chars = "!@#$%^&*()_+-=[]{}|;:',.<>/?~123467890";
    return text
      .split("")
      .map((char) =>
        char === " " ? char : chars[Math.floor(Math.random() * chars.length)]
      )
      .join("");
  };

  // Function to handle glitch and shuffle to target label
  const glitchAndShuffleTo = (targetLabel: string) => {
    if (shuffleTimer.current) clearInterval(shuffleTimer.current);
    if (glitchTimer.current) clearTimeout(glitchTimer.current);

    setLabel(getGlitchedText(targetLabel));

    shuffleTimer.current = setInterval(() => {
      setLabel((prev) => shuffleText(prev)); // Shuffle text
    }, shuffleInterval);

    glitchTimer.current = setTimeout(() => {
      if (shuffleTimer.current) clearInterval(shuffleTimer.current);
      setLabel(targetLabel); // Reset to the original label after shuffling
    }, glitchDuration);
  };

  useEffect(() => {
    randomGlitchTimer.current = setInterval(() => {
      glitchAndShuffleTo(finalLabel);
      if (!isHovered && label === finalLabel) {
        glitchAndShuffleTo(finalLabel);
      }
    }, randomGlitchInterval);

    return () => {
      if (randomGlitchTimer.current) clearInterval(randomGlitchTimer.current);
    };
  }, [label, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    glitchAndShuffleTo(finalLabel); // On hover, glitch and shuffle to final label
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    glitchAndShuffleTo(finalLabel); // Reset to initial label when not hovered
  };

  const content = (
    <motion.div
      className={`tracking-wide ${className}`} // Apply the className prop
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typewrite className="" label={label} loadingTime={500} />
    </motion.div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{content}</Link>; // If linkTo is provided, wrap with a Link
  }

  return content; // If linkTo is not provided, return the content without a link
};

export default GlitchyText;
