import React from 'react'
import '../styles/FlaggedEntries.css'
import Card from './Card'


const FlaggedEntries = () => {

  return(
    <section className='flagged-entries-container'>
      <p>This is where only flagged user entry cards will go</p>
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default FlaggedEntries