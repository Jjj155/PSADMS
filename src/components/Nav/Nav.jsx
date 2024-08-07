// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import CSS file for styling
import psaLogo from '../../assets/psalogo.png';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  

  return (
    <nav className="navbar">
      <Link to="/">
        <div className='navbar-brand'>
          <img src={psaLogo} alt="logonipsa" className='brand-logo' />
          <h2 className='brand-title'>DOCUMENT OWNER</h2>
        </div>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <i className={`fas fa-home ${clicked ? 'clicked' : ''}`} onClick={handleClick} style={{ color: 'white', fontSize: '30px', marginRight: '50px', padding: '10px 0 0 50px' }}></i> {/* Home icon */}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
