import React from 'react';
import './about.css';
import './projects.css';

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="cmain">
        <div className="pmain">
          <div className="ahead">My <span className="highlight">Projects</span></div>
          <div className="ahead1">My awesome works</div>
        </div>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <a href="https://www.thevapehouse.pk/" target="_blank" rel="noopener noreferrer">
                <img src="vape.png" alt="VapeHouse E-Commerce website" />
              </a>
            </div>
            <div className="project-info">
              <div className="project-title">VapeHouse E-Commerce</div>
              <div className="project-links">
                <a href="https://github.com/asad-ullah2723" target="_blank" rel="noopener noreferrer" className="project-btn">Github</a>
                <a href="https://www.thevapehouse.pk/" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <a href="https://muzz.com/en-US/" target="_blank" rel="noopener noreferrer">
                <img src="muzz (1).png" alt="Muzz Website" />
              </a>
            </div>
            <div className="project-info">
              <div className="project-title">Muzz Website</div>
              <div className="project-links">
                <a href="https://github.com/asad-ullah2723" target="_blank" rel="noopener noreferrer" className="project-btn">Github</a>
                <a href="https://muzz.com/en-US/" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <a href="https://www.intagleo.com/" target="_blank" rel="noopener noreferrer">
                <img src="muzz (2).png" alt="Official Company Profile" />
              </a>
            </div>
            <div className="project-info">
              <div className="project-title">Official Company Profile</div>
              <div className="project-links">
                <a href="https://github.com/asad-ullah2723" target="_blank" rel="noopener noreferrer" className="project-btn">Github</a>
                <a href="https://www.intagleo.com/" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-image">
              <a href="https://www.idealancy.pk/" target="_blank" rel="noopener noreferrer">
                <img src="muzz (3).png" alt="Multimart E-Commerce" />
              </a>
            </div>
            <div className="project-info">
              <div className="project-title">Multimart E-Commerce</div>
              <div className="project-links">
                <a href="https://github.com/asad-ullah2723" target="_blank" rel="noopener noreferrer" className="project-btn">Github</a>
                <a href="https://www.idealancy.pk/" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <div className="project-image">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="muzz (5).png" alt="Developer Portfolio" />
              </a>
            </div>
            <div className="project-info">
              <div className="project-title">Developer Portfolio</div>
              <div className="project-links">
                <a href="https://github.com/asad-ullah2723" target="_blank" rel="noopener noreferrer" className="project-btn">Github</a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card">
            <div className="project-image">
              <a href="https://www.dinproperties.com.pk/" target="_blank" rel="noopener noreferrer">
                <img src="muzz (4).png" alt="Real Estate Property" />
              </a>
            </div>
            <div className="project-info">
              <div className="project-title">Real Estate Property</div>
              <div className="project-links">
                <a href="https://github.com/asad-ullah2723" target="_blank" rel="noopener noreferrer" className="project-btn">Github</a>
                <a href="https://www.dinproperties.com.pk/" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Project 7 */}
          <div className="project-card">
            <div className="project-image">
              <a href="http://phf.softvalley.com.pk/" target="_blank" rel="noopener noreferrer">
                <img src="muzz (7).png" alt="Showcase Website" />
              </a>
            </div>
            <div className="project-info">
              <div className="project-title">Showcase Website</div>
              <div className="project-links">
                <a href="https://github.com/asad-ullah2723" target="_blank" rel="noopener noreferrer" className="project-btn">Github</a>
                <a href="http://phf.softvalley.com.pk/" target="_blank" rel="noopener noreferrer" className="project-btn">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}