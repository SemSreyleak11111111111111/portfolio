import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 80, delay = 300 }) {
  const [displayed, setDisplayed] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[i]);
        setI(i + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [i, text, speed]);

  // Optional: restart after delay when finished
  useEffect(() => {
    if (i === text.length) {
      const restart = setTimeout(() => {
        setDisplayed("");
        setI(0);
      }, delay);

      return () => clearTimeout(restart);
    }
  }, [i, delay]);

  return (
    <span className="inline-block border-r-2 border-indigo-400 pr-1 animate-pulse">
      {displayed}
    </span>
  );
}