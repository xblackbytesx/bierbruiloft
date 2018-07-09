import React, { Component } from 'react';
import Counter from './components/countdown/countdown';
import './App.css';
import './static/img/bg.jpg';

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
