import styles from "./FilterToDos.module.css";

export function FilterToDos() {
  return (
    <form method="post" className={styles.sortForm}>
      <label>
        <span>Filter</span>
        <select required></select>
      </label>
      <button type="submit">
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
    </form>
  );
}
