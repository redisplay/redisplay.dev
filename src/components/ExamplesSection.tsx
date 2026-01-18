import examples from "@/data/examples.json";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExamplesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="examples" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Use Case Examples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how others are using Redisplay to repurpose their old devices.
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex bg-card shadow-lg"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex bg-card shadow-lg"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {examples.map((example) => (
              <div
                key={example.id}
                className="flex-shrink-0 w-72 snap-center"
              >
                <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${example.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <div className="w-24 h-16 bg-card/90 rounded-lg shadow-inner flex items-center justify-center">
                    <div className="w-16 h-10 bg-foreground/10 rounded-sm" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {example.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
