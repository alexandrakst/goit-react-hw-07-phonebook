import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filterReducer';
import contactsReducer from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
