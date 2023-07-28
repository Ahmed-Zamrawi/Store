import React from 'react';
import slide1 from "../../../images/02-lestrange.webp";
import slide2 from "../../../images/FALL-WINTER-TRENDS.webp";
import slide3 from "../../../images/Screen_Shot_2018-05-23_at_09.11.29_1024x1024.webp";
import slide4 from "../../../images/photo-1611842642932-fbec0d723eb2.jpg";
import slide5 from "../../../images/tp-holiday-outfit-ideas-womens-fashion-1.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Mainslider() {
  return (
    <div className='row g-0 my-5'>
<div className='col-md-9'>
<OwlCarousel className='owl-theme' autoplay={true} autoplayTimeout={1500} loop items={1} >
    
    <img src={slide1} className='w-100' height={400} alt="" />
    <img src={slide2} className='w-100' height={400} alt="" />
    <img src={slide3} className='w-100' height={400} alt="" />
    <img src={slide4} className='w-100' height={400} alt="" />
    <img src={slide5} className='w-100' height={400} alt="" />
  
</OwlCarousel>;
</div>
<div className="col-md-3">
<img src={slide2} className='w-100' height={200} alt="" />
<img src={slide3} className='w-100' height={200} alt="" />

</div>
    </div>
  )
}
