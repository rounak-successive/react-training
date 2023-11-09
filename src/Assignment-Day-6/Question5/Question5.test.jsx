import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserProfile from './Question5'

describe('UserProfile Component', () => {
  const user = {
    name: 'Rounak Dwary',
    email: 'rounak.dwary@successive.tech',
    phone: '123-456-7890',
  }

  test('Missing props test', () => {
    render(<UserProfile />)
    expect(screen.getByText('Name:')).toBeInTheDocument()
    expect(screen.getByText(`Email:`)).toBeInTheDocument()
    expect(screen.getByText(`Phone:`)).toBeInTheDocument()
  })

  test('All User Profile Info Displayed', () => {
    render(<UserProfile user={user} />)
    expect(screen.getByText(`Name: ${user.name}`)).toBeInTheDocument()
    expect(screen.getByText(`Email: ${user.email}`)).toBeInTheDocument()
    expect(screen.getByText(`Phone: ${user.phone}`)).toBeInTheDocument()
  })
})
