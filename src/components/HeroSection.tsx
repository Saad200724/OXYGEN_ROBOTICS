import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, MapPin, Users } from "lucide-react";
import IgnitionCore from "./IgnitionCore";

const HeroSection = () => {
  const stats = [
    { value: "3+", label: "Years" },
    { value: "3", label: "Regions" },
    { value: "50+", label: "Builders" },
  ];

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden pt-32 pb-20">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,109,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,109,0,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7">
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
              className="flex flex-wrap gap-8 sm:gap-12 border-t border-border pt-6"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Core */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-5 lg:pt-12 max-w-[360px] lg:max-w-none mx-auto"
          >
            <IgnitionCore />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
