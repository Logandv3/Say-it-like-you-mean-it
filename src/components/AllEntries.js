import React from 'react'
import '../styles/AllEntries.css'
import Card from './Card'


const AllEntries = () => {

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

export default AllEntries