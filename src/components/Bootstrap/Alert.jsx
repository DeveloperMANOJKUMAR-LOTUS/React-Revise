import React from 'react'

function Alert() {
  return (
    <div>
        <p className="alert alert-primary">A primary normal Alert button .</p>
        <a className="alert alert-primary text-danger bg-primary">A primary normal Alert button .</a>
        <br />
        <div className="alert alert-danger" role="alert"><strong>Warning!</strong><a href="#" class="alert-link">Click Here</a></div>
    </div>

  )
}

export default Alert