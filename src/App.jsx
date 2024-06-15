import { useState } from 'react'
import './App.css'
import Pokemons from './components/Pokemons';
import Header from './components/Header';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className='app'>
      <Header score={score}></Header>
      <Pokemons setScore={setScore} score={score}></Pokemons>
    </div>
  )
}

export default App
