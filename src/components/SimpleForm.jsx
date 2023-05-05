import React,{useState} from 'react'

const SimpleForm = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(`name = ${name}  email = ${email}`);
        
    }


  return (
    <div>

    <form onSubmit={handleSubmit} >
        <input type="text" name="name" value={name}  placeholder="enter your name" onChange={(event)=>{setName(event.target.value)}}    />
        <input type="email" name="email" value={email}  placeholder="enter your email" onChange={(event)=>{setEmail(event.target.value)}}    />
        <button type="submit">Submit</button>
    </form>

    </div>
  )
}

export default SimpleForm