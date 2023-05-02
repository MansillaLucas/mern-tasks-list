import { tasks as data } from './tasks'
import { useEffect, useState } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(name, description){
    setTasks([...tasks, {
      id:tasks.length,
      name: name,
      description: description
    }])
  }

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
