import React, { useState } from 'react'
import './App.css'
import Form from './form/form.js'
import Success from './success/success.js'
import Failure from './failure/failure.js'
import * as axios from 'axios'

function App () {
  const [page, setPage] = useState(0)
  const [errors, setErrors] = useState('')

  function getPage (page) {
    switch (page) {
      case 0:
        return <Form handleSubmit={handleSubmit}/>
      case 1:
        return <Success/>
      case 2:
        return <Failure errors={errors}></Failure>
      default:
        return <div></div>
    }
  }

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
