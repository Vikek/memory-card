import usePokemonHandler from '../usePokemonHandler'
import { useState, useEffect } from 'react'

function Pokemons({setScore, score}) {
    const { createRandomPokemonList } = usePokemonHandler();
    const [pokemons, setpokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const pokemonList = await createRandomPokemonList(5);
            setpokemons(pokemonList);
        }
        getPokemons();
    }, []);

    const handleCardClick = () => {
        setScore(score + 1);
        shuffleCards();
    }

    const shuffleCards = () => {
        let shuffledPokemons = pokemons;

        let currentIndex = shuffledPokemons.length;

        while (currentIndex != 0) {

            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [shuffledPokemons[currentIndex], shuffledPokemons[randomIndex]] = 
            [shuffledPokemons[randomIndex], shuffledPokemons[currentIndex]];
        }

        setpokemons(shuffledPokemons)
    }

    return (
        <div>
            {pokemons.map((pokemon, index) => (
                <div key={index} onClick={handleCardClick}>
                    <img src={pokemon.img} alt={pokemon.name} />
                    <span>{pokemon.name}</span>
                </div>
            ))}
        </div>
      )
}

export default Pokemons;