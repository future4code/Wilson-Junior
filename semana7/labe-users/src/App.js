import React, { useState, useEffect } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import axios from 'axios';

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

  console.log(userList)

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

  // Pega os nomes
  const nameList = userList.map(n => {
    return <p>{n.name}</p>
  })

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
        <p>
         {nameList}
        </p>
        <p>
          <button onClick={returnToHome}>Voltar</button>
        </p>
      </div>
    )
  };
}

export default App;
