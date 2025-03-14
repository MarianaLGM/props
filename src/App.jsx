// Este es el componente principal de la aplicación donde se maneja el estado de las tareas y 
// se definen las funciones para agregar, eliminar y marcar tareas como completadas.

import "./App.css"
import { useState } from "react";
import AddTask from "./components/AddTaskForm";
import Task from './components/Task'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);


//AÑADIR TAREA:
  const addNewTask = (newTaskInput) => {
    const newTask = {
      text: newTaskInput,
      completed: false
    };
    setTasks([...tasks, newTask]); // Agregamos la nueva tarea al estado de tasks que era donde tenía 3 tareas creadas
  } 
//ELIMINAR TAREA:
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }


//TACHAR TAREA:
  const taskCompleted = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <>
    <h1>Lista de Tareas:</h1>
    <AddTask addNewTask={addNewTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <Task 
            task={task}
            deleteTask={deleteTask}
            taskCompleted={taskCompleted}/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
