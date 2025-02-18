import dom from "../dom.js"

const updatePokemon = (data) => {
    dom.image.src = data.image;
    dom.name.innerText = data.name;
    dom.id.innerText = data.id;
    dom.weight.innerText = data.weight;
    dom.height.innerText = data.height;    
    dom.types.innerText = data.types.map(type => type.type.name).join(", ");
    dom.hp.innerText = data.stats.hp;
    dom.attack.innerText = data.stats.attack;
    dom.defense.innerText = data.stats.defense;
    dom.specialAttack.innerText = data.stats.specialAttack;
    dom.specialDefense.innerText = data.stats.specialDefense;
    dom.speed.innerText = data.stats.speed;
}

export default updatePokemon;