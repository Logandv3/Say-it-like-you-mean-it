import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PastEntryView.css'
import Card from './Card'


const PastEntryView = ({ viewType, entries, toggleEntry }) => {

  let displayEntries = viewType === 'all' ? 
  entries.map(entry => <Card title={entry.title} emotion={entry.entryAnalysis.primaryEmotion} perception={entry.entryAnalysis.perceivedAs} key={entry.id} id={entry.id} addEntry={toggleEntry} />) : 
  entries.filter((entry) => {
    return !entry.flagged ? false : <Card title={entry.title} emotion={entry.entryAnalysis.primaryEmotion} perception={entry.entryAnalysis.perceivedAs} key={entry.id} id={entry.id} />
  })

  const viewTitle = viewType === 'all' ? 'All Entries' : 'Flagged Entries'

  return(
    <section className='past-entries-view'>
      <Link to='/'>
        <h3 className='back-to-main-link'>--Back to Main Page</h3>
      </Link>
      <section className='entries-container'>
        <h2>{viewTitle}</h2>
        <div className='card-container'>{displayEntries}</div>
      </section>
    </section>
  )
}

export default PastEntryView