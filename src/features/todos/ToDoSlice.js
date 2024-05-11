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
  },
});

export const { addToDo, addCategory } = todoSlice.actions;

export default todoSlice.reducer;
