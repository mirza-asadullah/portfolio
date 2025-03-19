import React from 'react'
import Header from './header'
import './home.css'
import SimpleSlider from './slider'
import About from './about'
import Skills from './skills'
import Footer from './footer'
import Contact from './contact';
import Hire from './hire'
import Projects from './projects'
import RespHeader from './respheader'
export default function Home() {
  return (
    <div>
    <div>

    <Header/>
    <RespHeader/>
    <div className='wht'><a href='https://wa.me/+923044040674' target='_blank'  rel="noreferrer"><img src='wht.webp'alt="A beautiful sunset over the mountains" className='rwht'/></a></div>
    <div className='hflex1'>
      <div className='hdiv1'>
        <div className='himg'><img src='pic.png' alt="A beautiful sunset over the mountains" className='hpic' /></div>
        </div>
        <div  className='hdiv2'>
            <div  className='hh1'>Hello!</div>
            <div  className='hh2'>My Name is Asad Ullah</div>
            <div  className='hflex2'>
            
                <div  className='hh3' >I am a&nbsp;</div>
                <div  className='hh4'><SimpleSlider/></div></div>
                <div className='rhbttn' ><button className='hbtn'><a  href='https://wa.me/+923044040674' target='_blank'  rel="noreferrer" style={{textDecoration:"none",color: 'white' }}>Contect Me</a></button></div>
     </div>
    </div>
    </div>
    <About/>
    <Skills/>
    <Hire/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </div>
  )
}
