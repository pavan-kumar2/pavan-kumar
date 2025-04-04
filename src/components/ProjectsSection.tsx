// import React from 'react';

import "./ProjectsSection.scss";

type Props = {};

export default function ProjectsSection({}: Props) {
  const projects = [
    {
      title: "Swag of India",
      description:
        "Swag of India E-commerce website Project using HTML5, CSS3, Bootstrap4, JavaScript and jQuery",
      image: "swagofindia-preview-image.png", // Replace with your image path
      liveDemo:'https://pavan-kumar2.github.io/Swag_of_India',
      github:'https://github.com/pavan-kumar2/Swag_of_India'
    },
    {
      title: "Movie-Application",
      description:
        "The movie app is a web application that allows users to browse and search for movies, view movie details, and view their IMDb ratings. The app is built using HTML, CSS, JavaScript and React JS for the frontend, and uses a third-party API to retrieve movie data.",
        image: "swagofindia-preview-image.png", // Replace with your image path
        liveDemo:'https://multinational-news-app.netlify.app/',
        github:'https://github.com/pavan-kumar2/Multinational-News-App'
    },
    {
      title: "multinational-news-app",
      description:
        "Developed a comprehensive, mobile-responsive news browsing application using Angular and RxJS. This project empowers users to explore news articles by country and source, with efficient data flow.",
        image: "multinational-news-app-preview-image.png", // Replace with your image path
        liveDemo:'https://multinational-news-app.netlify.app/',
        github:'https://github.com/pavan-kumar2/Multinational-News-App'
    },
    {
      title: "E commerce app",
      description:
        "Developed a comprehensive, mobile-responsive news browsing application using Angular and RxJS. This project empowers users to explore news articles by country and source, with efficient data flow.",
        image: "swagofindia-preview-image.png", // Replace with your image path
      link: "https://multinational-news-app.netlify.app/",
    },
    {
      title: "Pavan Kumar",
      description: "Pavan kunar portfoilio website",
      image: "swagofindia-preview-image.png", // Replace with your image path
      link: "",
    },
  ];

  return (
    <section className="projects-section">
      <div className="title">My Projects For skill develop</div>

      <div className="cards-wrapper">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="wrapper">
              <h3 className="name">{project.title}</h3>
              <img className="project-image" src={project.image} alt={project.title} />
              <p className="description">{project.description}</p>
              <div className="key-skills">
                <span>Key Skills: </span>
              HTML5, CSS3, JavaScript, ReactJS
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
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
