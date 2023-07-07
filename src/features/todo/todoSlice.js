import {createSlice} from '@reduxjs/toolkit';

const initialState=({
    todos:[]
})

export const todoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        ADD_TODO:(state,action)=>{
            const newTodo={
                id:Date.now(),
                todo:action.payload,
                isCompleted:false
            }
            state.todos.push(newTodo)
        },
        DELETE_TODO:(state,action)=>{
            state.todos= state.todos.filter((todo)=>todo.id !== action.payload) 
         },
        TOGGLE_TODO:(state,action)=>{
            const todo=state.todos.find((todo)=>todo.id === action.payload);

            if (todo){
                todo.isCompleted= !todo.isCompleted
            }
        }
    }
})


export const {ADD_TODO,DELETE_TODO,TOGGLE_TODO}=todoSlice.actions;
export default todoSlice.reducer;