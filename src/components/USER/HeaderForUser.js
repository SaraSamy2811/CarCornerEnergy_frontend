import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assests/imges/logo.png";
// Initialization for ES Users
import { Collapse, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Collapse, Ripple });


function HeaderForUser() {
    return (
        <div>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Navbar brand */}
                    <Link className="navbar-brand me-2" to="/user">
                        <img
                            src={Logo} // Corrected logo reference
                            height="35"
                            alt="MDB Logo"
                            loading="lazy"
                            style={{ marginTop: '-1px' }}
                        />
                    </Link>

                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/map">Map</Link> {/* Link to Dashboard page */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/offers">Offers</Link> {/* Example of linking to another page */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/EnergyConsumptionPrediction">Model</Link> {/* Example of linking to yet another page */}
                            </li>
                        </ul>

                        <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-link px-3 me-2">
                                <Link to="/user/review">Review</Link> {/* Link to the review page */}
                            </button>

{/* Avatar */}
<div className="avatar me-3">
    <Link to="/user/profile">
        <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
            className="rounded-circle"
            height="32"
            alt="Avatar"
            loading="lazy"
        />
    </Link>
</div>

<button type="button" className="btn btn-warning me-3">
                                Logout
                            </button>
                            

        

                            
                        </div>
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </div>
    );
}

export default HeaderForUser;
