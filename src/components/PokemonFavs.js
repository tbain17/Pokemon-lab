import React from 'react';
import PokemonDetail from '../components/PokemonDetail';

const PokemonFavs = ({favs}) => {
  if (!favs.length) {
    return null;
  }

  const favourites = favs.map((favPokemon) => {

  const types = favPokemon.types.map((type) =>
    <li className={type.type.name} key={type.slot}>Type {type.slot}: {type.type.name}</li>
  )


  return (
  <div className="pokemon-card" id="fav">
    <h2>{favPokemon.name}</h2>
      <img src={favPokemon.sprites.front_default}/>
      <img src={favPokemon.sprites.front_shiny}/>
    <ul className="types">{types.reverse()}</ul>
  </div>
)
});
return favourites;
}

export default PokemonFavs;
