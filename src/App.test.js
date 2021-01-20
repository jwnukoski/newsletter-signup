/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders a visible email input', () => {
  render(<App />)
  const emailEl = document.getElementById('email')
  expect(emailEl).toBeVisible()
  expect(emailEl.nodeName).toEqual('INPUT')
})

test('renders a visible first name input', () => {
  render(<App />)
  const firstNameEl = document.getElementById('first-name')
  expect(firstNameEl).toBeVisible()
  expect(firstNameEl.nodeName).toEqual('INPUT')
})

test('renders a visible last name input', () => {
  render(<App />)
  const lastNameEl = document.getElementById('last-name')
  expect(lastNameEl).toBeVisible()
  expect(lastNameEl.nodeName).toEqual('INPUT')
})

test('renders a visible submit button', () => {
  render(<App />)
  const submitBtn = document.getElementById('submit-btn')
  expect(submitBtn).toBeVisible()
  expect(submitBtn.nodeName).toEqual('INPUT')
})

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })
