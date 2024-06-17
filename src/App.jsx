import { useState } from 'react'
import './App.css'
import Pokemons from './components/Pokemons';
import Header from './components/Header';

function App() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('game');

  const restartGame = () => {
    setScore(0);
    setGameState('game');
  }

  switch (gameState) {
    case 'game':
      return (
        <div className='app'>
          <Header score={score}></Header>
          <Pokemons setScore={setScore} setGameState={setGameState}></Pokemons>
        </div>
      )
    
    case 'win':
      return (
        <div className='app'>
          You won! score: {score}
          <button onClick={restartGame}>Restart</button>
        </div>
      )
  
    case 'lose':
      return (
        <div className='app'>
          You lost! score: {score}
          <button onClick={restartGame}>Restart</button>
        </div>
      )
    default:
      return null;
  }
}

export default App
