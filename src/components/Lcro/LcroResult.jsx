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
    <h2>RESULT</h2>

  <Link to="/prevtran">
    <button type="submit" className='prev-tran'> Previous Transaction </button>
  </Link>
        
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
          <td>2024-4-5</td>
        </tr>

        <tr>
          <th>Status</th>
          <td>Approved</td>
        </tr>

        <tr>
          <th>Date Completed</th>
          <td>2025-6-15</td>
        </tr>

        <tr>
          <th>Problem</th>
          <td>No issues</td>
        </tr>

        <tr>
          <th>Action Needed</th>
          <td>None</td>
        </tr>

      </thead>
    </table>
  <div className='docu-back'>

  <Link to="/LcroDash">
    <button type="submit"> BACK </button>
  </Link>

  </div>
  </div>
  </div>
  );
};

export default MyTable;