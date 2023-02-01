

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/
import React, { useState, useEffect } from 'react';
import Pokemon from './components/Pokemon'

function App() {
  const [pokeList, setPokelist] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
      // console.log(data.results)
      setPokelist(data.results)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h1>consumir api pokémon</h1>
      {pokeList.map(pokemon => <Pokemon data={pokemon} key={pokemon.name}/>)}
    </>
  );
}

export default App;
