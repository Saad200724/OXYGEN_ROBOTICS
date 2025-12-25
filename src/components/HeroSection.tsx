import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedGlobe from "./AnimatedGlobe";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-matrix">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none opacity-30" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              <span className="text-sm font-mono text-muted-foreground">
                GLOBAL R&D ECOSYSTEM v2.0
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground"
              >
                WE BUILD
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gradient-oxygen"
              >
                THE FOUNDERS.
              </motion.h1>
            </div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Oxygen Robotics is a global R&D ecosystem. We don't just win competitions; 
              we incubate market-ready products like{" "}
              <span className="text-primary font-semibold">'PatientPal'</span> and{" "}
              <span className="text-primary font-semibold">'Phoenix Echo'</span> to solve 
              real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="glitch-hover oxygen-glow bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-sm uppercase tracking-wider px-8"
              >
                Deploy a Chapter
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glitch-hover border-primary/50 text-primary hover:bg-primary/10 font-mono text-sm uppercase tracking-wider px-8"
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-8 pt-8 border-t border-border"
            >
              {[
                { value: "2", label: "Active Regions" },
                { value: "3+", label: "R&D Projects" },
                { value: "$1B", label: "Target Valuation" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold text-primary font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <AnimatedGlobe />
            
            {/* Floating data points */}
            <motion.div
              className="absolute top-10 right-10 px-3 py-2 bg-card/80 backdrop-blur border border-border rounded font-mono text-xs"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <span className="text-muted-foreground">STATUS:</span>{" "}
              <span className="text-primary">OPERATIONAL</span>
            </motion.div>
            
            <motion.div
              className="absolute bottom-20 left-0 px-3 py-2 bg-card/80 backdrop-blur border border-border rounded font-mono text-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
            >
              <span className="text-muted-foreground">NODES:</span>{" "}
              <span className="text-primary">2 ACTIVE</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;