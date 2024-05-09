import React from 'react'
import './css/console-bsb.css'
import Logo from '../../assests/imges/logo.png'

function HeaderForAdmin() {
  return (
    <div>
        {/* <!-- Header --> */}
  <header id="header" class="bg-white border-bottom border-light-subtle sticky-top bsb-tpl-header-sticky">
    <nav class="navbar navbar-expand-md bsb-navbar-3 bsb-tpl-navbar-sticky" data-bsb-sticky-target="#header">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item me-3">
            <a class="nav-link" href="#!" data-bs-toggle="offcanvas" data-bs-target="#bsbSidebar1" aria-controls="bsbSidebar1">
              <i class="bi-filter-left fs-3 lh-1"></i>
            </a>
          </li>
        </ul>
        <a class="navbar-brand" href="index.html">
          {/* Use the imported Logo */}
          <img src={Logo} className="bsb-tpl-logo" alt="Car Corner Energy" />
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#bsbNavbar" aria-controls="bsbNavbar" aria-label="Toggle Navigation">
          <i class="bi bi-three-dots"></i>
        </button>
        <div class="collapse navbar-collapse" id="bsbNavbar">
          <ul class="navbar-nav bsb-dropdown-menu-responsive ms-auto align-items-center">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="position-relative">
                  <i class="bi bi-search"></i>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                <form class="row g-1 px-3 py-2 align-items-center">
                  <div class="col-8">
                    <label class="visually-hidden" for="inputSearchNavbar">Search</label>
                    <input type="text" class="form-control" id="inputSearchNavbar"/>
                  </div>
                  <div class="col-4">
                    <button type="submit" class="btn btn-primary">Search</button>
                  </div>
                </form>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="position-relative">
                  <i class="bi bi-globe"></i>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-md-end bsb-dropdown-sm bsb-dropdown-animation bsb-fadeIn">
                <div>
                  <h6 class="dropdown-header fs-7 text-center">Multilingual</h6>
                </div>
                <div>
                  <hr class="dropdown-divider mb-0"/>
                </div>
                <div class="list-group list-group-flush">
                  <a href="#!" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="./assets/img/translation/flag-img-1.svg" class="img-fluid rounded-pill" alt="Arabic"/>
                      </div>
                      <div class="col-10">
                        <div class="ps-3">
                          <div class="fs-7">Arabic</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="./assets/img/translation/flag-img-2.svg" class="img-fluid rounded-pill" alt="Chinese"/>
                      </div>
                      <div class="col-10">
                        <div class="ps-3">
                          <div class="fs-7">Chinese</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action active" aria-current="true">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="./assets/img/translation/flag-img-3.svg" class="img-fluid rounded-pill" alt="English"/>
                      </div>
                      <div class="col-10">
                        <div class="ps-3">
                          <div class="fs-7">English</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="./assets/img/translation/flag-img-4.svg" class="img-fluid rounded-pill" alt="French"/>
                      </div>
                      <div class="col-10">
                        <div class="ps-3">
                          <div class="fs-7">French</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <hr class="dropdown-divider mt-0"/>
                </div>
                <div>
                  <a class="dropdown-item fs-7 text-center" href="#!">See All Languages</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="position-relative pt-1">
                  <i class="bi bi-chat-left"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-accent">
                    9
                    <span class="visually-hidden">New Chats</span>
                  </span>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                <div>
                  <h6 class="dropdown-header fs-7 text-center">9 New Messages</h6>
                </div>
                <div>
                  <hr class="dropdown-divider mb-0"/>
                </div>
                <div class="list-group list-group-flush">
                  <a href="#!" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="./assets/img/chat/chat-img-1.jpg" class="img-fluid rounded-circle" alt="Luna John"/>
                      </div>
                      <div class="col-10">
                        <div class="ps-3">
                          <div class="text-dark">Luna John</div>
                          <div class="text-secondary mt-1 fs-7">Hello, I'm having trouble with my account.</div>
                          <div class="text-secondary mt-1 fs-7">15m ago</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#!" class="list-group-item list-group-item-action">
                    <div class="row g-0 align-items-center">
                      <div class="col-2">
                        <img src="./assets/img/chat/chat-img-2.jpg" class="img-fluid rounded-circle" alt="Mark Smith"/>
                      </div>
                      <div class="col-10">
                        <div class="ps-3">
                          <div class="text-dark">Mark Smith</div>
                          <div class="text-secondary mt-1 fs-7">Hi, I'm not able to change my password.</div>
                          <div class="text-secondary mt-1 fs-7">23m ago</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <hr class="dropdown-divider mt-0"/>
                </div>
                <div>
                  <a class="dropdown-item fs-7 text-center" href="#!">See All Messages</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="position-relative pt-1">
                  <i class="bi bi-bell"></i>
                  <span class="p-1 bg-accent border border-light rounded-circle position-absolute top-0 start-100 translate-middle">
                    <span class="visually-hidden">New Notifications</span>
                  </span>
                </span>
              </a>
              <ul class="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                <li>
                  <h6 class="dropdown-header fs-7 text-center">18 Notifications</h6>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#!">
                    <span>
                      <i class="bi bi-envelope-fill me-2"></i>
                      <span class="fs-7">New Messages</span>
                    </span>
                    <span class="fs-7 ms-auto text-secondary">5 mins</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#!">
                    <span>
                      <i class="bi bi-person-fill me-2"></i>
                      <span class="fs-7">Friend Requests</span>
                    </span>
                    <span class="fs-7 ms-auto text-secondary">17 hours</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#!">
                    <span>
                      <i class="bi bi-file-earmark-fill me-2"></i>
                      <span class="fs-7">New Reports</span>
                    </span>
                    <span class="fs-7 ms-auto text-secondary">3 days</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li><a class="dropdown-item fs-7 text-center" href="#!">See All Notifications</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./assets/img/profile/profile-img-1.jpg" width="35" height="35" class="img-fluid rounded-circle" alt="Ethan Leo"/>
              </a>
              <ul class="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                <li>
                  <h6 class="dropdown-header fs-7 text-center">Welcome, Ethan Leo</h6>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li>
                  <a href="pages-profile.html" class="dropdown-item" aria-current="true">
                    <div class="row g-0 align-items-center">
                      <div class="col-3">
                        <img src="./assets/img/profile/profile-img-1.jpg" width="55" height="55" class="img-fluid rounded-circle" alt="Ethan Leo"/>
                      </div>
                      <div class="col-9">
                        <div class="ps-3">
                          <div class="text-secondary mt-1 fs-7">Premium Account</div>
                          <div class="text-secondary mt-1 fs-7">leo@example.com</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li>
                  <a class="dropdown-item" href="pages-profile.html">
                    <span>
                      <i class="bi bi-person-fill me-2"></i>
                      <span class="fs-7">View Profile</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#!">
                    <span>
                      <i class="bi bi-bell-fill me-2"></i>
                      <span class="fs-7">Notifications</span>
                    </span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li>
                  <a class="dropdown-item" href="pages-profile.html">
                    <span>
                      <i class="bi bi-gear-fill me-2"></i>
                      <span class="fs-7">Settings & Privacy</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="pages-faqs.html">
                    <span>
                      <i class="bi bi-question-circle-fill me-2"></i>
                      <span class="fs-7">Help Center</span>
                    </span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li>
                  <a class="dropdown-item text-center" href="auth-logout.html">
                    <span>
                      <span class="fs-7">Log Out</span>
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
    </div>
  )
}

export default HeaderForAdmin