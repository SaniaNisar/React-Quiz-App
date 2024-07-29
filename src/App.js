import React, { useState } from 'react';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import { QuizContext } from './Helpers/Contexts';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
      <div className="App">
        {gameState === 'menu' && <Menu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'result' && <Result />}
      </div>
    </QuizContext.Provider>
  );
}

export default App;
