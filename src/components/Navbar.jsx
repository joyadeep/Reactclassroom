import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import "../App.css"
import { ThemeContext } from '../context/ThemeContext';
import {BsSun,BsMoon} from 'react-icons/bs'

const Navbar = () => {
  const {isDark,toggleTheme}=useContext(ThemeContext);
  const [isOpen,setIsOpen]=useState(false);

  return (
    <nav className={isDark?"nav_dark":"nav_light"}>
        <h1 className='logo'>Blog</h1>
        <div className={isOpen ? "links links_show ":"links"} >
          <div className='switch_container' onClick={toggleTheme} >
              <div className={isDark?" toggle toggle_btn_dark":" toggle toggle_btn_light"}>
               {
                isDark ? <BsMoon size={24}/> : <BsSun size={24}/>
               } 
              </div>
          </div>
            <NavLink to={"/"} className={({isActive})=>isActive? "activeLink":"inactiveLinks"}  >Home</NavLink>
            <NavLink to={"/blogs"} className={({isActive})=>isActive? "activeLink":"inactiveLinks"} >Blogs</NavLink>
            <NavLink to={"/about"} className={({isActive})=>isActive? "activeLink":"inactiveLinks"} >About</NavLink>
            <NavLink to={"/create"} className={({isActive})=>isActive? "activeLink":"inactiveLinks"} >Create</NavLink>
        </div>
        <span className='menu' onClick={()=>setIsOpen(!isOpen)} >{isOpen? <AiOutlineClose size={32} />: <AiOutlineMenu size={32} />}</span>

    </nav>
  )
}

export default Navbar