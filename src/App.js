import React, { Component } from 'react'
import './App.css'
import Route from './scenes/Route'
import Header from './components/Header'

class App extends Component {

  state = {
    username: ""
  }

  render() {
    return (
      <div>
        <Header name={this.state.username}/>
        <Route/>
      </div>
    );
  }
}

export default App;
