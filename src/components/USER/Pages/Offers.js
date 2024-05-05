

import React, { useState } from 'react';
import axios from 'axios';
import Background from '../../../assests/imges/background.jpg';


const Offers = () => {
  const [promoCodeError, setPromoCodeError] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [paymentData, setPaymentData] = useState({
    nameOnCard: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'promoCode') {
      setPromoCode(value);
      setPromoCodeError('');
    } else {
      setPaymentData({ ...paymentData, [name]: value });
      setPaymentError('');
    }
  };
  
  const handlePromoCodeSubmit = async () => {
    if (!promoCode) {
      setPromoCodeError('Please fill promo code.');
      return;
    }
  
    try {
      const response = await axios.get(`/api/v1/coupons/${promoCode}`);
      
      if (response.status >= 200 && response.status < 300) {
        alert('PromoCode successful!');
        // Handle further actions upon successful promo code verification
      } else {
        const errorMessage = response.data.msg || 'An error occurred while sending the promoCode.';
        setPromoCodeError(errorMessage);
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.msg || 'An error occurred while sending the promoCode.';
        setPromoCodeError(errorMessage);
      } else if (error.request) {
        setPromoCodeError('No response received from the server.');
      } else {
        setPromoCodeError('An error occurred while processing the request.');
      }
    }

//////////////////////////////////////////
    // try {
    //  // const userData = { promoCode};
    //   const response = await axios.get('/api/v1/coupons/:name', {promoCode});
    
    //   if (response.status >= 200 && response.status < 300) {
    //     alert('PromoCode successful!');
    //    // window.location.replace('./HomeForUser'); // Use replace instead of href
    //   } else {
    //     const errorMessage = response.data.error || 'An error occurred while send promoCode.';
    //     setPromoCodeError(errorMessage);
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     const errorMessage = error.response.data.error || 'An error occurred while send promoCode.';
    //     setPromoCodeError(errorMessage);
    //   } else if (error.request) {
    //     setPromoCodeError('No response received from the server.');
    //   } else {
    //     setPromoCodeError('An error occurred while processing the request.');
    //   }
    // }
  
    ///////////////////////////
    // try {
    //  // const userData = { email, password };
    //   const response = await axios.get('/api/v1/coupons/:name', { promoCode });
    //   // Handle response accordingly
    //   console.log('PromoCode response:', response.data);
    //   alert('PromoCode successful!');
    // } catch (error) {
    //   console.error('Error adding promo code:', error);
    //   setPromoCodeError('An error occurred while adding promo code.');
    // }
  };

  const handlePaymentSubmit = async () => {
    const { nameOnCard, cardNumber, expiration, cvv } = paymentData;
    if (!nameOnCard || !cardNumber || !expiration || !cvv) {
      setPaymentError('Please fill all payment fields.');
      return;
    }
    ///////////////////////////
    try {
      //const userData = { promoCode};
      const response = await axios.post('/api/v1/payment/choose', paymentData)
    
      if (response.status >= 200 && response.status < 300) {
        alert('payment successful!');
       // window.location.replace('./HomeForUser'); // Use replace instead of href
      } else {
        const errorMessage = response.data.error || 'An error occurred while payment.';
        setPromoCodeError(errorMessage);
      } 
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.error || 'An error occurred while payment.';
        setPromoCodeError(errorMessage);
      } else if (error.request) {
        setPromoCodeError('No response received from the server.');
      } else {
        setPromoCodeError('An error occurred while processing the request.');
      }
    }
  


    //////////////////////////
    // try {
    //   const response = await axios.post('/api/v1/payment/choose', paymentData);
    //   // Handle response accordingly
    //   console.log('Payment response:', response.data);
    //   alert('Payment successful!');
    // } catch (error) {
    //   console.error('Error processing payment:', error);
    //   setPaymentError('An error occurred while processing payment.');
    // }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ backgroundImage: `url("${Background}")`, height: "300px", backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* Background image */}
      </div>
      <section className="offers-section my-4 ">
        <div className="jumbotron jumbotron-bg mx-4 mx-md-5 shadow-5-strong" style={{ borderRadius: '20px' }}>
          <div className="container" style={{ marginTop: "-100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(10px)", borderRadius: '20px' }}>
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span className="text-warning">for your business</span>
                </h1>
                <p className="text-color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card" style={{ borderRadius: '20px' }}>
                  <div className="card-body py-5 px-md-5">
                    <form>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example3" className="form-control" name="promoCode" value={promoCode} onChange={handleInputChange} />
                        <label className="form-label" htmlFor="form3Example3">Promo Code</label>
                      </div>
                      <button type="button" className="btn btn-dark btn-lg btn-block mb-4" onClick={handlePromoCodeSubmit}>
                        Apply Promo Code
                      </button>
                      {promoCodeError && <p style={{ color: 'red' }}>{promoCodeError}</p>}
                      <hr className="my-4" />
                      <hr className="my-4" />
                      <h5 className="mb-4">Payment</h5>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm3" checked />
                        <label className="form-check-label" htmlFor="checkoutForm3">
                          Credit card
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm4" />
                        <label className="form-check-label" htmlFor="checkoutForm4">
                          cash
                        </label>
                      </div>
                      <div className="form-check mb-4">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm5" />
                        <label className="form-check-label" htmlFor="checkoutForm5">
                          visa
                        </label>
                      </div>
                      <div className="row mb-4">
                        <div className="col">
                          <div className="form-outline">
                            <input type="text" id="formNameOnCard" className="form-control" name="nameOnCard" value={paymentData.nameOnCard} onChange={handleInputChange} />
                            <label className="form-label" htmlFor="formNameOnCard">Name on card</label>
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <input type="text" id="formCardNumber" className="form-control" name="cardNumber" value={paymentData.cardNumber} onChange={handleInputChange} />
                            <label className="form-label" htmlFor="formCardNumber">Credit card number</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-3">
                          <div className="form-outline">
                            <input type="text" id="formExpiration" className="form-control" name="expiration" value={paymentData.expiration} onChange={handleInputChange} />
                            <label className="form-label" htmlFor="formExpiration">Expiration</label>
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-outline">
                            <input type="text" id="formCVV" className="form-control" name="cvv" value={paymentData.cvv}
                                          onChange={handleInputChange} />
                                                        <label className="form-label" htmlFor="formCVV">CVV</label>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <button type="button" className="btn btn-dark btn-lg btn-block" onClick={handlePaymentSubmit}>
                                                    Continue to checkout
                                                  </button>
                                                  {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
                                                </form>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              );
                            };
                            
                            export default Offers;
                            
                            
                           












