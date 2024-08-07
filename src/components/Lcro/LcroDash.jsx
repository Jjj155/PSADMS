import React, { useState } from 'react';
import {Link}  from 'react-router-dom';
import './LcroDash.css';
import psaLogo from '../../assets/psalogo.png';




  const MyForm = () => {
// State to manage form data
  const [formData, setFormData] = useState({
    cnumber: '',
    fname: '',
    lname: '',
});

// Handle input changes
  const handleInputChange = (e) => {
  const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
  });
};

// Handle form submission
  const handleSubmit = (e) => {
      e.preventDefault();
// You can handle form submission logic here
  console.log('Form submitted:', formData);
};

return (    
  <>
          
  <div className='dash-docu-container'>
  <div className='dash-left-section'>
    <img src={psaLogo} alt='logo'></img>
  </div>

  <div className='dash-right-section'>
    <form className='dash-form' onSubmit={handleSubmit}>
  <div className='cnumber'>
    <h1>Welcome to PSA</h1>
    <h2>Please supply either Control Number or Name</h2>
      <label>
          Control Number:
        <input
            type="text"
            name="cnumber"
            placeholder='(Optional)'
            value={formData.cnumber}
            onChange={handleInputChange}
        />
      </label>
  </div>

  <div className='fname'>
      <label>
          First Name:
        <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleInputChange}
        />
      </label>
  </div>

  <div className='lname'>
      <label>
          Last Name:
        <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleInputChange}
        />
      </label>
  </div>

    <Link to = '/lcroresult'>
      <button type="submit" className='lcro-submit-button'>SEARCH</button>
    </Link>
    <div className='homepagebtn'>
      
    <a href="/">Back</a>
   </div>
    
    
  </form>
  </div>
  </div>
        </>
  );
};

export default MyForm