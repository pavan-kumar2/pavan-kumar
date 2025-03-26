// import React from "react";
import "./SkillsTechnologiesSection.scss";
type Props = {};

export default function SkillsTechnologiesSection({}: Props) {
  const skills = [
  
   
  
    // { name: "NPM", level: "Advanced" },
    // { name: "Redux", level: "Advanced" },
    // { name: "NGRX", level: "Advanced" },
    // { name: "SIGNALS", level: "Advanced" },


    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "React.js", level: "Expert" },
    { name: "Angular", level: "Expert" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "RXJS", level: "Advanced" },
    { name: "SCSS", level: "Expert" },
    { name: "SASS", level: "Advanced" },
    { name: "GIT", level: "Advanced" },
    { name: "FIGMA", level: "Advanced" },
  ];

  return (
    <section className="skills-technologies-section">
      <div className="title">Skills & Technologies</div>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.name}:</strong> {skill.level}
          </li>
        ))}
      </ul>
    </section>
  );
}
