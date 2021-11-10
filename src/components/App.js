import React, { Component } from 'react'
import '../styles/App.css'
import Nav from './Nav'
import Form from './Form'
import Feedback from './Feedback'
import PastEntryView from './PastEntryView'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      formInfo: {
        title: '',
        content: '',
        id: 0,
        flagged: false
      },
      allEntries: []
    }
  }

  handleChange = ({ name, value }) => {
    this.setState({ formInfo: {...this.state.formInfo, [name]: value } })
  }

  handleSubmit = async (event) => {
    event.preventDefault() 
    const newEntry = this.state.allEntries.slice()

    await this.setState({ formInfo: {...this.state.formInfo, id: Date.now()} })
    newEntry.push(this.state.formInfo)
    this.setState({ allEntries: newEntry })
    this.setState({ formInfo: { title: '', content: '', id: 0, flagged: false}})
  }

  render() {
    return(
      <div className="app-container">
        <Route
          exact
          path='/'
          render={() => {
            return (
              <main>
                <header className="app-header"> 
                  <div>
                    <h1>Say It Like You Mean It</h1>
                    <h3>Current View</h3>
                  </div>
                </header>
                <Nav />
                <Form formInfo={this.state.formInfo} onChange={this.handleChange} onSubmit={this.handleSubmit} />
              </main>
            )
          }}
        />
        <Switch>
        <Route
          exact
          path='/:id'
          render={() => <Feedback />} />
        <Route
          exact
          path='/:id'
          render={() => <PastEntryView />} />
        </Switch>
      </div>
    )
  }
}

export default App;
