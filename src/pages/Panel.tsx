import { useState, useEffect, useRef, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Search,
  Users,
  MapPin,
  Calendar,
  Trophy,
  ChevronRight,
  Cpu,
  BarChart3,
} from "lucide-react";

// ─── Data Layer ─────────────────────────────────────────────────────────────

type Category = "all" | "leadership" | "departments" | "initiatives";

interface Member {
  id: string;
  name: string;
  role: string;
  dept: string;
  category: Exclude<Category, "all">;
  bio: string;
  skills: Record<string, number>;
  accentVariant: "orange" | "amber" | "yellow";
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
    status: "Headquarters",
    established: "2022",
    memberCount: "25+",
    location: "Dhaka",
    description:
      "The founding chapter of Oxygen Robotics. Home to our core leadership team, executive committee, and primary R&D operations driving global innovation.",
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
        dept: "Co-ordinator of R&D Innovation",
        category: "leadership",
        bio: "Strategizes innovative research architectures, guides cross-department collaboration, and leads development milestones of Oxygen Robotics.",
        skills: { "R&D Strategy": 95, "Systems Design": 90, Physics: 88, Hardware: 85 },
        accentVariant: "orange",
      },
      {
        id: "ahtesamul-rasul",
        name: "M. Ahtesamul Rasul",
        role: "Deputy National Director",
        dept: "Technology Co-ordination",
        category: "leadership",
        bio: "Orchestrates technical architecture alignment and provides robust management paradigms for advanced systems development.",
        skills: { Management: 94, Robotics: 91, "System Integration": 89, Hardware: 84 },
        accentVariant: "amber",
      },
      {
        id: "safee-naiar",
        name: "Safee Naiar",
        role: "Acting Dep. Director",
        dept: "Head of the HR Dept.",
        category: "leadership",
        bio: "Drives internal operations, optimizes talent acquisition pipelines, and oversees cross-team alignment protocols.",
        skills: { "Ops Mgmt": 92, Leadership: 90, Communication: 95, Planning: 88 },
        accentVariant: "yellow",
      },
      {
        id: "saad-bin-tofayel",
        name: "Saad Bin Tofayel",
        role: "Executive",
        dept: "Head of Software Development",
        category: "departments",
        bio: "Builds high-performance algorithms, structures real-time communication libraries, and leads the autonomous navigation stack development.",
        skills: { "Python / C++": 96, Algorithms: 93, "Computer Vision": 87, ROS: 85 },
        accentVariant: "orange",
      },
      {
        id: "areeb-bin-faruque",
        name: "Areeb Bin Faruque",
        role: "Senior Executive",
        dept: "Head of Research",
        category: "departments",
        bio: "Oversees research endeavors, mathematical models development, and algorithmic evaluations for high-end embedded systems.",
        skills: { "Deep Learning": 94, Mathematics: 92, Simulation: 89, "Scientific Writing": 90 },
        accentVariant: "amber",
      },
      {
        id: "zubayer-hasan-shaad",
        name: "Zubayer Hasan Shaad",
        role: "Senior Executive",
        dept: "Head of Public Relations",
        category: "departments",
        bio: "Directs media strategies, represents the team across global forums, and acts as the communications bridge for Oxygen Robotics.",
        skills: { "Public Speaking": 95, "Media Strategy": 90, Negotiation: 88, Branding: 92 },
        accentVariant: "yellow",
      },
      {
        id: "ahmed-jidan",
        name: "Ahmed Jidan",
        role: "Senior Executive",
        dept: "Head of Events & Logistics",
        category: "departments",
        bio: "Directs physical deployments, manages critical supply chains, and coordinates operational logistics for national robotic arenas.",
        skills: { Planning: 93, "Crisis Mgmt": 91, "Supply Chain": 88, Deployment: 90 },
        accentVariant: "orange",
      },
      {
        id: "mahdi-bin-ferdaus",
        name: "Mahdi Bin Ferdaus",
        role: "Senior Executive",
        dept: "Special Initiative",
        category: "initiatives",
        bio: "Drives exploratory programs, manages specialized team development sprints, and coordinates cross-border research initiatives.",
        skills: { Strategy: 92, "HW Prototyping": 89, Telemetry: 85, Adaptability: 94 },
        accentVariant: "amber",
      },
      {
        id: "mahtasim-masrafi",
        name: "Mahtasim Masrafi",
        role: "Executive",
        dept: "Special Initiative",
        category: "initiatives",
        bio: "Collaborates on high-impact strategic project workflows and structures cross-functional testing modules for smart systems.",
        skills: { "Embedded Systems": 90, Debugging: 88, "Rapid Prototyping": 91, Research: 86 },
        accentVariant: "yellow",
      },
    ],
  },
  pakistan: {
    country: "Pakistan",
    flag: "🇵🇰",
    status: "Active",
    established: "2025",
    memberCount: "10+",
    location: "Karachi · Lahore",
    description:
      "Our South Asian chapter, bringing together passionate robotics enthusiasts from across Pakistan to advance STEM education and competition prep.",
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
        category: "leadership",
        bio: "Leads the Pakistan chapter's growth strategy, coordinates with the Bangladesh HQ, and builds local academic partnerships.",
        skills: { Leadership: 90, "Stakeholder Mgmt": 87, "STEM Outreach": 92, Coordination: 88 },
        accentVariant: "orange",
      },
      {
        id: "ayesha-siddiqui",
        name: "Ayesha Siddiqui",
        role: "Technical Lead",
        dept: "Robotics Engineering",
        category: "departments",
        bio: "Designs and implements robotics competition platforms and mentors student teams across Karachi and Lahore.",
        skills: { Robotics: 91, "Embedded C": 88, Mentoring: 93, "Circuit Design": 85 },
        accentVariant: "amber",
      },
      {
        id: "omar-farooq",
        name: "Omar Farooq",
        role: "Outreach Executive",
        dept: "Community & Events",
        category: "initiatives",
        bio: "Organizes STEM outreach events, manages school partnerships, and drives Oxygen Robotics visibility across Pakistan.",
        skills: { Events: 89, Communication: 92, "Social Media": 86, Logistics: 84 },
        accentVariant: "yellow",
      },
    ],
  },
  kazakhstan: {
    country: "Kazakhstan",
    flag: "🇰🇿",
    status: "Expanding",
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
        category: "leadership",
        bio: "Spearheads Oxygen Robotics' Central Asian presence, forging university alliances and driving cross-border research collaboration.",
        skills: { Strategy: 88, Research: 85, Diplomacy: 90, Leadership: 87 },
        accentVariant: "orange",
      },
      {
        id: "dana-seitkali",
        name: "Dana Seitkali",
        role: "Research Coordinator",
        dept: "Technical Research",
        category: "departments",
        bio: "Coordinates research initiatives between Almaty and Astana labs, focusing on autonomous systems and AI applications.",
        skills: { "AI Research": 90, "Data Analysis": 88, "Project Mgmt": 85, Writing: 92 },
        accentVariant: "amber",
      },
      {
        id: "timur-abenov",
        name: "Timur Abenov",
        role: "Innovation Lead",
        dept: "Special Initiative",
        category: "initiatives",
        bio: "Drives innovation sprints targeting Central Asian robotics education gaps and international technology transfer programs.",
        skills: { Innovation: 91, Networking: 89, "STEM Design": 86, Mentoring: 88 },
        accentVariant: "yellow",
      },
    ],
  },
};

