import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navigation />
      <div className="container max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">// COMMUNITY</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Join the Movement</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Become a part of the global youth robotics revolution. Start a chapter, join a project, or mentor the next generation.
          </p>
          
          <form className="max-w-md mx-auto space-y-4 pt-12 text-left">
            <div className="space-y-1">
              <label className="font-mono text-xs text-muted-foreground">FULL NAME</label>
              <input type="text" className="w-full bg-card/50 border border-border p-3 rounded font-mono text-sm focus:border-primary outline-none" placeholder="John Doe" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs text-muted-foreground">EMAIL ADDRESS</label>
              <input type="email" className="w-full bg-card/50 border border-border p-3 rounded font-mono text-sm focus:border-primary outline-none" placeholder="john@example.com" />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs text-muted-foreground">INTEREST</label>
              <select className="w-full bg-card/50 border border-border p-3 rounded font-mono text-sm focus:border-primary outline-none">
                <option>Start a Chapter</option>
                <option>Join as a Developer</option>
                <option>Partnership Inquiry</option>
              </select>
            </div>
            <button className="w-full py-4 bg-primary text-primary-foreground font-mono font-bold rounded hover:bg-primary/90 transition-all mt-4">
              SUBMIT APPLICATION
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Join;