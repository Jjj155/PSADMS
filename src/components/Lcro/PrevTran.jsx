import React from 'react';
import './LcroResult.css';
import { Link } from 'react-router-dom'
import psaLogo from '../../assets/psalogo.png';


const MyTable = () => {
  return (

  <div>
  <div className='docu-title'>
  <div className='docu-header'>
    <img src={psaLogo} alt="Logo" className="docu-logo" />
    <h1>Welcome to PSA</h1>
  </div>
    <h2>PREVIOUS RESULT</h2>
  </div>

  <div className="result-table-container">
    <table className="result-table">
      <thead>

        <tr>
          <th>Control No.</th>
          <td>0230-21334</td>
        </tr>

        <tr>
          <th>Document Type</th>
          <td>Marriage Certificate</td>
        </tr>

        <tr>
          <th>Document Owner</th>
          <td>Johnny Seen</td>
        </tr>

        <tr>
          <th>Event Date</th>
          <td>2020-4-23</td>
        </tr>

        <tr>
          <th>Status</th>
          <td>Data not found</td>
        </tr>

        <tr>
          <th>Date Completed</th>
          <td>2025-6-15</td>
        </tr>

        <tr>
          <th>Problem</th>
          <td>Data not found</td>
        </tr>

        <tr>
          <th>Action Needed</th>
          <td>None</td>
        </tr>

      </thead>
    </table>
  <div className='docu-back'>

  <Link to="/lcroresult">
    <button type="submit"> BACK </button>
  </Link>

  </div>
  </div>
  </div>
  );
};

export default MyTable;