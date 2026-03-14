import '../styles/style.css';
import { getPokemonData } from './modules/HttpRequest';
import { extractData, showData } from './modules/PokemonData';

const getInputName = (e) => {
  const form = new FormData(e.target);
  const pokeName = form.get("pokeName").toLowerCase();
  return pokeName;
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
  console.log(id);
  const pokemonData = await getPokemonData(id.toString());
  const extractedRandomData = extractData(pokemonData);
  showData(extractedRandomData, 'random');
}

document.querySelector("#js-form").addEventListener("submit", (e) => submitHandler(e));

document.querySelector('#random').addEventListener("submit", (e) => submitHandlerRandom(e));