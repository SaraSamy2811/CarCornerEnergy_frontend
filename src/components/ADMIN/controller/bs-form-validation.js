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

