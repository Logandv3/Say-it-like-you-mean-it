import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/Card.css'


const Card = ({ title, emotion, perception, addEntry, flagToggle, id, flagged }) => {
  let history = useHistory()
  const flagStatus = !flagged ? 'Flag Entry' : 'Remove Flag'

  return(
    <section className='entry-card' key={id} >
      <header className='card-header'>
        <h3>{title}</h3>
        <button type='button' className='flag-button' onClick={() => flagToggle(id, flagged)} >{flagStatus}</button>
      </header>
      <div className='card-details' onClick={() => addEntry(id) && history.push(`/${id}`)}>
        <p>Primary Emotion: {emotion}</p>
        <p>Perceived As: {perception}</p>
      </div>
    </section>
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.string.isRequired,
  emotion: PropTypes.string.isRequired,
  perception: PropTypes.string.isRequired,
  addEntry: PropTypes.func.isRequired,
  flagToggle: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flagged: PropTypes.bool.isRequired
}