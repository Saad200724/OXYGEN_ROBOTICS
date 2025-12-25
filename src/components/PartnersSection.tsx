import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Biman Bangladesh Airlines", initials: "BBA" },
    { name: "Old Remians Welfare Association", initials: "ORWA" },
    { name: "KIP Hotel", initials: "KIP" },
  ];

  return (
    <section className="py-20 px-4 bg-card/30 border-y border-border">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-primary text-sm uppercase tracking-widest">
            // STRATEGIC PARTNERS
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              {/* Placeholder logo - monochrome style */}
              <div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="w-24 h-16 flex items-center justify-center border border-border rounded bg-secondary/30 group-hover:border-primary/50 transition-colors">
                  <span className="font-mono text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {partner.initials}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground text-center max-w-[120px]">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;