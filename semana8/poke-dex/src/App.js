import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import PokeCard from "./components/PokeCard";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

const App = props => {

  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    getPokemon();
  }, []);
  
  const getPokemon = () => { 
    axios
      .get(baseUrl)
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const changePokeName = event => {
    setPokeName(event.target.value);
  };

  return (
      <div className="App">
        <div className="Objeto">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
            {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        </div>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }

export default App;

