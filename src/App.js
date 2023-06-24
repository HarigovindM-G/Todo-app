import "./App.css";
import TaskDisplay from "./components/TaskDisplay";
import Todoform from "./components/Todoform";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addToDo = (todo) => {
    const newTodo = { id: uuidv4(), task: todo, completed: false };
    setTodos([...todos, newTodo]);  
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };
  const deletetodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="App">
      <h1>LIST IT DOWN !</h1>
      <Todoform addToDo={addToDo} />
      {todos.map((todo) => (
        <div key={todo.id}>
          <TaskDisplay
            completed={todo.completed}
            itemid={todo.id}
            item={todo.task}
            toggleComplete={toggleComplete}
            deletetodo={deletetodo}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
