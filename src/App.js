import React, { useState } from 'react'
import './App.css'
import Form from './form/form.js'
import Success from './success/success.js'
import Failure from './failure/failure.js'
import * as axios from 'axios'

/**
 * Represents the main app.
 * @constructor
 */
function App () {
  const [page, setPage] = useState(0)
  const [errors, setErrors] = useState('')

  /**
   * Returns the page to be displayed.
   * @param {int} page - The page number to decide which should be returned. The 'page' state should be used here.
   * @returns {jsx} The JSX/HTML to display.
   */
  function getPage (page) {
    switch (page) {
      case 0:
        return <Form handleSubmit={handleSubmit}/>
      case 1:
        return <Success/>
      case 2:
        return <Failure errors={errors} setPage={setPage}></Failure>
      default:
        return <div></div>
    }
  }

  /**
   * Submits the user's info to the ExpressJS server. It then changes the page to the success or failure page after a response is received.
   * @param {string} email - The user's email for the Mailchimp list.
   * @param {string} firstName - The user's first name for the MailChimp list.
   * @param {string} lastName - The user's last name for the MailChimp list.
   */
  function handleSubmit (email, firstName, lastName) {
    axios.post('/subscribe', {
      email: email,
      firstName: firstName,
      lastName: lastName
    }).then(response => {
      setErrors('')
      setPage(1)
    }).catch(error => {
      setErrors(error.message)
      setPage(2)
    })
  }

  return (
    <div className="app">
      { getPage(page) }
    </div>
  )
}

export default App
