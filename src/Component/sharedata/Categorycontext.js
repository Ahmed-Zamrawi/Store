import axios from "axios";

import { createContext, useEffect, useState } from "react";

 export let Categorydata = createContext(null)

export function CategoryDataProvider(props){
    let BaseUrl="https://route-ecommerce.onrender.com"

let [categorylist,setCategory] =useState([])

   async function getallcategories(){
       let  {data} = await axios.get(`${BaseUrl}/api/v1/categories`)
       setCategory(data.data)
    }
    useEffect(()=>{
    getallcategories()},[])

   return <Categorydata.Provider value={{categorylist}}>
    {props.children}

    </Categorydata.Provider>
}