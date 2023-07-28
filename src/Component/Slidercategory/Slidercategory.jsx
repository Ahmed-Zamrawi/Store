import React, { useContext } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Categorydata } from '../sharedata/Categorycontext';



export default function Slidercategory() {
  let {categorylist} = useContext(Categorydata)

  return (
    <div>
      <OwlCarousel className='owl-theme' autoplay={true} autoplayTimeout={2000} items={7} loop>
      {categorylist.map((el,i)=>{
        return <div key={i}>
        
            <img src={el.image} height={200} className='w-100' alt="" />
           
        </div>
        })}
      </OwlCarousel>
    </div>
  )
}
