import React, { useState } from 'react';
import './Admin.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function AdminSidebar({ onTabClick }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleMouseEnter = () => {
    setSidebarVisible(true);
  };

  const handleMouseLeave = () => {
    setSidebarVisible(false);
  };

  return (
    <div
      className={`admin-sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="admin-sidebar-links">
        <li
          className="admin-sidebar-link"
          onClick={() => onTabClick('users')}
          onKeyDown={(e) => e.key === 'Enter' && onTabClick('users')}
          role="button"
          tabIndex="0"
        >
          <FontAwesomeIcon icon={faUsers} /> Users
        </li>
        <li
          className="admin-sidebar-link"
          onClick={() => onTabClick('documents')}
          onKeyDown={(e) => e.key === 'Enter' && onTabClick('documents')}
          role="button"
          tabIndex="0"
        >
          <FontAwesomeIcon icon={faFileAlt} /> Documents
        </li>
        {/* Uncomment if you have more sections */}
        {/* <li className="admin-sidebar-link" onClick={() => onTabClick('reports')}>
          <FontAwesomeIcon icon={faChartBar} /> Reports
        </li> */}
      </ul>

      <button className="admin-sidebar-toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    </div>
  );
}

export default AdminSidebar;
