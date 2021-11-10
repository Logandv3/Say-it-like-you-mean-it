import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Form.css'


const Form = ({ formInfo, handleChange }) => {

  return(
    <form>
      <input type='text' placeholder='Enter title of content' name='title' onChange={(e) => handleChange(e.target)} value={formInfo.title} />
      <input type='text' placeholder='Enter content you would like to analyze' name='content' onChange={(e) => handleChange(e.target)} value={formInfo.content} />
      <button className='analyze-entry-btn'>Analyze</button>
    </form>
  )
}

export default Form