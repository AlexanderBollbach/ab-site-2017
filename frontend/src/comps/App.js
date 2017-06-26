import './style.css'
import React from 'react'
import Projects from './Projects'
import Home from './Home'
import Nav from './Nav'
import About from './about'
import {BrowserRouter as Router, Route } from 'react-router-dom'



class App extends React.Component {
  render() {
    return (
  <Router>
    <div className="App">
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={About} />
    </div>
  </Router>
    )
  }
}

export default App
