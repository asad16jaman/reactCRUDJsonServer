import React from 'react'
import axios from "axios"
import {useDispatch} from "react-redux"
import {fetchProduct} from "./producSlice"


export default function Form() {
    const dispatch = useDispatch()
   const handleForm = async (e)=>{
    e.preventDefault()
    let addData = {
        pName:e.target["name"].value,
        price:e.target["price"].value,
        title:e.target["title"].value || "it is default title"

    }
    console.log(addData.price)
    if(addData.pName==="" && addData.price==='' ){
      alert("please fill the name and price section")
        return false

    }
    await axios({
        method:'POST',
        url:'http://localhost:5000/products',
        data:addData
    })
    dispatch(fetchProduct())
    e.target.reset()

    
}


  return (
    <form onSubmit={handleForm} method='post'>
        <input className="form-control form-control-lg" name="name" type="text" placeholder="inter product name" aria-label=".form-control-lg example"/>
        <input className="form-control form-control-lg mt-2" name="price" type="number" placeholder="inter product price" aria-label=".form-control-lg example"/>
        <input className="form-control form-control-lg mt-2" name="title" type="text" placeholder="inter product title" aria-label=".form-control-lg example"/>
        <input type="submit" className="bg-primary btn mt-3 " />
    </form>
  )
}
