// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i class="fa fa-bars fa-large"></i>}>
//           <a href="/" class="text-decoration-none" style={{ color: 'inherit' }}>
//             Sidebar
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent class="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/" activeClass="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/tables" activeClass="activeClicked">
//               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/profile" activeClass="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/analytics" activeClass="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink exact to="/hero404" target="_blank" activeClass="activeClicked">
//               <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               padding: '20px 5px',
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import './css/console-bsb.css'

function Sidebar() {
  return (
    <div style={{ overflow: 'hidden', paddingRight: '16px' }}
    > 
      {/* Aside */}
      <aside class="bsb-sidebar-1 offcanvas offcanvas-start" tabIndex="-1" id="bsbSidebar1" aria-labelledby="bsbSidebarLabel1">
        <div class="offcanvas-header">
          <a class="sidebar-brand" href="index.html">
            <img src="./assets/img/branding/console-logo.svg" id="bsbSidebarLabel1" class="bsb-tpl-logo" alt="BootstrapBrain Logo" />
          </a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body pt-0">
          <hr class="sidebar-divider mb-3" />
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link p-3 bg-light rounded active" data-bs-toggle="collapse" href="#dashboardExamples" role="button" aria-expanded="true" aria-controls="dashboardExamples">
                <div class="nav-link-icon text-primary">
                  <i class="bi bi-grid"></i>
                </div>
                <span class="nav-link-text fw-bold">Dashboards</span>
              </a>
              <div class="collapse show" id="dashboardExamples">
                <ul class="nav flex-column ms-4">
                  <li class="nav-item">
                    <a class="nav-link link-primary active" aria-current="page" href="index.html">
                      <div class="nav-link-icon text-primary-emphasis">
                        <i class="bi bi-arrow-right-short"></i>
                      </div>
                      <span class="nav-link-text">eCommerce</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* Rest of the list items... */}
            <li class="nav-item mt-3">
          <h6 class="py-1 text-secondary text-uppercase fs-7">Tools</h6>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#componentExamples" role="button" aria-expanded="false" aria-controls="componentExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-menu-button-wide-fill"></i>
            </div>
            <span class="nav-link-text fw-bold">Components</span>
          </a>
          <div class="collapse" id="componentExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="components-accordion.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Accordion</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="components-alerts.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Alerts</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="components-buttons.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Buttons</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="components-card.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Card</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#formExamples" role="button" aria-expanded="false" aria-controls="formExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-ui-radios"></i>
            </div>
            <span class="nav-link-text fw-bold">Forms</span>
          </a>
          <div class="collapse" id="formExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="forms-layout.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Layouts</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="forms-validation.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Validation</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#iconExamples" role="button" aria-expanded="false" aria-controls="iconExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-flower2"></i>
            </div>
            <span class="nav-link-text fw-bold">Icons</span>
          </a>
          <div class="collapse" id="iconExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="bootstrap-icons.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Bootstrap</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#tableExamples" role="button" aria-expanded="false" aria-controls="tableExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-layout-text-window-reverse"></i>
            </div>
            <span class="nav-link-text fw-bold">Tables</span>
          </a>
          <div class="collapse" id="tableExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="tables-basic.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Basic</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="tables-accented.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Accented</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item mt-3">
          <h6 class="py-1 text-secondary text-uppercase fs-7">Addons</h6>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#cardExamples" role="button" aria-expanded="false" aria-controls="cardExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-card-heading"></i>
            </div>
            <span class="nav-link-text fw-bold">Cards</span>
          </a>
          <div class="collapse" id="cardExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="cards-stats.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Stats</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="cards-tables.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Tables</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="cards-timelines.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Timelines</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#calendarExamples" role="button" aria-expanded="false" aria-controls="calendarExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-calendar-event"></i>
            </div>
            <span class="nav-link-text fw-bold">Calendars</span>
          </a>
          <div class="collapse" id="calendarExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="calendars-basic.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Basic</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#chartExamples" role="button" aria-expanded="false" aria-controls="chartExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-bar-chart"></i>
            </div>
            <span class="nav-link-text fw-bold">Charts</span>
          </a>
          <div class="collapse" id="chartExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="apex-charts.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Apex</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#mapExamples" role="button" aria-expanded="false" aria-controls="mapExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-map"></i>
            </div>
            <span class="nav-link-text fw-bold">Maps</span>
          </a>
          <div class="collapse" id="mapExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="jsvectormap-maps.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Vector Maps</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item mt-3">
          <h6 class="py-1 text-secondary text-uppercase fs-7">Extras</h6>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#pageExamples" role="button" aria-expanded="false" aria-controls="pageExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-folder"></i>
            </div>
            <span class="nav-link-text fw-bold">Pages</span>
          </a>
          <div class="collapse" id="pageExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="pages-profile.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Profile</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="pages-invoice.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Invoice</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="pages-pricing.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Pricing</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="pages-contact.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Contact</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="pages-faqs.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">FAQs</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="pages-blank.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Blank</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="pages-error-404.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Error 404</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link p-3" data-bs-toggle="collapse" href="#authExamples" role="button" aria-expanded="false" aria-controls="authExamples">
            <div class="nav-link-icon text-primary">
              <i class="bi bi-gear"></i>
            </div>
            <span class="nav-link-text fw-bold">Authentication</span>
          </a>
          <div class="collapse" id="authExamples">
            <ul class="nav flex-column ms-4">
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="auth-login.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Log In</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="auth-register.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Register</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-secondary" aria-current="page" href="auth-reset-password.html">
                  <div class="nav-link-icon text-primary-emphasis">
                    <i class="bi bi-arrow-right-short"></i>
                  </div>
                  <span class="nav-link-text">Reset Password</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      
          </ul>
          <hr class="sidebar-divider my-4" />
          <div class="bg-light rounded-3 position-relative px-4 pt-5 pb-4 mt-7">
            <div class="bsb-w-80 bsb-h-80 d-flex align-items-center justify-content-center text-bg-primary border border-5 border-white rounded-circle position-absolute top-0 start-50 translate-middle">
              <i class="bi bi-rocket-takeoff lh-1 fs-3"></i>
            </div>
            <div class="text-center">
              <h3 class="h5">Admin Dashboard Templates</h3>
              <p class="fs-7">Browse our Admin Dashboard Templates to unlock possibilities and enjoy exclusive features that will transform your projects to the next level.</p>
              <div class="d-grid m-0">
                <a class="btn btn-primary rounded-pill" href="https://bootstrapbrain.com/template-category/admin-dashboard/" target="_blank" role="button">Browse</a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
