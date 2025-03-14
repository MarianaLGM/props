
//. `src/AddTaskForm.js`: Este componente proporciona un formulario para agregar nuevas tareas a la lista.
//Crearemos un input que recoja el valor y añada las tarea al resto de tareas

import { useState } from "react";

function AddTask ({addNewTask}){ 
    const [newTask, setNewTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTask.trim()) {//trim elimina espacios delante y detrás del input
          addNewTask(newTask); // agragamos tarea
          setNewTask(""); // limpio despues de agregar
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="newtask"
            name="newtask"
            value={newTask}
            placeholder="Agregar nueva tarea"
            onChange={(e)=> setNewTask (e.target.value)}/>
        <button type="submit">Agregar</button>
        </form>
        </>
    )
}

export default AddTask;