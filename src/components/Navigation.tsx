import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import oxygenLogo from "@/assets/oxygen-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    {
      label: "About Us",
      href: "/about",
      sublinks: [
        { label: "Our Story", href: "/about#story" },
        { label: "Mission & Vision", href: "/about#mission" },
        { label: "Our Founders", href: "/about#founders" },
        { label: "Strategic Partners", href: "/about#partners" },
      ],
    },
    {
      label: "Oxygen i-Lab",
      href: "/ilab",
      sublinks: [
        { label: "Active Projects", href: "/ilab#active" },
        { label: "Research Archives", href: "/ilab#archives" },
        { label: "Tech Stack", href: "/ilab#tech" },
      ],
    },
    {
      label: "Our Impact",
      href: "/impact",
      sublinks: [
        { label: "Global Chapters", href: "/international" },
        { label: "Events", href: "/gallery" },
        { label: "Success Stories", href: "/impact#stories" },
      ],
    },
    {
      label: "Community",
      href: "/community",
      sublinks: [
        { label: "Join Us", href: "/international#join" },
        { label: "Partner with Us", href: "/impact#partner" },
      ],
    },
    { label: "Panel", href: "/panel" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={oxygenLogo} alt="Oxygen Robotics" className="h-6 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 font-mono text-xs tracking-wider transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {item.sublinks && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>

                {item.sublinks && (
                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-56 pt-2"
                      >
                        <div className="bg-background/95 border border-border rounded-sm backdrop-blur-xl p-2 shadow-2xl">
                          {item.sublinks.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="block px-3 py-2 text-[10px] font-mono tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all rounded-sm"
                            >
                              {sub.label.toUpperCase()}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Link
              to="/international"
              className="ml-4 flex items-center gap-2 font-mono text-[10px] tracking-widest px-5 py-2.5 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all"
            >
              START NOW
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="lg:hidden fixed inset-0 top-20 bg-background z-40 p-4 overflow-y-auto"
            >
              <div className="space-y-6">
                {navigation.map((item) => (
                  <div key={item.label} className="space-y-3">
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-xl font-display font-bold text-foreground"
                    >
                      {item.label}
                    </Link>
                    {item.sublinks && (
                      <div className="grid grid-cols-1 gap-2 pl-4 border-l border-border">
                        {item.sublinks.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-mono text-muted-foreground"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
