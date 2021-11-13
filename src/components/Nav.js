import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Nav.css'

const Nav = ({ wid, closeNav }) => {

  return(
    <section className='navigation-container' style={{width: wid }} >
    <button name='close-nav' onClick={(event) => closeNav(event.target)}>Close</button>
      <NavLink to={`/past_entries/all`} >
        <h3 className='all-entries-link' name='all'>All Entries</h3>
      </NavLink>
      <NavLink to={`/past_entries/flagged`} >
        <h3 className='flagged-entries-link' name='flagged'>Flagged Entries</h3>
      </NavLink>
    </section>
  )
}

export default Nav