import React from 'react';

const PokemonDetail = (props) => {
  if (!props.pokemon) {
    return null;
  }

  const types = props.pokemon.types.map((type) =>
    <li className={type.type.name} key={type.slot}>Type {type.slot}: {type.type.name}</li>
  );

  function handleButtonClick(event) {
    props.onPokemonFavourited(props.pokemon);
  }

  return (
  <div className="pokemon-card">
    <h2>{props.pokemon.name}</h2>
      <img src={props.pokemon.sprites.front_default}/>
      <img src={props.pokemon.sprites.front_shiny}/>
    <ul className="types">{types.reverse()}</ul>
    <button onClick={handleButtonClick} type="button" name="fav-button">Add To Favourites!</button>
  </div>
)
}

export default PokemonDetail;
