import React from 'react'

function Badge() {
  return (
    <div>
  <div>
    <button className="btn btn-lg">
      Notifications <span className="badge bg-primary">12</span>
    </button>
    <span className="badge bg-secondary">New!</span>
    <br />
    <span className="badge rounded-pill text-bg-primary">New!</span>
    <br />
    <button className="btn btn-primary position-relative">
      Inbox 
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        99+
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>
  </div>
  <span>
  </span>
  </div>

  )
}

export default Badge