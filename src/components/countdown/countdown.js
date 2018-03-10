import React, { Component } from 'react';

class Countdown extends Component {
  state = {
    time: this.props.givenDate
  };

  displayNone = (e) => {
    document.getElementById('PopUp').style.display = "none";
    this.props.afterTimeOut();
  };

  getInitialState = () => {
    return {time: new Date(this.props.givenDate)/1000}
  };

  update = () => {
    let newTime = this.state.time - 1; // minus one sec from initial time
    this.setState({time:newTime});

    if(this.state.time ===0){
      clearInterval(this.decr);
      this.props.afterUnmount
    }
  };

  componentDidMount = () => {
    this.decr = setInterval(this.update,1000)
  };

  render() {
    let formattedGivenDate = new Date(this.props.givenDate);
    let today = new Date();
    let msDiff =formattedGivenDate - today;
    let days = parseInt(msDiff/(24*3600*1000));
    let hours =parseInt(msDiff/(3600*1000)-(days*24));
    let mins = parseInt(msDiff/(60*1000)-(days*24*60)-(hours*60));
    let secs = parseInt(msDiff/(1000)-(mins*60)-(days*24*60*60)-(hours*60*60));

    return(
      <div className="countdown">
        <h1>{`Nog ${days} dagen ${hours} uur ${mins} minuten en ${secs} seconden te gaan!`}</h1>
      </div>
    )
  }
}

export default Countdown;
