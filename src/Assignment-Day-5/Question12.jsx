// 12.Create a reusable Button component in React that accepts props for different styles (e.g., primary, secondary, danger) and click handlers. Demonstrate how to use this component in a sample application.

import React from 'react'

const Button = (props) => {
  const { style, children, type, onClick } = props
  let buttonStyle = {}

  switch (type) {
    case 'primary':
      buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
      }
      break
    case 'secondary':
      buttonStyle = {
        backgroundColor: 'gray',
        color: 'black',
      }
      break
    case 'danger':
      buttonStyle = {
        backgroundColor: 'red',
        color: 'white',
      }
      break
    default:
      buttonStyle = {
        backgroundColor: 'transparent',
        color: 'black',
      }
  }
  return (
    <button onClick={onClick} style={{ ...buttonStyle, ...style }}>
      {children}
    </button>
  )
}

const SampleButtons = () => {
  return (
    <>
      <Button type='danger' onClick={() => alert('Danger')}>
        Danger
      </Button>
      <Button
        type='primary'
        onClick={() => console.log('Hi')}
        style={{ fontSize: '25px', padding: '5px' }}
      >
        Primary
      </Button>
      <Button type='secondary' onClick={() => console.log('Welcome user')}>
        Secondary
      </Button>
    </>
  )
}

export default SampleButtons
