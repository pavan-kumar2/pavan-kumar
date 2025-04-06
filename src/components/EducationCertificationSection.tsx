// import React from "react";
import "./EducationCertificationSection.scss";

type Props = {};

export default function EducationCertificationSection({}: Props) {
  // const educationList = [
  //   {
  //     degree: "Bachelor's in Computer Science",
  //     institution: "XYZ University",
  //     year: "2019 - 2023",
  //   },
  //   {
  //     degree: "React.js Certification",
  //     institution: "Skill-Lync",
  //     year: "2024",
  //   },
  // ];

  const certifications = [
    {
      title: "Complete Front-End Development",
      provider: {
        name:'Skill Lync', 
        url:'https://www.google.com/search?q=Skill+Lync'
      },
      link: "https://skill-lync.com/certification/individual/k758ulf6v4mzcabw", // Replace with actual link
    },
    {
      title: "Angular Web Development for the Real World",
      provider: {
        name:'Skill Lync', 
        url:'https://www.google.com/search?q=Skill+Lync'
      },
      link: "https://skill-lync.com/certification/individual/72fe4v8o1qzbs9l0", // Replace with actual link
    },
    {
      title: "React.js",
      provider: {
        name:'Skill Lync', 
        url:'https://www.google.com/search?q=Skill+Lync'
      },
      link: "https://skill-lync.com/certification/individual/pfw05dvzmuensjl6", // Replace with actual link
    },
  ];

  return (
    <section className="eduction-certification-section">
      
      <div className="left-section">
        <img src="education-section.webp" />
      </div>
      <div className="right-section">
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
                  <a href="https://www.google.com/search?q=St.+Josephs+Pre-University+College+Bajpe"> St. Josephs Pre-University College </a>
                  passed out in 2015
                </div>
              </li>
              <li>
              <div className="education">
                  <span> Class 10th </span> at
                  <a href="https://www.google.com/search?q=St.+Joseph%60s+High+School+bajpe"> St. Joseph`s High School </a>
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
                  <a className="provider" href={cert.provider.url}>{cert.provider.name}</a>
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
