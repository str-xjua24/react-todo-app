import { useState } from 'react'
import './styles/App.css'
import Task from './Task'
import TaskForm from './TaskForm'

function App() {
  const [task, setTask] = useState(0)

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TaskForm />
      <Task />
    </div>
  )
}

export default App
