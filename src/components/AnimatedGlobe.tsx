import { motion } from "framer-motion";

const AnimatedGlobe = () => {
  // City coordinates (approximate positions on the globe projection)
  const cities = [
    { name: "Dhaka", cx: 320, cy: 155, label: "HQ" },
    { name: "Kuala Lumpur", cx: 340, cy: 185, label: "APAC" },
    { name: "Islamabad", cx: 280, cy: 145, label: "SOUTH ASIA" },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <motion.svg
        viewBox="0 0 400 400"
        className="w-full h-full animate-rotate-slow"
        style={{ animationDuration: "60s" }}
      >
        {/* Globe Circle */}
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="1"
        />
        
        {/* Latitude Lines */}
        {[-60, -30, 0, 30, 60].map((lat, i) => (
          <ellipse
            key={`lat-${i}`}
            cx="200"
            cy={200 + lat}
            rx={150 * Math.cos((lat * Math.PI) / 180)}
            ry="20"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            opacity="0.5"
          />
        ))}
        
        {/* Longitude Lines */}
        {[0, 30, 60, 90, 120, 150].map((lon, i) => (
          <ellipse
            key={`lon-${i}`}
            cx="200"
            cy="200"
            rx={20}
            ry="150"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.5"
            opacity="0.5"
            transform={`rotate(${lon} 200 200)`}
          />
        ))}
        
        {/* Continents (simplified shapes) */}
        <path
          d="M140,120 Q160,100 200,110 Q240,120 260,140 Q280,160 270,180 Q260,200 240,190 Q220,180 200,185 Q180,190 160,180 Q140,170 140,150 Z"
          fill="none"
          stroke="hsl(var(--oxygen-cyan) / 0.3)"
          strokeWidth="1"
        />
        <path
          d="M280,150 Q300,140 320,160 Q340,180 330,210 Q320,240 300,250 Q280,260 270,240 Q260,220 270,200 Q280,180 280,150 Z"
          fill="none"
          stroke="hsl(var(--oxygen-cyan) / 0.3)"
          strokeWidth="1"
        />
      </motion.svg>

      {/* City Markers - positioned absolutely over the globe */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Connection Line between cities */}
          <motion.path
            d={`M${cities[0].cx},${cities[0].cy} Q${(cities[0].cx + cities[1].cx) / 2},${cities[0].cy - 20} ${cities[1].cx},${cities[1].cy}`}
            fill="none"
            stroke="hsl(var(--oxygen-cyan))"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
          
          {/* Data packets flowing on the line */}
          <motion.circle
            r="3"
            fill="hsl(var(--oxygen-cyan))"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 2 }}
            style={{
              offsetPath: `path("M${cities[0].cx},${cities[0].cy} Q${(cities[0].cx + cities[1].cx) / 2},${cities[0].cy - 20} ${cities[1].cx},${cities[1].cy}")`,
            }}
          />
          
          {/* City Beacons */}
          {cities.map((city, i) => (
            <g key={city.name}>
              {/* Outer pulse ring */}
              <motion.circle
                cx={city.cx}
                cy={city.cy}
                r="15"
                fill="none"
                stroke="hsl(var(--oxygen-cyan))"
                strokeWidth="1"
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
              {/* Inner glow */}
              <circle
                cx={city.cx}
                cy={city.cy}
                r="8"
                fill="hsl(var(--oxygen-cyan) / 0.2)"
                className="animate-pulse-glow"
              />
              {/* Core dot */}
              <motion.circle
                cx={city.cx}
                cy={city.cy}
                r="4"
                fill="hsl(var(--oxygen-cyan))"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.3, type: "spring" }}
              />
              {/* Label */}
              <motion.text
                x={city.cx + 15}
                y={city.cy + 4}
                fill="hsl(var(--oxygen-cyan))"
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.3 }}
              >
                {city.name}
              </motion.text>
              <motion.text
                x={city.cx + 15}
                y={city.cy + 16}
                fill="hsl(var(--muted-foreground))"
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.3 }}
              >
                [{city.label}]
              </motion.text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default AnimatedGlobe;