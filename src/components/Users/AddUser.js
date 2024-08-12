import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions';

import { useNavigate } from 'react-router-dom';

const AddUser = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleAddUser = async () => {
    try {
      // Dispatch the addUser action with the new user data
      addUser({ name, email });
      setName(''); // Clear input after submission
      setEmail(''); // Clear input after submission
      // navigate('/users');
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(AddUser);
