import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requests: [],
  currentRequestId: null,
};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequest(state) {
      const newRequest = {
        id: Date.now(),
        name: '',
        url: '',
        method: 'GET',
        headers: {},
        body: '',
        params: {},
        response: null,
      };
      state.requests.push(newRequest);
      state.currentRequestId = newRequest.id;
    },
    updateRequest(state, action) {
      const index = state.requests.findIndex(req => req.id === action.payload.id);
      if (index !== -1) {
        state.requests[index] = action.payload;
      }
    },
    selectRequest(state, action) {
      state.currentRequestId = action.payload;
    },
    removeRequest(state, action) {
      state.requests = state.requests.filter(req => req.id !== action.payload);
      if (state.currentRequestId === action.payload) {
        state.currentRequestId = state.requests.length > 0 ? state.requests[0].id : null;
      }
    }
  },
});

export const { addRequest, updateRequest, selectRequest, removeRequest } = requestsSlice.actions;

export const selectRequests = (state) => state.requests.requests;
export const selectCurrentRequest = (state) => 
  state.requests.requests.find(req => req.id === state.requests.currentRequestId);

export default requestsSlice.reducer;
