import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import './Admin.css'; // Import CSS file for styling
import psaLogo from '../../assets/psalogo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-left-section">
                {/* Logo */}
                <img src={psaLogo} alt="Logo" className="admin-login-logo" />
            </div>

            <div className="admin-login-right-section">
                {/* Login Form */}
                <form className="admin-login-form">
                    <h2>ADMIN</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="admin-login-password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            onClick={togglePasswordVisibility}
                            className="admin-login-password-toggle-icon"
                        />
                    </div>
                    <Link to="/admin">
                        <button type="submit" className="admin-login-btn">Login</button>
                    </Link>
                    <div className="admin-login-form-links">
                        <a href="/password">Forgot Password</a>
                        <span>|</span>
                        <a href="/admincreateacc">Create New Account</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;