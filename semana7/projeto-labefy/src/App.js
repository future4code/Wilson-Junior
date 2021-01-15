import React, { useState, useEffect } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import axios from 'axios';
import styled from 'styled-components';


const Sticker = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  background-color: pink;
  border-radius: 5px;
  margin: auto;
  font-size:17px;
  width: 300px;
`

function App() {
  
  // States 
  const [userList, setUserList] = useState([]);

  const [inputName, setInputName] = useState('');

  const [inputSearch, setInputSearch] = useState('');

  const [searchedPlayList, setsearchedPlayList] = useState('');

  const [inputSong, setInputSong] = useState('');

  const [inputArtist, setInputArtist] = useState('');

  const [inputUrl, setInputUrl] = useState('');

  const [pageList, setPageList] = useState(false)

 // Functions HANDLE Inputs
  function handleName(newName) {
  setInputName(newName);
  }

  function handleSearch(newSearch) {
  setInputSearch(newSearch);
  }
 
  function handleSong(newTrack) {
    setInputSong(newTrack);
  }

  function handleArtist(newArtist) {
    setInputArtist(newArtist)
  }

  function handleUrl(newUrl) {
    setInputUrl(newUrl);
  }

 // Functions EFFECTS
    useEffect(() => {
      if (pageList === true){
      getAllPlayList()
      }
    }, [pageList]);

 // Functions BOOLEANS
  let changeToPageList = () => {
    setPageList(true);
  }

  let returnToHome = () => {
    setPageList(false)
  }

 // Functions AXIOS
  const getAllPlayList = () => {
    
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "wilson-ferreira-epps"
          }
        }
      )
      .then((res) => {
        setUserList(res.data.result.list)
      })
      .catch((error) => {
        alert('Não foi possível mostrar suas Playlists')
      });
  }

  const searchPlayList = (string) => {
    
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${string}`,
        {
          headers: {
            Authorization: "wilson-ferreira-epps"
          }
        }
      )
      .then((res) => {
        setsearchedPlayList(res.data.result.playlist[0].name)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const createPlayList = () => {
    const body = {
      name: inputName,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "wilson-ferreira-epps"
          }
        }
      )
      .then((res) => {
        setInputName("");
        alert('PlayList criada com sucesso');
      })
      .catch((error) => {
        alert('Não foi possível criar sua PlayList')
      });
  }

  const deletePlayList = (id) => {
    axios
     .delete(
       `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, 
       {
         headers: {
           Authorization: "wilson-ferreira-epps"
         }
       },
     )  
     .then((res) => {
       alert('PlayList deletada com sucesso!')
       getAllPlayList() 
     })
     .catch((error) => {
       console.log(error)
     });
 }

 // SONGS
   const addTrackToPlaylist = (d) => {
    const body = {
      name: inputSong,
      artist: inputArtist,
      url: inputUrl
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${d}/tracks`,
        body,
        {
          headers: {
            Authorization: "wilson-ferreira-epps"
          }
        }
      )
      .then((res) => {
        alert('Música adicionada com sucesso!!!');
      })
      .catch((err) => {
        alert('Não foi possível adicionar sua música.')
      });
  }

  const getPlaylistTracks = (playlistId) => {
    
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks
        `,
        {
          headers: {
            Authorization: "wilson-ferreira-epps"
          }
        }
      )
      .then((res) => {
        alert(res.data.result.tracks[0].name)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  
  // Functions ARRAY
  const mapPlayList = userList.map(m => {
    return (
    <>   
        <div className="card-container" key={m.id}>
          {m.name}
          <button  onClick={() => getPlaylistTracks(m.id)}>Mostrar conteúdo da playlist</button>
    
          <InputBox
          frase="Digite o nome da música"
          onChangeText={handleSong}
          />
          <InputBox
          frase="Digite do artista"
          onChangeText={handleArtist}
          />
          <InputBox
          frase="Digite a url"
          onChangeText={handleUrl}
          />
          <button  onClick={() => addTrackToPlaylist(m.id)}>Adicionar Música</button>
        
          <button  onClick={() => deletePlayList(m.id)}>Deletar</button>
        </div>
    </>
    ) 
  });
 
  if (pageList === false) {

    return (
      <div className="App">

        <h1>Labefy</h1>

        <p>
          Buscar PlayList: 
          <InputBox
            frase="Digite o nome da playlist que deseja buscar"
            onChangeText={handleSearch}
          />
          <button  onClick={() => {searchPlayList(inputSearch)}}>Buscar</button> 
        </p>
        <p>
         {searchedPlayList}
        </p>
        

        <p>
          Adicionar PlayList
          <InputBox
            frase="Digite a playlist que deseja criar"
            onChangeText={handleName}
          />
          <button onClick={createPlayList}>Adicionar</button>
        </p>

        <p>
          <button onClick={changeToPageList}>Mostrar todas as Playlists</button>
        </p>

      </div>
    );
  } else {

    return (
      <div className="App">
        <h1>Labefy</h1>
         
         {mapPlayList}
      
        <p>
          <button onClick={returnToHome}>Voltar</button>
        </p>
      </div>
    )
  };
}

export default App;
