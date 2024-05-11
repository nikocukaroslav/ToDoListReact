import styles from "../../styles/ToDoList.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

export function ToDoList() {
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(false);
  const todos = useSelector((store) => store.todo.todos);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`${checked ? styles.completed : ""}`}
          onMouseOut={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <div className={styles.todo}>
            <input
              type="checkbox"
              className={styles.checkbox}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span>{todo.task}</span>
          </div>
          {active ? (
            <button className={styles.trashButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className={styles.trash}
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </button>
          ) : (
            <div className={styles.todoDescription}>
              <span>{todo.category}</span>
              <span>{todo.date}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}