import {useSelector,useDispatch} from "react-redux"
import { fetchProduct } from "./producSlice"
import { useEffect } from "react"
import Form from "./form"
import Product from "./product"


export default function ProductView() {

    let {data} = useSelector(state=> state.productData)

    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct())
    },[dispatch])


  return (
    <div className="container">
        <div className="row mt-5 mb-5">
            <div className=" col-sm-12 col-md-6 offset-md-3">
               <Form />
            </div>
        </div>
        <div className="row">
            {data.map((ele,ind)=>{
                    return <Product key={ind} produc={ele} />
            })}
        </div>
        
    </div>
  )
}
