import axios from "axios";

export const getMovie=async(title)=>{
    try {
        const result=await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}`);
        return result;
    } catch (error) {
        console.log("error",error);
    }
}