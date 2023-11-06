// 4.Build a registration form with two password fields. Implement controlled components for both password inputs. Add a validation rule to ensure that the two passwords match before allowing the form submission.

import { useState } from 'react'

const DualPasswordForm = () => {
  const [inputs, setInputs] = useState({})
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      }
    })
  }
  const handleSubmit = (event) => {
    if (inputs.password === inputs.confirmPassword) {
      alert('Form Submitted Successfully')
    } else {
      event.preventDefault()
      alert('Please check the passwords.')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            value={inputs.name || ''}
            placeholder='Enter your Name'
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={inputs.password || ''}
            placeholder='Enter your Password'
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Retype Password:</label>
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            value={inputs.confirmPassword || ''}
            placeholder='Enter your Password'
            onChange={handleInputChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default DualPasswordForm
