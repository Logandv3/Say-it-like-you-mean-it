import React from 'react'
import '../styles/PastEntryView.css'
import Card from './Card'


const PastEntryView = () => {

  return(
    <section className='all-entries-container'>
      <p>This is where all user entry cards will go</p>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default PastEntryView