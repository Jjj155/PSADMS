import React, {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Pso.css'; // Import CSS file for styling
import psaLogo from '../../assets/psalogo.png';

function Login () {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div className="pso-login-container">
            <div className="pso-left-section">
                {/* Logo */}
                <img src={psaLogo} alt="Logo" className="pso-logo" data-aos="zoom-in-down" />
            </div>
            <div className="pso-right-section">
                {/* Login Form */}
                <form className="pso-login-form" data-aos="zoom-in-down">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />

                    <Link to="/pso">
                    <button className='pso-login-form-btn' type="submit">Login</button>
                    </Link>

                    <div className="pso-form-links">
                        <a href="/password">Forgot Password</a>
                        <span>|</span>
                        <a href="/createacc">Create New Account</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;