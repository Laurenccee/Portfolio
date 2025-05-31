// components/AnimatedLoadingSequence.tsx
import { useEffect, useState } from "react";
import Typewrite from "./typewiter-text";
import Layout from "./transitions/stair-transition";

const loadingMessages = [
  "{ Importing Colors }",
  "{ Compiling UI Components }",
  "{ Rendering Layout }",
  "{ Injecting Stylesheets }",
  "{ Activating Interactive Elements }",
  "{ Initializing Page }",
];

const MESSAGE_DELAY = 500;

const BaseAnimatedLoadingSequence = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [binaryMessage] = useState(loadingMessages[loadingMessages.length - 1]);

  useEffect(() => {
    if (currentIndex < loadingMessages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, MESSAGE_DELAY);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="flex flex-col gap-2 text-xl h-screen justify-center items-center px-10 text-white">
      <Typewrite
        key={currentIndex}
        label={
          currentIndex === loadingMessages.length - 1
            ? binaryMessage
            : loadingMessages[currentIndex]
        }
        loadingTime={MESSAGE_DELAY}
        boxColor="#ffffff"
      />
    </div>
  );
};

// 🎁 Wrap it in your Layout HOC (customize backgroundColor if needed)
const AnimatedLoadingSequence = Layout(
  BaseAnimatedLoadingSequence,
  "#000000",
  true
);

export { AnimatedLoadingSequence, loadingMessages, MESSAGE_DELAY };
