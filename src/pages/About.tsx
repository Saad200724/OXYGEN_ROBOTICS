import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const About = () => {
  useScrollToHash();
  const timeline = [
    {
      year: "2022",
      title: "Mini Robot Project Workshop Established",
      description:
        "Two Grade 8 students from Dhaka Residential Model College, Ilham Sajid and Fahim Aziz, founded a robotics store where fellow students could buy ready-made science projects. This hands-on experience and early success inspired the vision for a larger R&D organization.",
    },
    {
      year: "2023",
      title: "Formed as a High School Robotics Team",
      description:
        "After achieving success at local science fairs and competitions, Fahim and Ilham formed a dedicated robotics team. They invited Najmus Saadat Fahim, later joined by Raj Chowdhury and other juniors. Najmus emerged as a key figure who transformed the team into a full-fledged organization.",
    },
    {
      year: "2024",
      title: "Defined Vision and Mission",
      description:
        "After a five-month hiatus, only Najmus Saadat Fahim and Ilham Sajid remained. Together, they developed a real-world execution plan and shaped a renewed vision. Md. Ahtesamul Rasul joined as Chief Technology Officer, bringing AI expertise to the organization.",
    },
    {
      year: "2025",
      title: "From Vision to Global Execution",
      description:
        "Oxygen Robotics participated in major international competitions and received awards, establishing a strong Bangladeshi base, leadership structure, and foundations for global ambitions. Focus shifted from individual projects to market-ready products.",
    },
  ];

  const missions = [
    "Research & develop innovative technical solutions",
    "Create mentorship & opportunity through events",
    "Compete internationally",
    "Create technical-social consultancy and business to support Oxygen Robotics financially",
  ];

  return (
    <main className="min-h-screen bg-background pt-24">
      <Navigation />

      {/* Our Story Section */}
      <section id="story" className="py-20 px-4 scroll-mt-24">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-primary text-sm uppercase tracking-widest"
          >
            // How the story Initiated
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Fueled by Curiosity.
            <br />
            <span className="text-primary">Built on Struggle.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Oxygen Robotics started as a small team with a big dream. Born in 2022 in
            Dhaka, Bangladesh, we have experienced the grind behind innovation and the
            passion it takes to build something from nothing.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-primary text-sm uppercase tracking-widest">// TIMELINE</span>
            <h2 className="font-display text-3xl font-bold mt-4">Growth & Evolution</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-2 border-primary bg-background md:-translate-x-1/2" />
                <div className={`${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="font-mono text-primary text-sm mb-2">{item.year}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 px-4 scroll-mt-24 bg-card/10">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="font-mono text-primary text-sm uppercase tracking-widest">// OUR MISSION</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 leading-tight">
                  Driving the Future of <br />
                  <span className="text-primary">Human-Robot Synergy</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are committed to pushing the boundaries of technology while fostering 
                a global community of innovators. Our mission is built on four core 
                pillars that define our impact and direction.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">04</span>
                  <span className="text-xs font-mono uppercase text-muted-foreground">Strategic Pillars</span>
                </div>
                <div className="w-px h-12 bg-border mx-2" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">Global</span>
                  <span className="text-xs font-mono uppercase text-muted-foreground">Impact Scope</span>
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 bg-background border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="font-display text-6xl font-bold italic">0{index + 1}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    <p className="text-base font-medium text-foreground leading-relaxed pr-8">
                      {mission}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 bg-card/30 border-y border-border scroll-mt-24">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-primary text-sm uppercase tracking-widest">// VISION</span>
            <h2 className="font-display text-3xl font-bold mt-4">The Future We Build</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-border rounded-lg bg-background/50"
            >
              <div className="font-mono text-xs text-primary mb-2">2-5 YEARS</div>
              <h3 className="font-display text-xl font-bold mb-4">Short Term</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Build Oxygen Robotics International into a global R&D powerhouse that unites engineers, builders, and leaders. Establish credible international chapters and win international competitions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-border rounded-lg bg-background/50"
            >
              <div className="font-mono text-xs text-primary mb-2">5-10 YEARS</div>
              <h3 className="font-display text-xl font-bold mb-4">Long Term</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Secure billion-dollar funding by strategically investing in and taking equity stakes in startups we help build. Drive transformative innovation across industries while strengthening our global community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 px-4 scroll-mt-24">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-primary text-sm uppercase tracking-widest">// LEADERSHIP</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">The Minds Behind Oxygen</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Meet the visionaries driving innovation and fostering a global community of young engineers and builders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                id: "ilham-sajid", 
                name: "Ilham Sajid", 
                role: "Executive Chairman and Founder",
                initial: "I"
              },
              { 
                id: "najmus-saadat-fahim", 
                name: "Najmus Saadat Fahim", 
                role: "Co Founder(2024) and Executive Director",
                initial: "N"
              },
              { 
                id: "fahim-aziz", 
                name: "Fahim Aziz", 
                role: "Co Founder(2022)",
                initial: "F"
              }
            ].map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group relative"
              >
                <Link to={`/profile/${founder.id}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card/30 border border-border group-hover:border-primary/50 transition-all duration-500">
                    {/* Artistic Background Element */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/90 z-10" />
                    
                    {/* Placeholder for Photo with Initial */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary font-display text-5xl font-bold group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-700 -translate-y-12">
                        {founder.initial}
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="space-y-2">
                        <div className="h-px w-8 bg-primary group-hover:w-16 transition-all duration-500" />
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          {founder.name}
                        </h3>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                          {founder.role}
                        </p>
                        <div className="flex gap-3 pt-2">
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="w-4 h-4" />
                          </a>
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Facebook className="w-4 h-4" />
                          </a>
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="w-4 h-4" />
                          </a>
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="pt-4 flex items-center gap-2 text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          <span>VIEW CHRONICLES</span>
                          <span className="text-primary">→</span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;