import { useEffect, useState } from 'react';
import './App.css'
import {fetchWeatherData} from './api/weatherAPI'
import Navbar from './components/Navbar';
import Weather from './components/Weather';

const App = () => {  
  
  const [city,setCity]=useState("");
  const [data,setData]=useState({});
  const [theme,setTheme]=useState("light");

  useEffect(()=>{
    fetchWeatherData(city).then((res)=>{
      console.log("res data =",res);
      setData(res)
    })
  },[city])

  const toggleTheme=()=>{
    setTheme(theme==="light"?"dark":"light")
  }

  return (
    <div className={`app ${theme} `} >
      <Navbar setCity={setCity} theme={theme} toggleTheme={toggleTheme} />
      <Weather data={data} />
    </div>
  );
};

export default App;
