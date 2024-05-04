
import React from 'react';
import { Link } from 'react-router-dom';

function Buttons() {
  return (
    <div>
      <Link to="/login"> {/* Link to the login page */}
        <button className="btn btn-outline-warning "style={{width:'100px',height:'50px'}}>Login</button>
      </Link>
      <Link to="/register"> {/* Link to the register page */}
        <button className="btn btn-outline-light "style={{width:'200px',height:'50px'}}>Register now</button>
      </Link>
    </div>
  );
}

export default Buttons;
