import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              <Zap className="h-3 w-3 mr-1" />
              Custom eCommerce Solutions
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Scale Your
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {" "}eCommerce{" "}
                </span>
                Business
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                We help US eCommerce businesses boost revenue through custom software development, 
                performance optimization, and seamless integrations. From Shopify to headless commerce.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">US-Based Team</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">500+ Projects</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Stats cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-primary">40%</h3>
                <p className="text-sm text-muted-foreground">Average Revenue Increase</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-success/5 to-success/10 border-success/20">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-success">3x</h3>
                <p className="text-sm text-muted-foreground">Faster Load Times</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-warning">99.9%</h3>
                <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-info/5 to-info/10 border-info/20">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-info">24/7</h3>
                <p className="text-sm text-muted-foreground">Support & Monitoring</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;