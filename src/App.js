import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AdminLogin from './components/Admin/AdminLogin';
import Admin from './components/Admin/Admin';
import PsoLogin from './components/Pso/PsoLogin';
import Pso from './components/Pso/Pso';
import Nav from './components/Nav/Nav';
import Password from './components/Password/Password';
import AdminCreateAcc from './components/Admin/AdminCreateAcc';
import CreateAcc from './components/CreateAcc/CreateAcc';
import ResetPass from './components/ResetPass/ResetPass';
import Logout from './components/Logout/Logout';
import LcroResult from './components/Lcro/LcroResult';
import PrevTran from './components/Lcro/PrevTran';
import LcroDash from './components/Lcro/LcroDash';

const App = () => {
  return (
    <Router>
      <div>
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/psologin" element={<PsoLogin />} />

        <Route path='/pso' element={<Pso />} />

        <Route path='/navbar' element={<Nav />} />

        <Route path='/password' element={<Password />} />

        <Route path='/admincreateacc' element={<AdminCreateAcc />} />

        <Route path='/createacc' element={<CreateAcc />} />

        <Route path='/resetpass' element={<ResetPass />} />

        <Route path='/logout' element={<Logout />} />

        <Route path="/" element={<LcroDash />} />

        <Route path="lcrodash" element={<LcroDash />} />

        <Route path="/lcroresult" element={<LcroResult />} />

        <Route path="/prevtran" element={<PrevTran />} />



      </Routes>
      </div>
      </Router>
  )
}

export default App