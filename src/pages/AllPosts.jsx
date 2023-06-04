import React, { useEffect, useState } from 'react'
import {fetchPosts} from '../api/postAPI'
import PostCard from '../components/PostCard'



const AllPosts = () => {
    const[posts,setPosts]=useState([])
    const [isLoading,setIsLoading]=useState(false);
// setPost[...posts,data]
    useEffect(()=>{
        setIsLoading(true);
        fetchPosts().then((res)=>{
            if (res.status===200){
                setPosts(res.data)
            }
            else{
               console.log("error occured")
            }
        }).catch((error)=>{console.log("error",error)}).finally(()=>setIsLoading(false))
    },[])

    // posts[1,2,3,4,...]

  return (
    <div className='main'>
        {
            isLoading ?
             <h1>Loading....</h1>
            :
            posts?.map((post)=>{
                return (
                    <PostCard key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
                )
            })
        }
    </div>
  )
}

export default AllPosts