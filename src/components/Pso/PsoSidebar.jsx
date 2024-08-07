import React, { useState } from 'react';
import './Pso.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function PsoSidebar({ onTabClick }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`pso-sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
      
      <ul className="pso-sidebar-nav-links">

        <li className="pso-sidebar-nav-link" onClick={() => onTabClick('documents')}>
          <FontAwesomeIcon icon={faFileAlt} /> Documents
        </li>


        <button className="pso-sidebar-toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        
      </ul>
    </div>
  );
}
export default PsoSidebar;
