export const extractData = (pokemonData) => {
  const id = pokemonData.id;
  const name = pokemonData.name;
  const img = pokemonData.sprites.front_default
  const types = [];
  pokemonData.types.forEach(typeItem => {
    types.push(typeItem.type.name);
  });
  return {id, name, img, types}
}

export const showData = (data, type) => {
  const htmlData = `<dl>
    <dt>Name: ${data.name}</dt>
    <dd><img src="${data.img}" alt=""></dd>
    <dd>ID: ${data.id}</dd>
    <dt>Types: ${data.types.join(", ")}</dd>
  </dl>`
  if(type === 'name'){
    document.querySelector("#js-result").innerHTML = htmlData;
  }else{
    document.querySelector("#random-result").innerHTML = htmlData;
  }
}

export const showData2 = (data) => {
  let htmlData = "";

  data.forEach(p => {
    htmlData += `
      <dl>
        <dt>${p.name}</dt>
        <dd><img src="${p.img}"></dd
        <dd>ID:${p.id}</dd>
      </dl>
    `;
  });

  document.querySelector("#type-result").innerHTML = htmlData;

}