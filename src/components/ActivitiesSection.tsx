import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const activities = [
  {
    id: 1,
    category: "Workshop",
    date: "Dec 2025",
    title: "Mini Robot Workshop 2025",
    excerpt:
      "Hands-on session introducing 200+ students to circuit design, sensors, and autonomous logic.",
  },
  {
    id: 2,
    category: "Competition",
    date: "Nov 2025",
    title: "National Robotics Challenge",
    excerpt:
      "Our teams competed in line-follower, maze-solver, and AI-powered rescue robot categories.",
  },
  {
    id: 3,
    category: "Expansion",
    date: "Oct 2025",
    title: "Kazakhstan Chapter Launch",
    excerpt:
      "Official onboarding of our third regional chapter, led by local student leaders in Central Asia.",
  },
];

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
          {activities.map((activity, index) => (
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
                <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1">
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
              </div>
              <div className="col-span-12 sm:col-span-2 text-left sm:text-right">
                <Link
                  to={`/events/${activity.id}`}
                  className="font-mono text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  Read →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
