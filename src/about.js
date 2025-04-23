import React from 'react';
import './about.css';
import Clintcounter from './counter';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About <span className="highlight">Me</span></h1>
        <h2 className="about-subtitle">My introduction</h2>
      </div>
      
      <div className="about-content">
        <div className="about-info">
          <p className="about-description">
            Hello, I'm Asad Ullah, a proficient Computer Science graduate with 3 years of 
            professional expertise as Full Stack Developer, specializes in crafting cutting-edge 
            frontend applications. Leveraging advanced technologies, particularly React and Next.js, 
            I excel in developing dynamic web solutions and seamlessly integrating APIs to deliver 
            optimal user experiences.
          </p>
          
          <div className="counter-container">
            <Clintcounter />
          </div>
          
          <div className="resume-button">
            <a href="/Asadullah-Resume.pdf" download="Asadullah-Resume.pdf">
              <button className="download-btn">Download Resume</button>
            </a>
          </div>
        </div>
        
        <div className="about-image-container">
          <div className="profile-card">
            <img
              src="about.jpeg"
              alt="Asad Ullah profile picture"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}