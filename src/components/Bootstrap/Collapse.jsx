import React from 'react'

function Collapse() {
  return (
    <div className='container'>
    <div>
  <p>
    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#contentId1" aria-expanded="false" aria-controls="contentId">
        SHOW
    </button>
  </p>
  <div className="collapse" id="contentId1">
    <p>loremkdnfbkanfkjanekfjnefknfkjnkjnfknkgnkgnkgnksrngadgjbadljfbald vlm dgljnadlgnadlfnvldznfaldgnlkhlhlhjl</p>
  </div>
  <p>
    <a className="btn btn-primary" data-bs-toggle="collapse" href="#contentId2" aria-expanded="false" aria-controls="contentId2">
      Show
    </a>
  </p>
  <div className="collapse" id="contentId2">
  <p>loremkdnfbkanfkjanekfjnefknfkjnkjnfknkgnkgnkgnksrngadgjbadljfbald vlm dgljnadlgnadlfnvldznfaldgnlkhlhlhjl</p>
  </div>
</div>

    </div>
  )
}

export default Collapse