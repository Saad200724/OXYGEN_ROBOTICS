import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  // Placeholder gallery items - these will be replaced with actual photos
  const galleryItems = [
    { id: 1, title: "Three Founders", category: "Team" },
    { id: 2, title: "First Formed Team 2023", category: "Team" },
    { id: 3, title: "C-Level Executive Committee", category: "Team" },
    { id: 4, title: "Mini Robot Workshop 2022", category: "Workshop" },
    { id: 5, title: "International Competition", category: "Competition" },
    { id: 6, title: "Project Development", category: "Projects" },
    { id: 7, title: "Mentorship Session", category: "Events" },
    { id: 8, title: "Award Ceremony", category: "Awards" },
    { id: 9, title: "Team Building", category: "Team" },
  ];

  const categories = ["All", "Team", "Workshop", "Competition", "Projects", "Events", "Awards"];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-primary text-sm uppercase tracking-widest"
          >
            // GALLERY
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Our <span className="text-primary">Moments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Capturing the journey of innovation, collaboration, and growth.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 font-mono text-xs border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square border border-border rounded-lg bg-card/30 overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50">
                  <ImageIcon className="w-12 h-12 mb-2" />
                  <span className="font-mono text-xs">Photo Placeholder</span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="font-mono text-xs text-primary mb-1">
                      {item.category}
                    </div>
                    <h3 className="font-display text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="py-20 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-dashed border-border rounded-lg bg-card/20"
          >
            <ImageIcon className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">
              Have Photos to Share?
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Contact us to feature your chapter photos in our gallery.
            </p>
            <span className="font-mono text-xs text-primary">
              Coming Soon: Photo Upload Feature
            </span>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
