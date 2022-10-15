import { useState } from 'react'
import './styles/task.css'

function Todo() {
  const todo = {
    name: 'Coding for Technica 2022'
  };

  return (
    <div className='task-container'>
      <p>{todo.name}</p>
      <button className="delete-btn">Delete</button>
    </div>
  )
}

export default Task