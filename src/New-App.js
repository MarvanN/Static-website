import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
