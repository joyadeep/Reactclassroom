import React from 'react'
import { DELETE_TODO,TOGGLE_TODO } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'
const TodoCard = ({todo}) => {
    const dispatch=useDispatch();
  return (
    <div className='flex justify-between'>
        <div className='flex items-center gap-3' >
            <input type="checkbox" onClick={()=>dispatch(TOGGLE_TODO(todo.id))} />
            <div className={`${todo?.isCompleted ? "line-through text-slate-400 " : "none text-black"}`} >{todo.todo}</div>
        </div>
        <button onClick={()=>{dispatch(DELETE_TODO(todo.id))}}>🚮</button>
    </div>
  )
}

export default TodoCard