// 4. Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.

import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  handleIncrement = () => this.setState({ count: this.state.count + 1 })
  handleDecrement = () => this.setState({ count: this.state.count - 1 })
  render() {
    return (
      <>
        <h2>The current count is: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>{' '}
        <button onClick={this.handleDecrement}>Decrement</button>{' '}
      </>
    )
  }
}

export default Counter
