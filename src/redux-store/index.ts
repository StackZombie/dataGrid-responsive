import reducer from './reducer';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer, middleware: [thunk] });
export { store };
