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
      return void state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = action.payload.isCompleted;
        }
        return todo;
      });
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, completeTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
