
import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    PokeList:[],
    PokeImage: '',
    PokeAbilities:[]
  };

  componentDidMount () {
    this.getPokeList();
  };

  getPokeList = () => {
    axios
     .get('https://pokeapi.co/api/v2/pokemon?limit=151')
     
     .then((res) => 
     this.setState({PokeList: res.data.results})
     )
     
     .catch((err) => console.log(err)
     );
  };
    
  getPokeAbilities = (name) => {    
    axios
     .get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
     
     .then((res) => 
     this.setState({PokeAbilities: res.data.abilities[0].ability.name})
     )
     
     .catch((err) => console.log(err)
     );
  };
 
  getPokeImage = (name) => {
    console.log(name)
    axios
     .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
     .then((res) => 
     this.setState ({PokeImage: res.data.sprites.front_default})
     )
    
     .catch((err) => console.log(err)
     );
  }

  changeSelect = (e) => {
    const pokeName = e.target.value
    this.getPokeImage(pokeName)
    this.getPokeAbilities(pokeName);
  }

  render() {
    console.log(this.state.PokeList)
    console.log(this.state.PokeAbilities)
        return (
      <div className="App">

        <h1>POKEDEX</h1>
        
        <div className="container">
          <div className="container-box">
            <div>
              <select className="list" onChange={this.changeSelect}>
                <option  value={""}>
                  Escolha um Pokemon
                </option>
                {this.state.PokeList.map((poke => {
                  return (
                    <option key={poke.name} value={poke.name}>
                      {poke.name}
                    </option>
                  )
                }))}
              </select>
            </div>
            <div className="poke-card">
             
              {this.state.PokeImage && <img alt={'imagem_poke'} src={this.state.PokeImage}/>}
              
              {this.state.PokeAbilities}
            </div>
     

          </div>
            
        </div>
      </div>
    );
  }
}

export default App;