import { useState, useEffect, useContext } from 'react'
import { TaskContext } from './TaskContext'

function TaskForm() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const{createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ name, description })
        setName('')
        setDescription('')
    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                placeholder="Nombre de la tarea"
                onChange={(e) => {
                    setName(e.target.value)
                }}
                value={name}
            />
            <br />
            <input
                placeholder="Descripción de la tarea"
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                value={description}
            />
            <br />
            <button type="submit">Guardar</button>

        </form>
    )
}

export default TaskForm