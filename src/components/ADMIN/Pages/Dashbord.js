// import React from "react";
// import { Helmet } from "react-helmet";
// import "bootstrap";
// import 'apexcharts';
// import 'bs-brain';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Dashbord() {
//   return (
//     <div style={{ flex: 1, padding: "20px" }}>
//       <Helmet>
//         <link
//           rel="stylesheet"
//           href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
//         />
//         <link
//           rel="stylesheet"
//           href="https://unpkg.com/bs-brain@2.0.4/components/charts/chart-7/assets/css/chart-7.css"
//         />
//       </Helmet>
//       {/* <!-- Card 1 - Bootstrap Brain Component --> */}
//       <section class="py-3 py-md-5">
//         <div class="container">
//           <div class="row justify-content-center">
//             <div class="col-12 col-lg-10 col-xl-8 col-xxl-7">
//               <div class="row gy-4">
//                 <div class="col-12 col-sm-6">
//                   <div class="card widget-card border-light shadow-sm">
//                     <div class="card-body p-4">
//                       <div class="row">
//                         <div class="col-8">
//                           <h5 class="card-title widget-card-title mb-3">
//                             Sales
//                           </h5>
//                           <h4 class="card-subtitle text-body-secondary m-0">
//                             $6,820
//                           </h4>
//                         </div>
//                         <div class="col-4">
//                           <div class="d-flex justify-content-end">
//                             <div class="lh-1 text-white bg-info rounded-circle p-3 d-flex align-items-center justify-content-center">
//                               <i class="bi bi-truck fs-4"></i>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="row">
//                         <div class="col-12">
//                           <div class="d-flex align-items-center mt-3">
//                             <span class="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
//                               <i class="bi bi-arrow-right-short bsb-rotate-45"></i>
//                             </span>
//                             <div>
//                               <p class="fs-7 mb-0">-9%</p>
//                               <p class="fs-7 mb-0 text-secondary">
//                                 since last week
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-12 col-sm-6">
//                   <div class="card widget-card border-light shadow-sm">
//                     <div class="card-body p-4">
//                       <div class="row">
//                         <div class="col-8">
//                           <h5 class="card-title widget-card-title mb-3">
//                             Earnings
//                           </h5>
//                           <h4 class="card-subtitle text-body-secondary m-0">
//                             $21,900
//                           </h4>
//                         </div>
//                         <div class="col-4">
//                           <div class="d-flex justify-content-end">
//                             <div class="lh-1 text-white bg-info rounded-circle p-3 d-flex align-items-center justify-content-center">
//                               <i class="bi bi-currency-dollar fs-4"></i>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="row">
//                         <div class="col-12">
//                           <div class="d-flex align-items-center mt-3">
//                             <span class="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
//                               <i class="bi bi-arrow-right-short bsb-rotate-n45"></i>
//                             </span>
//                             <div>
//                               <p class="fs-7 mb-0">+26%</p>
//                               <p class="fs-7 mb-0 text-secondary">
//                                 since last week
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-12 col-sm-6">
//                   <div class="card widget-card border-light shadow-sm">
//                     <div class="card-body p-4">
//                       <div class="row">
//                         <div class="col-8">
//                           <h5 class="card-title widget-card-title mb-3">
//                             Visitors
//                           </h5>
//                           <h4 class="card-subtitle text-body-secondary m-0">
//                             3,764
//                           </h4>
//                         </div>
//                         <div class="col-4">
//                           <div class="d-flex justify-content-end">
//                             <div class="lh-1 text-white bg-info rounded-circle p-3 d-flex align-items-center justify-content-center">
//                               <i class="bi bi-person fs-4"></i>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="row">
//                         <div class="col-12">
//                           <div class="d-flex align-items-center mt-3">
//                             <span class="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
//                               <i class="bi bi-arrow-right-short bsb-rotate-n45"></i>
//                             </span>
//                             <div>
//                               <p class="fs-7 mb-0">+69%</p>
//                               <p class="fs-7 mb-0 text-secondary">
//                                 since last week
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-12 col-sm-6">
//                   <div class="card widget-card border-light shadow-sm">
//                     <div class="card-body p-4">
//                       <div class="row">
//                         <div class="col-8">
//                           <h5 class="card-title widget-card-title mb-3">
//                             Orders
//                           </h5>
//                           <h4 class="card-subtitle text-body-secondary m-0">
//                             786
//                           </h4>
//                         </div>
//                         <div class="col-4">
//                           <div class="d-flex justify-content-end">
//                             <div class="lh-1 text-white bg-info rounded-circle p-3 d-flex align-items-center justify-content-center">
//                               <i class="bi bi-cart fs-4"></i>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="row">
//                         <div class="col-12">
//                           <div class="d-flex align-items-center mt-3">
//                             <span class="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
//                               <i class="bi bi-arrow-right-short bsb-rotate-45"></i>
//                             </span>
//                             <div>
//                               <p class="fs-7 mb-0">-21%</p>
//                               <p class="fs-7 mb-0 text-secondary">
//                                 since last week
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       <div className="d-flex justify-content-center">
//   {/* <!-- Chart 7 - Bootstrap Brain Component --> */}
//   <section className="py-3 py-md-5">
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-12">
//           <div className="card widget-card border-light shadow-sm">
//             <div className="card-body p-4">
//               <h5 className="card-title widget-card-title mb-1">
//                 Devices Stats
//               </h5>
//               <p className="fs-7 text-secondary mb-4">Overview</p>
//               <div id="bsb-chart-7" className="mb-4"></div>
//               <div className="row gy-4">
//                 <div className="col-12">
//                   <div className="row align-items-center">
//                     <div className="col-8">
//                       <div className="d-flex align-items-center">
//                         <div>
//                           <div className="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
//                             <i className="bi bi-display"></i>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="m-0">Desktop</h6>
//                           <p className="text-secondary m-0 fs-7">
//                             since last week
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-4">
//                       <h6 className="fs-7 d-flex align-items-center justify-content-end m-0">
//                         <span className="bg-primary-subtle text-primary rounded-2 py-1 px-2">
//                           60%
//                         </span>
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="row align-items-center">
//                     <div className="col-8">
//                       <div className="d-flex align-items-center">
//                         <div>
//                           <div className="fs-5 bsb-w-50 bsb-h-50 bg-success-subtle text-success rounded-2 d-flex align-items-center justify-content-center me-3">
//                             <i className="bi bi-tablet"></i>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="m-0">Tablet</h6>
//                           <p className="text-secondary m-0 fs-7">
//                             since last week
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-4">
//                       <h6 className="fs-7 d-flex align-items-center justify-content-end m-0">
//                         <span className="bg-success-subtle text-success rounded-2 py-1 px-2">
//                           25%
//                         </span>
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="row align-items-center">
//                     <div className="col-8">
//                       <div className="d-flex align-items-center">
//                         <div>
//                           <div className="fs-5 bsb-w-50 bsb-h-50 bg-danger-subtle text-danger rounded-2 d-flex align-items-center justify-content-center me-3">
//                             <i className="bi bi-phone"></i>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="m-0">Mobile</h6>
//                           <p className="text-secondary m-0 fs-7">
//                             since last week
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-4">
//                       <h6 className="fs-7 d-flex align-items-center justify-content-end m-0">
//                         <span className="bg-danger-subtle text-danger rounded-2 py-1 px-2">
//                           15%
//                         </span>
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

