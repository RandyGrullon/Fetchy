import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import requestsReducer from "./requestSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    requests: requestsReducer
  },
});

export default store;
