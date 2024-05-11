import "../styles/App.css";
import { ToDoList } from "./todos/ToDoList";
import { AddToDoForm } from "./todos/AddToDoForm";
import { AddCategory } from "./todos/AddCategory";
import { FilterToDos } from "./todos/FilterToDos";

function App() {
  return (
    <main>
      <AddToDoForm />
      <AddCategory />
      <FilterToDos />
      <ToDoList />
    </main>
  );
}

export default App;
