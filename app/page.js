import HeroWithPreloader from "@/components/HeroWithPreloader";
import IntroSection from "@/components/IntroSection";
import DivisionsCarousel from "@/components/DivisionsCarousel";
import FeaturedProjects from "@/components/FeaturedProjects";
import LatestNews from "@/components/LatestNews";

export default function HomePage() {
  return (
    <main className="homepage">
      <HeroWithPreloader />
      <IntroSection />
      <DivisionsCarousel />
      <FeaturedProjects />
      <LatestNews />
    </main>
  );
}
