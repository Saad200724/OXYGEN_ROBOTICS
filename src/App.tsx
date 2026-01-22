import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import International from "./pages/International";
import Gallery from "./pages/Gallery";
import Panel from "./pages/Panel";
import Projects from "./pages/Projects";
import Archives from "./pages/Archives";
import TechStack from "./pages/TechStack";
import Events from "./pages/Events";
import Stories from "./pages/Stories";
import Join from "./pages/Join";
import Partner from "./pages/Partner";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/international" element={<International />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/events" element={<Events />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/join" element={<Join />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/profile/:id" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
