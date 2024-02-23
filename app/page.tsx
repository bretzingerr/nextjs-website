import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero section with slanted edges */}
      <div className="section bg-color-1">
        <div className="content">
          <HeroSection />
        </div>
      </div>

      {/* About section with slanted edges and different background color */}
      <div className="section bg-color-2">
        <div className="content">
          <AboutSection />
        </div>
      </div>

      {/* Projects section with slanted edges and another background color */}
      <div className="section bg-color-3">
        <div className="content content-wide">
          <ProjectsSection />
        </div>
      </div>
    </main>
  );
}

