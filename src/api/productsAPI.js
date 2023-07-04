import axios from 'axios';

export const getProducts=async()=>{
    try {
        const result=await axios.get("https://fakestoreapi.com/products")
        return result; 
    } catch (error) {
        console.log("error",error);
    }
}

export const getAllCategories=async()=>{
    try {
        const result=await axios.get("https://fakestoreapi.com/products/categories");
        return result;
    } catch (error) {
        console.log("error",error)        
    }
}

export const getProductByCategory=async(category)=>{
    try {
        const result=await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

export const getProductByID=async(id)=>{
    try {
        const result=await axios.get(`https://fakestoreapi.com/products/${id}`);
        return result;        
    } catch (error) {
        console.log("error",error);
    }
}