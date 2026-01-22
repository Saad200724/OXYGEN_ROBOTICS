import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Events = () => {
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
          <h1 className="font-display text-4xl md:text-6xl font-bold">Events</h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-mono">
            Bringing together the brightest young minds through workshops, hackathons, and international competitions.
          </p>
          
          <div className="grid gap-6 pt-12">
            {[
              { date: "MAR 2026", title: "Global Robotics Hackathon", loc: "Dhaka, Bangladesh" },
              { date: "JUN 2026", title: "AI Sovereignty Summit", loc: "Astana, Kazakhstan" }
            ].map((event) => (
              <div key={event.title} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-border rounded-lg bg-card/30">
                <div className="space-y-1">
                  <div className="font-mono text-primary text-sm">{event.date}</div>
                  <h3 className="font-display text-xl font-bold">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.loc}</p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 border border-primary text-primary font-mono text-xs rounded hover:bg-primary hover:text-primary-foreground transition-all">
                  REGISTER NOW
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Events;