import React from 'react';
import '../App.css';
import HardyBucks from '../images/hardybucks.jpg';

class Content extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Hardy Bucks Page</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <img src={HardyBucks} width="400" height="300" />
        <br>
        <p>This is a page dedicated to the Hardy Bucks</p>
        </br>
      </div>
    );
  }
}

export default Content;