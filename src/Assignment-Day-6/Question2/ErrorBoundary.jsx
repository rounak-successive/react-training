import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  // componentDidCatch(error, errorInfo) {
  //   console.error(error, errorInfo)
  //   this.setState({ hasError: true })
  // }

  render() {
    if (this.state.hasError) {
      console.log('error')
      return this.props.fallback || <h1>Something went wrong.</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
