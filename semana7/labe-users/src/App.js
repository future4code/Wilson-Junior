import React, { useState, useEffect } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import axios from 'axios';
import styled from 'styled-components';


const Sticker = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  margin: auto;
  font-size:17px;
  width: 300px;
`

function App() {

  const [userList, setUserList] = useState([])

  const [inputName, setInputName] = useState('');

  function handleName(newName) {
    setInputName(newName);
  }

  const [inputEmail, setInputEmail] = useState('');

  function handleEmail(newEmail) {
    setInputEmail(newEmail);
  }

  const showAllUsers = () => {
    
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "wilson-ferreira-epps"
          }
        }
      )
      .then((res) => {
        setUserList(res.data)
        alert('Tudo certo!')
      })
      .catch((error) => {
        alert('Não foi possível mostrar a lista')
      });
  }

  const createUser = () => {
    const body = {
      name: inputName,
      email: inputEmail
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "wilson-ferreira-epps"
          }
        }
      )
      .then((res) => {
        setInputName("");
        setInputEmail("");
        alert('Uhulll');
      })
      .catch((error) => {
        alert('Não foi possível salvar seus dados')
      });
  }

  const [pageList, setPageList] = useState(false)

    useEffect(() => {
      if (pageList === true){
      showAllUsers()
      }
    }, [pageList]); 
  
  let changeToPageList = () => {
    setPageList(true);
  }

  let returnToHome = () => {
    setPageList(false)
  }

  const deleteUser = (id) => {
    console.log(id)
    axios
    .delete(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", 
      {
        headers: {
          Authorization: "wilson-ferreira-epps"
        }
      },
    )  
    .then((res) => {
      console.log('Usuário deletado')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  
  // Pega os nomes
  const nameList = userList.map(n => {
      console.log(n.id)
    return (
      <Sticker key={n.id}>
        {n.name}
        <button  onClick={() => deleteUser(n.id)}>x</button>
      </Sticker>
    ) 
  });
 
  if (pageList === false) {

    return (
      <div className="App">

        <h1> Epps - Cadastro </h1>

        <p>
          <InputBox
            frase="Digite seu nome"
            onChangeText={handleName}
          />
        </p>

        <p>
          <InputBox
            frase="Digite seu e-mail"
            onChangeText={handleEmail}
          />
        </p>

        <button onClick={createUser}>Adicionar</button>
        <p>
          <button onClick={changeToPageList}>Mostrar Usuários</button>
        </p>

      </div>
    );
  } else {

    return (
      <div className="App">
       
         {nameList}
      
        <p>
          <button onClick={returnToHome}>Voltar</button>
        </p>
      </div>
    )
  };
}

export default App;
