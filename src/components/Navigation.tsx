import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import oxygenLogo from "@/assets/oxygen-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PANEL", href: "/panel" },
    { label: "INTERNATIONAL", href: "/international" },
    { label: "GALLERY", href: "/gallery" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          {/* Centered Nav Container */}
          <div className="hidden md:flex items-center gap-8 px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-md">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={oxygenLogo} alt="Oxygen Robotics" className="h-6 w-auto" />
            </Link>

            {/* Navigation Links with Separators */}
            <div className="flex items-center">
              {links.map((link, index) => (
                <div key={link.href} className="flex items-center">
                  <Link
                    to={link.href}
                    className={`font-mono text-xs tracking-wide transition-colors px-3 ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {index < links.length - 1 && (
                    <span className="text-border">|</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/international"
              className="flex items-center gap-2 font-mono text-xs px-4 py-2 border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
            >
              <ArrowRight className="w-3 h-3" />
              <span>Start now</span>
            </Link>
          </div>

          {/* Mobile: Logo and Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link to="/" className="flex items-center">
              <img src={oxygenLogo} alt="Oxygen Robotics" className="h-6 w-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-border">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-mono text-sm py-2 transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/international"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 font-mono text-sm px-4 py-2 border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Start now</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
