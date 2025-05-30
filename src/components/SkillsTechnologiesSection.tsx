import { memo, useEffect } from "react";
import "./SkillsSection.scss";
import { useInView } from "react-intersection-observer";
import { Section } from "../enums/section";
import { Skills, SkillsTechnologiesSectionProps } from "../types/Section.types";
import images from "../utility/images";

const SkillsTechnologiesSection = ({
  setActiveSection,
}: SkillsTechnologiesSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(Section.SkillsTechnologiesSection);
    }
  }, [inView, setActiveSection]);

  const skills: Skills[] = [
    { name: "HTML", logo: images.htmlLogo },
    { name: "CSS", logo: images.cssLogo },
    { name: "JavaScript", logo: images.javascriptLogo },
    { name: "TypeScript", logo: images.typescriptLogo },
    { name: "React.js", logo: images.reactjsLogo },
    { name: "Angular", logo: images.angularLogo },
    { name: "Bootstrap", logo: images.bootstrapLogo },
    { name: "Tailwind CSS", logo: images.tailwindCssLogo },
    { name: "RXJS", logo: images.rxjsLogo },
    { name: "SASS/SCSS", logo: images.sassScssLogo },
    { name: "GIT", logo: images.gitLogo },
  ];

  return (
    <section className="skills-technologies-section" ref={ref}>
      <div className="title">🛠️Skills & Technologies</div>

      <ul className="skills-wrapper">
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="skill">
              <img className="skill-img-texture" src={skill.logo} />
              <div className="skill-texture"></div>
            </div>

            <div className="skill-label">{skill.name}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(SkillsTechnologiesSection);
