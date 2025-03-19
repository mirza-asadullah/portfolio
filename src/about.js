import React from 'react'
import './about.css'
import Clintcounter from './counter'
export default function About() {
  return (
    <div style={{backgroundColor:"rgb(17 24 39)"}}>
      <div className='amain'>
      <div className='ahead'>About <span style={{color:"rgb(8 145 178)"}}>Me</span></div>
      < div className='ahead1'>My introduction</div>
      </div>
      <div  className='aflex'>
        <div  className='aflex1'>
          <div className='adics'>Hello, I'm Asad Ullah, a proficient Computer Science graduate with 2 years of professional expertise, specializes in crafting cutting-edge frontend applications. Leveraging advanced technologies, particularly React and Next.js, I excel in developing dynamic web solutions and seamlessly integrating APIs to deliver optimal user experiences.</div>
          <div><Clintcounter/></div>
          <div className='abtnn' > <a
        href="/Asadullah-Resume.pdf" 
        download="Asadullah-Resume.pdf" 
      ><button className='abtn'>Download Resume</button></a></div>
          </div>
          <div className='aflex2'>
          <div className='aflex3'>
          <div className="profile-card">
      <img
        src="about.jpeg" 
       alt="A beautiful sunset over the mountains"
        className="profile-image"
      />
    </div>
    </div>
          </div>
      </div>
    </div>
  )
}
