import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';
// import LoginImage from '../../../assets/images/pexels-photo-12205370.jpeg';
import LoginImage from '../../../assests/imges/pexels-photo-12205370.jpeg';
// import Logo from '../../../assets/images/logo2.png';
import Logo from '../../../assests/imges/logo2.png'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // إضافة حالة لكلمة المرور الجديدة
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(''); // إضافة حالة لخطأ كلمة المرور الجديدة

  const handleInputChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setEmailError('Please enter your email address.');
      return;
    }

    // إضافة التحقق من صحة كلمة المرور الجديدة
    if (!password) {
      setPasswordError('Please enter a new password.');
      return;
    }

    try {
      const response = await axios.post('/api/v1/auth/resetPassword', { email, password }); // إرسال كلمة المرور الجديدة مع البريد الإلكتروني
      // Handle successful password reset request
      console.log('Password reset request successful:', response);
      alert('Password reset email sent successfully!');
    } catch (error) {
      console.error('Error sending password reset request:', error);
      // Handle error sending password reset request
      setEmailError('Error sending password reset request. Please try again later.');
    }
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
                          <span className="h1 fw-bold mb-0">Welcome</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Forgot your password?</h5>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="email" id="form2Example17" className="form-control form-control-lg" name="email" value={email} onChange={handleInputChange} placeholder="Email address" />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>
                        {/* إضافة حقل لإدخال كلمة المرور الجديدة */}
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="form2Example18" className="form-control form-control-lg" name="password" value={password} onChange={handleInputChange} placeholder="New Password" />
                          <label className="form-label" htmlFor="form2Example18">New Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button" onClick={handleForgotPassword}>Reset Password</button>
                        </div>
                        <div>
                          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                        </div>
                        <Link to="/login" className="small text-muted">Back to Login</Link>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
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

export default Login;