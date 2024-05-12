import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  categories: [],
  filteredToDos: [],
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
      state.filteredToDos = state.todos.filter(
        (todo) => todo.categoryId === action.payload,
      );
    },
    removeFilter(state) {
      state.filteredToDos.length = 0;
    },
  },
});

export const {
  addToDo,
  addCategory,
  deleteToDo,
  togglePerformed,
  filterToDos,
  removeFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
