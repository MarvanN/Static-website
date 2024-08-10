import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import logo from './assets/SHOPPING.png';

import './App.css';

function App() {
  return (
    <Router>
      {/* <RedirectHandler /> */}
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

// function RedirectHandler() {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const path = window.location.search.split('?')[1];
//     if (path) {
//       navigate('/' + path);
//     }
//   }, [navigate]);

//   return null;
// }

export default App;
