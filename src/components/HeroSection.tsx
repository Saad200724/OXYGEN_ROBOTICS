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
          <div className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start w-full overflow-hidden">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mx-auto lg:mx-0 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="font-mono text-[10px] xs:text-xs text-primary leading-none truncate">FOUNDED 2022 · DHAKA, BANGLADESH</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-full break-words"
            >
              <span className="text-foreground">Building a </span>
              <span className="text-primary glitch-text">Global Youth</span>
              <br className="hidden sm:block" />
              <span className="text-foreground"> Robotics Movement</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl font-mono mx-auto lg:mx-0"
            >
              Fueled by Curiosity. Built on Struggle. Engineered for Sovereignty.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              We unite the brightest young minds across borders to design, solve, 
              and lead through robotics and AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full px-4 sm:px-0"
            >
              <Link
                to="/international"
                className="group px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all text-center flex-1 sm:flex-none"
              >
                <span className="flex items-center justify-center gap-2">
                  Start a Chapter
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded hover:bg-secondary/50 transition-all text-center flex-1 sm:flex-none"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-4"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="font-display text-xl sm:text-2xl font-bold text-primary">3+</div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase">Years Building</div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="font-display text-xl sm:text-2xl font-bold text-primary">3</div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase">Active Regions</div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="font-display text-xl sm:text-2xl font-bold text-primary">∞</div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase">Possibilities</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full aspect-square max-w-[300px] sm:max-w-none mx-auto"
          >
            <InteractiveGlobe />
            
            {/* Globe Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full max-w-[280px] z-20"
            >
              <div className="bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-3 text-center space-y-2 shadow-xl shadow-primary/5">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[10px] tracking-tight text-primary uppercase font-bold">Oxygen Active Regions</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-tighter">Global Movement</div>
                  <div className="font-display text-sm font-bold text-foreground">REGIONS: 3 ACTIVE</div>
                </div>
                <div className="text-[10px] font-mono text-primary/80 bg-primary/5 py-1 px-2 rounded border border-primary/10">
                  Bangladesh · Pakistan · Kazakhstan
                </div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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
