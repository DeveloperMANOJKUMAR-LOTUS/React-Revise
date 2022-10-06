import React from 'react'
import logo from '../images/images.png'

function Card() {
  return (
    <div>
        <div className="card text-center">
        <img className="card-img-top" src={logo} width="200px" height="200px" alt="Title" />
  <div className="card-body">
    <h4 className="card-title">Card Title ...</h4>
    <p className="card-text">Hello Everyone . This is a  BOdy of the card  ..</p>
  </div>
</div>  

    </div>
  )
}

export default Card