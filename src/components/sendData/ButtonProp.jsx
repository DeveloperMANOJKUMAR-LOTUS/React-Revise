import React from 'react'

function ButtonProp(props) {
  return (
    <div>
        <button className='bg-dark text-white p-4 rounded' >Button Props {props.content}</button>
    </div>
  )
}

export default ButtonProp