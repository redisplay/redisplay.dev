import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Heart, Shield, Cpu, Smartphone, Zap, Sparkles, Code2, LucideIcon } from "lucide-react";
import storyContent from "@/data/background-story.md?raw";

// Map section titles to icons and styles
const sectionConfig: Record<string, { icon: LucideIcon; bgClass: string; iconClass: string }> = {
  "The Origin": {
    icon: Heart,
    bgClass: "bg-sunset/20",
    iconClass: "text-accent-foreground",
  },
  "Ethical and Philosophical Reasons": {
    icon: Shield,
    bgClass: "bg-sage-light",
    iconClass: "text-primary",
  },
  "Version 1: The Raspberry Pi Approach": {
    icon: Cpu,
    bgClass: "bg-sage-light",
    iconClass: "text-primary",
  },
  "Version 2: Moving to Android": {
    icon: Smartphone,
    bgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
  "Why Native Over Browser": {
    icon: Zap,
    bgClass: "bg-wood-light",
    iconClass: "text-foreground",
  },
  "An AI-Assisted Experiment": {
    icon: Sparkles,
    bgClass: "bg-sunset/20",
    iconClass: "text-accent-foreground",
  },
  "Open Source by Design": {
    icon: Code2,
    bgClass: "bg-primary/10",
    iconClass: "text-primary",
  },
};

const BackgroundStorySection = () => {
  const [storySections, setStorySections] = useState<Array<{ title: string; content: string }>>([]);

  useEffect(() => {
    // Parse markdown content into sections
    const lines = storyContent.split("\n");
    const sections: Array<{ title: string; content: string }> = [];
    let currentTitle = "";
    let currentContent: string[] = [];
    let inContent = false;

    for (const line of lines) {
      // Skip the main title (single #)
      if (line.startsWith("# ") && !line.startsWith("## ")) {
        continue;
      }
      // Check if line is a section heading (##)
      if (line.startsWith("## ")) {
        // Save previous section if exists
        if (currentTitle && currentContent.length > 0) {
          sections.push({
            title: currentTitle,
            content: currentContent.join("\n"),
          });
        }
        // Start new section
        currentTitle = line.replace("## ", "").trim();
        currentContent = [];
        inContent = true;
      } else if (inContent && line.trim()) {
        // Add to current content
        currentContent.push(line);
      }
    }

    // Don't forget the last one
    if (currentTitle && currentContent.length > 0) {
      sections.push({
        title: currentTitle,
        content: currentContent.join("\n"),
      });
    }

    setStorySections(sections);
  }, []);

  return (
    <section id="story" className="py-20 px-6 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Story Behind Redisplay
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How a simple idea became an open-source movement
          </p>
        </div>

        <div className="space-y-8">
          {storySections.map((section, index) => {
            const config = sectionConfig[section.title] || {
              icon: Heart,
              bgClass: "bg-primary/10",
              iconClass: "text-primary",
            };
            const IconComponent = config.icon;

            return (
              <div key={index} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${config.bgClass} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-6 h-6 ${config.iconClass}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {section.title}
                    </h3>
                    <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => <p {...props} className="mb-3" />,
                          a: ({ node, ...props }) => (
                            <a
                              {...props}
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          ),
                          strong: ({ node, ...props }) => <strong {...props} className="font-semibold text-foreground" />,
                          em: ({ node, ...props }) => <em {...props} className="italic" />,
                        }}
                      >
                        {section.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="text-center mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Join us in giving old devices a new purpose.{" "}
              <a 
                href="https://github.com/redisplay" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Get involved on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundStorySection;

