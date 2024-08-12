import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { connect } from 'react-redux';

import { fetchUsers } from '../../actions/userActions';

const UserList = ({ users, fetchUsers, isLoading }) => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     const usersList = querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  //     setUsers(usersList);
  //   };
    
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    fetchUsers(); // Dispatch the action to fetch users
  }, [fetchUsers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

// Map state to props
const mapStateToProps = (state) => ({
  users: state.user.users,
  isLoading: state.user.isLoading
});

// Map dispatch to props
const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
