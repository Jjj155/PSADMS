// ForgotPassword.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Password.css';
import psaLogo from '../../assets/psalogo.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Reset error message
    setError('');

    // Send the reset password email to the server
    // (You can replace this with your own logic)
    console.log('Sending password reset email to:', email);

    // Clear the email input field
    setEmail('');
  };

  return (


    <div className="forgot-pass-container ">
      <div className="forgot-pass-left-section">
        {/* Logo */}
        <img src={psaLogo} alt="Logo" className="forgot-pass-logo" />
      </div>

      <div className="forgot-pass-right-section">
        {/* Forgot Password Form */}
        <form className="forgot-pass-form" onSubmit={handleSubmit}>
          <h2>FORGOT PASSWORD</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <div className="forgot-pass-error-message">{error}</div>}

        <Link to='/resetpass'>
          <button type="submit" className="forgot-pass-submit-button">
            Submit
          </button>
        </Link>
          <div className='forgot-pass-form-links'>
            <a href='/'> Home </a>
            </div>

        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;