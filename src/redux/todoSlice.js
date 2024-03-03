import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  activeTodo: [],
  completedTodo: [],
  todosLength: 0,
  activeTodoLength: 0,
  completedTodoLength: 0,
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
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
    },

    completeTodo: (state, action) => {
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
      return void state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = action.payload.isCompleted;
        }
        return todo;
      });
    },

    removeTodo: (state, action) => {
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    addActiveTodos: (state) => {
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
      state.activeTodo = [];
      state.todos.map((todo) => {
        if (todo.isCompleted === false) {
          state.activeTodo.push(todo);
        }
      });
    },

    completeActiveTodo: (state, action) => {
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
      return void state.activeTodo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = action.payload.isCompleted;
        }
        return todo;
      });
    },

    removeActiveTodo: (state, action) => {
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
      state.activeTodo = state.activeTodo.filter(
        (todo) => todo.id !== action.payload
      );
    },

    addCompletedTodos: (state) => {
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
      state.completedTodo = [];
      state.todos.map((todo) => {
        if (todo.isCompleted === true) {
          state.completedTodo.push(todo);
        }
      });
    },

    completeCompTodo: (state, action) => {
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
      return void state.completedTodo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = action.payload.isCompleted;
        }
        return todo;
      });
    },

    removeCompTodo: (state, action) => {
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
      state.completedTodo = state.completedTodo.filter(
        (todo) => todo.id !== action.payload
      );
    },

    clearCompleted: (state) => {
      state.activeTodoLength = state.activeTodo.length;
      state.todosLength = state.todos.length;
      state.completedTodoLength = state.completedTodo.length;
      state.completedTodo = [];
      state.todos = state.todos.filter((todo) => todo.isCompleted === false);
    },
  },
});

export const {
  clearCompleted,
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
