import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

    state = {
      userPost: [
        {
          nome: 'Ester',
          foto: 'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150'
        },
    
        {
          nome:'Davi ',
          foto:'https://picsum.photos/50/51',
          fotoPost:'https://picsum.photos/200/151'
        },
    
        {
          nome:'Theo',
          foto:'https://picsum.photos/50/52',
          fotoPost:'https://picsum.photos/200/152'
        }
      ],

      inputNome:"",
      inputFoto:"",
      inputFotoPost:""

    };

  
    // Cria o novo array de posts com os valores capturados dos inputs
    adicionaPost = () => {
      
      const inputPost = {
        nome: this.state.inputNome,
      
        foto: this.state.inputFoto,
      
        fotoPost: this.state.inputFotoPost
      };
      
      const newPost = [...this.state.userPost, inputPost];
      
      this.setState({ userPost: newPost });
      
    };

    // Funções que são aplicadas quando digitam nos campos de input
    onChangeInputNome = (event) => {
      
      this.setState({ inputNome: event.target.value });
    };
  
    onChangeInputFoto = (event) => {
      
      this.setState({ inputFoto: event.target.value });
    };

    onChangeInputFotoPost = (event) => {
      
      this.setState({ inputFotoPost: event.target.value });
    };
 

render() {
  
  const userPost = this.state.userPost.map((post) => {
    return  <Post
            nome={post.nome}
            foto={post.foto}
            fotoPost={post.fotoPost}
          />
  })

  return (
    <div className={'app-container'}>
      <div className={"novo-post"}>
        <input
          value={this.state.inputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
          />
          
        <input
          value={this.state.inputFoto}
          type= "url"
          onChange={this.onChangeInputFoto}
          placeholder={"Link de sua foto"}
          />

        <input
          value={this.state.inputFotoPost}
          type= "url"
          onChange={this.onChangeInputFotoPost}
          placeholder={"Link da foto do Post"}
          />

        <p><button onClick={this.adicionaPost}>Adicionar</button></p>
      </div>

      {userPost}        

    </div>
      
    );
  }
}

export default App;
