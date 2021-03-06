import React from 'react'
import PropTypes from 'prop-types'
import './form.css'

/**
 * Represents the main form page to sign up to the newsletter.
 * @constructor
 * @param {object} props - The react props.
 * @param {function} props.handleSubmit - Function to send the user info to the server.
 */
function Form (props) {
  function handleSubmit (e) {
    e.preventDefault()
    props.handleSubmit(e.target[0].value, e.target[1].value, e.target[2].value)
  }

  return (
    <div className="app">
      <div className="text-center">
        <form className="form-signin" onSubmit={handleSubmit}>
          <img className="mb-4" src="bootstrap-solid.svg" alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">Mailchimp Signup</h1>
          <input type="email" className="form-control" placeholder="Email address" id="email" required autoFocus/>
          <input type="text" className="form-control" placeholder="First Name" id="first-name" required/>
          <input type="text" className="form-control" placeholder="Last Name" id="last-name" required/>
          <input type="submit" id="submit-btn" value="Sign up" className="btn btn-lg btn-primary btn-block"/>
        </form>
      </div>
    </div>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func
}

export default Form
