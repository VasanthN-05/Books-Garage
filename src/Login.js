import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./logobook.png"

const Login = () => {
  const [credentials, setCredentials] = useState({email:"",password:""})
  let navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({email : credentials.email,password : credentials.password})
    });
    const json =  await response.json();
    console.log(json)
    if(json.success){
      //save the authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      navigate("/adddetails")
    }
    else{
      alert('invalid credentials')
    }
  }
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div style={{ backgroundColor: '#ccf9ff' }}>
      <div className="login" style={{ textAlign: 'center' }}>
        <h1>Login</h1>
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type="text" placeholder="" name='email' onChange={onChange}/>
          <br />
          <br />
          <label>Password</label>
          <input type="password" placeholder="" name='password' onChange={onChange}/>
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
