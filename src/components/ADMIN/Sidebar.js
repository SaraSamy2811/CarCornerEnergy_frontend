import React from 'react'
import { Link } from 'react-router-dom'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill ,BsPersonCircle}
 from 'react-icons/bs'
 import Logo from '../../assests/imges/logo.png'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img src={Logo} height="40" alt="Logo" />
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <Link to="/Admin">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/Admin/ManageCoupons">
                    <BsFillArchiveFill className='icon'/> Manage Coupons
                    </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/Admin/ManageStations">
                    <BsFillGrid3X3GapFill className='icon'/>Manage Staions 
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Admin/ManageUsers">
                    <BsPeopleFill className='icon'/> Manage Users
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Admin/AdminProfile">
                    <BsPersonCircle className='icon'/> My Profile
                    </Link>
            </li>
            
            
        </ul>
    </aside>
  )
}

export default Sidebar;