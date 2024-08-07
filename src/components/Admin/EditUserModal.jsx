import React, { useState } from 'react';
import './Admin.css'; // Make sure to import your CSS file for styling

const EditUserModal = ({ onClose, onSave, user }) => {
  const [formData, setFormData] = useState({ ...user });

  const officeRoles = ['Admin', 'User', 'Viewer']; // Define the list of office roles

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Call onSave function with formData
    onClose();
  };

  return (
    <div className="edit-user-modal">
      <div className="edit-user-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <label className="edit-user-label" htmlFor="username">Username:</label>
          <input
            className='edit-user-input'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label className="edit-user-label" htmlFor="email">Email:</label>
          <input
            className='edit-user-input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="edit-user-label" htmlFor="office">Office:</label>
          <input
            className='edit-user-input'
            type="text"
            id="office"
            name="office"
            value={formData.office}
            onChange={handleChange}
          />
          <label className="edit-user-label" htmlFor="officeRole">Role:</label>
          <select
            className='edit-user-select'
            id="officeRole"
            name="officeRole"
            value={formData.officeRole}
            onChange={handleChange}
          >
            {officeRoles.map((role, index) => (
              <option key={index} value={role}>{role}</option>
            ))}
          </select>
          
          <button className="edit-user-btn" type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
