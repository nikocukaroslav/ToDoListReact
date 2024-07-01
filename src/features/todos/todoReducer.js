const ADD_TODO = "ADD_TODO";
const ADD_CATEGORY = "ADD_CATEGORY";
const HANDLE_CATEGORY_FORM_ACTIVE = "HANDLE_CATEGORY_FORM_ACTIVE";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_PERFORMED = "TOGGLE_PERFORMED";

const initialState = {
  todos: [],
  categories: [],
  addCategoryFormActive: true,
};

export const addToDo = (todo) => ({ type: ADD_TODO, payload: todo });
export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category,
});
export const handleAddCategoryFormActive = () => ({
  type: HANDLE_CATEGORY_FORM_ACTIVE,
});
export const deleteToDo = (id) => ({ type: DELETE_TODO, payload: id });
export const togglePerformed = (id) => ({
  type: TOGGLE_PERFORMED,
  payload: id,
});

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };
    case HANDLE_CATEGORY_FORM_ACTIVE:
      return {
        ...state,
        addCategoryFormActive: !state.addCategoryFormActive,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_PERFORMED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isPerformed: !todo.isPerformed }
            : todo,
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
