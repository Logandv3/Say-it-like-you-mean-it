import React, { Component } from 'react'
import '../styles/App.css'
import Nav from './Nav'
import Form from './Form'
import Feedback from './Feedback'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return(
      <div className="app-container">
        <header className="app-header"> 
        </header>
        <Nav />
        <Form />
        {/* <Feedback />  */}
      </div>
    )
  }
}

export default App;
