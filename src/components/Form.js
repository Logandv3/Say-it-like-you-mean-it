import React from 'react'
import '../styles/Form.css'
import { useHistory } from 'react-router-dom'
import { submitEntry } from './apiCalls'


const Form = ({ formInfo, onChange, currentEntry, cleanResponse }) => {
  const history = useHistory()
  let btnStatus = (formInfo.title && formInfo.content) ? false : true

  return(
    <form className='entry-form'>
      <input className='title-input' type='text' placeholder='Enter title of content' name='title' onChange={(event) => onChange(event.target)} value={formInfo.title} />
      <input className='content-input' type='text' placeholder='Enter content you would like to analyze' name='content' onChange={(event) => onChange(event.target)} value={formInfo.content} />
      <button type='button' disabled={btnStatus} className='analyze-entry-btn' onClick={async () => await submitEntry(currentEntry.content, cleanResponse) && history.push(`/${currentEntry.id}`)}>Analyze</button>
    </form>
  )
}

export default Form