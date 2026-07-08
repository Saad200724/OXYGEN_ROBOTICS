import { motion, useReducedMotion } from "framer-motion";

const IgnitionCore = () => {
  const shouldReduceMotion = useReducedMotion();

  const hexagonPoints = (radius: number, offset = 0) => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 2 + offset;
      return `${250 + radius * Math.cos(angle)},${250 + radius * Math.sin(angle)}`;
    }).join(" ");
  };

  const rings = [
    { radius: 130, stroke: 1, duration: 24, opacity: 0.2, dash: "none" },
    { radius: 165, stroke: 1, duration: 40, opacity: 0.15, dash: "6 8" },
    { radius: 205, stroke: 0.5, duration: 55, opacity: 0.1, dash: "none" },
  ];

  const nodes = [
    { angle: 0, radius: 165, label: "DHAKA", sub: "HQ" },
    { angle: 120, radius: 165, label: "ISLAMABAD", sub: "SOUTH ASIA" },
    { angle: 240, radius: 165, label: "ASTANA", sub: "CENTRAL ASIA" },
    { angle: 60, radius: 205, label: "AI", sub: "LAB" },
    { angle: 180, radius: 205, label: "R&D", sub: "CORE" },
    { angle: 300, radius: 205, label: "YOUTH", sub: "DRIVEN" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[640px] mx-auto">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        aria-hidden="true"
        role="img"
      >
        <title>Ignition core — abstract representation of Oxygen Robotics&apos; global R&D network</title>
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
            <stop offset="40%" stopColor="hsl(var(--oxygen-amber))" stopOpacity="0.12" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--oxygen-amber))" />
          </linearGradient>
          <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient glow */}
        <circle cx="250" cy="250" r="200" fill="url(#coreGlow)" />

        {/* Rotating rings */}
        {rings.map((ring, i) => (
          <motion.circle
            key={i}
            cx="250"
            cy="250"
            r={ring.radius}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={ring.stroke}
            strokeOpacity={ring.opacity}
            strokeDasharray={ring.dash}
            initial={{ rotate: 0 }}
            animate={shouldReduceMotion ? { rotate: 0 } : { rotate: i % 2 === 0 ? 360 : -360 }}
            transition={shouldReduceMotion ? undefined : { duration: ring.duration, repeat: Infinity, ease: "linear" }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}

        {/* Outer hexagonal frame - slow rotation */}
        <motion.path
          d={`M${hexagonPoints(135, 0)}`}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeOpacity="0.5"
          animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
          transition={shouldReduceMotion ? undefined : { duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />

        {/* Middle hexagonal frame - counter rotation */}
        <motion.path
          d={`M${hexagonPoints(95, 0)}`}
          fill="none"
          stroke="hsl(var(--oxygen-amber))"
          strokeWidth="1"
          strokeOpacity="0.35"
          animate={shouldReduceMotion ? { rotate: 0 } : { rotate: -360 }}
          transition={shouldReduceMotion ? undefined : { duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />

        {/* Inner hexagon core */}
        <path
          d={`M${hexagonPoints(55, 0)}`}
          fill="hsl(var(--primary) / 0.15)"
          stroke="url(#coreGradient)"
          strokeWidth="2"
          filter="url(#glowBlur)"
        />

        {/* Core symbol */}
        <g transform="translate(250,250)">
          <motion.circle
            r="26"
            fill="hsl(var(--primary))"
            fillOpacity="0.9"
            animate={shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.12, 1] }}
            transition={shouldReduceMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            filter="url(#glowBlur)"
          />
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="hsl(var(--primary-foreground))"
            fontSize="18"
            fontWeight="700"
            fontFamily="JetBrains Mono, monospace"
          >
            O₂
          </text>
        </g>

        {/* Orbiting nodes */}
        {nodes.map((node, i) => {
          const angle = (node.angle * Math.PI) / 180;
          const x = 250 + node.radius * Math.cos(angle);
          const y = 250 + node.radius * Math.sin(angle);
          const isLeft = x < 250;
          return (
            <g key={i}>
              <motion.circle
                cx={x}
                cy={y}
                r="4"
                fill="hsl(var(--primary))"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                filter="url(#glowBlur)"
              />
              <motion.circle
                cx={x}
                cy={y}
                r="10"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeOpacity="0.4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={shouldReduceMotion ? { scale: 1, opacity: 0 } : { scale: 1.6, opacity: 0 }}
                transition={shouldReduceMotion ? undefined : { duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
              />
              <text
                x={x + (isLeft ? -16 : 16)}
                y={y - 6}
                textAnchor={isLeft ? "end" : "start"}
                dominantBaseline="middle"
                fill="hsl(var(--foreground))"
                fontSize="11"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="600"
              >
                {node.label}
              </text>
              <text
                x={x + (isLeft ? -16 : 16)}
                y={y + 8}
                textAnchor={isLeft ? "end" : "start"}
                dominantBaseline="middle"
                fill="hsl(var(--muted-foreground))"
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
              >
                {node.sub}
              </text>
            </g>
          );
        })}

        {/* Connection lines to core from regional nodes */}
        {nodes.slice(0, 3).map((node, i) => {
          const angle = (node.angle * Math.PI) / 180;
          const x = 250 + node.radius * Math.cos(angle);
          const y = 250 + node.radius * Math.sin(angle);
          return (
            <motion.line
              key={i}
              x1="250"
              y1="250"
              x2={x}
              y2={y}
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 + i * 0.2 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default IgnitionCore;
