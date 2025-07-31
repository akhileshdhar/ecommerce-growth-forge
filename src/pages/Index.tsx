import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <LeadCaptureForm />
      <Footer />
    </div>
  );
};

export default Index;
