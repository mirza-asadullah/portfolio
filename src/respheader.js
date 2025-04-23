import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const RespHeader = () => {
  const home = () => {
    window.scrollTo({
      
      behavior: 'smooth',
    },1);}
    const about = () => {
      window.scrollTo({
        
        behavior: 'smooth',
      },500);}
      const skill = () => {
        window.scrollTo({
          
          behavior: 'smooth',
        },1050);}
        const project = () => {
          window.scrollTo({
            
            behavior: 'smooth',
          },2550);}
          const contact = () => {
            window.scrollTo({
              
              behavior: 'smooth',
            },3900);}
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if clicking outside of menu and menu icon
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
    <div className="rheader">
      <header className="rrheader">
        <div className="logo">
          <Link to="/" className="no-underline">
            <img src="logoo.png" alt="Logo" />
          </Link>
        </div>

        <div ref={menuIconRef} className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "icon open" : "icon"}></div>
        </div>

        <nav ref={menuRef} className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
          {/* Close Button Inside Menu */}
          {/* <div className="close-icon" onClick={closeMenu}>&times;</div> */}

          <div className="rhpages no-underline">
            <Link to="/" className="rhname" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="rhname" onClick={closeMenu}>
              About
            </Link>
            <Link to="/skills" className="rhname" onClick={closeMenu}>
              Skills
            </Link>
            <Link to="/projects" className="rhname" onClick={closeMenu}>
              Projects
            </Link>
            <Link to="/contact" className="rhname" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default RespHeader;
