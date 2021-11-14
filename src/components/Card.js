import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Card.css'


const Card = ({ title, emotion, perception, id, addEntry }) => {
  let history = useHistory()

  return(
    <section className='entry-card' key={id} onClick={() => addEntry(id) && history.push(`/${id}`)} >
      <h3>{title}</h3>
      <p>Primary Emotion: {emotion}</p>
      <p>Perceived As: {perception}</p>
    </section>
  )
}

export default Card