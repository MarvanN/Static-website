// src/store.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer'; // Import your root reducer
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
