import GlobalStateContext from './Contexts/GlobalStateContext'
import React,{useState} from 'react'
import axios from 'axios' 

const GlobalState = (props) => {

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";
    
  const [pokeList, setPokeList] = useState([]);
  const [pokeData, setPokeData] = useState ([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokedexData, setPokedexData] = useState();
  const [pokeDetails, setPokeDetails] = useState();
  const [pokeDataDetails, setPokeDataDetails] = useState();
  const [page, setPage] = useState();

const pokeImg = []
const pokedexImg = []

  const getPokemon = () => { 
    axios
      .get(baseUrl)
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err)
      });
  };

  const getPokeData = () => {
    pokeList.map((pokemon) => {
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            .then(res => {
                pokeImg.push(res.data)
                if (pokeImg.length === 20){
                setPokeData(pokeImg)}
            })
            .catch(err => {
                console.log(err)
            });
        })
    }

    const getPokedexData = () => {
    pokedex.map((pokemon) => {
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            .then(res => {
                pokedexImg.push(res.data)
                if (pokedexImg.length === pokedex.length){
                setPokedexData(pokedexImg)
                }
            })
            .catch(err => {
                console.log(err)
            });
        })
    }

    const getPokeDataDetails = () => {
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon/${pokeDetails.name}`
            )
            .then(res => {
                setPokeDataDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }

    const states = {pokeList, pokeData, pokedex, pokedexData, pokeDetails, pokeDataDetails, page}
    const setters = {setPokeList, setPokeData, setPokedex, setPokedexData, setPokeDetails, setPokeDataDetails, setPage}
    const requests = {getPokemon, getPokeData, getPokedexData, getPokeDataDetails}

    const data = { states, setters, requests };

    return (
        <GlobalStateContext.Provider value={data}>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;