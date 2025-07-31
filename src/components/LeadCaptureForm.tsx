import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Send, MessageSquare } from "lucide-react";

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    platform: '',
    revenue: '',
    challenge: '',
    timeline: '',
    budget: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const leadScore = calculateLeadScore(formData);
      console.log('Qualified Lead:', { ...formData, leadScore });
      
      toast({
        title: "Strategy Call Scheduled! 🎉",
        description: `High-priority lead detected (${leadScore}% match). Our senior consultant will contact you within 2 hours.`,
      });
      
      setFormData({
        companyName: '', contactName: '', email: '', phone: '', website: '',
        platform: '', revenue: '', challenge: '', timeline: '', budget: '', description: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateLeadScore = (data: typeof formData): number => {
    let score = 0;
    if (data.revenue === 'over-10m') score += 30;
    else if (data.revenue === '5m-10m') score += 25;
    else if (data.revenue === '1m-5m') score += 20;
    if (data.budget === 'over-100k') score += 25;
    else if (data.budget === '50k-100k') score += 20;
    if (['custom-features', 'shopify-apps', 'magento-hyva'].includes(data.challenge)) score += 20;
    if (data.timeline === 'asap') score += 15;
    return Math.min(score, 100);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-premium/5" />
      
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <Badge variant="outline" className="mx-auto px-6 py-3 text-base font-medium backdrop-blur-sm border border-primary/20">
              <MessageSquare className="h-4 w-4 mr-2 text-primary" />
              Exclusive Strategy Session
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Claim Your
              <span className="block bg-gradient-to-r from-primary to-premium bg-clip-text text-transparent">
                $2,500 Strategy Call
              </span>
              <span className="text-2xl lg:text-3xl font-normal text-muted-foreground">
                (FREE for Qualified Businesses)
              </span>
            </h2>
          </div>

          <Card className="shadow-2xl bg-card/95 backdrop-blur-sm border-2 border-primary/20">
            <div className="p-10">
              <div className="mb-8 p-6 bg-gradient-to-r from-success/10 to-primary/10 rounded-xl border border-success/20">
                <h3 className="text-lg font-semibold text-success mb-3">✨ Qualification Criteria:</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>$500K+ annual revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Serious growth intentions</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Company Name *</Label>
                    <Input
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="Your company name"
                      className="h-12 text-lg"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Your Name *</Label>
                    <Input
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      placeholder="Your full name"
                      className="h-12 text-lg"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Annual Revenue *</Label>
                    <Select value={formData.revenue} onValueChange={(value) => handleInputChange('revenue', value)}>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Select revenue range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500k-1m">$500K - $1M ⭐</SelectItem>
                        <SelectItem value="1m-5m">$1M - $5M ⭐⭐</SelectItem>
                        <SelectItem value="5m-10m">$5M - $10M ⭐⭐⭐</SelectItem>
                        <SelectItem value="over-10m">Over $10M 🔥</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Investment Budget *</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="h-12 text-lg">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25k-50k">$25K - $50K ⭐</SelectItem>
                        <SelectItem value="50k-100k">$50K - $100K ⭐⭐</SelectItem>
                        <SelectItem value="over-100k">Over $100K 🔥</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="premium" 
                  size="lg" 
                  className="w-full text-xl font-bold h-16"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="mr-3 h-5 w-5" />
                      Claim My $2,500 Strategy Session (FREE)
                    </>
                  )}
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;