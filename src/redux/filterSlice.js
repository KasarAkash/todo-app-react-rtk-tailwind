import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: true,
  active: false,
  completed: false,
};

export const filterSlice = createSlice({
  initialState,
  name: "Filter Slice",
  reducers: {
    selectAll: (state) => {
      state.all = true;
      state.active = false;
      state.completed = false;
    },
    selectActive: (state) => {
      state.all = false;
      state.active = true;
      state.completed = false;
    },
    selectComplete: (state) => {
      state.all = false;
      state.active = false;
      state.completed = true;
    },
  },
});

export const { selectActive, selectAll, selectComplete } = filterSlice.actions;
export default filterSlice.reducer;
