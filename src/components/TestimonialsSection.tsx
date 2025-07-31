import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "BoutiqueStyles",
    location: "New York, NY",
    content: "They increased our conversion rate by 45% through custom checkout optimization. The team understood our needs perfectly and delivered beyond expectations.",
    rating: 5,
    revenue: "$2.3M ARR",
    image: "/placeholder.svg"
  },
  {
    name: "Mike Chen",
    role: "CTO", 
    company: "TechGear Pro",
    location: "San Francisco, CA",
    content: "The headless commerce solution they built allowed us to scale from $500K to $5M in revenue. Their technical expertise is unmatched.",
    rating: 5,
    revenue: "$5M ARR",
    image: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "EcoLife Products",
    location: "Austin, TX", 
    content: "Performance optimization reduced our bounce rate by 60%. Site speed went from 4.2s to 1.1s load time. Amazing results!",
    rating: 5,
    revenue: "$1.8M ARR",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Trusted by Growing eCommerce Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped US eCommerce companies achieve remarkable growth through 
            custom development and optimization strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-primary/20" />
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground/90 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.revenue}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;