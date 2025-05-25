import "./App.scss";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationCertificationSection from "./components/EducationCertificationSection";
import SkillsTechnologiesSection from "./components/SkillsTechnologiesSection";
import ContactSections from "./components/ContactSections";
import FooterSection from "./components/FooterSection";
import NavigationBar from "./components/NavigationBar";
import { useRef, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState<string>("heroSection");

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const skillsTechnologiesSectionRef = useRef<HTMLDivElement>(null);
  const educationCertificationSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const navigateToSection = (sectionType: string) => {
    switch (sectionType) {
      case "heroSection":
        heroSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      case "aboutSection":
        aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      case "experienceSection":
        experienceSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      case "projectsSection":
        projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      case "skillsTechnologiesSection":
        skillsTechnologiesSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        return;
      case "educationCertificationSection":
        educationCertificationSectionRef.current?.scrollIntoView({
          behavior: "smooth",
        });
        return;
      case "contactSection":
        contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      default:
        return;
    }
  };

  return (
    <>
      <NavigationBar
        navigateToSection={navigateToSection}
        activeSection={activeSection}
      />
      <div className="section" ref={heroSectionRef}>
        <HeroSection setActiveSection={setActiveSection} />
      </div>
      <div className="section" ref={aboutSectionRef}>
        <AboutSection setActiveSection={setActiveSection} />
      </div>
      <div className="section" ref={experienceSectionRef}>
        <ExperienceSection setActiveSection={setActiveSection} />
      </div>
      <div className="section" ref={projectsSectionRef}>
        <ProjectsSection setActiveSection={setActiveSection} />
      </div>
      <div className="section" ref={skillsTechnologiesSectionRef}>
        <SkillsTechnologiesSection setActiveSection={setActiveSection}/>
      </div>
      <div ref={educationCertificationSectionRef}>
        <EducationCertificationSection setActiveSection={setActiveSection} />
      </div>
      <div className="section" ref={contactSectionRef}>
        <ContactSections setActiveSection={setActiveSection} />
      </div>
      <FooterSection />
    </>
  );
}

export default App;
