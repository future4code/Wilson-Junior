import React, {useState, useEffect} from 'react';
import './App.css';
import Container from './components/Container/styled';
import Header from './components/Header/index';
import Card from './components/Card/index'
import Footer from './components/Footer/index'
import axios from 'axios';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Wilson/'

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

    // useEffect(()=> {
    //   getPerson();
    // }, []);

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

  // Lógica do Footer
    const [match, setMatch] = useState('')
      useEffect (() => {
        if (person) {
          postMatch()
          getPerson()
        }      
      }, [match])

    const [list, setList] = useState()
  
    const postMatch = () => {
      const body = {
        id: person.id,
        choice: match
      }
        axios 
        .post(baseURL+'choose-person', body)
        .then(res => {
          setList(res.data)
          setMatch('')
        })
        .catch(err => {
          console.log(err)
        });
    };

    const like = () => {
      setMatch (true)
    };

    const unlike = () => {
      setMatch (false)
    };
   
    const refreshMatch = () =>{
      axios 
      .put(baseURL+'clear')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      });
    } 

    
  if (Home === false) {
    return (
    <>
      <Container>
        <Header
          change = {handleHome}
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
            <button type="submit" onClick={refreshMatch}>Reset</button>
      </Container>
      
    </>
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
