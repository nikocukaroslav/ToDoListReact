import "./styles/App.css";
import { ToDoList } from "./features/todos/ToDoList";
import { AddToDoForm } from "./features/todos/AddToDoForm";
import { AddCategory } from "./features/todos/AddCategory";
import { useSelector } from "react-redux";

function App() {
  const isActive = useSelector((state) => state.todo.addCategoryFormActive);
  return (
    <>
      <main>
        <div className="div">
          {isActive && <h2>ToDo list</h2>}
          <AddCategory />
        </div>
        <AddToDoForm />

        <ToDoList />
      </main>
    </>
  );
}

export default App;
