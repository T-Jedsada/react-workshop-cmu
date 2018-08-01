import React, { Component } from 'react'
import ToggleView from './ToggleView'
import List from './List'

class App extends Component {

  render() {
    return (
      <div style = {{margin:10}}>
        <ToggleView/>
        <List items={[
           "Apple",
           "Avocado",
           "Banana",
           "Kiwi"
        ]}/>
      </div>
    );
  }
}

export default App;
