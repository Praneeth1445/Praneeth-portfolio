import React from 'react';
import '../styles/Hobbies.css';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Music',
      icon: '🎵',
      description: 'Passionate about music and its ability to inspire creativity',
      color: '#FF6B6B'
    },
    {
      title: 'Cricket',
      icon: '🏏',
      description: 'Enjoy playing and watching cricket, a sport that teaches teamwork and strategy',
      color: '#4ECDC4'
    },
    {
      title: 'Math Problems',
      icon: '🔢',
      description: 'Love solving complex mathematical problems and puzzles',
      color: '#6C5CE7'
    }
  ];

  return (
    <section id="hobbies" className="hobbies">
      <div className="hobbies-container">
        <div className="hobbies-header">
          <h2>Hobbies & Interests</h2>
          <p className="hobbies-subtitle">Things I love to do when I'm not coding</p>
        </div>
        
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <div 
              key={hobby.title}
              className="hobby-card"
              style={{
                '--card-color': hobby.color,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="hobby-icon">{hobby.icon}</div>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
              <div className="hobby-background"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
