import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = () => {

  return(
    <section>
      <NavLink to={`/past_entries/all_entries`} >
        <h3 className='all-entries-link' name='allentries'>All Entries</h3>
      </NavLink>
      <NavLink to={`/past_entries/flagged_entries`} >
        <h3 className='flagged-entries-link' name='flaggedentries'>Flagged Entries</h3>
      </NavLink>
    </section>
  )
}

export default Nav