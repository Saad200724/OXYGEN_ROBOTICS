import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { recentFieldNotes } from "@/data/events";

const categoryColor: Record<string, string> = {
  Workshop:    "text-orange-400 border-orange-400/30",
  Competition: "text-amber-400 border-amber-400/30",
  Expansion:   "text-blue-400 border-blue-400/30",
  Summit:      "text-purple-400 border-purple-400/30",
  Hackathon:   "text-rose-400 border-rose-400/30",
  Outreach:    "text-emerald-400 border-emerald-400/30",
  Research:    "text-cyan-400 border-cyan-400/30",
};

const ActivitiesSection = () => {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 border-b border-border pb-6">
          <div>
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              // RECENT ACTIVITIES
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Field notes.
            </h2>
          </div>
          <Link
            to="/events"
            className="font-mono text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="border-t border-border">
          {recentFieldNotes.map((activity, index) => {
            const colorClass = categoryColor[activity.category] ?? "text-primary border-primary/30";
            return (
              <motion.article
                key={activity.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group border-b border-border py-8 sm:py-10 grid grid-cols-12 gap-4 sm:gap-6 items-start hover:bg-card/20 transition-colors -mx-4 px-4"
              >
                <div className="col-span-12 sm:col-span-2 font-mono text-xs text-muted-foreground uppercase">
                  {activity.date}
                </div>
                <div className="col-span-12 sm:col-span-2">
                  <span className={`font-mono text-xs border px-2 py-1 ${colorClass}`}>
                    {activity.category}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.excerpt}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground/60 mt-2">
                    {activity.flag} {activity.location}, {activity.country}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-2 text-left sm:text-right">
                  <Link
                    to={`/events#event-${activity.id}`}
                    className="font-mono text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
