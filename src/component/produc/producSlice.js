import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


let fetchProduct = createAsyncThunk("products/fetchProduct",async()=>{
    let response = await axios.get("http://localhost:5000/products")
    return response.data
})

let productSlice = createSlice({
    name:"products",
    initialState:{
        data:[],
        count : 1001
    },
    reducers:{
        //i will work hare letter
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.data = action.payload
        })
    }

});
export {fetchProduct}
export default productSlice.reducer