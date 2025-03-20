import React from 'react'
import './EducationCertificationSection.scss'

type Props = {}

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
          title: "React.js Certification",
          provider: "Skill-Lync",
          year: "2024",
          link: "https://certification-link.com", // Replace with actual link
        },
        {
          title: "AWS Cloud Practitioner",
          provider: "Amazon Web Services",
          year: "2025",
          link: "https://aws-certification-link.com", // Replace with actual link
        },
      ];
    
  return (
    <section className="eduction-certification-section">
    <div className="title">
        Education and Certification
    </div>
    <ul>
      {educationList.map((edu, index) => (
        <li key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution}</p>
          <p>{edu.year}</p>
        </li>
      ))}
    </ul>

    <h2>Certifications</h2>
    <ul>
      {certifications.map((cert, index) => (
        <li key={index}>
          <h3>{cert.title}</h3>
          <p>
            {cert.provider} - {cert.year}
          </p>
          <a href={cert.link} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </li>
      ))}
    </ul>
  </section>
  )
}