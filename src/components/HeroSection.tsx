import redisplayLogo from "@/assets/redisplay-logo.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-foreground animate-float" />
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-primary-foreground animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary-foreground animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Give Your Old Devices
            <br />
            <span className="text-sunset">A New Purpose</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transform unused Android phones and tablets into beautiful smart displays. 
            Reduce e-waste while creating something useful. <span className="font-semibold">100% open-source</span> and community-driven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" variant="secondary" className="gap-2 font-semibold">
              <Download className="w-5 h-5" />
              Download APK
            </Button>
          </div>
        </div>

        {/* Logo/Image */}
        <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <img 
              src={redisplayLogo} 
              alt="Redisplay - Repurpose old devices into smart displays" 
              className="w-72 md:w-96 lg:w-[450px] rounded-2xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave - using block display to prevent gap */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
