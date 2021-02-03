import React, {useState, useEffect} from 'react';
import './App.css';
import Container from './components/Container/styled';
import Header from './components/Header/index';
import Card from './components/Card/index'
import Footer from './components/Footer/index'
import Matches from './components/Matches/index'
import axios from 'axios';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Wilson/'

function App() {
  
 // Variáveis
  const [Home, setHome] = useState (false)

  const [person, setPerson] = useState(undefined)

  const [match, setMatch] = useState()

  const [list, setList] = useState()

 // Requisições
 const getPerson = () => {
  axios 
  .get(baseURL+'person')
  .then(res => {
    setPerson(res.data.profile)
  })
  .catch(err => {
    console.log(err)
  });
 }

 const postMatch = () => {
    const body = {
      id: person.id,
      choice: match
    }
    axios 
    .post(baseURL+'choose-person', body)
    .then(res => {
      getPerson();
      setMatch();
    })
    .catch(err => {
      console.log(err)
    });
  };

  const getMactches = () => {
    axios 
    .get(baseURL+'matches')
    .then(res => {
      setList(res.data)
    })
    .catch(err => {
      console.log(err)
    });
   }

  const refreshMatch = () =>{
    axios 
    .put(baseURL+'clear')
    .then(res => {
      window.confirm("Quer apagar seus matches?")
    })
    .catch(err => {
      console.log(err)
    });
  }

 //Ciclos 
  useEffect (() => {
    if (person !== undefined) {
      postMatch()

    }
    else if (person === undefined) {
      getPerson()
    }
  }, [match])

  // Outras funções
    const handleHome = () => {
      setHome(true);
      getMactches();
    }

    const handleBackHome = () => {
      setHome(false);
    }   
   
    const like = () => {
      setMatch (true)
    };

    const unlike = () => {
      setMatch (false)
    };

  if (Home === false) {
    return (
    <>
     <Container>
       <Header
          change = {handleHome}
          refresh = {refreshMatch}
       />
       { person &&
       <Card
          person = {person}
       />
       }
       <Footer
          person = {person}
          like = {like}
          unlike = {unlike}
       />
     </Container>
    <div className="container-button">
      <button className="button" type="submit" onClick={refreshMatch}>Reset</button>
    </div>
    </>
    );
  }
  else {
    return(
    <Container>
      <Header
        change ={handleBackHome}
      />
      <Matches
        person = {person}
        list = {list}
      />
    </Container>
    )
  } 
}

export default App;
