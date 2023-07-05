import React,{useState} from 'react'
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { ADD_TODO} from './features/todo/todoSlice';
import TodoCard from './components/TodoCard';
function App() {
  const todos=useSelector((state)=>state.todo.todo)
  const dispatch=useDispatch();
  const [newTodo,setNewTodo]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(ADD_TODO(newTodo));
    setNewTodo('')
  }

  return (
    <div className='px-20 pt-5 text-center'>
      <h1 className='text-6xl font-bold text-slate-600'>Todo App</h1>
      <div className='bg-slate-200 rounded-md px-5 py-3 mt-5 w-1/2 mx-auto'>
        <form onSubmit={handleSubmit} className='h-12 '>
          <input type="text" autoComplete='off' name='newTodo' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className='w-96 pl-5 outline-none text-xl h-full rounded-l-full' />
          <button className='bg-yellow-400 h-full rounded-r-full px-5 text-xl font-medium text-slate-600'>ADD</button>
        </form>

        <div className='flex flex-col gap-3 text-left px-10 mt-3'>
         
          {
            todos.length<=0 ? <div className='text-center text-xl font-semibold'> No Todo Found 😃 </div> :
          todos?.map((todo)=>(
            <TodoCard key={todo.id}  todo={todo} />
          ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
