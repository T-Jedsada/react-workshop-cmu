import React, { Component } from 'react'
import Route from './Route'
import Menu from './components/Menu'

class App extends Component {

  render() {
    return (
      <div>
        <Menu/>
        <Route/>
      </div>
    );
  }
}

export default App;
