import React from 'react'

function Button({content}) {
  return (
    <>
    <button className='bg-primary text-white m-3 p-2 rounded'>{content}</button>
    </>
  )
}

export default Button