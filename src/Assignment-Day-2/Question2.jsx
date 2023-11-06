// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import { useState } from 'react'

const PersonForm = () => {
  const [firstName, setFirstName] = useState(''),
    [lastName, setLastName] = useState(''),
    [age, setAge] = useState('')

  return (
    <form>
      <label>
        First Name:
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type='number'
          name='age'
          value={age}
          min='1'
          max='130'
          onChange={(event) => setAge(event.target.value)}
          required
        />
      </label>
      Hi {firstName} {lastName}. Your age is {age}.
    </form>
  )
}

export default PersonForm
