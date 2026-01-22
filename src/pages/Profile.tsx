import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const founderData: Record<string, any> = {
  "ilham-sajid": {
    name: "Ilham Sajid",
    role: "CEO & Co-Founder",
    bio: "Ilham is a visionary leader with a passion for democratizing robotics. He co-founded Oxygen Robotics in 2022 and has been driving its global strategy ever since.",
    expertise: ["Strategic Planning", "Robotics Research", "Public Relations"],
    vision: "To build a world where every young mind has the tools to innovate."
  },
  "fahim-aziz": {
    name: "Fahim Aziz",
    role: "Co-Founder",
    bio: "Fahim is the technical heartbeat behind Oxygen's early projects. His dedication to hands-on building laid the foundation for the organization's R&D focus.",
    expertise: ["Mechanical Engineering", "Rapid Prototyping", "STEM Education"],
    vision: "Practical engineering solutions for real-world problems."
  },
  "najmus-saadat-fahim": {
    name: "Najmus Saadat Fahim",
    role: "COO",
    bio: "Najmus is the operational engine of Oxygen Robotics. He transformed the team into a structured international organization with clear execution paths.",
    expertise: ["Operations Management", "International Expansion", "Team Leadership"],
    vision: "A structured, global network of young innovators collaborating across borders."
  },
  "md-ahtesamul-rasul": {
    name: "Md. Ahtesamul Rasul",
    role: "CTO",
    bio: "Rasul brings high-level AI and software expertise to the team. He leads the development of Oxygen's intelligent systems and market-ready products.",
    expertise: ["Artificial Intelligence", "Software Architecture", "Machine Learning"],
    vision: "Intelligent robotics that prioritize sovereignty and local impact."
  }
};

const Profile = () => {
  const { id } = useParams();
  const founder = id ? founderData[id] : null;
  useScrollToHash();

  if (!founder) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Profile Not Found</h1>
          <Link to="/about" className="text-primary hover:underline">Return to About Page</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-24">
      <Navigation />
      <div className="container max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-40 h-40 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-display font-bold text-6xl shadow-2xl">
              {founder.name[0]}
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="font-display text-4xl md:text-5xl font-bold">{founder.name}</h1>
                <p className="font-mono text-primary text-sm uppercase tracking-widest">{founder.role}</p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl italic">
                "{founder.vision}"
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 border-t border-border pt-12">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold">Biography</h2>
              <p className="text-muted-foreground leading-relaxed">
                {founder.bio}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold">Expertise</h2>
              <ul className="grid grid-cols-1 gap-3">
                {founder.expertise.map((item: string) => (
                  <li key={item} className="flex items-center gap-3 p-3 border border-border rounded-lg bg-card/30">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono text-sm uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 text-center">
            <Link
              to="/about#founders"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
            >
              ← Back to Founders
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
};

export default Profile;