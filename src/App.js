import React, { useEffect, useState } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Login from './Component/Login/Login';
import Profile from './Component/Profile/Profile';
import Product from './Component/Product/Product';
import Register from './Component/Register/Register';
import Notfound from './Component/Notfound/Notfound';
import jwt_decode from "jwt-decode";
import Productdetails from './Component/Product/Productdetails';
import Category from './Component/Category/Category';
import { CategoryDataProvider } from './Component/sharedata/Categorycontext';
import CartDetails from './Component/Cart/CartDetails';
import { CartContextProvider } from './Component/sharedata/CartContext';


export default function App() {

  let [userData,setUserData]=useState(null)
  function saveUser(data){
    setUserData(data)
  }

  useEffect(()=>{

    if(localStorage.getItem("token")){
      let token = localStorage.getItem("token")
      let data=jwt_decode(token)
      console.log(data)
    }
  })

 

  function logout(){
    setUserData(null)
    localStorage.removeItem("token")
    return <Navigate to="/"/>

  }
  function ProtectRouting(props){
    console.log(props.children)
    if(localStorage.getItem("token")){
      return props.children
    }else{
      return <Navigate to="/"/>
    }
  }

  let routes= createBrowserRouter([
    {path:"",element:<Layout userData={userData} logout={logout}/>, children:[
      {path:"home",element:<ProtectRouting> <Home /></ProtectRouting> },
      {path:"category",element:<ProtectRouting> <Category /></ProtectRouting> },
      {path:"cartdetails",element:<ProtectRouting> <CartDetails /></ProtectRouting> },
      {path:"productdetails/:id",element:<ProtectRouting> <Productdetails /></ProtectRouting> },

      {path:"/",element:<Login saveUser={saveUser}/>},
      {path:"navbar",element:<Navbar/>},
      {path:"product",element:<ProtectRouting><Product/></ProtectRouting>},
      {path:"profile",element:<ProtectRouting><Profile userData={userData}/></ProtectRouting>},
      {path:"register",element:<Register/>},
      {path:"*",element:<Notfound/>},
    ]}
  ])
  return (
   <CategoryDataProvider>
    <CartContextProvider>
    <RouterProvider router={routes}/>
    </CartContextProvider>
   </CategoryDataProvider>
  )
}
