// 3.Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).

import { useRef, useState } from 'react'
import './Assignment2.css'

const ToDoList = () => {
  const [todos, setTodos] = useState([])
  const ref = useRef()

  const handleCheckboxChange = (id, checked) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: checked }
      }
      return todo
    })
    setTodos(newTodos)
  }

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

      <ol>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className='todo-item'>
              <input
                type='checkbox'
                value={todo.checked}
                onChange={(event) =>
                  handleCheckboxChange(todo.id, event.target.checked)
                }
              />
              {todo.taskName}
              <button onClick={() => handleDeletion(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default ToDoList
