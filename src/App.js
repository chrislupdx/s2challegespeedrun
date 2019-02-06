import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    input: '',
    length: 0,
  }

  countHandler = (event) => {
    this.setState({length: event.target.value.length});
  }

  render() {

    return (
      <div className="App">
      <input />

      </div>
    );
  }
}

export default App;
