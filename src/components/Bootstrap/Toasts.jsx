import React from 'react'

function Toasts() {
  return (
    <div>
        <div>
  {/* Flexbox container for aligning the toasts */}
  <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" style={{minHeight: 200}}>
    {/* Then put toasts within */}
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <img src className="rounded me-2" alt="{4:Bootstrap}" />
        <strong className="me-auto">4:Bootstrap</strong>
        <small>5:11 mins ago</small>
        <button type="button" className="ms-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
  

    </div>
    </div>
  )
}

export default Toasts