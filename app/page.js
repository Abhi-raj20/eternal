import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import DivisionsCarousel from "@/components/DivisionsCarousel";
import FeaturedProjects from "@/components/FeaturedProjects";
import LatestNews from "@/components/LatestNews";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <DivisionsCarousel />
      <FeaturedProjects />
      <LatestNews />
    </main>
  );
}
