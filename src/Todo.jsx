import { useState } from 'react'
import './styles/todo.css'

function Todo({todo}) {

  return (
    <div className='todo-wrapper'>
      <input type="checkbox" />
      <p>{todo}</p>
      <button className="delete-btn">Delete</button>
    </div>
  )
}

export default Todo