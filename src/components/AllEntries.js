import React from 'react'
import '../styles/AllEntries.css'
import PastEntryView from './PastEntryView'


const AllEntries = () => {

  return(
    <section className='all-entries-container'>
      <PastEntryView />
    </section>
  )
}

export default AllEntries