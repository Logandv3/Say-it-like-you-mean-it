import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PastEntryView.css'
import Card from './Card'


const PastEntryView = ({ viewType, entries, toggleEntry }) => {

  let displayEntries = viewType === 'all' ? 
  entries.map(entry => <Card title={entry.title} key={entry.id} id={entry.id} addEntry={toggleEntry} />) : 
  entries.filter((entry) => {
    return !entry.flagged ? false : <Card title={entry.title} key={entry.id} id={entry.id} />
  })

  return(
    <section className='past-entries-view'>
      <Link to='/'>
        <h3 className='back-to-main-link'>--Back to Main Page</h3>
      </Link>
      <p>This is where all user entry cards will go</p>
      <div className='entries-container'>{displayEntries}</div>
    </section>
  )
}

export default PastEntryView