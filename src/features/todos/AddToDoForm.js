import styles from "../../styles/AddToDoForm.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./ToDoSlice";

export function AddToDoForm() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const categories = useSelector((store) => store.todo.categories);

  const dispatch = useDispatch();

  function HandleSubmit(e) {
    e.preventDefault();
    const newToDo = { task, category, date };
    dispatch(addToDo(newToDo));
    setTask("");
    setCategory("");
    setDate("");
  }

  return (
    <>
      <h2>ToDo list</h2>
      <form className={styles.addToDoForm} onSubmit={HandleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
        <input
          value={date}
          type="date"
          className={styles.date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
