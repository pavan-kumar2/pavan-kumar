import { memo, useEffect } from "react";
import "./SkillsSection.scss";
import { useInView } from "react-intersection-observer";
import { Section } from "../enums/section";

type Props = { setActiveSection: (section: string) => void };

const SkillsTechnologiesSection =({setActiveSection}:Props)=> {

    const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

    useEffect(() => {
      if (inView) {
        setActiveSection(Section.SkillsTechnologiesSection);
      }
    }, [inView, setActiveSection]);

  const skills = [
    { name: "HTML", logo: "html-logo.png" },
    { name: "CSS", logo: "css-logo.png" },
    { name: "JavaScript", logo: "javascript-logo.png" },
    { name: "TypeScript", logo: "Typescript-logo.png" },
    { name: "React.js", logo: "reactjs-logo.svg" },
    { name: "Angular", logo: "angular-logo.svg"},
    { name: "Bootstrap", logo: "bootstrap-logo.svg" },
    { name: "Tailwind CSS", logo: "tailwind-css-logo.svg" },
    { name: "RXJS", logo: "Rxjs-logo.png" },
    { name: "SASS/SCSS", logo: "sass-scss-logo.svg" },
    { name: "GIT", logo: "git-logo.svg" },
    // { name: "FIGMA", logo: "Figma-logo.png" },
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
}

export default memo(SkillsTechnologiesSection);