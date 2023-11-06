// 16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.

import { useState, useMemo } from 'react'

const EmployeeSalary = () => {
  const [changeFactor, setChangeFactor] = useState(1.1)
  const [employees, setEmployees] = useState([
    { name: 'XYZ', salary: 50000 },
    { name: 'ABC', salary: 60000 },
    { name: 'RD', salary: 55000 },
  ])

  const averageSalary = useMemo(() => {
    const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0)
    return totalSalary / employees.length
  }, [employees])

  const updateSalaries = () => {
    const updatedEmployees = employees.map((emp) => ({
      ...emp,
      salary: Number((emp.salary * changeFactor).toFixed(2)),
    }))
    setEmployees(updatedEmployees)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>${employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Employee Average Salary</h2>
      <p>Average Salary: ${averageSalary.toFixed(2)}</p>
      <input
        type='number'
        placeholder='Enter Change Factor'
        value={changeFactor}
        onChange={(event) => setChangeFactor(event.target.value)}
      />
      <button onClick={updateSalaries}>Change Salaries</button>
    </div>
  )
}

export default EmployeeSalary
