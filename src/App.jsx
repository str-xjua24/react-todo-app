import { useState } from 'react'
import './styles/App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (todo != '') {
      setTodos([...todos, todo])
      setTodo('')
    }
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} />
    </div>
  )
}

export default App
