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
import { Section } from "./enums/section";

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

    console.log( sectionType);
    switch (sectionType) {
      case Section.HeroSection:
        heroSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      case Section.AboutSection:
        aboutSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      case Section.ExperienceSection:
        experienceSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      case Section.ProjectsSection:
        projectsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      case Section.SkillsTechnologiesSection:
        skillsTechnologiesSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      case Section.EducationCertificationSection:
        educationCertificationSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      case Section.ContactSection:
        contactSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      <div className="section" ref={educationCertificationSectionRef}>
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
