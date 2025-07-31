import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Zap, 
  ShoppingCart, 
  Database, 
  Workflow, 
  Smartphone,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built from scratch to meet your unique business requirements and scale with your growth.",
    features: ["React/Next.js", "Node.js/Python", "Custom APIs", "Database Design"],
    popular: false,
  },
  {
    icon: Workflow,
    title: "App Integration & APIs",
    description: "Seamlessly connect your existing tools and platforms for unified operations and improved efficiency.",
    features: ["Third-party APIs", "Webhook Setup", "Data Sync", "Process Automation"],
    popular: true,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your eCommerce site with advanced optimization techniques that convert visitors into customers.",
    features: ["Site Speed Audit", "Core Web Vitals", "CDN Setup", "Image Optimization"],
    popular: false,
  },
  {
    icon: ShoppingCart,
    title: "Shopify/Magento Development",
    description: "Expert development and customization for Shopify, Magento, and other eCommerce platforms.",
    features: ["Theme Development", "App Development", "Custom Checkout", "Migration Services"],
    popular: true,
  },
  {
    icon: Smartphone,
    title: "Headless Commerce",
    description: "Future-proof your business with headless architecture for ultimate flexibility and performance.",
    features: ["JAMstack Solutions", "API-First Design", "Multi-channel Ready", "Progressive Web Apps"],
    popular: false,
  },
  {
    icon: Database,
    title: "Backend Automation",
    description: "Automate repetitive tasks and streamline your operations with intelligent backend solutions.",
    features: ["Inventory Management", "Order Processing", "Email Automation", "Analytics Dashboard"],
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Complete eCommerce Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom development to performance optimization, we provide end-to-end solutions 
            that help your eCommerce business thrive in the competitive US market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative group hover:shadow-lg transition-all duration-300 ${
              service.popular ? 'ring-2 ring-primary/20 shadow-md' : ''
            }`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-primary">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;