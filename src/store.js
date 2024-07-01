import { combineReducers, createStore } from "redux";

import todoReducer from "./features/todos/todoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(rootReducer);

export default store;
