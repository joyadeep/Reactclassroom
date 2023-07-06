import React,{useState} from 'react'
import './App.css';
function App() {

  const [newTodo,setNewTodo]=useState('')

  const handleSubmit=e=>{
    e.preventDefault();
    setNewTodo('');

  }

  return (
   
    <main className='px-20 pt-5 text-center'>
      <h1 className='text-6xl font-bold text-slate-600'>Todo App</h1>
      <div className=' bg-slate-200 rounded-md px-5 py-3 mt-5 w-1/2 mx-auto'>
        <form onSubmit={handleSubmit} className='h-12'>
          <input type="text" name="newTodo" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className='w-96 pl-5 outline-none text-xl h-full  rounded-l-full' />
          <button className='bg-yellow-400 h-full rounded-r-full px-5 text-xl font-medium' >ADD</button>
        </form>
      </div>
    </main>

  );
}

export default App;
