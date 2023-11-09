import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Counter from './Question3'

test('renders initial count and buttons', () => {
  render(<Counter />)

  const countElement = screen.getByText('The current count is: 0')
  expect(countElement).toBeInTheDocument()

  const incrementButton = screen.getByText('Increment')
  expect(incrementButton).toBeInTheDocument()

  const decrementButton = screen.getByText('Decrement')
  expect(decrementButton).toBeInTheDocument()
})

test('increments count when the increment button is clicked', () => {
  render(<Counter />)

  const incrementButton = screen.getByText('Increment')
  const countElement = screen.getByText('The current count is: 0')

  fireEvent.click(incrementButton)
  expect(countElement).toHaveTextContent('The current count is: 1')

  fireEvent.click(incrementButton)
  expect(countElement).toHaveTextContent('The current count is: 2')
})

test('decrements count when the decrement button is clicked', () => {
  render(<Counter />)

  const decrementButton = screen.getByText('Decrement')
  const countElement = screen.getByText('The current count is: 0')

  fireEvent.click(decrementButton)
  expect(countElement).toHaveTextContent('The current count is: -1')

  fireEvent.click(decrementButton)
  expect(countElement).toHaveTextContent('The current count is: -2')
})
