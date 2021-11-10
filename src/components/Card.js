import React from 'react'
import '../styles/Card.css'

const Card = ({ title }) => {

  return(
    <section className='entry-card'>
      <p>{title}</p>
    </section>
  )
}

export default Card