import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './component/Home';


function App() {
  function Login(){
    return(<div>
      <h2>CHUA CODE LOGIN</h2>
    </div>)}

  function Signin(){
    return(<div>
      <h2>CHUA CODE SIGN IN</h2>
    </div>)
  }
  function Cart(){
    return(<div>
      <h2>CHUA CODE CART</h2>
    </div>)
  }
  function Des(){
    return(<div>
      <h2>CHUA CODE DES</h2>
    </div>)
  }
  return (
    <Router>
      <div className='TONG'>
        <nav className='nav'>
          <div className='nav_logo'>

          </div>
          <div className='nav_links'>
            <Link to='/' className='nav_link'>Home</Link>
            <Link to='/' className='nav_link'>Service</Link>
            <Link to='/' className='nav_link'>Contact</Link>
            <Link to='/' className='nav_link'>Support</Link>
            <Link to='/Cart' className='nav_cart'>Cart</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Des' element={<Des/>}/>
          <Route path='/Signin' element={<Signin/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
