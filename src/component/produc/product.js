
import axios  from 'axios'
import {useDispatch} from "react-redux"
import { fetchProduct } from './producSlice'
import Modal from "./modal"


export default function Product({produc}) {


    const dispatch = useDispatch()
    const deleteHandle = async(id)=>{
        await axios.delete(`http://localhost:5000/products/${id}`)
        dispatch(fetchProduct())
    }

  return (
    <div className='col-md-4 mt-4'>
        <div className='bg-success p-3 rounded'>
            <h1>{produc.pName}</h1>
            <h5>{produc.title}</h5>
            <span>price: {produc.price}</span>
            <div className='d-flex justify-content-end'>
            <button type="button" className="btn btn-primary mx-3" data-bs-toggle="modal" data-bs-target={`#id_${produc.id}`}>
               edit
            </button>
                <button className='btn btn-danger' onClick={deleteHandle.bind(this,produc.id)}>delete</button>
            </div>
        </div>
        <Modal produc={produc} />
    </div>
   
  )
}
 