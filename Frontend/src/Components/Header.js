import React from 'react'
import { useState } from 'react';
import './Header.css'
const Header = () => {
          const [menuActive, setMenuActive] = useState(false);

            const toggleMenu = () => {
                setMenuActive(!menuActive);
            }
  return (
    <div>
         <header className="header">
                    <div className="container">
                        <nav className="nav">
                            <a href="#" className="logo">Portfolio</a>
                            <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                                <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
                                <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
                                <li><a href="#skills" onClick={() => setMenuActive(false)}>Skills</a></li>
                                <li><a href="#projects" onClick={() => setMenuActive(false)}>Projects</a></li>
                                <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
                            </ul>
                            <div className="menu-btn" onClick={toggleMenu}>
                                <i className={menuActive ? "fas fa-times" : "fas fa-bars"}></i>
                            </div>
                        </nav>
                    </div>
                </header>
    </div>
  )
}

export default Header
