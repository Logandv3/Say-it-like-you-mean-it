import React from 'react'
import '../styles/Form.css'
import { useHistory } from 'react-router-dom'
import { submitEntry } from './apiCalls'


const Form = ({ formInfo, onChange, currentEntry, cleanResponse }) => {
  let btnStatus = (formInfo.title && formInfo.content) ? false : true
  let history = useHistory()

  return(
    <form className='entry-form'>
      <input type='text' placeholder='Enter title of content' name='title' onChange={(event) => onChange(event.target)} value={formInfo.title} />
      <input type='text' placeholder='Enter content you would like to analyze' name='content' onChange={(event) => onChange(event.target)} value={formInfo.content} />
      <button type='button' disabled={btnStatus} className='analyze-entry-btn' onClick={() => submitEntry(currentEntry.content, cleanResponse) && history.push(`/${currentEntry.id}`)}>Analyze</button>
    </form>
  )
}

export default Form