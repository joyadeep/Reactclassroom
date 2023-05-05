import React,{useState} from 'react'

const AdvanceForm = () => {
    const [data,setData]=useState({name:'',email:''})


    const handleChange=(event)=>{
        setData({...data,
          [event.target.name]:event.target.value})
    }

  return (
    <div>
        <form>
            <input type="text" name="name" value={data.name} placeholder="enter your name" onChange={handleChange}  />
            <input type="email" name="email" value={data.email} placeholder="enter your email" onChange={handleChange} />
        </form>
    </div>
  )
}

export default AdvanceForm