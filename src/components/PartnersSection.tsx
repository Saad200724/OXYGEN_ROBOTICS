import { motion } from "framer-motion";
import orwaLogo from "@/assets/orwa-logo.png";
import bbaLogo from "@/assets/bba-logo.png";
import kipLogo from "@/assets/kip-logo.png";

const PartnersSection = () => {
  const partners = [
    { name: "Biman Bangladesh Airlines", logo: bbaLogo },
    { name: "Old Remians Welfare Association", logo: orwaLogo },
    { name: "KIP Hotel", logo: kipLogo },
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
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
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
              <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-auto max-w-[140px] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
