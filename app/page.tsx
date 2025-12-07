import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import Education from "@/components/Education"
import TimelineSection from "@/components/TimelineSection"
import ProjectsSection from "@/components/ProjectsSection"

export default function Home() {
  return (
    <main className="relative pb-32">
      <HeroSection />
      <AboutSection />
      <Education />
      <TimelineSection />
      <ProjectsSection />
    </main>
  )
}
