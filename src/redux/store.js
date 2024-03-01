import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import todoSlice from "./todoSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    todo: todoSlice,
    filter: filterSlice,
  },
});

export default store;
