import "./App.css";
import { ToDoList } from "./ToDoList";
import { AddToDoForm } from "./AddToDoForm";
import { AddCategory } from "./AddCategory";
import { FilterToDos } from "./FilterToDos";

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
