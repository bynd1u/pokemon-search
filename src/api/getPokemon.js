
const getPokemon = async (name) => {
    try {
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name}`);
        const pokemon = await response.json();
    
        return {
            id: pokemon.id,
            name: pokemon.name,
            weight: pokemon.weight,
            height: pokemon.height,
            types: pokemon.types,
            stats: {
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                specialAttack: pokemon.stats[3].base_stat,
                specialDefense: pokemon.stats[4].base_stat,
                speed: pokemon.stats[5].base_stat,
            },
            image: pokemon.sprites.front_default,
        };
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        throw error;
    }
};

export default getPokemon;