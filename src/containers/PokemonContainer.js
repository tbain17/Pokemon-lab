import React, {Component} from 'react';
import PokemonSelector from '../components/PokemonSelector';
import PokemonDetail from '../components/PokemonDetail';
import PokemonFavs from '../components/PokemonFavs';

class PokemonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      selectedPokemonDetails: null,
      favourites: []
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    this.addToFavs = this.addToFavs.bind(this);
  }

  componentDidMount(){
    const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    fetch (pokemonUrl)
    .then(res => res.json())
    .then(pokemons => this.setState({pokemons: pokemons.results }))
    .catch(err => console.error)
  }

  handlePokemonSelected(url) {
    fetch(url)
    .then(res => res.json())
    .then(details => this.setState({selectedPokemonDetails: details}))
    .catch(err => console.error)
  }

  addToFavs(favourite) {
    this.setState((prevState) => {
        return {
          favourites: [...prevState.favourites, favourite]
      };
    });
  }

  render(){
    return (
      <div className="pokemon-container">
        <h2>Pokemon!</h2>
        <h3>Choose a Pokemon</h3>
        <PokemonSelector
          pokemons={this.state.pokemons}
          onPokemonSelected={this.handlePokemonSelected}
        />
        <PokemonDetail pokemon={this.state.selectedPokemonDetails}
        onPokemonFavourited={this.addToFavs}
        />
        <h3>Favourites</h3>
        <PokemonFavs favs={this.state.favourites}
        />
      </div>
    );
  }
}

export default PokemonContainer;
