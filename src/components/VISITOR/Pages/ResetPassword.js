import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoginImage from '../../../assests/imges/pexels-photo-12205370.jpeg';
import Logo from '../../../assests/imges/logo2.png';
import '../css/Login.css';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleResetPassword = async () => {
    if (!password) {
      setPasswordError('Please enter a new password.');
      return;
    }

    try {
      const response = await axios.post('/api/v1/auth/resetPassword', { password });
      console.log('Password reset successful:', response);
      alert('Password reset successfully!');
      window.location.href = "./Login";
    } catch (error) {
      console.error('Error resetting password:', error);
      setPasswordError('Error resetting password. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }} >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={LoginImage} alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem", width: "100%", height: "100%" }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <img src={Logo} alt="Logo" className="img-fluid" style={{ width: "70px", height: "70px", marginRight: "10px" }} />
                          <span className="h1 fw-bold mb-0">Reset Password</span>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="form2Example17" className="form-control form-control-lg" name="password" value={password} onChange={handleInputChange} placeholder="New Password" />
                          <label className="form-label" htmlFor="form2Example17">New Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button" onClick={handleResetPassword}>Reset Password</button>
                        </div>
                        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                        <Link to="/login" className="small text-muted">Back to Login</Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResetPassword;
