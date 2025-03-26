import React from "react";
import "./EducationCertificationSection.scss";

type Props = {};

export default function EducationCertificationSection({}: Props) {
  const educationList = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "XYZ University",
      year: "2019 - 2023",
    },
    {
      degree: "React.js Certification",
      institution: "Skill-Lync",
      year: "2024",
    },
  ];

  const certifications = [
    {
      title: "Complete Front-End Development",
      provider: "Skill Lync",
      link: "https://skill-lync.com/certification/individual/k758ulf6v4mzcabw", // Replace with actual link
    },
    {
      title: "Angular Web Development for the Real World",
      provider: "Skill Lync",
      link: "https://skill-lync.com/certification/individual/72fe4v8o1qzbs9l0", // Replace with actual link
    },
    {
      title: "React.js",
      provider: "Skill Lync",
      link: "https://skill-lync.com/certification/individual/pfw05dvzmuensjl6", // Replace with actual link
    },
  ];

  return (
    <section className="eduction-certification-section">
      <div className="left-section">
        <div className="content-container">
          <div className="educations">
            <h2>Education</h2>
            <ul>
              <li>
                <div className="education">
                  <span> Bachelor of Engineering(B.E) </span> 
                  in <span>Mechanical engineering</span> at
                  <a href="https://www.sahyadri.edu.in/"> Sahyadri College Of Engineering & Management </a> 
                  passed out in 2021
                </div>
              </li>
              <li>
              <div className="education">
                  <span> Diploma</span>
                  in <span>Mechanical engineering</span> at
                  <a href="https://www.snspt.org/"> Sri Niranjana Swami Polytechnic (SNSP) Bajpe </a> 
                  passed out in 2018
                </div>
              </li>
              <li>
              <div className="education">
                  <span> Class 12th </span>
                  in <span>Commerce</span> at
                  <a href="https://www.google.com/search?q=St.+Josephs+Pre-University+College+Bajpe&sca_esv=5eadaca3d07e07eb&rlz=1C1VDKB_enIN1133IN1133&udm=2&biw=1536&bih=695&sxsrf=AHTn8zoL78p1H2UrvjQ0xFc78lY2Ds16uw%3A1742748809280&ei=iTzgZ7_rEIiN4-EPi6WO4QM&ved=0ahUKEwj_09ad1aCMAxWIxjgGHYuSIzwQ4dUDCBE&uact=5&oq=St.+Josephs+Pre-University+College+Bajpe&gs_lp=EgNpbWciKFN0LiBKb3NlcGhzIFByZS1Vbml2ZXJzaXR5IENvbGxlZ2UgQmFqcGUyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApISVAAWABwAXgAkAEAmAEAoAEAqgEAuAEDyAEAmAIBoAIMmAMAiAYBkgcBMaAHALIHALgHAA&sclient=img"> St. Josephs Pre-University College </a>
                  passed out in 2015
                </div>
              </li>
              <li>
              <div className="education">
                  <span> Class 10th </span> at
                  <a href="https://www.google.com/search?q=St.+Joseph%60s+High+School+bajpe&sca_esv=65173d9604faf661&rlz=1C1VDKB_enIN1133IN1133&sxsrf=AHTn8zpKxEMBFPC3dkOy_s-rRcILMujgHA%3A1742749292392&ei=bD7gZ8HLF7ed4-EP7J7GuAU&ved=0ahUKEwjBsYWE16CMAxW3zjgGHWyPEVcQ4dUDCBA&uact=5&oq=St.+Joseph%60s+High+School+bajpe&gs_lp=Egxnd3Mtd2l6LXNlcnAiHlN0LiBKb3NlcGhgcyBIaWdoIFNjaG9vbCBiYWpwZTIJEAAYsAMYDRgeMgkQABiwAxgKGB4yCBAAGLADGO8FMggQABiwAxjvBTILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIESJ-nAlAAWABwAngAkAEAmAEAoAEAqgEAuAEDyAEAmAICoAIMmAMAiAYBkAYGkgcBMqAHALIHALgHAA&sclient=gws-wiz-serp"> St. Joseph`s High School </a>
                  passed out in 2013
                </div>
                </li>
            </ul>
          </div>

          <div className="certifications">
          <h2>Certification</h2>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>
                <div className="certificate">
                  <h3 className="title">{cert.title}</h3>
                  <p className="provider">{cert.provider}</p>
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

      <div className="right-section">
        <img src="src/assets/about-image.webp" />
      </div>
    </section>
  );
}
