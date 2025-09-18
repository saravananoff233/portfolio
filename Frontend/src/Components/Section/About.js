import React from 'react'
import './Section.css'
const About = () => {
  return (
    <div>
        <section className="about" id="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>About Me</h2>
                            <p>Get to know more about my background and experience</p>
                        </div>
                        <div className="about-content">
                            <div className="about-text">
                                <h3>Fullstack Developer</h3>
                                <p>I'm a passionate Fullstack developer with experience building responsive and user-friendly web applications. I specialize in React.js, JavaScript, and modern CSS frameworks.</p>
                                <p>My approach combines technical expertise with an eye for design to create engaging digital experiences that not only look great but also function flawlessly across all devices.</p>
                                <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials.</p>
                                <a href="#contact" className="btn">Hire Me</a>
                            </div>
                            <div className="about-image">
                                <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="About Me" />
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default About
