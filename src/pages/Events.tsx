import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { events, type OrgEvent, type EventStatus } from "@/data/events";

// ─── Types ────────────────────────────────────────────────────────────────────

type FilterKey = "all" | EventStatus;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all",      label: "All"      },
  { key: "upcoming", label: "Upcoming" },
  { key: "past",     label: "Past"     },
];

const stats = [
  { value: "7",   label: "Events logged"     },
  { value: "3",   label: "Countries"          },
  { value: "2K+", label: "Students reached"   },
  { value: "2022", label: "Est."              },
];

// ─── Event row ────────────────────────────────────────────────────────────────

function EventRow({ event, index }: { event: OrgEvent; index: number }) {
  const isUpcoming = event.status === "upcoming";

  return (
    <motion.article
      id={`event-${event.id}`}
      key={event.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className="group border-b border-border py-8 sm:py-10 grid grid-cols-12 gap-4 sm:gap-6 items-start hover:bg-card/20 transition-colors -mx-4 px-4"
    >
      {/* Date */}
      <div className="col-span-6 sm:col-span-2 font-mono text-xs text-muted-foreground uppercase">
        {event.date}
      </div>

      {/* Category + status */}
      <div className="col-span-6 sm:col-span-2 flex flex-col gap-1.5">
        <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-0.5 w-fit">
          {event.category}
        </span>
        {isUpcoming && (
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Upcoming
          </span>
        )}
      </div>

      {/* Title + excerpt + location */}
      <div className="col-span-12 sm:col-span-6">
        <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
          {event.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-2">
          {event.excerpt}
        </p>
        <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground/60">
          <MapPin className="w-3 h-3" />
          {event.flag} {event.location}, {event.country}
        </div>
      </div>

      {/* CTA */}
      <div className="col-span-12 sm:col-span-2 text-left sm:text-right">
        {isUpcoming ? (
          <button
            disabled={!event.registrationOpen}
            aria-label={
              event.registrationOpen
                ? `Register for ${event.title}`
                : `Registration not yet open for ${event.title}`
            }
            className={`inline-flex items-center gap-1 font-mono text-xs transition-colors ${
              event.registrationOpen
                ? "text-primary hover:text-primary/80"
                : "text-muted-foreground/40 cursor-not-allowed"
            }`}
          >
            {event.registrationOpen ? (
              <>Register <ArrowUpRight className="w-3 h-3" /></>
            ) : (
              "Soon"
            )}
          </button>
        ) : (
          <span className="font-mono text-xs text-muted-foreground/40">Completed</span>
        )}
      </div>
    </motion.article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const sorted = [...events].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const filtered =
    activeFilter === "all" ? sorted : sorted.filter((e) => e.status === activeFilter);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-border pb-12 mb-12"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-primary text-xs uppercase tracking-widest">
                // EVENTS &amp; ACTIVITIES
              </span>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tight mt-4">
                Field<br />
                <span className="text-primary">Notes.</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-2">
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Every workshop, competition, and chapter launch — documented. From Dhaka to Astana, this is the record of what we've built and where we're going next.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Stats ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-border mb-16"
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`p-6 sm:p-8 ${i < stats.length - 1 ? "border-r border-border" : ""}`}
            >
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                {label}
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                {value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Filter ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.35 }}
          className="flex items-center gap-6 mb-2"
        >
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            Filter
          </span>
          <div className="flex gap-4">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`font-mono text-xs uppercase tracking-widest transition-colors pb-0.5 ${
                  activeFilter === key
                    ? "text-primary border-b border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Event list ── */}
        <div className="border-t border-border">
          {filtered.length > 0 ? (
            filtered.map((event, i) => (
              <EventRow key={event.id} event={event} index={i} />
            ))
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center font-mono text-sm text-muted-foreground"
            >
              No events in this category yet.
            </motion.div>
          )}
        </div>

      </div>

      <Footer />
    </main>
  );
};

export default Events;
