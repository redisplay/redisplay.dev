import { Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">Redisplay</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-sunset transition-colors"
            >
              Documentation
            </a>
            <a
              href="#"
              className="hover:text-sunset transition-colors"
            >
              Modules
            </a>
            <a
              href="https://github.com/redisplay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sunset transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-1 text-sm text-primary-foreground/80">
            Made with <Heart className="w-4 h-4 text-sunset fill-sunset" /> for sustainability
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© 2024 Redisplay. <span className="font-medium">Open source</span> under GPL License. Built by the community, for the community.</p>
          <p className="mt-2">
            Created by{" "}
            <a 
              href="https://github.com/darioguarascio" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sunset transition-colors underline"
            >
              @darioguarascio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
