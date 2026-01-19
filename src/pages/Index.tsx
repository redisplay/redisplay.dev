import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExamplesSection from "@/components/ExamplesSection";
import BackgroundStorySection from "@/components/BackgroundStorySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      
      {/* Modules Teaser Section */}
      <section id="modules" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Display Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A properly built system that allows you to create pages for each module given a JSON file that describes it. 
              Browse our collection or create your own custom modules.
            </p>
            <Link to="/modules">
              <Button size="lg" className="gap-2">
                Browse All Modules
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ExamplesSection />
      <BackgroundStorySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
