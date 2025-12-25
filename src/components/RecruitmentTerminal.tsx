import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const RecruitmentTerminal = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showRoles, setShowRoles] = useState(false);
  
  const roles = [
    "AI/ML Enthusiast",
    "Hardware Specialist",
    "Finance Lead",
    "Researcher",
  ];

  const systemText = "System: Searching for Elite Talent...";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= systemText.length) {
        setDisplayedText(systemText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowRoles(true), 500);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showRoles && currentRoleIndex < roles.length) {
      const timer = setTimeout(() => {
        setCurrentRoleIndex(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [showRoles, currentRoleIndex, roles.length]);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Terminal Window */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 font-mono text-xs text-muted-foreground">
                oxygen-recruit.sh — bash
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono text-sm space-y-4">
              {/* System prompt */}
              <div className="flex items-start gap-2">
                <span className="text-primary">$</span>
                <span className="text-foreground">
                  ./init_recruitment_protocol.sh
                </span>
              </div>

              {/* Typewriter text */}
              <div className="text-primary">
                {displayedText}
                {displayedText.length < systemText.length && (
                  <span className="animate-pulse">█</span>
                )}
              </div>

              {/* Roles array */}
              {showRoles && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-2 pl-4 border-l-2 border-primary/30"
                >
                  <div className="text-muted-foreground">
                    {">"} Identified positions:
                  </div>
                  <div className="text-foreground">
                    {"["}{" "}
                    {roles.slice(0, currentRoleIndex).map((role, i) => (
                      <motion.span
                        key={role}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-primary">"{role}"</span>
                        {i < currentRoleIndex - 1 && (
                          <span className="text-muted-foreground">, </span>
                        )}
                      </motion.span>
                    ))}
                    {currentRoleIndex < roles.length && (
                      <span className="animate-pulse text-muted-foreground"> ...</span>
                    )}
                    {currentRoleIndex >= roles.length && " ]"}
                  </div>
                </motion.div>
              )}

              {/* Ready prompt */}
              {currentRoleIndex >= roles.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="text-green-400">
                    ✓ Protocol ready. Awaiting candidate input.
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="cursor-blink text-muted-foreground">_</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Action Bar */}
            <div className="px-6 pb-6 md:px-8 md:pb-8">
              <Button 
                size="lg"
                className="w-full md:w-auto glitch-hover oxygen-glow bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-sm uppercase tracking-wider"
              >
                Initialize Application Protocol
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-primary/30" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default RecruitmentTerminal;