import usePokemonHandler from '../usePokemonHandler'
import { useState, useEffect } from 'react'

function Pokemons() {
    const { createRandomPokemonList } = usePokemonHandler();
    const [pokemons, setpokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const pokemonList = await createRandomPokemonList(3);
            setpokemons(pokemonList);
        }
        getPokemons();
    }, []);

    return (
        <div>
            {pokemons.map((pokemon, index) => (
                <div key={index}>
                    <img src={pokemon.img} alt={pokemon.name} />
                    <span>{pokemon.name}</span>
                </div>
            ))}
        </div>
      )
}

export default Pokemons;