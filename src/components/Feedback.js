import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Feedback.css'


const Feedback = ({ addEntry, clearEntry, currentEntry }) => {

  useEffect(() => {
    addEntry(currentEntry.id)
    return() => {
      clearEntry()
    }
  }, [])

  return(
    <section className='feedback-container'>
      <Link to='/'>
        <h3 className='back-to-main-link'>--Back to Main Page</h3>
      </Link>
      <p>Title: {currentEntry.title}</p>
      <p>Content: {currentEntry.content}</p>
    </section>
  )
}

export default Feedback