import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "./logobook.png"
const SignUp = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: ""})
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      //save the authtoken and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/login")
    }
    else {
      alert("invalid credentials")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className="signup" style={{ textAlign: 'center' }}>
        <h1>Sign Up</h1>
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit} className='form'>
          <label>Username</label>
          <input type="text" placeholder="" onChange={onChange} name='name'/>
          
          <label>Email address</label>
          <input type="email" placeholder="" onChange={onChange} name='email'/>
         
          <label>Password</label>
          <input type="password" placeholder="" onChange={onChange} name='password'/>
          <br/>

          <button>signup</button>
        </form>
        <p style={{ textAlign: 'center' }}>
          Already have an Account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
