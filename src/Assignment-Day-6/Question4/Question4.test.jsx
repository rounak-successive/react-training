import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LoginForm from './Question4'

describe('LoginForm Component', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('renders initial count and buttons', () => {
    render(<LoginForm />)

    expect(
      screen.getByPlaceholderText('Enter your User Name')
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Enter your Password')
    ).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })

  test('Form Fields Can Be Filled Test', () => {
    render(<LoginForm />)
    const userNameInput = screen.getByPlaceholderText('Enter your User Name')
    const passwordInput = screen.getByPlaceholderText('Enter your Password')

    fireEvent.change(userNameInput, { target: { value: 'TestUser' } })
    fireEvent.change(passwordInput, { target: { value: 'TestPassword' } })

    expect(userNameInput).toHaveValue('TestUser')
    expect(passwordInput).toHaveValue('TestPassword')
  })

  test('Submit Button Triggers Alert for Valid Credentials Test', () => {
    render(<LoginForm />)
    const userNameInput = screen.getByPlaceholderText('Enter your User Name')
    const passwordInput = screen.getByPlaceholderText('Enter your Password')
    const submitButton = screen.getByText('Submit')

    fireEvent.change(userNameInput, { target: { value: 'Rounak' } })
    fireEvent.change(passwordInput, { target: { value: 'abc123' } })
    fireEvent.click(submitButton)

    expect(window.alert).toHaveBeenCalledWith('Welcome Rounak')
  })

  test('Submit Button Triggers Alert for Invalid Credentials Test', () => {
    render(<LoginForm />)
    const submitButton = screen.getByText('Submit')

    fireEvent.click(submitButton)

    expect(window.alert).toHaveBeenCalledWith('Invalid Username or Password')
  })
})
