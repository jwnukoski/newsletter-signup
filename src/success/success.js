import React from 'react'
import './success.css'

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
