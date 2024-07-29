import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import './Result.css';
import { QuestionBank } from '../Helpers/QuestionBank';

const Result = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  };

  return (
    <div className="result">
      <h1>Quiz Completed</h1>
      <p>Your score: {score} / {QuestionBank.length}</p>
      <button onClick={restartQuiz} className="restart-button">Restart Quiz</button>
    </div>
  );
};

export default Result;
