import React from 'react';

const PokemonDetail = ({pokemon}) => {
  if (!pokemon) {
    return null;
  }
  for (const type in pokemon.types {
    return
    <div>
    {type.name}
    </div>
  })
//   if (pokemon.types[1]) {
//   return (
//     <div className="pokemon-card">
//       <h2>
//         {pokemon.name}
//       </h2>
//       <img src={pokemon.sprites.front_default}/>
//       <h3>
//         Type 1:{pokemon.types[0].type.name}
//       </h3>
//       <h3>
//         Type 2:{pokemon.types[1].type.name}
//       </h3>
//     </div>
//   )
// }
//   if (!pokemon.types[1]) {
//     return(
//       <div className="pokemon-card">
//         <h2>
//           {pokemon.name}
//         </h2>
//         <img src={pokemon.sprites.front_default}/>
//         <h3>
//           Type:{pokemon.types[0].type.name}
//         </h3>
//       </div>
//     )
//   }
}

export default PokemonDetail;
