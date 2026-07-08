import { Component, ReactNode } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import InteractiveGlobe from "./InteractiveGlobe";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

const StaticGlobe = () => (
  <div className="relative w-full aspect-square flex items-center justify-center">
    <div className="absolute inset-0 rounded-full border border-primary/20 blueprint-grid opacity-40" />
    <motion.div
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-3/5 aspect-square rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 flex items-center justify-center oxygen-glow"
    >
      <Globe className="w-1/3 h-1/3 text-primary" strokeWidth={1.2} />
    </motion.div>
    <div className="absolute inset-6 rounded-full border border-dashed border-primary/10 animate-rotate-slow" />
  </div>
);

const HeroGlobe = () => {
  return (
    <ErrorBoundary fallback={<StaticGlobe />}>
      <InteractiveGlobe />
    </ErrorBoundary>
  );
};

export default HeroGlobe;
