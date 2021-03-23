import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import productReducer from './features/productsSlice'

const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer
    }
})

export default store