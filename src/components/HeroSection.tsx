import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InteractiveGlobe from "./InteractiveGlobe";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary">
                FOUNDED 2022 · DHAKA, BANGLADESH
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-foreground">Building a </span>
              <span className="text-primary glitch-text">Global Youth</span>
              <br />
              <span className="text-foreground">Robotics Movement</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl font-mono"
            >
              Fueled by Curiosity. Built on Struggle. Engineered for Sovereignty.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground max-w-xl"
            >
              We unite the brightest young minds across borders to design, solve, 
              and lead through robotics and AI. This is just the beginning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/international"
                className="group px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all"
              >
                <span className="flex items-center gap-2">
                  Start a Chapter
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded hover:bg-secondary/50 transition-all"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-8 pt-4"
            >
              <div>
                <div className="font-display text-2xl font-bold text-primary">3+</div>
                <div className="font-mono text-xs text-muted-foreground">Years Building</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-primary">3</div>
                <div className="font-mono text-xs text-muted-foreground">Active Regions</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-primary">∞</div>
                <div className="font-mono text-xs text-muted-foreground">Possibilities</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <InteractiveGlobe />
            
            {/* Globe Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 font-mono text-xs text-center space-y-1 z-20"
            >
              <div>
                <span className="text-muted-foreground">REGIONS:</span>{" "}
                <span className="text-primary">3 ACTIVE</span>
              </div>
              <div className="text-muted-foreground/60">
                Bangladesh · Pakistan · Kazakhstan
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
