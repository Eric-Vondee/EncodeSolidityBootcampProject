pragma solidity ^0.8.8;

contract Quiz {
  uint public score;
  uint public totalQuestions;
  uint public currentQuestion;
  string[] public questions;
  string[][] public answers;
  uint[] public correctAnswers;

  constructor () public {
    totalQuestions = 0;
    currentQuestion = 0;
  }

  function addQuestion(string memory _question, string[] memory _answers, uint _correctAnswer) public {
    questions.push(_question);
    answers.push(_answers);
    correctAnswers.push(_correctAnswer);
    totalQuestions += 1;
  }

  function submitAnswer(uint _question, uint _answer) public {
    if (_answer == correctAnswers[_question]) {
      score += 1;
    }
    currentQuestion += 1;
  }
}
