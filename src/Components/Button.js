import React from 'react'

export default function Button({clickHandler,children}) {
  return (
      <button className='btn' onClick={clickHandler}>{ children }</button>
  )
}

