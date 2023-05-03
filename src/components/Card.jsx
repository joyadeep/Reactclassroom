import React,{useState} from 'react'

const Card = () => {
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1)
    }

  return (
    <div className='card'>
            <h1>{count}</h1>
            <div className='buttonContainer' >
                <button className='decrement' onClick={decrement} >decrement</button>
                <button className='increment' onClick={increment}>increment</button>
            </div>

    </div>
  )
}

export default Card