// import React from 'react';

import './ProjectsSection.scss'

type Props = {}

export default function ProjectsSection({}: Props) {
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
          },{
            title: "Portfolio Website",
            description:
              "A personal portfolio built with React and Tailwind CSS showcasing my projects.",
            image: "/portfolio.jpg", // Replace with your image path
            link: "https://yourportfolio.com",
          },{
            title: "Portfolio Website",
            description:
              "A personal portfolio built with React and Tailwind CSS showcasing my projects.",
            image: "/portfolio.jpg", // Replace with your image path
            link: "https://yourportfolio.com",
          },{
            title: "Portfolio Website",
            description:
              "A personal portfolio built with React and Tailwind CSS showcasing my projects.",
            image: "/portfolio.jpg", // Replace with your image path
            link: "https://yourportfolio.com",
          },{
            title: "Portfolio Website",
            description:
              "A personal portfolio built with React and Tailwind CSS showcasing my projects.",
            image: "/portfolio.jpg", // Replace with your image path
            link: "https://yourportfolio.com",
          },{
            title: "Portfolio Website",
            description:
              "A personal portfolio built with React and Tailwind CSS showcasing my projects.",
            image: "/portfolio.jpg", // Replace with your image path
            link: "https://yourportfolio.com",
          },{
            title: "Portfolio Website",
            description:
              "A personal portfolio built with React and Tailwind CSS showcasing my projects.",
            image: "/portfolio.jpg", // Replace with your image path
            link: "https://yourportfolio.com",
          },
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