type ChapterKey = keyof typeof chapters;

// ─── Accent Colour Maps ──────────────────────────────────────────────────────

const accentMap = {
  orange: {
    ring: "ring-orange-500/60",
    text: "text-orange-400",
    tag: "bg-orange-950/40 border-orange-800/50 text-orange-400",
    bar: "bg-orange-500",
    svgStroke: "#f97316",
    hover: "hover:border-orange-500/50 hover:shadow-[0_0_28px_rgba(249,115,22,0.14)]",
    glow: "bg-orange-500/10",
    avatarRing: "from-orange-500 to-amber-500",
    bracket: "border-orange-500",
  },
  amber: {
    ring: "ring-amber-500/60",
    text: "text-amber-400",
    tag: "bg-amber-950/40 border-amber-800/50 text-amber-400",
    bar: "bg-amber-500",
    svgStroke: "#f59e0b",
    hover: "hover:border-amber-500/50 hover:shadow-[0_0_28px_rgba(245,158,11,0.14)]",
    glow: "bg-amber-500/10",
    avatarRing: "from-amber-500 to-yellow-500",
    bracket: "border-amber-500",
  },
  yellow: {
    ring: "ring-yellow-500/60",
    text: "text-yellow-400",
    tag: "bg-yellow-950/40 border-yellow-800/50 text-yellow-400",
    bar: "bg-yellow-500",
    svgStroke: "#eab308",
    hover: "hover:border-yellow-500/50 hover:shadow-[0_0_28px_rgba(234,179,8,0.14)]",
    glow: "bg-yellow-500/10",
    avatarRing: "from-yellow-500 to-orange-400",
    bracket: "border-yellow-500",
  },
};

