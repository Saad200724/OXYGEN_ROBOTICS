import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InnovationPipeline = () => {
  const projects = [
    {
      codename: "ALPHA",
      name: "PatientPal",
      status: "PROTOTYPE",
      sector: "MedTech",
      description: "AI-driven healthcare assistance system for patient monitoring and care coordination.",
      specs: [
        { label: "AI Model", value: "GPT-4 Integration" },
        { label: "Platform", value: "Cross-Platform" },
        { label: "Stage", value: "Beta Testing" },
      ],
    },
    {
      codename: "BETA",
      name: "Phoenix Echo",
      status: "CLASSIFIED",
      sector: "AI/ML",
      description: "Next-generation machine learning framework for autonomous decision systems.",
      specs: [
        { label: "Framework", value: "Proprietary" },
        { label: "Accuracy", value: "98.7%" },
        { label: "Stage", value: "R&D" },
      ],
    },
    {
      codename: "GAMMA",
      name: "Tech Car",
      status: "OPERATIONAL",
      sector: "Automotive",
      description: "Embedded systems prototype for intelligent vehicle control and automation.",
      specs: [
        { label: "System", value: "Embedded Linux" },
        { label: "Sensors", value: "12 Modules" },
        { label: "Stage", value: "Operational" },
      ],
    },
  ];

  const statusColors: Record<string, string> = {
    PROTOTYPE: "text-yellow-400 border-yellow-400/50",
    CLASSIFIED: "text-red-400 border-red-400/50",
    OPERATIONAL: "text-green-400 border-green-400/50",
  };

  return (
    <section className="py-24 px-4 bg-card/50 blueprint-grid relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">
            // INNOVATION PIPELINE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            R&D Portfolio
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Proprietary technologies engineered for market disruption.
          </p>
        </motion.div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 group relative overflow-hidden h-full">
                    {/* Blueprint corner markers */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/30" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/30" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/30" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/30" />
                    
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="font-mono text-xs text-muted-foreground mb-1">
                            PROJECT_{project.codename}
                          </div>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {project.name}
                          </h3>
                        </div>
                        <div className={`font-mono text-xs px-2 py-1 border rounded ${statusColors[project.status]}`}>
                          {project.status}
                        </div>
                      </div>

                      {/* Sector Tag */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="font-mono text-xs text-primary uppercase">
                          {project.sector}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Specs Grid */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                        {project.specs.map((spec, i) => (
                          <div key={i} className="text-center">
                            <div className="font-mono text-xs text-muted-foreground uppercase mb-1">
                              {spec.label}
                            </div>
                            <div className="font-mono text-sm text-foreground">
                              {spec.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Decorative scan line */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-secondary border-border hover:border-primary hover:bg-primary/10 glitch-hover" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-secondary border-border hover:border-primary hover:bg-primary/10 glitch-hover" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default InnovationPipeline;