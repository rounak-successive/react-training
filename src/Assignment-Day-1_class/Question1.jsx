// 1.Create a functional component named Greeting that displays a simple
//         "Hello, React!" message on the screen. Import and render the Greeting
//         component in the App component.

import React, { Component } from 'react'
class Greeting extends Component {
  render() {
    return <h1 style={{ textAlign: 'center' }}>Hello, React!</h1>
  }
}
export default Greeting
