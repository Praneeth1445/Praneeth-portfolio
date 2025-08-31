import React, { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "CVE Tracker",
    desc: "A Django-MySQL app to track vulnerabilities from 5+ APIs (CVE, CISA KEV, ExploitDB). Includes Chart.js dashboards, audit logging, and secure sync.",
    tech: "Django, MySQL, Chart.js, APIs",
    github: "https://github.com/Praneeth1445/CVE-Tracker",
    category: "Full Stack",
    color: "#3498db",
    icon: "🛡️"
  },
  {
    title: "Quick Bites!",
    desc: "Real-time canteen system with menu updates, order customization, and payments.",
    tech: "HTML, CSS, JS, PHP, MySQL",
    github: "https://github.com/Praneeth1445/QuickBites-web",
    category: "Web App",
    color: "#e74c3c",
    icon: "🍽️"
  },
  {
    title: "Property Tech",
    desc: "Real estate portal for listing, viewing media, and future development tracking.",
    tech: "HTML, CSS, JS, PHP, MySQL",
    github: "https://github.com/Praneeth1445/PropTech/tree/feature/main",
    category: "Web App",
    color: "#2ecc71",
    icon: "🏠"
  },
  {
    title: "Chatbot with Gemini API",
    desc: "Built an AI chatbot using Flask and Gemini API with frontend-backend integration.",
    tech: "Flask, Gemini API, JS",
    github: "https://github.com/Praneeth1445/ChatBot/tree/main",
    category: "AI/ML",
    color: "#9b59b6",
    icon: "🤖"
  },
  {
    title: "wheather-app",
    desc: "Developed a responsive weather application in React.js, integrating the OpenWeatherMap API for real-time data.",
    tech: "React.js, OpenWeatherMap API, CSS",
    github: "https://github.com/Praneeth1445/weather-app",
    category: "Web App",
    color: "#9b59b6",
    icon: "☀️"
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const rotateY = -((e.clientX - centerX) / 10);
    const rotateX = (e.clientY - centerY) / 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="project-card-wrapper"
      style={{
        '--delay': `${index * 0.1}s`,
        '--accent-color': project.color
      }}
    >
      <div
        className={`project-card ${isHovered ? 'hovered' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        <div className="project-content">
          <div className="project-header">
            <span className="project-icon">{project.icon}</span>
            <div className="project-title-group">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </div>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tech">
            <h4>Technologies Used</h4>
            <div className="tech-tags">
              {project.tech.split(", ").map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              <i className="fab fa-github"></i>
              <span>View Source</span>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Explore my latest work and side projects</p>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {projects
            .filter(proj => selectedCategory === 'All' || proj.category === selectedCategory)
            .map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
