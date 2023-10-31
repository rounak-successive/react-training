// 15.Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.

import { useMemo, useState } from 'react'

const StudentList = () => {
  const initialStudentNames = ['Rounak', 'Aman', 'Ayush', 'KD']
  const [students, setStudents] = useState(initialStudentNames)
  const [newStudent, setNewStudent] = useState('')

  const memoizedStudentList = useMemo(() => students, [students])

  const handleAddStudent = () => {
    if (newStudent.trim() !== '') {
      setStudents([...students, newStudent])
      setNewStudent('')
    }
  }

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {memoizedStudentList.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      <div>
        <input
          type='text'
          value={newStudent}
          onChange={(event) => setNewStudent(event.target.value)}
          placeholder='Enter new student name'
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
    </div>
  )
}

export default StudentList
