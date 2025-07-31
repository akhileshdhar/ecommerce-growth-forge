import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EC</span>
              </div>
              <span className="font-bold text-xl">eCommerceDev</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Custom software development and optimization services for growing US eCommerce businesses.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Custom Development
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Performance Optimization
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Shopify Development
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Headless Commerce
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Backend Automation
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-background/80 hover:text-background transition-colors flex items-center gap-1">
                Case Studies <ExternalLink className="h-3 w-3" />
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors flex items-center gap-1">
                Blog <ExternalLink className="h-3 w-3" />
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors flex items-center gap-1">
                eCommerce Guide <ExternalLink className="h-3 w-3" />
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>hello@ecommercedev.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Remote Team<br />Serving US Businesses</span>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Free Quote
            </Button>
          </div>
        </div>
        
        <Separator className="my-8 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/80">
          <p>© 2024 eCommerceDev. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;