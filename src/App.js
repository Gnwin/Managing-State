import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Game from './Game';




class App extends Component {
  state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
   	numQuestions: 0,
  	numCorrect: 0
    //correct: false
  };
  
  incrementScore = () => {
    this.setState((currentState)=>({
      numQuestions: currentState.numQuestions+=1
    }));
  }
  
  numOfCorrectQuestions = () => {
    this.setState((currentState)=>({
      numCorrect: currentState.numCorrect+=1
    }));
  }
  

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
		  numQuestions = {this.state.numQuestions}
  		  numCorrect = {this.state.numCorrect}
		/>
        
      </div>
    );
  }
}

export default App;
