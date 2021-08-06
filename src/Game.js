import React, { Component } from 'react'


class Game extends Component {
  //state = {
    //proposedAnswer: Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3,
  //};
  render(){
    const value1 = this.props.value1;
  	const value2 = this.props.value2;
  	const value3 = this.props.value3;
  	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
 	const numQuestions = this.props.numQuestions;
    const numCorrect = this.props.numCorrect; 
    
    return(
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p Name="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button>True</button>
        <button>False</button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
      </div>
    )
  };
};


export default Game;