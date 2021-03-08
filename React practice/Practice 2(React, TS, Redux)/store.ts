import { createStore } from 'redux';
import { notesReducer } from './reducer/notesReducer';

export const store = createStore(notesReducer);