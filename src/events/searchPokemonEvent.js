import searchPokemonHandler from "../handlers/searchPokemonHandler.js";
import dom from "../dom.js";

const searchPokemonEvent = () => {
    dom.searchButton.addEventListener('click', searchPokemonHandler);
    dom.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchPokemonHandler();
        }
    });
}

export default searchPokemonEvent;