import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logobook.png"
const WelcomePage = () => {

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>WELCOME TO BOOKS GARAGE</h1>
      <div className="container" style={{ textAlign: 'center' }}>
        <img src={logo} alt="Logo" />
        <br />
          
          <Link to='/signup'><h5>Store Owner</h5></Link>
          <Link to='/searchcomponent'><h5>Customer</h5></Link>
      </div>
    </div>
  );
}

export default WelcomePage;
