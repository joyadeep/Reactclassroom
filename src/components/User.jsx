import React from 'react'

const User = ({name,email,children,...prop}) => {
  return (
    <div>
        {children}
        <h3>Name : {name}</h3>
        <h3>Email : {email}</h3>
        <h3>Adress : {prop.address}</h3>
      
        
    </div>
  )
}

export default User