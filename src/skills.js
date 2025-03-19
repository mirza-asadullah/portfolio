import React, { useState } from 'react'
import './skills.css'
import CircularProgressBar from './circle';
export default function Skills() {
  const [progress] = useState(80); 
  const [js] = useState(70); 
  const [red] = useState(65); 
   const [prom] = useState(60); 

  return (
    <div>
     <div style={{backgroundColor:"rgb(17 24 39)"}}>
      <div className='amain'>
      <div className='shead'>My <span style={{color:"rgb(8 145 178)"}}>Skills</span></div>
      < div className='ahead1'>My knowledge</div>
      </div>
      <div  className='sflex'>
      <div  className='sdiv'>
        <div  style={{textAlign:"center", marginLeft:"0px"}}>
      <CircularProgressBar value={progress} />
      </div>
        <div className='sdiv3'>HTML</div>
      </div>
      <div  className='sdiv'>
        <div  style={{textAlign:"center", marginLeft:"0px"}}>
      <CircularProgressBar value={progress} />
      </div>
        <div className='sdiv3'>CSS</div>
      </div>
      <div  className='sdiv'>
        <div  style={{textAlign:"center", marginLeft:"0px"}}>
      <CircularProgressBar value={js} />
      </div>
        <div className='sdiv3'>React JS</div>
      </div>
      <div  className='sdiv'>
        <div  style={{textAlign:"center", marginLeft:"0px"}}>
      <CircularProgressBar value={red} />
      </div>
        <div className='sdiv3'>JAVASCRIPT</div>
      </div>
      <div  className='sdiv'>
        <div  style={{textAlign:"center", marginLeft:"0px"}}>
      <CircularProgressBar value={js} />
      </div>
        <div className='sdiv3'>MATERIAL UI</div>
      </div>
      <div  className='sdiv'>
        <div  style={{textAlign:"center", marginLeft:"0px"}}>
      <CircularProgressBar value={red} />
      </div>
        <div className='sdiv3'>BOOTSTRAP</div>
      </div>
      <div  className='sdiv'>
        <div  style={{textAlign:"center", marginLeft:"0px"}}>
      <CircularProgressBar value={progress} />
      </div>
        <div className='sdiv3'>GITHUB</div>
      </div>
      <div  className='sdiv'>
        <div  style={{textAlign:"center", marginLeft:"0px"}}>
      <CircularProgressBar value={prom} />
      </div>
        <div className='sdiv3'>REDUX</div>
      </div>
      <div  className='sdiv'>
        <div  style={{textAlign:"center", marginLeft:"0px"}}>
      <CircularProgressBar value={js} />
      </div>
        <div className='sdiv3'>API INTIGRATION</div>
      </div>
      </div>
      </div>
    </div>
  )
}
