import React from 'react';
import '../styles/Hero.css'; // create this CSS file

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Praneeth Pakki</span></h1>
          
          <p className="location">
            <i className="fas fa-map-marker-alt"></i> Visakhapatnam, India
          </p>
          <p className="summary">
            Quick learner with a collaborative mindset, eager to gain practical experience and grow within a dynamic team environment. Passionate about using technical skills to solve real-world problems and contribute to impactful projects.
          </p>
          <div className="cta-buttons">
            <a href="/assets/resume.pdf" className="primary-btn" download>
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
          <div className="social-links">
            <a href="mailto:pakkipraneeth@gmail.com" className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/Praneeth1445" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/praneethp1445" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <a href="#about">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
