import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

export default filterSlice.reducer;
