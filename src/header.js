import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll functions for each section with specific positions
  const scrollToHome = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
  };

  const scrollToAbout = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: window.innerWidth <= 767 ? 500 : 950, // Adjust for mobile vs desktop
      behavior: 'smooth'
    });
    closeMenu();
  };

  const scrollToSkills = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: window.innerWidth <= 767 ? 1850 : 1800,
      behavior: 'smooth'
    });
    closeMenu();
  };

  const scrollToProjects = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: window.innerWidth <= 767 ? 3500 : 3400,
      behavior: 'smooth'
    });
    closeMenu();
  };

  const scrollToContact = (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: window.innerWidth <= 767 ? 4700 : 4650,
      behavior: 'smooth'
    });
    closeMenu();
  };

  // Handle scroll events to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Header */}
      <div className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-main">
          <div className="header-logo">
            <Link to="/" onClick={scrollToHome} className="no-underline">
              <img src="logooo.png" alt="Logo" className="logo-image" />
            </Link>
          </div>
          <div className="header-nav">
            <Link to="/" onClick={scrollToHome} className="nav-item">HOME</Link>
            <Link to="/about" onClick={scrollToAbout} className="nav-item">ABOUT</Link>
            <Link to="/skills" onClick={scrollToSkills} className="nav-item">SKILLS</Link>
            <Link to="/projects" onClick={scrollToProjects} className="nav-item">PROJECTS</Link>
            <Link to="/contact" onClick={scrollToContact} className="nav-item">CONTACT</Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="mobile-header-inner">
          <div className="mobile-logo">
            <Link to="/" onClick={scrollToHome} className="no-underline">
              <img src="logoo.png" alt="Logo phone" className="mobile-logo-image" />
            </Link>
          </div>

          <div ref={menuIconRef} className="mobile-menu-icon" onClick={toggleMenu}>
            <div className={isMenuOpen ? "icon open" : "icon"}></div>
          </div>
        </div>

        <nav 
          ref={menuRef} 
          className={`mobile-nav-menu ${isMenuOpen ? 'open' : ''}`}
          style={{ maxHeight: isMenuOpen ? '100vh' : '0' }}
        >
          <div className="mobile-nav-items">
            <Link to="/" className="mobile-nav-item" onClick={scrollToHome}>
              HOME
            </Link>
            <Link to="/about" className="mobile-nav-item" onClick={scrollToAbout}>
              ABOUT
            </Link>
            <Link to="/skills" className="mobile-nav-item" onClick={scrollToSkills}>
              SKILLS
            </Link>
            <Link to="/projects" className="mobile-nav-item" onClick={scrollToProjects}>
              PROJECTS
            </Link>
            <Link to="/contact" className="mobile-nav-item" onClick={scrollToContact}>
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}