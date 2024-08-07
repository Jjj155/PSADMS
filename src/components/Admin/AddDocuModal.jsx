import React, { useState } from 'react';
import axios from 'axios';

function AddDocuModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    dateReceivedByReceiptAndControlClerk: '',
    controlNumber: '',
    controlledBy: '',
    dateControlled: '',
    petitionRegistryNumber: '',
    documentOwner: '',
    dateOfEvent: '',
    placeOfEvent: '',
    dateTransmittedToRegionalOffice: '',
    dateReceivedByClerk: '',
    dateReceivedByScreener: '',
    screenedBy: '',
    dateScreened: '',
    transactionNumber: '',
    dateReceivedByAnnotator: '',
    annotatedBy: '',
    dateAnnotated: '',
    dateReceivedByApprover: '',
    approvedBy: '',
    dateApproved: '',
    reverification: '',
    dateRVTagged: '',
    rvTaggedBy: '',
    dateRVResolved: '',
    dateFeedbackIssued: '',
    dateInternalErrorSent: '',
    dateInternalErrorResolved: '',
    remarks: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

  

    try {
      // Post form data to backend
      const response = await axios.post('http://localhost:3001/admin/documents', formData);
      
      // Check response
      if (response.data.success) {
        onSave(formData); // Call parent onSave function
        onClose();        // Close modal
      } else {
        console.error('Error saving document:', response.data.error);
        alert('Error saving document: ' + response.data.error);
      }
    } catch (error) {
      console.error('Error saving document:', error.response ? error.response.data : error.message);
      alert('Error saving document: ' + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <div className="docu-form-container">
      <div className="admin-docu-content">
        <span className="admin-docu-close" onClick={onClose}>&times;</span>
        <div className='add-docu-head'>
          <h2>ADD DOCUMENT</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="docu-form-scrollable">
            <div className="docu-form-group">
              <div className="docu-form-group">
                <div className="docu-form-group-left">
                  <label htmlFor="dateReceivedByReceiptAndControlClerk" className='docu-label'>Date Received by Receipt and Control Clerk (DeCAP Unit):</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateReceivedByReceiptAndControlClerk"
                    name="dateReceivedByReceiptAndControlClerk"
                    value={formData.dateReceivedByReceiptAndControlClerk}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateReceivedByScreener" className='docu-label'>Date Received by Screener:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateReceivedByScreener"
                    name="dateReceivedByScreener"
                    value={formData.dateReceivedByScreener}
                    onChange={handleChange}
                  />
                  <label htmlFor="screenedBy" className='docu-label'>Screened By:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="screenedBy"
                    name="screenedBy"
                    value={formData.screenedBy}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateScreened" className='docu-label'>Date Screened:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateScreened"
                    name="dateScreened"
                    value={formData.dateScreened}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateTransmittedToRegionalOffice" className='docu-label'>Date Transmitted To Regional Office Screened:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateTransmittedToRegionalOffice"
                    name="dateTransmittedToRegionalOffice"
                    value={formData.dateTransmittedToRegionalOffice}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateControlled" className='docu-label'>Date Controlled:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateControlled"
                    name="dateControlled"
                    value={formData.dateControlled}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="docu-form-group">
                <div className="docu-form-group-left">
                  <label htmlFor="transactionNumber" className='docu-label'>Transaction Number</label>
                  <input className='add-docu-input'
                    type="text"
                    id="transactionNumber"
                    name="transactionNumber"
                    value={formData.transactionNumber}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateReceivedByAnnotator" className='docu-label'>Date Received by Annotator</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateReceivedByAnnotator"
                    name="dateReceivedByAnnotator"
                    value={formData.dateReceivedByAnnotator}
                    onChange={handleChange}
                  />
                  <label htmlFor="annotatedBy" className='docu-label'>Annotated by:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="annotatedBy"
                    name="annotatedBy"
                    value={formData.annotatedBy}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateAnnotated" className='docu-label'>Date Annotated:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateAnnotated"
                    name="dateAnnotated"
                    value={formData.dateAnnotated}
                    onChange={handleChange}
                  />
                  <label htmlFor="placeOfEvent" className='docu-label'>Place Of Event:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="placeOfEvent"
                    name="placeOfEvent"
                    value={formData.placeOfEvent}
                    onChange={handleChange}
                  />
                  <label htmlFor="petitionRegistryNumber" className='docu-label'>Petition Registry Number:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="petitionRegistryNumber"
                    name="petitionRegistryNumber"
                    value={formData.petitionRegistryNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="docu-form-group">
                <div className="docu-form-group-left">
                  <label htmlFor="dateReceivedByApprover" className='docu-label'>Date Received by Approver:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateReceivedByApprover"
                    name="dateReceivedByApprover"
                    value={formData.dateReceivedByApprover}
                    onChange={handleChange}
                  />
                  <label htmlFor="approvedBy" className='docu-label'>Approved By:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="approvedBy"
                    name="approvedBy"
                    value={formData.approvedBy}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateApproved" className='docu-label'>Date Approved:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateApproved"
                    name="dateApproved"
                    value={formData.dateApproved}
                    onChange={handleChange}
                  />
                  <label htmlFor="documentOwner" className='docu-label'>Document Owner:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="documentOwner"
                    name="documentOwner"
                    value={formData.documentOwner}
                    onChange={handleChange}
                  />
                  <label htmlFor="controlledBy" className='docu-label'>Controlled By:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="controlledBy"
                    name="controlledBy"
                    value={formData.controlledBy}
                    onChange={handleChange}
                  />
                  <label htmlFor="controlNumber" className='docu-label'>Control Number:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="controlNumber"
                    name="controlNumber"
                    value={formData.controlNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="docu-form-group">
                <div className="docu-form-group-left">
                  <label htmlFor="reverification" className='docu-label'>Reverification (RV) / Electronic Endorsement (EE) Case:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="reverification"
                    name="reverification"
                    value={formData.reverification}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateRVTagged" className='docu-label'>Date RV Tagged / EE:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateRVTagged"
                    name="dateRVTagged"
                    value={formData.dateRVTagged}
                    onChange={handleChange}
                  />
                  <label htmlFor="rvTaggedBy" className='docu-label'>RV Tagged By:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="rvTaggedBy"
                    name="rvTaggedBy"
                    value={formData.rvTaggedBy}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateRVResolved" className='docu-label'>Date RV/EE was Resolved:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateRVResolved"
                    name="dateRVResolved"
                    value={formData.dateRVResolved}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateOfEvent" className='docu-label'>Date Of Event:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateOfEvent"
                    name="dateOfEvent"
                    value={formData.dateOfEvent}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="docu-form-group">
                <div className="docu-form-group-left">
                  <label htmlFor="dateReceivedByClerk" className='docu-label'>Date Received By Clerk:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateReceivedByClerk"
                    name="dateReceivedByClerk"
                    value={formData.dateReceivedByClerk}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateFeedbackIssued" className='docu-label'>Date Feedback was Issued:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateFeedbackIssued"
                    name="dateFeedbackIssued"
                    value={formData.dateFeedbackIssued}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateInternalErrorSent" className='docu-label'>Date Internal Error was Sent to the Concerned Person / Office:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateInternalErrorSent"
                    name="dateInternalErrorSent"
                    value={formData.dateInternalErrorSent}
                    onChange={handleChange}
                  />
                  <label htmlFor="dateInternalErrorResolved" className='docu-label'>Date Internal Error was Resolved:</label>
                  <input className='add-docu-input'
                    type="date"
                    id="dateInternalErrorResolved"
                    name="dateInternalErrorResolved"
                    value={formData.dateInternalErrorResolved}
                    onChange={handleChange}
                  />
                  <label htmlFor="remarks" className='docu-label'>Remarks / Comments / Feedbacks:</label>
                  <input className='add-docu-input'
                    type="text"
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
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

export default AddDocuModal;
