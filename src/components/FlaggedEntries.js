import React from 'react'
import '../styles/FlaggedEntries.css'
import PastEntryView from './PastEntryView'


const FlaggedEntries = () => {

  return(
    <section className='flagged-entries-container'>
      <PastEntryView />
    </section>
  )
}

export default FlaggedEntries