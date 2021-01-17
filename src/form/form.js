import React from 'react'
import './form.css'

function Form (props) {
  return (
    <div className="app">
      <div className="text-center">
        <form className="form-signin">
          <img className="mb-4" src="bootstrap-solid.svg" alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <input type="email" className="form-control" placeholder="Email address" required autoFocus/>
          <input type="text" className="form-control" placeholder="First Name" required/>
          <input type="text" className="form-control" placeholder="Last Name" required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default Form
