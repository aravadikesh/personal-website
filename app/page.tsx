import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import TimelineSection from "@/components/TimelineSection"
import Education from "@/components/Education"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <Education />
      <TimelineSection />
      <ProjectsSection />
    </main>
  )
}
