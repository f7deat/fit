import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";
import { GallerySection, StatisticsSection } from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <ProgramsSection />
        <AboutSection />
        <GallerySection />
        <StatisticsSection />
        <NewsSection />
        <PartnersSection />
        <ContactSection />
      </main>
    </div>
  );
}
