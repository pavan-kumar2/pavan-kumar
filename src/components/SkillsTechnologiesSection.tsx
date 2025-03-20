import React from 'react'
import "./SkillsTechnologiesSection.scss"
type Props = {}

export default function SkillsTechnologiesSection({}: Props) {
  const skills = [
    { name: "React.js", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "AWS", level: "Learning" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
  ];

  return (
    <section className="skills-technologies-section">
      <div className="title">
      Skills & Technologies
      </div>
   
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.name}:</strong> {skill.level}
            </li>
          ))}
        </ul>
      </section>

  )
}