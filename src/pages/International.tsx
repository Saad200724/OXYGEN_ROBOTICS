import { motion } from "framer-motion";
import { Check, Users, Globe, Award, TrendingUp, BookOpen, Handshake, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const International = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Operate under the Oxygen Robotics brand with international credibility",
    },
    {
      icon: Users,
      title: "International Network",
      description: "Access to mentors, teams, and collaboration opportunities across borders",
    },
    {
      icon: Handshake,
      title: "Sponsor Attraction",
      description: "Highly attractive to sponsors and partners due to global branding",
    },
    {
      icon: Award,
      title: "Career Boost",
      description: "Boost members' profiles for top universities and career paths",
    },
    {
      icon: TrendingUp,
      title: "Structured Growth",
      description: "Proven growth model for long-term sustainability",
    },
    {
      icon: BookOpen,
      title: "Resource Sharing",
      description: "Access to toolkits, project templates, and guidance across borders",
    },
    {
      icon: Briefcase,
      title: "Equity Participation",
      description: "Share in benefits as Oxygen Robotics holds equity in emerging startups",
    },
  ];

  const responsibilities = [
    "Reach out to like-minded individuals within your connections to become part of the chapter",
    "Set up a WhatsApp or Messenger group to maintain communication and collaboration",
    "Establish an initial group of at least 10 members in your country",
    "Fill out the provided form with your expertise, skills, and personal information",
  ];

  const preferredSkills = [
    "AI/ML Enthusiast",
    "Robotics Programmer",
    "Hardware Specialist",
    "Web Development",
    "SaaS Startup",
    "Social Media Manager",
    "Researcher",
    "Graphic Designer",
    "Finance and Marketing",
    "Administration",
    "Data Analysis",
    "PID/Inverse Kinematics",
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
            // OXYGEN ROBOTICS INTERNATIONAL
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            A New Beginning
            <br />
            <span className="text-primary">Starts From Here</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We aim to build chapters in various countries and unite young
            innovative minds together to build a better world.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-card/30 border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // BENEFITS
            </span>
            <h2 className="font-display text-3xl font-bold mt-4">
              Why Start a Chapter?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-border rounded-lg bg-background/50 hover:border-primary/50 transition-colors group"
              >
                <benefit.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Responsibilities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-primary text-sm uppercase tracking-widest">
                // RESPONSIBILITIES
              </span>
              <h2 className="font-display text-2xl font-bold mt-4 mb-6">
                Initial Steps to Start a Chapter
              </h2>
              <div className="space-y-4">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Preferred Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-primary text-sm uppercase tracking-widest">
                // PREFERRED SKILLS
              </span>
              <h2 className="font-display text-2xl font-bold mt-4 mb-6">
                Who We Are Looking For
              </h2>
              <div className="flex flex-wrap gap-3">
                {preferredSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1.5 text-sm font-mono border border-border rounded-full bg-card/50 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
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
              Ready to Start Your Chapter?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join the global movement and bring Oxygen Robotics to your country.
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono text-sm rounded hover:bg-primary/90 transition-all"
            >
              Apply Now
              <span>→</span>
            </a>
            <p className="text-muted-foreground/60 text-xs mt-4 font-mono">
              Fill out the form and we will get back to you within 48 hours
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default International;
