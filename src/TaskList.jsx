import {useContext} from 'react'
import { TaskContext } from './TaskContext'
import TaskCard from './TaskCard'

function TaskList() {

    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h3>No hay tareas</h3>
    }

    return (
        <>
        {tasks.map((task) => (
            <TaskCard key={task.id} task={task}/>
        ))}
        </>
    )
}

export default TaskList