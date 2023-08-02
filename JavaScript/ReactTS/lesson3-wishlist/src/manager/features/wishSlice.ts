import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { wishType } from "../../types/wish";



const wishState:wishType[] = []; 

const wishSlice = createSlice({
    name: "wishlist",
    initialState: wishState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            const newWish:any = action.payload;
            state.push(newWish);
        },
        remove:(state, action: PayloadAction<string>)=>{
            return state.filter((wishData:any)=>(
                wishData.id !== action.payload
            ))
        }
    }
})

export default wishSlice.reducer;

export const {add,remove} = wishSlice.actions;