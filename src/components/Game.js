import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      indexQuestion: 0
    }
  }

  render() {
    return (
      <div>
        <Question dataItem={this.props.questions[this.state.indexQuestion]} onSubmit={this.handleSubmit.bind(this)} />
        <h3>Score: {this.state.score} / {this.props.questions.length}</h3>
      </div>
    );
  }

  handleSubmit(answer) {
    const stateToUpdate = {};
    if (this.props.questions[this.state.indexQuestion].correctAnswer === answer) {
      stateToUpdate.score = this.state.score + 1;
    }

    if (this.state.indexQuestion < this.props.questions.length -1) {
      stateToUpdate.indexQuestion = this.state.indexQuestion + 1;
    } else {
      this.props.onEnd();
    }

    this.setState(stateToUpdate);
  };
}

Game.propTypes = {
  questions: PropTypes.object.isRequired,
  onEnd: PropTypes.func.isRequired,
};

export default Game;
