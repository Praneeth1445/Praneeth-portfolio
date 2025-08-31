import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');
  
  const skillCategories = {
    'Programming Languages': {
      icon: '💻',
      skills: [
        'Python',
        'Java',
        'JavaScript',
        'C',
        'PHP'
      ],
      color: '#3498db',
      description: 'Strong foundation in multiple programming languages with expertise in both object-oriented and functional programming paradigms.'
    },
    'Web Technologies': {
      icon: '🌐',
      skills: [
        'React JS',
        'HTML5',
        'CSS3'
      ],
      color: '#e74c3c',
      description: 'Proficient in modern web development with focus on responsive design and interactive user interfaces.'
    },
    'Database & Tools': {
      icon: '🛠️',
      skills: [
        'MySQL',
        'Git',
        'phpMyAdmin',
        'SQL'
      ],
      color: '#2ecc71',
      description: 'Experienced in database management, version control, and development tools for efficient workflow.'
    },
    'Frameworks': {
      icon: '⚡',
      skills: [
        'Django',
        'Flask',
        
      ],
      color: '#9b59b6',
      description: 'Proficient in various frameworks for building scalable web applications and data visualization.'
    },
    'Languages': {
      icon: '🗣️',
      skills: [
        'English',
        'Telugu'
      ],
      color: '#f1c40f',
      description: 'Fluent in multiple languages enabling effective communication in diverse environments.'
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Technical Expertise</h2>
          <p className="skills-subtitle">Comprehensive skillset in software development and web technologies</p>
        </div>
        
        <div className="skills-content">
          <div className="skills-navigation">
            {Object.entries(skillCategories).map(([category, data]) => (
              <div
                key={category}
                className={`skill-nav-item ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <span className="skill-nav-icon">{data.icon}</span>
                <div className="skill-nav-text">
                  <h3>{category}</h3>
                  <p className="skill-count">{data.skills.length} Skills</p>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-details">
            {Object.entries(skillCategories).map(([category, data]) => (
              <div
                key={category}
                className={`skill-category-details ${activeCategory === category ? 'active' : ''}`}
              >
                <div className="category-header">
                  <span className="category-icon" style={{ background: data.color }}>{data.icon}</span>
                  <h3>{category}</h3>
                </div>
                <p className="category-description">{data.description}</p>
                <div className="skills-grid">
                  {data.skills.map((skill, index) => (
                    <div 
                      key={skill} 
                      className="skill-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill}</span>
                      </div>
                      <div className="skill-icon-container" style={{ color: data.color }}>
                        {data.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