// import React , { useState} from 'react';
// //import { fetchOffers } from'../apiService/apiService'
// // import Header from '../components/header/Header';
// // import Footer from '../components/footer/Footer';
// import Background from '../assests/imges/background.jpg'; 
// import '../css/Offers.css'
// import axios from 'axios';

// const Offers = () => { 
//   const [promoCodeError, setPromoCodeError] = useState('');
//   const [promoCode, setPromoCode] = useState('');
  
//   const handleInputChange = (e) =>  {
//     const { name, value } = e.target;
//     if (name === 'promoCode') {
//       setPromoCode(value);
//     } 
//   };
//   const handleLogin = async () => {
//     if (  !promoCode) {
//       alert('Please fill in all fields.');
//       return;
//     }
//     try {
//       const userData = { promoCode };
//       const response = await axios.post('http://localhost:8000/api/v1/auth/signup',userData);
//       //const response = await fetchOffers(userData);
//       console.log('FetchOffers response:', response);
//       // Check if login was successful
//       if (response.success) {
//         // Redirect to HomeForUser page upon successful login
//        // window.location.href = './HomeForUser';
//        alert('PromoCode successful!');
//       } else {
//         // Display error message
//         setPromoCodeError('Invalid promoCode');
       
//       }
//     } catch (error) {
//       console.error('Error promoCode:', error);
//       // Handle error
//       if (error.response && error.response.data.errorType === 'promoCode') {
//         setPromoCodeError('Invalid promoCode');
//       }  else {
//         setPromoCodeError('An error occurred while promoCode False');
//       }
//     }
//   };

  
 


