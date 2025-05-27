import { useEffect } from "react";
import "./ExperienceSection.scss";
import { useInView } from "react-intersection-observer";
import { Section } from "../enums/section";
import { ExperienceSectionProps } from "../types/Section.types";

export default function ExperienceSection({ setActiveSection }: ExperienceSectionProps) {
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(Section.ExperienceSection);
    }
  }, [inView, setActiveSection]);

  const experience = [
    {
      company: {
        name: "Tradexa Technologies Pvt. Ltd.",
        url: "https://www.google.com/search?q=Tradexa+Technologies+Pvt.+Ltd.",
      },
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
      projectsIWorked: [
        { name: "Tradexa", url: "https://www.tradexa.in" },
        { name: "Hyper Inventory", url: "https://admin.hyperinventory.com" },
        { name: "Hyper Ads", url: "https://ams.hyperinventory.com" },
      ],
    },
    {
      company: {
        name: "Tradexa Technologies Pvt. Ltd.",
        url: "https://www.google.com/search?q=Tradexa+Technologies+Pvt.+Ltd.",
      },
      role: "Intern Frontend Developer",
      duration: "18/01/2023 – 18/07/2023",
      contributions: [
        "Research into UI development trends, current design strategy, and technology",
        "Combine interface design concepts with digital design and establish milestones to encourage  cooperation",
        "Design and develop application components using frontend frameworks such Angular, TypeScript JavaScript, HTML, CSS and SCSS",
        "Conduct testing of completed applications, websites, and software to assess user experience",
        "Seek to enhance the user experience by creating seamless navigation through various digital programs and interfaces within the company",
      ],
      projectsIWorked: [
        { name: "LearnIM", url: "https://learn.imaginext.co.in" },
        { name: "LearnIM Admin", url: "https://learnadmin.imaginext.co.in" },
      ],
    },
  ];

  return (
    <section className="experience-section" ref={ref}>
      <div className={`left-section ${inView ? "left-translate" : ""}`}>
        <div className="content-container">
          <h2>💼Work Experience</h2>

          {experience.map((job, index) => (
            <div className="experience" key={index}>
              <h3 className="title">
                <span>{job.role}</span> - <a href={job.company.url} target="_blank">
                  {job.company.name}
                </a>
              </h3>
              <p className="duration">{job.duration}</p>
              <ul className="contributions">
                {job.contributions.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="project-worked-on">
                <h3>Projects I worked on:</h3>
                <ul className="projects-list">
                  {job.projectsIWorked.map((project, i) => (
                    <li key={i}>
                      <a href={project.url} target="_black">
                        {project.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`right-section ${inView ? "right-translate" : ""}`}>
        <img src="experience-section.webp" />
      </div>
    </section>
  );
}
