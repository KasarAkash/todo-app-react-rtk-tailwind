import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

const themeSlice = createSlice({
  initialState,
  name: "theme slice",
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
