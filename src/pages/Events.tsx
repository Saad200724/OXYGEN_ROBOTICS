import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Filter,
} from "lucide-react";
import { events, type OrgEvent, type EventStatus, type EventCategory } from "@/data/events";

// ─── Accent maps ─────────────────────────────────────────────────────────────

const categoryAccent: Record<EventCategory, { text: string; border: string; bg: string; dot: string }> = {
  Workshop:    { text: "text-orange-400",  border: "border-orange-500/30",  bg: "bg-orange-500/10",  dot: "bg-orange-500"  },
  Competition: { text: "text-amber-400",   border: "border-amber-500/30",   bg: "bg-amber-500/10",   dot: "bg-amber-500"   },
  Expansion:   { text: "text-blue-400",    border: "border-blue-500/30",    bg: "bg-blue-500/10",    dot: "bg-blue-500"    },
  Summit:      { text: "text-purple-400",  border: "border-purple-500/30",  bg: "bg-purple-500/10",  dot: "bg-purple-500"  },
  Hackathon:   { text: "text-rose-400",    border: "border-rose-500/30",    bg: "bg-rose-500/10",    dot: "bg-rose-500"    },
  Outreach:    { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10", dot: "bg-emerald-500" },
  Research:    { text: "text-cyan-400",    border: "border-cyan-500/30",    bg: "bg-cyan-500/10",    dot: "bg-cyan-500"    },
};

// ─── Stats bar ────────────────────────────────────────────────────────────────

const stats = [
  { value: "12+", label: "Events Hosted" },
  { value: "3",   label: "Countries" },
  { value: "2K+", label: "Students Reached" },
  { value: "6",   label: "Categories" },
];

// ─── Event Card ───────────────────────────────────────────────────────────────

function EventCard({ event, index }: { event: OrgEvent; index: number }) {
  const accent = categoryAccent[event.category];
  const isUpcoming = event.status === "upcoming";

  return (
    <motion.div
      id={`event-${event.id}`}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.24, delay: index * 0.04 }}
      className={`relative group bg-neutral-900/30 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 ${
        isUpcoming
          ? "border-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_0_28px_rgba(249,115,22,0.10)]"
          : "border-neutral-800/60 hover:border-neutral-700"
      }`}
    >
      {/* Top accent strip */}
      <div className={`h-[2px] w-full ${isUpcoming ? "bg-gradient-to-r from-orange-500 via-amber-400 to-transparent" : "bg-neutral-800"}`} />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Category badge */}
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-[10px] font-mono font-bold uppercase tracking-wider ${accent.text} ${accent.border} ${accent.bg}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
              {event.category}
            </span>

            {/* Status badge */}
            {isUpcoming ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-orange-500/25 bg-orange-500/10 text-orange-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                <Clock className="w-2.5 h-2.5" />
                Upcoming
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-neutral-700 bg-neutral-800/50 text-neutral-500 text-[10px] font-mono uppercase tracking-wider">
                <CheckCircle2 className="w-2.5 h-2.5" />
                Completed
              </span>
            )}
          </div>

          {/* Date */}
          <span className="font-mono text-xs text-neutral-500 shrink-0">{event.date}</span>
        </div>

        {/* Title */}
        <h3 className={`font-display text-xl font-bold mb-2 leading-snug transition-colors duration-200 ${isUpcoming ? "group-hover:text-orange-400" : "group-hover:text-neutral-100"}`}>
          {event.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-neutral-400 leading-relaxed mb-5">
          {event.excerpt}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-neutral-800/60">
          <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
            <MapPin className="w-3 h-3" />
            <span>{event.flag} {event.location}, {event.country}</span>
          </div>

          {isUpcoming && (
            <button
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 ${
                event.registrationOpen
                  ? "border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                  : "border-neutral-700 text-neutral-500 cursor-not-allowed"
              }`}
              disabled={!event.registrationOpen}
              aria-label={event.registrationOpen ? `Register for ${event.title}` : `Registration not yet open for ${event.title}`}
            >
              {event.registrationOpen ? (
                <>Register <ArrowUpRight className="w-3 h-3" /></>
              ) : (
                "Coming Soon"
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Filter pill ──────────────────────────────────────────────────────────────

type FilterKey = "all" | EventStatus;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all",      label: "All Events"  },
  { key: "upcoming", label: "Upcoming"    },
  { key: "past",     label: "Past"        },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const sorted = [...events].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const filtered = activeFilter === "all" ? sorted : sorted.filter((e) => e.status === activeFilter);

  const upcomingCount = events.filter((e) => e.status === "upcoming").length;
  const pastCount     = events.filter((e) => e.status === "past").length;

  return (
    <div className="min-h-screen bg-neutral-950 relative overflow-x-hidden">
      {/* Cyber grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.03) 1px, transparent 1px)",
        }}
      />
      {/* Radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 600px at 50% 160px, rgba(249,115,22,0.06), transparent 80%)",
        }}
      />

      <Navigation />

      <main className="relative z-10 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Hero ── */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="font-mono text-orange-500 text-xs uppercase tracking-[0.22em]">
                // ORI · EVENTS & ACTIVITIES
              </span>

              <h1 className="font-display text-6xl sm:text-8xl font-black uppercase tracking-tight text-white leading-none mt-3">
                Field{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
                  Notes
                </span>
              </h1>
              <p className="text-[80px] sm:text-[112px] font-black uppercase tracking-widest text-neutral-900 font-mono leading-none select-none -translate-y-3">
                LOG
              </p>

              <p className="text-neutral-400 text-sm sm:text-base max-w-2xl -mt-3 leading-relaxed">
                Every workshop, competition, and chapter launch — documented. Bringing together the brightest young minds through hands-on learning and global collaboration.
              </p>
            </motion.div>
          </div>

          {/* ── Stats bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-neutral-900/30 border border-neutral-800/60 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-black text-orange-400 font-mono">{value}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* ── Filter tabs ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="flex items-center gap-2 mb-8 flex-wrap"
          >
            <Filter className="w-3.5 h-3.5 text-neutral-600" />
            {FILTERS.map(({ key, label }) => {
              const count =
                key === "all" ? events.length :
                key === "upcoming" ? upcomingCount : pastCount;
              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 ${
                    activeFilter === key
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-neutral-900/50 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-neutral-200"
                  }`}
                >
                  {label}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${activeFilter === key ? "bg-white/20 text-white" : "bg-neutral-800 text-neutral-500"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* ── Events grid ── */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                {filtered.map((event, i) => (
                  <EventCard key={event.id} event={event} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-neutral-900 flex items-center justify-center border border-neutral-800">
                  <Calendar className="w-6 h-6 text-neutral-700" />
                </div>
                <p className="text-neutral-500 font-mono text-sm">No events in this category yet.</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
