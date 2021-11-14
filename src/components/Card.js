import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Card.css'


const Card = ({ title, emotion, perception, id, addEntry }) => {
  let history = useHistory()

  return(
    <section className='entry-card' key={id} onClick={() => addEntry(id) && history.push(`/${id}`)} >
      <p>{title}</p>
      <p>{emotion}</p>
      <p>{perception}</p>
    </section>
  )
}

export default Card