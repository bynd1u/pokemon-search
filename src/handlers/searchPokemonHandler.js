import getPokemon from "../api/getPokemon.js";
import dom from "../dom.js";
import updatePokemon from "../components/updatePokemon.js";
import data from "../data.js";

const searchPokemonHandler = async () => {
    if (dom.input.value) {
        const searchValue = dom.input.value;
        data.pokemon = await getPokemon(searchValue);
        updatePokemon(data.pokemon);
    } else {
        alert("Please enter a Pokemon ID!");
    }
}

export default searchPokemonHandler;