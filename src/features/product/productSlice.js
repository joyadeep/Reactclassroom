import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    categories:[]
}

export const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        ADD_PRODUCT_LIST:(state,action)=>{
            state.products=action.payload
        },
        ADD_CATEGORY_LIST:(state,action)=>{
            state.categories=action.payload
        }
    }
})

export const {ADD_PRODUCT_LIST,ADD_CATEGORY_LIST}=productSlice.actions;
export default productSlice.reducer;