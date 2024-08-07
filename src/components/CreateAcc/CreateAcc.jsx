import React, { useState } from 'react';
import psaLogo from '../../assets/psalogo.png';
import './CreateAcc.css'; // Adjust the file name here
import { Link } from 'react-router-dom';

function CreateAcc() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        location: 'Abra'
    });

    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear the error message for the current input field when the user starts typing
        setErrors({ ...errors, [name]: '' });
    };

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form before submission
        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
            // Perform form submission logic here
        } else {
            console.log('Form has validation errors. Please fix them.');
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        // Username validation
        if (!formData.username) {
            newErrors.username = 'Username is required';
            valid = false;
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required';
            valid = false;
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    return (
        <div className="admin-createacc-container">
            <div className="admin-createacc-left-section"> 
                <img src={psaLogo} alt="Logo" className="admin-create-acc-logo" />
            </div>
            <div className="admin-createacc-right-section">
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
