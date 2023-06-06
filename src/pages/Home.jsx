import React,{useReducer, useState} from 'react'

const initialState = 0

const reducer=(state,action)=>{  //action => type : action name , payload : some data
  switch(action.type){
    case 'increment' :
      return state + 1
    
      case 'decrement' :
        return state - 1
      
      case 'add' :
        return state + parseInt(action.payload) ;  // '100' -> 100  id , object , array ,string

    default :
      return new Error();
  }
}

const Home = () => {
  //        0                                    0                                       
  const [state,dispatch]=useReducer(reducer,initialState)

  const [number,setNumber]=useState(0);
  
  return (
    <div style={{textAlign:'center'}} >
      <h1>{state}</h1>
      
      <button
      onClick={()=>dispatch({type:'increment'})}
      >
        Increment</button>

      <button
      onClick={()=>dispatch({type:'decrement'})}
      >Decrement</button>

      <div style={{marginTop:'20px'}}>

      <input type="number" name='number' value={number} onChange={(e)=>setNumber(e.target.value)}  placeholder='enter desired number' />
      <button onClick={()=>dispatch({type:'add',payload:number})} >Add</button>
      </div>
    </div>
  )
}

export default Home