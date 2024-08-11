import React from 'react';
import { useNavigate } from 'react-router-dom';

import './../App.css';

const Home = () => {

  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate('/signin');
  };

  const navigateToSignUp = () => {
    navigate('/signup');
  };

  const navigateToUserList = () => {
    navigate('/users');
  };

  return (
    <div className='main-layout'>
      <h1>Home Page</h1>
      {/* <p>Welcome to the Home Page!</p> */}
      <button onClick={navigateToSignIn}>Sign In</button>
      <button onClick={navigateToSignUp}>Sign Up</button>
      <button onClick={navigateToUserList}>User List</button>
    </div>
  );
}

export default Home;
