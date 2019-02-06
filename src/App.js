import React, { Component } from 'react';
import Validationcomponent from './Validation/Validation';
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
      <input
      onChange = {this.countHandler}
      />
      <p>{this.state.length}</p>
      <Validationcomponent
      length = {this.state.length}
       />

      </div>
    );
  }
}

export default App;
