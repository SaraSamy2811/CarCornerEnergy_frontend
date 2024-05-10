import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import './css/console-bsb.css'
import FooterAdmin from './FooterAdmin'
import Dashbord from './Pages/Dashbord'
import ManageUsers from './Pages/ManageUsers'
import ManageStations from './Pages/ManageStations'
import HeaderForAdmin from './HeaderForAdmin'



export default function AdminInterface() {

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://unpkg.com/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.jsdelivr.net/npm/apexcharts';
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = 'https://cdn.jsdelivr.net/npm/jsvectormap';
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = 'https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world-merc.js';
    script4.async = true;
    document.body.appendChild(script4);

    const script5 = document.createElement('script');
    script5.src = 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js';
    script5.async = true;
    document.body.appendChild(script5);

    const script6 = document.createElement('script');
    script6.src = 'https://cdn.jsdelivr.net/npm/@fullcalendar/bootstrap5@6.1.9/index.global.min.js';
    script6.async = true;
    document.body.appendChild(script6);

    return () => {
      // Clean up function to remove the script tags when the component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
    };
  }, []);



  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = './assets/css/console-bsb.css';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css';
    document.head.appendChild(link3);

    return () => {
      // Clean up function to remove the link tags when the component unmounts
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);


  return (
     <div>
      <HeaderForAdmin/>
      <Sidebar />
      
      <Outlet>
    
        <Dashbord/>
        
        <ManageUsers/>
        <ManageStations/>
      </Outlet>
    
    
    
    <FooterAdmin/>
    </div>
  )
}
