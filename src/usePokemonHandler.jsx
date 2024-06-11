function usePokemonHandler() {
    const availablePokemonAmount = 151; //gen 1 for now, give option to pick more generations.
    const getPokemon = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const {sprites, name} = await res.json();
        const img = sprites['front_default'];
        return {img, name};
    }

    const createRandomPokemonList = async(amount) => {
        let pokemonIdList = [];
        for(let i = 0; i < amount; i++) {
            let randomId = Math.floor(Math.random() * availablePokemonAmount) + 1;
            if (pokemonIdList.includes(randomId)) {
                continue;
            } else {
                pokemonIdList.push(randomId);
            }
        }

        return await Promise.all(pokemonIdList.map(getPokemon))
    }

    return {createRandomPokemonList};
}

export default usePokemonHandler;