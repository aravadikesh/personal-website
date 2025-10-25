import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import TimelineSection from "@/components/TimelineSection"
import Education from "@/components/Education"
import CurrentWorkTicker from "@/components/CurrentWorkTicker"

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HeroSection />
      </div>
      <CurrentWorkTicker />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <AboutSection />
        <Education />
        <TimelineSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
