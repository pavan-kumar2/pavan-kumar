import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  // const [count, setCount] = useState(0);

  const skills = [
    { name: "React.js", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "AWS", level: "Learning" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
  ];

  const projects = [
    {
      title: "E-Commerce App",
      description:
        "A React-based e-commerce platform with product listing, filtering, and cart management.",
      image: "/ecommerce-app.jpg", // Replace with your image path
      link: "https://yourprojectlink.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS showcasing my projects.",
      image: "/portfolio.jpg", // Replace with your image path
      link: "https://yourportfolio.com",
    },
  ];

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
    <>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>

      <section className="project">
        <div className="left-section">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
        <div className="right-section"></div>
      </section>

      <section className="experience">
        <div className="left-section">
          <h2>Work Experience</h2>
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
        </div>
        <div className="right-section">
          <img src="src/assets/10222622-103920934312_2-s5-v1.webp" />
        </div>
      </section>

      <section className="skills">
        <h2>Skills & Technologies</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.name}:</strong> {skill.level}
            </li>
          ))}
        </ul>
      </section>

      <section className="eduction">
        <h2>Education</h2>
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

      <section className="contact">
        <div className="right-section">
          <h2>Contact Me</h2>
          <p>Feel free to reach out for inquiries or collaborations!</p>

          {/* Contact Form */}
          <form>
            <label>Name:</label>
            <input type="text" placeholder="Your Name" required />

            <label>Email:</label>
            <input type="email" placeholder="Your Email" required />

            <label>Message:</label>
            <textarea placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="left-section">
          <p>
            Email:{" "}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>Connect with me:</p>
          <ul>
            <li>
              <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/yourprofile">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/yourhandle">Twitter</a>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>

        {/* Quick Links */}
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div>
          <p>Follow me:</p>
          <ul>
            <li>
              <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/yourprofile">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/yourhandle">Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
