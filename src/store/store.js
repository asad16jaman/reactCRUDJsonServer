import {configureStore} from "@reduxjs/toolkit"
import ProductStore from "../component/produc/producSlice"


let Store = configureStore({
    reducer: {
        productData: ProductStore
    }
})


export default Store