import { useContext } from 'react'
import { TaskContext } from './TaskContext'
import TaskCard from './TaskCard'

function TaskList() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <div className='mx-auto'>
            <h2 className='text-2xl font-bold text-white mb-5'>No hay tareas</h2>
        </div>
    }

    return (
        <div className='grid grid-cols-4 gap-2 mt-5 p-5'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    )
}

export default TaskList