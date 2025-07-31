import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Zap, 
  ShoppingCart, 
  Workflow, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Enterprise-grade solutions built from scratch to meet your unique requirements and scale with explosive growth.",
    features: ["React/Next.js Mastery", "Node.js/Python Backend", "Custom APIs", "Scalable Architecture"],
    popular: false,
  },
  {
    icon: ShoppingCart,
    title: "Shopify Custom App Development",
    description: "Build powerful custom Shopify apps and integrations that automate workflows and unlock new revenue streams.",
    features: ["Custom Shopify Apps", "Private Apps", "Public App Store", "Shopify Plus Solutions"],
    popular: true,
  },
  {
    icon: Workflow,
    title: "Magento & Hyva Theme Development",
    description: "Specialized Magento development with Hyva theme expertise for lightning-fast, conversion-optimized storefronts.",
    features: ["Hyva Theme Customization", "Magento 2 Development", "Performance Optimization", "PWA Solutions"],
    popular: true,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Transform slow sites into speed demons. Advanced optimization techniques that convert visitors into customers.",
    features: ["Site Speed Audit", "Core Web Vitals", "CDN Setup", "Image Optimization"],
    popular: false,
  },
  {
    icon: Smartphone,
    title: "Headless Commerce",
    description: "Future-proof your business with headless architecture for ultimate flexibility and omnichannel excellence.",
    features: ["JAMstack Solutions", "API-First Design", "Multi-channel Ready", "Progressive Web Apps"],
    popular: false,
  },
  {
    icon: Workflow,
    title: "Integration & Automation",
    description: "Seamlessly connect your tech stack and automate complex workflows for maximum operational efficiency.",
    features: ["Third-party APIs", "Webhook Setup", "Data Sync", "Process Automation"],
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative">
        <div className="text-center space-y-6 mb-20">
          <Badge variant="outline" className="mx-auto px-6 py-2 text-base font-medium backdrop-blur-sm border border-primary/20">
            <Code className="h-4 w-4 mr-2 text-primary" />
            Premium Services Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Elite eCommerce
            <span className="block bg-gradient-to-r from-primary to-premium bg-clip-text text-transparent">
              Development Services
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Transform your digital presence with our comprehensive suite of cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card key={index} className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 ${
              service.popular 
                ? 'shadow-glow border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-premium/5' 
                : 'shadow-lg hover:shadow-xl border border-border/50 bg-card/80 backdrop-blur-sm'
            }`}>
              {service.popular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-premium to-primary text-white font-semibold px-3 py-1">
                  🔥 Most Popular
                </Badge>
              )}
              
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-primary to-premium text-white shadow-lg' 
                      : 'bg-muted/80 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={service.popular ? "premium" : "outline"} 
                  className="w-full group text-lg font-semibold" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Custom Quote
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-all" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;