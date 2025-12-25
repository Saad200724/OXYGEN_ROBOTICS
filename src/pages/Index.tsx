import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import InnovationPipeline from "@/components/InnovationPipeline";
import RecruitmentTerminal from "@/components/RecruitmentTerminal";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BentoGrid />
      <InnovationPipeline />
      <RecruitmentTerminal />
      <PartnersSection />
      <Footer />
    </main>
  );
};

export default Index;