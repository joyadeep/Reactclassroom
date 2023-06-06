import React,{useReducer, useState} from 'react'


const todoReducer = (state,action)=>{
  switch (action.type) {
    case 'ADD_TODO':
      return [...state,{id:Date.now(), text:action.payload , completed:false}]
    case 'TOGGLE_TODO' :
      return state.map(todo =>
        todo.id === action.payload ? {...todo, completed:!todo.completed} : todo
        )
    case 'DELETE_TODO':    //     1      !=       1
      return state.filter(todo=>todo.id !== action.payload) 
    default :
      return
  }
}

const Home = () => {
  
  const [todos,dispatch]=useReducer(todoReducer,[])
  const [data,setData]=useState('')
  

  const handleAddTodo=e=>{
    e.preventDefault();
    dispatch({type:'ADD_TODO',payload:data})
    setData('')
  }

  const handleToggleTodo=id=>{
    dispatch({type:'TOGGLE_TODO',payload:id})
  }

  const handleDeleteTodo = id=>{
    dispatch({type:'DELETE_TODO',payload:id})
  }


  return (
    <div style={{width:'50%',margin:'0 auto',textAlign:'center'}} >
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo} >
          <input type="text" name="data" value={data} onChange={(e)=>setData(e.target.value)} />
          <button>Add</button>
      </form>
      
      <ul>
        {
          todos.map(todo=>{
            return (
              <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through': 'none'}} >
                <span onClick={()=>handleToggleTodo(todo.id)} > {todo.text}</span>
                <button onClick={()=>handleDeleteTodo(todo.id)} >Delete</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Home