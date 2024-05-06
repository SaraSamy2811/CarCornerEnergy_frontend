import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Profile from './Pages/Profile'
import Offers from './Pages/Offers'
import MapComponent from './MapComponent/MapComponent'
import HomeForUser from './Pages/HomeForUser'
import HeaderForUser from './HeaderForUser'
import Review from './Pages/Review'

export default function UserInterface() {
  return (
    <div>
      <HeaderForUser/>
      <Outlet>
        <Profile/>
        <Offers/>
        <HomeForUser/>
        <MapComponent/>
        <Review/>
      </Outlet>
      <Footer/>
    </div>
  )
}
