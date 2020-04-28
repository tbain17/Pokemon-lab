import React from 'react';

const PokemonDetail = ({pokemon}) => {
  if (!pokemon) {
    return null;
  }

  const types = pokemon.types.map((type) =>
    <li key={type.slot}>Type {type.slot}: {type.type.name}</li>
  );

  return (
  <div className="pokemon-card">
    <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default}/>

      <img src={pokemon.sprites.front_shiny}/>
    <ul className="types">{types.reverse()}</ul>
  </div>
)


}

export default PokemonDetail;
