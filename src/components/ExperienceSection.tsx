import React from "react";
import "./ExperienceSection.scss";

type Props = {};

export default function ExperienceSection({}: Props) {
  const experience = [
    {
      company: "Tradexa Technologies Pvt. Ltd.",
      role: "Frontend Developer",
      duration: "19/07/2023 - Present",
      contributions: [
        "Develop user interfaces for modern rich internet applications with the latest front end technologies",
        "Perform product analysis and development tasks of increasingly complex nature which may require extensive research and analysis",
        "Make design and technical decisions for Angular projects",
        "Develop application code and unit test in the Angular",
        "Design and develop application components using frontend frameworks such Angular, TypeScript, JavaScript, HTML, CSS and SCSS",
        "Develop overall concepts for improving the user experience within a business webpage or product, ensuring all interactions are intuitive and convenient for customers",
      ],
    },
    {
      company: "Tradexa Technologies Pvt. Ltd.",
      role: "Frontend Developer",
      duration: "18/01/2023 – 18/07/2023",
      contributions: [
        "Research into UI development trends, current design strategy, and technology",
        "Combine interface design concepts with digital design and establish milestones to encourage  cooperation",
        "Design and develop application components using frontend frameworks such Angular, TypeScript JavaScript, HTML, CSS and SCSS",
        "Conduct testing of completed applications, websites, and software to assess user experience",
        "Seek to enhance the user experience by creating seamless navigation through various digital programs and interfaces within the company",
      ],
    },
  ];

  return (
    <section className="experience-section">
      <div className="left-section">
        <div className="content-container">
          <h2>Work Experience</h2>

          {experience.map((job, index) => (
            <div className="experience" key={index}>
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
        </div>
      </div>
      <div className="right-section">
        <img src="src/assets/hero-image.webp" />
      </div>
    </section>
  );
}
