import React from 'react'

const NotFound = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '100px',
  }

  const headingStyle = {
    fontSize: '3rem',
    color: '#f44336', // Red color for emphasis
  }

  const textStyle = {
    fontSize: '1.5rem',
    color: '#333', // Dark gray color for text
  }

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '20px',
  }

  return (
    <div style={containerStyle}>
      <img
        src={process.env.PUBLIC_URL + '/404.png'}
        alt='Page Not Found'
        style={imageStyle}
      />
      <h1 style={headingStyle}>404 - Not Found</h1>
      <p style={textStyle}>The page you are looking for does not exist.</p>
    </div>
  )
}

export default NotFound
