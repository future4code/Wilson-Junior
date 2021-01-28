import React, {useState, useEffect} from 'react';
import './App.css';
import Container from './components/Container/styled';
import Header from './components/Header/index';
import Card from './components/Card/index'
import Footer from './components/Footer/index'
import axios from 'axios';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/'

function App() {
  // Muda as páginas
  const [Home, setHome] = useState (false)

    const handleHome = () => {
      setHome(true);
    }

    const handleBackHome = () => {
      setHome(false);
    }
  // Pega pessoa na API
  const [person, setPerson] = useState()

    useEffect(()=> {
      getPerson();
    }, []);

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

  if (Home === false) {
    return (
      <Container>
        <Header
          change = {handleHome}
        />
    
        <Card
          person = {person}
        />
        <Footer
          person = {person}
        />
      </Container>
    );
  }
  else {
    return(
    <Container>
      <Header
        change ={handleBackHome}
      />
    </Container>
    )
  }
  
}

export default App;
