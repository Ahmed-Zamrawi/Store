import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import $ from 'jquery'
import Product from './Product';

export default function Productdetails() {

    let navigate = useNavigate()

    let BaseUrl="https://route-ecommerce.onrender.com"
let [productDetails,setproductDetails]=useState(undefined)

let{id}=useParams()
console.log(id);

useEffect(()=>{

    getDetails()

},[])

async function getDetails(){

    let {data}=await axios.get(`${BaseUrl}/api/v1/products/${id}`)
    setproductDetails(data.data)
    console.log(data.data);
}

function Imagechange(e){
    let imgPathh= e.target.getAttribute('src')
    $("#imagecover").attr("src",imgPathh)
}

async function additemcart(id){

    let body ={ productId : id}
let {data} = await axios.post(`${BaseUrl}/api/v1/cart`,body,{
    headers:{
        token: localStorage.getItem("token"),
    
    }
  
})
if (data.status == "success"){
  navigate("/cartdetails")
}
console.log(body);
}
  return (

    <div>
        {productDetails != undefined ?
        <div className='row '>
            <div className='col-md-4'>
            <img src={productDetails.imageCover} id='imagecover' className='w-100' alt="" />
           <div className='row'>
                {productDetails.images.map((el)=>{
                return <img src={el} onClick={Imagechange}  className='col-md-3 ' alt="" />

            
                }
                
                )}
                
                </div>
            </div>
            <div className="col-md-8 ">
                <div >
                <h2>{productDetails.title}</h2>
                <p className='text-muted'>{productDetails.description}</p>
                <span className='text-success'>{productDetails.subcategory[0].slug}</span>
                <div className='d-flex justify-content-between'>
            <p>{productDetails.price}EGP</p>
            <div>
            <i className='fa-solid fa-star text-warning'></i>{productDetails.ratingsAverage}
            </div>
            
            </div>
            <button onClick={()=>additemcart(productDetails._id)} className='btn btn-success w-100'>+ Add to Cart</button>
            </div>
            </div>
        </div>

:""}
    </div>
  )
}
