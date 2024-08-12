// src/reducers/userReducer.js

import { ADD_USER } from './../actions/userActions';
import { FETCH_USERS_SUCCESS } from './../actions/userActions';

const initialState = {
    users: [],
    isLoading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
            };
        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        default:
            return state;
    }
};

export default userReducer;

// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_USER:
//             return {
//                 ...state,
//                 users: [...state.users, action.payload],
//             };
        
//         case FETCH_USERS:
//             return {
//                 ...state,
//                 users: action.payload,
//             };
//         default:
//             return state;
//     }
// };
