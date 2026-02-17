import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyMakuvionSection from "@/components/WhyMakuvionSection";
import VisionSection from "@/components/VisionSection";
import YouthDevSection from "@/components/YouthDevSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionsSection />
        <WhyMakuvionSection />
        <VisionSection />
        <YouthDevSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
