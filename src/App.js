import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Internship />
      <Certifications />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;