import React, { useState, useEffect } from 'react';
import PsoAddDocuModal from './PsoAddDocuModal';
import PsoEditDocuModal from './PsoEditDocuModal';
import PsoDeleteDocuModal from './PsoDeleteDocuModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Pso.css';

function PsoDash ({ selectedTab }) {

  const [showAddDocuModal, setShowAddDocuModal] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [searchQueryDocuments, setSearchQueryDocuments] = useState('');
  const [noSearchResultsDocuments, setNoSearchResultsDocuments] = useState(false);
  const [showEditDocuModal, setShowEditDocuModal] = useState(false);
  const [docuToEdit, setDocuToEdit] = useState(null);
  const [showDeleteDocuModal, setShowDeleteDocuModal] = useState(false);
  const [docuToDelete, setDocuToDelete] = useState(null);

  // EXAMPLE DOCUMENTS

  useEffect(() => {
    const exampleDocuments = [
      {
        dateReceivedByClerk: '2024-03-11',
        controlNumber: '222324',
        controlledBy: 'Ivan',
        dateControlled: '2024-03-12',
        placeOfEventOne: 'City 1',
        petitionRegistryNumber: '232425',
        documentOwner: 'Thomas Wilson',
        dateOfEvent: '2024-03-13',
        placeOfEventTwo: 'City 2',
        remarks: 'sample',
      },
      {
        dateReceivedByClerk: '2024-03-12',
        controlNumber: '252627',
        controlledBy: 'Ivan',
        dateControlled: '2024-03-13',
        placeOfEventOne: 'City 3',
        petitionRegistryNumber: '262728',
        documentOwner: 'Olivia Green',
        dateOfEvent: '2024-03-14',
        placeOfEventTwo: 'City 4',
        remarks: 'sample',
      },
      {
        dateReceivedByClerk: '2024-03-13',
        controlNumber: '282930',
        controlledBy: 'Ivan',
        dateControlled: '2024-03-14',
        placeOfEventOne: 'City 5',
        petitionRegistryNumber: '293031',
        documentOwner: 'David Brown',
        dateOfEvent: '2024-03-15',
        placeOfEventTwo: 'City 6',
        remarks: '....',
      }
    ];

    setDocuments(exampleDocuments);
  }, []);

  // Filter documents based on search query
  const filteredDocuments = documents.filter(document =>
    Object.values(document).some(value =>
    typeof value === 'string' && value.toLowerCase().includes(searchQueryDocuments.toLowerCase())
    )
  );

  // Check if there are no search results for documents
  useEffect(() => {
    
    if (filteredDocuments.length === 0 && searchQueryDocuments !== '') {
    setNoSearchResultsDocuments(true);
  } else{
    setNoSearchResultsDocuments(false);
  }
  }, [filteredDocuments, searchQueryDocuments]);

  const handleSaveDocu = (docuData) => {
    console.log('Saving document:', docuData);
    // You can perform your save logic here
  };

  const handleDocuDelete = () => {
    console.log("Delete document at index:", docuToDelete);
    // Perform the deletion logic here
    closeDeleteDocuModal();
  };

  // Functions for Document Modal
  const openAddDocuModal = () => setShowAddDocuModal(true);
  const closeAddDocuModal = () => setShowAddDocuModal(false);
  const closeEditDocuModal = () => setShowEditDocuModal(false);
  const closeDeleteDocuModal = () => setShowDeleteDocuModal(false);

  const openEditDocuModal = (index) => {
    setDocuToEdit(index);
    setShowEditDocuModal(true);
  };

  const openDeleteDocuModal = (index) => {
    setDocuToDelete(index);
    setShowDeleteDocuModal(true);
  };

  const renderDocumentsTable = () => {
    // Define your table data

    return (
      <div className="pso-dash-documents-content">
        <div className='pso-docu-search'>
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQueryDocuments}
            onChange={(e) => setSearchQueryDocuments(e.target.value)}
          />
          <button className='admin-docu-add-btn' type="submit" onClick={openAddDocuModal}>
            <FontAwesomeIcon icon={faPlus} /> NEW </button>
        </div>

        <div className="pso-documents-table-container">
          <table className="pso-documents-table">
          <thead>
              <tr>
                <th className="ad0"><p>ACTION</p></th>
                <th className="ad1"><p>DATE RECEIVED BY </p>RECEIPTANT CONTROL<p> CLERK (PROVINCIAL OFFICE)</p></th>
                <th className="ad2"><p>CONTROL </p>NUMBER</th>
                <th className="ad3"><p>CONTROLLED BY</p></th>
                <th className="ad4"><p>DATE </p>CONTROLLED</th>
                <th className="ad5"><p>PLACE OF</p>EVENT</th>
                <th className="ad6"><p>PETITION NUMBER/</p>REGISTRY NUMBER</th>
                <th className="ad7"><p>NAME OF DOCUMENT </p>OWNER</th>
                <th className="ad8"><p>DATE OF</p> EVENT</th>
                <th className="ad9"><p>PLACE OF</p> EVENT</th>
                <th className="ad10">REMARKS</th>
              </tr>
            </thead>
            <tbody>
              
            {noSearchResultsDocuments ? (
                <tr>
                  <td colSpan="10">No results found.</td>
                </tr>
              ) : (
            filteredDocuments.map((row, index) => (            
              <tr key={index}>
                <td className="admin-docu-actionbtn">
                      <div className='admin-table-action'>
                        <button className='admin-dash-edit-btn' onClick={() => openEditDocuModal(index)}>
                          <FontAwesomeIcon icon={faEdit}  /> Edit
                        </button>
                        <button className='admin-dash-delete-btn' onClick={() => openDeleteDocuModal(index)}>
                        <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                      </div>
                    </td>
                <td>{row.dateReceivedByClerk}</td>
                <td>{row.controlNumber}</td>
                <td>{row.controlledBy}</td>
                <td>{row.dateControlled}</td>
                <td>{row.placeOfEventOne}</td>
                <td>{row.petitionRegistryNumber}</td>
                <td>{row.documentOwner}</td>
                <td>{row.dateOfEvent}</td>
                <td>{row.placeOfEventTwo}</td>
                <td>{row.remarks}</td>
              </tr>
            ))
            )}
          </tbody>
        </table>
      </div>

     {/* Add document modal */}
      {showAddDocuModal && (
        <PsoAddDocuModal
          onClose={closeAddDocuModal}
          onSave={handleSaveDocu}
        />
      )}

      {/* Edit document modal */}
      {showEditDocuModal && (
        <PsoEditDocuModal
          onClose={closeEditDocuModal}
          onSave={handleSaveDocu}
          docu={documents[docuToEdit]}
        />
      )}
      
      {/* Delete document modal */}
      {showDeleteDocuModal && (
        <PsoDeleteDocuModal
          onClose={closeDeleteDocuModal}
          onDelete={handleDocuDelete}
          document={documents[docuToDelete]}
        />
      )}
    </div>
  );
};

  const contentMap = {
    documents: renderDocumentsTable(), // Render the document component here
    // Add more content here
  };

  return (
    <div className="dashboard">
      {contentMap[selectedTab]}
    </div>
  )
}

export default PsoDash;