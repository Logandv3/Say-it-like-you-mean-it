import React, { Component } from 'react'
import '../styles/App.css'
import Nav from './Nav'
import Form from './Form'
import Feedback from './Feedback'
import PastEntryView from './PastEntryView'

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
          <div>
            <h1>Say It Like You Mean It</h1>
            <h3>Current View</h3>
          </div>
        </header>
        <Nav />
        <Form />
        <Feedback /> 
        <PastEntryView />
      </div>
    )
  }
}

export default App;
