import React from 'react';
import './hire.css';

export default function Hire() {
  return (
    <div className="hire-section">
      <div className="hire-container">
        <div className="hire-header">
          <h2 className="hire-title">Hire <span className="highlight">Me</span></h2>
          <h3 className="hire-subtitle">Do you have any work?</h3>
        </div>
        
        <div className="hire-content">
          <h4 className="hire-question">Do you want any work from me?</h4>
          
          <p className="hire-description">
            If you are seeking a frontend developer who is not only proficient in established 
            technologies but also committed to maintaining quality, adopting new tech trends, 
            and meeting deadlines, I am ready to contribute my skills to enhance your projects. 
            Let's collaborate to create innovative and impactful digital experiences.
          </p>
          
          <div className="hire-cta">
            <a href="#contact" className="hire-button">Say Hello</a>
          </div>
        </div>
      </div>
    </div>
  );
}