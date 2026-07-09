import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import oxygenLogo from "@/assets/oxygen-logo.png";

const columns = [
  {
    label: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Join Us", to: "/join" },
      { label: "Gallery", to: "/gallery" },
      { label: "Panel", to: "/panel" },
    ],
  },
  {
    label: "I-Lab",
    links: [
      { label: "Active Projects", to: "/projects" },
      { label: "Research Archives", to: "/archives" },
      { label: "Tech Stack", to: "/tech-stack" },
      { label: "Events", to: "/events" },
      { label: "Success Stories", to: "/stories" },
    ],
  },
  {
    label: "Community",
    links: [
      { label: "Join Us", to: "/join" },
      { label: "Partner with Us", to: "/partner" },
      { label: "Partners & Affiliates", to: "/partners-n-affiliate" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand column — spans 2 cols on large */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-5">
              <img
                src={oxygenLogo}
                alt="Oxygen Robotics International"
                className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              A student-led global R&amp;D ecosystem building the next generation of robotics founders across borders.
            </p>

            {/* Location chip — Replit-style */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-secondary/30 text-xs font-mono text-muted-foreground mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Dhaka, Bangladesh · Est. 2022
            </div>

            {/* Social row */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  href: "https://github.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {columns.map((col, i) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * (i + 1) }}
            >
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground/60 uppercase mb-4">
                {col.label}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      <span className="block w-0 group-hover:w-3 h-px bg-primary transition-all duration-200 ease-out" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-muted-foreground/50">
            © 2026 Oxygen Robotics International · A Global R&amp;D Entity
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/40 italic text-center sm:text-right">
            "Fueled by Curiosity. Built on Struggle. Engineered for Sovereignty."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
