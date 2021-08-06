import React, { Component } from 'react'


class Game extends Component {
  
  render(){
    const value1 = this.props.value1;
  	const value2 = this.props.value2;
  	const value3 = this.props.value3;
  	const proposedAnswer = this.props.proposedAnswer;
  	const numQuestions = 0;
  	const numCorrect = 0;
    
    return(
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p Name="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.proposedAnswer()}`}</p>
        </div>
        <button>True</button>
        <button>False</button>
        <p className="text">
          Your Score: {this.state.numCorrect}/{this.state.numQuestions}
        </p>
      </div>
    )
  };
};


export default Game;