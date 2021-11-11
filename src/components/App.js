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
      allEntries: [],
      currentEntry: {}
    }
  }

  handleChange = async ({ name, value }) => {
    await this.setState({ formInfo: {...this.state.formInfo, [name]: value } })
    this.setState({ currentEntry: this.state.formInfo })
    !this.state.formInfo.id && this.setState({ formInfo: {...this.state.formInfo, id: Date.now()} })
  }

  addNewEntry = (id) => {
    const allEntriesUpdate = this.state.allEntries.filter(entry => entry.id !== id)
    allEntriesUpdate.push(this.state.currentEntry)
    
    this.setState({ allEntries: allEntriesUpdate })
    this.setState({ formInfo: {title: '', content: '', id: 0, flagged: false}})
  }

  toggleCurrentEntry = (id) => {
    if (!this.state.currentEntry) {
      let clickedEntry = this.state.allEntries.filter(entry => entry.id === id)
      this.setState({ currentEntry: clickedEntry[0] })
      return true
    }

    this.setState({ currentEntry: 0 })
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
                <Form formInfo={this.state.formInfo} onChange={this.handleChange} currentEntry={this.state.currentEntry} />
              </main>
            )
          }}
        />
        <Switch>
        <Route
          exact
          path='/:id'
          render={({ match }) => <Feedback currentEntry={this.state.currentEntry} addEntry={this.addNewEntry} clearEntry={this.toggleCurrentEntry} /> }
        />
        <Route
          exact
          path='/past_entries/:name'
          render={({ match }) => <PastEntryView viewType={match.params.name} entries={this.state.allEntries} toggleEntry={this.toggleCurrentEntry} />} />
        </Switch>
      </div>
    )
  }
}

export default App
