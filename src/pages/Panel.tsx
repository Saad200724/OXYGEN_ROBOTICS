import { useState, useEffect, useRef, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, MapPin, Calendar, Users, Trophy, ChevronRight, BarChart3 } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

type Category = "all" | "leadership" | "departments" | "initiatives";

interface Member {
  id: string;
  name: string;
  role: string;
  dept: string;
  category: Exclude<Category, "all">;
  bio: string;
  skills: Record<string, number>;
}

interface Chapter {
  country: string;
  flag: string;
  status: "Headquarters" | "Active" | "Expanding";
  established: string;
  memberCount: string;
  location: string;
  description: string;
  achievements: string[];
  focus: string[];
  members: Member[];
}

const chapters = {
  bangladesh: {
    country: "Bangladesh",
    flag: "🇧🇩",
    status: "Headquarters" as const,
    established: "2022",
    memberCount: "25+",
    location: "Dhaka",
    description:
      "The founding chapter of Oxygen Robotics. Home to our core leadership team, executive committee, and primary R&D operations.",
    achievements: [
      "Multiple international competition awards",
      "Partnerships with ORWA, Biman Bangladesh Airlines",
      "Active robotics workshops and training programs",
    ],
    focus: ["AI/ML Research", "Robotics Development", "Youth Training"],
    members: [
      {
        id: "ilham-sajid",
        name: "Ilham Sajid",
        role: "Executive Chairman",
        dept: "R&D Innovation",
        category: "leadership" as const,
        bio: "Strategizes innovative research architectures, guides cross-department collaboration, and leads development milestones of Oxygen Robotics.",
        skills: { "R&D Strategy": 95, "Systems Design": 90, Physics: 88, Hardware: 85 },
      },
      {
        id: "ahtesamul-rasul",
        name: "M. Ahtesamul Rasul",
        role: "Deputy National Director",
        dept: "Technology Co-ordination",
        category: "leadership" as const,
        bio: "Orchestrates technical architecture alignment and provides robust management paradigms for advanced systems development.",
        skills: { Management: 94, Robotics: 91, "System Integration": 89, Hardware: 84 },
      },
      {
        id: "safee-naiar",
        name: "Safee Naiar",
        role: "Acting Dep. Director",
        dept: "Human Resources",
        category: "leadership" as const,
        bio: "Drives internal operations, optimizes talent acquisition pipelines, and oversees cross-team alignment protocols.",
        skills: { "Ops Mgmt": 92, Leadership: 90, Communication: 95, Planning: 88 },
      },
      {
        id: "saad-bin-tofayel",
        name: "Saad Bin Tofayel",
        role: "Executive",
        dept: "Software Development",
        category: "departments" as const,
        bio: "Builds high-performance algorithms, structures real-time communication libraries, and leads the autonomous navigation stack development.",
        skills: { "Python / C++": 96, Algorithms: 93, "Computer Vision": 87, ROS: 85 },
      },
      {
        id: "areeb-bin-faruque",
        name: "Areeb Bin Faruque",
        role: "Senior Executive",
        dept: "Research",
        category: "departments" as const,
        bio: "Oversees research endeavors, mathematical models development, and algorithmic evaluations for high-end embedded systems.",
        skills: { "Deep Learning": 94, Mathematics: 92, Simulation: 89, "Scientific Writing": 90 },
      },
      {
        id: "zubayer-hasan-shaad",
        name: "Zubayer Hasan Shaad",
        role: "Senior Executive",
        dept: "Public Relations",
        category: "departments" as const,
        bio: "Directs media strategies, represents the team across global forums, and acts as the communications bridge for Oxygen Robotics.",
        skills: { "Public Speaking": 95, "Media Strategy": 90, Negotiation: 88, Branding: 92 },
      },
      {
        id: "ahmed-jidan",
        name: "Ahmed Jidan",
        role: "Senior Executive",
        dept: "Events & Logistics",
        category: "departments" as const,
        bio: "Directs physical deployments, manages critical supply chains, and coordinates operational logistics for national robotic arenas.",
        skills: { Planning: 93, "Crisis Mgmt": 91, "Supply Chain": 88, Deployment: 90 },
      },
      {
        id: "mahdi-bin-ferdaus",
        name: "Mahdi Bin Ferdaus",
        role: "Senior Executive",
        dept: "Special Initiative",
        category: "initiatives" as const,
        bio: "Drives exploratory programs, manages specialized team development sprints, and coordinates cross-border research initiatives.",
        skills: { Strategy: 92, "HW Prototyping": 89, Telemetry: 85, Adaptability: 94 },
      },
      {
        id: "mahtasim-masrafi",
        name: "Mahtasim Masrafi",
        role: "Executive",
        dept: "Special Initiative",
        category: "initiatives" as const,
        bio: "Collaborates on high-impact strategic project workflows and structures cross-functional testing modules for smart systems.",
        skills: { "Embedded Systems": 90, Debugging: 88, "Rapid Prototyping": 91, Research: 86 },
      },
    ],
  },
  pakistan: {
    country: "Pakistan",
    flag: "🇵🇰",
    status: "Active" as const,
    established: "2025",
    memberCount: "10+",
    location: "Karachi · Lahore",
    description:
      "Our South Asian chapter bringing together passionate robotics enthusiasts from across Pakistan to advance STEM education and competition prep.",
    achievements: [
      "Chapter successfully established in 2025",
      "Building partnerships with local universities",
      "Recruiting and training young innovators",
    ],
    focus: ["Robotics Education", "STEM Outreach", "Competition Prep"],
    members: [
      {
        id: "zain-ul-abideen",
        name: "Zain ul Abideen",
        role: "Chapter Director",
        dept: "Pakistan Operations",
        category: "leadership" as const,
        bio: "Leads the Pakistan chapter's growth strategy, coordinates with the Bangladesh HQ, and builds local academic partnerships.",
        skills: { Leadership: 90, "Stakeholder Mgmt": 87, "STEM Outreach": 92, Coordination: 88 },
      },
      {
        id: "ayesha-siddiqui",
        name: "Ayesha Siddiqui",
        role: "Technical Lead",
        dept: "Robotics Engineering",
        category: "departments" as const,
        bio: "Designs and implements robotics competition platforms and mentors student teams across Karachi and Lahore.",
        skills: { Robotics: 91, "Embedded C": 88, Mentoring: 93, "Circuit Design": 85 },
      },
      {
        id: "omar-farooq",
        name: "Omar Farooq",
        role: "Outreach Executive",
        dept: "Community & Events",
        category: "initiatives" as const,
        bio: "Organizes STEM outreach events, manages school partnerships, and drives Oxygen Robotics visibility across Pakistan.",
        skills: { Events: 89, Communication: 92, "Social Media": 86, Logistics: 84 },
      },
    ],
  },
  kazakhstan: {
    country: "Kazakhstan",
    flag: "🇰🇿",
    status: "Expanding" as const,
    established: "2025",
    memberCount: "10+",
    location: "Almaty · Astana",
    description:
      "Our Central Asian hub fostering technical innovation and building a bridge between East and West through deep-tech research and youth engagement.",
    achievements: [
      "Chapter established and operational",
      "Building academic partnerships in Almaty",
      "Engaging Central Asian talent pipeline",
    ],
    focus: ["Technical Research", "Innovation Outreach", "International Networking"],
    members: [
      {
        id: "arman-bekzhan",
        name: "Arman Bekzhan",
        role: "Chapter Director",
        dept: "Kazakhstan Operations",
        category: "leadership" as const,
        bio: "Spearheads Oxygen Robotics' Central Asian presence, forging university alliances and driving cross-border research collaboration.",
        skills: { Strategy: 88, Research: 85, Diplomacy: 90, Leadership: 87 },
      },
      {
        id: "dana-seitkali",
        name: "Dana Seitkali",
        role: "Research Coordinator",
        dept: "Technical Research",
        category: "departments" as const,
        bio: "Coordinates research initiatives between Almaty and Astana labs, focusing on autonomous systems and AI applications.",
        skills: { "AI Research": 90, "Data Analysis": 88, "Project Mgmt": 85, Writing: 92 },
      },
      {
        id: "timur-abenov",
        name: "Timur Abenov",
        role: "Innovation Lead",
        dept: "Special Initiative",
        category: "initiatives" as const,
        bio: "Drives innovation sprints targeting Central Asian robotics education gaps and international technology transfer programs.",
        skills: { Innovation: 91, Networking: 89, "STEM Design": 86, Mentoring: 88 },
      },
    ],
  },
};