//   {/* <!-- Chart 6 - Bootstrap Brain Component --> */}
//   <section className="py-3 py-md-5">
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-12">
//           <div className="card widget-card border-light shadow-sm">
//             <div className="card-body p-4">
//               <h5 className="card-title widget-card-title mb-1">
//                 Visitor Stats
//               </h5>
//               <p className="fs-7 text-secondary mb-4">Overview</p>
//               <div id="bsb-chart-6" className="mb-4"></div>
//               <div className="row gy-4">
//                 <div className="col-12">
//                   <div className="row align-items-center">
//                     <div className="col-8">
//                       <div className="d-flex align-items-center">
//                         <div>
//                           <div className="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
//                             <i className="bi bi-browser-chrome"></i>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="m-0">Chrome</h6>
//                           <p className="text-secondary m-0 fs-7">
//                             since last week
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-4">
//                       <h6 className="fs-7 d-flex align-items-center justify-content-end m-0">
//                         <span className="bg-primary-subtle text-primary rounded-2 py-1 px-2">
//                           +345
//                         </span>
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="row align-items-center">
//                     <div className="col-8">
//                       <div className="d-flex align-items-center">
//                         <div>
//                           <div className="fs-5 bsb-w-50 bsb-h-50 bg-success-subtle text-success rounded-2 d-flex align-items-center justify-content-center me-3">
//                             <i className="bi bi-browser-safari"></i>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="m-0">Safari</h6>
//                           <p className="text-secondary m-0 fs-7">
//                             since last week
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-4">
//                       <h6 className="fs-7 d-flex align-items-center justify-content-end m-0">
//                         <span className="bg-success-subtle text-success rounded-2 py-1 px-2">
//                           +129
//                         </span>
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="row align-items-center">
//                     <div className="col-8">
//                       <div className="d-flex align-items-center">
//                         <div>
//                           <div className="fs-5 bsb-w-50 bsb-h-50 bg-danger-subtle text-danger rounded-2 d-flex align-items-center justify-content-center me-3">
//                             <i className="bi bi-browser-firefox"></i>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="m-0">Firefox</h6>
//                           <p className="text-secondary m-0 fs-7">
//                             since last week
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-4">
//                       <h6 className="fs-7 d-flex align-items-center justify-content-end m-0">
//                         <span className="bg-danger-subtle text-danger rounded-2 py-1 px-2">
//                           +89
//                         </span>
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="row align-items-center">
//                     <div className="col-8">
//                       <div className="d-flex align-items-center">
//                         <div>
//                           <div className="fs-5 bsb-w-50 bsb-h-50 bg-info-subtle text-info rounded-2 d-flex align-items-center justify-content-center me-3">
//                             <i className="bi bi-browser-edge"></i>
//                           </div>
//                         </div>
//                         <div>
//                           <h6 className="m-0">Edge</h6>
//                           <p className="text-secondary m-0 fs-7">
//                             since last week
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-4">
//                       <h6 className="fs-7 d-flex align-items-center justify-content-end m-0">
//                         <span className="bg-info-subtle text-info rounded-2 py-1 px-2">
//                           +62
//                         </span>
//                       </h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </div>



      
//     </div>
//   );
// }

