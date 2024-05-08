// !function(){var t={515:function(){!function(){const t={init(){(()=>{"use strict";const t=document.querySelectorAll(".needs-validation");Array.from(t).forEach((t=>{t.addEventListener("submit",(n=>{t.checkValidity()||(n.preventDefault(),n.stopPropagation()),t.classList.add("was-validated")}),!1)}))})()}};function n(){t.init()}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n(),window.addEventListener("load",(function(){}),!1)}()}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";e(515)}()}();



import React, { useState } from 'react';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      // Handle form submission (e.g., send data to the server)
      console.log('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">Email address</label>
        <input
          type="email"
          className={`form-control ${isEmailValid ? 'is-valid' : 'is-invalid'}`}
          id="emailInput"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {!isEmailValid && (
          <div className="invalid-feedback">
            Please provide a valid email address.
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default MyForm;

