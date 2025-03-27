// import React from 'react';

import './ProjectsSection.scss'

type Props = {}

export default function ProjectsSection({}: Props) {
    const projects = [
        {
          title: "Swag of India",
          description:
            "Swag of India E-commerce website Project using HTML5, CSS3, Bootstrap4, JavaScript and jQuery",
          image: "/ecommerce-app.jpg", // Replace with your image path
          link: "https://pavan-kumar2.github.io/Swag_of_India/",
        },
        {
            title: "Movie-Application",
            description:
              "The movie app is a web application that allows users to browse and search for movies, view movie details, and view their IMDb ratings. The app is built using HTML, CSS, JavaScript and React JS for the frontend, and uses a third-party API to retrieve movie data.",
            image: "/portfolio.jpg", // Replace with your image path
            link: "https://pavan-kumar2.github.io/Movie-Application/",
          },{
            title: "multinational-news-app",
            description:
              "Developed a comprehensive, mobile-responsive news browsing application using Angular and RxJS. This project empowers users to explore news articles by country and source, with efficient data flow.",
            image: "/portfolio.jpg", // Replace with your image path
            link: "https://multinational-news-app.netlify.app/",
          },{
            title: "E commerce app",
            description:
              "Developed a comprehensive, mobile-responsive news browsing application using Angular and RxJS. This project empowers users to explore news articles by country and source, with efficient data flow.",
            image: "/portfolio.jpg", // Replace with your image path
            link: "https://multinational-news-app.netlify.app/",
          },{
            title: "Pavan Kumar",
            description:
              "Pavan kunar portfoilio website",
            image: "/portfolio.jpg", // Replace with your image path
            link: "",
          }
      ];

  return (
    <section className="projects-section">
        <div className='title'>
          My Projects For skill develop
        </div>

          <div className="cards-wrapper">
          {projects.map((project, index) => (
            <div className='card' key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} />
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
          </div>
         
        
      
      </section>
  )
}