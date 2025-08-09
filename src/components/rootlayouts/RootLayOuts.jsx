import React from 'react'
import Header from '../sections/header/Header'
import Footer from '../sections/footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayOuts = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayOuts