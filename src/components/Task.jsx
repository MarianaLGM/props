// `src/Task.js`: Este componente muestra una tarea individual y maneja los eventos de clic en la tarea.


const Task = ({ task, deleteTask, taskCompleted }) => {

    return (

        <div className="task-container">
            <span
                onClick={() => taskCompleted(task.id)}
                style={{ cursor: 'pointer' }}>
            {task.text}
            </span>
            <button className="task-close" onClick={() => deleteTask(task.id)}>X</button>
        </div>
        )
    }
    
    export default Task

