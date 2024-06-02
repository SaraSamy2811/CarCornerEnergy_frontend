import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Dashbord from './Pages/Dashbord'
import ManageUsers from './Pages/ManageUsers'
import ManageStations from './Pages/ManageStations'
import HeaderForAdmin from './HeaderForAdmin'
import './css/Dashbord.css'
import AdminProfile from './Pages/AdminProfile'
import ManageCoupons from './Pages/ManageCoupons'




export default function AdminInterface() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    
      <div className='grid-container'>
      <HeaderForAdmin  OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      <div className='main-content'>
      <Outlet>
        <Dashbord/>
        <ManageUsers/>
        <ManageStations/>
        <ManageCoupons/>
        <AdminProfile/>
      </Outlet>
  
      </div>
    </div>
  )
}
