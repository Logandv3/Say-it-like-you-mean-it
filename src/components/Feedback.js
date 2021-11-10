import React, { useEffect } from 'react'
import '../styles/Feedback.css'


const Feedback = ({ addEntry }) => {
  useEffect(() => {
    addEntry()
  }, [])

  return(
    <section className='feedback-container'>
      <p>This is where the feedback will go</p>
    </section>
  )
}

export default Feedback