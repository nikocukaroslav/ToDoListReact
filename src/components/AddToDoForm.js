import styles from "./AddToDoForm.module.css";
import { useState } from "react";

export function AddToDoForm() {
  const [toDo, setToDo] = useState([]);

  function AddToDo(toDo) {
    setToDo((toDos) => [...toDos, toDo]);
  }

  console.log(toDo);
  return (
    <>
      <h2>ToDo list</h2>
      <form className={styles.addToDoForm} onSubmit={AddToDo}>
        <input type="text" onChange={(e) => setToDo(e.target.value)} required />
        <select required>
          <option>Home</option>
        </select>
        <input type="date" className={styles.date} />
        <button>Add</button>
      </form>
    </>
  );
}
