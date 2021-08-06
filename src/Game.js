import React, { Component } from 'react'


class Game extends Component {
  state = {};
  

  render(){
    const value1 = Math.floor(Math.random() * 100);
  	const value2 = Math.floor(Math.random() * 100);
  	const value3 = Math.floor(Math.random() * 100);
  	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
  	const numQuestions = 0;
  	const numCorrect = 0;
    
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