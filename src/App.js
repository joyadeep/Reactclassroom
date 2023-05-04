import {useState} from 'react'
import logo from './logo.svg';
import Counter from './pages/Counter';


import './App.css';

function App() {
const [data,setData]=useState({name:"",email:""})

const handleChange=(e)=>{
  console.log("event name=",e.target.name)
  console.log("event value = ",e.target.value)
  console.log("---data ==",...data)
  setData({...data,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("data ==",data)
}
  return (
    <div className="App" >
      {/* <Counter/> */}
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={data.name} onChange={handleChange} />
          <input type="email" name="email" value={data.email} onChange={handleChange} />
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
