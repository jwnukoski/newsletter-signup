import React from 'react'
import './success.css'

/**
 * Represents the Success page after a user has successfully signed up to the newsletter.
 * @constructor
 * @param {object} props - The react props. Not currently used, but could be useful in the future.
 */
function Success (props) {
  return (
    <div className="success">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Success</h1>
          <p className="lead">You have subscribed to the newsletter</p>
        </div>
      </div>
    </div>
  )
}

export default Success
