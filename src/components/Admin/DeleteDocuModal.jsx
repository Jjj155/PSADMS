import React from 'react';
import './Admin.css'; // Import CSS file for styling

function DeleteUserModal({ onClose, onDeleteUser, username }) {
  const handleDelete = () => {
    onDeleteUser();
    onClose();
  };

  return (
    <div className="delete-user-modal">
      <div className="delete-user-modal-content">
        <h2>Delete User</h2>
        <p>Are you sure you want to delete user {username}?</p>
        <div className="delete-user-modal-actions">
          <button className='delete-modal-btn' onClick={handleDelete}>Delete</button>
          <button className='cancel-modal-btn' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteUserModal;
