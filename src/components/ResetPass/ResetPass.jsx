import React, { useState } from 'react';
import psaLogo from '../../assets/psalogo.png';
import './ResetPass.css';
import { Link } from 'react-router-dom';
function ResetPass() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    location: 'Abra' // Default location
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log(formData);
    // Assuming you have a function to handle form submission, you can call it here
  };

  return (
    <div className="reset-pass-container">
      <div className="reset-pass-left-section"> 
        {/* Logo */}
        <img src={psaLogo} alt="Logo" className="reset-pass-logo" />
      </div>

      <div className="reset-pass-right-section">
        {/* create new acc Form */}
        <form className="reset-pass-form" onSubmit={handleSubmit}>
          <h2>Reset Password</h2>
          
          <label>New Password:</label>
          <input className='reset-pass-input'
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <label>Confirm Password:</label>
          <input className='reset-pass-input'
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />

          <div className="reset-pass-checkbox-container">
            <input className='reset-pass-input'
              type="checkbox"
              checked={showPassword}
              onChange={handleCheckboxChange}
            />
            </div>
            <label className="reset-pass-checkbox-label">Show Password</label>
          

        <Link to='/'>
          <button type="submit" className="reset-pass-submit-btn">
            Submit
            </button>
        </Link>
        </form>
      </div>
    </div>
  );
}

export default ResetPass;