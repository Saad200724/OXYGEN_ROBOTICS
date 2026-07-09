import { motion } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, Heart, User, CheckCircle2, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const tiers = [
  {
    id: "corporate",
    icon: Building2,
    label: "Corporate",
    headline: "Turn R&D spend into market advantage.",
    body: "Embed your brand inside a live, youth-led innovation engine operating across three continents. Get early-look access to proprietary robotics IP, co-brand regional hubs, and pipeline future talent before they graduate.",
    perks: [
      "Named chapter sponsorship with global media reach",
      "Priority access to Oxygen I-Lab research output",
      "Co-branded recruitment pipeline across 3 regions",
      "Quarterly executive briefings on emerging tech",
    ],
    cta: "Explore Corporate Tiers",
    accent: "from-primary/20 to-transparent",
    border: "border-primary/40",
  },
  {
    id: "academic",
    label: "Academic",
    icon: GraduationCap,
    headline: "Bridge classroom theory and real-world systems.",
    body: "Integrate Oxygen Robotics projects into your STEM curriculum. Your students build with actual hardware, real datasets, and production codebases — while your faculty gain a global peer network.",
    perks: [
      "Accredited curriculum modules (robotics & AI)",
      "Joint research publication opportunities",
      "Student exchange & internship pipeline",
      "Access to Oxygen's open-source tech stack",
    ],
    cta: "Propose Academic Collaboration",
    accent: "from-blue-500/10 to-transparent",
    border: "border-blue-500/30",
  },
  {
    id: "ngo",
    label: "NGO / Social Impact",
    icon: Heart,
    headline: "Deploy technology where it matters most.",
    body: "We believe robotics and AI must serve underserved communities, not just labs. Partner with us to co-design programs that bring technical education to regions overlooked by traditional EdTech.",
    perks: [
      "Joint grant applications & impact reporting",
      "Community chapter deployment support",
      "Shared media and storytelling assets",
      "Access to our ambassador and mentor network",
    ],
    cta: "Start an Impact Initiative",
    accent: "from-emerald-500/10 to-transparent",
    border: "border-emerald-500/30",
  },
  {
    id: "individual",
    label: "Individual Mentor",
    icon: User,
    headline: "Shape the engineers of the next decade.",
    body: "You've built something real. Now help young founders do the same. As an Oxygen Robotics mentor, you get direct access to a global cohort of high-drive students hungry for honest guidance.",
    perks: [
      "1-on-1 mentorship matched by domain",
      "Featured in Oxygen's global mentor directory",
      "Invitation to closed strategy sessions & panels",
      "Opportunity to co-found or advise student startups",
    ],
    cta: "Apply as a Mentor",
    accent: "from-amber-500/10 to-transparent",
    border: "border-amber-500/30",
  },
];

const stats = [
  { value: "3", label: "Active continents" },
  { value: "50+", label: "Youth builders" },
  { value: "3+", label: "Years operating" },
  { value: "∞", label: "Potential unlocked" },
];

const Partner = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ── */}
      <section className="pt-36 pb-24 px-4 relative overflow-hidden">
        {/* faint grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,109,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,109,0,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-primary text-xs uppercase tracking-[0.2em]"
          >
            // Partnership Programme
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mt-6 mb-8 max-w-4xl"
          >
            Build the future
            <br />
            <span className="text-primary">with us.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-12"
          >
            Oxygen Robotics is a youth-led R&D network spanning Bangladesh, Pakistan, and Kazakhstan.
            We partner with organisations and individuals who believe the next generation of engineers
            deserves real infrastructure — not just competitions.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-px border border-border overflow-hidden w-fit"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-8 py-5 bg-card/40 border-r border-border last:border-r-0">
                <div className="font-display text-3xl font-bold text-foreground">{s.value}</div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Divider label ── */}
      <div className="border-t border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Partnership tracks</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      {/* ── Tier cards ── */}
      <section className="py-8 px-4">
        <div className="container max-w-6xl mx-auto space-y-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative border ${tier.border} bg-gradient-to-br ${tier.accent} bg-card/20 overflow-hidden`}
            >
              {/* top strip */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="grid lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border/40">
                {/* Left: label + icon */}
                <div className="lg:col-span-3 p-8 flex flex-col justify-between gap-6">
                  <div>
                    <tier.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
                    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2">
                      Track 0{i + 1}
                    </div>
                    <h2 className="font-display text-2xl font-bold">{tier.label}</h2>
                  </div>
                  <a
                    href={`mailto:partnerships@oxygenrobotics.org?subject=${encodeURIComponent(tier.label + " Partnership Inquiry")}`}
                    className="inline-flex items-center gap-2 font-mono text-xs text-primary border border-primary/50 px-4 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-200 group/btn w-fit"
                  >
                    {tier.cta}
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Centre: headline + body */}
                <div className="lg:col-span-5 p-8 flex flex-col justify-center">
                  <h3 className="font-display text-xl font-bold mb-4 leading-snug">{tier.headline}</h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{tier.body}</p>
                </div>

                {/* Right: perks */}
                <div className="lg:col-span-4 p-8">
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-5">
                    What you get
                  </div>
                  <ul className="space-y-3">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="font-mono text-xs text-muted-foreground leading-relaxed">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 px-4 mt-8 border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-primary text-xs uppercase tracking-[0.2em]">// Ready to talk?</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 leading-[0.95]">
                Let's build<br />something<br />
                <span className="text-primary">worth building.</span>
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-md">
                Not sure which track fits? Drop us a line. We'll figure out together how Oxygen Robotics
                and your organisation can create something neither could alone.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:partnerships@oxygenrobotics.org"
                className="group flex items-center justify-between px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <div>
                  <div className="font-display text-xl font-bold">Email the team</div>
                  <div className="font-mono text-xs opacity-70 mt-1">partnerships@oxygenrobotics.org</div>
                </div>
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/join"
                className="group flex items-center justify-between px-8 py-6 border border-border hover:border-primary/50 bg-card/20 transition-colors"
              >
                <div>
                  <div className="font-display text-xl font-bold">Start a chapter instead</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">For youth founders, not organisations</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Partner;
