// Navbar.js

import { Link } from 'react-router-dom';
import './Admin.css'; // Import CSS file for styling
import psaLogo from '../../assets/psalogo.png';
import Logout from '../../components/Logout/Logout';

function AdminNav() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className='navbar-brand'>
          <img src={psaLogo} alt="logonipsa" className='brand-logo' />
          <h2 className='brand-title'>ADMIN DASHBOARD</h2>
        </div>
      </Link>
      
          <Logout />
 
    </nav>
  );
}

export default AdminNav;