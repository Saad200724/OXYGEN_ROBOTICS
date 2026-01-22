import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import orwaLogo from "@/assets/orwa-logo.png";
import bbaLogo from "@/assets/bba-logo.png";
import kipLogo from "@/assets/kip-logo.png";
import sinologyLogo from "/assets/sinology-logo.png";

const PartnersData: Record<string, { strategic: { name: string, logo: string }[], affiliates: { entity: string, date: string, scope: string, logo?: string }[] }> = {
  "2026": {
    strategic: [
      { name: "Biman Bangladesh Airlines", logo: bbaLogo },
      { name: "Old Remians Welfare Association", logo: orwaLogo },
      { name: "KIP Hotel", logo: kipLogo },
    ],
    affiliates: [
      { entity: "Sinology", date: "Est. 2026", scope: "International Collaboration", logo: sinologyLogo }
    ]
  },
  "2025": {
    strategic: [
      { name: "Biman Bangladesh Airlines", logo: bbaLogo },
      { name: "Old Remians Welfare Association", logo: orwaLogo },
      { name: "KIP Hotel", logo: kipLogo },
    ],
    affiliates: []
  }
};

const PartnersAffiliates = () => {
  const [selectedYear, setSelectedYear] = useState("2026");
  const data = PartnersData[selectedYear];

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
          
          {/* Year Toggle */}
          <div className="flex justify-center gap-4 mt-8">
            {Object.keys(PartnersData).sort().reverse().map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-8 py-2 font-mono text-sm border transition-all ${
                  selectedYear === year 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
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
                {data.strategic.map((partner, i) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-video border border-border rounded-xl bg-background flex items-center justify-center grayscale hover:grayscale-0 hover:border-primary/50 transition-all group p-4"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-full w-auto max-h-[60px] object-contain opacity-40 group-hover:opacity-100 transition-opacity"
                    />
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
                {data.affiliates.map((mou, i) => (
                  <motion.div
                    key={mou.entity}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-8 border border-border rounded-2xl bg-card/30 flex justify-between items-center group hover:bg-card/50 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      {mou.logo && (
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-border bg-white p-2">
                          <img src={mou.logo} alt={mou.entity} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-display text-xl font-bold mb-1">{mou.entity}</h3>
                        <p className="text-primary font-mono text-[10px] uppercase tracking-widest">{mou.scope}</p>
                      </div>
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
        </motion.div>
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 px-4 border-t border-border">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Join Our Ecosystem</h2>
          <p className="text-muted-foreground mb-10">
            We are always looking for visionary partners to expand our reach and impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/partner" className="px-8 py-4 bg-primary text-primary-foreground font-mono text-sm rounded-full hover:bg-primary/90 transition-all">
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