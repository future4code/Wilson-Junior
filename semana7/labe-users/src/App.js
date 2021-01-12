import React, {useState} from 'react';
import styled from 'styled-components';
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
            headers:{
              Authorization: "wilson-ferreira-epps"
            }
          }
        )
        .then((res) => {
          setUserList(res.data)
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
            headers:{
              Authorization: "wilson-ferreira-epps"
            }
          }
        )
        .then((res) => {
          setInputName("");
          setInputEmail("");
          alert('Uhulll')
        })
        .catch((error) => {
          console.log(body)
          alert('Não foi possível salvar seus dados')
        });
    }
    
    console.log(userList)

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
      <button onClick={showAllUsers}>Mostrar Usuários</button>
      </p>

      <p>
      
      </p>
    
    </div>
  );
}

export default App;
