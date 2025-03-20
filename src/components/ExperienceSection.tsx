import React from 'react'
import "./ExperienceSection.scss";

type Props = {}

export default function ExperienceSection({}: Props) {
    const experience = [
        {
          company: "Tech Company",
          role: "Frontend Developer",
          duration: "2023 - Present",
          contributions: [
            "Developed and maintained user-friendly web applications.",
            "Improved website performance and accessibility.",
            "Collaborated with backend teams to integrate APIs.",
          ],
        },
        {
          company: "Startup XYZ",
          role: "React Developer Intern",
          duration: "2022 - 2023",
          contributions: [
            "Built reusable React components for a SaaS product.",
            "Enhanced UI/UX with interactive animations.",
            "Implemented authentication and state management.",
          ],
        },
      ];
  return (
    <section className="experience-section">
        <div className="title">
        Work Experience
        </div>
   
      {experience.map((job, index) => (
        <div key={index}>
          <h3>
            {job.company} - {job.role}
          </h3>
          <p>{job.duration}</p>
          <ul>
            {job.contributions.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
  
  </section>
  )
}