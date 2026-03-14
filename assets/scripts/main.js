import '../styles/style.css';
import { getPokemonData, getPokemonData2 } from './modules/HttpRequest';
import { extractData, showData, showData2 } from './modules/PokemonData';

const getInputName = (e) => {
  const form = new FormData(e.target);
  const pokeName = form.get("pokeName").toLowerCase();
  return pokeName;
}

const getInputType = (e) => {
  const form = new FormData(e.target);
  const pokeType = form.get("pokeType").toLowerCase();
  return pokeType;
}

const submitHandler = async (e) => {
  e.preventDefault();
  const inputName = getInputName(e);
  const pokemonData = await getPokemonData(inputName);
  const extractedData = extractData(pokemonData)
  showData(extractedData, 'name');
}

const submitHandlerRandom = async (e) => {
  e.preventDefault();
  // ランダムなIDを生成
  const id = Math.floor(Math.random() * 151) + 1;
  const pokemonData = await getPokemonData(id.toString());
  const extractedRandomData = extractData(pokemonData);
  showData(extractedRandomData, 'random');
}

const submitHandlerType = async (e) => {
  e.preventDefault();
  const inputType = getInputType(e);
  const pokemonData = await getPokemonData2(inputType);
  const extractedData = pokemonData.map(p => extractData(p));
  showData2(extractedData);
}

document.querySelector("#js-form").addEventListener("submit", (e) => submitHandler(e));

document.querySelector('#random').addEventListener("submit", (e) => submitHandlerRandom(e));

document.querySelector('#type-form').addEventListener("submit", (e) => submitHandlerType(e));