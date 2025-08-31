import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="edu-item">
        <h3>Maharaj Vijayaram Gajapathi Raj College of Engineering</h3>
        <p><strong>B.Tech in Information Technology</strong> – CGPA: 8.52 (Present)</p>
        <p>Vizianagaram, India</p>
      </div>
      <div className="edu-item">
        <h3>Narayana Junior College</h3>
        <p><strong>Senior Secondary (Intermediate)</strong> – 70.9%</p>
        <p>Visakhapatnam, India (2020–2022)</p>
      </div>
      <div className="edu-item">
        <h3>V.T. High School</h3>
        <p><strong>SSC (Board of Secondary Education)</strong> – 97.6%</p>
        <p>Visakhapatnam, India (2020)</p>
      </div>
    </section>
  );
};

export default Education;
