import React, { useState } from 'react';
import AdminNav from './AdminNav';
import AdminSidebar from './AdminSidebar';
import AdminDash from './AdminDash';
import './Admin.css'; // Import CSS file for styling


function Admin() {
  const [selectedTab, setSelectedTab] = useState('users');
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
};

  return (
    <div className="App">
      <AdminNav />
      <AdminSidebar onTabClick={handleTabClick} />
      <AdminDash selectedTab={selectedTab} />


    </div>
  );
}

export default Admin;