import React,{useRef, useState} from 'react'

const RefHook = () => {
    const inputRef= useRef(null);

    const [name,setName]=useState("");

    const handleChange=(e)=>{
        e.preventDefault();
        console.log("ref==>",inputRef)
        // inputRef.current.focus();
        console.log("ref value =",inputRef.current.value);

    }

    const handleStateChange=(e)=>{
        setName(e.target.value);
        console.log("inp val =",name)
        //  - 1 - 0 - 0 - 0 - 0 - 1 -
    }

  return (
    <div>
        <input type="text" name="username" ref={inputRef}  />
        <button onClick={handleChange}  >focus</button>


        <input type="text" name="name" value={name} onChange={handleStateChange}  />
        <button onClick={()=>{console.log("state value ==",name)}} >Submit</button>
    </div>
  )
}

export default RefHook