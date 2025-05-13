// import React from "react";
import { memo } from "react";
import "./SkillsSection.scss";
type Props = {};

const SkillsTechnologiesSection =({}: Props)=> {
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
    <section className="skills-technologies-section">
      <div className="title">Skills & Technologies</div>

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