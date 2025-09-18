import React from 'react'
import '../Section/Section.css'
import profileImage from '../../assets/image3.png' // Ensure you have an image at this path or update the path accordingly
const Hero = () => {
  return (
    <div>
       <section className="hero" id="home">
                    <div className="container">
                        <div className="hero-content">
                            <h1>Hi, I'm Saravanan </h1>
                            <p>"Fullstack Developer skilled in React.js, Node.js, and MongoDB, building responsive UIs and scalable web apps."</p>
                            <a href="#projects" className="btn">View My Work</a>
                        </div>
                        <div className="hero-image">
                            <img src={profileImage} alt="Profile" />
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default Hero
