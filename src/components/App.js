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
      currentEntry: {},
      navWidth: '0%'
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

  toggleNavBar = ({ name }) => {
    name === 'open-nav' ? this.setState({ navWidth: '15%' }) : this.setState({ navWidth: '0%' })
  }

  toggleFlag = (id, flagged) => {
    const changeTo = !flagged ? 'true' : false
    const entriesCopy = this.state.allEntries.map((entry) => {
      if (id === entry.id) {
        entry.flagged = changeTo
      }

      return entry
    })

    this.setState({ allEntries: entriesCopy })
  }

  cleanResponseData = async (respData) => {
    const cleanedData = {
      primaryEmotion: respData.emotion_prediction,
      emotionRatings: {
        anger: `${(respData.emotion_scores.Anger * 100).toFixed(1)}%`,
        fear: `${(respData.emotion_scores.Fear * 100).toFixed(1)}%`,
        joy: `${(respData.emotion_scores.Joy * 100).toFixed(1)}%`,
        neutral: `${(respData.emotion_scores.Neutral * 100).toFixed(1)}%`,
        sadness: `${(respData.emotion_scores.Sadness * 100).toFixed(1)}%`,
      },
      perceivedAs: respData.sentiment_prediction,
      perceptionRatings: {
        positivity: respData.sentiment_scores.Positive,
        negativity: respData.sentiment_scores.Negative
      }
    }
    await this.setState({ currentEntry: {...this.state.currentEntry, entryAnalysis: cleanedData} })
    return true
  }

  render() {
    return(
      <div className="app-container">
        <main className='main-content'>
          <header className="app-header"> 
            <div className='app-title'>
              <h1 className='header-title'>Say It Like You Mean It</h1>
            </div>
            {/* <h3>Current View</h3> */}
            <button className='open-nav-btn' name='open-nav' onClick={(event) => this.toggleNavBar(event.target)}>Open</button>
            <Nav wid={this.state.navWidth} closeNav={this.toggleNavBar} />
          </header>
          <Route
            exact
            path='/'
            render={() => {
              return (
                  <Form formInfo={this.state.formInfo} onChange={this.handleChange} currentEntry={this.state.currentEntry} cleanResponse={this.cleanResponseData} />
              )
            }}
          />
        </main>
        <Switch>
        <Route
          exact
          path='/:id'
          render={() => <Feedback currentEntry={this.state.currentEntry} addEntry={this.addNewEntry} clearEntry={this.toggleCurrentEntry} /> }
        />
        <Route
          exact
          path='/past_entries/:name'
          render={({ match }) => <PastEntryView viewType={match.params.name} entries={this.state.allEntries} toggleEntry={this.toggleCurrentEntry} toggleFlag={this.toggleFlag} />} />
        </Switch>
      </div>
    )
  }
}

export default App
