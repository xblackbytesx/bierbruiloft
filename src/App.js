import React, { Component } from 'react';
import Counter from 'react-countdown-to-future-date';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	<Counter givenDate = {"August, 10, 2018"}  afterUnmount = {this.afterUnmount}/>,
      </div>
    );
  }
}

export default App;
