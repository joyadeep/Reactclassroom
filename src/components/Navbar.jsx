import React, { useState } from 'react'

const Navbar = ({setCity,theme,toggleTheme}) => {
  
    const [tempCity,setTempCity]=useState("")

    const handleSubmit=e=>{
        e.preventDefault();
        setCity(tempCity);
        setTempCity("")
    }

    return (
        <nav>
            <h1>WeatherMan</h1>
            <div style={{display:'flex',alignItems:'center',gap:'5px'}} >
                <div className='toggle_container' onClick={toggleTheme}>
                    <div style={{fontSize:'14px'}}>🌞</div>
                    <div style={{fontSize:'14px'}}>🌙</div>
                    <div className={`toggle ${theme==="light"?"toggle_light":"toggle_dark"}`} ></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="tempCity" value={tempCity} onChange={(e)=>setTempCity(e.target.value)} />
                    <button>Search</button>
                </form>
            </div>
        </nav>
  )
}

export default Navbar