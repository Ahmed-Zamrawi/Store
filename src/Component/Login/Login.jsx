import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

export default function Login({saveUser}) {
 

  let [errMsg,setErrorMsg]= useState("");
  let [loadingFlag,setloadingFlag]= useState(true);
  let navigate= useNavigate()

  let BaseUrl="https://route-ecommerce.onrender.com"
  let  validationSchema =Yup.object({
    email:Yup.string().required().email("enter valid email"),
    
    password:Yup.string().required()
    .matches(/^[A-Z][a-zA-Z0-9!@#$%^&*(-_)]{3,16}$/,"first litter capital &{3,16}"),
    
  })
  
  let Form1 = useFormik({
    initialValues:{
      email:"",
      password:"",
      
    }
    ,
    onSubmit:(valus)=>{
      sendRegisterApi(valus)
      console.log(valus)
    },
    
    validationSchema
  })
  async function sendRegisterApi(vals){
    setloadingFlag(false)
    let {data}= await axios.post(`${BaseUrl}/api/v1/auth/signin`,vals).catch((err)=>{console.log(err.response.data.message);
      setErrorMsg(err.response.data.message)
      setloadingFlag(true)
  })
if (data.message=="success"){
  navigate("home")
  setloadingFlag(true)
  saveUser(data.user)
  localStorage.setItem("token",data.token)
}
console.log(data)
  }
  
  return (
    <div >
      <h2>Login:</h2>
      <form onSubmit={Form1.handleSubmit}>
      
      <div>
        
          <label htmlFor='email' className='my-3'>email:</label>
          <input onChange={Form1.handleChange} className='form-control' name='email' id='name' type='email'></input>
          <p className='text-danger'>{Form1.errors.email}</p>
      </div>
      <div>
        
          <label htmlFor='password' className='my-3'>password:</label>
          <input onChange={Form1.handleChange} className='form-control' name='password' id='password' type='password'></input>
          <p className='text-danger'>{Form1.errors.password}</p>
      </div>
     


{errMsg !=""?<div className="alert alert-danger">{errMsg}</div>:""}
      
      {loadingFlag?<button  className='btn btn-success text-white my-2' >Login</button>:<button className='btn text-white btn-success'>
<i className='fa-solid fa-spinner fa-spin '></i>
      </button>}

      
      </form>
    </div>
   
  )
}
