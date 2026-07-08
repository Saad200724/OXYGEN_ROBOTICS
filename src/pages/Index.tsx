import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Globe,
  Award,
  ArrowRight,
  Zap,
  BookOpen,
  Target,
} from "lucide-react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const Index = () => {
  useScrollToHash();

  const highlights = [
    {
      icon: Rocket,
      title: "R&D",
      description: "AI, robotics, and autonomous systems built by student teams.",
      stat: "4+ projects",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Workshops and mentorship that teach hardware and software.",
      stat: "200+ students",
    },
    {
      icon: Globe,
      title: "Chapters",
      description: "Student-led teams across South Asia and Central Asia.",
      stat: "3 regions",
    },
    {
      icon: Award,
      title: "Competitions",
      description: "Real events where real skills are tested against real problems.",
      stat: "10+ events",
    },
  ];

  const timeline = [
    { year: "2022", event: "Mini Robot Workshop in Dhaka" },
    { year: "2023", event: "First high school robotics team formed" },
    { year: "2024", event: "Vision, mission, and structure defined" },
    { year: "2025", event: "Global expansion begins" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* What We Do — Raw list */}
      <section className="py-24 px-4 border-y border-border">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-primary text-sm uppercase tracking-widest">
                // WHAT WE DO
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 leading-[1.05]">
                Four things we actually do.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-border">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group border-b border-border py-6 sm:py-8 grid grid-cols-12 gap-4 items-start hover:bg-card/20 transition-colors -mx-4 px-4"
                  >
                    <div className="col-span-12 sm:col-span-1 font-mono text-xs text-muted-foreground pt-1">
                      0{index + 1}
                    </div>
                    <div className="col-span-12 sm:col-span-3 font-display text-lg sm:text-xl font-bold flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-primary" />
                      {item.title}
                    </div>
                    <div className="col-span-8 sm:col-span-5 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </div>
                    <div className="col-span-4 sm:col-span-3 font-mono text-xs text-primary text-left sm:text-right">
                      {item.stat}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story — Editorial split */}
      <section className="py-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-primary text-sm uppercase tracking-widest">
                // OUR STORY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 leading-[1.05] mb-6">
                From two students to a global lab.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as Grade 8 students selling science projects in Dhaka has grown into an international organization. We build, compete, teach, and expand.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Young people should not just consume technology — they should own it, shape it, and build the companies that define it.
              </p>
              <Link
                to="/about"
                className="font-mono text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Read the full story →
              </Link>
            </div>

            <div className="lg:col-span-7 lg:pt-12">
              <div className="border border-border p-6 sm:p-8 bg-card/20">
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8">
                  Timeline // 2022 — 2025
                </div>
                <div className="space-y-6">
                  {timeline.map((item) => (
                    <div key={item.year} className="flex gap-4 items-baseline">
                      <div className="font-mono text-sm text-primary w-14 shrink-0">
                        {item.year}
                      </div>
                      <div className="text-foreground text-sm sm:text-base">
                        {item.event}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Inverted, raw */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs uppercase tracking-widest opacity-80">
              // JOIN THE MOVEMENT
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Start a chapter.
            </h2>
            <p className="font-mono text-sm opacity-90 mb-10 max-w-xl mx-auto">
              Bring Oxygen to your school, city, or country. We provide the framework, the mentorship, and the network.
            </p>
            <Link
              to="/international"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-mono text-sm font-semibold hover:bg-background/90 transition-colors"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <PartnersSection />
      <ActivitiesSection />
      <Footer />
    </main>
  );
};

export default Index;
