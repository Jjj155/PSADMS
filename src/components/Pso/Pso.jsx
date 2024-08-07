import React, { useState } from 'react';
import PsoNav from './PsoNav';
import PsoDash from './PsoDash';
import PsoSidebar from './PsoSidebar';
import './Pso.css'; // Import CSS file for styling


function Pso() {
  const [selectedTab, setSelectedTab] = useState('documents');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };



  return (
    <div className="App">
      <PsoNav />
      <PsoDash selectedTab={selectedTab} />


    </div>
  );
}

export default Pso;