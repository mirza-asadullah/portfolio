import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'
const SimpleSlider = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    showNavs:true,
 
};

  return (
    <div>
    <div style={{color:"rgb(34 211 238)"}} className='swidth'>
        
      
      <Slider {...settings} >
      <div>React Js Developer</div>
      <div>Next Js Developer</div>
      <div >Front End Developer</div>
      </Slider>
    
    </div>
    </div>
  );
};

export default SimpleSlider;