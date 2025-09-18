import React from 'react'
import './Section.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import mongo from "../../images/mongo.png"// Ensure you have an image at this path or update the path accordingly
const Skills = () => {
    const skills = [
                { icon: "fab fa-react", color: "#61DBFB",  name: "React.js", description: "Building dynamic and responsive user interfaces with React" },
                { icon: "fab fa-js", color: "#F7DF1E",  name: "JavaScript", description: "Modern ES6+ JavaScript for interactive web experiences" },
                { icon: "fab fa-html5", color: "#E34F26", name: "HTML5", description: "Semantic and accessible markup for web applications" },
                { icon: "fab fa-css3",   color: "#1572B6", name: "CSS3", description: "Modern CSS with Flexbox, Grid, and animations" },
                { icon: "fab fa-sass",    color: "#1572B6",name: "SASS", description: "CSS preprocessor for more maintainable stylesheets" },
                { icon: "fab fa-node-js",color: "#68A063", name: "Node js", description: "Backend JavaScript runtime environment" },
                {  image: mongo,color: "#47A248",  name: "MongoDB", description: "NoSQL database for modern applications" },
                  { icon: "fab fa-git",  color: "#F05032",  name: "Git", description: "Version control and collaboration on development projects" }
            ];
  return (
    <div>
      <section className="skills" id="skills">
                    <div className="container">
                        <div className="section-title">
                            <h2>My Skills</h2>
                            <p>Here are the technologies and tools I work with</p>
                        </div>
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div className="skill-card" key={index}>
       
                                    {skill.icon ? (
                                    <i className={skill.icon} style={{ color: skill.color, fontSize: "40px" }}></i>
                                    ) : (
            <img src={skill.image} alt={skill.name} style={{ width: "40px", height: "40px" }} />
          )}
                                    <h3>{skill.name}</h3>
                                    <p>{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default Skills
