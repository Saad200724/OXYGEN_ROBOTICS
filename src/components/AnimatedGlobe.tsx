import { motion } from "framer-motion";

const AnimatedGlobe = () => {
  // City coordinates (approximate positions on the globe projection)
  const cities = [
    { name: "Dhaka", cx: 240, cy: 160, label: "HQ", labelX: -60, labelY: -10 },
    { name: "Kuala Lumpur", cx: 260, cy: 220, label: "APAC", labelX: 15, labelY: 4 },
    { name: "Islamabad", cx: 180, cy: 150, label: "SOUTH ASIA", labelX: -75, labelY: 4 },
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
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          {/* Connection Lines between all cities */}
          {cities.map((city, i) => {
            const nextCity = cities[(i + 1) % cities.length];
            return (
              <motion.path
                key={`line-${i}`}
                d={`M${city.cx},${city.cy} Q${(city.cx + nextCity.cx) / 2},${Math.min(city.cy, nextCity.cy) - 30} ${nextCity.cx},${nextCity.cy}`}
                fill="none"
                stroke="hsl(var(--oxygen-cyan))"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2, delay: 1 + i * 0.3, ease: "easeInOut" }}
              />
            );
          })}
          
          {/* City Beacons */}
          {cities.map((city, i) => (
            <g key={city.name}>
              {/* Outer pulse ring */}
              <motion.circle
                cx={city.cx}
                cy={city.cy}
                r="12"
                fill="none"
                stroke="hsl(var(--oxygen-cyan))"
                strokeWidth="1"
                initial={{ scale: 0.5, opacity: 1 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
              {/* Inner glow */}
              <circle
                cx={city.cx}
                cy={city.cy}
                r="6"
                fill="hsl(var(--oxygen-cyan) / 0.3)"
                className="animate-pulse-glow"
              />
              {/* Core dot */}
              <motion.circle
                cx={city.cx}
                cy={city.cy}
                r="3"
                fill="hsl(var(--oxygen-cyan))"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.3, type: "spring" }}
              />
              {/* Label with custom positioning */}
              <motion.text
                x={city.cx + city.labelX}
                y={city.cy + city.labelY}
                fill="hsl(var(--oxygen-cyan))"
                fontSize="11"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="500"
                textAnchor={city.labelX < 0 ? "end" : "start"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.3 }}
              >
                {city.name}
              </motion.text>
              <motion.text
                x={city.cx + city.labelX}
                y={city.cy + city.labelY + 12}
                fill="hsl(var(--muted-foreground))"
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
                textAnchor={city.labelX < 0 ? "end" : "start"}
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