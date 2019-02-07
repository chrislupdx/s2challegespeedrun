import React, { Component } from 'react';
import Validationcomponent from './Validation/Validation';
import Charcomponent from './Validation/Char';
import './App.css';

class App extends Component {
  state = {
    userinput: '',
    length: 0,
  }

  countHandler = (event) => {
    this.setState({length: event.target.value.length, userinput: event.target.value});
  }

  render() {
    const charlist = this.state.userinput.split('').map(ch => {
      return <Charcomponent character= {ch} />;
    });


    return (
      <div className="App">
      <input
      type="text"
      onChange = {this.countHandler}
      value = {this.userinput}
      />
      <p>{this.state.length} is length</p>
      <p>{this.state.userinput}</p>
      <Validationcomponent
      length = {this.state.userinput.length}
       />
       {charlist}

      </div>
    );
  }
}

export default App;
