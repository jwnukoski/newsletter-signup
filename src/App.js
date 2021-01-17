import React from 'react'
import './App.css'

function App () {
  return (
    <div className="text-center">
      <form className="form-signin">
        <img className="mb-4" src="bootstrap-solid.svg" alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
        <div className="checkbox mb-3">
          <label htmlFor="remember-me">Remember me</label>
            <input type="checkbox" value="remember-me" id="remember-me"/>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default App
