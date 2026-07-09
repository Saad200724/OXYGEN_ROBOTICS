import { useEffect, useRef, useState } from "react";

const CHARS = "abcdefghijklmnopqrstuvwxyzáàâãéèêëíìóòôõúùûñçýæø";

function runScramble(
  text: string,
  duration: number,
  fps: number,
  onFrame: (val: string) => void,
  onDone: () => void
): () => void {
  const totalFrames = Math.round((duration / 1000) * fps);
  const interval = 1000 / fps;
  let frame = 0;
  let id: ReturnType<typeof setTimeout>;

  // build list of non-space char indices once
  const nonSpaceIdxs: number[] = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") nonSpaceIdxs.push(i);
  }
  const total = nonSpaceIdxs.length;

  const tick = () => {
    frame++;
    const resolved = new Set(
      nonSpaceIdxs.slice(0, Math.floor((frame / totalFrames) * total))
    );

    const chars = text.split("").map((c, i) => {
      if (c === " ") return "\u00a0";
      if (resolved.has(i)) return c;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    });

    onFrame(chars.join(""));

    if (frame < totalFrames) {
      id = setTimeout(tick, interval);
    } else {
      onFrame(text);
      onDone();
    }
  };

  id = setTimeout(tick, interval);
  return () => clearTimeout(id);
}

interface Props {
  text: string;
  className?: string;
  duration?: number;
  fps?: number;
}

export default function ScrambleText({ text, className = "", duration = 1100, fps = 28 }: Props) {
  const [display, setDisplay] = useState(text);
  const running = useRef(false);
  const cancel = useRef<(() => void) | null>(null);

  function trigger() {
    if (running.current) return;
    running.current = true;
    cancel.current = runScramble(
      text,
      duration,
      fps,
      setDisplay,
      () => { running.current = false; }
    );
  }

  // auto-play on mount once
  useEffect(() => {
    const t = setTimeout(trigger, 400);
    return () => {
      clearTimeout(t);
      cancel.current?.();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      className={`whitespace-nowrap inline-block cursor-pointer select-none ${className}`}
      aria-label={text}
      onMouseEnter={trigger}
      onClick={trigger}
    >
      {display}
    </span>
  );
}
