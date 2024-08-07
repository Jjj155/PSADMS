// AddDocuModal.js

import React, { useState } from 'react';

    function PsoAddDocuModal({ onClose, onSave }) {
    const [formData, setFormData] = useState({
      dateReceivedByClerk: '',
      controlNumber: '',
      controlledBy: '',
      dateControlled: '',
      placeOfEventOne:'',
      petitionRegistryNumber: '',
      documentOwner: '',
      dateOfEvent: '',
      placeOfEventTwo: '',
});

    const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
      ...formData,
      [name]: value
  });
};

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
      onClose();
};

  return (
    <div className="pso-docu-form-container">
      <div className="pso-docu-content">
        <span className="pso-docu-close" onClick={onClose}>&times;</span>
          <div className='pso-add-docu-head'>
          <h2>ADD DOCUMENT</h2>
          </div>

        <form onSubmit={handleSubmit}>
      <div className="docu-form-scrollable">
    <div className="docu-form-group">

             
{/* END OF FIRST COLUMN */}

    <div className="docu-form-group">
      <div className="docu-form-group-left">
        <label htmlFor="dateReceivedByClerk" className='docu-label'>Date Received by Receipt and Control Clerk (DeCAP Unit):</label>
          <input className='add-docu-input'
            type="text"
            id="dateReceivedByClerk"
            name="dateReceivedByClerk"
            value={formData.dateReceivedByClerk}
            onChange={handleChange}
          />

        <label htmlFor="dateReceivedByScreener" className='docu-label'>Control Number:</label>
          <input className='add-docu-input'
            type="text"
            id="controlNumber"
            name="controlNumber"
            value={formData.controlNumber}
            onChange={handleChange}
          />

        <label htmlFor="screenedBy" className='docu-label'>Controlled By:</label>
          <input className='add-docu-input'
            type="text"
            id="controlledBy"
            name="controlledBy"
            value={formData.controlledBy}
            onChange={handleChange}
          />

        <label htmlFor="dateScreened" className='docu-label'>Date Controlled:</label>
          <input className='add-docu-input'
            type="text"
            id="dateControlled"
            name="dateControlled"
            value={formData.dateControlled}
            onChange={handleChange}
          />

        <label htmlFor="dateScreened" className='docu-label'>Place of Event:</label>
          <input className='add-docu-input'
            type="text"
            id="placeOfEventOne"
            name="placeOfEventOne"
            value={formData.placeOfEventOne}
            onChange={handleChange}
          />
      </div>
    </div>


{/* END OF SECOND COLUMN */}

    <div className="docu-form-group">
      <div className="docu-form-group-left">
        <label htmlFor="transactionNumber" className='docu-label'>Petition Number / Registry Number</label>
          <input className='add-docu-input'
            type="text"
            id="petitionRegistryNumber"
            name="petitionRegistryNumber"
            value={formData.petitionRegistryNumber}
            onChange={handleChange}
          />

        <label htmlFor="dateReceivedByAnnotator" className='docu-label'>Document Owner</label>
          <input className='add-docu-input'
            type="text"
            id="documentOwner"
            name="documentOwner"
            value={formData.documentOwner}
            onChange={handleChange}
          />

        <label htmlFor="annotatedBy" className='docu-label'>Date of Event:</label>
          <input className='add-docu-input'
            type="text"
            id="dateOfEvent"
            name="dateOfEvent"
            value={formData.dateOfEvent}
            onChange={handleChange}
          />

        <label htmlFor="dateAnnotated" className='docu-label'>Place of Event:</label>
          <input className='add-docu-input'
            type="text"
            id="placeOfEventTwo"
            name="placeOfEventTwo"
            value={formData.placeOfEventTwo}
            onChange={handleChange}
          />
      </div>
    </div>
  </div>
</div>

        <button className='add-modal-btn' type="submit">Save</button>
      </form>
    </div>
  </div>

  );
}

export default PsoAddDocuModal;