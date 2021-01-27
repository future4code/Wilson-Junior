import React, { useState, useEffect } from "react";
import axios from "axios";


const PokeCard = props => {
  
  const [pokemon, setPokemon] = useState ({});
  
  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`
      )
      .then(response => {
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.pokemon]);

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}

export default PokeCard;
