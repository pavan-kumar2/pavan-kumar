// import React from 'react';

import "./ProjectsSection.scss";

type Props = {};

export default function ProjectsSection({ }: Props) {
  const projects = [
    {
      title: "Swag of India",
      description: "Swag of India is a responsive e-commerce website designed to provide users with a seamless online shopping experience. The project showcases various products and offers functionalities like product browsing, cart management, and user profile handling.",
      image: "swag-of-india-preview-image.png", 
      keySkills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery','Bootstrap', 'AJAX & JSON'],
      liveDemo: 'https://pavan-kumar2.github.io/Swag_of_India',
      github: 'https://github.com/pavan-kumar2/Swag_of_India'
    },
    {
      title: "Movie Overview Application",
      description:
        "The movie overview app is a web application that allows users to browse and search for movies, view movie details, and view their IMDb ratings. And uses a third-party API to retrieve movie data.",
      image: "movie-overview-application-preview-image.png",
      keySkills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'AJAX', 'JSX'],
      liveDemo: 'https://multinational-news-app.netlify.app/',
      github: 'https://github.com/pavan-kumar2/Movie-Overview-Application'
    },
    {
      title: "Multinational News App",
      description:
        "Developed a comprehensive, mobile-responsive news browsing application using Angular and RxJS. This project empowers users to explore news articles by country and source, with efficient data flow.",
      image: "multinational-news-app-preview-image.png", 
      keySkills: ['HTML5', 'CSS3', 'JavaScript', 'Typescript', 'Angular', 'SCSS', 'RxJS'],
      liveDemo: 'https://multinational-news-app.netlify.app/',
      github: 'https://github.com/pavan-kumar2/Multinational-News-App'
    },
    {
      title: "E-commerce App",
      description:
        "Developed a comprehensive, mobile-responsive news browsing application using Angular and RxJS. This project empowers users to explore news articles by country and source, with efficient data flow.",
      image: "multinational-news-app-preview-image.png", 
      keySkills: ['HTML5', 'CSS3', 'JavaScript','Bootstrap', 'React.js' ],
      liveDemo: 'https://pavan-kumar-e-commerce-application.netlify.app/',
      github: 'https://github.com/pavan-kumar2/Ecommerce-App'
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
