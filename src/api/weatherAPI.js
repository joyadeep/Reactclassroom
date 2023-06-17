import axios from "axios";

export const fetchWeatherData=async(city_name)=>{
    try {
        const result= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        return result;
    } catch (error) {
        console.log("error",error);
    }
}