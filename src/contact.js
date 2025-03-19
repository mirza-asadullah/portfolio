import React from 'react'
import './about.css'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
export default function Contact() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[masg,setMasg]=useState("")

  const displayMsg = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMasg('');

    alert('Message not sent successfully!');
  };
  return (
    <div>
         <div className="cmain">
          <div  className="amain">
      <div className='ahead'>Contact <span style={{color:"rgb(8 145 178)"}}>Me</span></div>
      < div className='ahead1'>Get in touch</div>
      </div>
      <div className='cflex'>
        <div className='cflex1'>
          <form >
<div ><input className='cinput' type='text' placeholder='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}}/></div>
<div ><input className='cinput' type='email' placeholder='Your Email Address' value={email} onChange={(e)=>{setEmail(e.target.value)}}/></div>
<div ><textarea className='cinput' type='message' style={{height:"150px"}} placeholder='Your Message' value={masg} onChange={(e)=>{setMasg(e.target.value)}}/></div>
<div ><button type='submit'onClick={displayMsg} className='hbtn'>Send Message</button></div>
</form>
        </div>
        <div className='cflex2'>
          <div className='cfllex'>
            <div className='cicon'><MdEmail /></div> &nbsp;&nbsp;
            <a style={{textDecorationLine:"none"}}  href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZQFbhCqnnQwlDqBTrDjpjLRnwpCFRBtKHDjpjBnGWrwrfRwlGGHGRzFLCsCCjwlhhPmg' target='-blank'><div className='ctxt'>mirzasad78@gmail.com</div></a>
            </div>
            <div className='cfllex'>
            <div className='cicon'><IoCallSharp /></div> &nbsp;&nbsp;
            <a style={{textDecorationLine:"none"}}  href="tel:+923044140674" target='-blank'><div className='ctxt'>(+92)3044041674</div></a>
            </div>
            <div className='cfllex'>
            <div className='cicon'><FaLocationDot /></div> &nbsp;&nbsp;
            <a style={{textDecorationLine:"none"}}  href='https://maps.app.goo.gl/TuoECoYULQRxpnG58' target='-blank'><div className='ctxt'>Lahore Punjab Pakistan</div></a>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
