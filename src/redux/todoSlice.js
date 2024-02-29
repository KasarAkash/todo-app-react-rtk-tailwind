import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "qw",
      isCompleted: false,
      text: "do workout",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo slice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        isCompleted: false,
        text: action.payload,
      };
      state.todos.push(todo);
    },

    completeTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = true;
        }
      });
    },
  },
});

export default todoSlice.reducer;
