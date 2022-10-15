import Todo from './Todo'
function TodoList({list}) {

  return (
    <ul className='todo-list'>
      {list.map((todo, index) => (
        <li key={index}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList