import React, { Component } from 'react'
import Route from './scenes/Route'
import Header from './components/Header'

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Route/>
      </div>
    );
  }
}

export default App;
