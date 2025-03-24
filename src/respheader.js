import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const RespHeader = () => {
  const scrollToSection = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="rheader">
      <header className="rrheader">
        <div className="logo">
          <Link to="/" className="no-underline">
            <img src="logoo.png" alt="Logo" />
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "icon open" : "icon"}></div>
        </div>

        <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
          <div className="rhpages no-underline">
            <Link to="/" className="rhname" onClick={() => { scrollToSection(1); closeMenu(); }}>
              Home
            </Link>
            <Link to="/about" className="rhname" onClick={() => { scrollToSection(500); closeMenu(); }}>
              About
            </Link>
            <Link to="/skills" className="rhname" onClick={() => { scrollToSection(1050); closeMenu(); }}>
              Skills
            </Link>
            <Link to="/projects" className="rhname" onClick={() => { scrollToSection(2550); closeMenu(); }}>
              Projects
            </Link>
            <Link to="/contact" className="rhname" onClick={() => { scrollToSection(3900); closeMenu(); }}>
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default RespHeader;
