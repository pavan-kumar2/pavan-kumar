import { useEffect } from "react";
import "./ProjectsSection.scss";
import { useInView } from "react-intersection-observer";
import { Section } from "../enums/section";
import { ProjectsSectionProps } from "../types/Section.types";

export default function ProjectsSection({
  setActiveSection,
}: ProjectsSectionProps) {
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(Section.ProjectsSection);
    }
  }, [inView, setActiveSection]);

  const projects = [
    {
      title: "Swag of India",
      description:
        "Swag of India is a responsive e-commerce website designed to provide users with a seamless online shopping experience. The project showcases various products and offers functionalities like product browsing, cart management, and user profile handling.",
      image: "swag-of-india-preview-image.png",
      keySkills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "AJAX & JSON",
      ],
      liveDemo: "https://pavan-kumar2.github.io/Swag_of_India",
      github: "https://github.com/pavan-kumar2/Swag_of_India",
    },
    {
      title: "Movie Overview Application",
      description:
        "The movie overview app is a web application that allows users to browse and search for movies, view movie details, and view their IMDb ratings. And uses a third-party API to retrieve movie data.",
      image: "movie-overview-application-preview-image.png",
      keySkills: ["HTML5", "CSS3", "JavaScript", "React.js", "AJAX", "JSX"],
      liveDemo: "https://movie-overview-application.netlify.app",
      github: "https://github.com/pavan-kumar2/Movie-Overview-Application",
    },
    {
      title: "Multinational News App",
      description:
        "Developed a comprehensive, mobile-responsive news browsing application using Angular and RxJS. This project empowers users to explore news articles by country and source, with efficient data flow.",
      image: "multinational-news-app-preview-image.png",
      keySkills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Typescript",
        "Angular",
        "SCSS",
        "RxJS",
      ],
      liveDemo: "https://multinational-news-app.netlify.app/",
      github: "https://github.com/pavan-kumar2/Multinational-News-App",
    },
    {
      title: "ShopMate",
      description:
        "ShopMate is a modern e-commerce web app built with React, Tailwind CSS, and React Router. It uses FakeStoreAPI for product data and manages state using Context API and custom hooks. Users can browse, add to cart, and complete a mock checkout with a responsive and clean UI.",
      image: "shopmate-preview-image.png",
      keySkills: [
        "React.js",
        "Tailwind CSS",
        "JSX",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Context API",
      ],
      liveDemo: "https://pavan-kumar-shopmate.netlify.app",
      github: "https://github.com/pavan-kumar2/shop-mate",
    },
    {
      title: "Pavan Kumar Portfolio",
      description:
        "Pavan Kumar portfolio website, showcasing skills, projects, and contact information.",
      image: "pavankumar-portfolio-preview-image.png",
      link: "",
    },
  ];

  return (
    <section className="projects-section" ref={ref}>
      <div className="title">💻Skill-Building Projects</div>

      <div className="cards-wrapper">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="content">
              <h3 className="name">{project.title}</h3>
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <p className="description">{project.description}</p>
              <div className="key-skills">
                <span>Key Skills: </span>
                {project?.keySkills?.join(", ")}
              </div>
            </div>

            <div className="character">
              <img src="project-view.png" />
              <div className="buttons-wrapper">
                <a
                  className="view-project"
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  className="view-project"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
