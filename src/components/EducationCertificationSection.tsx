import { useEffect } from "react";
import "./EducationCertificationSection.scss";
import { useInView } from "react-intersection-observer";
import { Section } from "../enums/section";
import { Certification, EducationCertificationSectionProps } from "../types/Section.types";

export default function EducationCertificationSection({
  setActiveSection,
}: EducationCertificationSectionProps) {
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(Section.EducationCertificationSection);
    }
  }, [inView, setActiveSection]);

  const certifications:Certification[] = [
    {
      title: "Complete Front-End Development",
      provider: {
        name: "Skill Lync",
        url: "https://skill-lync.com",
      },
      link: "https://skill-lync.com/certification/individual/k758ulf6v4mzcabw", // Replace with actual link
    },
    {
      title: "Angular Web Development for the Real World",
      provider: {
        name: "Skill Lync",
        url: "https://skill-lync.com",
      },
      link: "https://skill-lync.com/certification/individual/72fe4v8o1qzbs9l0", // Replace with actual link
    },
    {
      title: "React.js",
      provider: {
        name: "Skill Lync",
        url: "https://skill-lync.com",
      },
      link: "https://skill-lync.com/certification/individual/pfw05dvzmuensjl6", // Replace with actual link
    },
  ];

  return (
    <section className="eduction-certification-section" ref={ref}>
      <div className={`left-section ${inView ? "left-translate" : ""}`}>
        <img src="education-section.webp" />
      </div>
      <div className={`right-section ${inView ? "right-translate" : ""}`}>
        <div className="content-container">
          <div className="educations">
            <h2>🎓Education</h2>
            <ul>
              <li>
                <div className="education">
                  <span> Bachelor of Engineering(B.E) </span>
                  in <span>Mechanical engineering</span> at <a href="https://www.sahyadri.edu.in/" target="_blank">
                    Sahyadri College Of Engineering & Management
                  </a> passed out in 2021
                </div>
              </li>
            </ul>
          </div>

          <div className="certifications">
            <h2>📄Certification</h2>
            <ul>
              {certifications.map((cert, index) => (
                <li key={index}>
                  <div className="certificate">
                    <h3 className="title">{cert.title}</h3>
                    <a
                      className="provider"
                      href={cert.provider.url}
                      target="_blank"
                    >
                      {cert.provider.name}
                    </a>
                    <a
                      className="view-btn"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
