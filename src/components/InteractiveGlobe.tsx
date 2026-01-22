import { useEffect, useState, useRef, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveGlobe = () => {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [hoverD, setHoverD] = useState();
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Load GeoJSON data
    fetch('/data/world.json')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  // Target countries to highlight
  const targetCountries = useMemo(() => ['Bangladesh', 'Pakistan', 'Kazakhstan'], []);
  
  // Custom cyan color for Oxygen Robotics
  const oxygenCyan = '#00E5FF';

  const getPolygonColor = (d) => {
    if (targetCountries.includes(d.properties.NAME)) {
      return oxygenCyan;
    }
    return 'rgba(255, 255, 255, 0.05)';
  };

  const getPolygonLabel = (d) => `
    <div style="background: rgba(0, 0, 0, 0.8); color: #fff; padding: 8px; border-radius: 4px; border: 1px solid ${oxygenCyan}; font-family: 'JetBrains Mono', monospace; font-size: 12px;">
      <b>${d.properties.NAME}</b>
      ${targetCountries.includes(d.properties.NAME) ? `<br/><span style="color: ${oxygenCyan}">Oxygen Chapter Active</span>` : ''}
    </div>
  `;

  const handlePolygonClick = (d) => {
    if (targetCountries.includes(d.properties.NAME)) {
      setSelectedCountry(d.properties);
      // Auto-rotate to center the clicked country
      globeEl.current.pointOfView({
        lat: d.properties.LABEL_Y || 23,
        lng: d.properties.LABEL_X || 80,
        altitude: 1.5
      }, 1000);
    }
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <Globe
        ref={globeEl}
        width={600}
        height={500}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor={oxygenCyan}
        atmosphereAltitude={0.15}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        polygonsData={countries.features}
        polygonSideColor={() => 'rgba(0, 229, 255, 0.05)'}
        polygonStrokeColor={(d) => targetCountries.includes(d.properties.NAME) ? oxygenCyan : 'rgba(255, 255, 255, 0.1)'}
        polygonCapColor={getPolygonColor}
        polygonLabel={getPolygonLabel}
        onPolygonHover={setHoverD}
        onPolygonClick={handlePolygonClick}
        polygonsTransitionDuration={300}
      />

      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-10 right-0 z-20 w-64 bg-background/90 border border-primary/30 p-4 rounded backdrop-blur-md shadow-2xl"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-display font-bold text-primary">{selectedCountry.NAME}</h3>
              <button 
                onClick={() => setSelectedCountry(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>
            <div className="font-mono text-xs space-y-2">
              <div className="flex justify-between border-b border-border/50 pb-1">
                <span className="text-muted-foreground">CHAPTER TYPE</span>
                <span className="text-primary">REGIONAL HUB</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-1">
                <span className="text-muted-foreground">R&D FOCUS</span>
                <span className="text-primary">ROBOTICS/AI</span>
              </div>
              <p className="pt-2 text-[10px] leading-relaxed">
                Active research and development entity focused on local sovereignty and technological advancement.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] text-muted-foreground/60 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
          <span>OXYGEN ACTIVE REGIONS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white/10" />
          <span>GLOBAL MOVEMENT</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveGlobe;