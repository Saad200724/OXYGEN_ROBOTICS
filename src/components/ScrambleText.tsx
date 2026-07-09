import { useEffect, useRef, useState, useCallback } from "react";

// Only narrow Latin + common Romance/accented chars — no wide Greek to avoid layout shift
const SCRAMBLE_CHARS = "abcdefghijklmnopqrstuvwxyzáàâãéèêëíìóòôõúùûñçýæø";

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  fps?: number;
}

const ScrambleText = ({
  text,
  className = "",
  duration = 1100,
  fps = 28,
}: ScrambleTextProps) => {
  const [displayed, setDisplayed] = useState(text);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isRunning = useRef(false);

  // Pre-compute non-space positions so resolve threshold is space-aware
  const nonSpacePositions = text
    .split("")
    .map((c, i) => (c !== " " ? i : -1))
    .filter((i) => i !== -1);
  const nonSpaceCount = nonSpacePositions.length;

  const scramble = useCallback(() => {
    if (isRunning.current) return;
    isRunning.current = true;

    const totalFrames = Math.round((duration / 1000) * fps);
    const interval = 1000 / fps;
    let frame = 0;

    const tick = () => {
      frame++;
      const progress = frame / totalFrames; // 0 → 1

      // How many non-space chars have resolved so far
      const resolvedCount = Math.floor(progress * nonSpaceCount);
      const resolvedIndices = new Set(nonSpacePositions.slice(0, resolvedCount));

      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return "\u00a0"; // non-breaking space keeps width
          if (resolvedIndices.has(i)) return char;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");

      setDisplayed(result);

      if (frame < totalFrames) {
        timerRef.current = setTimeout(tick, interval);
      } else {
        setDisplayed(text);
        isRunning.current = false;
      }
    };

    tick();
  }, [text, duration, fps, nonSpaceCount, nonSpacePositions]);

  // Auto-play once on mount
  useEffect(() => {
    const t = setTimeout(() => scramble(), 350);
    return () => {
      clearTimeout(t);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scramble]);

  return (
    <span
      className={`cursor-pointer select-none whitespace-nowrap inline-block ${className}`}
      onMouseEnter={scramble}
      onClick={scramble}
      aria-label={text}
    >
      {displayed}
    </span>
  );
};

export default ScrambleText;
