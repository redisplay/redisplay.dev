import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import modules from "@/data/modules.json";
import { Clock, Cloud, Calendar, Image, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Cloud,
  Calendar,
  Image,
};

const categoryColors: Record<string, string> = {
  utilities: "bg-sage-light text-primary",
  productivity: "bg-secondary text-secondary-foreground",
  media: "bg-sunset/20 text-accent-foreground",
  "smart-home": "bg-wood-light text-foreground",
};

const categoryLabels: Record<string, string> = {
  utilities: "Utilities",
  productivity: "Productivity",
  media: "Media",
  "smart-home": "Smart Home",
};

const Modules = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(modules.map((m) => m.category)));

  const filteredModules = modules.filter((module) => {
    const matchesSearch =
      module.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20 px-6 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Display Modules
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                A properly built system that allows you to create pages for each module given a JSON file that describes it. 
                Browse our collection or create your own custom modules.
              </p>

              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto space-y-4">
                <Input
                  type="text"
                  placeholder="Search modules..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === null
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground hover:bg-card/80 border border-border"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground hover:bg-card/80 border border-border"
                      }`}
                    >
                      {categoryLabels[category] || category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modules Grid */}
            {filteredModules.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredModules.map((module, index) => {
                  const IconComponent = iconMap[module.icon] || Clock;
                  return (
                    <div
                      key={module.id}
                      className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className={categoryColors[module.category]}>
                          {categoryLabels[module.category] || module.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {module.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {module.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No modules found matching your search.</p>
              </div>
            )}

            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Want to create your own module?{" "}
                <a 
                  href="https://github.com/redisplay" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Check out the documentation on GitHub
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Modules;

