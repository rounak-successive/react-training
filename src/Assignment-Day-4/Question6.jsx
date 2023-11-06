// 6.Build a simple todo list component with a text input for adding new tasks and a list to display them. Use controlled components to handle the input and update the list of tasks.

import { useRef, useState } from 'react'

const ToDoList = () => {
  const [todos, setTodos] = useState([])
  const ref = useRef()

  const handleDeletion = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const addTask = () => {
    setTodos([
      ...todos,
      { id: Date.now(), taskName: ref.current.value, checked: false },
    ])
  }
  return (
    <>
      <label>
        Enter Task: <input type='text' name='task' ref={ref} />{' '}
        <button onClick={() => addTask()}>Add Task</button>
      </label>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className='todo-item'>
              {todo.taskName}
              <button onClick={() => handleDeletion(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToDoList
