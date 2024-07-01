import styles from "../../styles/AddToDoForm.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./todoReducer";

export function AddToDoForm() {
  const [task, setTask] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [date, setDate] = useState("");

  const categories = useSelector((store) => store.todo.categories);

  const dispatch = useDispatch();

  function HandleSubmit(e) {
    e.preventDefault();
    if (!categoryName || !task) return;
    if (categoryName) {
      const newToDo = {
        id: Date.now(),
        isPerformed: false,
        task,
        categoryId,
        categoryName,
        date,
      };
      dispatch(addToDo(newToDo));
      setTask("");
      setDate("");
    }
  }

  return (
    <form className={styles.addToDoForm} onSubmit={HandleSubmit}>
      <div className={styles.container}>
        <select
          value={categoryName}
          onChange={(e) => {
            const selectedCategory = categories.find(
              (category) => category.categoryName === e.target.value,
            );
            setCategoryName(selectedCategory.categoryName);
            setCategoryId(selectedCategory.id);
          }}
          required
        >
          {categories.map((category, index) => (
            <option key={index}>{category.categoryName}</option>
          ))}
        </select>
        <input
          value={date}
          type="date"
          className={styles.date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={styles.container}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button>Add</button>
      </div>
    </form>
  );
}
