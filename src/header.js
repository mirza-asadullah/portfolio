import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
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
  return (
    <div className='hcontainer'>
      <div className='hmain'>
      <div className='hlogo'><Link to='/'   onClick={home} className="no-underline" style={{textDecoration:"none",color: 'inherit' }}><img src='logooo.png' alt="A beautiful sunset over the mountains" className='hlogoo'/></Link></div>
      <div className='hpages'>  
        <Link to='/'   onClick={home} className="no-underline" style={{textDecoration:"none",color: 'inherit' }}><div className='hname'>HOME</div></Link>
      <Link to='/about'  onClick={about} className="no-underline" style={{textDecoration:"none",color: 'inherit' }}> <div className='hname'>ABOUT</div></Link>
      <Link to='/skills'  onClick={skill} className="no-underline" style={{textDecoration:"none",color: 'inherit' }}> <div  className='hname' >SKILLS</div></Link>
      <Link to='/projects'   onClick={project} className="no-underline" style={{textDecoration:"none",color: 'inherit' }}> <div className='hname'>PROJECTS</div></Link>
      <Link to='/contact'   onClick={contact} className="no-underline" style={{textDecoration:"none",color: 'inherit' }}> <div className='hname'>CONTACT</div></Link>
        </div>       
      </div>
      </div>
  )
}
