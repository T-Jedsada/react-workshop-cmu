import React, { Component } from 'react';

import Header from './Header'
import HeaderClass from './HeaderClass'

class App extends Component {
  render() {
    return (
      <div style = {{margin:10}}>
        <Header name="20scoops CNX"/>
        <Header name="Workshop CMU"/>
        <HeaderClass name=""/>
      </div>
    );
  }
}

export default App;