type ChapterKey = keyof typeof chapters;

// ─── Categories ───────────────────────────────────────────────────────────────

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all",         label: "All"                },
  { key: "leadership",  label: "Leadership"         },
  { key: "departments", label: "Departments"        },
  { key: "initiatives", label: "Special Initiatives"},
];

// ─── Member Profile Modal ─────────────────────────────────────────────────────

const FOCUSABLE = 'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])';

function MemberModal({ member, onClose }: { member: Member | null; onClose: () => void }) {
  const dialogRef  = useRef<HTMLDivElement>(null);
  const closeRef   = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const stableClose = useCallback(onClose, [onClose]);

  useEffect(() => {
    if (!member) return;
    triggerRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { stableClose(); return; }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
        else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [member, stableClose]);

  const titleId = member ? `modal-title-${member.id}` : undefined;

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) stableClose(); }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22 }}
            className="bg-card border border-border max-w-2xl w-full relative overflow-hidden"
          >
            {/* Top border accent */}
            <div className="h-px w-full bg-primary" />

            <div className="p-8">
              {/* Close */}
              <button
                ref={closeRef}
                onClick={stableClose}
                aria-label="Close member profile"
                className="absolute top-6 right-6 p-1.5 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="mb-8 pb-8 border-b border-border pr-12">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                  Oxygen Robotics · Member Profile
                </div>
                <h3 id={titleId} className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-2">
                  {member.name}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
                  <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-0.5">
                    {member.role}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {member.dept}
                  </span>
                </div>
              </div>

              {/* Bio + skills */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                    Profile
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-4">
                    Capability Index
                  </div>
                  <div className="space-y-3">
                    {Object.entries(member.skills).map(([label, value]) => (
                      <div key={label}>
                        <div className="flex justify-between font-mono text-[10px] text-muted-foreground uppercase mb-1.5">
                          <span>{label}</span>
                          <span className="text-primary">{value}</span>
                        </div>
                        <div className="h-px w-full bg-border relative">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            className="absolute top-0 left-0 h-px bg-primary"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Member row ───────────────────────────────────────────────────────────────

function MemberRow({
  member,
  index,
  onInspect,
}: {
  member: Member;
  index: number;
  onInspect: (m: Member) => void;
}) {
  return (
    <motion.button
      type="button"
      aria-label={`View profile for ${member.name}, ${member.role}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      onClick={() => onInspect(member)}
      className="group w-full text-left border-b border-border py-6 sm:py-7 grid grid-cols-12 gap-4 sm:gap-6 items-center hover:bg-card/20 transition-colors -mx-4 px-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary"
    >
      {/* Index */}
      <div className="col-span-2 sm:col-span-1 font-mono text-xs text-muted-foreground/50">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Name */}
      <div className="col-span-10 sm:col-span-3 font-display text-base sm:text-lg font-bold group-hover:text-primary transition-colors">
        {member.name}
      </div>

      {/* Role */}
      <div className="col-span-12 sm:col-span-3">
        <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-0.5">
          {member.role}
        </span>
      </div>

      {/* Dept */}
      <div className="col-span-10 sm:col-span-4 font-mono text-xs text-muted-foreground">
        {member.dept}
      </div>

      {/* Arrow */}
      <div className="col-span-2 sm:col-span-1 text-right font-mono text-xs text-muted-foreground/40 group-hover:text-primary transition-colors">
        →
      </div>
    </motion.button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const Panel = () => {
  const [activeChapter, setActiveChapter] = useState<ChapterKey>("bangladesh");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");
  const [inspectedMember, setInspectedMember] = useState<Member | null>(null);

  const chapter = chapters[activeChapter];

  const filteredMembers = chapter.members.filter((m) => {
    const matchCat = activeCategory === "all" || m.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.dept.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const handleChapterSwitch = (key: ChapterKey) => {
    setActiveChapter(key);
    setActiveCategory("all");
    setSearch("");
  };

  const statusLabel: Record<Chapter["status"], string> = {
    Headquarters: "HQ",
    Active: "Active",
    Expanding: "Expanding",
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-border pb-12 mb-0"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <span className="font-mono text-primary text-xs uppercase tracking-widest">
                // REGIONAL PANELS
              </span>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tight mt-4">
                Our<br />
                <span className="text-primary">Chapters.</span>
              </h1>
            </div>
            <div className="lg:col-span-6 lg:pb-2">
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Student-led teams across three countries. Meet the people building Oxygen Robotics from the ground up — leadership, departments, and special initiatives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Country tabs ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex border-b border-border"
        >
          {(Object.keys(chapters) as ChapterKey[]).map((key) => (
            <button
              key={key}
              onClick={() => handleChapterSwitch(key)}
              className={`flex items-center gap-2.5 px-6 py-5 font-mono text-xs uppercase tracking-widest transition-colors border-b-2 -mb-px focus:outline-none ${
                activeChapter === key
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-base">{chapters[key].flag}</span>
              {chapters[key].country}
            </button>
          ))}
        </motion.div>

        {/* ── Chapter content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Chapter info block */}
            <div className="border-b border-border py-10 grid lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display text-2xl font-bold">{chapter.country}</span>
                  <span className="font-mono text-[10px] text-primary border border-primary/30 px-2 py-0.5 uppercase">
                    {statusLabel[chapter.status]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {chapter.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 border border-border p-5">
                  {[
                    { icon: Calendar, label: "Est.", value: chapter.established },
                    { icon: Users,    label: "Members", value: chapter.memberCount },
                    { icon: MapPin,   label: "Base", value: chapter.location },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label}>
                      <div className="font-mono text-[10px] text-muted-foreground uppercase mb-1 flex items-center gap-1">
                        <Icon className="w-3 h-3" /> {label}
                      </div>
                      <div className="font-display text-lg font-bold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Trophy className="w-3 h-3" /> Achievements
                  </div>
                  <ul className="space-y-2">
                    {chapter.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                    Focus Areas
                  </div>
                  <div className="flex flex-col gap-2">
                    {chapter.focus.map((f, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs text-primary border border-primary/30 px-3 py-1.5 w-fit"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Member controls ── */}
            <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border">
              {/* Category filters */}
              <div className="flex items-center gap-5 flex-wrap">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Filter
                </span>
                {CATEGORIES.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`font-mono text-xs uppercase tracking-widest transition-colors pb-0.5 focus:outline-none ${
                      activeCategory === key
                        ? "text-primary border-b border-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/40" />
                <input
                  type="text"
                  aria-label="Search members by name, role, or department"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search members..."
                  className="bg-card border border-border pl-9 pr-4 py-2 font-mono text-xs text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors w-64"
                />
              </div>
            </div>

            {/* ── Member list ── */}
            <div>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member, i) => (
                  <MemberRow
                    key={member.id}
                    member={member}
                    index={i}
                    onInspect={setInspectedMember}
                  />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-16 font-mono text-sm text-muted-foreground"
                >
                  No members match that search.
                </motion.div>
              )}

              {/* Member count footer */}
              {filteredMembers.length > 0 && (
                <div className="pt-6 font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                  {filteredMembers.length} member{filteredMembers.length !== 1 ? "s" : ""} shown
                </div>
              )}
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      <Footer />

      {/* Modal */}
      <MemberModal member={inspectedMember} onClose={() => setInspectedMember(null)} />
    </main>
  );
};

export default Panel;
