import React from 'react'
import '../styles/Form.css'
import { useHistory } from 'react-router-dom'


const Form = ({ formInfo, onChange, currentEntry }) => {
  let history = useHistory()
  
  return(
    <form className='entry-form' onSubmit={() => history.push(`/${currentEntry.id}`)}>
      <input type='text' placeholder='Enter title of content' name='title' onChange={(event) => onChange(event.target)} value={formInfo.title} />
      <input type='text' placeholder='Enter content you would like to analyze' name='content' onChange={(event) => onChange(event.target)} value={formInfo.content} />
      <button type='submit' className='analyze-entry-btn'>Analyze</button>
    </form>
  )
}

export default Form