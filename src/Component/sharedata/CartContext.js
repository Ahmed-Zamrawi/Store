import axios from "axios";
import { createContext, useState } from "react";


 export let CartContext = createContext(null)




 export function CartContextProvider(props){
    let  BaseUrl="https://route-ecommerce.onrender.com" 
    let [CartData,setCartData] = useState()

    
    async function getAllCartData(){
        let headers = {
            token:localStorage.getItem("token")
        }
        let {data} = await axios.get(`${BaseUrl}/api/v1/cart`,{headers})
        console.log(data);
        setCartData(data)
    }

    return <CartContext.Provider value={{CartData, getAllCartData}}>
        {props.children}
    </CartContext.Provider>
 }