import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import AddBookDetails from './AddBookDetails';
import Login from './Login';
import SignUp from './SignUp';
import SearchComponent from './SearchComponent';
import StoreRegistration from './StoreRegistration';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={WelcomePage}></Route>
          <Route path='/adddetails' Component={AddBookDetails}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/signup' Component={SignUp}></Route>
          <Route path='/searchcomponent' Component={SearchComponent}></Route>
          <Route path='/storeregistration' Component={StoreRegistration}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
