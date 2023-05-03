import {useContext} from 'react'
import {TaskContext} from './TaskContext'

function TaskCard({ task }) {

    const { deleteTask} = useContext(TaskContext)

    return (
        <div className='bg-gray-800 text-white p-4 rounded-md'>
            <h3 className='text-xl font-bold capitalize'>{task.name}</h3>
            <p className='text-gray-500 text-sm'>{task.description}</p>
            <br />
            <button className='transition duration-500 bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-300' onClick={() => deleteTask(task.id)}>
                Eliminar tarea
            </button>
        </div>
    )
}

export default TaskCard