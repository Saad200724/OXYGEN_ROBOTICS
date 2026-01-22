import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import oxygenLogo from "@/assets/oxygen-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuStructure = [
    {
      label: "About Us",
      subLinks: [
        { label: "Our Story", href: "/about" },
        { label: "Mission & Vision", href: "/about#vision" },
        { label: "Our Founders", href: "/about#founders" },
        { label: "Strategic Partners", href: "/about#partners" },
      ],
    },
    {
      label: "Oxygen i-Lab",
      subLinks: [
        { label: "Active Projects", href: "/projects" },
        { label: "Research Archives", href: "/archives" },
        { label: "Tech Stack", href: "/tech-stack" },
      ],
    },
    {
      label: "Our Impact",
      subLinks: [
        { label: "Global Chapters", href: "/international" },
        { label: "Events", href: "/events" },
        { label: "Success Stories", href: "/stories" },
      ],
    },
    {
      label: "Community",
      subLinks: [
        { label: "Join Us", href: "/join" },
        { label: "Partner with Us", href: "/partner" },
      ],
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          {/* Centered Nav Container */}
          <div className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full border border-border bg-background/50 backdrop-blur-md">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={oxygenLogo} alt="Oxygen Robotics" className="h-10 w-auto transition-transform hover:scale-105" />
            </Link>

            {/* Navigation Menu */}
            <NavigationMenu className="static">
              <NavigationMenuList className="gap-1">
                {menuStructure.map((item) => (
                  <NavigationMenuItem key={item.label} className="static">
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-mono text-xs tracking-wide text-muted-foreground hover:text-foreground h-auto py-1">
                      {item.label.toUpperCase()}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute top-full left-0 w-full mt-0 bg-background border-b border-border shadow-xl rounded-none">
                      <div className="container max-w-7xl mx-auto py-8 px-4">
                        <ul className="flex flex-wrap gap-x-16 gap-y-4">
                          {item.subLinks.map((sub) => (
                            <li key={sub.href} className="min-w-[150px]">
                              <NavigationMenuLink asChild>
                                <Link
                                  to={sub.href}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary",
                                    isActive(sub.href) && "text-primary"
                                  )}
                                >
                                  <div className="text-sm font-display font-bold leading-none mb-1">{sub.label}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {/* Direct Links */}
                <NavigationMenuItem>
                  <Link
                    to="/panel"
                    className={cn(
                      "font-mono text-xs tracking-wide transition-colors px-3",
                      isActive("/panel") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    PANEL
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
              <img src={oxygenLogo} alt="Oxygen Robotics" className="h-8 w-auto" />
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
                {menuStructure.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="font-mono text-xs text-primary px-2">{item.label.toUpperCase()}</div>
                    <div className="pl-4 space-y-1">
                      {item.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => setIsOpen(false)}
                          className={`block font-mono text-sm py-1 transition-colors ${
                            isActive(sub.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  to="/panel"
                  onClick={() => setIsOpen(false)}
                  className={`block font-mono text-sm py-2 transition-colors ${
                    isActive("/panel") ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  PANEL
                </Link>
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
