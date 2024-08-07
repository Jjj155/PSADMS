import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../components/Home/Home.css';  
import psaLogo from '../../assets/psalogo.png';




function Home () {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (

    <>
    
    <div className="App">
      <header className="App-header">
      <div data-aos="fade-right">
      <img src={psaLogo} alt="logonipsa"></img>
    </div>

    <div data-aos="fade-left" className='home-title'>
      <h1>PSA Civil Registry</h1>
      <h1>Document Management System</h1>
    </div>
      

    <div className='buttons-home'>

    <Link to="/adminlogin">
      <button className="button2">ADMIN</button> 
    </Link>

    <Link to="/psologin">
      <button className="button3">PROVINCIAL STATISTICAL OFFICE</button>
    </Link>

    <Link to="/lcrodash">
      <button className="button4">LOCAL CIVIL REGISTRY OFFICE</button>
      </Link>

    </div>
    
     
    </header>
    </div>
 ;
    </>
  )
}

export default Home