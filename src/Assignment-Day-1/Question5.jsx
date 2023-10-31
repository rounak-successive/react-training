// 5.Create a functional component named TaskList that accepts an array of task names as a prop.
// Use the map function to render each task name as a list item.
// Import and render the TaskList component in the App component with an array of tasks.

import { PropTypes } from 'prop-types'
const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, key) => (
        <li key={key}>{task}</li>
      ))}
    </ul>
  )
}

TaskList.propType = {
  tasks: PropTypes.array.isRequired,
}

export default TaskList
