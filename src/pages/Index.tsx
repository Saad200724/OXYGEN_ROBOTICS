import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Rocket, Users, Globe, Award } from "lucide-react";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const Index = () => {
  useScrollToHash();
  const highlights = [
    {
      icon: Rocket,
      title: "R&D",
      description: "Research and development in AI and Robotics",
    },
    {
      icon: Users,
      title: "Educational Initiative",
      description: "Empowering students through technical workshops",
    },
    {
      icon: Globe,
      title: "Student/Youth Led",
      description: "Operated by passionate young innovators",
    },
    {
      icon: Award,
      title: "50+ member",
      description: "A growing community of global creators",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // WHAT WE DO
            </span>
            <h2 className="font-display text-3xl font-bold mt-4">
              More Than Just Robotics
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-border rounded-lg bg-background/50 hover:border-primary/50 transition-colors group text-center"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-primary text-sm uppercase tracking-widest">
                // OUR STORY
              </span>
              <h2 className="font-display text-3xl font-bold mt-4 mb-4">
                From a School Project to a Global Movement
              </h2>
              <p className="text-muted-foreground mb-6">
                What started as two Grade 8 students selling science projects in
                2022 has grown into an international organization uniting young
                innovators across borders. Today, we are not just making robots —
                we are building a global youth movement.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
              >
                Read Our Full Story
                <span>→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { year: "2022", event: "Mini Robot Workshop Established" },
                { year: "2023", event: "Formed High School Robotics Team" },
                { year: "2024", event: "Defined Vision & Mission" },
                { year: "2025", event: "Global Expansion Begins" },
              ].map((item, index) => (
                <div
                  key={item.year}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card/30"
                >
                  <div className="font-mono text-primary font-bold">
                    {item.year}
                  </div>
                  <div className="w-px h-8 bg-border" />
                  <div className="text-sm text-foreground">{item.event}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5 border-y border-primary/20">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Join the Global Movement
            </h2>
            <p className="text-muted-foreground mb-8">
              Start a chapter in your country and unite young innovators under one
              mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/international"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all"
              >
                Start a Chapter
                <span>→</span>
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm rounded hover:bg-secondary/50 transition-all"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnersSection />
      <Footer />
    </main>
  );
};

export default Index;
