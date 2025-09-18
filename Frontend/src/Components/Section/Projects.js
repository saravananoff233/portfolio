import React from 'react'
import './Section.css'
const Projects = () => {
       const projects = [
                { 
                    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", 
                    title: "E-Commerce Website", 
                    description: "A fully responsive e-commerce platform built with javascript and Bootstrap,Css." ,
                    link:"https://saravananoff233.github.io/Royal-store-E-commerce-website/"
                },
                { 
                    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 
                    title: "Task Management App", 
                    description: "A drag-and-drop task management application with user authentication and real-time updates." 
                },
                { 
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", 
                    title: "Weather Dashboard", 
                    description: "A weather application that displays current and forecasted weather data based on user location.",
                    link:"https://saravananoff233.github.io/Weather-app/" 
                }
            ];
 const handleClick = (e) => {
  const href = e.target.getAttribute('href');
  // Only handle internal anchor links
  if (href.startsWith('#')) {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <div>
       <section className="projects" id="projects">
                    <div className="container">
                        <div className="section-title">
                            <h2>My Projects</h2>
                            <p>Here are some of the projects I've worked on</p>
                        </div>
                        <div className="projects-container">
                            {projects.map((project, index) => (
                                <div className="project-card" key={index}>
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                       <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                             View Details
                                </a>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default Projects
