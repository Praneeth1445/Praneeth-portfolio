import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    {
      name: 'Email',
      icon: '📧',
      link: 'mailto:pakkipraneeth@gmail.com',
      value: 'pakkipraneeth@gmail.com',
      color: '#FF6B6B'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      link: 'https://linkedin.com/in/praneethp1445',
      value: 'linkedin.com/in/praneethp1445',
      color: '#4ECDC4'
    },
    {
      name: 'GitHub',
      icon: '💻',
      link: 'https://github.com/Praneeth1445',
      value: 'github.com/Praneeth1445',
      color: '#6C5CE7'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate sending email
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = `mailto:pakkipraneeth@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">Let's create something amazing together</p>
        </div>

        <div className="contact-content">
          <div className="contact-links">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.link}
                className="social-card"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  '--card-color': social.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="social-icon">{social.icon}</span>
                <div className="social-info">
                  <h3>{social.name}</h3>
                  <p>{social.value}</p>
                </div>
                <div className="card-background"></div>
              </a>
            ))}
          </div>

          <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
                <span className="focus-border"></span>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
                <span className="focus-border"></span>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
                <span className="focus-border"></span>
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <span className="button-background"></span>
              </button>

              {submitStatus && (
                <div className={`submit-status ${submitStatus}`}>
                  {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
