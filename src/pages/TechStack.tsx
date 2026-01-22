import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TechStack = () => {
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
          <h1 className="font-display text-4xl md:text-6xl font-bold">Tech Stack</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-mono">
            The advanced technologies and frameworks powering our robotics and AI ecosystem.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {[
              { category: "Hardware", items: ["NVIDIA Jetson", "STM32", "LiDAR", "Custom PCBs"] },
              { category: "Software", items: ["ROS2", "Python", "C++", "RTOS"] },
              { category: "AI & ML", items: ["PyTorch", "TensorFlow", "OpenCV", "CUDA"] },
              { category: "Infrastructure", items: ["Docker", "Kubernetes", "MQTT", "WebRTC"] }
            ].map((tech) => (
              <div key={tech.category} className="p-8 border border-border rounded-lg bg-card/30">
                <h3 className="font-display text-xl font-bold mb-4 text-primary">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map(item => (
                    <li key={item} className="font-mono text-sm text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default TechStack;