import { useState } from "react";
import './styles/App.css'

function TodoForm () {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (todo != '') {
      setTodos([...todos, todo])
      setTodo('')
    }
  }

  return (
    <form>
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
    </form>
  )
}

export default TaskForm