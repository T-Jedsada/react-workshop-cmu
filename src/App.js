import React, { Component } from 'react'
import HeaderClass from './HeaderClass'
import ToggleView from './ToggleView'

class App extends Component {

  render() {

    const props = {
      name: "20scoops CNX"
    }

    return (
      <div style = {{margin:10}}>
        <ToggleView/>
      </div>
    );
  }
}

export default App;
