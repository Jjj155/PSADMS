import React, { useState } from 'react';
import './Admin.css'; // Import CSS file for styling

  const EditDocuModal = ({ onClose, onSave, docu }) => {
  const [formData, setFormData] = useState({ ...docu });


  const handleChange = (e) => {
  const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
  }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
};

  return (
    <div className="edit-docu-modal">
      <div className="edit-docu-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
            <div className='edit-user-head'>
              <h2>Edit Documents</h2>
              </div>

            <form onSubmit={handleSubmit}>
            <div className="docu-form-scrollable">
            <div className="docu-form-group">

            
{/* END OF FIRST COLUMN */}

    <div className="edit-docu-form-group">
      <div className="edit-docu-form-group-left">
        <label htmlFor="dateReceivedByClerk" className='docu-label'>Date Received by Receipt and Control Clerk (DeCAP Unit):</label>
          <input className='add-docu-input'
            type="text"
            id="dateReceivedByClerk"
            name="dateReceivedByClerk"
            value={formData.dateReceivedByClerk}
            onChange={handleChange}
          />


            <label className="edit-docu-label" htmlFor="dateReceivedByScreener" >Date Received by Screener:</label>
              <input className='add-docu-input'
                type="text"
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
                type="text"
                id="dateScreened"
                name="dateScreened"
                value={formData.dateScreened}
                onChange={handleChange}
              />
            </div>
            </div>


    {/* END OF SECOND COLUMN */}

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

              <label htmlFor=" dateReceivedByAnnotator" className='docu-label'>Date Received by Annotator</label>
              <input className='add-docu-input'
                type="text"
                id="dateReceivedByAnnotator"
                name=" dateReceivedByAnnotator"
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
                type="text"
                id="dateAnnotated"
                name="dateAnnotated"
                value={formData.dateAnnotated}
                onChange={handleChange}
              />
            </div>
            </div>


            <div className="docu-form-group">
            <div className="docu-form-group-left">

              <label htmlFor="dateReceivedByApprover" className='docu-label'>Date Received by Approver:</label>
              <input className='add-docu-input'
                type="text"
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
                type="text"
                id="dateApproved"
                name="ddateApproved"
                value={formData.dateApproved}
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
                type="text"
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
                type="text"
                id="dateRVResolved"
                name="dateRVResolved"
                value={formData.dateRVResolved}
                onChange={handleChange}
              />
            </div>
            </div>

            <div className="docu-form-group">
            <div className="docu-form-group-left">
               
             
            <label htmlFor="dateFeedbackIssued" className='docu-label'>Date Feedback was Issued:</label>
              <input className='add-docu-input'
                type="text"
                id="dateFeedbackIssued"
                name="dateFeedbackIssued"
                value={formData.dateFeedbackIssued}
                onChange={handleChange}
              />

            <label htmlFor="dateInternalErrorSent" className='docu-label'>Date Internal Error was Sent to the Concerned Person / Office:</label>
              <input className='add-docu-input'
                type="text"
                id="dateInternalErrorSent"
                name="dateInternalErrorSent"
                value={formData.dateInternalErrorSent}
                onChange={handleChange}
              />

            <label htmlFor="dateInternalErrorResolved" className='docu-label'>Date Internal Error was Resolved:</label>
              <input className='add-docu-input'
                type="text"
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

export default EditDocuModal;
