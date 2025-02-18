import data from "./data.js";
import updatePokemon from "./components/updatePokemon.js";
import searchPokemonEvent from "./events/searchPokemonEvent.js";
import validateInputEvent from "./events/validateInputEvent.js";

updatePokemon(data.pokemon);
searchPokemonEvent();
validateInputEvent();