// export default Dashbord;




























import React from 'react'
import MyCalender from '../controller/calendar-1'
import Chart1 from '../controller/chart-1'
import Chart2 from '../controller/chart-2'
import Chart3 from '../controller/chart-3'
import Chart4 from '../controller/chart-4'
import Map1 from '../controller/map-1'
import Map2 from '../controller/map-2'
import MyForm from '../controller/bs-form-validation'


function Dashbord() {
  return (
    <div>
       

  {/* <!-- Main --> */}
  <main id="main">

    {/* <!-- Section - Bootstrap Brain Component --> */}
    {/* <!-- Breadcrumb --> */}
    <section class="py-3 py-md-4 py-xl-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="h4">eCommerce Dashboard</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb m-0 fs-7">
                <li class="breadcrumb-item"><a class="link-primary text-decoration-none" href="index.html">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
{/* 
    <!-- Section - Bootstrap Brain Component -->
    
    <!-- Card 1 - Bootstrap Brain Component --> */}
    <div>
      
    <section class="pb-3 pb-md-4 pb-xl-5 bg-light"  >
      <div class="container">
        <div class="row gy-3 gy-md-4">
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card widget-card border-light shadow-sm">
              <div class="card-body p-4">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title widget-card-title mb-3">Stations</h5>
                    <h4 class="card-subtitle text-body-secondary m-0">46</h4>
                  </div>
                  <div class="col-4">
                    <div class="d-flex justify-content-end">
                      <div class="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                        <i class="bi bi-truck fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex align-items-center mt-3">
                      <span class="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
                        <i class="bi bi-arrow-right-short bsb-rotate-45"></i>
                      </span>
                      <div>
                        <p class="fs-7 mb-0">-9%</p>
                        <p class="fs-7 mb-0 text-secondary">since last week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card widget-card border-light shadow-sm">
              <div class="card-body p-4">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title widget-card-title mb-3">Coupons</h5>
                    <h4 class="card-subtitle text-body-secondary m-0">896</h4>
                  </div>
                  <div class="col-4">
                    <div class="d-flex justify-content-end">
                      <div class="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                        <i class="bi bi-currency-dollar fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex align-items-center mt-3">
                      <span class="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
                        <i class="bi bi-arrow-right-short bsb-rotate-n45"></i>
                      </span>
                      <div>
                        <p class="fs-7 mb-0">+26%</p>
                        <p class="fs-7 mb-0 text-secondary">since last week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card widget-card border-light shadow-sm">
              <div class="card-body p-4">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title widget-card-title mb-3">Visitors</h5>
                    <h4 class="card-subtitle text-body-secondary m-0">3,764</h4>
                  </div>
                  <div class="col-4">
                    <div class="d-flex justify-content-end">
                      <div class="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                        <i class="bi bi-person fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex align-items-center mt-3">
                      <span class="lh-1 me-3 bg-success-subtle text-success rounded-circle p-1 d-flex align-items-center justify-content-center">
                        <i class="bi bi-arrow-right-short bsb-rotate-n45"></i>
                      </span>
                      <div>
                        <p class="fs-7 mb-0">+69%</p>
                        <p class="fs-7 mb-0 text-secondary">since last week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card widget-card border-light shadow-sm">
              <div class="card-body p-4">
                <div class="row">
                  <div class="col-8">
                    <h5 class="card-title widget-card-title mb-3">Users</h5>
                    <h4 class="card-subtitle text-body-secondary m-0">455</h4>
                  </div>
                  <div class="col-4">
                    <div class="d-flex justify-content-end">
                      <div class="lh-1 text-white bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center">
                        <i class="bi bi-cart fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex align-items-center mt-3">
                      <span class="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
                        <i class="bi bi-arrow-right-short bsb-rotate-45"></i>
                      </span>
                      <div>
                        <p class="fs-7 mb-0">+50%</p>
                        <p class="fs-7 mb-0 text-secondary">since last week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
{/* 
    <!-- Section - Bootstrap Brain Component --> */}
    <section class="pb-3 pb-md-4 pb-xl-5 bg-light">
      <div class="container">
        <div class="row gy-3 gy-md-4">
          <div class="col-12 col-lg-6 col-xl-7">
            {/* <!-- Chart 1 - Bootstrap Brain Component --> */}
            <div class="card widget-card border-light shadow-sm h-100">
              <div class="card-body p-4">
                <div class="d-block d-sm-flex align-items-center justify-content-between mb-3">
                  <div class="mb-3 mb-sm-0">
                    <h5 class="card-title widget-card-title">Visiting Overview</h5>
                  </div>
                  <div>
                    <select class="form-select text-secondary border-light-subtle">
                      <option value="1">March 2023</option>
                      <option value="2">April 2023</option>
                      <option value="3">May 2023</option>
                      <option value="4">June 2023</option>
                    </select>
                  </div>
                </div>
                <div id="bsb-chart-1"><Chart1/></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-5">
            {/* <!-- Chart 4 - Bootstrap Brain Component --> */}
            <div class="card widget-card border-light shadow-sm h-100">
              <div class="card-body p-4">
                <div class="d-block d-sm-flex align-items-center justify-content-between mb-3">
                  <div class="mb-3 mb-sm-0">
                    <h5 class="card-title widget-card-title">Browsers</h5>
                  </div>
                  <div>
                    <select class="form-select text-secondary border-light-subtle">
                      <option value="1">March 2023</option>
                      <option value="2">April 2023</option>
                      <option value="3">May 2023</option>
                      <option value="4">June 2023</option>
                    </select>
                  </div>
                </div>
                <div id="bsb-chart-4"><Chart4/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Section - Bootstrap Brain Component --> */}
    <section class="pb-3 pb-md-4 pb-xl-5 bg-light">
      <div class="container">
        <div class="row gy-3 gy-md-4">
          <div class="col-12 col-lg-6 col-xl-5">
            {/* <!-- Timeline 8 - Bootstrap Brain Component --> */}
            <div class="card widget-card bsb-timeline-8 border-light shadow-sm h-100">
              <div class="card-body p-4">
                <h5 class="card-title widget-card-title mb-3">Recent Transactions</h5>

                <ul class="timeline">
                  <li class="timeline-item">
                    <div class="timeline-body">
                      <div class="timeline-meta">
                        <span>32 minutes</span>
                      </div>
                      <div class="timeline-content timeline-indicator">
                        <h6 class="mb-1">Amount received in the PayPal gateway.</h6>
                        <span class="text-secondary fs-7">User: William Lucas</span>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-item">
                    <div class="timeline-body">
                      <div class="timeline-meta">
                        <span>49 minutes</span>
                      </div>
                      <div class="timeline-content timeline-indicator">
                        <h6 class="mb-1">New sale recorded in the Bootstrap admin templates.</h6>
                        <span class="text-secondary fs-7">Product: Console</span>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-item">
                    <div class="timeline-body">
                      <div class="timeline-meta">
                        <span>2 hours</span>
                      </div>
                      <div class="timeline-content timeline-indicator">
                        <h6 class="mb-1">User registered in the discount campaign.</h6>
                        <span class="text-secondary fs-7">Country: United States</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-7">
            {/* <!-- Map 2 - Bootstrap Brain Component --> */}
            <div class="card widget-card border-light shadow-sm h-100">
              <div class="card-body p-4">
                <div class="d-block d-sm-flex align-items-center justify-content-between mb-3">
                  <div class="mb-2 mb-sm-0">
                    <h5 class="card-title widget-card-title m-0">Global Sales Overview</h5>
                  </div>
                  <div>
                    <span class="text-secondary fs-7">Last updated: 7 days ago</span>
                  </div>
                </div>
                <div id="bsb-map-2" class="bsb-jvm-zoom-btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Section - Bootstrap Brain Component --> */}
    <section class="pb-3 pb-md-4 pb-xl-5 bg-light">
      <div class="container">
        <div class="row gy-3 gy-md-4">
          <div class="col-12 col-lg-6 col-xl-7">
            {/* <!-- Chart 3 - Bootstrap Brain Component --> */}
            <div class="card widget-card border-light shadow-sm h-100">
              <div class="card-body p-4">
                <h5 class="card-title widget-card-title mb-3">Device Stats</h5>
                <div id="bsb-chart-3"><Chart3/></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-5">
            {/* <!-- Card 2 - Bootstrap Brain Component --> */}
            <div class="card widget-card border-light shadow-sm h-100">
              <div class="card-body p-4">
                <h5 class="card-title widget-card-title mb-4">Payment Overview</h5>
                <div class="row gy-4">
                  <div class="col-12">
                    <div class="row align-items-center">
                      <div class="col-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                              <i class="bi bi-paypal"></i>
                            </div>
                          </div>
                          <div>
                            <h6 class="m-0">PayPal</h6>
                            <p class="text-secondary m-0 fs-7">Funds Received</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <h6 class="text-end">$5,432</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row align-items-center">
                      <div class="col-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                              <i class="bi bi-stripe"></i>
                            </div>
                          </div>
                          <div>
                            <h6 class="m-0">Stripe</h6>
                            <p class="text-secondary m-0 fs-7">Invoice Paid</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <h6 class="text-end">$325</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row align-items-center">
                      <div class="col-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                              <i class="bi bi-credit-card-fill"></i>
                            </div>
                          </div>
                          <div>
                            <h6 class="m-0">Credit Card</h6>
                            <p class="text-secondary m-0 fs-7">Top Up</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <h6 class="text-end">$99</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row align-items-center">
                      <div class="col-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                              <i class="bi bi-bank2"></i>
                            </div>
                          </div>
                          <div>
                            <h6 class="m-0">Bank</h6>
                            <p class="text-secondary m-0 fs-7">Check Deposited</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <h6 class="text-end">$2,432</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row align-items-center">
                      <div class="col-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                              <i class="bi bi-wallet-fill"></i>
                            </div>
                          </div>
                          <div>
                            <h6 class="m-0">Wallet</h6>
                            <p class="text-secondary m-0 fs-7">Bill Payment</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <h6 class="text-end">$750</h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row align-items-center">
                      <div class="col-8">
                        <div class="d-flex align-items-center">
                          <div>
                            <div class="fs-5 bsb-w-50 bsb-h-50 bg-primary-subtle text-primary rounded-2 d-flex align-items-center justify-content-center me-3">
                              <i class="bi bi-arrow-up-left-circle-fill"></i>
                            </div>
                          </div>
                          <div>
                            <h6 class="m-0">Refund</h6>
                            <p class="text-secondary m-0 fs-7">Case Closed</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
                        <h6 class="text-end">$289</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Section - Bootstrap Brain Component --> */}
    <section class="pb-3 pb-md-4 pb-xl-5 bg-light">
      <div class="container">
        <div class="row gy-3 gy-md-4">
          <div class="col-12 col-lg-6 col-xl-5">
            {/* <!-- Calendar 1 - Bootstrap Brain Component --> */}
            <div class="card widget-card border-light shadow-sm h-100">
              <div class="card-body p-4">
                <div id="bsb-calendar-1" class="fc fc-media-screen fc-direction-ltr fc-theme-bootstrap5 bsb-calendar-theme"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-7">
            {/* <!-- Table 1 - Bootstrap Brain Component --> */}
            <div class="card widget-card border-light shadow-sm h-100">
              <div class="card-body p-4">
                <h5 class="card-title widget-card-title mb-4">Monthly Transactions</h5>
                <div class="table-responsive">
                  <table class="table table-borderless bsb-table-xl text-nowrap align-middle m-0">
                    <thead>
                      <tr>
                        <th>Invoice</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h6 class="mb-1">#HO3210</h6>
                          <span class="text-secondary fs-7">Web, UI Design</span>
                        </td>
                        <td>
                          <h6 class="mb-1">Oliver</h6>
                          <span class="text-secondary fs-7">United States</span>
                        </td>
                        <td>
                          <h6 class="mb-1">Bootstrap</h6>
                          <span class="text-secondary fs-7">v5.3+</span>
                        </td>
                        <td>$495</td>
                        <td>
                          <span class="badge rounded-pill bg-danger">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="mb-1">#DR8672</h6>
                          <span class="text-secondary fs-7">Web, UX Design</span>
                        </td>
                        <td>
                          <h6 class="mb-1">Emma</h6>
                          <span class="text-secondary fs-7">United Kingdom</span>
                        </td>
                        <td>
                          <h6 class="mb-1">WordPress</h6>
                          <span class="text-secondary fs-7">v6.3+</span>
                        </td>
                        <td>$950</td>
                        <td>
                          <span class="badge rounded-pill bg-success">Paid</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="mb-1">#SA2910</h6>
                          <span class="text-secondary fs-7">Web, SEO</span>
                        </td>
                        <td>
                          <h6 class="mb-1">Isabella</h6>
                          <span class="text-secondary fs-7">Canada</span>
                        </td>
                        <td>
                          <h6 class="mb-1">React</h6>
                          <span class="text-secondary fs-7">v18+</span>
                        </td>
                        <td>$700</td>
                        <td>
                          <span class="badge rounded-pill bg-info">On Hold</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="mb-1">#BD1019</h6>
                          <span class="text-secondary fs-7">SEM, SEO</span>
                        </td>
                        <td>
                          <h6 class="mb-1">William</h6>
                          <span class="text-secondary fs-7">UAE</span>
                        </td>
                        <td>
                          <h6 class="mb-1">Vue</h6>
                          <span class="text-secondary fs-7">v3+</span>
                        </td>
                        <td>$875</td>
                        <td>
                          <span class="badge rounded-pill bg-warning">Negotiating</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

  </main>
  

</div>
  )
}

export default Dashbord