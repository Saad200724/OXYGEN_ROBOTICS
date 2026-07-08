import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, MapPin, Users } from "lucide-react";
import IgnitionCore from "./IgnitionCore";

const HeroSection = () => {
  const stats = [
    { value: "3+", label: "Years Building", icon: Zap },
    { value: "3", label: "Active Regions", icon: MapPin },
    { value: "50+", label: "Youth Builders", icon: Users },
  ];

  const regions = ["Bangladesh", "Pakistan", "Kazakhstan"];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,109,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,109,0,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-60" />

      {/* Radial gradient glow behind core */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mx-auto lg:mx-0"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs text-primary leading-none tracking-wide">
                GLOBAL YOUTH R&D ECOSYSTEM · EST. 2022
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="space-y-3"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight w-full break-words">
                <span className="text-foreground">We Build The</span>
                <br />
                <span className="text-primary glitch-text" data-text="Next Founders">
                  Next Founders
                </span>
                <br />
                <span className="text-foreground">Of Robotics</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl font-mono mx-auto lg:mx-0 leading-relaxed"
            >
              Fueled by curiosity. Built on struggle. Engineered for sovereignty.
              We unite young minds across borders to solve real-world problems through AI and robotics.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full"
            >
              <Link
                to="/international"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Chapter
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-mono text-sm font-medium rounded-full hover:bg-secondary/50 hover:border-primary/30 transition-all"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 pt-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-display text-2xl font-bold text-foreground leading-none">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Region chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2"
            >
              {regions.map((region) => (
                <span
                  key={region}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary/60 border border-border text-[11px] font-mono text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {region}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Ignition Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="lg:col-span-5 relative w-full max-w-[400px] lg:max-w-full mx-auto"
          >
            <IgnitionCore />
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
