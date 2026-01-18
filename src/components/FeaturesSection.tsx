import { Recycle, Zap, Puzzle, Shield, Wifi, Battery } from "lucide-react";

const features = [
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Reduce e-waste by giving old devices a second life instead of letting them collect dust.",
  },
  {
    icon: Zap,
    title: "Lightweight",
    description: "Optimized to run smoothly even on older, less powerful devices.",
  },
  {
    icon: Puzzle,
    title: "Modular Design",
    description: "Choose from a library of display modules or create your own custom layouts.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No cloud required. Your data stays on your device and your network.",
  },
  {
    icon: Wifi,
    title: "Local Network",
    description: "Control displays remotely from any device on your home network.",
  },
  {
    icon: Battery,
    title: "Always-On Ready",
    description: "Designed for continuous display with battery-saving optimizations.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Redisplay?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with simplicity and sustainability in mind, Redisplay transforms 
            forgotten devices into useful smart displays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
