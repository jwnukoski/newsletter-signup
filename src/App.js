import React from 'react'
import './App.css'
import Form from './form/form.js'
import * as axios from 'axios'

function App () {
  function handleSubmit (email, firstName, lastName) {
    axios.post('/subscribe', {
      email: email,
      firstName: firstName,
      lastName: lastName
    }).then(response => {
      console.log('Response: ', response)
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <div className="app">
      <Form handleSubmit={handleSubmit}/>
    </div>
  )
}

export default App
