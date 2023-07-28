import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'

export default function Register() {

  let [errMsg,setErrorMsg]= useState("");
  let [LoadingFlag,setloadingFlag]= useState(true);
  let navigate= useNavigate()

  let BaseUrl="https://route-ecommerce.onrender.com"
  let  validationSchema =Yup.object({
    name: Yup.string().required().min(3,"min character must be 3")
    .max(15,"max character must be 15"),
    email:Yup.string().required().email("enter valid email"),
    phone:Yup.string().required()
    .matches(/^((02)[0-9]{6}|(010|011|012|015)[0-9]{8})$/,"enter valid phone number"),
    password:Yup.string().required()
    .matches(/^[A-Z][a-zA-Z0-9!@#$%^&*(-_)]{3,16}$/,"first litter capital &{3,16}"),
    rePassword:Yup.string().required().oneOf([Yup.ref("password")])
  })
  
  let Form1 = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:"",
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

    let {data}= await axios.post(`${BaseUrl}/api/v1/auth/signup`,vals).catch((err)=>{console.log(err.response.data.message);
      setloadingFlag(true)
  setErrorMsg(err.response.data.message)
  console.log(data);

  })
if (data.message=="success"){
  navigate("/Login")
}
  }
  
  return (
    <div >
      <h2>Registration Now:</h2>
      <form onSubmit={Form1.handleSubmit}>
      <div>
     
          <label htmlFor='name' className='my-3'>name:</label>
          <input onChange={Form1.handleChange} className='form-control' name='name' id='name' type='text'></input>
          <p className='text-danger'>{Form1.errors.name}</p>
        
      </div>
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
      <div>
        
          <label htmlFor='rePassword' className='my-3'>repassword:</label>
          <input onChange={Form1.handleChange} className='form-control' name='rePassword' id='rePassword' type='password'></input>
          <p className='text-danger'>{Form1.errors.rePassword}</p>
      </div>
      <div>
        
          <label htmlFor='phone' className='my-3'>phone:</label>
          <input onChange={Form1.handleChange} className='form-control' name='phone' id='phone' type='text'></input>
          <p className='text-danger'>{Form1.errors.phone}</p>
      </div>
      {errMsg !=""?<div className="alert alert-danger">{errMsg}</div>:""}
      {/* <div className="alert alert-danger">{errMsg}</div> */}
     

        {LoadingFlag?<button disabled={!Form1.isValid} className='btn btn-success text-white my-2' >Register</button>:<button className='btn text-white btn-success'>
<i className='fa-solid fa-spinner fa-spin '></i>
      </button>
}


      </form>
    </div>
   
  )
}
