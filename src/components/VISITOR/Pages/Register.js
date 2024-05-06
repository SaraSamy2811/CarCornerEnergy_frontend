
import React,{ useState} from 'react'
//import { register } from '../apiService/apiService';
import backgroundImage from'../../../assests/imges/background.jpg'
//import { Link } from 'react-router-dom';
import '../css/Register.css'
import axios from 'axios';


function Register() {
  
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [phone, setPhone] = useState('');
  const [carType, setCarType] = useState('');
  const [role, setRole] = useState('');
  
  const [registrationError, setRegistrationError] = useState('');
  const [formCompleted, setFormCompleted] = useState(false);

  const handleInputChange = (e) =>  {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    else if (name === 'email') {
      setEmail(value);
    } 
    
    else if (name === 'phone') {
      setPhone(value);
    }
    else if (name === 'password') {
      setPassword(value);
    }
    
    else if (name === 'passwordConfirm') {
      setPasswordConfirm(value);
    } 
    else if (name === 'carType') {
      setCarType(value);
    }
    else if (name === 'role') {
      setRole(value);
    }
    
    setFormCompleted(name &&email  && password && passwordConfirm&& phone && carType);
  };


  const handleRegisteration = async () => {
   
    if (!name || !passwordConfirm || !email || !phone || !carType || !password) {
      alert('Please fill in all fields.');
      return;
    }
    if (password !== passwordConfirm) {
      setRegistrationError('Passwords do not match');
      return;
    }
/////////////////////////  new try  code
    try {
      const userData = { name, email, password, passwordConfirm, phone, carType };
      const response = await axios.post('/api/v1/auth/signup', userData);
    
      if (response.status >= 200 && response.status < 300) {
        alert('Registration successful!');
        window.location.replace('./USER'); // Use replace instead of href
         ////////////
        
      } else {
        const errorMessage = response.data.error || 'An error occurred while registering.';
        setRegistrationError(errorMessage);
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.error || 'An error occurred while registering.';
        setRegistrationError(errorMessage);
      } else if (error.request) {
        setRegistrationError('No response received from the server.');
      } else {
        setRegistrationError('An error occurred while processing the request.');
      }
    }
    //////////////////////////////////////////////
    
   };
   

  return (
    <div>
      <section className="text-center">
        <div className="p-5 bg-image" style={{ backgroundImage:`url(${backgroundImage})`, height: "300px" ,backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ marginTop: "-100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(10px)" }}>
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example5" className="form-control" name="name"value={name} onChange={handleInputChange} placeholder="Your Name"/>
                        <label className="form-label" htmlFor="form3Example1">Your name</label>
                      </div>
                    </div>
                    {/* <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example6" className="form-control" value={passwordConfirm}onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="passwordConfirm" />
                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                      </div>
                    </div> */}
                   
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example1" className="form-control"name="phone" value={phone} onChange={handleInputChange} placeholder="Your Phone"/>
                        <label className="form-label" htmlFor="form3Example1">Phone number</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" name="carType"value={carType} onChange={handleInputChange}  placeholder="Car Type"/>
                        <label className="form-label" htmlFor="form3Example2">Car type </label>
                      </div>
                    </div>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" name="email" value={email} onChange={handleInputChange} placeholder="Your Email" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" name="password"value={password} onChange={handleInputChange}  placeholder="Your Password"/>
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form3Example6" className="form-control" name="passwordConfirm"value={passwordConfirm} onChange={handleInputChange}  placeholder="Your Password"/>
                    <label className="form-label" htmlFor="form3Example6">passwordConfirm</label>
                  </div>
                  {/* <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example6" className="form-control" value={passwordConfirm}onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="passwordConfirm" />
                        <label className="form-label" htmlFor="form3Example2">passwordConfirm</label>
                      </div>
                    </div> */}
                  <div>
                    <button
                      type="button"
                      className="btn btn-dark btn-lg btn-block mb-4"
                      onClick={handleRegisteration}
                    >
                      Sign up
                    </button>
                    {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
                  </div>
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register






// import React,{ useState} from 'react'
// import { register } from '../apiService/apiService';

// // import Header from '../components/header/Header'
// // import Footer from '../components/footer/Footer'
// import backgroundImage from'../assests/imges/background.jpg'
// import { Link } from 'react-router-dom';
// import '../css/Register.css'



// function Register() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [carType, setCarType] = useState('');
//   const [password, setPassword] = useState('');
//   const [registrationError, setRegistrationError] = useState('');
//   const [formCompleted, setFormCompleted] = useState(false);
//  // const history = useHistory(); 

//   const handleInputChange = (e) =>  {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'phone') {
//       setPhone(value);
//     }
//     else if (name === 'firstName') {
//       setFirstName(value);
//     } else if (name === 'lastName') {
//       setLastName(value);
//     } 
//     else if (name === 'carType') {
//       setCarType(value);
//     }
//     else if (name === 'password') {
//       setPassword(value);
//     }
//     setFormCompleted(firstName && lastName && email && phone && carType && password);
//   };


//   const handleLogin = async () => {
   
//     if (!firstName || !lastName || !email || !phone || !carType || !password) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       const userData = { firstName, lastName, email, phone, carType, password };
//       const response = await register(userData);
//       if (response.success) {
//         alert('Registration successful!');
//         window.location.href= './HomeForUser';
//       } else {
//         setRegistrationError(response.error);
//       }
//     } catch (error) {
//       console.error('Error registering:', error);
//       setRegistrationError('An error occurred while registering.');
//     }

//     // try {
//     //   const userData = { firstName, lastName, email, phone, carType, password };
//     //   const response = await register(userData);
//     //   if (response.success) {
//     //     // توجيه المستخدم إلى الصفحة HomeForUser بعد التسجيل بنجاح
//     //     window.location.href= './HomeForUser';
//     //   } else {
//     //     // عرض رسالة خطأ بالتسجيل
//     //     setRegistrationError(response.error);
//     //   }
//     // } catch (error) {
//     //   console.error('Error registering:', error);
//     //   // عرض رسالة خطأ بالتسجيل
//     //   setRegistrationError('An error occurred while registering.');
//     // }


//     // try {
//     //   const userData = { email, password,phone, carType,firstName,lastName};
//     //   const response = await register(userData);
//     //   console.log('register response:', response);
//     //   // Here you can navigate to the home page or perform any other action
//     //   if (response.success) {
//     //     // إذا كانت العملية ناجحة، قم بتوجيه المستخدم إلى الصفحة الرئيسية
//     //    // history.push('/HomeForUser');
//     //    console.log('registration successful');

//     //   } else {
//     //     // إذا كان هناك خطأ في عملية تسجيل الدخول، يمكنك إظهار رسالة خطأ أو اتخاذ إجراء آخر هنا
//     //     console.error('registration failed:', response.error);
//     //     setRegistrationError(response.error);
//     //   }



//     // } catch (error) {
//     //   console.error('Error registering:', error);
//     //   setRegistrationError('An error occurred while registering.');
//     // }
//   };


//   return (
//     <div>

  
//     <section className="text-center">
//   {/* Background image */}
//   <div className="p-5 bg-image" style={{ backgroundImage:`url(${backgroundImage})`, height: "300px" ,backgroundSize: "cover", backgroundPosition: "center" }}></div>
//   {/* Background image */}

//   <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ marginTop: "-100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(10px)" }}>
//     <div className="card-body py-5 px-md-5">

//       <div className="row d-flex justify-content-center">
//         <div className="col-lg-8">
//           <h2 className="fw-bold mb-5">Sign up now</h2>
//           <form>
//             {/* 2 column grid layout with text inputs for the first and last names */}
//             <div className="row">
//               <div className="col-md-6 mb-4">
//                 <div data-mdb-input-init className="form-outline">
//                   <input type="text" id="form3Example1" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
//                   <label className="form-label" htmlFor="form3Example1">First name</label>
//                 </div>
//               </div>
//               <div className="col-md-6 mb-4">
//                 <div data-mdb-input-init className="form-outline">
//                   <input type="text" id="form3Example2" className="form-control" value={lastName}onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
//                   <label className="form-label" htmlFor="form3Example2">Last name</label>
//                 </div>
//               </div>
//             </div>
                
//             <div className="row">
//               <div className="col-md-6 mb-4">
//                 <div data-mdb-input-init className="form-outline">
//                   <input type="text" id="form3Example1" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your Phone"/>
//                   <label className="form-label" htmlFor="form3Example1">Phone number</label>
//                 </div>
//               </div>
//               <div className="col-md-6 mb-4">
//                 <div data-mdb-input-init className="form-outline">
//                   <input type="text" id="form3Example2" className="form-control" value={carType} onChange={(e) => setCarType(e.target.value)}  placeholder="Car Type"/>
//                   <label className="form-label" htmlFor="form3Example2">Car type </label>
//                 </div>
//               </div>
//             </div>

              
//             {/* Email input */}
//             <div data-mdb-input-init className="form-outline mb-4">
//               <input type="email" id="form3Example3" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
//               <label className="form-label" htmlFor="form3Example3">Email address</label>
//             </div>

//             {/* Password input */}
//             <div data-mdb-input-init className="form-outline mb-4">
//               <input type="password" id="form3Example4" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Your Password"/>
//               <label className="form-label" htmlFor="form3Example4">Password</label>
//             </div>

//             {/* Checkbox */}
//             <div className="form-check d-flex justify-content-center mb-4">
//               <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
//               <label className="form-check-label" htmlFor="form2Example33">
//                 Subscribe to our newsletter
//               </label>
//             </div>

//             {/* Submit button */}
            
            
//             <div>
//                     <button
//                       type="button"
//                       className="btn btn-dark btn-lg btn-block mb-4"
//                       onClick={handleLogin}
//                     >
//                       Sign up
//                     </button>
//                     {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
//                   </div>

//             {/* Register buttons */}
//             <div className="text-center">
//               <p>or sign up with:</p>
//               <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-facebook-f"></i>
//               </button>

//               <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-google"></i>
//               </button>

//               <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-twitter"></i>
//               </button>

//               <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
//                 <i className="fab fa-github"></i>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
    
//     </div>

//   )
// }

// export default Register





// import React, { useState } from 'react';
// import { register } from '../apiService/apiService';
// import { Link } from 'react-router-dom';
// import '../css/Register.css';
// import backgroundImage from '../assests/imges/background.jpg';

// function Register() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [carType, setCarType] = useState('');
//   const [password, setPassword] = useState('');
//   const [registrationError, setRegistrationError] = useState('');
//   const [formCompleted, setFormCompleted] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'phone') {
//       setPhone(value);
//     } else if (name === 'firstName') {
//       setFirstName(value);
//     } else if (name === 'lastName') {
//       setLastName(value);
//     } else if (name === 'carType') {
//       setCarType(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//     // Check if all fields are filled
//     setFormCompleted(firstName && lastName && email && phone && carType && password);
//   };

//   const handleRegister = async () => {
//     try {
//       const userData = { email, password, phone, carType, firstName, lastName };
//       const response = await register(userData);
//       console.log('register response:', response);
//       if (response.success) {
//         console.log('registration successful');
//       } else {
//         console.error('registration failed:', response.error);
//         setRegistrationError(response.error);
//       }
//     } catch (error) {
//       console.error('Error registering:', error);
//       setRegistrationError('An error occurred while registering.');
//     }
//   };

//   return (
//     <div>
//       <section className="text-center">
//         <div className="p-5 bg-image" style={{ backgroundImage: `url(${backgroundImage})`, height: "300px", backgroundSize: "cover", backgroundPosition: "center" }}></div>
//         <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ marginTop: "-100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(10px)" }}>
//           <div className="card-body py-5 px-md-5">
//             <div className="row d-flex justify-content-center">
//               <div className="col-lg-8">
//                 <h2 className="fw-bold mb-5">Sign up now</h2>
//                 <form>
//                   {/* Input fields */}
//                   {/* Email, password, etc. */}
//                   {/* Submit button */}
//                   <button type="button" className="btn btn-dark btn-lg btn-block mb-4" onClick={handleRegister} disabled={!formCompleted}>
//                     Sign up
//                   </button>
//                   {/* Error message */}
//                   {!formCompleted && <p style={{ color: 'red' }}>Please fill in all fields.</p>}
//                   {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
//                   {/* Link to home page */}
//                   {formCompleted && <Link to="/HomeForUser" className="btn btn-primary">
//                     Go to Home
//                   </Link>}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Register;


