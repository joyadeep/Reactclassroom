import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <nav>
        <h1 className='logo'>Blog</h1>
        <div className={isOpen ? "links links_show ":"links"} >
            <NavLink to={"/"} className={({isActive})=>isActive?"activeLink":""}  >Home</NavLink>
            <NavLink to={"/blogs"} className={({isActive})=>isActive?"activeLink":""} >Blogs</NavLink>
            <NavLink to={"/about"} className={({isActive})=>isActive?"activeLink":""} >About</NavLink>
            <NavLink to={"/create"} className={({isActive})=>isActive?"activeLink":""} >Create</NavLink>
        </div>
        <span className='menu' onClick={()=>setIsOpen(!isOpen)} >{isOpen? <AiOutlineClose size={32} />: <AiOutlineMenu size={32} />}</span>

    </nav>
  )
}

export default Navbar