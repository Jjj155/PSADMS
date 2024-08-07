import React from 'react';
import './Pso.css'; // Import CSS file for styling

function DeleteDocuModal({ onClose, onDelete, username }) {
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <div className="delete-docu-modal">
      <div className="delete-docu-modal-content">
        <h2>Delete Document</h2>
        <p>Are you sure you want to delete this document?</p>
        <div className="delete-docu-modal-actions">
          <button className='delete-modal-btn' onClick={handleDelete}>Delete</button>
          <button className='cancel-modal-btn' onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteDocuModal;