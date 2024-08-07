import React, { useState } from 'react';
import psaLogo from '../../assets/psalogo.png';
import './AdminCreateAcc.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CreateAcc() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    location: '' // Default location
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.username) {
      errors.username = 'Username is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:3001/admin/admin_users', formData);
        console.log('Registration successful:', response.data);
        // Optionally, redirect or show a success message
      } catch (error) {
        console.error('Error registering user:', error);
        // Handle error: show error message or redirect to error page
      }
    }
  };

  return (
    <div className="admin-createacc-container">
      <div className="admin-createacc-left-section">
        {/* Logo */}
        <img src={psaLogo} alt="Logo" className="admin-create-acc-logo" />
      </div>

      <div className="admin-createacc-right-section">
        {/* Create new acc Form */}
        <form className="create-new-acc-form" onSubmit={handleSubmit}>
          <h2>Create New Account</h2>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <div className="error-message">{errors.email}</div>}

          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <div className="error-message">{errors.username}</div>}

          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <div className="error-message">{errors.password}</div>}

          <label>Confirm Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}

          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handleCheckboxChange}
            />
            <label className="checkbox-label">Show Password</label>
          </div>

          <button type="submit" className="create-acc-btn">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default CreateAcc;
