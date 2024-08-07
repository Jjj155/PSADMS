import React from 'react';
import PropTypes from 'prop-types';
import './Admin.css'; // Import CSS file for styling

function DeleteUserModal({ onClose, onDelete, user }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/admin/${user.id.toString()}`, { // Convert to string
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      onDelete(user.id.toString()); // Ensure onDelete gets the string id
    } catch (error) {
      console.error('Error deleting user:', error);
      // Optionally add user feedback here, e.g., display an error message
    } finally {
      onClose();
    }
  };

  return (
    <div className="delete-user-modal">
      <div className="delete-user-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Delete User</h2>
        <p>Are you sure you want to delete the user "{user.username}"?</p>
        <div className="delete-user-modal-actions">
          <button className='delete-modal-btn' onClick={handleDelete}>Delete</button>
          <button className='cancel-modal-btn' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

DeleteUserModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Allow both string and number
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeleteUserModal;
