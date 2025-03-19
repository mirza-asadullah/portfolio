import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
const RespHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='rheader'>
    <header className="rrheader">
      
      <div className="logo">
      <Link to='/' className="no-underline" style={{textDecoration:"none",color: 'inherit' }}> <img src='logoo.png' alt="A beautiful sunset over the mountains"/></Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isMenuOpen ? 'icon open' : 'icon'}></div>
      </div>
     
      <nav className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
      <div className='rhpages'>
      <Link to='/' className="no-underline" style={{textDecoration:"none",color: 'inherit' }}><div className='rhname'>Home</div></Link>
      <Link to='/about' className="no-underline" style={{textDecoration:"none",color: 'inherit' }}> <div className='rhname'>About</div></Link>
      <Link to='/skills' className="no-underline" style={{textDecoration:"none",color: 'inherit' }}><div className='rhname'>Skills</div></Link>
      <Link to='/projects' className="no-underline" style={{textDecoration:"none",color: 'inherit' }}><div className='rhname'>Projects</div></Link>
      <Link to='/contact' className="no-underline" style={{textDecoration:"none",color: 'inherit' }}><div className='rhname'>Contact</div></Link>
        </div>
      </nav>
    </header>
    </div>
  );
};

export default RespHeader;