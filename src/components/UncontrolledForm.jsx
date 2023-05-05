import React from 'react'

const UncontrolledForm = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("name =",window.username.value);
        console.log("email =",window.email.value)
        // console.log(`name = ${window.name.value}  `)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" />
        <input type="email" name="email" id="email" />
        <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default UncontrolledForm