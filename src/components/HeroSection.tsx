import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      {/* Enhanced background with animated gradient */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--premium)/0.08),transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-premium/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Enhanced Content */}
          <div className="space-y-10">
            <Badge variant="secondary" className="w-fit px-4 py-2 text-sm font-medium shadow-card backdrop-blur-sm border border-primary/20">
              <Zap className="h-4 w-4 mr-2 text-primary" />
              Premium eCommerce Solutions
            </Badge>
            
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                Transform Your
                <span className="block text-gradient">
                  eCommerce Empire
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
                Unlock explosive growth with our elite development team. We've helped 500+ US businesses 
                achieve an average 40% revenue boost through cutting-edge Shopify apps, Magento Hyva themes, 
                and performance optimization.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="premium" size="lg" className="group text-lg font-semibold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Free Strategy Call
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-smooth" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg font-semibold" onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>
                View Success Stories
              </Button>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="flex items-center gap-12 pt-12">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-success/10">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <div>
                  <span className="block font-semibold text-foreground">US-Based Team</span>
                  <span className="text-sm text-muted-foreground">Silicon Valley Experts</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block font-semibold text-foreground">500+ Projects</span>
                  <span className="text-sm text-muted-foreground">$100M+ Generated</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Enhanced Stats cards */}
          <div className="grid grid-cols-2 gap-8">
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-smooth bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 backdrop-blur-sm group hover:scale-105">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-primary">40%</h3>
                <p className="text-sm font-medium text-muted-foreground">Average Revenue Boost</p>
                <p className="text-xs text-muted-foreground/80">Within 6 months</p>
              </div>
            </Card>
            
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-smooth bg-gradient-to-br from-success/10 via-success/5 to-transparent border-2 border-success/20 backdrop-blur-sm group hover:scale-105">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-success">3x</h3>
                <p className="text-sm font-medium text-muted-foreground">Faster Load Times</p>
                <p className="text-xs text-muted-foreground/80">Guaranteed optimization</p>
              </div>
            </Card>
            
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-smooth bg-gradient-to-br from-premium/10 via-premium/5 to-transparent border-2 border-premium/20 backdrop-blur-sm group hover:scale-105">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-premium/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-premium" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-premium">99.9%</h3>
                <p className="text-sm font-medium text-muted-foreground">Uptime SLA</p>
                <p className="text-xs text-muted-foreground/80">Enterprise grade</p>
              </div>
            </Card>
            
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-smooth bg-gradient-to-br from-info/10 via-info/5 to-transparent border-2 border-info/20 backdrop-blur-sm group hover:scale-105">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-info/20 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-info" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-info">24/7</h3>
                <p className="text-sm font-medium text-muted-foreground">Expert Support</p>
                <p className="text-xs text-muted-foreground/80">Always available</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;