import React from "react";
import Pokemons from './data'

class Pokemon extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Pokedex</h1>
        <div className='section-main'>
          {
            Pokemons.map((pokemon) => (
              <div className='section-container'>
                <p>{pokemon.name}</p>
                <img src={pokemon.image} />
                <p>{pokemon.type}</p>
                <p>Peso: {pokemon.averageWeight.value}
                  {pokemon.averageWeight.measurementUnit}</p>
              </div>
            ))
          }
        </div>
      </>
    )
  }
}
export default Pokemon;