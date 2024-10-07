import { useState } from 'react'
import './App.css'
import Pokemons from './components/Pokemons';
import Header from './components/Header';
import DifficultySelection from './components/DifficultySelection';

function App() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('start');
  const [difficulty, setDifficulty] = useState('medium');

  const restartGame = () => {
    setScore(0);
    setGameState('game');
  }

  switch (gameState) {
    case 'start':
      return (
        <div className='app'>
          <DifficultySelection setDifficulty={setDifficulty} restartGame={restartGame}></DifficultySelection>
        </div>
      )

    case 'game':
      return (
        <div className='app'>
          <Header score={score}></Header>
          <Pokemons setScore={setScore} setGameState={setGameState} difficulty={difficulty}></Pokemons>
        </div>
      )
    
    case 'win':
      return (
        <div className='app'>
          <div className='win-screen'>
            You won! score: {score}
            <DifficultySelection setDifficulty={setDifficulty} restartGame={restartGame}></DifficultySelection>
          </div>
        </div>
      )
  
    case 'lose':
      return (
        <div className='app'>
          <div className='lose-screen'>
            You lost! score: {score}
            <DifficultySelection setDifficulty={setDifficulty} restartGame={restartGame}></DifficultySelection>
          </div>
        </div>
      )
    default:
      return null;
  }
}

export default App
