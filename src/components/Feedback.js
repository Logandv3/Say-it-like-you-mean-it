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
      <div className='link-container'>
        <header className='feedback-header'>
          <Link to='/'>
            <h3 className='back-to-main-link'>--Back to Main Page</h3>
          </Link>
        </header>
        <div className='entry-content-container'>
          <p className='entry-title'>{currentEntry.title}</p>
          <p className='entry-content'>{currentEntry.content}</p>
        </div>
      </div>
      <div className='analysis-container'>
        <div className='emotion-container'>
          <p>Primary Emotion: {currentEntry.entryAnalysis.primaryEmotion}</p>
          <p>Anger: {currentEntry.entryAnalysis.emotionRatings.anger}</p>
          <p>Fear: {currentEntry.entryAnalysis.emotionRatings.fear}</p>
          <p>Joy: {currentEntry.entryAnalysis.emotionRatings.joy}</p>
          <p>Neutral: {currentEntry.entryAnalysis.emotionRatings.neutral}</p>
          <p>Sadness: {currentEntry.entryAnalysis.emotionRatings.sadness}</p>
        </div>
        <div className='perception-container'>
          <p>Message Undertone: {currentEntry.entryAnalysis.perceivedAs}</p>
          <p>Negativity: {currentEntry.entryAnalysis.perceptionRatings.negativity}</p>
          <p>Positivity: {currentEntry.entryAnalysis.perceptionRatings.positivity}</p>
        </div>
      </div>
    </section>
  )
}

export default Feedback