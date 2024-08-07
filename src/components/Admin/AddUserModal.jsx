import React, { useState } from 'react';

function AddUserModal({ onClose, onSave }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [office, setOffice] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!office.trim()) {
      errors.office = 'Office is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave({ username, email, office, role });
      setUsername('');
      setEmail('');
      setOffice('');
      onClose();
    }
  };

  return (
    <div className="add-new-user">
      <div className="add-new-user-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add New User</h2>
        <form>
          <div className="form-group">
            <label className="add-new-user-label">Username:</label>
            <input
              className="admin-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>

          <div className="form-group">
            <label className="add-new-user-label">Email:</label>
            <input
              className="admin-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label className="add-new-user-label">Office:</label>
            <input
              className="admin-input"
              type="text"
              value={office}
              onChange={(e) => setOffice(e.target.value)}
            />
            {errors.office && <div className="error-message">{errors.office}</div>}
          </div>

          <div className="form-group">
            <label className="add-new-user-label">Role:</label>
            <select
              className="add-new-user-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>

          <button className="add-new-user-btn" type="button" onClick={handleSave}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUserModal;
