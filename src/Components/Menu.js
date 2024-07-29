import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import './Menu.css';

const Menu = () => {
  const { setGameState } = useContext(QuizContext);

  const startQuiz = () => {
    setGameState('quiz');
  };

  return (
    <div className="menu">
      <h1>Welcome to the Quiz</h1>
      <button onClick={startQuiz} className="menu-button">Start Quiz</button>
    </div>
  );
};

export default Menu;
