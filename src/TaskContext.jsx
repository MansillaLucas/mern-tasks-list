import { createContext, useEffect, useState } from 'react'
import { tasks as data } from './tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask(task) {
        setTasks([...tasks, {
            id: (tasks.length + 1),
            name: task.name,
            description: task.description
        }])
        console.log(tasks)
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider
        value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}