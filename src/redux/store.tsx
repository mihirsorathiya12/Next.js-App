// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import dataReducer from './dataSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
  },
});

// TypeScript ke types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
