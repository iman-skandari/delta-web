import React from 'react'
import "./titleCard.css"

export default ({img,deck}) => {

  return (
    <div className='card'>
    <img src={img} alt="" />
      <p>{deck}</p>
    </div>
  )
}

