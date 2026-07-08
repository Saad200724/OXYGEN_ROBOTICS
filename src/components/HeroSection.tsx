import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroGlobe from "./HeroGlobe";

const HeroSection = () => {
  const status = {
    years: "3+",
    regions: "3",
    builders: "50+",
    locations: ["Bangladesh", "Pakistan", "Kazakhstan"],
  };

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden pt-32 pb-20">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,109,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,109,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mb-8"
            >
              Oxygen Robotics International — Est. 2022 — Dhaka, Bangladesh
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
            >
              <span className="text-foreground">We build</span>
              <br />
              <span className="text-primary">the founders</span>
              <br />
              <span className="text-foreground">of robotics.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="font-mono text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mb-10"
            >
              A student-led R&D ecosystem. We don't just compete in events — we design real products, teach real skills, and launch real chapters across borders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                to="/international"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Start a Chapter
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm hover:border-primary/50 transition-colors"
              >
                Read our story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="border border-border p-5 sm:p-6 max-w-2xl"
            >
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-5">
                Organization Status
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-8">
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1">
                    Years building
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {status.years}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1">
                    Active regions
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {status.regions}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1">
                    Youth builders
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {status.builders}
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-mono text-[10px] text-muted-foreground uppercase mb-2">
                  Active locations
                </div>
                <div className="font-mono text-sm text-foreground">
                  {status.locations.join(" · ")}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-6 lg:pt-4 w-full max-w-[420px] lg:max-w-[560px] mx-auto"
          >
            <HeroGlobe />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
