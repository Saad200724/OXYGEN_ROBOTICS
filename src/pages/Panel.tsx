import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar, Trophy, Target } from "lucide-react";

const panels = [
  {
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
  {
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
  {
    country: "Malaysia",
    flag: "🇲🇾",
    status: "Active",
    established: "2025",
    members: "10+",
    location: "Kuala Lumpur",
    description: "Strategic Southeast Asian hub with partnership with KIP Hotel Kuala Lumpur, expanding our global reach.",
    achievements: [
      "Partnership with KIP Hotel Kuala Lumpur",
      "Southeast Asian network building",
      "Cross-border collaboration initiatives"
    ],
    focus: ["International Collaboration", "Tech Partnerships", "Innovation Hub"]
  }
];

const Panel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              3 Active Regions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Regional Panels
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our active chapters across the globe, each contributing to our mission of uniting young innovators.
            </p>
          </div>

          {/* Panels Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {panels.map((panel) => (
              <Card key={panel.country} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{panel.flag}</span>
                    <Badge 
                      variant={panel.status === "Headquarters" ? "default" : "secondary"}
                      className={panel.status === "Headquarters" ? "bg-primary" : ""}
                    >
                      {panel.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{panel.country}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm">
                    {panel.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <Calendar className="w-4 h-4 mx-auto text-primary" />
                      <p className="text-xs text-muted-foreground">Est.</p>
                      <p className="text-sm font-semibold">{panel.established}</p>
                    </div>
                    <div className="space-y-1">
                      <Users className="w-4 h-4 mx-auto text-primary" />
                      <p className="text-xs text-muted-foreground">Members</p>
                      <p className="text-sm font-semibold">{panel.members}</p>
                    </div>
                    <div className="space-y-1">
                      <MapPin className="w-4 h-4 mx-auto text-primary" />
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-semibold truncate">{panel.location}</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Achievements</span>
                    </div>
                    <ul className="space-y-1">
                      {panel.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Focus Areas */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Focus Areas</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {panel.focus.map((area, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Panel;
