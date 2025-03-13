// Este componente proporciona un formulario para agregar nuevas tareas a la lista.
//. A `AddTaskForm` le pasaremos la función de añadir para usarla
//Crearemos un input que recoja el valor y añada las tarea al resto de tareas
/*Tendrás que crear una función llamada `addTask` que cree las tareas. Las tareas deben tener los siguientes datos:
1. Un id -> Contabilizaremos cuantos elementos hay en el array y añadiremos el suguiente número como `id`
2. Una tarea -> Sacaremos ese valor del input que tenemos que crear en `addTaskForm.jsx`
3. Tarea completada -> La crearemos por defecto en `false`*/


import { useState } from "react";



function AddTask (addNewTask){ 
    const [newTask, setNewTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTask.trim()) {//trim elimina espacios delante y detrás del input
          addNewTask(newTask); // agragamos tarea
          setNewTask(''); // limpio despues de agregar
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