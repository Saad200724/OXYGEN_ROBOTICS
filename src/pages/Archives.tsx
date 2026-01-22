import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Archives = () => {
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
          <h1 className="font-display text-4xl md:text-6xl font-bold">Research Archives</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-mono">
            A comprehensive repository of our past research, whitepapers, and technical documentation.
          </p>
          
          <div className="grid gap-4 pt-12">
            {[
              "Neural Interface Protocols for Prosthetics (2024)",
              "Autonomous Navigation in Dense Urban Environments (2023)",
              "Low-Latency Telemetry for Swarm Robotics (2023)",
              "Decentralized AI Governance Models (2025)"
            ].map((archive) => (
              <div key={archive} className="p-6 border border-border rounded-lg bg-card/30 flex justify-between items-center hover:border-primary/30 transition-colors">
                <span className="font-mono text-sm">{archive}</span>
                <span className="text-primary font-mono text-xs">DOWNLOAD PDF ↘</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Archives;