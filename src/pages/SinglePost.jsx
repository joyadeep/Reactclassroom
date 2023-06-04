import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglPost } from "../api/postAPI";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    fetchSinglPost(id)
      .then((res) => {
        // console.log("single psot ==",res)
        setPost(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => setIsLoading(false));
  }, [id]);


  const handleClick=()=>{
    navigate(-1);
  }

  return (
    <div className="main">
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
        <button onClick={handleClick}>Back</button>
          <div className="card_container">
            <h1>{post.title}</h1>
            <p>{post.userId}</p>
            <h4>{post.body}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePost;
