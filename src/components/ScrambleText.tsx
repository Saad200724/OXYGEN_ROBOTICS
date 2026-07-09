import { useEffect, useRef, useState, useCallback } from "react";

// Romance language characters mixed with standard letters for the scramble pool
const SCRAMBLE_CHARS =
  "abcdefghijklmnopqrstuvwxyzáàâãäéèêëíìîïóòôõöúùûüñçýÿæøåβγδζθλμξπσφψωαε";

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;   // total ms for the scramble
  fps?: number;        // frames per second
}

const ScrambleText = ({
  text,
  className = "",
  duration = 900,
  fps = 30,
}: ScrambleTextProps) => {
  const [displayed, setDisplayed] = useState(text);
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isRunning = useRef(false);

  const scramble = useCallback(() => {
    if (isRunning.current) return;
    isRunning.current = true;

    const totalFrames = Math.round((duration / 1000) * fps);
    const interval = 1000 / fps;
    let frame = 0;

    const tick = () => {
      frame++;
      const progress = frame / totalFrames; // 0→1

      // Each character resolves left-to-right based on progress
      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          const resolveThreshold = (i + 1) / text.replace(/ /g, "").length;
          if (progress >= resolveThreshold) return char;
          // still scrambling: pick a random char from the pool
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");

      setDisplayed(result);

      if (frame < totalFrames) {
        rafRef.current = setTimeout(tick, interval);
      } else {
        setDisplayed(text);
        isRunning.current = false;
      }
    };

    tick();
  }, [text, duration, fps]);

  // Auto-play once on mount
  useEffect(() => {
    const t = setTimeout(() => scramble(), 300);
    return () => {
      clearTimeout(t);
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [scramble]);

  return (
    <span
      className={`cursor-pointer select-none ${className}`}
      onMouseEnter={scramble}
      onClick={scramble}
    >
      {displayed}
    </span>
  );
};

export default ScrambleText;
