import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar, Trophy, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const panels = {
  bangladesh: {
    country: "Bangladesh",
    flag: "🇧🇩",
    status: "Headquarters",
    established: "2022",
    members: "25+",
    location: "Dhaka",
    description: "The founding chapter of Oxygen Robotics. Home to our core leadership team and primary R&D operations.",
    achievements: [
      "Multiple international competition awards",
      "Partnerships with ORWA, Biman Bangladesh Airlines",
      "Active robotics workshops and training programs"
    ],
    focus: ["AI/ML Research", "Robotics Development", "Youth Training"]
  },
  pakistan: {
    country: "Pakistan",
    flag: "🇵🇰",
    status: "Active",
    established: "2025",
    members: "10+",
    location: "Multiple Cities",
    description: "Our newest South Asian chapter, bringing together passionate robotics enthusiasts from across Pakistan.",
    achievements: [
      "Chapter establishment in progress",
      "Building local partnerships",
      "Recruiting young innovators"
    ],
    focus: ["Robotics Education", "STEM Outreach", "Competition Prep"]
  },
  kazakhstan: {
    country: "Kazakhstan",
    flag: "🇰🇿",
    status: "Active",
    established: "2025",
    members: "10+",
    location: "Almaty",
    description: "Our Central Asian hub, fostering technical innovation and building a bridge between East and West.",
    achievements: [
      "Chapter establishment in progress",
      "Building local academic partnerships",
      "Engaging young Central Asian talent"
    ],
    focus: ["Technical Research", "Innovation Outreach", "International Networking"]
  }
};

type PanelKey = keyof typeof panels;

const Panel = () => {
  const [activePanel, setActivePanel] = useState<PanelKey>("bangladesh");
  const currentPanel = panels[activePanel];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              REGIONAL PANELS
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our active chapters across the globe
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-6" />
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-2 mb-12">
            {(Object.keys(panels) as PanelKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActivePanel(key)}
                className={`px-6 py-3 font-mono text-sm rounded-full border transition-all ${
                  activePanel === key
                    ? "bg-primary/20 border-primary text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {panels[key].flag} {panels[key].country}
              </button>
            ))}
          </div>

          {/* Active Panel Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured Card */}
              <Card className="max-w-3xl mx-auto mb-12 bg-card border-primary/30 overflow-hidden">
                <div className="p-8 text-center">
                  <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                    LEADERSHIP
                  </Badge>
                  <div className="text-6xl mb-4">{currentPanel.flag}</div>
                  <h2 className="text-3xl font-bold text-primary mb-2">{currentPanel.country}</h2>
                  <p className="text-muted-foreground mb-2">{currentPanel.status}</p>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {currentPanel.description}
                  </p>
                </div>
              </Card>

              {/* Details Grid */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Stats Card */}
                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Established</p>
                          <p className="text-lg font-semibold">{currentPanel.established}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Members</p>
                          <p className="text-lg font-semibold">{currentPanel.members}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Location</p>
                          <p className="text-lg font-semibold">{currentPanel.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Achievements Card */}
                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="w-5 h-5 text-primary" />
                      <span className="font-medium">Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {currentPanel.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Focus Areas Card */}
                <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="font-medium">Focus Areas</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentPanel.focus.map((area, idx) => (
                        <Badge key={idx} variant="outline" className="border-primary/30 text-primary">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Panel;
