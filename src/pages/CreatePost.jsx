import React, { useState } from 'react'
import { createPost } from '../api/postAPI'
import { toast } from 'react-toastify'

const CreatePost = () => {
    const [data,setData]=useState({title:'',body:'',userId:1})

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        createPost(data).then((res)=>{
            console.log("res",res)
            if (res.status===201){
                setData({title:'',body:'',userId:1})
                toast.success("Post created successfully !")
            }
        }).catch((error)=>{console.log("error",error)})
    }
    
  return (
    <div className='create_container'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit} >
            <input type="text" name="title" value={data.title} onChange={handleChange}  placeholder='enter title'  />
            <textarea className='textarea' rows={10}  name='body' value={data.body} onChange={handleChange} placeholder='enter body' />
            <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default CreatePost