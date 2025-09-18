import React from 'react'
import './Section.css'
const Footer = () => {
  return (
    <div>
                      <footer>
                    <div className="container">
                        <div className="footer-container">
                            <div className="footer-section">
                                <h3>Portfolio</h3>
                                <p>A portfolio website showcasing my skills, projects, and experience as a frontend developer.</p>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-github"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="footer-section">
                                <h3>Quick Links</h3>
                                <ul className="footer-links">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#skills">Skills</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h3>Contact Info</h3>
                                <ul className="footer-links">
                                    <li><i className="fas fa-map-marker-alt"></i> TamilNadu,Chennai</li>
                                    <li><i className="fas fa-phone"></i>+919710370693</li>
                                    <li><i className="fas fa-envelope"></i> saravanaoff540</li>
                                </ul>
                            </div>
                        </div>
                        <div className="copyright">
                            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                        </div>
                    </div>
                </footer>

    </div>
  )
}

export default Footer
