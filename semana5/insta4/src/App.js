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

  

    adicionaPost = () => {
      // Variável do novo post
      const inputPost = {
      // Capta o valor do inputNome
        nome: this.state.inputNome,
      // Capta o valor do inputFoto
        foto: this.state.inputFoto,
      // Capta o valor do inputFatoPost
        fotoPost: this.state.inputFotoPost
      };

      // Faz a cópia do array principal e cria um elemento novo
      const newPost = [...this.state.userPost, inputPost];
 

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
      {userPost}        
      </div>
    );
  }
}

export default App;
