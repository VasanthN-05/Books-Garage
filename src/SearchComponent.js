import React, { useEffect, useState } from "react";
import logo from "./logobook.png";
import axios from "axios";
const SearchComponent = () => {
  const [books, setbooks] = useState();
  const [filter, setfilter] = useState([])
  const onChange = (e) => {
    if(e.target.value === ''){
      setfilter(books)
      return
    }
    const results = books.filter((book)=>{return book.bookname.includes(e.target.value)})
    setfilter(results)
  };
  console.log(books);
  const getBooks = async () => {
    const { data } = await axios.get("http://localhost:5000/api/book/getbooks");
    setfilter(data)
    setbooks(data);
    console.log("j");
  };
  useEffect(() => {
    console.log("hi")
    getBooks();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>WELCOME TO BOOKS GARAGE</h1>
      <div className="input-group">
        <div className="form-outline" style={{ textAlign: "center" }}>
          <img src={logo} alt="Logo" />
          <br />
          <input
            type="search"
            id="form1"
            className="form-control"
            name="name"
            onChange={onChange}
          />
          <label className="form-label" htmlFor="form1">
            <input type="button" value="Search" />
          </label>
        </div>
      </div>
      {filter
        .map((b) => {
          return (
            <div key={b.storename?.phnno}>
              <h5>Bookname : {b.bookname}</h5>
              <p>Storename : {b.storename?.name}</p>
              <p>Quantity : {b.quantity}</p>
              <p>Price : {b.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SearchComponent;