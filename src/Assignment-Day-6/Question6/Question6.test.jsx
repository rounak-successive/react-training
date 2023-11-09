import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ModalComponent from './Question6'

describe('ModalComponent', () => {
  test('renders the modal when isOpen is true', () => {
    render(<ModalComponent isOpen={true} />)
    const modal = screen.getByTestId('modal')
    expect(modal).toHaveStyle('display: block')
  })

  test('does not render the modal when isOpen is false', () => {
    render(<ModalComponent isOpen={false} />)
    const modal = screen.getByTestId('modal')
    expect(modal).toHaveStyle('display: none')
  })

  test('renders children within the modal', () => {
    render(
      <ModalComponent isOpen={true}>
        <p>Test Children</p>
      </ModalComponent>
    )
    expect(screen.getByText('Test Children')).toBeInTheDocument()
  })

  test('applies modal styles correctly', () => {
    render(<ModalComponent isOpen={true} />)
    const modal = screen.getByTestId('modal')
    expect(modal).toHaveStyle('background-color: rgba(0, 0, 0, 0.5)')
  })

  test('applies modal main styles correctly', () => {
    render(<ModalComponent isOpen={true} />)
    const modalMain = screen.getByTestId('modal-main')
    expect(modalMain).toHaveStyle('width: 60%')
  })

  test('shows and triggers the close button', () => {
    const handleClose = jest.fn()
    render(<ModalComponent isOpen={true} handleClose={handleClose} />)
    fireEvent.click(screen.getByText('Close'))
    expect(handleClose).toHaveBeenCalled()
  })
})
