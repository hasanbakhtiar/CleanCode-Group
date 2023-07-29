import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface Todo{
    id:string,
    title:string
}

const initialState:Todo[] = [];


const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        add:(state,action:PayloadAction<string>)=>{
            const newTodo = {id:crypto.randomUUID(),title:action.payload};
            state.push(newTodo);
            
        },
        del:(state,action:PayloadAction<string>)=>{
            return state.filter((todoData:any)=>(
                 todoData.id !== action.payload
            ))
        },
        removeAll:(state)=>{
            return state = [];
        }
    }
})


export default todoSlice.reducer;

export const {add,del,removeAll} = todoSlice.actions;