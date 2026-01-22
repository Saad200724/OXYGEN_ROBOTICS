import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Partner = () => {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navigation />
      <div className="container max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-primary text-sm uppercase tracking-widest"
        >
          // STRATEGIC PARTNERS
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
        >
          Building The Future <span className="text-primary">Together</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12"
        >
          Oxygen Robotics collaborates with industry leaders, academic institutions, 
          and visionary organizations to push the boundaries of AI and Robotics.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8 pt-12 text-left">
          {[
            { type: "Corporate", desc: "Invest in regional hubs and gain early access to market-ready R&D." },
            { type: "Academic", desc: "Integrate our curriculum and projects into your institution's STEM programs." },
            { type: "NGO", desc: "Partner on social impact initiatives through technology and education." },
            { type: "Individual", desc: "Mentor young founders and share your expertise with our global community." }
          ].map((item, index) => (
            <motion.div 
              key={item.type} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-border rounded-lg bg-card/30"
            >
              <h3 className="font-display text-xl font-bold mb-2">{item.type}</h3>
              <p className="text-muted-foreground text-sm mb-6">{item.desc}</p>
              <button className="w-full py-2 border border-primary text-primary font-mono text-xs rounded hover:bg-primary hover:text-primary-foreground transition-all">
                INQUIRE
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Partner;