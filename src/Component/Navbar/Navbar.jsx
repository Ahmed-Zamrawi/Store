import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/shop.avif'
import { CartContext } from '../sharedata/CartContext'

export default function Navbar({userData,logout}) {
  let {CartData} = useContext(CartContext)
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" ><img src={logo} height={70} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData!=null?
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
       <li className="nav-item">
         <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page" to={"home"}>Home</NavLink>
       </li>
       <li className="nav-item">
         <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page" to={"profile"}>Profile</NavLink>
       </li>
       <li className="nav-item">
         <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page" to={"profile"}>
         <div class="position-relative">
         <i className='fa-solid fa-cart-shopping'></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
    {CartData?.numOfCartItems }
    <span class="visually-hidden">unread messages</span>
  </span>
</div>
       </NavLink>
       </li>
       <li className="nav-item">
         <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page" to={"product"}>Product</NavLink>
       </li>
       <li className="nav-item">
         <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page" to={"category"}>category</NavLink>
       </li>
       
       
     </ul>:""
    }
     <ul className="navbar-nav ms-auto py-1">
     {userData !=null?
    
     
         <>
      <li>
      <i className='fa-brands fa-facebook mx-2 py-3'></i>
      <i className='fa-brands fa-twitter mx-2 py-3'></i>
      <i className='fa-brands fa-instagram mx-2 py-3'></i>
      <i className='fa-brands fa-spotify mx-2 py-3'></i>

      </li>
      
      <span className='nav-link logout' onClick={logout}>Logout</span></>:<>
      
      <li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page" to={"/"}>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page" to={"register"}>Register</NavLink>
        </li>
        </>
     
      
    }
     </ul>
     
       
      
    </div>
  </div>
</nav>
    </div>
  )
}
