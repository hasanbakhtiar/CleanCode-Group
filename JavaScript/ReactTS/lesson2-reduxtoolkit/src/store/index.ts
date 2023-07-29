import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../feature/todoSlice";

const store = configureStore({
    reducer:{
        todos:todoSlice
    }
})

export default store;