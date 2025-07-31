import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  CheckCircle, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare,
  Users
} from "lucide-react";

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    revenue: "",
    challenge: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you within 24 hours to discuss your project.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      revenue: "",
      challenge: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const benefits = [
    "Free consultation & project assessment",
    "Custom solution roadmap",
    "No-obligation quote within 48 hours",
    "Direct access to senior developers",
  ];

  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Benefits */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Users className="h-3 w-3 mr-1" />
                Get Started Today
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to Scale Your
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {" "}eCommerce Business?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a free consultation with our eCommerce experts and discover how we can help 
                you increase revenue, improve performance, and automate your operations.
              </p>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Card className="p-6 bg-gradient-to-r from-success/5 to-success/10 border-success/20">
              <div className="text-center">
                <h3 className="font-semibold text-success mb-2">⚡ Fast Response Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 2 hours during business hours
                </p>
              </div>
            </Card>
          </div>
          
          {/* Right column - Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-center">Get Your Free Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name *</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Inc."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Annual Revenue Range</label>
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select range</option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="over-10m">Over $10M</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Primary Challenge</label>
                  <select
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select primary challenge</option>
                    <option value="slow-site">Slow website performance</option>
                    <option value="integration">System integration issues</option>
                    <option value="custom-features">Need custom features</option>
                    <option value="automation">Manual processes</option>
                    <option value="scaling">Scaling difficulties</option>
                    <option value="migration">Platform migration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Details</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Free Consultation"}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;