import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Mainslider from './Mainslider/Mainslider'
import Slidercategory from '../Slidercategory/Slidercategory'

export default function Home() {
 
  let BaseUrl="https://route-ecommerce.onrender.com"

let[productList,setProducts]=useState([])

useEffect(()=>{getAllProducts()},[])

 async function getAllProducts(){
  let {data}= await axios.get(`${BaseUrl}/api/v1/products`)
  console.log(data.data);
  setProducts(data.data)
  $(".loading").fadeOut(2500)
 }

 return(
    <div className='position-relative'>
      
      <div className='position-fixed bg-info loading justify-content-center align-items-center top-0 bottom-0 end-0 start-0 '>
          <i className='fa-solid fa-spinner fa-spin fa-4x'> </i>
      </div>
      <Mainslider/>
      <Slidercategory/>
     <div className="row g-3">
      {productList.map((product)=>{
        return  <div key={product._id}  className="col-md-2 productitem">
          <Link  to={"/productdetails/"+product._id}>
        <div className='product border'>
          <img className='w-100' src={product.imageCover} alt="" />
          <span className='text-success'>{product.category.name}</span>
          <h2 className='h6 fw-bold'>{product.title.split(" ").slice(0,2).join(" ")}</h2>
          <div className='d-flex justify-content-between'>
            <p>{product.price}EGP</p>
            <div>
            <i className='fa-solid fa-star text-warning'></i>{product.ratingsAverage}
          </div>
          </div>
         
        </div>
        </Link>
      </div>
      
      })}
       
     </div>
    </div>
  

)
}