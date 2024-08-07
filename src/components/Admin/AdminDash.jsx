import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import axios from 'axios';
import AddUserModal from './AddUserModal';
import DeleteUserModal from './DeleteUserModal';
import EditUserModal from './EditUserModal';
import AddDocuModal from './AddDocuModal';
import EditDocuModal from './EditDocuModal';
import DeleteDocuModal from './DeleteDocuModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Admin.css';

function AdminDash({ selectedTab }) {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [showAddDocuModal, setShowAddDocuModal] = useState(false);
  const [showEditDocuModal, setShowEditDocuModal] = useState(false);
  const [docuToEdit, setDocuToEdit] = useState(null);
  const [showDeleteDocuModal, setShowDeleteDocuModal] = useState(false);
  const [docuToDelete, setDocuToDelete] = useState(null);
  const [users, setUsers] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryDocuments, setSearchQueryDocuments] = useState('');
  const [noSearchResults, setNoSearchResults] = useState(false);
  const [noSearchResultsDocuments, setNoSearchResultsDocuments] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Fetch users from backend API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/users');
      if (!response.data.success) {
        throw new Error('Failed to fetch users');
      }
      setUsers(response.data.users);
      setFilteredUsers(response.data.users); // Initialize filteredUsers with all users
    } catch (error) {
      console.error('Error fetching users:', error);
      // Handle error state or show notification to user
    }
  };

  // Fetch documents from backend API
  const fetchDocuments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/documents');
      if (!response.data.success) {
        throw new Error('Failed to fetch documents');
      }
      setDocuments(response.data.documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
      // Handle error state or show notification to user
    }
  };

  // Add new user
  const handleAddUser = async (newUser) => {
    try {
      const response = await axios.post('http://localhost:3001/admin/users', newUser);
      if (!response.data.success) {
        throw new Error('Failed to add user');
      }
      fetchUsers();
      setShowAddUserModal(false);
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle error state or show notification to user
    }
  };

  // Edit existing user
  const handleEditUser = async (editedUser) => {
    try {
      const response = await axios.put(`http://localhost:3001/admin/users/${editedUser.id}`, editedUser);
      if (!response.data.success) {
        throw new Error('Failed to edit user');
      }
      fetchUsers();
      setShowEditUserModal(false);
    } catch (error) {
      console.error('Error editing user:', error);
      // Handle error state or show notification to user
    }
  };

  // Delete user
  const handleDeleteUser = async () => {
    try {
      const userId = users[userToDelete]?.id;
      const response = await axios.delete(`http://localhost:3001/admin/users/${userId}`);
      if (!response.data.success) {
        throw new Error('Failed to delete user');
      }
      fetchUsers();
      setShowDeleteUserModal(false);
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle error state or show notification to user
    }
  };

  // Add new document
  const handleSaveDocu = async (newDocuData) => {
    try {
      const response = await axios.post('http://localhost:3001/admin/documents', newDocuData);
      if (!response.data.success) {
        throw new Error(response.data.message || 'Failed to add document');
      }
      // Document added successfully
      fetchDocuments();
      setShowAddDocuModal(false);
    } catch (error) {
      console.error('Error adding document:', error);
      // Handle error state or show notification to user
    }
  };

  // Delete document
  const handleDocuDelete = async () => {
    try {
      const docId = documents[docuToDelete]?.id;
      const response = await axios.delete(`http://localhost:3001/admin/documents/${docId}`);
      if (!response.data.success) {
        throw new Error('Failed to delete document');
      }
      fetchDocuments();
      setShowDeleteDocuModal(false);
    } catch (error) {
      console.error('Error deleting document:', error);
      // Handle error state or show notification to user
    }
  };
  

  // Handle pagination change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Filter users based on search query (debounced)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const filteredUsers = users.filter((user) =>
          (user.username && user.username.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (user.office && user.office.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (user.role && user.role.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        setFilteredUsers(filteredUsers);
      } else {
        setFilteredUsers(users);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, users]);

  // Fetch users and documents on component mount
  useEffect(() => {
    fetchUsers();
    fetchDocuments();
  }, []);

  // Render users table
  const renderUsersTable = () => {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
      <div className="admin-dash-users-content">
        <div className="admin-dash-search">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="admin-dash-add-btn" onClick={() => setShowAddUserModal(true)}>
            Add User
          </button>
        </div>

        <div className="table-container">
          <table className="admin-dash-users-table">
            <thead>
              <tr>
                <th className="user-name">User Name</th>
                <th className="email-address">Email Address</th>
                <th className="office">Office</th>
                <th className="role">Role</th>
                <th className="action">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length === 0 ? (
                <tr>
                  <td colSpan="5">No users found.</td>
                </tr>
              ) : (
                currentUsers.map((user, index) => (
                  <tr key={index}>
                    <td className="user-name">{user.username}</td>
                    <td className="email-address">{user.email}</td>
                    <td className="office">{user.office}</td>
                    <td className="role">{user.role}</td>
                    <td className="action">
                      <div className="admin-table-action">
                        <button
                          className="admin-dash-edit-btn"
                          onClick={() => {
                            setUserToEdit(indexOfFirstUser + index);
                            setShowEditUserModal(true);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="admin-dash-delete-btn"
                          onClick={() => {
                            setUserToDelete(indexOfFirstUser + index);
                            setShowDeleteUserModal(true);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="docu-pagination">
          <Pagination
            count={Math.ceil(filteredUsers.length / usersPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
          />
        </div>

        {/* Add User Modal */}
        {showAddUserModal && (
          <AddUserModal onClose={() => setShowAddUserModal(false)} onSave={handleAddUser} />
        )}

        {/* Edit User Modal */}
        {showEditUserModal && (
          <EditUserModal
            onClose={() => setShowEditUserModal(false)}
            onSave={handleEditUser}
            user={users[userToEdit]}
          />
        )}

        {/* Delete User Modal */}
        {showDeleteUserModal && (
          <DeleteUserModal
            onClose={() => setShowDeleteUserModal(false)}
            onDelete={handleDeleteUser}
            username={users[userToDelete]?.username}
          />
        )}
      </div>
    );
  };

  // Render documents table
  const renderDocumentsTable = () => {
    const indexOfLastDoc = currentPage * usersPerPage;
    const indexOfFirstDoc = indexOfLastDoc - usersPerPage;
    const currentDocs = documents.slice(indexOfFirstDoc, indexOfLastDoc);

    return (
      <div className="admin-dash-documents-content">
        <div className="admin-docu-search">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQueryDocuments}
            onChange={(e) => setSearchQueryDocuments(e.target.value)}
          />
          <button className="admin-docu-add-btn" onClick={() => setShowAddDocuModal(true)}>
            <FontAwesomeIcon icon={faPlus} /> NEW
          </button>
        </div>

        <div className="admin-documents-table-container">
          <table className="admin-documents-table">
            <thead>
              <tr>
                <th>ACTION</th>
                <th colSpan="2">DATE RECEIVED BY RECEIPTANT CONTROL CLERK (PROVINCIAL OFFICE)</th>
                <th>CONTROL NUMBER</th>
                <th>CONTROLLED BY</th>
                <th>DATE CONTROLLED</th>
                <th>PETITION NUMBER/REGISTRY NUMBER</th>
                <th>NAME OF DOCUMENT OWNER</th>
                <th>DATE OF EVENT</th>
                <th>PLACE OF EVENT</th>
                <th>DATE TRANSMITTED TO REGIONAL OFFICE</th>
                <th>DATE RECEIVED BY RECEIPT AND CONTROL CLERK (DeCAP UNIT)</th>
                <th>DATE RECEIVED BY SCREENER</th>
                <th>SCREENED BY</th>
                <th>DATE SCREENED</th>
                <th>TRANSACTION NUMBER</th>
                <th>DATE RECEIVED BY ANNOTATOR</th>
                <th>ANNOTATED BY</th>
                <th>DATE ANNOTATED</th>
                <th>DATE RECEIVED BY APPROVER</th>
                <th>APPROVED BY</th>
                <th>DATE APPROVED</th>
                <th>REVERIFICATION (RV)/ELECTRONIC ENDORSEMENT (EE) CASE</th>
                <th>DATE RV TAGGED/EE</th>
                <th>RV TAGGED BY</th>
                <th>DATE RV/EE WAS RESOLVED</th>
                <th>DATE FEEDBACK WAS ISSUED</th>
                <th>DATE INTERNAL ERROR WAS SENT TO THE CONCERNED PERSON/OFFICE</th>
                <th>DATE INTERNAL ERROR WAS RESOLVED</th>
                <th>REMARKS/COMMENTS/FEEDBACK</th>
              </tr>
            </thead>
            <tbody>
              {currentDocs.length === 0 ? (
                <tr>
                  <td colSpan="30">No documents found.</td>
                </tr>
              ) : (
                currentDocs.map((doc, index) => (
                  <tr key={index}>
                    <td className="admin-docu-actionbtn">
                      <div className="admin-table-action">
                        <button
                          className="admin-dash-edit-btn"
                          onClick={() => {
                            setDocuToEdit(indexOfFirstDoc + index);
                            setShowEditDocuModal(true);
                          }}
                        >
                          <FontAwesomeIcon icon={faEdit} /> Edit
                        </button>
                        <button
                          className="admin-dash-delete-btn"
                          onClick={() => {
                            setDocuToDelete(indexOfFirstDoc + index);
                            setShowDeleteDocuModal(true);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                      </div>
                    </td>
                    <td colSpan="2" >
                    {doc.dateReceivedByClerk}</td>
                    <td>{doc.controlNumber}</td>
                    <td>{doc.controlledBy}</td>
                    <td>{doc.dateControlled}</td>
                    <td>{doc.petitionRegistryNumber}</td>
                    <td>{doc.documentOwner}</td>
                    <td>{doc.dateOfEvent}</td>
                    <td>{doc.placeOfEvent}</td>
                    <td>{doc.dateTransmittedToRegionalOffice}</td>
                    <td>{doc.dateReceivedByReceiptAndControlClerk}</td>
                    <td>{doc.dateReceivedByScreener}</td>
                    <td>{doc.screenedBy}</td>
                    <td>{doc.dateScreened}</td>
                    <td>{doc.transactionNumber}</td>
                    <td>{doc.dateReceivedByAnnotator}</td>
                    <td>{doc.annotatedBy}</td>
                    <td>{doc.dateAnnotated}</td>
                    <td>{doc.dateReceivedByApprover}</td>
                    <td>{doc.approvedBy}</td>
                    <td>{doc.dateApproved}</td>
                    <td>{doc.reverification}</td>
                    <td>{doc.dateRVTagged}</td>
                    <td>{doc.rvTaggedBy}</td>
                    <td>{doc.dateRVResolved}</td>
                    <td>{doc.dateFeedbackIssued}</td>
                    <td>{doc.dateInternalErrorSent}</td>
                    <td>{doc.dateInternalErrorResolved}</td>
                    <td>{doc.remarks}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
    

        {/* Add Document Modal */}
        {showAddDocuModal && (
          <AddDocuModal onClose={() => setShowAddDocuModal(false)} onSave={handleSaveDocu} />
        )}

        {/* Edit Document Modal */}
        {showEditDocuModal && (
          <EditDocuModal
            onClose={() => setShowEditDocuModal(false)}
            onSave={() => console.log('Save edit logic here')} // Implement edit logic
            docu={documents[docuToEdit]}
          />
        )}

        {/* Delete Document Modal */}
        {showDeleteDocuModal && (
          <DeleteDocuModal
            onClose={() => setShowDeleteDocuModal(false)}
            onDelete={handleDocuDelete}
            document={documents[docuToDelete]}
          />
        )}
      </div>
    );
  };

  // Define content mapping based on selectedTab
  const contentMap = {
    users: renderUsersTable(),
    reports: <div className="admin-dash-users-content">REPORTS</div>,
    documents: renderDocumentsTable(),
    // Add more content here if needed
  };

  return <div className="dashboard">{contentMap[selectedTab]}</div>;
}

export default AdminDash;
