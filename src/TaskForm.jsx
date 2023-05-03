import { useState, useEffect, useContext } from 'react'
import { TaskContext } from './TaskContext'

function TaskForm() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ name, description })
        setName('')
        setDescription('')
    }

    return (
        <div className='max-w-md mx-auto'>

            <form className='bg-gray-800 p-4 mb-3 rounded-md' onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold text-white mb-5'>Ingresa tu nueva tarea</h2>
                <input
                    placeholder="Nombre de la tarea"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    value={name}
                    className='bg-slate-700 p-2 w-full mb-2 text-white rounded-md'
                />
                <input
                    placeholder="Descripción de la tarea"
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    value={description}
                    className='bg-slate-700 p-2 w-full mb-2 text-white rounded-md'
                />
                <button className='transition duration-500 bg-green-800 px-2 py-1 rounded-md mt-4 hover:bg-green-500 text-white' type="submit">Guardar</button>

            </form>

        </div>

    )
}

export default TaskForm