import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logobook.png"
const AddBookDetails = () => {
  const [details, setdetails] = useState({bookname:'',quantity:'',price:'',storename:''})
  const [ownername, setownername] = useState()
  const getuser = async()=>{
    const config = {
      headers:{
        'auth-token':localStorage.getItem('token')
      }
    }
    const {data} = await axios.post('http://localhost:5000/api/auth/getuser',{},config)
    setownername(data.name)
  }
  const getstore = async()=>{
    const config = {
      name:ownername
    }
    const {data} = await axios.post('http://localhost:5000/api/store/getstore',config)
    console.log(data);
    setdetails({...details,storename:data._id})
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const {data} = await axios.post('http://localhost:5000/api/book/createbook',details)
    console.log(data);
  };
  const onChange = (e) => {
    setdetails({...details,[e.target.name]:e.target.value})
  };
  useEffect(() => {
    getuser()
    getstore()
  }, [ownername])
  
  return (
    <div style={{ backgroundColor: "#ccf9ff" }}>
      <h1 style={{ textAlign: "center" }}>Add Book details</h1>
      <div className="container3" style={{ textAlign: "center" }}>
      <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label>Name of the book</label>
          <input type="text" placeholder="" name="bookname" onChange={onChange} />
          <br />
          <label>Quantity</label>
          <input
            type="number"
            placeholder=""
            name="quantity"
            onChange={onChange}
          />
          <br />
          <label>Price</label>
          <input
            type="number"
            placeholder=""
            name="price"
            onChange={onChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBookDetails;
