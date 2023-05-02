import { useState, useEffect } from 'react'

function TaskForm({createTask}) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(name, description)
    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                placeholder="Nombre de la tarea"
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <br />
            <input
                placeholder="Descripción de la tarea"
                onChange={(e) => {
                    setDescription(e.target.value)
                }} />
            <br />
            <button type="submit">Guardar</button>

        </form>
    )
}

export default TaskForm