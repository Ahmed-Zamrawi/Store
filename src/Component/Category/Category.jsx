import React, { useContext } from 'react'
import { Categorydata } from '../sharedata/Categorycontext'

export default function Category() {
    let {categorylist} = useContext(Categorydata)
  return (
    <div>
    <div className="row">
        {categorylist.map((el,i)=>{
        return <div key={i} className="col-md-2">
        <div className="border">
            <img src={el.image} height={200} className='w-100' alt="" />
            <h6>{el.name}:</h6>
        </div>
    </div>
        })}
    </div>
    </div>
  )
}
