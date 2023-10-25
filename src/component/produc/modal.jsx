import {useState} from 'react'
import axios from 'axios'
import {useDispatch} from "react-redux"
import { fetchProduct } from './producSlice'

export default function Modal({produc}) {
  let dispatch = useDispatch()
  let [ob,setob] = useState(produc)
  const handleForm = async(e)=>{
    e.preventDefault()
      // await axios.put(`http://localhost:5000/products/${ob.id}`,)
      console.log(ob)
      let res = await axios({
        method:'put',
        url:`http://localhost:5000/products/${ob.id}`,
        data:ob
    })
    console.log(res)
    dispatch(fetchProduct())
  }

  const handleInput=(e)=>{

    let newob = {
      ...ob,
      [e.target.name]:e.target.value
    }
      setob(newob)
  }

  return (
     <div className="modal fa" id={`id_${produc.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
          <form onSubmit={handleForm} method='post'>
              <input className="form-control form-control-lg" value={ob.pName} name="pName" type="text" placeholder="inter product name" aria-label=".form-control-lg example" onChange={handleInput}/>
              <input className="form-control form-control-lg mt-2" value={ob.price} name="price" type="number" placeholder="inter product price" aria-label=".form-control-lg example" onChange={handleInput}/>
              <input className="form-control form-control-lg mt-2" value={ob.title} name="title" type="text" placeholder="inter product title" aria-label=".form-control-lg example" onChange={handleInput}/>
              <input type="submit" className="bg-primary btn mt-3 " data-bs-dismiss="modal"/>
          </form>
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
        </div>
      </div>
    </div> 
  )
}
