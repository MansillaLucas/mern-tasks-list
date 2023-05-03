import {useContext} from 'react'
import {TaskContext} from './TaskContext'

function TaskCard({ task }) {

    const { deleteTask} = useContext(TaskContext)

    return (
        <div>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <br />
            <button onClick={() => deleteTask(task.id)}>
                Eliminar tarea
            </button>
        </div>
    )
}

export default TaskCard