// ─── SVG Avatar ──────────────────────────────────────────────────────────────

function MemberAvatar({ stroke }: { stroke: string }) {
  return (
    <svg className="w-full h-full p-2 text-neutral-500" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="45" r="22" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />
      <path d="M50 20V13M50 77v-7M20 50h7M73 50h7" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="38" y="32" width="24" height="26" rx="12" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M42 46H58" stroke={stroke} strokeWidth="2" />
      <path d="M44 58v9h12v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 78c0-8 10-10 20-10s20 2 20 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Member Card ─────────────────────────────────────────────────────────────

function MemberCard({ member, onInspect }: { member: Member; onInspect: (m: Member) => void }) {
  const accent = accentMap[member.accentVariant];
  return (
    <motion.button
      layout
      type="button"
      aria-label={`Inspect profile for ${member.name}, ${member.role}`}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.22 }}
      className={`relative group w-full text-left bg-neutral-900/30 backdrop-blur-md border border-neutral-800/70 rounded-2xl p-5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 ${accent.hover}`}
      onClick={() => onInspect(member)}
    >
      {/* Internal glow */}
      <div
        className={`absolute top-10 left-1/2 -translate-x-1/2 w-20 h-20 ${accent.glow} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      {/* Avatar ring */}
      <div
        className={`relative w-24 h-24 mx-auto mb-4 rounded-full p-[2.5px] bg-gradient-to-b from-neutral-700 to-transparent group-hover:${accent.avatarRing} transition-all duration-300`}
      >
        <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center overflow-hidden">
          <MemberAvatar stroke={accent.svgStroke} />
        </div>
        {/* Corner brackets */}
        <div
          className={`absolute -top-0.5 -left-0.5 w-3.5 h-3.5 border-t-2 border-l-2 ${accent.bracket} rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
        <div
          className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 border-b-2 border-r-2 ${accent.bracket} rounded-br opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
      </div>

      {/* Meta */}
      <div className="text-center">
        <h3
          className={`text-sm font-black text-neutral-100 tracking-wide uppercase transition-colors duration-200 line-clamp-1 group-hover:${accent.text}`}
        >
          {member.name}
        </h3>

        <div
          className={`inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-1 rounded border mt-2 ${accent.tag}`}
        >
          {member.role}
        </div>

        {/* Divider slide */}
        <div
          className={`w-5 h-[1.5px] bg-neutral-800 mx-auto my-3 group-hover:w-14 group-hover:${accent.bar} transition-all duration-300`}
        />

        <p className="text-[11px] text-neutral-400 font-mono min-h-[28px] line-clamp-2 px-1">
          {member.dept}
        </p>

        <div
          aria-hidden="true"
          className={`mt-4 w-full py-2 rounded-lg bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 ${accent.text} text-[10px] font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-1.5`}
        >
          <BarChart3 className="w-3 h-3" />
          Inspect Profile
        </div>
      </div>
    </motion.button>
  );
}

// ─── Inspector Modal ──────────────────────────────────────────────────────────

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function InspectorModal({ member, onClose }: { member: Member | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef  = useRef<HTMLButtonElement>(null);
  // Track which element triggered the open so we can restore focus on close
  const triggerRef = useRef<HTMLElement | null>(null);

  const stableClose = useCallback(onClose, [onClose]);

  // Capture trigger, open body scroll lock, bind Escape — only when member is set
  useEffect(() => {
    if (!member) return;
    triggerRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    // Initial focus
    closeRef.current?.focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { stableClose(); return; }
      // Focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) stableClose(); }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.22, type: "spring", damping: 22, stiffness: 280 }}
            className="bg-neutral-950 border border-orange-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-[0_0_60px_rgba(249,115,22,0.08)] overflow-hidden"
          >
            {/* Ambient glow corners */}
            <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-orange-500/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/6 rounded-full blur-[70px] pointer-events-none" />

            {/* Cyber grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundSize: "32px 32px",
                backgroundImage:
                  "linear-gradient(to right, rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.04) 1px, transparent 1px)",
              }}
            />

            {/* Close */}
            <button
              ref={closeRef}
              onClick={stableClose}
              aria-label="Close member profile"
              className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-orange-500/40 text-neutral-400 hover:text-orange-400 transition-all duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Avatar column */}
              <div
                className={`w-28 h-28 shrink-0 rounded-full p-[2.5px] bg-gradient-to-tr ${accentMap[member.accentVariant].avatarRing} shadow-[0_0_20px_rgba(249,115,22,0.2)]`}
              >
                <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center overflow-hidden">
                  <MemberAvatar stroke={accentMap[member.accentVariant].svgStroke} />
                </div>
              </div>

              {/* Content column */}
              <div className="flex-1 w-full text-center md:text-left">
                <span className="text-[10px] font-mono tracking-[0.22em] text-neutral-500 uppercase">
                  Oxygen Robotics · Member Profile
                </span>
                <h3 id={titleId} className="text-2xl sm:text-3xl font-black text-neutral-100 uppercase tracking-wide mt-1">
                  {member.name}
                </h3>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start items-center mt-3">
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded border ${accentMap[member.accentVariant].tag}`}
                  >
                    {member.role}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">{member.dept}</span>
                </div>

                {/* Bio */}
                <div className="mt-5">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 border-b border-neutral-900 pb-2 mb-2">
                    Capabilities Synopsis
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">{member.bio}</p>
                </div>

                {/* Skills */}
                <div className="mt-5">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 border-b border-neutral-900 pb-2 mb-4">
                    Capability Calibration
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(member.skills).map(([label, value]) => (
                      <div key={label}>
                        <div className="flex justify-between text-[10px] font-mono text-neutral-400 mb-1.5 uppercase">
                          <span>{label}</span>
                          <span className={accentMap[member.accentVariant].text}>{value}%</span>
                        </div>
                        <div className="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden border border-neutral-800">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className={`h-full ${accentMap[member.accentVariant].bar} rounded-full`}
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

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Chapter["status"] }) {
  const map = {
    Headquarters: "bg-orange-500/15 border-orange-500/30 text-orange-400",
    Active: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    Expanding: "bg-blue-500/15 border-blue-500/30 text-blue-400",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border font-mono text-[10px] tracking-widest uppercase font-bold ${map[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Headquarters" ? "bg-orange-500 animate-pulse" : status === "Active" ? "bg-emerald-500" : "bg-blue-500"}`} />
      {status}
    </span>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "leadership", label: "Leadership" },
  { key: "departments", label: "Departments" },
  { key: "initiatives", label: "Special Initiatives" },
];

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

  // Reset filters when chapter changes
  const handleChapterSwitch = (key: ChapterKey) => {
    setActiveChapter(key);
    setActiveCategory("all");
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-neutral-950 relative overflow-x-hidden">
      {/* Cyber grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(249,115,22,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.035) 1px, transparent 1px)",
        }}
      />
      {/* Radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle 700px at 50% 180px, rgba(249,115,22,0.07), transparent 80%)",
        }}
      />

      <Navigation />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Hero Header ── */}
          <div className="text-center mb-16 relative">
            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Regional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
                Panels
              </span>
            </h1>
            <p className="text-[72px] sm:text-[96px] font-black uppercase tracking-widest text-neutral-900 font-mono mt-0 leading-none select-none -translate-y-2">
              ORI
            </p>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto -mt-4 leading-relaxed">
              Explore our active chapters across the globe — meet the teams building the future of robotics.
            </p>
          </div>

          {/* ── Country Tab Selector ── */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {(Object.keys(chapters) as ChapterKey[]).map((key) => (
              <button
                key={key}
                onClick={() => handleChapterSwitch(key)}
                className={`relative px-6 py-3 rounded-xl border font-mono text-sm tracking-wide uppercase transition-all duration-300 flex items-center gap-2.5 ${
                  activeChapter === key
                    ? "bg-orange-500/15 border-orange-500 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.12)]"
                    : "bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                }`}
              >
                <span className="text-xl">{chapters[key].flag}</span>
                {chapters[key].country}
                {activeChapter === key && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[1px] h-[2px] w-8 bg-orange-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
            >
              {/* ── Chapter Hero Card ── */}
              <div className="bg-neutral-900/25 backdrop-blur-md border border-neutral-800/60 rounded-2xl p-6 sm:p-8 mb-8 overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/6 rounded-full blur-[80px] pointer-events-none" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-5">
                    <div className="text-6xl select-none">{chapter.flag}</div>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <h2 className="text-2xl font-black text-white uppercase tracking-wide">
                          {chapter.country}
                        </h2>
                        <StatusBadge status={chapter.status} />
                      </div>
                      <p className="text-sm text-neutral-400 max-w-lg leading-relaxed">
                        {chapter.description}
                      </p>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="flex gap-6 shrink-0">
                    {[
                      { icon: Calendar, label: "Est.", value: chapter.established },
                      { icon: Users, label: "Members", value: chapter.memberCount },
                      { icon: MapPin, label: "Base", value: chapter.location },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="text-center">
                        <Icon className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                        <p className="text-[10px] font-mono text-neutral-500 uppercase">{label}</p>
                        <p className="text-sm font-bold text-neutral-200 whitespace-nowrap">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements + Focus */}
                <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-800/60">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Trophy className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                        Achievements
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {chapter.achievements.map((a, i) => (
                        <li key={i} className="text-xs text-neutral-400 flex items-start gap-2">
                          <ChevronRight className="w-3 h-3 text-orange-500 mt-0.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Cpu className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                        Focus Areas
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {chapter.focus.map((f, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded border border-orange-500/25 bg-orange-500/8 text-orange-400 text-[10px] font-mono uppercase tracking-wider"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Controls: Search + Filter ── */}
              <div className="bg-neutral-900/20 backdrop-blur-md border border-neutral-800/50 rounded-xl p-4 mb-8">
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                  {/* Category filters */}
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(({ key, label }) => (
                      <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`px-3.5 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all duration-200 border ${
                          activeCategory === key
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-neutral-200"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* Search */}
                  <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500" />
                    <input
                      type="text"
                      aria-label="Search members by name, role, or department"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search members..."
                      className="w-full bg-neutral-950/60 text-neutral-100 placeholder-neutral-600 border border-neutral-800 rounded-lg py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 transition-all font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* ── Members Grid ── */}
              <AnimatePresence mode="popLayout">
                {filteredMembers.length > 0 ? (
                  <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                  >
                    {filteredMembers.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        onInspect={setInspectedMember}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-20"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-700 border border-neutral-800">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-400">No Members Found</h3>
                    <p className="text-neutral-600 text-sm mt-1">Try adjusting your search or filters.</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />

      {/* ── Inspector Modal ── */}
      <InspectorModal member={inspectedMember} onClose={() => setInspectedMember(null)} />
    </div>
  );
};

export default Panel;
