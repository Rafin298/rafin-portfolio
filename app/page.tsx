import Intro from "@/components/Intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
       <Intro/>
       <SectionDivider/>
       <About/>
       <Experience/>
       <Projects/>
       <Skills/>
       <Contact/>
    </main>
  )
}
