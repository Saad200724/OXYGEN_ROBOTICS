import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PartnersAffiliates = () => {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-primary text-sm uppercase tracking-widest"
          >
            // ECOSYSTEM
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Partners & <span className="text-primary">Affiliates</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Building a collaborative network of innovation through strategic 
            alliances and formal memorandums of understanding.
          </motion.p>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section id="strategic" className="py-20 px-4 bg-card/10 scroll-mt-24">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="text-left">
              <span className="font-mono text-primary text-xs uppercase tracking-[0.2em]">// DIVISION_01</span>
              <h2 className="font-display text-3xl font-bold mt-2">Strategic Partners</h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-md text-left md:text-right">
              Industry leaders and tech giants collaborating on core research and development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["PARTNER_ALPHA", "PARTNER_BETA", "PARTNER_GAMMA", "PARTNER_DELTA"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-video border border-border rounded-xl bg-background flex items-center justify-center grayscale hover:grayscale-0 hover:border-primary/50 transition-all group"
              >
                <span className="font-display font-bold text-xl opacity-20 group-hover:opacity-100 transition-opacity">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliated MOUs Section */}
      <section id="affiliates" className="py-20 px-4 scroll-mt-24">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="text-left">
              <span className="font-mono text-primary text-xs uppercase tracking-[0.2em]">// DIVISION_02</span>
              <h2 className="font-display text-3xl font-bold mt-2">Affiliated MOUs</h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-md text-left md:text-right">
              Formal collaborations with academic institutions and regional organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { entity: "University of Innovation", date: "Est. 2024", scope: "Joint Research & Internship" },
              { entity: "Global Tech Council", date: "Est. 2025", scope: "Standardization & Ethics" },
              { entity: "Robotics Hub Asia", date: "Est. 2023", scope: "Resource Sharing" },
              { entity: "Future Labs Initiative", date: "Est. 2024", scope: "Talent Development" }
            ].map((mou, i) => (
              <motion.div
                key={mou.entity}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 border border-border rounded-2xl bg-card/30 flex justify-between items-center group hover:bg-card/50 transition-colors"
              >
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{mou.entity}</h3>
                  <p className="text-primary font-mono text-[10px] uppercase tracking-widest">{mou.scope}</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-muted-foreground">{mou.date}</div>
                  <div className="mt-2 h-1 w-8 bg-primary/30 group-hover:w-12 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-border">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Join Our Ecosystem</h2>
          <p className="text-muted-foreground mb-10">
            We are always looking for visionary partners to expand our reach and impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:partnerships@oxygenrobotics.org" className="px-8 py-4 bg-primary text-primary-foreground font-mono text-sm rounded-full hover:bg-primary/90 transition-all">
              Propose Partnership
            </a>
            <a href="/join" className="px-8 py-4 border border-border text-foreground font-mono text-sm rounded-full hover:bg-secondary/50 transition-all">
              Join Community
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PartnersAffiliates;