//   return (
//     <div style={{ position: 'relative' }}>
//     <div style={{ backgroundImage: `url(${Background})`, height: "300px" ,backgroundSize: "cover", backgroundPosition: "center" }}>
//       {/* Background image */}
//     </div>
    

      
//       {/* Section: Design Block */}
//       <section className="offers-section my-4 " >
//         {/* Jumbotron */}
//         <div className="jumbotron jumbotron-bg mx-4 mx-md-5 shadow-5-strong  "  style={{ borderRadius: '20px' }}>
//           <div className="container "  style={{ marginTop: "-100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(10px)", borderRadius: '20px' }}>
//             <div className="row gx-lg-5 align-items-center">
//               <div className="col-lg-6 mb-5 mb-lg-0">
//                 <h1 className="my-5 display-3 fw-bold ls-tight">
//                   The best offer <br />
//                   <span className="text-warning">for your business</span>
//                 </h1>
//                 <p className="text-color">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Eveniet, itaque accusantium odio, soluta, corrupti aliquam
//                   quibusdam tempora at cupiditate quis eum maiores libero
//                   veritatis? Dicta facilis sint aliquid ipsum atque?
//                 </p>
//               </div>

//               <div className="col-lg-6 mb-5 mb-lg-0">
//                 <div className="card" style={{ borderRadius: '20px' }}>
//                   <div className="card-body py-5 px-md-5">
//                     <form>
                      
//                       {/* promo input */}
//                       <div className="form-outline mb-4">
//                         <input type="text" id="form3Example3" className="form-control" onChange={handleInputChange}/>
//                         <label className="form-label" htmlFor="form3Example3">promocode</label>
//                       </div>

                  
//                       {/* Submit button */}
//                       <button type="submit" className="btn btn-dark btn-lg  btn-block mb-4" onClick={handleLogin}>
//                         submit
//                       </button>

//                       <hr class="my-4" />
//                       <hr class="my-4" />

// <h5 class="mb-4">Payment</h5>

// <div class="form-check">
//   <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm3"
//     checked />
//   <label class="form-check-label" for="checkoutForm3">
//     Credit card
//   </label>
// </div>

// <div class="form-check">
//   <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm4" />
//   <label class="form-check-label" for="checkoutForm4">
//     Debit card
//   </label>
// </div>

// <div class="form-check mb-4">
//   <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm5" />
//   <label class="form-check-label" for="checkoutForm5">
//     Paypal
//   </label>
// </div>

// <div class="row mb-4">
//   <div class="col">
//     <div data-mdb-input-init class="form-outline">
//       <input type="text" id="formNameOnCard" class="form-control" />
//       <label class="form-label" for="formNameOnCard">Name on card</label>
//     </div>
//   </div>
//   <div class="col">
//     <div data-mdb-input-init class="form-outline">
//       <input type="text" id="formCardNumber" class="form-control" />
//       <label class="form-label" for="formCardNumber">Credit card number</label>
//     </div>
//   </div>
// </div>

// <div class="row mb-4">
//   <div class="col-3">
//     <div data-mdb-input-init class="form-outline">
//       <input type="text" id="formExpiration" class="form-control" />
//       <label class="form-label" for="formExpiration">Expiration</label>
//     </div>
//   </div>
//   <div class="col-3">
//     <div data-mdb-input-init class="form-outline">
//       <input type="text" id="formCVV" class="form-control" />
//       <label class="form-label" for="formCVV">CVV</label>
//     </div>
//   </div>
// </div>

// <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="submit">
//   Continue to checkout
// </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Jumbotron */}
//       </section>
//       {/* Section: Design Block */}
      
//     </div>
//   );
// };

// export default Offers;