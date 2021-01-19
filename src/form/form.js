import React from 'react'
import PropTypes from 'prop-types'
import './form.css'

/**
 * Represents the main form page to sign up to the newsletter.
 * @constructor
 * @param {object} props - The react props. Currently requires the 'handleSubmit' function, which passes the form information for submission.
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
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <input type="email" className="form-control" placeholder="Email address" required autoFocus/>
          <input type="text" className="form-control" placeholder="First Name" required/>
          <input type="text" className="form-control" placeholder="Last Name" required/>
          <input type="submit" value="Sign up" className="btn btn-lg btn-primary btn-block"/>
        </form>
      </div>
    </div>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func
}

export default Form
