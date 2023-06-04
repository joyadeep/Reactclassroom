import React from 'react'
import {useNavigate} from 'react-router-dom'

const PostCard = ({userId,title,body,id}) => {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate(`/${id}`)
  }
  //localhost:3000/[dynamic]

  return (
    <div onClick={handleClick} className='card_container' >
        <h1>{title}</h1>
        <p> userId : {userId}</p>
        <h4>{body}</h4>
    </div>
  )
}

export default PostCard