import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Stories = () => {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navigation />
      <div className="container max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">// OUR IMPACT</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Success Stories</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-mono">
            Celebrating the breakthroughs and milestones of the young innovators within our network.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 pt-12">
            {[
              { title: "From Workshop to Startup", desc: "How a high school robotics project became a venture-backed startup in Dhaka." },
              { title: "Empowering Rural Regions", desc: "Expanding technical literacy to 10+ underserved areas across Central Asia." }
            ].map((story) => (
              <div key={story.title} className="space-y-4 group">
                <div className="aspect-video bg-card/50 border border-border rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-border font-mono text-xs italic">Media Placeholder</div>
                </div>
                <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">{story.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{story.desc}</p>
                <button className="text-primary font-mono text-xs">READ FULL ARTICLE →</button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Stories;