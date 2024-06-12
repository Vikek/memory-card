import { useState } from 'react'
import './App.css'
import Pokemons from './components/Pokemons';
import Header from './components/Header';

function App() {
  const [score, setScore] = useState(0);

  const handleCardClick = () => {
    setScore(score + 1);
  }
  
  return (
    <div className='app'>
      <Header score={score}></Header>
      <Pokemons onClick={handleCardClick}></Pokemons>
    </div>
  )
}

export default App
