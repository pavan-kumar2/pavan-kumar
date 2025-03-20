import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
// import SkillsTechnologiesSection from "./components/skillsTechnologiesSection";
import EducationCertificationSection from "./components/EducationCertificationSection";
import SkillsTechnologiesSection from "./components/SkillsTechnologiesSection";
import ContactSections from "./components/ContactSections";
import FooterSection from "./components/FooterSection";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ExperienceSection></ExperienceSection>
      <ProjectsSection></ProjectsSection>
      <SkillsTechnologiesSection></SkillsTechnologiesSection>
      <EducationCertificationSection></EducationCertificationSection>
      <ContactSections></ContactSections>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;
