import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  timeout: 1000,
});

// instance
export const getPokemonData = async (pokeName) => {
  try {
    const response = await instance.get(pokeName); //fixed
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Pokemon not found");
  }
}

const instance2 = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/type/',
  timeout: 1000,
});

// instance2
export const getPokemonData2 = async (pokeType) => {
  try {
    const response = await instance2.get(pokeType);
    const pokemonArray = response.data.pokemon;
    const result = [];
    const limit = 5;
    for (const item of pokemonArray.slice(0, limit)) {
      try {
        const detail = await instance.get(item.pokemon.name);
        result.push(detail.data);
      } catch(error) {
        console.error(error);
      }
    }
    return result;
  } catch (error) {
    console.error(error);
    alert("This pokemon type is invalid");
  }
}
