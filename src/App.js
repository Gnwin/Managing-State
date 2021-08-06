import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Game from './Game';




class App extends Component {
  state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
    //proposedAnswer: Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3,
	numQuestions: 0,
  	numCorrect: 0
  };
  
  proposedAnswer = () => Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
  
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <Game 
		  value1 = {this.state.value1} 
		  value2 = {this.state.value2} 
		  value3 = {this.state.value3} 
		  proposedAnswer = {this.proposedAnswer()} 
		/>
        
      </div>
    );
  }
}

export default App;
