import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
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
    "Creating innovative solutions for existing problems through AI and Robotics",
    "Establish and grow international chapters to build a global youth robotics community",
    "Recruit and train young talents while providing mentorship from professors, engineers, and industry leaders",
    "Build a financially sustainable model through sponsorships, partnerships and startups",
    "Foster collaboration among members across countries for knowledge exchange and joint projects",
    "Participate in international competitions to build global networks and strengthen credibility",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-primary text-sm uppercase tracking-widest"
          >
            // OUR STORY
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Fueled by Curiosity.
            <br />
            <span className="text-primary">Built on Struggle.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Oxygen Robotics started as a small team with a big dream. Born in 2022 in
            Dhaka, Bangladesh, we have experienced the grind behind innovation and the
            passion it takes to build something from nothing.
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // VISION
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Short Term */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-border rounded-lg bg-background/50"
            >
              <div className="font-mono text-xs text-primary mb-2">2-5 YEARS</div>
              <h3 className="font-display text-xl font-bold mb-4">Short Term</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Build Oxygen Robotics International into a global R&D powerhouse that
                unites engineers, builders, entrepreneurs, and leaders. Create a
                collaborative and financially sustainable ecosystem with expert
                mentorship, hands-on workshops, real-world problem-solving projects,
                and startup building. Establish credible international chapters and
                win international competitions.
              </p>
            </motion.div>

            {/* Long Term */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-border rounded-lg bg-background/50"
            >
              <div className="font-mono text-xs text-primary mb-2">5-10 YEARS</div>
              <h3 className="font-display text-xl font-bold mb-4">Long Term</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Secure billion-dollar funding by strategically investing in and
                taking equity stakes in startups we help build and support. This
                financial foundation will enable us to grow into a powerful,
                global youth-led R&D organization that drives transformative
                innovation across industries while strengthening chapters,
                mentorship programs, and workshops.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // MISSION
            </span>
            <h2 className="font-display text-3xl font-bold mt-4">What We Do</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 border border-border rounded-lg bg-card/30 hover:border-primary/50 transition-colors"
              >
                <div className="font-mono text-primary text-xs mb-3">
                  0{index + 1}
                </div>
                <p className="text-sm text-foreground">{mission}</p>
              </motion.div>
            ))}
          </div>
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
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // TIMELINE
            </span>
            <h2 className="font-display text-3xl font-bold mt-4">Our Journey</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
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
                {/* Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-2 border-primary bg-background md:-translate-x-1/2`}
                />

                {/* Content */}
                <div className={`${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="font-mono text-primary text-sm mb-2">
                    {item.year}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Join the Movement?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start a chapter in your country and be part of something bigger.
            </p>
            <Link
              to="/international"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all"
            >
              Explore International Chapters
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
