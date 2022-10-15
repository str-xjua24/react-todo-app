import { useState } from 'react'
import './styles/task.css'

function Task() {
  const todo = {
    name: 'Coding for Technica 2022'
  };

  const [task, setTask] = useState(0)

  return (
    <div className='task-container'>
      <h2>{todo.name}</h2>
      <button>Delete</button>
    </div>
  )
}

export default Task