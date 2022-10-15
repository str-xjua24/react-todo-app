import { useState } from 'react';
import './styles/App.css'

function TodoForm ({todo, setTodo, addTodo}) {

  return (
    <div>
      <input 
        className='input-wrapper' 
        name='todo-input'
        value={todo}
        placeholder='What are we planning today?'
        type='text' 
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className='add-btn' onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodoForm