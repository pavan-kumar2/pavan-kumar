import "./App.scss";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationCertificationSection from "./components/EducationCertificationSection";
import SkillsTechnologiesSection from "./components/SkillsTechnologiesSection";
import ContactSections from "./components/ContactSections";
import FooterSection from "./components/FooterSection";

function App() {

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
