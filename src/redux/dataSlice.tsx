// src/redux/dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  return new Promise<string[]>((resolve) =>
    setTimeout(() => resolve(['Item 1', 'Item 2', 'Item 3']), 1000)
  );
});

interface DataState {
  items: string[];
  loading: boolean;
}

const initialState: DataState = {
  items: [],
  loading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default dataSlice.reducer;
