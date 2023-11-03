// 2. Build a form that includes various input fields like text inputs, checkboxes, and radio buttons. Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.

import { useState } from 'react'

const ControlledForm = () => {
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
  const handleRadioChange = (event) => {
    const { name, value, checked } = event.target
    if (checked) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }))
    }
  }
  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: checked,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
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
          <label htmlFor='phoneNo'>PhoneNo:</label>
          <input
            type='number'
            name='phoneNo'
            id='phoneNo'
            value={inputs.phoneNo || ''}
            placeholder='Enter your Phone Number'
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={inputs.email || ''}
            placeholder='Enter your Email'
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='approved'>Approved:</label>
          <input
            type='checkbox'
            name='approved'
            id='approved'
            checked={inputs.approved === true}
            onChange={handleCheckBoxChange}
          />
        </div>

        <div className='radioGroup'>
          <label>Sex:</label>
          <div className='radioOption'>
            <input
              type='radio'
              id='male'
              name='sex'
              value='male'
              checked={inputs.sex === 'male'}
              onChange={handleRadioChange}
            />
            <label htmlFor='male'>Male</label>
          </div>
          <div className='radioOption'>
            <input
              type='radio'
              id='female'
              name='sex'
              value='female'
              checked={inputs.sex === 'female'}
              onChange={handleRadioChange}
            />
            <label htmlFor='female'>Female</label>
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ControlledForm
