import React from 'react'

function OffCanvas() {
  return (
    <div>
        <div>
  <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#Id1" aria-controls="Id1">Enable both scrolling &amp; backdrop</button>
  <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="Id1" aria-labelledby="Enable both scrolling & backdrop">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="Enable both scrolling & backdrop">Backdrop with scrolling</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </div>
  </div>
</div>
<div>
  <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#Id2" aria-controls="Id2">
    Toggle static offcanvas
  </button>
  <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1} id="Id2" aria-labelledby="staticBackdropLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <div>
        I will not close if you click outside of me.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default OffCanvas




