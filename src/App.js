import React,{useState} from 'react'
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,incrementByAmount} from './features/counter/counterSlice'
function App() {

  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  const [number,setNumber]=useState();

  return (
    <div className="App" >
        <h1>{count}</h1>

        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <input type="number" name="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={()=>dispatch(incrementByAmount(number))} >Add</button>
    </div>
  );
}

export default App;
