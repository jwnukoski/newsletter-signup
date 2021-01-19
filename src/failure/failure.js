import React from 'react'
import PropTypes from 'prop-types'
import './failure.css'

/**
 * Represents the failure page if an error happens during the newsletter signup.
 * @constructor
 * @param {object} props - The react props. Currently requires the 'error' string, which should contain some information about the error.
 */
function Failure (props) {
  return (
    <div className="failure">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Failure</h1>
          <p className="lead">{props.error}</p>
        </div>
      </div>
    </div>
  )
}

Failure.propTypes = {
  error: PropTypes.String
}

export default Failure
