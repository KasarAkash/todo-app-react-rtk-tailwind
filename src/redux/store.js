import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    todo: todoSlice,
  },
});

export default store;
