
function TaskList({tasks}) {

    if (tasks.length === 0) {
        return <h3>No hay tareas</h3>
    }

    return (
        <>
        {tasks.map((t) => (
            <div key={t.id}>
                <h3>{t.name}</h3>
                <p>{t.description}</p>
            </div>
        ))}
        </>
    )
}

export default TaskList