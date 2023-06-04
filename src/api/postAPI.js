import axios from "axios";

// fetch all posts
export const fetchPosts = async()=>{
    try {
        const result= await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log("result =",result);
        return result;
    } catch (error) {
        console.log("error",error);
    }
}

// "username = "+ name + "email="+ email
// username=Ram email=ram@gmail.com

// `username = ${name} email = ${email}`
// username=ram email=ram@gmail.com

// fetch single post 
export const fetchSinglPost=async(id)=>{
    try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

 // post :   (URL,data,options)
export const createPost=async(data)=>{
    try {
        const result = await axios.post("https://jsonplaceholder.typicode.com/posts",data);
        console.log("result = ",result)
        return result;
    } catch (error) {
    console.log("error",error)       
    }
}