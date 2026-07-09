import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const featured = {
  tag: "Origin Story",
  location: "Dhaka, Bangladesh",
  date: "March 2022",
  headline: "From a school basement to three continents.",
  body: "It started with six students, a broken servo motor, and a shared refusal to wait for someone else to build the future. Two years later, Oxygen Robotics operates active chapters across South Asia and Central Asia — and the servo is still broken.",
  stat: { value: "50+", label: "Youth builders mobilised" },
};

const stories = [
  {
    tag: "Chapter Launch",
    location: "Islamabad, Pakistan",
    date: "Jan 2024",
    headline: "The Pakistan chapter built a full autonomous line-follower in week one.",
    body: "No prior hardware experience. No dedicated lab. Just twelve students in a borrowed classroom who refused to take longer than seven days to ship something real.",
  },
  {
    tag: "Research",
    location: "Astana, Kazakhstan",
    date: "Aug 2023",
    headline: "Central Asia's first Oxygen I-Lab node goes live.",
    body: "The Kazakhstan cohort formalized Oxygen's research arm in Central Asia, publishing their first internal paper on inverse kinematics for low-cost manipulators within three months of founding.",
  },
  {
    tag: "Career",
    location: "Dhaka, Bangladesh",
    date: "Nov 2023",
    headline: "Three Oxygen alumni accepted into top engineering universities abroad.",
    body: "University applications backed by real project portfolios — hardware logs, git history, deployment notes — not just participation certificates.",
  },
  {
    tag: "Community",
    location: "Remote",
    date: "Apr 2024",
    headline: "Oxygen's first cross-border collaborative build: two chapters, one robot.",
    body: "Bangladesh handled firmware. Pakistan handled mechanical design. They met in a Discord call and shipped a working prototype in six weeks — across two time zones and two languages.",
  },
  {
    tag: "Impact",
    location: "Multiple regions",
    date: "2023–2024",
    headline: "Bringing technical literacy to underserved regions across Central Asia.",
    body: "Workshops in 10+ towns where robotics education had no prior foothold. No travelling lecturers — just Oxygen members training the people next to them.",
  },
  {
    tag: "Startup",
    location: "Dhaka, Bangladesh",
    date: "Feb 2024",
    headline: "A robotics side-project becomes a venture-backed product.",
    body: "What began as a chapter demo bot evolved into a logistics automation prototype that caught the attention of two seed-stage investors. The founders were 17 and 19.",
  },
];

const impact = [
  { value: "3", label: "Active chapters" },
  { value: "50+", label: "Builders" },
  { value: "10+", label: "Workshop cities" },
  { value: "3+", label: "Years running" },
];

const tagColors: Record<string, string> = {
  "Origin Story": "text-primary border-primary/40",
  "Chapter Launch": "text-blue-400 border-blue-400/40",
  Research: "text-emerald-400 border-emerald-400/40",
  Career: "text-amber-400 border-amber-400/40",
  Community: "text-purple-400 border-purple-400/40",
  Impact: "text-rose-400 border-rose-400/40",
  Startup: "text-cyan-400 border-cyan-400/40",
};

export default function Stories() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* ── Header ── */}
      <section className="pt-36 pb-16 px-4 border-b border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-primary text-xs uppercase tracking-[0.2em]"
              >
                // Field Dispatches
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mt-5"
              >
                Stories from<br />
                <span className="text-primary">the network.</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 font-mono text-sm text-muted-foreground leading-relaxed"
            >
              Real accounts from the chapters, builders, and moments that define what Oxygen Robotics is actually doing on the ground.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Impact bar ── */}
      <section className="border-b border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex divide-x divide-border overflow-x-auto">
            {impact.map((item) => (
              <div key={item.label} className="flex-1 min-w-[120px] px-6 py-5">
                <div className="font-display text-3xl font-bold text-foreground">{item.value}</div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured story ── */}
      <section className="py-20 px-4 border-b border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-8">
            Featured dispatch
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid lg:grid-cols-12 gap-0 border border-primary/30 overflow-hidden hover:border-primary/60 transition-colors duration-300"
          >
            {/* Visual panel */}
            <div className="lg:col-span-5 relative min-h-[280px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-end p-8 overflow-hidden">
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,109,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,109,0,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
              {/* Big stat */}
              <div className="relative z-10">
                <div className="font-display text-7xl font-bold text-primary/20 leading-none">{featured.stat.value}</div>
                <div className="font-mono text-xs text-primary/60 uppercase tracking-widest mt-2">{featured.stat.label}</div>
              </div>
              {/* Top label */}
              <div className="absolute top-6 left-6 flex items-center gap-4">
                <span className={`font-mono text-[10px] uppercase tracking-widest border px-2 py-1 ${tagColors[featured.tag]}`}>
                  {featured.tag}
                </span>
              </div>
            </div>

            {/* Text panel */}
            <div className="lg:col-span-7 p-10 flex flex-col justify-between gap-8 border-l border-primary/20">
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                    <MapPin className="w-3 h-3" /> {featured.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                    <Calendar className="w-3 h-3" /> {featured.date}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
                  {featured.headline}
                </h2>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {featured.body}
                </p>
              </div>
              <button className="inline-flex items-center gap-2 font-mono text-xs text-primary group-hover:gap-3 transition-all w-fit">
                Read full dispatch <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Story grid ── */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-8">
            All dispatches
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {stories.map((story, i) => (
              <motion.article
                key={story.headline}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group bg-background p-8 flex flex-col gap-6 hover:bg-card/40 transition-colors duration-200 cursor-pointer"
              >
                {/* Meta row */}
                <div className="flex items-start justify-between gap-4">
                  <span className={`font-mono text-[10px] uppercase tracking-widest border px-2 py-1 ${tagColors[story.tag] ?? "text-muted-foreground border-border"}`}>
                    <Tag className="w-2.5 h-2.5 inline mr-1" />
                    {story.tag}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">{story.date}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                    {story.headline}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">{story.body}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                    <MapPin className="w-3 h-3" /> {story.location}
                  </span>
                  <span className="font-mono text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="font-mono text-primary text-xs uppercase tracking-[0.2em]">// Write your own</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 leading-[0.95]">
                Your chapter.<br />
                <span className="text-primary">Your story.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Every dispatch above started with one person deciding to build something real.
                Start your chapter and add your city to the map.
              </p>
              <a
                href="/join"
                className="inline-flex items-center gap-2 font-mono text-sm px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-fit"
              >
                Start a Chapter <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
