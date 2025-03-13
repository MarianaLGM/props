// Este es el componente principal de la aplicación donde se maneja el estado de las tareas y 
// se definen las funciones para agregar, eliminar y marcar tareas como completadas.

import "./App.css"
import { useState } from "react";
import AddTask from "./components/AddTaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addNewTask = (newTaskInput) => {
    const newTask = {
      id: tasks.length + 1,
      text: newTaskInput,
      completed: false
    };
    setTasks([...tasks, newTask]); // Agregamos la nueva tarea al estado de tasks que era donde tenía 3 tareas ya creadas
  } 

  return (
    <>
    <h1>Tareas:</h1>
    <AddTask addNewTask={addNewTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
