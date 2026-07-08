import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

interface Marker {
  lat: number;
  lng: number;
  label: string;
}

interface Arc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
}

const InteractiveGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 480, height: 480 });

  const markers: Marker[] = [
    { lat: 23.8103, lng: 90.4125, label: "Dhaka" },
    { lat: 33.6844, lng: 73.0479, label: "Islamabad" },
    { lat: 51.1699, lng: 71.4491, label: "Astana" },
  ];

  const arcs: Arc[] = [
    { startLat: 23.8103, startLng: 90.4125, endLat: 33.6844, endLng: 73.0479 },
    { startLat: 33.6844, startLng: 73.0479, endLat: 51.1699, endLng: 71.4491 },
    { startLat: 51.1699, startLng: 71.4491, endLat: 23.8103, endLng: 90.4125 },
  ];

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width: Math.floor(width), height: Math.floor(height) });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[560px] mx-auto">
      <Globe
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        atmosphereColor="#FF6D00"
        atmosphereAltitude={0.12}
        pointsData={markers}
        pointLat={(d: object) => (d as Marker).lat}
        pointLng={(d: object) => (d as Marker).lng}
        pointColor={() => "#FF6D00"}
        pointRadius={1.2}
        pointAltitude={0.04}
        arcsData={arcs}
        arcStartLat={(d: object) => (d as Arc).startLat}
        arcStartLng={(d: object) => (d as Arc).startLng}
        arcEndLat={(d: object) => (d as Arc).endLat}
        arcEndLng={(d: object) => (d as Arc).endLng}
        arcColor={() => ["#FF6D00", "#FF9100"]}
        arcAltitude={0.25}
        arcStroke={1.2}
        arcDashLength={0.4}
        arcDashGap={0.15}
        arcDashInitialGap={0.1}
        arcDashAnimateTime={2200}
        labelsData={markers}
        labelLat={(d: object) => (d as Marker).lat}
        labelLng={(d: object) => (d as Marker).lng}
        labelText={(d: object) => (d as Marker).label}
        labelSize={0.9}
        labelColor={() => "#FF6D00"}
        labelAltitude={0.02}
        ringsData={markers}
        ringLat={(d: object) => (d as Marker).lat}
        ringLng={(d: object) => (d as Marker).lng}
        ringColor={() => "#FF6D00"}
        ringMaxRadius={4}
        ringPropagationSpeed={2}
        ringRepeatPeriod={2000}
        showAtmosphere={true}
        enablePointerInteraction={false}
      />
    </div>
  );
};

export default InteractiveGlobe;
