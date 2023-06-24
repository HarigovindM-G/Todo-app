import './App.css';
import TaskDisplay from './components/TaskDisplay';
import Todoform from './components/Todoform';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  const [todos,setTodos]=useState([])

  const addToDo= (todo) =>{
      setTodos([...todos,{id:uuidv4(),task:todo,completed:false}])
  }
  const toggleComplete=(id)=>{
    setTodos(todos.map( todo => todo.id==id ? {...todo , completed:!todo.completed}:todo))
  }
  const deletetodo=(id)=>{
    setTodos(todos.filter(todo => todo.id!==id))
  }
  
  return (
    <div className="App">
      <h1>LIST IT DOWN !</h1>
      <Todoform addToDo={addToDo}/>
      {todos.map((todo) => (
        <div key={todo.id}>
          <TaskDisplay  completed={todo.completed} itemid={todo.id} item={todo.task} toggleComplete={toggleComplete} deletetodo={deletetodo} /> 
        </div>
      ))}
    </div>
  );
}

export default App;
