import styles from "../../styles/FilterToDos.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterToDos, removeFilter } from "./ToDoSlice";
import { useState } from "react";

export function FilterToDos() {
  const [categoryId, setCategoryId] = useState("");

  const categories = useSelector((store) => store.todo.categories);

  const dispatch = useDispatch();

  function Filter() {
    dispatch(filterToDos(categoryId));
  }

  function RemoveFilter() {
    dispatch(removeFilter());
  }

  return (
    <div className={styles.sortForm}>
      <label>
        <span>Filter</span>
        <select
          onChange={(e) => {
            const selectedCategory = categories.find(
              (category) => category.categoryName === e.target.value,
            );
            setCategoryId(selectedCategory.id);
          }}
          required
        >
          {categories.map((category, index) => (
            <option key={index}>{category.categoryName}</option>
          ))}
        </select>
      </label>
      <div className={styles.buttons}>
        <button onClick={Filter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
          </svg>
        </button>
        <button onClick={RemoveFilter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>
    </div>
  );
}
