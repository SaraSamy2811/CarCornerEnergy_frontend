import React from 'react';
import {  BsSearch, BsJustify, } from 'react-icons/bs';

function HeaderForAdmin({ OpenSidebar, onLogout }) {
  const iconStyle = { color: 'white' }; // Define inline style for icons

  const handleLogout = () => {
    // Perform logout actions here
    // For example: clear local storage, redirect to login page, etc.
    onLogout();
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} style={iconStyle} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon'  />
      </div>
      <div className='header-right'>
        
        
        <button type="button" className="btn btn-warning me-3" onClick={handleLogout}>
                                Logout
                            </button>
      </div>
    </header>
  );
}

export default HeaderForAdmin;
