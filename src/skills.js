import React, { useState } from 'react';
import './skills.css';
import CircularProgressBar from './circle';

export default function Skills() {
  // Skill proficiency levels
  const skillsData = [
    { name: "HTML", value: 80 },
    { name: "CSS", value: 80 },
    { name: "REACT JS", value: 70 },
    { name: "JAVASCRIPT", value: 65 },
    { name: "MATERIAL UI", value: 70 },
    { name: "BOOTSTRAP", value: 65 },
    { name: "GITHUB", value: 80 },
    { name: "REDUX", value: 60 },
    { name: "API INTEGRATION", value: 70 }
  ];

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title">My <span className="skills-highlight">Skills</span></h2>
        <h3 className="skills-subtitle">My knowledge</h3>
      </div>
      
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="progress-bar-container">
              <CircularProgressBar value={skill.value} />
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}