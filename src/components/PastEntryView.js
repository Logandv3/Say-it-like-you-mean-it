import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PastEntryView.css'
import Card from './Card'


const PastEntryView = ({ viewType, entries, toggleEntry, toggleFlag }) => {
  let displayEntries;

  if (viewType === 'all') {
    displayEntries = entries.map((entry) => {
      return <Card title={entry.title} emotion={entry.entryAnalysis.primaryEmotion} perception={entry.entryAnalysis.perceivedAs} flagged={entry.flagged} key={entry.id} id={entry.id} addEntry={toggleEntry} flagToggle={toggleFlag} />
    })

  } else if (viewType !== 'all') {
    let filteredDisplayEntries = entries.filter((entry) => {
      if (entry.flagged) {
        return <Card title={entry.title} emotion={entry.entryAnalysis.primaryEmotion} perception={entry.entryAnalysis.perceivedAs} flagged={entry.flagged} key={entry.id} id={entry.id} addEntry={toggleEntry} flagToggle={toggleFlag} />
      }
      return false
    })
    
    displayEntries = filteredDisplayEntries.map((entry) => {
      return <Card title={entry.title} emotion={entry.entryAnalysis.primaryEmotion} perception={entry.entryAnalysis.perceivedAs} flagged={entry.flagged} key={entry.id} id={entry.id} addEntry={toggleEntry} flagToggle={toggleFlag} />
    })
  }

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