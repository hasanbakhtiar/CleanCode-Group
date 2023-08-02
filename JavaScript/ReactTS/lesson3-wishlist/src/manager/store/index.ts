import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "../features/wishSlice";


const store = configureStore({
    reducer:{
        wish:wishSlice
    }
})

export default store;