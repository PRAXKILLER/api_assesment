import React from 'react'
import '../App.css'

function Button({setData, data, task}) {
  return (
    <div className='btn'>
      <button onClick={() => setData(data)}>{task}</button>
    </div>
  )
}

export default Button
