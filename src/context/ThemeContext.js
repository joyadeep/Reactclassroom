import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const ThemeContext=createContext();


const ThemeProvider = ({children}) => {
    const [isDark,setIsDark]=useState(false);

    const toggleTheme=()=>{
      setIsDark(!isDark)
    }

  return (
    <ThemeContext.Provider value={{isDark,toggleTheme}} >
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext,ThemeProvider};


// provide ->top / consumer wrap