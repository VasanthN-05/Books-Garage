import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StoreRegistration = () => {
  const navigate = useNavigate()
  const [ownername, setownername] = useState()
  const [credentials, setCredentials] = useState({name:"",phnno:"",flatno:'',area:'',landmark:''})
  const getuser = async()=>{
    const config = {
      headers:{
        'auth-token':localStorage.getItem('token')
      }
    }
    const {data} = await axios.post('http://localhost:5000/api/auth/getuser',{},config)
    setownername(data.name)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/store/register/${ownername}`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({name : credentials.name,phnno : credentials.phnno,flatno:credentials.flatno,area:credentials.area,landmark:credentials.landmark})
    });
    const json =  await response.json();
    console.log(json)
    if(json.success){
      //save the authtoken and redirect
      localStorage.setItem('phnno',credentials.phnno)
      navigate("/adddetails")
    }
    else{
      alert('invalid credentials')
    }
  }
  useEffect(() => {
    getuser()
  }, [])
  
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div style={{ backgroundColor: '#ccf9ff' }}>
      <h1 style={{ textAlign: 'center' }}>WELCOME TO STORE REGISTRATION</h1>
      <div className="container2" style={{ textAlign: 'center' }}>
        <form onSubmit={handleSubmit}>
          <label>Name of the store</label>
          <input type="text" placeholder="" name='name' onChange={onChange}/>
          <br />
          <label>Phone Number</label>
          <input type="number" placeholder="" name='phnno' onChange={onChange}/>
          <br />
          <h2>Store address</h2>
          <label>H-No/flat No:</label>
          <input type="text" placeholder="" name='flatno' onChange={onChange}/>
          <br />
          <label>Area</label>
          <input type="text" placeholder="" name='area' onChange={onChange}/>
          <br />
          <label>Landmark</label>
          <input type="text" placeholder="" name='landmark' onChange={onChange}/>
          <br />
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
}

export default StoreRegistration;
