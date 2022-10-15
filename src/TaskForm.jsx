import { useState } from "react";
import './styles/App.css'

function TaskForm () {

  return (
    <form>
      <input className='input-box' type='text' />
      <button>Add</button>
    </form>
  )
}

export default TaskForm