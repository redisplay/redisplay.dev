import modules from "@/data/modules.json";
import { Clock, Cloud, Calendar, Image, Music, Home, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Cloud,
  Calendar,
  Image,
  Music,
  Home,
};

const categoryColors: Record<string, string> = {
  utilities: "bg-sage-light text-primary",
  productivity: "bg-secondary text-secondary-foreground",
  media: "bg-sunset/20 text-accent-foreground",
  "smart-home": "bg-wood-light text-foreground",
};

const ModulesSection = () => {
  return (
    <section id="modules" className="py-20 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Display Modules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our growing collection of display modules. 
            Mix and match to create your perfect smart display.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
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
                    {module.category}
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

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More modules coming soon. Have an idea?{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Contribute on GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
