import { motion } from "framer-motion";
import { TrendingUp, Globe, Cpu, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BentoGrid = () => {
  const cards = [
    {
      icon: TrendingUp,
      title: "Billion-Dollar Vision",
      description: "Strategically investing in and taking equity stakes in member-built startups.",
      size: "large",
      highlight: true,
    },
    {
      icon: Globe,
      title: "International Infrastructure",
      description: "Active partnerships with KIP Hotel (Malaysia) and Biman Bangladesh Airlines.",
      size: "normal",
    },
    {
      icon: Cpu,
      title: "Proprietary IP",
      description: "From 'Tech Car' prototypes to AI-driven healthcare assistance systems.",
      size: "normal",
    },
    {
      icon: Calendar,
      title: "The Grind",
      description: "2022: Genesis → 2024: Pivot → 2025: International Execution",
      size: "wide",
      timeline: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">
            // WHY WE EXIST
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            The Venture Builder Model
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  ${card.size === "large" ? "md:col-span-1 lg:row-span-2" : ""}
                  ${card.size === "wide" ? "md:col-span-2 lg:col-span-2" : ""}
                `}
              >
                <Card
                  className={`
                    h-full bg-card border-border hover:border-primary/50 transition-all duration-300
                    group relative overflow-hidden
                    ${card.highlight ? "border-primary/30" : ""}
                  `}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className={`p-8 relative z-10 ${card.size === "large" ? "h-full flex flex-col justify-between min-h-[300px]" : ""}`}>
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:oxygen-glow transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {card.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {card.timeline && (
                      <div className="mt-6 flex items-center gap-4 overflow-x-auto pb-2">
                        {[
                          { year: "2022", event: "Genesis" },
                          { year: "2024", event: "Pivot" },
                          { year: "2025", event: "Execution" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                            <div className="font-mono text-sm">
                              <span className="text-primary">{item.year}</span>
                              <span className="text-muted-foreground ml-1">/ {item.event}</span>
                            </div>
                            {i < 2 && <div className="w-8 h-px bg-border" />}
                          </div>
                        ))}
                      </div>
                    )}

                    {card.highlight && (
                      <div className="mt-8 pt-6 border-t border-border">
                        <div className="font-mono text-sm text-muted-foreground">
                          TARGET VALUATION
                        </div>
                        <div className="text-3xl font-bold text-primary oxygen-glow-text">
                          $1B+
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;