import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="nav-brand">Praneeth</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="hamburger"></span>
      </button>
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="hero" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="education" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Education</Link>
        <Link to="skills" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Skills</Link>
        <Link to="projects" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <Link to="internship" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Internship</Link>
        <Link to="certifications" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Certifications</Link>
        <Link to="hobbies" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Hobbies</Link>
      </nav>
    </header>
  );
};

export default Navbar;
