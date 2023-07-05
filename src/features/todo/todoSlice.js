import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todo:[]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        ADD_TODO:(state,action)=>{
            const newTodo={
                id:Date.now(),
                todo:action.payload,
                isCompleted:false
            }
            state.todo.push(newTodo)
        },
        DELETE_TODO:(state,action)=>{
            state.todo= state.todo.filter((item)=>item.id !== action.payload)
        },
        TOGGLE_TODO:(state,action)=>{
            const todo=state.todo.find((todo)=>todo.id  === action.payload);
            if(todo){
                todo.isCompleted= !todo.isCompleted
            }
        }
    }
}) 

export const {ADD_TODO,DELETE_TODO,TOGGLE_TODO}=todoSlice.actions;
export default todoSlice.reducer;