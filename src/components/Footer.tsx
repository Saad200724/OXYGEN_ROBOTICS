import { motion } from "framer-motion";
import oxygenLogo from "@/assets/oxygen-logo.png";

const Footer = () => {
  const links = [
    { label: "Legal", href: "#" },
    { label: "Chapter Franchise", href: "#" },
    { label: "Investor Relations", href: "#" },
  ];

  return (
    <footer className="py-12 px-4 bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={oxygenLogo} alt="Oxygen Robotics" className="h-8 w-auto" />
            <div className="text-sm text-muted-foreground">
              © 2026 <span className="text-foreground font-semibold">Oxygen Robotics International</span>. 
              A Global R&D Entity.
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors glitch-hover"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="text-[10px] font-mono text-muted-foreground border-l border-border pl-4 hidden md:block">
              Powered by <a href="https://znforge.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ZnForge (znforge.dev)</a>
            </div>
            <div className="text-[10px] font-mono text-muted-foreground md:hidden">
              Powered by <a href="https://znforge.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ZnForge (znforge.dev)</a>
            </div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="font-mono text-xs text-muted-foreground italic">
            "Fueled by Curiosity. Built on Struggle. Engineered for Sovereignty."
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;