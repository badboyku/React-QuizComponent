import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
        <button>{this.prop.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
