import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

// main routes
import Home from './pages/Home';
import About from './pages/About/About';
import Contact from './pages/Contact';

// auth routes
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AddUser from './components/Users/AddUser';

import UserList from './components/Users/UserList';

import logo from './assets/SHOPPING.png';

import './App.css';

function App() {
  return (
    <Router>
        <div className='main-container'>
            <div className='image-section'>
                <img src={logo} className="App-logo1" alt="logo" />
            </div>
            <nav className='nav-bar'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
      <Routes>
        {/* main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* main route ends */}
        {/* auth routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/add-user" component={AddUser} /> */}
        <Route path="/add-user" element={<AddUser />} />
        {/* auth routes ends*/}
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
