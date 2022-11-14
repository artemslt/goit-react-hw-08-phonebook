import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    addFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const { addFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
