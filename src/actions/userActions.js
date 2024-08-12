// src/actions/userActions.js

// export const addUser = (user) => {
//     return {
//         type: 'ADD_USER',
//         payload: user,
//     };
// };

// src/actions/userActions.js

import { getDocs, addDoc, collection } from 'firebase/firestore';
import { db } from './../firebase'; // Ensure this is the correct path to your Firebase configuration

export const ADD_USER = 'ADD_USER';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

export const addUser = (user) => {
    return async (dispatch) => {
        try {
            const docRef = await addDoc(collection(db, 'users'), user);
            console.log('User added successfully with ID:', docRef.id);
            
            // Dispatch the action to update Redux state
            // dispatch({
            //     type: ADD_USER,
            //     payload: { id: docRef.id, ...user },
            // });
            dispatch(fetchUsers()); // Dispatch fetchUsers to get the updated list
        } catch (error) {
            console.error('Error adding user:', error.message);
            // You might want to handle the error state here
        }
    };
};

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'FETCH_USERS_REQUEST' });

            const querySnapshot = await getDocs(collection(db, 'users'));
            const usersList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            dispatch({
                type: FETCH_USERS_SUCCESS,
                payload: usersList,
            });
        } catch (error) {
            dispatch({ type: 'FETCH_USERS_FAILURE', error: error.message });
            console.error('Error fetching users:', error.message);
            // Handle the error as needed (e.g., dispatch an error action)
        }
    };
};
