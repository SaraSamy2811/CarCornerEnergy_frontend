import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { ResponsiveContainer} 
 from 'recharts';
import FooterAdmin from '../FooterAdmin';
import Chart1 from '../controller/chart-1';
import Chart3 from '../controller/chart-3';
import Chart4 from '../controller/chart-4';
import MyCalendar from '../controller/calendar-1';
function  Dashbord() {

   
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card-dashbord' style={{ backgroundColor: 'var(--color-dark)' ,color: '#FFFFFF' }}>
                <div className='card-inner'>
                    <h3>COUPONES</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card' style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className='card-inner'>
                    <h3>STAIONS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card' style={{ backgroundColor: 'var(--color-darker)',color: '#FFFFFF' }}>
                <div className='card-inner'>
                    <h3>USERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'style={{ backgroundColor: 'var(--color-light)' }}>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className="dashboard-container">
      <div className="card-container">
        <ResponsiveContainer width="100%" height="100%">
          <div className="card widget-card border-light shadow-sm h-100">
            <div className="card-body p-4">
              <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title widget-card-title">Visitor Overview</h5>
                </div>
                <div>
                  <select className="form-select text-secondary border-light-subtle">
                    <option value="1">March 2024</option>
                    <option value="2">April 2024</option>
                    <option value="3">May 2024</option>
                    <option value="4">June 2024</option>
                  </select>
                </div>
              </div>
              <div id="bsb-chart-1">
                <Chart1 />
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      <div className="card-container">
        <ResponsiveContainer width="100%" height="100%">
          <div className="card widget-card border-light shadow-sm h-100">
            <div className="card-body p-4">
              <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title widget-card-title">Web Browser</h5>
                </div>
                <div>
                  <select className="form-select text-secondary border-light-subtle">
                    <option value="1">March 2023</option>
                    <option value="2">April 2023</option>
                    <option value="3">May 2023</option>
                    <option value="4">June 2023</option>
                  </select>
                </div>
              </div>
              <div id="bsb-chart-4">
                <Chart4 />
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
         


    <div className="dashboard-container2">
      <div className="responsive-container">
        {/* Chart 3 - Bootstrap Brain Component */}
        <div className="card widget-card border-light shadow-sm h-100">
          <div className="card-body p-4">
            <h5 className="card-title widget-card-title mb-3">Device Stats</h5>
            <div id="bsb-chart-3"><Chart3/></div>
          </div>
        </div>
      </div>

      <div className="responsive-container">
      {/* <!-- Calendar 1 - Bootstrap Brain Component --> */}
            <div class="card widget-card border-light shadow-sm h-100">
              <div class="card-body p-4">
                <div id="bsb-calendar-1" class="fc fc-media-screen fc-direction-ltr fc-theme-bootstrap5 bsb-calendar-theme"><MyCalendar/></div>
              </div>
            </div>
          </div>
    </div>
           
           
            <ResponsiveContainer><FooterAdmin/> </ResponsiveContainer>
        
      
    </main>
  )
}

export default Dashbord