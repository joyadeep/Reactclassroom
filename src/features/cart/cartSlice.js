import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[],
    count:0,
    total:0
}

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        ADD_ITEM:(state,action)=>{
            state.cart.push(action.payload);
            state.count+=1;
        },
        REMOVE_ITEM:(state,action)=>{
            state.count-=1
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
        }

    }
})

export const calculateTotalPrice = (state) => {
    return state.cart.cart.reduce((total, item) => total + item.price, 0);
  };


export const {ADD_ITEM,REMOVE_ITEM}=cartSlice.actions;
export default cartSlice.reducer