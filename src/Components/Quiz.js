import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { QuestionBank } from '../Helpers/QuestionBank';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const { score, setScore, setGameState } = useContext(QuizContext);

  const nextQuestion = () => {
    if (selectedOption === QuestionBank[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion + 1 < QuestionBank.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('result');
    }
  };

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2>{QuestionBank[currentQuestion].question}</h2>
        <div className="options">
          {QuestionBank[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => selectOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button onClick={nextQuestion} className="next-button">Next Question</button>
      </div>
    </div>
  );
};

export default Quiz;
