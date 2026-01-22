import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navigation />
      <div className="container max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">// OXYGEN I-LAB</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Active Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-mono">
            Incubating market-ready robotics and AI solutions designed for local sovereignty and global impact.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 pt-12">
            {[
              { title: "PatientPal", desc: "AI-driven healthcare robotics for remote patient monitoring." },
              { title: "Phoenix Echo", desc: "Next-gen drone technology for industrial inspections." }
            ].map((project) => (
              <div key={project.title} className="p-8 border border-border rounded-lg bg-card/30 hover:border-primary/50 transition-colors">
                <h3 className="font-display text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.desc}</p>
                <div className="inline-flex items-center gap-2 text-primary font-mono text-sm">
                  VIEW ARCHIVES →
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Projects;