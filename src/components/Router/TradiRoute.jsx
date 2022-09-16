import React from 'react'
import BrowserRoute from './BrowserRoute'

function TradiRoute() {
  return (
    <div>
        <BrowserRoute />
        <h3>Traditional Route  .</h3>
        <a href="/home">Home Page ..</a>
        <a href="/about">About </a>
        <a href="/privacy">Privacy .</a>
    </div>
  )
}

export default TradiRoute