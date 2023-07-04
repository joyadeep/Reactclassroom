import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
  return (
    <>
    <ScrollToTop>

        <Navbar/>
        <Outlet/>
        <Footer/>
    </ScrollToTop>

    </>
  )
}

export default Layout