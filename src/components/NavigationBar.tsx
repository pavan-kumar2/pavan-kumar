import { Section } from "../enums/section";
import "./NavigationBar.scss";

type Props = {
  navigateToSection: (sectionType: string) => void;
  activeSection: string;
};

export default function NavigationBar({
  navigateToSection,
  activeSection,
}: Props) {
  const navList: { icon: string; type: string }[] = [
    { icon: "👋🏻", type: Section.HeroSection },
    { icon: "✨", type: Section.AboutSection },
    { icon: "💼", type: Section.ExperienceSection },
    { icon: "💻", type: Section.ProjectsSection },
    { icon: "🛠️", type: Section.SkillsTechnologiesSection },
    { icon: "🎓", type: Section.EducationCertificationSection },
    { icon: "📬", type: Section.ContactSection },
  ];

  return (
    <div className="navigation-bar">
      {navList.map((nav, index) => (
        <button
          key={index + nav.type}
          className={nav.type === activeSection ? "active" : ""}
          onClick={() => navigateToSection(nav.type)}
        >
          {nav.icon}
        </button>
      ))}
    </div>
  );
}
