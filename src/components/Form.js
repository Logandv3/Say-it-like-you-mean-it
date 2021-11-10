import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Form.css'


const Form = ({ formInfo, onChange, onSubmit }) => {

  return(
    <form className='entry-form' onSubmit={(event) => onSubmit(event)}>
      <input type='text' placeholder='Enter title of content' name='title' onChange={(event) => onChange(event.target)} value={formInfo.title} />
      <input type='text' placeholder='Enter content you would like to analyze' name='content' onChange={(event) => onChange(event.target)} value={formInfo.content} />
      <button type='submit' className='analyze-entry-btn'>Analyze</button>
    </form>
  )
}

export default Form