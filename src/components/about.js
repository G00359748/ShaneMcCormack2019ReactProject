import React from 'react';
import '../App.css';
import HBPIC from '../images/hbpic.jpg';

class About extends React.Component {

  render() {
    return (
      <div className="App">
        <img src={HBPIC} width="400" height="300" />
        <h1>About the Hardy Bucks</h1>
        <br>
        <p>The Hardy Bucks was started after Chris Tordoff who plays Francis "The Viper" Higgins on the show started it off as a college project which soon developed into an internet comedy after it entered Rte's storyland competition.</p>
        </br>
        <br>
        <p>The Hardy Bucks beat eight other shows to win the Rte's storyland competition and soon got a 3 episode series comissioned by Rte in 2010.It was successful with the viewers and a christmas special was added the same year.</p>
        </br>
        <br>
        <p>
           The second season was comissioned the next year which concentrated on Eddie Durcan's plans to go and work in America and Salmon's wedding to Svetlana.
        </p>
        </br>
        <br>
        <p>A third series was comissioned in 2015 and a fourth was comissioned in 2018</p>
        </br>
      </div>
    );
  }
}

export default About;