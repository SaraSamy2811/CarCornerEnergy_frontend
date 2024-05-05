import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Profile from './Pages/Profile'
import Offers from './Pages/Offers'

import MapComponent from './MapComponent/MapComponent'
import HomeForUser from './Pages/HomeForUser'

export default function UserInterface() {
  return (
    <div>
      <Header/>
      <Outlet>
        <Profile/>
        <Offers/>
        <HomeForUser/>
        <MapComponent/>

      </Outlet>
      <Footer/>
    </div>
  )
}
