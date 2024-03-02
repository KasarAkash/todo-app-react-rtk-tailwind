import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  activeTodo: [],
  completedTodo: [],
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

    addActiveTodos: (state) => {
      state.activeTodo = [];
      state.todos.map((todo) => {
        if (todo.isCompleted === false) {
          state.activeTodo.push(todo);
        }
      });
    },

    completeActiveTodo: (state, action) => {
      return void state.activeTodo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = action.payload.isCompleted;
        }
        return todo;
      });
    },

    removeActiveTodo: (state, action) => {
      state.activeTodo = state.activeTodo.filter(
        (todo) => todo.id !== action.payload
      );
    },

    addCompletedTodos: (state) => {
      state.completedTodo = [];
      state.todos.map((todo) => {
        if (todo.isCompleted === true) {
          state.completedTodo.push(todo);
        }
      });
    },

    completeCompTodo: (state, action) => {
      return void state.completedTodo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = action.payload.isCompleted;
        }
        return todo;
      });
    },

    removeCompTodo: (state, action) => {
      state.completedTodo = state.completedTodo.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const {
  addTodo,
  completeTodo,
  removeTodo,
  addActiveTodos,
  addCompletedTodos,
  completeActiveTodo,
  completeCompTodo,
  removeActiveTodo,
  removeCompTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
