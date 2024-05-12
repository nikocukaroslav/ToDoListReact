import { useSelector } from "react-redux";
import { ToDo } from "./ToDo";
import styles from "../../styles/ToDoList.module.css";

export function ToDoList() {
  const todos = useSelector((store) => store.todo.todos);
  const filteredToDos = useSelector((store) => store.todo.filteredToDos);

  const sortedToDos = !filteredToDos.length
    ? [...todos].sort((a, b) => a.isPerformed - b.isPerformed)
    : [...filteredToDos].sort((a, b) => a.isPerformed - b.isPerformed);

  return (
    <ul className={styles.todoList}>
      {sortedToDos.map((todo, index) => (
        <ToDo todo={todo} key={index} />
      ))}
    </ul>
  );
}
