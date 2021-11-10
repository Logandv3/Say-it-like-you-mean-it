import React from 'react'
import './styles/Form.css'


const Form = () => {

  return(
    <form>
      <input type='text' placeholder='Enter title of content' />
      <input type='text' placeholder='Enter content you would like to analyze' />
      <button className='analyze-entry-btn'>Analyze</button>
    </form>
  )
}

export default Form