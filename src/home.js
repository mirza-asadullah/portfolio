import React from 'react';
import Header from './header';
import './home.css';
import SimpleSlider from './slider';
import About from './about';
import Skills from './skills';
import Footer from './footer';
import Contact from './contact';
import Hire from './hire';
import Projects from './projects';

export default function Home() {
  return (
    <div className="home-container">
    <div>  <Header /></div>
      
      <div className="wht">
        <a 
          href="https://wa.me/+923044140674" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Contact on WhatsApp"
        >
          <img 
            src="wht.webp" 
            alt="WhatsApp contact button" 
            className="rwht" 
          />
        </a>
      </div>
      
      <section className="hflex1">
        <div className="hdiv1">
          <div className="himg">
            <img 
              src="pic.png" 
              alt="Profile picture of Asad Ullah" 
              className="hpic" 
            />
          </div>
        </div>
        
        <div className="hdiv2">
          <h1 className="hh1">Hello!</h1>
          <h2 className="hh2">My Name is Asad Ullah</h2>
          
          <div className="hflex2">
            <div className="hh3">I am a&nbsp;</div>
            <div className="hh4">
              <SimpleSlider />
            </div>
          </div>
          
          <div className="rhbttn">
            <a 
              href="https://wa.me/+923044140674" 
              target="_blank" 
              rel="noreferrer" 
              className="hbtn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      <About />
      <Skills />
      <Hire />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}