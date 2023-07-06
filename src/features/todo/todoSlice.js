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
            state.todos= state.todos
        }
    }
})