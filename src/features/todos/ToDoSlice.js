import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  categories: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo(state, action) {
      state.todos.push(action.payload);
    },
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    deleteToDo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    togglePerformed(state, action) {
      state.todos.map((todo) =>
        todo.id === action.payload
          ? (todo.isPerformed = !todo.isPerformed)
          : todo,
      );
    },
    filterToDos(state, action) {
      state.todos.map((todo) => todo);
    },
  },
});

export const {
  addToDo,
  addCategory,
  deleteToDo,
  togglePerformed,
  filterToDos,
} = todoSlice.actions;

export default todoSlice.reducer;
