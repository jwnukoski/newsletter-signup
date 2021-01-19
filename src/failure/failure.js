import React from 'react'
import PropTypes from 'prop-types'
import './failure.css'

/**
 * Represents the failure page if an error happens during the newsletter signup.
 * @constructor
 * @param {object} props - The react props.
 * @param {string} props.error - The error message.
 * @param {string} props.setPage - The setState function to change the page, for the back button.
 */
function Failure (props) {
  function handleBackBtnClick () {
    props.setPage(0)
  }

  return (
    <div className="failure">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Failure</h1>
          <p className="lead">{props.error}</p>
          <button onClick={handleBackBtnClick} className="btn btn-primary">Go back</button>
        </div>
      </div>
    </div>
  )
}

Failure.propTypes = {
  error: PropTypes.string,
  setPage: PropTypes.func
}

export default Failure
