import { useState } from 'react'
import './styles/App.css'
import Todo from './Todo'
import TodoForm from './TodoForm'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <Todo />
    </div>
  )
}

export default App
