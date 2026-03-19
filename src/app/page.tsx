import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Competencies from "@/components/home/Competencies";
import AboutMeCta from "@/components/home/AboutMeCta";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <Hero />
      <FeaturedProjects />
      <Competencies />
      <AboutMeCta />
    </div>
  );
}
