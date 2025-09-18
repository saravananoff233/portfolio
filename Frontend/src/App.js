import Header from './Components/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/Section/About';
import Contact from './Components/Section/Contact';
import Footer from './Components/Section/Footer';
import Projects from './Components/Section/Projects';
import Skills from './Components/Section/Skills';
import logo from './logo.svg';
import { useEffect } from 'react';


function App() {
   useEffect(() => {
                // Smooth scrolling for anchor links
                const links = document.querySelectorAll('a[href^="#"]');
                links.forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        const targetId = this.getAttribute('href');
                        if (targetId === '#') return;
                        
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    });
                });

                // Navbar background on scroll
                const header = document.querySelector('header');
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        header.style.background = 'rgba(255, 255, 255, 0.95)';
                        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                    } else {
                        header.style.background = 'white';
                        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    }
                });
            }, []);

  return (
    <div className="App">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
   <Contact />
   <Footer />
    </div>
  );
}

export default App;
