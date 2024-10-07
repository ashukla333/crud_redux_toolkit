import { configureStore } from '@reduxjs/toolkit';
import crudReducer from './slice';

export const store = configureStore({
  reducer: {
    crud: crudReducer,
  },
});
