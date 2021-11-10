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

  addNewEntry = () => {
    const allEntriesUpdate = this.state.allEntries.slice()
    allEntriesUpdate.push(this.state.currentEntry)
    this.setState({ allEntries: allEntriesUpdate })
    this.setState({ formInfo: {title: '', content: '', id: 0, flagged: false}, currentEntry: {} })
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
          render={() => <Feedback addEntry={this.addNewEntry} currentEntry={this.state.currentEntry} /> }
        />
        <Route
          exact
          path='/past_entries/:name'
          render={({ match }) => <PastEntryView viewType={match.params.name} entries={this.state.allEntries} />} />
        </Switch>
      </div>
    )
  }
}

export default App
