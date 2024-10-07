import usePokemonHandler from '../usePokemonHandler'
import { useState, useEffect } from 'react'

function Pokemons({setScore, setGameState, difficulty}) {
    const { createRandomPokemonList } = usePokemonHandler();
    const [pokemons, setPokemons] = useState([]);
    const [clickedPokemonIds, setClickedPokemonIds] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            let numberOfPokemons;
            switch (difficulty) {
                case 'easy':
                    numberOfPokemons = 5;
                    break;
                
                case 'medium':
                    numberOfPokemons = 10;
                    break;

                case 'hard':
                    numberOfPokemons = 15;
                    break;
                default:
                    numberOfPokemons = 5
                    break;
            }
            const pokemonList = await createRandomPokemonList(numberOfPokemons);
            setPokemons(pokemonList);
        }
        getPokemons();
    }, []);

    const handleCardClick = (e, pokemon) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(clickedPokemonIds);

        if(clickedPokemonIds.includes(pokemon.id)) { //check lose
            setGameState('lose');
            console.log('you lost!');
            reset();
            return;
        }

        setClickedPokemonIds(idList => [...idList, pokemon.id]);
        setScore(prevScore => prevScore + 1);
        
        if(clickedPokemonIds.length >= pokemons.length - 1) { //check win
            setGameState('win');
            console.log('you won!');
            reset();
            return;
        }
            
        shuffleCards();
    }

    const shuffleCards = () => {
        setPokemons(prevPokemons => {
            const shuffledPokemons = [...prevPokemons];

            for (let i = shuffledPokemons.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledPokemons[i], shuffledPokemons[j]] = [shuffledPokemons[j], shuffledPokemons[i]];
            }

            return shuffledPokemons;
        });
    }

    const reset = () => {
        setPokemons([]);
        setClickedPokemonIds([]);
    }

    return (
        <div className='pokemons-container'>
            {pokemons.map((pokemon, index) => (
                <div key={index} className='pokemon' id={pokemon.name} onClick={(e) => handleCardClick(e, pokemon)}>
                    <img src={pokemon.img} alt={pokemon.name} />
                    <span>{pokemon.name}</span>
                </div>
            ))}
        </div>
      )
}

export default Pokemons;