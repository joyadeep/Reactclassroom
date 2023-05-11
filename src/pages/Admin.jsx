import React from 'react'
import User from '../components/User'

const Admin = () => {
  return (
    <div>
        <User name="admin" email="admin@gmail.com" address="kathmandu">
            <h1>This is admin page</h1>
        </User>
    </div>
  )
}

export default Admin