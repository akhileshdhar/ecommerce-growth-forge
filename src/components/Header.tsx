import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">EC</span>
          </div>
          <span className="font-bold text-xl">eCommerceDev</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#solutions" className="text-foreground/80 hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <Button variant="outline" size="sm">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;