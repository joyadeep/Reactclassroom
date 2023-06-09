import React,{useEffect, useState} from 'react'

const Home = () => {

  const [time,setTime]=useState(new Date())

useEffect(()=>{

  const timeInterval=setInterval(()=>{
    setTime(new Date())
  },1000)

  return(()=>clearInterval(timeInterval))


},[])

  return (
    <div style={{width:'50%',margin:'0 auto',textAlign:'center'}} >
      <h3>Digital Clock</h3>
      <p style={{fontSize:'40px'}} >{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Home