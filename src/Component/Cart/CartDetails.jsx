import React, { useContext, useEffect } from 'react'
import { CartContext, } from '../sharedata/CartContext'

export default function CartDetails() {

  let {getAllCartData,CartData}= useContext(CartContext)

  useEffect(()=>{getAllCartData()
  },[])


  return (

   
    <div>
        {CartData ? <table style={{verticalAlign:"middle"}} className='table table-striped table-bordered my-3 text-center'>
  <thead>
    <tr>
      <th>Image</th>
      <th>name</th>
      <th>quantity</th>
      <th>price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {CartData.data.products.map((el)=>{
    return    <tr>
    <td>
      <img src={el.product.imageCover} className='w-75'height={100} alt="" />
    </td>
    <td>
      {el.product.title}
    </td>
    <td>
      <button className='btn btn-danger btn-sm rounded'>-</button>
      <span className='mx-3'>{el.count}</span>
      <button className='btn btn-success btn-sm rounded'>+</button>
    </td>
    <td>{el.price}EGP</td>
    <td>
      <i className='fa-solid fa-trash text-danger'></i>
    </td>
  </tr>
  })}
 
    
  </tbody>
  <tbody>
    
       <tr className='bg-danger'>
      <td colSpan={4} >Total</td>
      <td>{CartData.data.totalCartPrice}EGP</td>
    </tr>
   
  
  </tbody>
</table>: ""}

    </div>
  )
}
