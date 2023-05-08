import {useState} from 'react'
import logo from './logo.svg';



import './App.css';

function App() {

  const [number,setNumber]=useState(0);

  // const handleClick=()=>{
  //   setNumber(number+1);
  // }
  return (
    <div className="App" >
      {
        console.log("number ==",number)
      }
      <h1 style={{fontSize:"52px"}}> {number} </h1>
      <button
       style={{fontSize:"20px",backgroundColor:"green",color:"white",padding:"5px",border:"0",borderRadius:"9px",cursor:"pointer"}}
       
       onClick={()=>{setNumber(number+1)}}
       >
        Increment</button>


    </div>
  );
}

export default App;
