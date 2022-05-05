import { configureStore } from '@reduxjs/toolkit';
import { API } from './api';

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(API.middleware);
  },
});
