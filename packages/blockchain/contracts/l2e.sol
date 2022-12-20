pragma solidity ^0.8.8;

contract L2E {

    error WrongAnswer();
  
    mapping (uint256 => bytes32) questions;
    mapping (uint256 => mapping(address => uint256)) public playersScore;

    function createQuestion(uint256 _questionId, bytes32 _hash) public {
        questions[_questionId] = _hash;
    }

    function verifyAnswers(uint256 _questionId, bytes32 _hash) public {
        if(_hash != questions[_questionId]) revert WrongAnswer();
        uint256 _score =  playersScore[_questionId][msg.sender];
        _score == 1 ? _score: ++playersScore[_questionId][msg.sender];
    }
    
}