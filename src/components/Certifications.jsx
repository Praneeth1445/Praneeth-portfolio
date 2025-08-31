import React from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const certs = [
    "Cloud Virtual Internship – Salesforce",
    "Introduction to Networks – Cisco Networking Academy"
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <ul>
        {certs.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
